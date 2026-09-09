import type { ExampleDef } from "../../framework/types";
import meta from "./meta";
import bpmn from "./model.bpmn?raw";

/**
 * Learn BPMN: parallel multi-instance service task.
 *
 * A multi-instance activity runs its task once per element of a collection —
 * here, once per item in `items` — spawning that many separate job instances
 * of the *same* element id, all in parallel, and only lets the token continue
 * past the activity once every one of them has completed. Run this and watch
 * three "Process item" jobs activate and complete (in any order, since they
 * run concurrently), before the process reaches its end event.
 *
 * The construct hinges entirely on `inputCollection` in
 * `multiInstanceLoopCharacteristics`/`zeebe:loopCharacteristics`: per
 * `docs/engine-coverage.md`, a bare `multiInstanceLoopCharacteristics` with no
 * `inputCollection` silently degenerates to an ordinary single-instance
 * activity — no error, no incident, just one job instead of many. This model
 * declares `inputCollection="=items"` (a FEEL expression reading the `items`
 * seed variable) plus `inputElement="item"` (the per-instance variable each
 * job sees) and `outputCollection="results"` (where each instance's
 * `outputElement="=result"` is collected back), based on the already-verified
 * `tools/probe/fixtures/multi-instance.bpmn`.
 *
 * Shape/conventions copied from `src/examples/learn-service-task/index.ts`
 * (the reference construct page for issue #64) — see that file for the
 * registration convention (`src/examples/index.ts` auto-discovers every
 * `learn-<construct>/index.ts` via `import.meta.glob`; default-export the
 * `ExampleDef`, do not hand-register it).
 */
const PROCESS_ITEM = `async (job, { text, sleep, trace }) => {
  // Each parallel instance gets its own 'item' from the input collection.
  const item = text("item", "widget");

  trace("processing " + item);
  await sleep(400);

  // Whatever you return is merged onto this instance's scope, then collected
  // into the process-level 'results' array via outputElement/outputCollection.
  return { result: item.toUpperCase() + "-DONE" };
}`;

const learnMultiInstanceParallel: ExampleDef = {
  ...meta,
  bpmn,
  seed: { items: ["apple", "banana", "cherry"] },
  scenarios: [
    {
      label: "One item — a single instance",
      variables: { items: ["apple"] },
    },
    {
      label: "Three items — fans out to three",
      variables: { items: ["apple", "banana", "cherry"] },
    },
    {
      label: "Six items — fans out to six",
      variables: {
        items: ["apple", "banana", "cherry", "damson", "elderberry", "fig"],
      },
    },
  ],
  handlers: [
    {
      elementId: "Activity_process",
      standsInFor: "job worker — process-item",
      source: PROCESS_ITEM,
    },
  ]
};

export default learnMultiInstanceParallel;
