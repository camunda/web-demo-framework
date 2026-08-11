import { describe, expect, it } from "vitest";
import type { Snapshot } from "@nanobpm/bojtos-react";
import { isTourSuccessful, isWaitForSatisfied } from "./evaluate";

function elementStat(elementId: string, completed: number) {
  return { elementId, completed, active: 0, incidents: 0 };
}

/** A minimal, otherwise-empty snapshot with just the fields these checks read. */
function snap(partial: Partial<Snapshot>): Snapshot {
  return {
    processIds: [],
    activeElementIds: [],
    incidentElementIds: [],
    elementStats: [],
    incidents: [],
    userTasks: [],
    jobs: [],
    completedInstances: 0,
    ...partial,
  } as Snapshot;
}

describe("isWaitForSatisfied", () => {
  it("is never satisfied for a click wait (or no wait at all)", () => {
    const running = snap({ activeElementIds: ["Task1"] });
    expect(isWaitForSatisfied({ kind: "click" }, running)).toBe(false);
    expect(isWaitForSatisfied(undefined, running)).toBe(false);
  });

  it("is false with no snapshot yet, even for a state-driven wait", () => {
    expect(
      isWaitForSatisfied({ kind: "activeElement", elementId: "Task1" }, null),
    ).toBe(false);
  });

  it("activeElement: satisfied once the element is among the active ids", () => {
    const waitFor = { kind: "activeElement" as const, elementId: "Task1" };
    expect(isWaitForSatisfied(waitFor, snap({ activeElementIds: [] }))).toBe(
      false,
    );
    expect(
      isWaitForSatisfied(waitFor, snap({ activeElementIds: ["Task1"] })),
    ).toBe(true);
  });

  it("elementCompleted: satisfied once completed count reaches the default of 1", () => {
    const waitFor = { kind: "elementCompleted" as const, elementId: "Task1" };
    expect(
      isWaitForSatisfied(
        waitFor,
        snap({ elementStats: [elementStat("Task1", 0)] }),
      ),
    ).toBe(false);
    expect(
      isWaitForSatisfied(
        waitFor,
        snap({ elementStats: [elementStat("Task1", 1)] }),
      ),
    ).toBe(true);
  });

  it("elementCompleted: honors an explicit atLeast threshold", () => {
    const waitFor = {
      kind: "elementCompleted" as const,
      elementId: "Loop",
      atLeast: 3,
    };
    expect(
      isWaitForSatisfied(
        waitFor,
        snap({ elementStats: [elementStat("Loop", 2)] }),
      ),
    ).toBe(false);
    expect(
      isWaitForSatisfied(
        waitFor,
        snap({ elementStats: [elementStat("Loop", 3)] }),
      ),
    ).toBe(true);
  });
});

describe("isTourSuccessful", () => {
  it("is false with no snapshot", () => {
    expect(isTourSuccessful({ kind: "instanceCompleted" }, null)).toBe(false);
  });

  it("instanceCompleted: satisfied once at least one instance completed", () => {
    expect(
      isTourSuccessful(
        { kind: "instanceCompleted" },
        snap({ completedInstances: 0 }),
      ),
    ).toBe(false);
    expect(
      isTourSuccessful(
        { kind: "instanceCompleted" },
        snap({ completedInstances: 1 }),
      ),
    ).toBe(true);
  });

  it("elementCompleted: satisfied once the named element reached its threshold", () => {
    const successEvent = {
      kind: "elementCompleted" as const,
      elementId: "NotifyExportTeam",
    };
    expect(
      isTourSuccessful(
        successEvent,
        snap({ elementStats: [elementStat("NotifyExportTeam", 0)] }),
      ),
    ).toBe(false);
    expect(
      isTourSuccessful(
        successEvent,
        snap({ elementStats: [elementStat("NotifyExportTeam", 1)] }),
      ),
    ).toBe(true);
  });
});

