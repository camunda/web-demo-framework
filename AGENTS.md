# Working in this repo

Conventions and non-obvious gotchas that recur here, so the next contributor
(human or agent) doesn't re-learn them the hard way.

Keep this file short. Add a lesson only once it has cost time more than once,
and only if you have checked it is still true — a stale rule here is worse than
no rule, because it sends people down a workaround they don't need.

## Before you open a PR

CI (`.github/workflows/ci.yml`) runs these in order. They are the definition of
"green" here:

```bash
npm run typecheck       # tsc --noEmit
npm test                # vitest run
npm run coverage-check  # engine probes (tools/probe/coverage-check.mjs)
npm run build           # tsc + vite build
npm run budget          # per-artifact gzip budget (tools/bundle-budget)
```

There is **no linter or formatter** — no ESLint config, no Prettier, no `lint`
script. Don't invoke them; match the style of the file you're editing instead.

## Line endings: check before you edit

## Line endings: LF

`.gitattributes` sets `* text=auto eol=lf`, so every text file is LF both in the
repo and in the working tree, on every platform. The 10 JPEGs are marked
`binary`.

You shouldn't have to think about this. If a tool ever writes CRLF, git
normalises it on the way in — but it will show as a whole-file diff in your
editor first, so if you see one, that's what happened.

## Examples never *modify* `src/framework/`

An example under `src/examples/*` is a **manifest**: BPMN, handler source, seed
payload, forms, deterministic stand-ins, registered in `src/examples/index.ts`.

Importing from the framework is normal and common — `parseModel`, `createTemplateMap`,
`TOUR_ANCHOR`, the testing helpers. What an example must not do is *edit* a
framework-global file to make itself work. When it needs a capability the
framework doesn't have, add an **optional, additive field on `ExampleDef`** and
let the runner own the wiring: `scriptedAgent`, `scriptedVision` and
`imageInput` are all that pattern. Reaching into framework files from an example
looks fine in isolation and breaks at integration.

## Keep heavy model deps off the eager path

Model runtimes (`@mlc-ai/web-llm`, `@huggingface/transformers`), Monaco and
bpmn-js's `Modeler` are dynamic `import()` only, behind a `React.lazy()` or an
import inside the function that needs them. `npm run budget` fails if one lands
on the initial path.

`import type` is fine (erased at build), and a worker entry like
`brains/webllm.worker.ts` is its own chunk so it may import statically.
`src/framework/brains/browser.test.ts` enforces the rule for `browser.ts`.

## Testing under jsdom (vitest)

Tests run in jsdom (`vitest.config.ts`) with `setupFiles: vitest.setup.ts`.

- **Auto-cleanup is off** (no `globals`), and so is every Vitest global. Import
  both:
  ```ts
  import { afterEach } from "vitest";
  import { cleanup } from "@testing-library/react";
  afterEach(cleanup);
  ```
  Without the cleanup, repeated `render()` calls accumulate stale DOM and queries
  match the wrong nodes.
- **There is no sandbox iframe in jsdom**, and this bites twice. You can't
  verify sandbox *isolation* there — a test asserting sandboxed code can't
  reach `parent.document` passes even if the sandbox is broken (see
  `docs/security.md`). And handlers taken off `buildDraftRunDefinition` are
  sandbox-compiled, so **awaiting one in a test hangs until the timeout**. Tests
  that need to execute handler source compile it with `new Function` instead —
  see `src/examples/drive.test.ts`, which says so in its header rather than
  implying coverage it can't have.
- **`console.log` is swallowed.** When instrumenting a test to prove a path
  runs, use `process.stderr.write`. A missing log is not evidence of a missing
  call.
- **No WebGPU / `navigator.gpu`.** Convenient for exercising the scripted
  fallback; anything assuming a live GPU brain must be tested through it.
- **bpmn-js needs SVG stubs.** `vitest.setup.ts` polyfills the jsdom gaps
  (`getBBox`, `createSVGMatrix`, `ResizeObserver`, …). If a new bpmn-js path
  throws in tests, extend that file rather than reworking the test.
- **Some bpmn-io packages break under Vitest but not under a real build.**
  `bpmn-js-properties-panel`, `bpmn-js-element-templates` and
  `camunda-bpmn-js-behaviors` ship CJS entries that `require()` their own
  transitive copies via extension-less specifiers; a bundler resolves it, Vitest's
  module runner doesn't. Mock the package with a same-shape stand-in — copy the
  `vi.mock` pattern at the top of `src/framework/ui/ModelEditor.test.tsx`.

## Engine behaviour: claims need a check behind them

`docs/engine-coverage.md` records what the engine actually does, and
`tools/probe/coverage-check.mjs` is what earns each row. Two rules hold there:

- **A "verified" claim must name a check that runs.** `PROVEN_CONSTRUCTS` maps
  construct → check name and fails its own run if it names a check that didn't
  record. Don't add a hand-written verified note beside it.
- **A tag name is not a construct.** Where variants are different engine paths
  with different verdicts, key them `name[variant]` — `callActivity[sequenceFlow]`
  works while `callActivity[adHocTool]` is silently broken, and
  `boundaryEvent[error]` is proven while `boundaryEvent[timer]` has never been
  probed. One passing path must not stand for the rest.

Assert the *mechanism*, not a side effect: "the token carried on past the throw"
was satisfied just as well by the throw being skipped entirely, which is how a
signal throw sat marked verified while being a no-op.

`tools/audit/construct-coverage.mjs` inventories a model corpus against those
claims; `tools/audit/runner-coverage.mjs` checks the runner handles every wait
state the engine can produce.

## Gotchas that live elsewhere

Each of these is documented at its landing site — this is just the index.

- **A `JobHandler` can't throw a BPMN error.** Auto-dispatched handlers can only
  complete or fail a job, and `failJob` raises an incident rather than routing
  through an error boundary. An example that needs a BPMN error marks that job
  type `manualControl` and resolves it via `throwJobError`. Boundary error
  events also need an explicit `errorRef`. See `docs/engine-coverage.md`.
- **`driveToQuiescence` resolves wait states for you** — it completes open user
  tasks, advances timers, correlates messages *and broadcasts signals* whenever
  nothing else can progress. To *observe* a wait state, snapshot before driving
  or dispatch jobs only; otherwise the helper consumes the very thing you're
  trying to measure.
- **Don't group lazy deps into `manualChunks` by module id.** Rollup can
  synthesize a static import edge back into the entry chunk to reach the shared
  bytes, silently putting the whole chunk on the initial path. See the comment
  above `manualChunks` in `vite.config.ts`.
- **The scripted brain drives every agent host.** `ExampleRunner` registers a
  scripted handler for each distinct agent job type across *every* process — a
  host can live in a called process, where the primary process has none — and
  passes `job.elementId` through so one scripted source can branch per host,
  exactly as it does for a live brain. A single-host example can ignore it.
- **`src/framework/ui/ExampleRunner.tsx` is a merge hotspot.** It's the runner's
  single top-level component, so most feature slices touch it. Keep changes
  additive — new state, new `Suspense`-wrapped branches, wrapping rather than
  replacing JSX — so parallel work rebases mechanically.

## Node-only model evals

Opt-in evals under `tools/` (e.g. `npm run eval:vision`) run outside `npm test`
and CI. For `@huggingface/transformers` in Node, `device` defaults to `"cpu"`
(override with `VISION_DEVICE`) — **not `"wasm"`**, which the Node build
rejects — and `load_image` needs decoded bytes as a `Blob`, because Node's
`fetch` can't read `file://` URLs.
