import type { ExampleDef } from "../../framework/types";
import bpmn from "./model.bpmn?raw";

/**
 * Learn BPMN: timer intermediate catch event (`timeDuration`).
 *
 * See `src/examples/learn-service-task/index.ts` for the shape every
 * `learn-<construct>` page copies (the auto-discovery convention lives there,
 * not here). This model is based on the already-verified
 * `tools/probe/fixtures/timer.bpmn` (see `docs/engine-coverage.md`'s "Timer
 * intermediate catch event" row — ✅ Verified: `session.advanceTime()` past
 * the timer's `dueInMs` fires it and the instance proceeds and completes),
 * trimmed for teaching: a start event, the timer, one service task standing
 * in for whatever the wait was for, and an end event — nothing incidental.
 *
 * Run it and watch three things happen in order: (1) the token parks on the
 * timer the moment the instance starts — nothing waits on a job or a human
 * here, just the clock; (2) once the clock passes the timer's due time the
 * token resumes on its own and "Send the reminder" activates, runs, and
 * completes; (3) the process reaches its end event. In a real deployment the
 * wait is real wall-clock time (`PT3S` here would really pause for three
 * seconds); this runner drives a virtual clock instead, so the run completes
 * without you waiting around for it (see `ExampleRunner`'s `driveLoop`, which
 * jumps the clock straight to the timer's due time rather than ticking real
 * milliseconds).
 */
const SEND_REMINDER = `async (job, { sleep, trace }) => {
  trace("the timer fired — sending the reminder now");
  await sleep(400);

  return { reminderSent: true };
}`;

const learnTimerCatchEvent: ExampleDef = {
  id: "learn-timer-catch-event",
  title: "Timer intermediate catch event",
  group: "learn-bpmn",
  blurb:
    "A timer catch event parks the token until a point in time — here, a fixed duration after the token arrives. Run this and read the Activity panel: the token parks on the timer with nothing else happening ('parked on a timer — 3.0s left on the clock'), then the clock is fast-forwarded to the due time ('the clock advanced — timer fired') and the token resumes on its own: 'Send the reminder' activates, runs, and the process completes. Nothing needs to poll or push it forward; the engine itself wakes the instance when the timer's due time passes. (This page fast-forwards a virtual clock so the 3-second wait doesn't cost you 3 real seconds — a live deployment waits the actual PT3S.) To change the wait: in the Code panel, open the model tab, click \"Wait 3 seconds\", and expand Timer in the properties panel on the right — Type is Duration and Value holds the ISO-8601 duration, so PT30S or PT5M works the same way. Revert to original puts it back.",
  docsUrl:
    "https://docs.camunda.io/docs/components/modeler/bpmn/timer-events/timer-event-type/",
  bpmn,
  seed: {},
  handlers: [
    {
      elementId: "Activity_after_timer",
      standsInFor: "job worker — send-reminder",
      source: SEND_REMINDER,
    },
  ],
};

export default learnTimerCatchEvent;
