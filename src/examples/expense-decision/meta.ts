import type { ExampleMeta } from "../../framework/types";
import { tutorialLinks } from "../tutorials";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "expense-decision",
  title: "Expense decision agent",
  blurb:
    "Run \"Clear approve\" and the agent never starts. Run a gray-zone claim and it does.",
  hero: {
    headline: "The rule table decides. The agent handles *what's left*.",
    lede: "A DMN decision table settles the clear-cut claims without calling the agent. The agent only sees the borderline claims, and it can escalate them instead of guessing.",
    tagline: "Decision agent",
  },
  pageUrl: "https://camunda.com/orchestrate/agents/#decision-agent",
  ...tutorialLinks(
    "decision-agent",
    [
      "expense-decision-agent.bpmn",
      "expense-policy.dmn",
      "expense-claim-start.form",
      "expense-claim-review.form",
    ],
    "Expense Decision Agent",
  ),
};

export default meta;
