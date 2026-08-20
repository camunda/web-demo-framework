import type { ExampleDef } from "../../framework/types";
import bpmn from "./model.bpmn?raw";

/**
 * Learn BPMN: signal intermediate catch event + broadcast.
 *
 * Copies the shape/conventions of `src/examples/learn-service-task/` (the
 * reference construct page for issue #64) — a `model.bpmn` plus this
 * manifest, `group: "learn-bpmn"`, and the model's XML imported with `?raw`.
 * Registration is automatic: `src/examples/index.ts` auto-discovers every
 * `src/examples/learn-<construct>/index.ts` via `import.meta.glob`, as long
 * as it default-exports its `ExampleDef` — do not hand-add this page there.
 *
 * The model is based on `tools/probe/fixtures/signal.bpmn` — already
 * `✅ Verified` in `docs/engine-coverage.md` ("Signal intermediate catch
 * event + broadcast" — `session.broadcastSignal(name, vars)` unblocks every
 * matching open subscription; completes in 3 rounds) — trimmed down for
 * teaching rather than probe realism: one `intermediateCatchEvent` waiting on
 * a `bpmn:signal`, one service task after it, nothing incidental.
 *
 * A signal is a broadcast, not a correlation: unlike the message construct's
 * `correlationKey` (which targets exactly one waiting instance), broadcasting
 * a signal unblocks *every* open subscription for that signal name across
 * *every* instance. This example only ever creates one instance, so that
 * distinction isn't directly visible on the page, but the blurb below calls
 * it out — it's the whole reason a reader would reach for a signal instead
 * of a message.
 *
 * Runs to completion unattended from a single Run click: `ExampleRunner`'s
 * drive loop now auto-broadcasts the first open signal subscription whenever
 * a dispatch round settles with nothing left to do but a pending signal (see
 * `driveLoop` in `src/framework/ui/ExampleRunner.tsx`), the same way it
 * already auto-advances a due timer.
 */
const RESUME_OPERATIONS = `async (job, { sleep, trace }) => {
  trace("all-clear received — resuming operations");
  await sleep(400);

  return { resumed: true };
}`;

const learnSignalBroadcast: ExampleDef = {
  id: "learn-signal-broadcast",
  title: "Signal intermediate catch event + broadcast",
  group: "learn-bpmn",
  blurb:
    "A signal intermediate catch event parks the token until someone broadcasts a signal by name. Unlike a message, a signal isn't correlated to one waiting instance — broadcasting it unblocks every open subscription for that name, across every running instance, at once. Run this and watch the token park at \"Wait for all-clear\" the moment the process starts; the page then broadcasts the all-clear signal for you, which unblocks the wait, runs \"Resume operations\", and reaches the end event. Forget to declare a zeebe:subscription-free signalRef and the model still deploys, but nothing broadcasting that name ever exists to unblock it, so the run parks on the wait forever.",
  docsUrl: "https://docs.camunda.io/docs/components/modeler/bpmn/signal-events/signal-event/",
  bpmn,
  seed: {},
  handlers: [
    {
      elementId: "Activity_resume",
      standsInFor: "job worker — resume-operations",
      source: RESUME_OPERATIONS,
    },
  ],
};

export default learnSignalBroadcast;
