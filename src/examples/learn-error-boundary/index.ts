import type { ExampleDef } from "../../framework/types";
import bpmn from "./model.bpmn?raw";

/**
 * Learn BPMN: the error boundary event.
 *
 * A boundary event lets a token be pulled off an activity that's still
 * running and rerouted elsewhere in the diagram — this page uses the error
 * flavour: attach one to a task, give it an `errorRef`, and a thrown BPMN
 * error matching that error interrupts the task and routes the token through
 * the boundary's own outgoing flow instead of the task's normal one.
 *
 * The model has two, deliberately near-identical, service tasks in sequence:
 *
 *  - "Charge payment (guarded)" has an error boundary event attached, wired
 *    to catch `CHARGE_DECLINED`. Run it and choose "Simulate: card declined"
 *    and watch the token skip the normal flow and land on "Handled — order
 *    cancelled" instead — the error was caught.
 *  - "Ship items (unguarded)" is the same shape but has NO boundary event.
 *    Choose its own "Simulate: carrier rejected" action and watch the run
 *    stop with an incident instead of reaching an end event at all — nothing
 *    in the diagram is listening for an error there, so the engine can't
 *    reroute the token anywhere; it just blocks the instance until a human
 *    resolves the incident. That's the failure mode this construct exists to
 *    prevent: forget the boundary event (or mismatch its `errorRef`) on a
 *    task that can genuinely fail, and every failure becomes a stuck,
 *    manually-resolved incident rather than a modelled alternate path.
 *
 * Both "throw the error" actions are reader-driven rather than automatic —
 * see `HandlerDef.manualControl` (framework/types.ts): a job dispatched
 * through this framework's normal drive loop (`dispatchRound`) can only
 * complete or fail a job, there is no way for ordinary handler code to reach
 * the engine's `throwError` command, so `ExampleRunner` renders a small panel
 * letting the reader choose, right when each job is reached, between
 * completing it normally (continuing the happy path) and firing the error
 * directly against the session. Completing both jobs normally instead runs
 * the whole model to "Order shipped" with no incident at all — a genuine,
 * unattended happy path.
 *
 * Based on the already-verified `tools/probe/fixtures/error-boundary.bpmn`
 * (see docs/engine-coverage.md's "Boundary events" row), trimmed and
 * extended with the unguarded twin purely to make the contrast visible on
 * one page.
 */

const CHARGE_PAYMENT = `async (job, { sleep }) => {
  // This job is held back manually (see index.ts's manualControl) rather
  // than dispatched here — the runner offers a choice between completing it
  // (this code, via the "Complete normally" button) and throwing a BPMN
  // error on it directly (the "Simulate: card declined" button), which is
  // what actually routes the token through the "Charge declined" boundary
  // event below rather than just this handler failing.
  await sleep(400);

  return { charged: true };
}`;

const SHIP_ITEMS = `async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. Unlike
  // Activity_guarded, this task has no boundary event: firing its error
  // action has nothing to catch it, so it becomes an incident instead of a
  // handled alternate path. Completing it normally hands over to the
  // carrier and reaches "Order shipped".
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`;

const learnErrorBoundary: ExampleDef = {
  id: "learn-error-boundary",
  title: "Error boundary event",
  group: "learn-bpmn",
  blurb:
    "A boundary event attached to a task catches something that happens while the task is running and reroutes the token — here, a thrown BPMN error. Run this and use each task's manual-control panel: fire the error on \"Charge payment (guarded)\" and watch its attached boundary event catch it, skipping straight to \"Handled — order cancelled\". Then fire the same kind of error on \"Ship items (unguarded)\" and watch it become an incident instead — that task has no boundary event, so the engine has nothing to reroute the token with. That's exactly what breaks if you forget the boundary event (or give it the wrong errorRef): a failure that should be a modelled alternate path becomes a stuck instance a human has to resolve by hand. Complete both jobs normally instead to see the unattended happy path all the way to \"Order shipped\".",
  docsUrl: "https://docs.camunda.io/docs/components/modeler/bpmn/boundary-events/",
  bpmn,
  seed: {},
  handlers: [
    {
      elementId: "Activity_guarded",
      standsInFor: "job worker — charge-payment",
      source: CHARGE_PAYMENT,
      manualControl: {
        label: "Charge payment (guarded)",
        completeLabel: "✅ Complete normally",
        action: {
          kind: "error",
          errorCode: "CHARGE_DECLINED",
          message: "The card issuer declined the charge.",
          label: "❌ Simulate: card declined",
        },
      },
    },
    {
      elementId: "Activity_unguarded",
      standsInFor: "job worker — ship-items",
      source: SHIP_ITEMS,
      manualControl: {
        label: "Ship items (unguarded)",
        completeLabel: "✅ Ship it",
        action: {
          kind: "error",
          errorCode: "CARRIER_REJECTED",
          message: "The carrier rejected the shipment — nothing catches this.",
          label: "❌ Simulate: carrier rejected (becomes an incident)",
        },
      },
    },
  ],
};

export default learnErrorBoundary;
