import type { ExampleDef } from "../../framework/types";
import bpmn from "./model.bpmn?raw";

/**
 * Learn BPMN: exclusive gateway (conditional sequence flow).
 *
 * Sibling `learn-<construct>` page for issue #64, copying `learn-service-
 * task`'s shape: a `model.bpmn` plus this manifest, `group: "learn-bpmn"`, and
 * the model's XML imported with `?raw` exactly as every existing example does.
 *
 * Unlike the other sibling tasks in this epic, this construct had no coverage
 * row or probe fixture before this page was built — see
 * `tools/probe/fixtures/exclusive-gateway.bpmn` (the new fixture this page's
 * model is trimmed from) and the "Exclusive gateway" row it earned in
 * `docs/engine-coverage.md`, both added alongside this page after the probe
 * confirmed both the conditional flow and the `default` flow resolve to the
 * correct sequence flow and every instance completes with 0 incidents.
 *
 * The model is a service task ("Check order total") that decides the
 * `route` variable, then an exclusive gateway with one conditional flow
 * (`=route = "express"`) and one `default` flow to the other branch — nothing
 * incidental beyond the two service tasks needed to make each branch visibly
 * distinct.
 */

const CHECK_ORDER_TOTAL = `async (job, { num, trace, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const orderTotal = num("orderTotal", 40);

  await sleep(300);

  // This is the variable the gateway's conditional sequence flow reads —
  // whatever this handler decides is what actually steers the token.
  const route = orderTotal >= 100 ? "express" : "standard";
  trace(\`order total $\${orderTotal} -> route: \${route}\`);

  // Whatever you return is merged onto the process instance.
  return { route };
}`;

const EXPRESS_SHIP = `async (job, { trace, sleep }) => {
  trace("expedited courier picks up the order");
  await sleep(400);

  return { shipped: true, method: "express" };
}`;

const STANDARD_SHIP = `async (job, { trace, sleep }) => {
  trace("order queued for standard courier pickup");
  await sleep(400);

  return { shipped: true, method: "standard" };
}`;

const learnExclusiveGateway: ExampleDef = {
  id: "learn-exclusive-gateway",
  title: "Exclusive gateway",
  group: "learn-bpmn",
  blurb:
    "An exclusive gateway is the fork in the road: exactly one of its outgoing sequence flows is taken, chosen by evaluating each flow's FEEL condition in declaration order, first match wins. A default flow (drawn with a slash through its start, not a diamond marker) has no condition and is the fallback taken when every conditional flow evaluates false — that's what makes an exclusive gateway safe to deploy without an explicit case for every value. Run this and watch 'Check order total' decide a route variable, then watch the gateway send the token down 'Express ship' when the order is large enough, or 'Standard ship' otherwise (the default flow) — try both by editing orderTotal in the start form. Get the condition wrong (or misspell the variable name) and the flow you meant to take is silently skipped in favour of whichever one does evaluate true, or the default if none do — no error, just the wrong branch.",
  docsUrl: "https://docs.camunda.io/docs/components/modeler/bpmn/gateways/gateways/#exclusive-gateway",
  bpmn,
  seed: { orderTotal: 40 },
  scenarios: [
    {
      label: "Small order — standard ship (default flow)",
      variables: { orderTotal: 40 },
    },
    {
      label: "Large order — express ship (conditional flow)",
      variables: { orderTotal: 150 },
    },
  ],
  handlers: [
    {
      elementId: "Activity_check_order",
      standsInFor: "job worker — check-order-total",
      source: CHECK_ORDER_TOTAL,
    },
    {
      elementId: "Activity_express_ship",
      standsInFor: "job worker — express-ship",
      source: EXPRESS_SHIP,
    },
    {
      elementId: "Activity_standard_ship",
      standsInFor: "job worker — standard-ship",
      source: STANDARD_SHIP,
    },
  ],
};

export default learnExclusiveGateway;
