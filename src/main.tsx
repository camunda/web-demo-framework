import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Monaco (core + worker environment + `@monaco-editor/react`'s `loader.config`)
// used to be bundled and configured right here, on the critical path for
// first paint. It's now isolated in `./framework/ui/MonacoEditor.tsx`, which
// is only pulled into the bundle graph — and only runs its setup — the first
// time a reader opens a code tab (see the `lazy()` wrapper around it in
// `ExampleRunner.tsx`). See `tools/bundle-budget/check.mjs` for the
// code-splitting rationale and the per-chunk budgets this bought back.

import "@camunda/design-system/styles.css";
// bpmn-js's own CSS moved to the lazy diagram boundary in ExampleRunner.tsx
// (loaded alongside `@nanobpm/bojtos-react`) — the diagram is no longer on
// the critical path for first paint, so its stylesheet shouldn't be either.
import "./styles.css";

import { C4Provider } from "@camunda/design-system";
import { App } from "./App";
import { restoreHandoffRoute } from "./framework/routing";

// Must run before the first render: `App` reads the route on its very first
// pass, and a handed-off URL still says `/?p=/examples/x` until this rewrites
// it (see `restoreHandoffRoute`).
restoreHandoffRoute();

// Dev-only hook for the sandbox self-test (src/framework/sandbox/selfTest.ts):
// `await window.__runSandboxSelfTest()` in the devtools console. See
// docs/security.md for why this is a manual, in-browser check rather than an
// automated one.
if (import.meta.env.DEV) {
  import("./framework/sandbox/selfTest").then(({ runSandboxSelfTest }) => {
    (
      window as typeof window & {
        __runSandboxSelfTest?: typeof runSandboxSelfTest;
      }
    ).__runSandboxSelfTest = runSandboxSelfTest;
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <C4Provider>
      <App />
    </C4Provider>
  </StrictMode>,
);
