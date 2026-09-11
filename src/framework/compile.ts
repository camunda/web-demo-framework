import type { ActivatedJob, AgentHandler, JobHandler } from "@nanobpm/bojtos-react";
import type { ModelInfo } from "./model";
import type { ExampleHandler, HandlerHelpers, Trace } from "./types";
import type { TurnRef } from "./agent/liveAgent";
import {
  makeImageAccessor,
  makeVisionAccessor,
  type VisionSupport,
} from "./imageInput";
import { runAgentSandboxed, runHandlerSandboxed } from "./sandbox";

/**
 * Turn the example's editor sources into the handlers the dispatch loop runs,
 * and route jobs to them by element id.
 *
 * Routing matters more than it looks: a job type is not an element. Two service
 * tasks can share `io.camunda:http-json:1`, and a `scriptTask` gets a job typed
 * as its own element id. So the framework registers one wrapper per job type and
 * dispatches on `job.elementId` underneath.
 *
 * The reader's source itself never runs here, or anywhere in this page's
 * origin: see docs/security.md. This module only does a **syntax preflight**
 * host-side — constructing `new Function` to confirm `(source)` parses as a
 * valid expression, so a typo is still reported next to the editor rather
 * than as a mid-run incident — and never calls the resulting factory, since
 * that would execute the reader's source in this page's origin (a crafted
 * IIFE would run immediately, before any function-ness check could reject
 * it). Whether the source actually evaluates to a function is checked at run
 * time inside the sandboxed iframe (see `./sandbox/iframeSource.ts`), which is
 * a safe place for that evaluation to happen.
 */

function preflight(source: string, what: string): void {
  try {
    new Function(`"use strict"; return (${source});`);
  } catch {
    throw new Error(`${what} has a syntax error.`);
  }
}

export function compileHandler(source: string): ExampleHandler {
  preflight(source, "Handler code");
  return (job, helpers) => runHandlerSandboxed(source, job, helpers);
}

export function compileAgent(source: string): AgentHandler {
  preflight(source, "Agent code");
  return (job) => runAgentSandboxed(source, job);
}

function helpersFor(
  job: ActivatedJob,
  trace: Trace,
  turn?: number,
  vision?: VisionSupport,
): HandlerHelpers {
  return {
    sleep: (ms: number) => new Promise<void>((r) => setTimeout(r, ms)),
    // Default `turn`/`elementId` so a handler's own `trace()` calls land in
    // the same turn/element grouping as the "started"/"result" entries
    // below, instead of appearing as ungrouped lines that split the turn.
    trace: (text: string) =>
      trace({
        kind: "tool",
        text: `   ${text}`,
        elementId: job.elementId,
        turn,
      }),
    text: (key, fallback = "") => {
      const v = job.variables[key];
      return typeof v === "string" ? v : v == null ? fallback : String(v);
    },
    num: (key, fallback = 0) => {
      const v = job.variables[key];
      const n = typeof v === "number" ? v : Number(v);
      return Number.isFinite(n) ? n : fallback;
    },
    // Vision accessors are attached only when the example declares `imageInput`
    // (the runner passes `vision`), so `helpers.vision`/`helpers.image` stay
    // undefined — and every existing handler unaffected — otherwise. They read
    // the current run's image (held run-scoped, keyed by `job.instanceKey`)
    // with the active brain; see `imageInput.ts`.
    ...(vision
      ? {
          vision: makeVisionAccessor(vision, job.instanceKey),
          image: makeImageAccessor(vision, job.instanceKey),
        }
      : {}),
  };
}

function safeStringify(value: unknown): string {
  // Preserve `undefined`/`null` explicitly rather than folding `undefined`
  // into `{}` — a handler that actually returned `undefined` should show
  // that, not an empty object it never produced.
  if (value === undefined) return "undefined";
  try {
    return JSON.stringify(value);
  } catch {
    return "[unserializable value]";
  }
}

