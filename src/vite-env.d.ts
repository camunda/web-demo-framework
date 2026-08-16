/// <reference types="vite/client" />

declare module "*.bpmn?raw" {
  const content: string;
  export default content;
}

// `index.html` is read as text by `framework/brains/csp.test.ts`, which checks
// the shipped CSP against the hosts WebLLM fetches from.
declare module "*.html?raw" {
  const content: string;
  export default content;
}

// None of these three ship type declarations. They're used behind a narrow,
// hand-typed seam in `ModelEditor.tsx` (see `ElementTemplatesService` et al.
// there), so a bare `any`-module declaration here is enough to satisfy
// `tsc` without pretending to type their full (large, internal) surface.
declare module "bpmn-js-properties-panel";
declare module "bpmn-js-element-templates";
declare module "camunda-bpmn-js-behaviors/lib/camunda-cloud";
