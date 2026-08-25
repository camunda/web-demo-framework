import { describe, expect, it } from "vitest";
import { buildDag, stepsFromTrace, type ReifyStep } from "./reify";
import { reifyToBpmn } from "./reifyBpmn";
import type { TraceEntry } from "./types";

/**
 * The loan-origination run's real data flow (see the example's handlers):
 *  - QueryCustomer         reads applicantName            → customerProfile
 *  - CreditBureauLookup    reads applicantName,creditScore → bureauReport
 *  - AssessApplication     reads income/debt/score/amount  → riskBand,recommendation,...
 *  - UpdateApplicationStatus reads nothing                 → applicationStatus
 *  - IssueLoanOffer        reads loanAmount, riskBand       → loanOffer
 *
 * The agent ran the four gather tools strictly in sequence, but only seeds feed
 * them — so the DAG should show them as independent (all sources), with the one
 * real inter-step edge being AssessApplication → IssueLoanOffer via `riskBand`.
 */
const LOAN_STEPS: ReifyStep[] = [
  { elementId: "QueryCustomer", reads: ["applicantName"], writes: ["customerProfile", "toolCallResult"], turn: 1 },
  { elementId: "CreditBureauLookup", reads: ["applicantName", "creditScore"], writes: ["bureauReport", "toolCallResult"], turn: 2 },
  { elementId: "AssessApplication", reads: ["annualIncome", "monthlyDebt", "creditScore", "loanAmount"], writes: ["debtToIncome", "riskBand", "recommendation", "toolCallResult"], turn: 3 },
  { elementId: "UpdateApplicationStatus", reads: [], writes: ["applicationStatus", "toolCallResult"], turn: 4 },
  { elementId: "IssueLoanOffer", reads: ["loanAmount", "riskBand"], writes: ["loanOffer"] },
];

describe("buildDag — data-dependency reification", () => {
  it("finds the single real inter-step edge: AssessApplication → IssueLoanOffer via riskBand", () => {
    const dag = buildDag(LOAN_STEPS);
    const interTool = dag.edges.filter((e) => e.from !== e.to);
    expect(interTool).toHaveLength(1);
    expect(interTool[0]).toMatchObject({
      from: "AssessApplication",
      to: "IssueLoanOffer",
      via: ["riskBand"],
    });
  });

  it("reveals the four gather steps as parallel (sources), hidden by the sequential agent", () => {
    const dag = buildDag(LOAN_STEPS);
    expect(new Set(dag.sources)).toEqual(
      new Set(["QueryCustomer", "CreditBureauLookup", "AssessApplication", "UpdateApplicationStatus"]),
    );
    // IssueLoanOffer is the only non-source.
    expect(dag.sources).not.toContain("IssueLoanOffer");
  });

  it("treats seed inputs read but never produced as seeds, not edges", () => {
    const dag = buildDag(LOAN_STEPS);
    expect(dag.seeds).toEqual(
      ["annualIncome", "applicantName", "creditScore", "loanAmount", "monthlyDebt"],
    );
  });

  it("ignores the generic toolCallResult echo so it never forges a dependency", () => {
    const withEcho: ReifyStep[] = [
      { elementId: "A", reads: [], writes: ["toolCallResult"] },
      { elementId: "B", reads: ["toolCallResult"], writes: [] },
    ];
    const dag = buildDag(withEcho);
    expect(dag.edges).toHaveLength(0);
  });

  it("suffixes repeated executions of the same element (loops) as distinct instances", () => {
    const looped: ReifyStep[] = [
      { elementId: "Tick", reads: [], writes: ["n"] },
      { elementId: "Tick", reads: ["n"], writes: ["n"] },
    ];
    const dag = buildDag(looped);
    expect(dag.nodes.map((n) => n.id)).toEqual(["Tick", "Tick#2"]);
    expect(dag.edges).toEqual([{ from: "Tick", to: "Tick#2", via: ["n"] }]);
  });

  it("a read+write of the same variable depends on the previous writer, not itself", () => {
    const dag = buildDag([
      { elementId: "Producer", reads: [], writes: ["x"] },
      { elementId: "Bumper", reads: ["x"], writes: ["x"] },
    ]);
    expect(dag.edges).toEqual([{ from: "Producer", to: "Bumper", via: ["x"] }]);
  });
});

describe("stepsFromTrace", () => {
  it("extracts reads (read-set) and result keys (write-set) from vars trace entries", () => {
    const entries: TraceEntry[] = [
      { kind: "tool", text: "▶ Assess", elementId: "AssessApplication", turn: 3 },
      {
        kind: "vars",
        text: "↳ …",
        elementId: "AssessApplication",
        turn: 3,
        reads: ["creditScore", "loanAmount"],
        result: { riskBand: "low", recommendation: "approve" },
      },
      { kind: "llm", text: "thinking" }, // ignored — no element/result
    ];
    const steps = stepsFromTrace(entries, { AssessApplication: "Assess application" });
    expect(steps).toEqual([
      {
        elementId: "AssessApplication",
        label: "Assess application",
        reads: ["creditScore", "loanAmount"],
        writes: ["riskBand", "recommendation"],
        values: { riskBand: "low", recommendation: "approve" },
        turn: 3,
      },
    ]);
  });

  it("attaches the agent's stated reason for a step from its activation entry", () => {
    const entries: TraceEntry[] = [
      {
        kind: "agent",
        text: "🤖 calling AssessApplication",
        turn: 3,
        elementId: "AssessApplication",
        reason: "I should assess the application next.",
      },
      {
        kind: "vars",
        text: "↳ …",
        elementId: "AssessApplication",
        turn: 3,
        reads: ["creditScore"],
        result: { riskBand: "low" },
      },
    ];
    const steps = stepsFromTrace(entries);
    expect(steps[0].thought).toBe("I should assess the application next.");
  });
});

describe("reifyToBpmn", () => {
  it("wraps the steps in an expanded sub-process, chained in execution order", () => {
    const xml = reifyToBpmn(buildDag(LOAN_STEPS), {
      processId: "loan_reified",
      processName: "Loan origination (reified)",
    });
    // A task per executed element, reusing its id.
    for (const id of ["QueryCustomer", "CreditBureauLookup", "AssessApplication", "UpdateApplicationStatus", "IssueLoanOffer"]) {
      expect(xml).toContain(`id="${id}"`);
    }
    // The container: an expanded sub-process standing in for the ad-hoc one.
    expect(xml).toContain("bpmn:subProcess");
    expect(xml).toContain('isExpanded="true"');
    // No parallel gateway — the reified diagram is the actual sequence, not a
    // data-dependency fan-out.
    expect(xml).not.toContain("parallelGateway");
    // Sequence flows follow execution order, not data dependency: the step
    // after AssessApplication is UpdateApplicationStatus, and IssueLoanOffer
    // runs last (after Update), even though its data came from Assess.
    expect(xml).toMatch(/sourceRef="AssessApplication" targetRef="UpdateApplicationStatus"/);
    expect(xml).toMatch(/sourceRef="UpdateApplicationStatus" targetRef="IssueLoanOffer"/);
    // DI present so a viewer can render without an auto-layouter.
    expect(xml).toContain("bpmndi:BPMNShape");
    expect(xml).toContain("dc:Bounds");
    expect(xml).toContain("di:waypoint");
  });

  it("is deterministic", () => {
    const a = reifyToBpmn(buildDag(LOAN_STEPS));
    const b = reifyToBpmn(buildDag(LOAN_STEPS));
    expect(a).toBe(b);
  });
});
