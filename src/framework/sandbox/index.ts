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
  // Vision support (contract B) is additive: `helpers.vision`/`helpers.image`
  // exist only when the runner wired them for an `imageInput` example. Tell the
  // sandbox whether to expose them, and bridge each call back to these
  // host-side accessors — they alone hold this run's image pixels and the
  // active brain, which never cross into the reader-controlled sandbox.
  const hasVision = typeof helpers.vision === "function";
  return runInSandbox(
    { kind: "run-handler", source, job: toSandboxJob(job), hasVision },
    {
      onTrace: helpers.trace,
      onVision: helpers.vision
        ? (prompt: string) => helpers.vision!(prompt)
        : undefined,
      onImage: helpers.image ? () => helpers.image!() : undefined,
    },
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
