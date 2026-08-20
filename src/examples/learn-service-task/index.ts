import type { ExampleDef } from "../../framework/types";
import bpmn from "./model.bpmn?raw";

/**
 * Learn BPMN: plain service tasks + sequential flow.
 *
 * This is the reference construct page for issue #64 ("Learn BPMN: one
 * runnable page per BPMN construct") — every sibling `learn-<construct>`
 * page copies this file's shape: a `model.bpmn` plus this manifest, `group:
 * "learn-bpmn"`, and the model's XML imported with `?raw` exactly as every
 * existing scenario example already does (see `order-process/index.ts`).
 *
 * **Registration convention (read this before adding another `learn-*`
 * page)**: `src/examples/index.ts` auto-discovers every `src/examples/
 * learn-<construct>/index.ts` module via `import.meta.glob`, and expects
 * each one to export its `ExampleDef` as the **default export** — exactly
 * like this file does below. Do not hand-add a `learn-*` example to
 * `index.ts`; the glob is the only registration mechanism this group uses.
 *
 * The model itself is deliberately tiny — two service tasks in a straight
 * line, nothing incidental — based on the already-verified pattern in
 * `src/examples/order-process/model.bpmn` (three service tasks, straight-line
 * flow, per `docs/engine-coverage.md`), trimmed down for teaching rather than
 * scenario realism.
 */
const PREPARE_PACKAGE = `async (job, { text, sleep, trace }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "widget");

  trace("packing " + item);
  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { packed: true };
}`;

const DISPATCH_COURIER = `async (job, { sleep, trace }) => {
  trace("handing over to the courier");
  await sleep(400);

  return { dispatched: true, tracking: "SVC" + Math.floor(Math.random() * 1e9) };
}`;

const learnServiceTask: ExampleDef = {
  id: "learn-service-task",
  title: "Service task + sequence flow",
  group: "learn-bpmn",
  blurb:
    "A service task is a unit of work a worker (not a human) performs; a sequence flow is the arrow that hands the token from one to the next once its task completes. Run this and watch each task activate, run its handler, and complete in order — Prepare package, then Dispatch courier — before the process reaches its end event. Miss the zeebe:taskDefinition type on a service task and the model still deploys fine, but no worker is ever listening for that job type, so the run stalls forever waiting on a job nothing services — see the note below for how that looks.",
  docsUrl: "https://docs.camunda.io/docs/components/modeler/bpmn/service-tasks/",
  bpmn,
  seed: { item: "camunda-t-shirt" },
  handlers: [
    {
      elementId: "Activity_prepare",
      standsInFor: "job worker — prepare-package",
      source: PREPARE_PACKAGE,
    },
    {
      elementId: "Activity_dispatch",
      standsInFor: "job worker — dispatch-courier",
      source: DISPATCH_COURIER,
    },
  ],
};

export default learnServiceTask;
