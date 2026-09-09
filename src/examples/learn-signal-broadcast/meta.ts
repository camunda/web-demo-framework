import type { ExampleMeta } from "../../framework/types";

/** Gallery card copy for this example — see `ExampleMeta`. */
const meta: ExampleMeta = {
  id: "learn-signal-broadcast",
  title: "Signal intermediate catch event + broadcast",
  group: "learn-bpmn",
  blurb: [
    "A signal intermediate catch event parks the token until someone broadcasts a signal by name. Unlike a message, a signal isn't correlated to one waiting instance — broadcasting it unblocks every open subscription for that name at once.",
    "That's why this model forks: both \"Ops waits for all-clear\" and \"Floor waits for all-clear\" park on the same signal, and one broadcast releases the pair together, so 'Resume operations' and 'Reopen the floor' both run before the join lets the token reach the end event. Run it and watch both branches light up off a single broadcast — the Activity panel says \"parked on 2 open signal subscriptions\" before the one 📡 line that releases them both. A message could not do that, because a correlation key targets exactly one waiting subscription.",
    "To see the name being matched: in the Code panel, open the model tab, click either catch event, and expand Signal in the properties panel on the right — Name holds `all-clear`. Each catch event owns its own signal definition, so editing the name there changes only that branch: do it on one of them and hit Run, and the panel now reports two broadcasts instead of one, because the branches no longer share a name and each needs its own. The count of broadcasts is exactly the count of distinct signal names being waited on.",
  ].join("\n\n"),
  docsUrl: "https://docs.camunda.io/docs/components/modeler/bpmn/signal-events/signal-event/",
};

export default meta;
