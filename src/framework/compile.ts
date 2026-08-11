import type { ActivatedJob, AgentHandler, JobHandler } from "@nanobpm/bojtos-react";
import type { ModelInfo } from "./model";
import type { ExampleHandler, HandlerHelpers, Trace } from "./types";
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
 * host-side — evaluating `(source)` as an expression to confirm it produces a
 * function value, exactly as before, so a typo is still reported next to the
 * editor rather than as a mid-run incident — then discards that function
 * object and hands the *source string* to `./sandbox`, which compiles and
 * calls it for real inside a sandboxed, opaque-origin iframe.
 */

function preflight(source: string, what: string): void {
  const factory = new Function(`"use strict"; return (${source});`);
  const fn: unknown = factory();
  if (typeof fn !== "function")
    throw new Error(`${what} must evaluate to a function.`);
}

export function compileHandler(source: string): ExampleHandler {
  preflight(source, "Handler code");
  return (job, helpers) => runHandlerSandboxed(source, job, helpers);
}

export function compileAgent(source: string): AgentHandler {
  preflight(source, "Agent code");
  return (job) => runAgentSandboxed(source, job);
}

function helpersFor(job: ActivatedJob, trace: Trace): HandlerHelpers {
  return {
    sleep: (ms: number) => new Promise<void>((r) => setTimeout(r, ms)),
    trace: (text: string) => trace({ kind: "tool", text: `   ${text}` }),
    text: (key, fallback = "") => {
      const v = job.variables[key];
      return typeof v === "string" ? v : v == null ? fallback : String(v);
    },
    num: (key, fallback = 0) => {
      const v = job.variables[key];
      const n = typeof v === "number" ? v : Number(v);
      return Number.isFinite(n) ? n : fallback;
    },
  };
}

function safeStringify(value: unknown): string {
  try {
    return JSON.stringify(value ?? {});
  } catch {
    return "[unserializable value]";
  }
}

/**
 * Build the `jobType → JobHandler` map the dispatch loop takes, from the
 * model's task list and the compiled per-element handlers. An element with no
 * handler throws when activated, which surfaces as an incident on the diagram
 * rather than a silent stall.
 */
export function buildWorkers(
  model: ModelInfo,
  byElement: Record<string, ExampleHandler>,
  trace: Trace,
): Record<string, JobHandler> {
  const workers: Record<string, JobHandler> = {};
  const labels = new Map(model.tasks.map((t) => [t.elementId, t.label]));

  for (const task of model.tasks) {
    if (workers[task.jobType]) continue; // one wrapper per job type
    workers[task.jobType] = async (job) => {
      const handler = byElement[job.elementId];
      if (!handler)
        throw new Error(
          `No handler registered for ${job.elementId} (job type ${job.type})`,
        );
      const label = labels.get(job.elementId) ?? job.elementId;
      trace({ kind: "tool", text: `▶ ${label}` });
      const out = await handler(job, helpersFor(job, trace));
      trace({ kind: "vars", text: `  ↳ ${safeStringify(out)}` });
      return out as Record<string, unknown> | undefined;
    };
  }
  return workers;
}
