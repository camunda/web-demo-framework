# Web demo framework

Runnable, editable versions of Camunda's documentation examples — in the
browser, with no cluster and no API key.

An example is a **manifest**: a BPMN model, the code behind each element, and an
optional LLM connection. One runner serves all of them. The real
[nanobpm](https://www.npmjs.com/package/@nanobpm/engine-wasm) engine executes the
BPMN on WebAssembly, so the token you watch move is a real process instance.

The intent is additive: each page here is something an existing example on
camunda.com can link to, so a reader can run the thing they just read about,
change the code, and run it again.

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:5174> and press **▶ Run**.

> **Status: proof of concept.** Two examples, one runner, verified end to end
> including against a real local LLM. Known gaps are listed at the bottom — read
> them before building on this.

## The examples

Deliberately different shapes, to prove the runner isn't built around any one of
them.

| Example | Shape |
| --- | --- |
| Seed export compliance agent | AI Agent ad-hoc sub-process, four connector-backed tools, a gateway on the agent's decision, a human review task, two forms |
| Order process | Three plain service tasks and a gateway. No agent, no forms, no human step |
| Read a number plate from a photo | A photo goes into the run, an in-browser **vision** model reads the number plate on the reader's own GPU, a human confirms or corrects it on a pre-filled form, and the process records the result. The model recommends; the process governs — the same shape as the compliance agent, with a vision model in the recommending seat. Offline it falls back to a deterministic scripted reading |

The runner renders no brain panel and no tool manifest for the plain order
process — it notices the model has no agent.

## What the framework reads off the diagram

`src/framework/model.ts` parses the BPMN once, and the rest follows. An example
author never restates any of this in code:

- **Tools** — the ad-hoc sub-process's children, with their `name` and
  `<bpmn:documentation>` as the description shown to the model. A tool can be a
  job-typed element (service/script task) **or a compound tool** — an embedded
  `bpmn:subProcess` or `bpmn:callActivity` used as an ad-hoc tool. The model
  selects a compound tool the same way; the engine drives its inner flow to
  completion, so it needs no job handler of its own.
- **Tool arguments** — every `fromAi(toolCall.x, "…", "string")` in a tool's
  input mappings becomes a typed argument in the prompt.
- **Prompts and turn budget** — `data.systemPrompt.prompt`,
  `data.userPrompt.prompt` and `data.limits.maxModelCalls` on the AI Agent
  connector.
- **Job types** — `zeebe:taskDefinition`, plus the engine's rule that a
  `scriptTask` gets a job typed as its own element id.
- **Forms** — the start event's and each user task's `formId`.

An example manifest (`src/examples/*/index.ts`) supplies only what the diagram
can't: handler source per element, a seed payload, optional scenarios, and a
deterministic stand-in for the LLM.

## The brains

The three text brains satisfy one `ChatFn`, so the agent loop can't tell them
apart; the vision brain adds an image→text seam beside them.

| Brain | What it is | Where it works |
| --- | --- | --- |
| **Scripted** | No model. The example's editable stand-in decides. | Always, offline |
| **In-browser** | A quantised model on WebGPU via WebLLM, lazily imported so its bundle only loads on opt-in. | Chrome/Edge/Safari 17+ with WebGPU — **including from a hosted page** |
| **Endpoint** | Any OpenAI-compatible server; a local Ollama by default. | **Only when the page itself is served from localhost.** Ollama's CORS allowlist covers localhost origins only, so a tunnelled or deployed page is refused. The app detects this and says so instead of blaming the server |
| **In-browser vision** | Florence-2 (an image→text model) on WebGPU via `@huggingface/transformers`, lazily imported like the WebLLM brain so its multi-hundred-MB weights only download on opt-in (the panel shows the size label first). | Chrome/Edge/Safari 17+ with WebGPU — **including from a hosted page**. WebGPU absent → falls back to a deterministic **scripted-vision** reading with a clear reason, so a reader never lands on a brain that can't connect |

That last-but-one row decides what a public page defaults to for text: **in-browser
is the only live brain that survives being hosted.** The in-browser vision brain
has the same property — a hosted https page reads a photo with no server and no
API key — and, WebGPU absent, degrades to the scripted reading rather than
failing. See [`docs/vision-brain.md`](docs/vision-brain.md) for the vision seam,
the image-into-a-run plumbing, and the falsifiability probe/eval.

The brain clients are adapted from `camunda/seed-export-compliance-agent-demo`;
the generic agent loop over them (`src/framework/agent/liveAgent.ts`) is new.

## Two properties worth keeping

**The model recommends; the process governs.** The live agent only activates
tools and passes arguments. Decisions are made by handler code and the gateways
after the agent — so in the compliance example, `RecordComplianceDecision`
computes the decision from the score's parity and *logs* when the model's
recommendation disagreed. A model insisting a flagged shipment is fine cannot
clear it.

**Tool names are matched exactly.** No fuzzy correction, no falling back to
"run everything". An invented name activates nothing and is logged as a
hallucination. When the model asks for a tool that doesn't exist, the run says
so, activates nothing, completes the agent — and the process routes the shipment
to a human, because nothing ever set a decision.

## What a real small model actually does

Measured against **Ollama + llama3.2:3b**, endpoint brain, compliance example.

| Run | Result |
| --- | --- |
| Cleared scenario (TP53 → Brazil) | All four tools, correct arguments, `complianceScore: 12`, cleared, completed |
| Flagged scenario (BRCA1 → Germany) | Marker and country correct — but `intA: 4` for `BRCA1`, which is five characters. Score 10, even, **cleared**. It should have been flagged |

Two prompt defects the real model exposed, both since fixed:

- The tool list was formatted `- id: VerifyGeneticMarker`, and the model replied
  `{"tool": "id: VerifyGeneticMarker"}` — the label became part of the name.
  Exact matching refused it, correctly. Names are now presented bare, and the
  response format is shown using a real tool name from the diagram.
- The authored FEEL user prompt reads *"Shipment notes:"* followed by the
  interpolated notes, but we only extract its string literals — so the model saw
  the label with nothing after it. On the flagged scenario it guessed
  `countryCode: "BR"` for Germany, anchoring on the "BR" in "BRCA1". A **Case
  data** section now carries the case's text variables directly under the
  authored prompt; the same run then produced `DE` → Berlin.

What remains is a capability limit, not a bug: this example asks the model to
count characters, and 3B models are unreliable at it. The process governs the
*decision*, but it cannot rescue a score computed from a bad argument — a wrong
clearance still looks confident. Either move the arithmetic into the tool
(leaving the model to sequence tools, which it does well), or keep the failure
visible and make the page about exactly that. **Open product decision.**

## Known gaps

- **Forms** use a small in-house renderer covering the field types these
  examples need. Templating is real FEEL, via
  [`feelin`](https://github.com/nikku/feelin) — the engine bpmn-io's form-js
  uses — so `{{if markerRecord = null then … else …}}` behaves as it would in
  Tasklist. Still missing: the other field types, validation, conditional
  visibility. Full `@bpmn-io/form-js` is the productionisation path.
- **No timers, messages, signals or DMN** are exercised. bojtos exposes
  `advanceTime`, `correlateMessage`, `broadcastSignal` and `decisionInstances`,
  so the plumbing exists — but probe every candidate example headlessly before
  building a page on it. A five-minute probe on the first example found three
  behaviours that would otherwise have surfaced as mysteries in the UI.
- **The model is read-only.** Editing the diagram is separate work: a Monaco XML
  tab is the cheap version, bpmn-js Modeler + `zeebe-bpmn-moddle` the real one.
  Without the moddle extension, bpmn-js silently drops every `zeebe:*` element on
  export and the model deploys but never runs a tool.
- **Editing a handler's default source doesn't hot-reload** into the editor —
  Monaco state initialises at mount, so a full reload is needed. Matters if
  these pages ever ship deep links or saved snippets.
- **Bundle is ~4 MB** before WebLLM. Wants code-splitting before it fronts a
  docs page.
- **`useBojtos` has no `completeUserTask`** (bojtos-react 0.4.0), so
  `src/framework/useExampleRun.ts` mirrors the hook over the same session and
  adds it. Delete that file if a later release exposes the command.

## Hosting and deployment

Deployment decisions (where this is hosted, how CI publishes it, repo
visibility, versioning against the docs, and who owns the docs-side links)
are recorded in [`docs/hosting-and-deployment.md`](docs/hosting-and-deployment.md).
`.github/workflows/deploy.yml` publishes `main` automatically on every push;
`.github/workflows/preview.yml` publishes a preview URL for every PR from the
same repository (previews are skipped for fork PRs; see the hosting doc).

## Adding an example

1. Drop the `.bpmn` (and any `.form` JSON) into `src/examples/<id>/`.
2. Write the manifest: handler source per element id, a seed, optional
   scenarios, and — for an agentic model — a scripted stand-in agent.
3. Register it in `src/examples/index.ts`.

Handlers receive `(job, { sleep, trace, text, num })` and return the variables to
merge, or throw to fail the job and raise an incident on the diagram.

## Layout

```
src/
  framework/
    model.ts          derives tools, arguments, prompts, job types, forms from the BPMN
    agent/liveAgent   generic LLM-driven AgentHandler for any agentic diagram
    brains/           scripted | in-browser WebGPU (WebLLM) | endpoint | in-browser vision (Florence-2)
    compile.ts        editor source → handlers, routed by element id
    useExampleRun.ts  engine session + dispatch + user tasks
    ui/               runner shell, brain panel, FEEL-aware form renderer
  examples/
    seed-export-compliance/
    order-process/
    plate-recognition/   read a number plate from a photo — the in-browser vision demo
```
