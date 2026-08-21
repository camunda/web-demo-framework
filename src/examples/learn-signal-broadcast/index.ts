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
 * a signal unblocks *every* open subscription for that signal name. The model
 * forks into two branches that each park on their own catch event for
 * `all-clear`, so a single `broadcastSignal` visibly releases both at once —
 * the property that distinguishes a signal from a message, demonstrated
 * rather than only asserted in the blurb. (Two concurrent subscriptions in
 * one instance is enough to show it; the runner only ever creates one
 * instance, so the cross-instance half of the claim stays prose.)
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

const REOPEN_FLOOR = `async (job, { sleep, trace }) => {
  trace("same all-clear — reopening the floor");
  await sleep(400);

  return { floorReopened: true };
}`;

const learnSignalBroadcast: ExampleDef = {
  id: "learn-signal-broadcast",
  title: "Signal intermediate catch event + broadcast",
  group: "learn-bpmn",
  blurb:
    "A signal intermediate catch event parks the token until someone broadcasts a signal by name. Unlike a message, a signal isn't correlated to one waiting instance — broadcasting it unblocks every open subscription for that name at once. That's why this model forks: both \"Ops waits for all-clear\" and \"Floor waits for all-clear\" park on the same signal, and one broadcast releases the pair together, so 'Resume operations' and 'Reopen the floor' both run before the join lets the token reach the end event. Run it and watch both branches light up off a single broadcast — a message could not do that, because a correlation key targets exactly one waiting subscription. To see the name being matched: in the Code panel, open the model tab, click either catch event, and expand Signal in the properties panel on the right — Name holds `all-clear` on both. Change it on just one of them and hit Run: the page broadcasts the name the first waiting subscription is on, so that branch proceeds and the other stays parked, and the join never completes.",
  docsUrl: "https://docs.camunda.io/docs/components/modeler/bpmn/signal-events/signal-event/",
  bpmn,
  seed: {},
  handlers: [
    {
      elementId: "Activity_resume",
      standsInFor: "job worker — resume-operations",
      source: RESUME_OPERATIONS,
    },
    {
      elementId: "Activity_reopen",
      standsInFor: "job worker — reopen-floor",
      source: REOPEN_FLOOR,
    },
  ],
};

export default learnSignalBroadcast;
