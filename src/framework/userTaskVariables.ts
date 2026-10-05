import type { Snapshot, WasmEvent } from "@nanobpm/bojtos-kit";

type UserTask = Snapshot["userTasks"][number];

/** Decode the event log's tagged values: `"Null"`, `{ Int: 1 }`, `{ Map: { … } }`, … */
export function decodeEngineValue(value: unknown): unknown {
  if (value === "Null") return null;
  if (!value || typeof value !== "object") return value;
  const [tag, inner] = Object.entries(value)[0] ?? [];
  if (tag === "List" && Array.isArray(inner)) return inner.map(decodeEngineValue);
  if (tag === "Map" && inner && typeof inner === "object") {
    return Object.fromEntries(
      Object.entries(inner).map(([k, v]) => [k, decodeEngineValue(v)]),
    );
  }
  return inner;
}

/**
 * Every variable visible from a user task, as Tasklist hands them to its form:
 * the instance's root variables, overlaid by each enclosing scope's locals,
 * innermost last.
 *
 * The snapshot only carries root variables, so locals — an input mapping on
 * the task, or on the sub-process around it — are folded from the event log.
 */
export function userTaskVariables(
  snapshot: Snapshot,
  events: WasmEvent[],
  task: UserTask,
): Record<string, unknown> {
  const parentOf = new Map<string, string>();
  const locals = new Map<string, Record<string, unknown>>();
  const setLocals = (scope: unknown, variables: unknown) => {
    if (!variables || typeof variables !== "object") return;
    const into = locals.get(String(scope)) ?? {};
    for (const [name, v] of Object.entries(variables)) into[name] = decodeEngineValue(v);
    locals.set(String(scope), into);
  };
  for (const e of events) {
    if (e.type === "ElementActivated") parentOf.set(String(e.element_instance_key), String(e.scope));
    else if (e.type === "ScopedVariablesUpdated") setLocals(e.scope_key, e.variables);
    else if (e.type === "AdHocToolActivated") setLocals(e.child_key, e.local_variables);
  }

  const chain: string[] = [];
  for (
    let key: string | undefined = task.elementInstanceKey;
    key !== undefined && key !== "0" && !chain.includes(key);
    key = parentOf.get(key)
  ) {
    chain.unshift(key);
  }
  const root = snapshot.instances.find((i) => i.key === task.instanceKey)?.variables ?? {};
  return Object.assign({}, root, ...chain.map((key) => locals.get(key) ?? {}));
}
