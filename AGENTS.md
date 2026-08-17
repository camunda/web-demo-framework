# Working in this repo

Conventions and non-obvious gotchas that recur here, so the next contributor
(human or agent) doesn't re-learn them the hard way. Keep this file short — add
a lesson only once it has bitten more than once.

## Before you open a PR

CI (`.github/workflows/ci.yml`) runs these four gates in order. Run them locally
first — they are the definition of "green" here:

```bash
npm run typecheck   # tsc --noEmit
npm test            # vitest run
npm run build       # tsc + vite build
npm run budget      # per-artifact gzip bundle budget (tools/bundle-budget)
```

## Examples never modify `src/framework/`

An example under `src/examples/*` is a **manifest**: it supplies data (BPMN,
handler source, seed payload, deterministic stand-ins) and registers itself in
`src/examples/index.ts`. It must not edit any framework-global file
(`src/framework/types.ts`, `compile.ts`, `useExampleRun.ts`, `ExampleRunner.tsx`,
`useBrain.ts`, …).

When an example needs a capability the framework doesn't expose yet, add it as an
**optional, additive field on `ExampleDef`** and let the runner own the wiring —
mirror the existing `scriptedAgent` / `scriptedVision` pattern, where the example
declares a deterministic stand-in and `ExampleRunner` threads it into the brain.
Reaching into framework files from an example looks fine in isolation but breaks
at integration; carve the seam into `ExampleDef` instead.

## Keep heavy model deps off the eager path

ML/model runtimes (`@mlc-ai/web-llm`, `@huggingface/transformers`, `bpmn-js`
`Modeler`, Monaco, …) are **lazy `import()`** only, behind a `React.lazy()` or
dynamic-import boundary. The `npm run budget` gate enforces per-artifact gzip
budgets against the build graph (imports vs. dynamicImports), so a heavy
dependency landing on the initial path fails CI. Import it inside the function
that needs it, not at module top level.

## Testing under jsdom (vitest)

Tests run in `jsdom` (see `vitest.config.ts`) with `setupFiles: vitest.setup.ts`.
Watch for:

- **No `globals`.** Auto-cleanup is off, so import and register it yourself:
  `import { cleanup } from "@testing-library/react"; afterEach(cleanup);`.
  Without it, multiple `render()` calls with identical markup accumulate stale
  DOM and queries match the wrong nodes.
- **Don't import `@camunda/design-system` in a component you unit-test** — it
  fails under vitest with *"needs an import attribute of type: json"*. Use plain
  HTML in unit-tested components (keep design-system usage in components covered
  only by build/E2E).
- **No WebGPU / `navigator.gpu`** in jsdom — convenient for testing the
  scripted / WebGPU-absent fallback paths, but any code that assumes a live GPU
  brain must be exercised through its fallback.
- **bpmn-js needs SVG stubs.** `vitest.setup.ts` polyfills the jsdom SVG gaps
  (`getBBox`, `createSVGMatrix`, `SVGElement.transform`, `ResizeObserver`, …)
  that bpmn-js/diagram-js rely on. If a new bpmn-js path throws in tests, extend
  that file rather than reworking the test.

## Node-only model evals

Opt-in real-model evals under `tools/` (e.g. `npm run eval:vision`) run outside
`npm test`/CI. For `@huggingface/transformers` v4 in Node: use
`device: "cpu"` (or `coreml` / `webgpu`) — **not `"wasm"`**, which the Node build
rejects — and hand `load_image` decoded bytes as a `Blob` (Node `fetch` can't
read `file://` URLs).
