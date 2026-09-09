import type { ExampleMeta } from "../../framework/types";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "learn-error-boundary",
  title: "Error boundary event",
  group: "learn-bpmn",
  blurb: [
    "A boundary event attached to a task catches something that happens while the task is running and reroutes the token — here, a thrown BPMN error.",
    "Hit Run and the process stops at \"Charge payment (guarded)\" with a card under the diagram offering two buttons: press \"Simulate: card declined\" and watch the attached boundary event catch the error, skipping straight to \"Handled — order cancelled\".",
    "Then Reset, complete that first job normally, and decline the second one on \"Ship items (unguarded)\" — this time it becomes an incident, because that task has no boundary event and the engine has nothing to reroute the token with.",
    "That's exactly what breaks if you forget the boundary event (or give it the wrong errorRef): a failure that should be a modelled alternate path becomes a stuck instance a human has to resolve by hand. Complete both jobs normally instead to see the unattended happy path all the way to \"Order shipped\".",
  ].join("\n\n"),
  docsUrl: "https://docs.camunda.io/docs/components/modeler/bpmn/boundary-events/",
};

export default meta;
