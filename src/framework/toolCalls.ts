import type { Snapshot, WasmEvent } from "@nanobpm/bojtos-kit";
import { TRACE_IDENTITY_VAR, type TraceIdentity } from "./agent/activation";

/** Where an agent's call of a tool stands in the engine. */
export type CallOutcome = "running" | "completed" | "canceled";

/**
 * The lookup key for one call: its host, iteration, tool and call number.
 * The tool is part of it because calls are numbered per tool — two tools
 * activated in one iteration are both call 1.
 */
export function callKey(identity: {
  agentId?: string;
  turn?: number;
  elementId?: string;
  call?: number;
}) {
  const { agentId, turn, elementId, call } = identity;
  return agentId !== undefined && turn !== undefined && elementId && call !== undefined
    ? `${agentId}#${turn}#${elementId}#${call}`
    : null;
}

/**
 * The engine's event log writes variable values tagged by type
 * (`{"Map": {"turn": {"Int": 1}}}`); this reads one back as plain JSON.
 */
function plain(value: unknown): unknown {
  if (value === null || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(plain);
  const entries = Object.entries(value as Record<string, unknown>);
  if (entries.length !== 1) return value;
  const [[tag, inner]] = entries;
  switch (tag) {
    case "Map":
      return Object.fromEntries(
        Object.entries(inner as Record<string, unknown>).map(([k, v]) => [k, plain(v)]),
      );
    case "List":
      return (inner as unknown[]).map(plain);
    case "Str":
    case "Int":
    case "Float":
    case "Bool":
      return inner;
    default:
      return value;
  }
}

/**
 * What became of every tool call an agent made, by {@link callKey}.
 *
 * Read per element instance, not counted per element: `AdHocToolActivated`
 * names the instance an activation created and carries the identity the
 * activation was tagged with (`TRACE_IDENTITY_VAR`), so a run of the same
 * tool a sequence flow started never counts. That instance then either
 * reported back to its agent (`AdHocToolCompleted`), is still active, or is
 * neither — cancelled. `ElementCompleted` is no evidence either way: when a
 * boundary event interrupts the agent, the engine closes the tools it cuts
 * short with the same `ElementCompleting`/`ElementCompleted` pair a finished
 * one gets, and only the finished one also reports back.
 */
export function toolCallOutcomes(
  events: readonly WasmEvent[],
  snapshot: Snapshot,
): Map<string, CallOutcome> {
  const completed = new Set<string>();
  const elementOf = new Map<string, string>();
  for (const e of events) {
    if (e.type === "ElementActivating" || e.type === "ElementActivated")
      elementOf.set(String(e.element_instance_key), String(e.element_id));
    else if (e.type === "AdHocToolCompleted") completed.add(String(e.child_key));
  }
  const active = new Set(
    snapshot.instances.flatMap((i) => i.activeElements.map((el) => String(el.key))),
  );

  const outcomes = new Map<string, CallOutcome>();
  for (const e of events) {
    if (e.type !== "AdHocToolActivated") continue;
    const locals = e.local_variables as Record<string, unknown> | undefined;
    const identity = plain(locals?.[TRACE_IDENTITY_VAR]) as Partial<TraceIdentity> | undefined;
    const instance = String(e.child_key);
    const key = identity ? callKey({ ...identity, elementId: elementOf.get(instance) }) : null;
    if (!key) continue;
    outcomes.set(
      key,
      completed.has(instance) ? "completed" : active.has(instance) ? "running" : "canceled",
    );
  }
  return outcomes;
}
