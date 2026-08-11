# Supported edits

A reader can change the BPMN model in the page — visually via the modeler tab
(a real bpmn-js `Modeler`) or the handler editors — and re-run it. This is a
plain-English map of what that's expected to do, keyed by edit, so a reader
isn't left guessing why Run is or isn't disabled.

Everything on this page is enforced by `src/framework/draft.ts`
(`buildDraftRunDefinition`), which builds an atomic "draft run definition" —
the parsed model, every handler and form resolved against what the example
actually supplies, and the diagnostics that follow. **Run is disabled whenever
that definition contains an `"error"`-level diagnostic**, and the UI lists
every one, naming the responsible element or resource. A `"warning"`-level
diagnostic (e.g. "this diagram has two processes, using X") never blocks Run —
it's a heads-up about a structural choice the framework made on the reader's
behalf.

## Works today

| Edit | What happens |
| --- | --- |
| Rename a BPMN element that has a handler | The old handler becomes orphaned (`draft.ts` reports "Handler … doesn't match any element") **and** the renamed/new element gets "No handler for …" — both errors, both naming the element, Run disabled until fixed. |
| Add a service task / script task with a handler already written for its id | Runs normally — no framework change needed. |
| Add a service task / script task with **no** handler | "No handler for … (job type …)" — reported before Run starts, not as a mid-run incident. |
| Change a prompt's text (inside the FEEL string literal on the AI Agent connector) | Picked up on next Run — `model.ts` re-parses the prompt from the model every time. |
| Edit a sequence flow / gateway condition | Runs as edited — the engine evaluates whatever the diagram says. |
| Edit handler code in the panel | Recompiled on next Run; a syntax error is reported next to the editor as a compile diagnostic, not a runtime throw. |
| A `userTask`/start-event `formId` with no matching form schema | "… references form "…", which has no matching schema" — reported at draft-build time (i.e. as soon as the model/forms change), not when the task opens. Checked across every process, not just the primary one. |
| A diagram with **two `<bpmn:process>` elements** | Fully supported: `model.ts` parses every process independently (`ModelInfo.processes`), and reports which one is primary via a `"warning"` diagnostic — never silently drops the second. Pass `parseModel(xml, { processId })` to target a non-default one. `draft.ts` resolves handlers and `formId` references against every process's tasks/user tasks, not just the primary one, so a missing/uncompiled handler or dangling form reference in a secondary process still gates Run. |
| A diagram with **two (or more) AI Agent sub-processes** | Fully supported for the **live brain**: `liveAgent.ts`'s `makeLiveAgentRouter` registers one wrapper per job type (all AI Agent hosts share `io.camunda.agenticai:aiagent-job-worker:1`) and dispatches by `job.elementId` underneath, so each host gets its own turn counter and called-tools set. `model.ts` emits a `"warning"` diagnostic whenever a process hosts more than one agent host, naming every host found in that process. |
| Editing a diagram visually (drag/drop, rename, add elements) in the **modeler** tab, including one that carries `zeebe:*` extension data (e.g. an AI Agent sub-process's `zeebe:modelerTemplate`/`zeebe:adHoc`/`zeebe:taskDefinition`/`zeebe:ioMapping`) | Fully supported: the modeler is a real bpmn-js `Modeler` configured with `moddleExtensions: { zeebe: ... }`, so `zeebe:*` data round-trips through every edit and export exactly as it would through hand-written XML, and every edit flows into the same `onChange`/draft-run-definition pipeline as before — there is no second diagnostics path for visual edits. |

## Explicitly unsupported today (diagnostics-only, not full support)

| Edit | What the reader sees |
| --- | --- |
| Multiple AI Agent hosts **with the scripted brain** (no live brain configured) | Only the primary process's first agent host is driven by the scripted brain; any other host sharing its job type is guarded by `elementId` and throws instead, which the engine reports as an **incident on the diagram** (not a silent stall, and not silently driven by the primary host's closure). Use a live brain to exercise more than one host today. |
| A model with **zero** `<bpmn:process>` elements | `parseModel` throws "No `<bpmn:process>` in the diagram", surfaced as a single top-level `"error"` diagnostic; there's nothing else to resolve. |
| Structural edits that break the underlying XML (mismatched tags, invalid namespaces) | `parseModel` throws "Invalid BPMN XML: …" via the browser's `DOMParser`, surfaced the same way. |
| Removing the ad-hoc sub-process construct entirely from an agentic model | Not specifically diagnosed beyond "no agent host found" (the process behaves as fully non-agentic) — there's no dedicated message pointing at "you used to have an agent here." |
| Editing which `formId` an element points at, where the *old* form is still valid JSON but the wrong shape for the new context | Not diagnosed — `draft.ts` only checks that the referenced `formId` resolves to *some* schema, not that the schema matches the reader's intent. |

## What "diagnostics-only" means in practice

A diagnostic never repairs anything. An orphaned handler is still orphaned; a
missing form is still missing. The framework's job is to say so, clearly,
before a reader hits it mid-run — not to guess what was meant.
