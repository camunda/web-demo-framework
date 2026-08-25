/**
 * Post-hoc reification of an ad-hoc sub-process run.
 *
 * An `adHocSubProcess` has no sequence flows: an agent activates inner
 * activities (tools) on demand, so what actually "ran" is a *trace*, not a
 * control-flow graph. This module turns that trace into a **data-dependency
 * DAG** — the reified process that shows what was executed and, crucially, how
 * the executed steps actually depended on one another through the variables
 * they read and wrote.
 *
 * The dependency signal is real, not guessed: each executed step reports the
 * variables it **read** (captured live in the sandbox, see
 * `sandbox/iframeSource.ts`) and the variables it **wrote** (the keys of the
 * value it returned). An edge A → B exists exactly when B read a variable whose
 * most-recent writer, at the moment B ran, was A. A variable a step read that
 * no earlier step produced is an external **seed** (a start input), not an edge.
 *
 * The payoff on the loan-origination example: the agent runs QueryCustomer →
 * CreditBureauLookup → AssessApplication → UpdateApplicationStatus strictly in
 * sequence, and the DAG shows they each depend only on seed inputs — so their
 * *order* was the agent's choice, not a data requirement — while the one real
 * inter-step edge is AssessApplication → IssueLoanOffer, carried by `riskBand`.
 * (What actually ran was still sequential: the agent saw each result before
 * choosing the next step. The reified BPMN renders that true execution order;
 * the data-dependency signal is surfaced as annotation, not as parallelism.)
 */

import type { TraceEntry } from "./types";

/** One executed step, normalised for reification. */
export interface ReifyStep {
  /** The BPMN element id that ran (a tool, or a trunk task). */
  elementId: string;
  /** A human label for the node; falls back to the element id. */
  label?: string;
  /** Variable names the step read while it ran. */
  reads: string[];
  /** Variable names the step wrote (the keys of what it returned). */
  writes: string[];
  /** The values the step wrote — the returned object, when it was one. */
  values?: Record<string, unknown>;
  /** The agent turn this step ran in, when known. */
  turn?: number;
  /**
   * The agent's plain-English rationale for activating this step — the
   * `"reason"` from its tool-call reply (captured on the activation's trace
   * entry). This is the model's *why*, distinct from the raw tool call: the
   * agent chose this step, after seeing the prior results, for this reason.
   */
  thought?: string;
}

/** A node in the reified DAG — one *execution* of an element. */
export interface DagNode {
  /** Unique per execution; equals `elementId` for a once-run element. */
  id: string;
  elementId: string;
  label: string;
  /** Variable names this execution read (minus ignored vars). */
  reads: string[];
  /** Variable names this execution wrote (minus ignored vars). */
  writes: string[];
  /** The values this execution wrote, keyed by name (ignored vars removed). */
  values?: Record<string, unknown>;
  turn?: number;
  /** The agent's stated rationale for activating this step, when it gave one. */
  thought?: string;
}

/** A data-dependency edge: `to` read variables `via` last written by `from`. */
export interface DagEdge {
  from: string;
  to: string;
  /** The variable name(s) carrying the dependency. */
  via: string[];
}

/** The reified data-dependency graph. */
export interface ReifiedDag {
  nodes: DagNode[];
  edges: DagEdge[];
  /** External inputs: variables read but never produced within the run. */
  seeds: string[];
  /** Node ids with no producing predecessor (depend only on seeds/nothing). */
  sources: string[];
  /** Node ids with no dependent successor. */
  sinks: string[];
}

export interface BuildDagOptions {
  /**
   * Variable names to ignore as dependency carriers — generic echo outputs
   * that don't represent a meaningful data hand-off. Defaults to
   * `["toolCallResult"]`, the ubiquitous agent tool-result echo.
   */
  ignoreVars?: string[];
}

/**
 * Normalise a run's trace into reification steps. Reads the `vars` entries the
 * runner emits for each executed job (see `compile.ts`'s `buildWorkers`): each
 * carries the element id, the returned value (its write-set) and the captured
 * read-set.
 */
