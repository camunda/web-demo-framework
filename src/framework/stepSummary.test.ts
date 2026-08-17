import { describe, expect, it } from "vitest";
import type { RoundResult, Snapshot } from "@nanobpm/bojtos-kit";
import { describeRound, newSequenceFlows } from "./stepSummary";

const labelFor = (id: string) => (id === "Task_1" ? "Review" : id);

function snap(overrides: Partial<Snapshot> = {}): Snapshot {
  return {
    now: 0,
    eventCount: 0,
    totalInstances: 1,
    completedInstances: 0,
    instances: [],
    jobs: [],
    incidents: [],
    timers: [],
    userTasks: [],
    messageSubscriptions: [],
    signalSubscriptions: [],
    elementStats: [],
    takenSequenceFlows: [],
    decisionInstances: [],
    activeElementIds: [],
    incidentElementIds: [],
    ...overrides,
  };
}

describe("newSequenceFlows", () => {
  it("returns only the flows past the previous count", () => {
    const current = [
      { from: "A", to: "B" },
      { from: "B", to: "C" },
      { from: "B", to: "C" }, // a loop retaking the same flow
    ];
    expect(newSequenceFlows(current, 1)).toEqual([
      { from: "B", to: "C" },
      { from: "B", to: "C" },
    ]);
    expect(newSequenceFlows(current, 0)).toEqual(current);
    expect(newSequenceFlows(current, 3)).toEqual([]);
  });
});

describe("describeRound", () => {
  it("summarizes a handled round with the sequence flows it took", () => {
    const round: RoundResult = {
      snapshot: snap({ activeElementIds: ["Task_1"] }),
      handled: 2,
    };
    const entry = describeRound(
      round,
      [{ from: "Start", to: "Task_1" }],
      labelFor,
    );
    expect(entry.kind).toBe("step");
    expect(entry.text).toContain("handled 2 jobs");
    expect(entry.text).toContain("Start → Review");
    expect(entry.text).toContain("now at Review");
  });

  it("reports completion when a round both handles jobs and finishes the instance", () => {
    const round: RoundResult = {
      snapshot: snap({ completedInstances: 1 }),
      handled: 1,
    };
    const entry = describeRound(round, [], labelFor);
    expect(entry.kind).toBe("done");
    expect(entry.text).toContain("handled 1 job");
    expect(entry.text).toMatch(/completed/i);
  });

  it("uses singular phrasing for one handled job", () => {
    const round: RoundResult = { snapshot: snap(), handled: 1 };
    const entry = describeRound(round, [], labelFor);
    expect(entry.text).toContain("handled 1 job");
    expect(entry.text).not.toContain("1 jobs");
  });

  it("reports a completed instance honestly", () => {
    const round: RoundResult = {
      snapshot: snap({ completedInstances: 1 }),
      handled: 0,
      reason: "completed",
    };
    const entry = describeRound(round, [], labelFor);
    expect(entry.kind).toBe("done");
    expect(entry.text).toMatch(/completed/i);
  });

  it("reports waiting on a human task instead of no-op'ing", () => {
    const round: RoundResult = {
      snapshot: snap(),
      handled: 0,
      reason: "userTasks",
    };
    const entry = describeRound(round, [], labelFor);
    expect(entry.kind).toBe("human");
    expect(entry.text).toMatch(/waiting for a human/i);
  });

  it("reports a pending timer", () => {
    const round: RoundResult = {
      snapshot: snap(),
      handled: 0,
      reason: "timers",
    };
    expect(describeRound(round, [], labelFor).text).toMatch(/timer/i);
  });

  it("reports a pending message", () => {
    const round: RoundResult = {
      snapshot: snap(),
      handled: 0,
      reason: "messages",
    };
    expect(describeRound(round, [], labelFor).text).toMatch(/message/i);
  });

  it("reports a pending signal", () => {
    const round: RoundResult = {
      snapshot: snap(),
      handled: 0,
      reason: "signals",
    };
    expect(describeRound(round, [], labelFor).text).toMatch(/signal/i);
  });

  it("reports an incident as an error", () => {
    const round: RoundResult = {
      snapshot: snap(),
      handled: 0,
      reason: "incidents",
    };
    const entry = describeRound(round, [], labelFor);
    expect(entry.kind).toBe("error");
    expect(entry.text).toMatch(/incident/i);
  });

  it("names unhandled job types instead of silently stalling", () => {
    const round: RoundResult = {
      snapshot: snap(),
      handled: 0,
      reason: "unhandledJobs",
      unhandled: ["charge-payment"],
    };
    const entry = describeRound(round, [], labelFor);
    expect(entry.kind).toBe("error");
    expect(entry.text).toContain("charge-payment");
  });

  it("says nothing is running when idle", () => {
    const round: RoundResult = { snapshot: snap(), handled: 0, reason: "idle" };
    expect(describeRound(round, [], labelFor).text).toMatch(
      /nothing to step/i,
    );
  });
});
