import type { ExampleDef } from "../../framework/types";
import bpmn from "./model.bpmn?raw";
import reviewForm from "./review.form.json";

/**
 * Learn BPMN: user task + form.
 *
 * A `learn-*` construct page, following the shape and conventions established
 * by `src/examples/learn-service-task/index.ts` (issue #64's reference page):
 * a `model.bpmn` plus this manifest, `group: "learn-bpmn"`, and the model's
 * XML imported with `?raw` exactly as every existing scenario example already
 * does. See that file's doc comment for the full registration convention —
 * `src/examples/index.ts` auto-discovers this module via `import.meta.glob`
 * and expects the `ExampleDef` as the default export, which is why this file
 * is not hand-registered anywhere.
 *
 * A user task is the point where a BPMN process hands control to a human: the
 * token waits at the task until someone completes its form, and only then
 * moves on. There is no job worker here — no `zeebe:taskDefinition` — because
 * nothing services this element automatically; a person does, through the
 * form the runner renders from `forms` below.
 *
 * The model is deliberately tiny — a single `zeebe:userTask` with a
 * `zeebe:formDefinition` binding, reached directly from a start event and
 * followed directly by an end event, nothing incidental — based on the
 * already-verified `zeebe:userTask`/`zeebe:formDefinition` shape used by the
 * "User tasks + forms" row's cited evidence in `docs/engine-coverage.md`:
 * `src/examples/seed-export-compliance/model.bpmn`'s
 * `HumanTask_ClarifyComplianceIssues` and
 * `src/examples/loan-origination/model.bpmn`'s `SeniorOfficerReview`.
 */
const learnUserTaskForm: ExampleDef = {
  id: "learn-user-task-form",
  title: "User task + form",
  group: "learn-bpmn",
  blurb:
    "A user task is a step a human completes, not a worker — the token parks at the task until someone submits its form, then moves on. Run this and watch the process reach 'Review request' and wait; fill in the decision form that appears in its own card under the diagram and press Complete task to see the token resume and the process reach its end event. What binds that form to the task is one property: in the Code panel, open the model tab, click \"Review request\", and expand Form in the properties panel on the right — Form ID names the form the runner looks up and renders. A user task with no form binding still deploys and still parks the token, but the runner has nothing to render for it, so it offers a bare Complete button that finishes the task with no variables. Revert to original puts the binding back.",
  docsUrl: "https://docs.camunda.io/docs/components/modeler/bpmn/user-tasks/",
  bpmn,
  forms: {
    "learn-user-task-form-review": reviewForm,
  },
  seed: {
    requester: "Priya Shah",
    details: "Approve access to the shared design-review workspace.",
  },
  handlers: [],
};

export default learnUserTaskForm;
