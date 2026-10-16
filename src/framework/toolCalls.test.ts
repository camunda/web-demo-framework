import { describe, expect, it } from "vitest";
import type { Snapshot, WasmEvent } from "@nanobpm/bojtos-kit";
import { callKey, toolCallOutcomes } from "./toolCalls";

/** Events as the engine writes them: variable values tagged by type. */
const activated = (instance: number, elementId: string, turn: number, call: number): WasmEvent[] => [
  { seq: 0, now: 0, type: "ElementActivated", element_id: elementId, element_instance_key: instance },
  {
    seq: 0,
    now: 0,
    type: "AdHocToolActivated",
    child_key: instance,
    local_variables: {
      __traceActivation: { Map: { agentId: { Str: "Agent" }, turn: { Int: turn }, call: { Int: call } } },
    },
  },
];
const snapshotWithActive = (...keys: number[]) =>
  ({ instances: [{ activeElements: keys.map((k) => ({ key: String(k), elementId: "x" })) }] }) as unknown as Snapshot;

describe("toolCallOutcomes", () => {
  it("reads each call's own instance: completed, still active, or neither — cancelled", () => {
    const events = [
      ...activated(7, "Lookup", 1, 1),
      ...activated(8, "Consult", 1, 1),
      ...activated(9, "Lookup", 2, 2),
      { seq: 0, now: 0, type: "ElementCompleted", element_instance_key: 7 },
      { seq: 0, now: 0, type: "AdHocToolCompleted", child_key: 7 },
      // How the engine closes a tool an interrupt cut short: completed as an
      // element, but never reported back to the agent.
      { seq: 0, now: 0, type: "ElementCompleted", element_instance_key: 9 },
    ];
    // 8 is still running; 9 is gone without reporting back — cancelled.
    const outcomes = toolCallOutcomes(events, snapshotWithActive(8));
    expect(Object.fromEntries(outcomes)).toEqual({
      "Agent#1#Lookup#1": "completed",
      "Agent#1#Consult#1": "running",
      "Agent#2#Lookup#2": "canceled",
    });
  });

  it("ignores a run no agent activation started", () => {
    // A tool reached by a sequence flow: activated, but never through the agent.
    const events: WasmEvent[] = [
      { seq: 0, now: 0, type: "ElementActivated", element_id: "Lookup", element_instance_key: 7 },
      { seq: 0, now: 0, type: "ElementCompleted", element_instance_key: 7 },
      { seq: 0, now: 0, type: "AdHocToolCompleted", child_key: 7 },
    ];
    expect(toolCallOutcomes(events, snapshotWithActive()).size).toBe(0);
  });
});

describe("callKey", () => {
  it("tells two tools activated in one iteration apart, though both are call 1", () => {
    const a = callKey({ agentId: "Agent", turn: 1, elementId: "A", call: 1 });
    const b = callKey({ agentId: "Agent", turn: 1, elementId: "B", call: 1 });
    expect(a).not.toBe(b);
  });

  it("has no key for an entry without a full identity", () => {
    expect(callKey({ agentId: "Agent", turn: 1, elementId: "A" })).toBeNull();
  });
});
