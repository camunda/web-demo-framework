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

  for (const task of allTasks) {
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
  return workers;
}
