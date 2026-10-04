import type { ExampleMeta } from "../../framework/types";
import { tutorialLinks } from "../tutorials";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "invoice-payment",
  title: "Invoice payment approval agent",
  blurb:
    "A human-in-the-loop agent: the tool that releases money is a user task inside the agent's own tool loop, so approval is something the agent asks for and reasons about — and payment has exactly one incoming path, from the approved branch. A second, post-hoc sign-off outside the agent sees only what actually happened.",
  hero: {
    headline: "The agent can *ask* to pay. Only a human can *approve* it.",
    lede: "Camunda's human-in-the-loop agent pattern, running here on a wasm engine in your browser. Deny the release in the reviewer form and watch the agent read the denial and change course.",
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
