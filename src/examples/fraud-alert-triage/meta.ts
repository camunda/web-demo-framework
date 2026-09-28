import type { ExampleMeta } from "../../framework/types";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "fraud-alert-triage",
  title: "Fraud alert triage agent",
  blurb:
    "An event-driven agent with no start form at all: a published alert is the only way in, and a second alert for the same customer correlates into the running case instead of opening a new one — cancelling the agent mid-investigation, even while it is parked on the human it chose to consult.",
  hero: {
    headline: "No form, no polling. The *event* is the process.",
    lede: "Camunda's event-driven agent pattern, running here on a wasm engine in your browser. One subscription starts the case and interrupts it: fire a second alert while the agent is waiting on its analyst and watch the whole investigation get torn down.",
    tagline: "Event-driven agent",
  },
  docsUrl:
    "https://github.com/camunda/camunda-8-tutorials/tree/main/examples/event-driven-agent",
};

export default meta;
