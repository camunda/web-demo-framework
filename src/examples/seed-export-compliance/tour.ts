import { TOUR_ANCHOR, type TourDef } from "../../framework/tour";

/**
 * A five-step guided tour of the default "likely cleared" run: press Run,
 * see the agent pick its first tool, watch the token actually reach it,
 * watch the export notification fire once the agent clears the shipment,
 * then look at what ended up in the variables panel. Uses the example's
 * default seed/scenario (`SCENARIO_CLEARED`, see `./index.ts`), which
 * reaches `EndEvent_ComplianceDecisionSent` without a human task — so this
 * tour's `successEvent` (the instance completing) is reachable without the
 * reader doing anything beyond pressing Run once.
 */
export const complianceTour: TourDef = {
  id: "compliance-walkthrough",
  label: "Take the tour",
  steps: [
    {
      title: "Start a run",
      description:
        "Press Run to send a shipment through the compliance agent.",
      target: { anchor: TOUR_ANCHOR.runButton },
    },
    {
      title: "The agent picks its own tools",
      description:
        "This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",
      target: { elementId: "ComplianceCheckAgent" },
    },
    {
      title: "Watch the token move",
      description:
        "The agent's first move is to look up the genetic marker mentioned in the notes.",
      target: { elementId: "VerifyGeneticMarker" },
      waitFor: { kind: "activeElement", elementId: "VerifyGeneticMarker" },
    },
    {
      title: "A cleared shipment notifies the export team",
      description:
        "Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",
      target: { elementId: "NotifyExportTeam" },
      waitFor: { kind: "elementCompleted", elementId: "NotifyExportTeam" },
    },
    {
      title: "Everything the run recorded",
      description:
        "The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",
      target: { anchor: TOUR_ANCHOR.variablesPanel },
    },
  ],
  successEvent: { kind: "instanceCompleted" },
};
