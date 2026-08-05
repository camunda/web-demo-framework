import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Bundle Monaco locally (instead of its CDN loader) so the page works offline
// right after `npm install`.
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import { loader } from "@monaco-editor/react";

self.MonacoEnvironment = {
  getWorker(_workerId, label) {
    if (label === "typescript" || label === "javascript") return new tsWorker();
    return new editorWorker();
  },
};
loader.config({ monaco });

import "@camunda/design-system/styles.css";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "./styles.css";

import { C4Provider } from "@camunda/design-system";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <C4Provider>
      <App />
    </C4Provider>
  </StrictMode>,
);
