import type { ExampleMeta } from "../../framework/types";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "expense-decision",
  title: "Expense decision agent",
  blurb:
    "A DMN decision table settles the clear-cut expense claims outright, and for those the agent is never invoked at all. Only the residual it can't judge — a foreign currency, a gray-zone amount, a category it doesn't cover — reaches the agent, which has one real tool and one documented exception a flat rule band can't express.",
  hero: {
    headline: "The rule table decides. The agent handles *what's left*.",
    lede: "Camunda's decision agent pattern, running here on a wasm engine in your browser — with a real DMN table deployed alongside the diagram. Run the clear-approve claim and watch the agent never start; run the 90 EUR dinner and watch it convert the currency and apply the one exception the table has no way to express.",
    tagline: "Decision agent",
  },
  docsUrl:
    "https://github.com/camunda/camunda-8-tutorials/tree/main/examples/decision-agent",
};

export default meta;
