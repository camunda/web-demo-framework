import type { ExampleMeta } from "../../framework/types";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "learn-user-task-form",
  title: "User task + form",
  group: "learn-bpmn",
  blurb: [
    "A user task is a step a human completes, not a worker — the token parks at the task until someone submits its form, then moves on.",
    "Run this and watch the process reach 'Review request' and wait; fill in the decision form that appears in its own card under the diagram and press Complete task to see the token resume and the process reach its end event.",
    "What binds that form to the task is one property: in the Code panel, open the model tab, click \"Review request\", and expand Form in the properties panel on the right — Form ID names the form the runner looks up and renders. A user task with no form binding still deploys and still parks the token, but the runner has nothing to render for it, so it offers a bare Complete button that finishes the task with no variables. Revert to original puts the binding back.",
  ].join("\n\n"),
  docsUrl: "https://docs.camunda.io/docs/components/modeler/bpmn/user-tasks/",
};

export default meta;
