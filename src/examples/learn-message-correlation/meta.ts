import type { ExampleMeta } from "../../framework/types";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "learn-message-correlation",
  title: "Message catch event + correlation key",
  group: "learn-bpmn",
  blurb: [
    "A message intermediate catch event pauses the token until a message with a matching name and correlation key is published — the BPMN analogue of \"wait for this specific order's shipment to be confirmed\", not just \"wait for any shipment-confirmed message\".",
    "Run this and watch the token park on the catch event; there's no external broker in the browser, so the page correlates the message itself once the wait is reached, echoing back the exact correlationKey (`=orderId`) the subscription resolved to — the Activity panel logs the wait and the correlation as separate lines — then the token resumes into Record confirmation and on to the end event.",
    "To see where that key comes from: in the Code panel, open the model tab, click \"Wait for shipment confirmed\", and expand Message in the properties panel on the right. Subscription correlation key holds `orderId` (the `=` beside the box marks it as a FEEL expression), and Name holds `shipment-confirmed` — those two together are what a publisher has to match. Edit them freely; because this page publishes the key the subscription itself resolved, the run stays self-consistent either way.",
    "In a real deployment, where a separate system does the publishing, pointing that expression at a variable the instance never sets leaves the catch event waiting forever, and omitting zeebe:subscription altogether is rejected at deploy time with \"has no zeebe:subscription correlationKey\" — docs/engine-coverage.md records both.",
  ].join("\n\n"),
  docsUrl:
    "https://docs.camunda.io/docs/components/modeler/bpmn/message-events/",
};

export default meta;
