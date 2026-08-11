import type { ExampleDef } from "../../framework/types";
import bpmn from "./model.bpmn?raw";

/**
 * The order process from `camunda-8-get-started`, extended with boundary
 * events — the first example in this repo exercising them. Every prior
 * example is a happy-path through plain service tasks; here a token can also
 * be interrupted mid-task by a timer or a thrown BPMN error and rerouted.
 *
 * Both boundary paths are deliberately reader-driven rather than automatic:
 * see `docs/engine-coverage.md`'s note that a job handler dispatched through
 * this framework's normal drive loop (`dispatchRound`) can only complete or
 * fail a job — there is no way for handler code to call the engine's
 * `throwError` command, the one that actually routes a token through an
 * error boundary catch instead of raising an incident. So "Charge payment"
 * and "Ship items" are marked `manualControl` (see `framework/types.ts`):
 * their jobs are held out of the automatic loop, and `ExampleRunner` renders
 * a small panel letting the reader choose, right when each is reached,
 * between completing it normally and firing its boundary event (a thrown
 * error for charge-payment, the shipping-delay timer for ship-items).
 * "Check inventory" always completes automatically — this example still has
 * a genuine, unattended happy path.
 */

const CHECK_INVENTORY = `async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`;

const CHARGE_PAYMENT = `async (job, { num, sleep }) => {
  // This job is held back manually (see index.ts's manualControl) rather
  // than dispatched here — the runner offers a choice between completing it
  // (this code, via the "Complete normally" button) and throwing a BPMN
  // error on it directly (the "Simulate: card declined" button), which is
  // what actually routes the token through the "Card declined" boundary
  // event below rather than just this handler failing.
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`;

const SHIP_ITEMS = `async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`;

export const orderProcessBoundaryEvents: ExampleDef = {
  id: "order-process-boundary-events",
  title: "Order process with boundary events",
  blurb:
    "The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",
  docsUrl:
    "https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",
  bpmn,
  seed: { item: "camunda-t-shirt", quantity: 3 },
  handlers: [
    {
      elementId: "Activity_0tw2fu0",
      standsInFor: "job worker — check-inventory",
      source: CHECK_INVENTORY,
    },
    {
      elementId: "Activity_1ppsbgi",
      standsInFor: "job worker — charge-payment",
      source: CHARGE_PAYMENT,
      manualControl: {
        label: "Charge payment method",
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
      elementId: "Activity_08pg6im",
      standsInFor: "job worker — ship-items",
      source: SHIP_ITEMS,
      manualControl: {
        label: "Ship items",
        completeLabel: "✅ Ship it",
        action: {
          kind: "timer",
          label: "🕐 Fire the shipping-delayed timer",
        },
      },
    },
  ],
};
