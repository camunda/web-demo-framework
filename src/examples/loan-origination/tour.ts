import { TOUR_ANCHOR, type TourDef } from "../../framework/tour";

/**
 * A five-step walkthrough of the "strong applicant" run: press Run, watch the
 * agent pick its tools, look at the underwriting policy, then see the point of
 * the whole example — the senior-officer review that every application must
 * pass through before an outcome — and finally what the run recorded.
 *
 * A plain click-through — it spotlights each part in turn and advances on the
 * reader's Next, independent of what the run is doing (see `useTour`). The
 * instance never completes on its own here (it parks at the human review task),
 * which is exactly the point the fourth step is making.
 */
export const loanTour: TourDef = {
  id: "loan-origination-walkthrough",
  label: "Take the tour",
  steps: [
    {
      title: "Start a run",
      description:
        "Press Run to send a loan application through the origination agent.",
      target: { anchor: TOUR_ANCHOR.runButton },
    },
    {
      title: "The agent picks its own tools",
      description:
        "This AI Agent reads the application and decides, turn by turn, which tools to call — look up the customer, pull a credit bureau report, run the underwriting policy, update the status. Nothing here is a fixed sequence.",
      target: { elementId: "LoanOriginationAgent" },
    },
    {
      title: "Policy, not opinion",
      description:
        "The assessment computes the debt-to-income ratio, a risk band and a recommendation from the verified figures — the deterministic policy the senior officer's review leans on.",
      target: { elementId: "AssessApplication" },
    },
    {
      title: "Every application meets a human",
      description:
        "Whatever the agent recommended, the token now waits here: no offer and no decline is reachable without a senior officer first signing off. Open the task to record the decision — the gateway routes on it.",
      target: { elementId: "SeniorOfficerReview" },
    },
    {
      title: "Everything the run recorded",
      description:
        "The variables panel shows the customer profile, the bureau report, the debt-to-income and risk band, and the recommendation — exactly what each tool wrote for the officer to weigh.",
      target: { anchor: TOUR_ANCHOR.variablesPanel },
    },
  ],
};
