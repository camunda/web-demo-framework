import type { ActivatedJob, AgentHandler, AgentResult } from "@nanobpm/bojtos-react";
import type { HandlerHelpers } from "../types";
import { runInSandbox, toSandboxJob } from "./run";

/**
 * The sandbox-backed replacements for `compileHandler`/`compileAgent` in
 * `../compile.ts`. Both keep the exact same call shape the rest of the app
 * already uses — `(job, helpers) => unknown` and `(job) => AgentResult` — so
 * nothing outside this module and `compile.ts` needs to change; only *where*
 * the reader's source actually executes does.
 */

export function runHandlerSandboxed(
  source: string,
  job: ActivatedJob,
  helpers: HandlerHelpers,
): Promise<unknown> {
  return runInSandbox(
    { kind: "run-handler", source, job: toSandboxJob(job) },
    { onTrace: helpers.trace },
  );
}

export function runAgentSandboxed(
  source: string,
  job: ActivatedJob,
): Promise<AgentResult> {
  return runInSandbox({
    kind: "run-agent",
    source,
    job: toSandboxJob(job),
  }) as Promise<AgentResult>;
}

export type { AgentHandler };
