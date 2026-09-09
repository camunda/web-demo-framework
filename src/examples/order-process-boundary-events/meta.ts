import type { ExampleMeta } from "../../framework/types";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "order-process-boundary-events",
  title: "Order process with boundary events",
  blurb:
    "The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",
  docsUrl:
    "https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",
};

export default meta;
