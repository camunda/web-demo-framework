import type { ExampleDef } from "../../framework/types";
import bpmn from "./model.bpmn?raw";

/**
 * The order process from `camunda-8-get-started` — the second consumer, and the
 * one that proves the framework isn't secretly shaped around the first.
 *
 * No agent, no forms, no human step: three service tasks and a gateway. The
 * runner should notice that from the model alone and simply not render a brain
 * panel or a tool manifest.
 */

const CHECK_INVENTORY = `async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`;

const CHARGE_PAYMENT = `async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`;

const SHIP_ITEMS = `async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`;

export const orderProcess: ExampleDef = {
  id: "order-process",
  title: "Order process with service workers",
  blurb:
    "The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",
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
    },
    {
      elementId: "Activity_08pg6im",
      standsInFor: "job worker — ship-items",
      source: SHIP_ITEMS,
    },
  ],
};
