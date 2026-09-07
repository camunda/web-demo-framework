import { TOUR_ANCHOR, type TourDef } from "../../framework/tour";

/**
 * A five-step guided walkthrough of the "likely cleared" run: press Run, see
 * the agent pick its first tool, look at where the token reaches it, see the
 * export notification a cleared shipment fires, then look at what ended up in
 * the variables panel. Uses the example's default seed/scenario
 * (`SCENARIO_CLEARED`, see `./index.ts`).
 *
 * A plain click-through — it spotlights each part in turn and advances on the
 * reader's Next, independent of what the run is doing (see `useTour`). Under
 * the embed's `?autostart=1` the run has usually finished by the time the tour
 * is opened, so these steps read as "here is what happened, and where".
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
    },
    {
      title: "A cleared shipment notifies the export team",
      description:
        "Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",
      target: { elementId: "NotifyExportTeam" },
    },
    {
      title: "Everything the run recorded",
      description:
        "The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",
      target: { anchor: TOUR_ANCHOR.variablesPanel },
    },
  ],
};
