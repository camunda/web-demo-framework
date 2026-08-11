# Agent notes

Conventions and gotchas for anyone (human or agent) working on this repo,
gathered from real build/test failures hit while landing prior work. Read the
relevant section before touching the areas below — each one cost real time to
diagnose once.

## Known gotchas

- **jsdom can't verify `<iframe sandbox>` isolation.** `jsdom` doesn't
  implement origin isolation for sandboxed iframes at all, so a
  Vitest/jsdom test asserting sandboxed code can't reach `parent.document` or
  `localStorage` will pass even if the sandbox is completely broken. Verify
  that class of property in a real browser (e.g. Playwright/Chromium)
  instead. See `docs/security.md`.
- **Some `bpmn-js` ecosystem packages break under Vitest, not under a real
  build.** `bpmn-js-properties-panel`, `bpmn-js-element-templates`, and
  `camunda-bpmn-js-behaviors` ship pre-built CJS entries that `require()`
  their own transitive `bpmn-js`/`min-dash` copies via bare or
  extension-less specifiers. A real bundler resolves this fine (`npm run
  build` passes), but Vitest's SSR module runner hands these off to Node's
  native `require()`, which can't resolve them on Node ≥22.12. Mock the
  package with a minimal same-shape stand-in instead of trying to fix the
  runner — see the `vi.mock(...)` calls and comment at the top of
  `src/framework/ui/ModelEditor.test.tsx` for the pattern to copy for any new
  bpmn-io package.
- **Don't group lazy-loaded deps into `manualChunks` by module-id pattern.**
  Doing so for anything you actually want on a separate, on-demand chunk
  (Monaco, bpmn-js, WebLLM) can make Rollup synthesize a real static import
  edge back into the entry chunk just to reach the shared bytes, silently
  putting the whole chunk back on the initial-load path. See the detailed
  comment above `manualChunks`/`chunkFileNames` in `vite.config.ts` — only
  group modules that are already unconditionally eager (React, the design
  system); for anything else, let Rollup's automatic dynamic-`import()`
  chunking do the isolation and use `chunkFileNames` only to rename it.
- **A `JobHandler` can't throw a BPMN error.** Handlers dispatched through
  the normal auto-dispatch workers map can only `completeJob`/`failJob`
  (`failJob` raises an incident, it doesn't route through an error
  boundary). An example that needs to throw a BPMN error must mark that job
  type `manualControl` in its `HandlerDef` and resolve it via
  `useExampleRun.throwJobError`/`completeJobManually` instead. See
  `docs/engine-coverage.md`. Boundary error events also require an explicit
  `errorRef` — the `errorRef`-less catch-all style used by some upstream
  `camunda-8-get-started` reference models won't work here.
- **The scripted brain only drives one agent host.** Multiple agent hosts
  are fully supported for the *live* brain (independent per-host closures),
  but the scripted brain only drives the primary process's first agent
  host — see the "diagnostics-only" note in `docs/supported-edits.md` before
  adding multi-host scripted-agent support.
- **`src/framework/ui/ExampleRunner.tsx` is a merge hotspot.** It's the
  runner's single top-level component, so most feature slices touch it. Keep
  changes additive (new state, new `Suspense`-wrapped branches, wrapping
  rather than replacing JSX) so parallel work rebases mechanically instead of
  textually conflicting.
