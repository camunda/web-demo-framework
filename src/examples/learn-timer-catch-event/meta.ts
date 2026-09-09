import type { ExampleMeta } from "../../framework/types";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "learn-timer-catch-event",
  title: "Timer intermediate catch event",
  group: "learn-bpmn",
  blurb: [
    "A timer catch event parks the token until a point in time — here, a fixed duration after the token arrives.",
    "Run this and read the Activity panel: the token parks on the timer with nothing else happening ('parked on a timer — 3.0s left on the clock'), then the clock is fast-forwarded to the due time ('the clock advanced — timer fired') and the token resumes on its own: 'Send the reminder' activates, runs, and the process completes. Nothing needs to poll or push it forward; the engine itself wakes the instance when the timer's due time passes. (This page fast-forwards a virtual clock so the 3-second wait doesn't cost you 3 real seconds — a live deployment waits the actual PT3S.)",
    "To change the wait: in the Code panel, open the model tab, click \"Wait 3 seconds\", and expand Timer in the properties panel on the right — Type is Duration and Value holds the ISO-8601 duration, so PT30S or PT5M works the same way. Revert to original puts it back.",
  ].join("\n\n"),
  docsUrl:
    "https://docs.camunda.io/docs/components/modeler/bpmn/timer-events/timer-event-type/",
};

export default meta;
