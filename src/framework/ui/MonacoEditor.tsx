// Everything Monaco needs, isolated behind one module so it only enters the
// bundle graph when something actually imports it (see the `React.lazy()`
// import in `ExampleRunner.tsx`).
//
// This used to be wired up eagerly in `main.tsx`, which put Monaco core, its
// `?worker` chunks, and every bundled language grammar on the critical path
// for first paint — a multi-MB tax paid by every reader before they'd even
// looked at a code tab. Moving the setup here means the worker environment
// and `@monaco-editor/react`'s `loader.config` only run the first time a
// consumer dynamically imports this module (see the `lazy()` wrapper in
// `ExampleRunner.tsx`).
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import { loader } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";

self.MonacoEnvironment = {
  getWorker(_workerId, label) {
    if (label === "typescript" || label === "javascript") return new tsWorker();
    return new editorWorker();
  },
};
loader.config({ monaco });

export default Editor;
