import { fireEvent, render, waitFor, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReifiedProcess } from "./ReifiedProcess";
import type { TraceEntry } from "../types";

// Following the repo convention for bpmn-js tests (see RuntimeDiagram.test.tsx),
// renders aren't torn down between cases — mounting/destroying a second viewer
// mid-import is flaky — so text queries are scoped to each render's container.

/**
 * The panel's real contract is that the reified DAG's emitted BPMN actually
 * imports into bpmn-js (not just that `reifyBpmn` returns a string). So this
 * test feeds a loan-origination-shaped trace, expands the panel, and asserts
 * the viewer renders the reified nodes — including the one true hand-off,
 * AssessApplication → IssueLoanOffer via `riskBand`.
 */

const vars = (
  elementId: string,
  reads: string[],
  result: Record<string, unknown>,
  turn: number,
): TraceEntry => ({ kind: "vars", text: "", elementId, reads, result, turn });

const activate = (elementId: string, reason: string, turn: number): TraceEntry => ({
  kind: "agent",
  text: `🤖 calling ${elementId}`,
  elementId,
  reason,
  turn,
});

// Mirrors what the runner stamps for a real loan-origination run: each turn the
// agent activates a tool with a stated reason, then that tool's vars land.
// Three data-independent gather tools, then Assess (writes riskBand), then
// Issue (reads riskBand directly off job.variables).
const LOG: TraceEntry[] = [
  activate("QueryCustomer", "First I'll pull the customer profile.", 1),
  vars("QueryCustomer", ["applicantName"], { customerProfile: {}, toolCallResult: "ok" }, 1),
  activate("CreditBureauLookup", "Now the credit bureau report.", 2),
  vars("CreditBureauLookup", ["applicantName", "creditScore"], { bureauReport: {}, toolCallResult: "ok" }, 2),
  activate("AssessApplication", "Assess the application against the risk model.", 3),
  vars("AssessApplication", ["annualIncome", "creditScore", "loanAmount"], { riskBand: "A", recommendation: "approve", toolCallResult: "ok" }, 3),
  activate("UpdateApplicationStatus", "Record the status.", 4),
  vars("UpdateApplicationStatus", [], { applicationStatus: "assessed", toolCallResult: "ok" }, 4),
  activate("IssueLoanOffer", "Risk band A — I can issue the offer.", 5),
  vars("IssueLoanOffer", ["loanAmount", "riskBand"], { loanOffer: {}, toolCallResult: "ok" }, 5),
];

const LABELS: Record<string, string> = {
  QueryCustomer: "Query customer",
  CreditBureauLookup: "Credit bureau lookup",
  AssessApplication: "Assess application",
  UpdateApplicationStatus: "Update application status",
  IssueLoanOffer: "Issue loan offer",
};

describe("ReifiedProcess", () => {
  // A single viewer-mounting test: spinning up more than one bpmn-js viewer per
  // file is flaky under jsdom, so the import, insight, and click-to-inspect
  // assertions share one render.
  it("renders the reified diagram, its insight, and a clicked step's variables", async () => {
    const { container } = render(
      <ReifiedProcess log={LOG} labelFor={(id) => LABELS[id] ?? id} />,
    );
    const q = within(container);

    // Panel is collapsed by default — expand it to mount the viewer.
    fireEvent.click(q.getByText("Reified process"));

    await waitFor(
      () => expect(container.querySelector(".djs-container")).toBeInTheDocument(),
      { timeout: 8000 },
    );
    await waitFor(
      () =>
        expect(
          container.querySelector('[data-element-id="IssueLoanOffer"]'),
        ).toBeInTheDocument(),
      { timeout: 8000 },
    );
    expect(
      container.querySelector('[data-element-id="AssessApplication"]'),
    ).toBeInTheDocument();
    // The steps are wrapped in the reified sub-process container.
    expect(
      container.querySelector('[data-element-id="SubProcess_reified"]'),
    ).toBeInTheDocument();

    // The insight names the sole inter-step dependency.
    expect(q.getByText(/via riskBand/)).toBeInTheDocument();

    // Before any click, the panel prompts the reader.
    expect(q.getByText(/Click a step in the diagram/)).toBeInTheDocument();

    // Click the Issue-loan-offer task; diagram-js turns the DOM click into an
    // `element.click` the panel listens for. Its detail then shows the agent's
    // reasoning for that turn, that it read riskBand (from Assess application),
    // and that it wrote the loan offer.
    fireEvent.click(container.querySelector('[data-element-id="IssueLoanOffer"]')!);
    await waitFor(() =>
      expect(container.querySelector(".reified-detail")).toBeInTheDocument(),
    );
    const detail = container.querySelector(".reified-detail")!;
    expect(detail.textContent).toContain("Risk band A — I can issue the offer.");
    expect(detail.textContent).toContain("riskBand");
    expect(detail.textContent).toContain("Assess application");
    expect(detail.textContent).toContain("loanOffer");
  }, 20000);

  it("renders an empty prompt with no trace", () => {
    const { container } = render(
      <ReifiedProcess log={[]} labelFor={(id) => id} />,
    );
    expect(
      within(container).getByText(/Run the example to reconstruct/),
    ).toBeInTheDocument();
  });
});
