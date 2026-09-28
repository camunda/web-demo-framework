import type { ExampleMeta } from "../../framework/types";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "credit-line-increase",
  title: "Credit line increase agent",
  blurb:
    "A long-running agent whose first tool fires a request at a credit bureau and then genuinely stops — the wait is the continuation of that one tool call, and it consumes nothing while it lasts. An SLA timer scoped to that single wait reports back into the agent's own loop, so a bureau that misses its deadline is information the agent acts on rather than an ejection.",
  hero: {
    headline: "The wait *is* the tool call.",
    lede: "Camunda's long-running agent pattern, running here on a wasm engine in your browser. One tool call submits the bureau request and doesn't return until the report lands or the SLA elapses — hours or days on a real cluster, and no worker, no poll loop, nothing to retry in the meantime.",
    tagline: "Long-running agent",
  },
  docsUrl:
    "https://github.com/camunda/camunda-8-tutorials/tree/main/examples/long-running-agent",
};

export default meta;
