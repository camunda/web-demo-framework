import type { ExampleMeta } from "../../framework/types";
import { tutorialLinks } from "../tutorials";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "fraud-alert-triage",
  title: "Fraud alert triage agent",
  blurb:
    "Run \"Mundane\", then press \"A second alert arrives\" while the agent is still investigating.",
  hero: {
    headline: "No form, no polling. The *event* is the process.",
    lede: "An incoming alert opens a case. If a second alert arrives for the same customer, it interrupts the investigation already in progress instead of opening a duplicate case.",
    tagline: "Event-driven agent",
  },
  pageUrl: "https://camunda.com/orchestrate/agents/#event-driven-agent",
  ...tutorialLinks(
    "event-driven-agent",
    [
      "fraud-alert-triage-agent.bpmn",
      "fraud-analyst-consult.form",
      "fraud-team-handoff.form",
    ],
    "Fraud Alert Triage Agent",
  ),
};

export default meta;
