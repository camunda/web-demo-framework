import type { ExampleMeta } from "../../framework/types";
import { tutorialLinks } from "../tutorials";

const meta: ExampleMeta = {
  id: "bank-support",
  title: "Bank support orchestrator",
  blurb:
    "Run \"Loan + account\" to see two specialists work on one request at once.",
  hero: {
    tagline: "Orchestrator agent",
    headline: "One agent *routes*. Three others do the work.",
    lede: "The orchestrator picks which specialist agents a request needs. Each specialist is its own process, and the orchestrator waits for all of them to answer.",
  },
  pageUrl: "https://camunda.com/orchestrate/agents/#orchestrator-agent",
  ...tutorialLinks(
    "orchestrator-agent",
    [
      "bank-support-orchestrator.bpmn",
      "bank-support-loan-agent.bpmn",
      "bank-support-account-agent.bpmn",
      "bank-support-card-agent.bpmn",
      "bank-support-request.form",
      "bank-support-review.form",
    ],
    "Bank Support Orchestrator Agent",
  ),
};

export default meta;
