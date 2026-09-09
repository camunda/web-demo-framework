import type { ExampleMeta } from "../../framework/types";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "learn-exclusive-gateway",
  title: "Exclusive gateway",
  group: "learn-bpmn",
  blurb: [
    "An exclusive gateway is the fork in the road: exactly one of its outgoing sequence flows is taken, chosen by evaluating each flow's FEEL condition in declaration order, first match wins. A default flow (drawn with a slash through its start, not a diamond marker) has no condition and is the fallback taken when every conditional flow evaluates false — that's what makes an exclusive gateway safe to deploy without an explicit case for every value.",
    "Run this and watch 'Check order total' decide a route variable, then watch the gateway send the token down 'Express ship' when the order is large enough, or 'Standard ship' otherwise (the default flow). Try both from the Start panel on the right: it holds a \"Small order\" and a \"Large order\" button that swap the payload for you.",
    "To see the conditions themselves, open the model tab in the Code panel and click either arrow leaving the gateway — the FEEL is under Condition. Get one wrong (or misspell the variable name) and the flow you meant to take is silently skipped in favour of whichever one does evaluate true, or the default if none do — no error, just the wrong branch.",
  ].join("\n\n"),
  docsUrl: "https://docs.camunda.io/docs/components/modeler/bpmn/gateways/gateways/#exclusive-gateway",
};

export default meta;
