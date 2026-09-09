import type { ExampleMeta } from "../../framework/types";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "plate-recognition",
  title: "Read a number plate from a photo",
  blurb:
    "Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",
  docsUrl:
    "https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",
};

export default meta;
