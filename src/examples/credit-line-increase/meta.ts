import type { ExampleMeta } from "../../framework/types";
import { tutorialLinks } from "../tutorials";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "credit-line-increase",
  title: "Credit line increase agent",
  blurb:
    "Press Run, then either send the bureau's reply or let the timer lapse and watch the agent decide what to do.",
  hero: {
    headline: "The wait *is* the tool call.",
    lede: "The agent waits for a credit bureau to reply, and nothing runs while it waits. If the bureau misses its deadline, a timer on the diagram hands the next step back to the agent.",
    tagline: "Long-running agent",
  },
  pageUrl: "https://camunda.com/orchestrate/agents/#long-running-agent",
  ...tutorialLinks(
    "long-running-agent",
    [
      "credit-line-increase-agent.bpmn",
      "credit-line-request.form",
      "underwriting-ops-escalation.form",
    ],
    "Credit Line Increase Agent",
  ),
};

export default meta;