/**
 * Build the `jobType → JobHandler` map the dispatch loop takes, from the
 * model's task list and the compiled per-element handlers. An element with no
 * handler throws when activated, which surfaces as an incident on the diagram
 * rather than a silent stall.
 *
 * `turnRef`, when supplied, stamps each "started"/"result" trace entry with
 * the agent turn in progress when the job ran (see `liveAgent.ts`'s
 * `TurnRef`), so a tool activated by an agent groups with its own result in
 * the trace timeline. Omit it for a non-agentic example — the entries just
 * render ungrouped, exactly as before.
 *
 * `vision`, when supplied (only for an example with `imageInput`), gives every
 * handler a `helpers.vision`/`helpers.image` bound to this run's image and the
 * active vision brain — see `helpersFor` and `imageInput.ts`.
 */
export function buildWorkers(
  model: ModelInfo,
  byElement: Record<string, ExampleHandler>,
  trace: Trace,
  turnRef?: TurnRef,
  vision?: VisionSupport,
): Record<string, JobHandler> {
  const workers: Record<string, JobHandler> = {};
  // Cover every process, not just the primary one: call activities (or a
  // runner starting a non-primary processId) can activate jobs from
  // secondary processes, and draft.ts already requires their handlers to
  // exist, so the worker map must be able to serve them too.
  const allTasks = model.processes.flatMap((p) => p.tasks);
  const labels = new Map(allTasks.map((t) => [t.elementId, t.label]));
  // User tasks carry no job type of their own, so they are absent from
  // `tasks` — but a listener's trace line has to name the task the reader sees.
  // Callers hand-build a ModelInfo in places, so neither collection is assumed.
  for (const p of model.processes)
    for (const ut of p.userTasks ?? [])
      if (!labels.has(ut.elementId)) labels.set(ut.elementId, ut.label);

  for (const task of allTasks) {
    // A compound tool (embedded sub-process / call activity) carries no single
    // job type — its inner flow is engine-driven — so there is nothing to
    // register a job worker against.
    if (task.compound) continue;
    if (workers[task.jobType]) continue; // one wrapper per job type
    workers[task.jobType] = async (job) => {
      const handler = byElement[job.elementId];
      if (!handler)
        throw new Error(
          `No handler registered for ${job.elementId} (job type ${job.type})`,
        );
      const label = labels.get(job.elementId) ?? job.elementId;
      const turn = turnRef?.current;
      trace({ kind: "tool", text: `▶ ${label}`, elementId: job.elementId, turn });
      const out = await handler(job, helpersFor(job, trace, turn, vision));
      trace({
        kind: "vars",
        text: `  ↳ ${safeStringify(out)}`,
        elementId: job.elementId,
        result: out,
        turn,
      });
      return out as Record<string, unknown> | undefined;
    };
  }

  // Task listeners. The engine offers these as ordinary jobs, so leaving them
  // unregistered stops the run on a job type the reader cannot answer — and
  // unlike every other handler a listener has no element of its own, so a
  // manifest addresses it as `<elementId>:<eventType>`.
  //
  // An unclaimed listener runs as a no-op rather than failing: a model that
  // carries one should still run, and "this fired and did nothing" is a
  // truthful thing to show. Supplying code for it is then opt-in.
  for (const listener of model.taskListeners ?? []) {
    if (workers[listener.jobType]) continue;
    workers[listener.jobType] = async (job) => {
      // Indexing a Record types as always-present; a missing listener handler is the normal case.
      const handler = byElement[`${job.elementId}:${listener.eventType}`] as
        | ExampleHandler
        | undefined;
      const label = labels.get(job.elementId) ?? job.elementId;
      const turn = turnRef?.current;
      trace({
        kind: "step",
        text: `🎧 ${label} — ${listener.eventType} listener${handler ? "" : " (no code supplied)"}`,
        elementId: job.elementId,
        turn,
      });
      if (!handler) return undefined;
      const out = await handler(job, helpersFor(job, trace, turn, vision));
      trace({
        kind: "vars",
        text: `  ↳ ${safeStringify(out)}`,
        elementId: job.elementId,
        result: out,
        turn,
      });
      return out as Record<string, unknown> | undefined;
    };
  }
  return workers;
}
