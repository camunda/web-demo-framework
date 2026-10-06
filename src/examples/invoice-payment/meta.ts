import type { ExampleMeta } from "../../framework/types";
import { tutorialLinks } from "../tutorials";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "invoice-payment",
  title: "Invoice payment approval agent",
  blurb:
    "Run any invoice, then deny the payment release in the reviewer form and watch the agent change course.",
  hero: {
    headline: "The agent can *ask* to pay. Only a human can *approve* it.",
    lede: "The agent can't release a payment on its own. A person has to approve it first, and the agent works with whatever they decide.",
    tagline: "Human-in-the-loop agent",
  },
  pageUrl: "https://camunda.com/orchestrate/agents/#human-in-the-loop-agent",
  ...tutorialLinks(
    "human-in-the-loop-agent",
    [
      "invoice-payment-agent.bpmn",
      "invoice-submit.form",
      "payment-release-request.form",
      "compliance-signoff.form",
    ],
    "Invoice Payment Agent",
  ),
};

export default meta;