export function stepsFromTrace(
  entries: TraceEntry[],
  labels?: Map<string, string> | Record<string, string> | ((id: string) => string | undefined),
): ReifyStep[] {
  const labelOf = (id: string): string | undefined => {
    if (!labels) return undefined;
    if (typeof labels === "function") return labels(id);
    return labels instanceof Map ? labels.get(id) : labels[id];
  };

  // The agent's stated rationale per activation: the `reason` it gave when it
  // chose a tool (captured on the `agent` activation entry — see
  // `liveAgent.ts`). Keyed by turn + element so a step maps to its own reason
  // even when a turn activated several tools.
  const reasonByStep = new Map<string, string>();
  for (const entry of entries) {
    if (entry.kind === "agent" && entry.elementId && entry.reason) {
      reasonByStep.set(`${entry.turn ?? ""}\u0000${entry.elementId}`, entry.reason);
    }
  }

  const steps: ReifyStep[] = [];
  for (const entry of entries) {
    // A step is any traced element that produced a result and/or recorded
    // reads. The runner stamps these on the `vars` entry that pairs with a
    // tool's own `result` (and, once captured, its `reads`).
    if (!entry.elementId) continue;
    const hasResult = entry.result !== undefined;
    const hasReads = Array.isArray(entry.reads) && entry.reads.length > 0;
    if (entry.kind !== "vars" || (!hasResult && !hasReads)) continue;

    steps.push({
      elementId: entry.elementId,
      label: labelOf(entry.elementId),
      reads: Array.isArray(entry.reads) ? [...entry.reads] : [],
      writes: writesOf(entry.result),
      values: valuesOf(entry.result),
      turn: entry.turn,
      thought: reasonByStep.get(`${entry.turn ?? ""}\u0000${entry.elementId}`),
    });
  }
  return steps;
}

/** The variable names a returned value wrote — the keys of a plain object. */
function writesOf(result: unknown): string[] {
  if (result === null || typeof result !== "object" || Array.isArray(result)) {
    return [];
  }
  return Object.keys(result as Record<string, unknown>);
}

/** The written values — the returned object itself, when it was a plain one. */
function valuesOf(result: unknown): Record<string, unknown> | undefined {
  if (result === null || typeof result !== "object" || Array.isArray(result)) {
    return undefined;
  }
  return result as Record<string, unknown>;
}

/**
 * Build the data-dependency DAG from ordered execution steps.
 *
 * Walks the steps in execution order, tracking the most-recent writer of each
 * variable. A read resolves to an edge from that writer, or (if none yet) marks
 * the variable a seed. Repeated executions of the same element get suffixed
 * node ids so a loop shows as distinct instances.
 */
export function buildDag(
  steps: ReifyStep[],
  options: BuildDagOptions = {},
): ReifiedDag {
  const ignore = new Set(options.ignoreVars ?? ["toolCallResult"]);

  const nodes: DagNode[] = [];
  const edgeMap = new Map<string, DagEdge>(); // "from\u0000to" -> edge
  const seeds = new Set<string>();
  const lastWriter = new Map<string, string>(); // variable -> node id
  const seenElement = new Map<string, number>(); // elementId -> occurrence count

  for (const step of steps) {
    const count = seenElement.get(step.elementId) ?? 0;
    seenElement.set(step.elementId, count + 1);
    const nodeId = count === 0 ? step.elementId : `${step.elementId}#${count + 1}`;
    const reads = step.reads.filter((v) => !ignore.has(v));
    const writes = step.writes.filter((v) => !ignore.has(v));
    const values = step.values
      ? Object.fromEntries(Object.entries(step.values).filter(([k]) => !ignore.has(k)))
      : undefined;
    nodes.push({
      id: nodeId,
      elementId: step.elementId,
      label: step.label ?? step.elementId,
      reads,
      writes,
      values,
      turn: step.turn,
      thought: step.thought,
    });

    // Resolve reads against the current writer frontier — before applying this
    // step's own writes, so a step that reads and writes the same variable
    // depends on the *previous* writer, not itself.
    for (const rawVar of step.reads) {
      if (ignore.has(rawVar)) continue;
      const producer = lastWriter.get(rawVar);
      if (producer && producer !== nodeId) {
        const key = `${producer}\u0000${nodeId}`;
        const existing = edgeMap.get(key);
        if (existing) {
          if (!existing.via.includes(rawVar)) existing.via.push(rawVar);
        } else {
          edgeMap.set(key, { from: producer, to: nodeId, via: [rawVar] });
        }
      } else if (!producer) {
        seeds.add(rawVar);
      }
    }

    for (const w of step.writes) {
      if (ignore.has(w)) continue;
      lastWriter.set(w, nodeId);
    }
  }

  const edges = [...edgeMap.values()];
  const withIncoming = new Set(edges.map((e) => e.to));
  const withOutgoing = new Set(edges.map((e) => e.from));
  const sources = nodes.filter((n) => !withIncoming.has(n.id)).map((n) => n.id);
  const sinks = nodes.filter((n) => !withOutgoing.has(n.id)).map((n) => n.id);

  return {
    nodes,
    edges,
    seeds: [...seeds].sort(),
    sources,
    sinks,
  };
}
