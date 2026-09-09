import type { ExampleMeta } from "../../framework/types";

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
  docsUrl:
    "https://github.com/camunda/camunda-8-tutorials/tree/main/examples/human-in-the-loop-agent",
};

export default meta;
