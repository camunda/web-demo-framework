import type { ExampleMeta } from "../../framework/types";

const meta: ExampleMeta = {
  id: "bank-support",
  title: "Bank support orchestrator",
  blurb:
    "One agent that answers nothing itself. It reads the customer's message, picks the specialists it needs, and each one runs as its own process.",
  hero: {
    tagline: "Orchestrator agent",
    headline: "One agent *routes*. Three others do the work.",
    lede: "The orchestrator resolves nothing on its own — it decides which specialists a request needs and delegates. Each runs as a separate process instance, so what came back is attributable to the specialist that said it.",
  },
  docsUrl: "https://camunda.com/orchestrate/agents/",
};

export default meta;
