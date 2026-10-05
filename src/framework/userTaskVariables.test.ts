import { describe, expect, it } from "vitest";
import type { Snapshot, WasmEvent } from "@nanobpm/bojtos-kit";
import { decodeEngineValue, userTaskVariables } from "./userTaskVariables";

describe("decodeEngineValue", () => {
  it("unwraps every tag the event log uses, at any depth", () => {
    expect(
      decodeEngineValue({
        Map: {
          n: "Null",
          b: { Bool: true },
          i: { Int: -3 },
          d: { Double: 1.5 },
          s: { Str: "x" },
          l: { List: [{ Int: 1 }, "Null", { Map: { k: { Str: "v" } } }] },
        },
      }),
    ).toEqual({ n: null, b: true, i: -3, d: 1.5, s: "x", l: [1, null, { k: "v" }] });
  });
});

describe("userTaskVariables", () => {
  // Shapes copied from a real invoice-payment run parked on ReviewPaymentRelease.
  const events = [
    { type: "ElementActivated", element_instance_key: 5, scope: 0 },
    { type: "ScopedVariablesUpdated", scope_key: 5, variables: { note: { Str: "agent" } } },
    { type: "ElementActivated", element_instance_key: 8, scope: 5 },
    { type: "ElementActivated", element_instance_key: 7, scope: 8 },
    {
      type: "AdHocToolActivated",
      child_key: 7,
      local_variables: { agentProposedAmountUSD: { Int: 4200 }, note: { Str: "tool" } },
    },
    { type: "ElementActivated", element_instance_key: 10, scope: 7 },
    { type: "ScopedVariablesUpdated", scope_key: 10, variables: { approvedAmountUSD: { Int: 4200 } } },
    { type: "ElementActivated", element_instance_key: 12, scope: 0 },
    { type: "ScopedVariablesUpdated", scope_key: 12, variables: { sibling: { Bool: true } } },
  ].map((e, i) => ({ seq: i, now: 0, ...e })) as WasmEvent[];
  const snapshot = {
    instances: [{ key: "3", variables: { vendorName: "Acme", note: "root" } }],
  } as unknown as Snapshot;
  const task = { instanceKey: "3", elementInstanceKey: "10" } as Snapshot["userTasks"][number];

  it("overlays root variables with each enclosing scope's locals, innermost winning", () => {
    expect(userTaskVariables(snapshot, events, task)).toEqual({
      vendorName: "Acme",
      note: "tool",
      agentProposedAmountUSD: 4200,
      approvedAmountUSD: 4200,
    });
  });
});
