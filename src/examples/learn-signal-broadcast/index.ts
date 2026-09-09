import type { ExampleDef } from "../../framework/types";
import meta from "./meta";
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
 * matching open subscription; completes in 3 rounds) — reshaped for teaching
 * rather than probe realism: a parallel fork into two `intermediateCatchEvent`s
 * that both wait on the same `bpmn:signal`, a service task on each branch, and
 * a parallel join — nothing incidental.
 *
 * Each catch event references its own `bpmn:signal` element, both initially
 * named `all-clear`. Matching is by name, so one broadcast still releases both
 * — but the properties panel's Name field edits the referenced definition, so
 * a shared one would rename both branches at once and the blurb's "change it
 * on one of them" would be impossible to carry out.
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
  ...meta,
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
  ]
};

export default learnSignalBroadcast;
