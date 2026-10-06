import type { ExampleMeta } from "../../framework/types";
import { tutorialLinks } from "../tutorials";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "seed-export-compliance",
  title: "Seed export compliance agent",
  blurb:
    "Run \"Likely flagged\" to see a shipment go to a person for review.",
  hero: {
    headline: "The LLM *recommends*. The process *governs*.",
    lede: "The agent decides which systems to call, and every call is a step in the process. Compliant shipments clear automatically. The rest go to a person for review.",
    tagline: "Anatomy of an enterprise agent",
  },
  pageUrl: "https://camunda.com/orchestrate/agents/#task-agent",
  ...tutorialLinks(
    "task-agent",
    [
      "seed-export-compliance-agent.bpmn",
      "seed-export-shipment-ready.form",
      "seed-export-compliance-review.form",
    ],
    "Seed Export Compliance Agent",
  ),
};

export default meta;
