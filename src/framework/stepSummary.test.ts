import { describe, expect, it } from "vitest";
import type { RoundResult, SettleReason, Snapshot, WasmEvent } from "@nanobpm/bojtos-kit";
import { describeRound, describeStart, elementActivations, sequenceFlowsSince } from "./stepSummary";

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

// Shaped like expense-decision's Clear reject: start → DMN → gateway → task.
const EVENTS: WasmEvent[] = [
  { seq: 1, now: 0, type: "ElementActivated", element_id: "Start" },
  { seq: 2, now: 0, type: "SequenceFlowTaken", from: "Start", to: "Rule" },
  { seq: 3, now: 0, type: "ElementActivated", element_id: "Rule" },
  { seq: 4, now: 0, type: "SequenceFlowTaken", from: "Rule", to: "Gateway" },
  { seq: 5, now: 0, type: "ElementActivated", element_id: "Gateway" },
  { seq: 6, now: 0, type: "SequenceFlowTaken", from: "Gateway", to: "Gateway" },
  { seq: 7, now: 0, type: "ElementActivated", element_id: "Gateway" },
];

describe("sequenceFlowsSince", () => {
  it("returns the flows past an event index, in the order they were taken", () => {
    expect(sequenceFlowsSince(EVENTS, 3)).toEqual([
      { from: "Rule", to: "Gateway" },
      { from: "Gateway", to: "Gateway" }, // a loop retaking a flow still counts
    ]);
    expect(sequenceFlowsSince(EVENTS, 0)[0]).toEqual({ from: "Start", to: "Rule" });
    expect(sequenceFlowsSince(EVENTS, EVENTS.length)).toEqual([]);
  });
});

describe("elementActivations", () => {
  it("lists every activated element in order, repeats included", () => {
    expect(elementActivations(EVENTS)).toEqual(["Start", "Rule", "Gateway", "Gateway"]);
  });

  it("keeps to one instance when given its key", () => {
    const events: WasmEvent[] = [
      { seq: 1, now: 0, type: "ElementActivated", element_id: "Start", instance_key: 6 },
      { seq: 2, now: 0, type: "ElementActivated", element_id: "ChildStart", instance_key: 9 },
      { seq: 3, now: 0, type: "ElementActivated", element_id: "Task", instance_key: 6 },
    ];
    expect(elementActivations(events, "6")).toEqual(["Start", "Task"]);
  });
});

describe("describeStart", () => {
  it("names the path a new instance took and where it stopped", () => {
    const entry = describeStart(
      snap({ activeElementIds: ["Task_1"] }),
      [
        { from: "Start", to: "Rule" },
        { from: "Rule", to: "Task_1" },
      ],
      labelFor,
      false,
    );
    expect(entry).toEqual({
      kind: "step",
      text: "⏭ instance started via Start → Rule, Rule → Review — now at Review",
    });
  });

  it("says so when the instance finished or opened a human task on creation", () => {
    expect(describeStart(snap(), [], labelFor, true).kind).toBe("done");
    const human = describeStart(
      snap({ userTasks: [{ state: "Created" } as Snapshot["userTasks"][number]] }),
      [],
      labelFor,
      false,
    );
    expect(human.kind).toBe("human");
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

  /**
   * A delegating run has more than one instance, and the specialist finishes
   * long before the process that called it. Calling that "process instance
   * completed" while the caller is still working contradicts the status badge
   * and tells the reader the run is over when it isn't.
   */
  describe("when the run's own instance has not finished", () => {
    it("does not call a finished child the end of the run", () => {
      const round: RoundResult = {
        snapshot: snap({ completedInstances: 1 }),
        handled: 0,
        reason: "completed",
      };
      const entry = describeRound(round, [], labelFor, undefined, false);
      expect(entry.kind).toBe("step");
      expect(entry.text).toMatch(/delegated process finished/i);
      expect(entry.text).not.toMatch(/process instance completed/i);
    });

    it("does not report completion on a round that also handled jobs", () => {
      const round: RoundResult = {
        snapshot: snap({ completedInstances: 1 }),
        handled: 1,
      };
      const entry = describeRound(round, [], labelFor, undefined, false);
      expect(entry.kind).toBe("step");
      expect(entry.text).not.toMatch(/completed/i);
    });

    it("still reports completion once the run's own instance finishes", () => {
      const round: RoundResult = {
        snapshot: snap({ completedInstances: 2 }),
        handled: 1,
      };
      const entry = describeRound(round, [], labelFor, undefined, true);
      expect(entry.kind).toBe("done");
      expect(entry.text).toMatch(/completed/i);
    });
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

  it("treats a manually-held job type as waiting on a human, not an error", () => {
    const round: RoundResult = {
      snapshot: snap(),
      handled: 0,
      reason: "unhandledJobs",
      unhandled: ["review-decision"],
    };
    const entry = describeRound(
      round,
      [],
      labelFor,
      new Set(["review-decision"]),
    );
    expect(entry.kind).toBe("human");
    expect(entry.text).toMatch(/waiting for a human/i);
  });

  it("still reports an error when an unhandled job isn't one of the manually-held types", () => {
    const round: RoundResult = {
      snapshot: snap(),
      handled: 0,
      reason: "unhandledJobs",
      unhandled: ["charge-payment"],
    };
    const entry = describeRound(
      round,
      [],
      labelFor,
      new Set(["review-decision"]),
    );
    expect(entry.kind).toBe("error");
    expect(entry.text).toContain("charge-payment");
  });

  it("reports a user task opened mid-round as waiting on a human", () => {
    const round: RoundResult = {
      snapshot: snap({
        userTasks: [
          {
            key: "1",
            instanceKey: "1",
            elementInstanceKey: "1",
            elementId: "Task_1",
            state: "Created",
            candidateGroups: [],
            candidateUsers: [],
            priority: 50,
          },
        ],
      }),
      handled: 2,
    };
    const entry = describeRound(round, [], labelFor);
    expect(entry.kind).toBe("human");
    expect(entry.text).toContain("handled 2 jobs");
    expect(entry.text).toMatch(/waiting for a human/i);
  });

  it("says nothing is running when idle", () => {
    const round: RoundResult = { snapshot: snap(), handled: 0, reason: "idle" };
    expect(describeRound(round, [], labelFor).text).toMatch(
      /nothing to step/i,
    );
  });

  it("surfaces an unrecognized settle reason instead of reusing the idle text", () => {
    // Stands in for a `SettleReason` a future bojtos-kit adds, so only the
    // `reason` field is cast past the union this version declares — that is
    // the branch under test — while the rest of `RoundResult` stays checked.
    const round: RoundResult = {
      snapshot: snap(),
      handled: 0,
      reason: "somethingNew" as unknown as SettleReason,
    };
    const entry = describeRound(round, [], labelFor);
    expect(entry.text).toContain("somethingNew");
    expect(entry.text).not.toMatch(/nothing to step/i);
  });
});
