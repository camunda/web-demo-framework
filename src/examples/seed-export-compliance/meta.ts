import type { ExampleMeta } from "../../framework/types";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "seed-export-compliance",
  title: "Seed export compliance agent",
  blurb:
    "An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",
  hero: {
    headline: "The LLM *recommends*. The process *governs*.",
    lede: "An agentic ad-hoc sub-process chooses its own compliance checks, but the gateway after it — not the model — decides whether a shipment ships or goes to a human.",
    tagline: "Anatomy of an enterprise agent",
  },
  docsUrl: "https://camunda.com/blog/agentic-ai/",
};

export default meta;
