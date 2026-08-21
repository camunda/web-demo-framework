import type { ExampleDef } from "../../framework/types";
import bpmn from "./model.bpmn?raw";

/**
 * Learn BPMN: message intermediate catch event + correlation key.
 *
 * One of the `learn-<construct>` pages for issue #64 ("Learn BPMN: one
 * runnable page per BPMN construct") — copies the shape of the reference page
 * `src/examples/learn-service-task/index.ts`: a `model.bpmn` plus this
 * manifest, `group: "learn-bpmn"`, and the model's XML imported with `?raw`.
 *
 * The model is deliberately tiny — a start event, one message catch event,
 * one service task, one end event — based on `tools/probe/fixtures/message.bpmn`
 * (the already-`Verified` fixture cited in `docs/engine-coverage.md`'s
 * "Message catch event + correlation" row), trimmed for teaching rather than
 * scenario realism.
 *
 * A message catch event doesn't wait on a job type a worker services — it
 * waits on a **published message** whose `correlationKey` matches the value
 * the instance's own subscription resolved to (here, `=orderId`). There is no
 * external broker in the browser, so the runner correlates the message itself
 * the moment the wait state is reached (see `ExampleRunner`'s `driveLoop`,
 * which reacts to `SettleReason: "messages"` by echoing the waiting
 * subscription's own `messageName`/`correlationKey` straight back via
 * `BojtosSession.correlateMessage`) — that's the in-browser stand-in for "some
 * other system published shipment-confirmed for this order". Point the
 * `correlationKey` expression at a variable the instance never sets and the
 * model still deploys, but the key the engine computes is not the one a
 * publish carries, so the catch event waits forever. Omitting
 * `zeebe:subscription` altogether is the opposite failure: the engine rejects
 * the model at DEPLOY time (`message '…' has no zeebe:subscription
 * correlationKey`) — see `docs/engine-coverage.md`'s "Message intermediate
 * catch event + correlation" row.
 */
const RECORD_CONFIRMATION = `async (job, { text, trace }) => {
  const orderId = text("orderId", "unknown-order");

  trace("shipment confirmed for " + orderId + " — recording it");

  return { shipmentRecorded: true };
}`;

const learnMessageCorrelation: ExampleDef = {
  id: "learn-message-correlation",
  title: "Message catch event + correlation key",
  group: "learn-bpmn",
  blurb:
    "A message intermediate catch event pauses the token until a message with a matching name and correlation key is published — the BPMN analogue of \"wait for this specific order's shipment to be confirmed\", not just \"wait for any shipment-confirmed message\". Run this and watch the token park on the catch event; there's no external broker in the browser, so the page correlates the message itself the instant the wait is reached, echoing back the exact correlationKey (`=orderId`) the subscription resolved to — then the token resumes into Record confirmation and on to the end event. Typo the variable the correlationKey reads and the model still deploys fine, but the key the engine computes is not the one a publish carries, so the catch event waits forever. Leave zeebe:subscription off altogether and you get the opposite failure: the engine rejects the model at deploy time with \"has no zeebe:subscription correlationKey\" — docs/engine-coverage.md records both.",
  docsUrl:
    "https://docs.camunda.io/docs/components/modeler/bpmn/message-events/",
  bpmn,
  seed: { orderId: "ORD-42" },
  handlers: [
    {
      elementId: "Activity_record",
      standsInFor: "job worker — record-confirmation",
      source: RECORD_CONFIRMATION,
    },
  ],
};

export default learnMessageCorrelation;
