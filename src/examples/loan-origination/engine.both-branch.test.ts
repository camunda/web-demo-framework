import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  createBojtosSession,
  dispatchWorkers,
  type AgentHandler,
  type AgentResult,
  type JobHandler,
  type JobResult,
  type ReadModelBojtosSession,
} from "@nanobpm/bojtos-kit";
import { assertThatInstance, assertThatUserTask, byProcessId } from "@nanobpm/engine-testkit";
import type { EngineReadModel } from "@nanobpm/engine-testkit";
import { parseModel } from "../../framework/model";
import type { ExampleHandler, HandlerHelpers } from "../../framework/types";
import { bojtosReadModel } from "../../framework/testing/engineReadModel";
import { loadReadModelWasm } from "../../framework/testing/readModelWasm";
import { loanOrigination } from "./index";

/**
 * The loan-origination example, driven end-to-end on the **real wasm engine**
 * (via `@nanobpm/bojtos-kit`) across *both* of its outcomes, with every
 * assertion made through `@nanobpm/engine-testkit`'s engine-agnostic
 * `assertThat*` DSL rather than a bespoke harness.
 *
 * The matchers read the canonical engine read model surfaced by the bojtos-kit
 * read-model session handle (`variant: "readmodel"`, the S4 read-model handle,
 * nanobpm/bojtos#15) through {@link bojtosReadModel} — the single source of
 * truth, not a hand-rolled snapshot. `assertThatInstance` reads the session's
 * `snapshot()`; `assertThatUserTask` reads its user-task read model.
 *
 * The property under test is the governance one the example exists to make real:
 * whatever the agent recommended, **every** application parks on the mandatory
 * senior-officer review before either outcome is reachable, and the exclusive
 * gateway then routes on the officer's `decision` — `"approved"` to the loan
 * offer, anything else to the decline notice. (The offline `index.test.ts` pins
 * the model shape and the handlers' deterministic logic; this pins how the live
 * engine actually routes a token through them.)
 */

/** Evaluate a handler's editable source into the function the runner runs. */
function compile(source: string): ExampleHandler {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
  return new Function(`"use strict"; return (${source});`)() as ExampleHandler;
}

/** The subset of `HandlerHelpers` the loan handlers use, over a job's variables. */
function helpersFor(variables: Record<string, unknown>): HandlerHelpers {
  return {
    sleep: () => Promise.resolve(),
    trace: () => {},
    text: (key, fallback = "") => {
      const v = variables[key];
      return typeof v === "string" ? v : v == null ? fallback : String(v);
    },
    num: (key, fallback = 0) => {
      const v = variables[key];
      const n = typeof v === "number" ? v : Number(v);
      return Number.isFinite(n) ? n : fallback;
    },
  };
}

const model = parseModel(loanOrigination.bpmn);
const PROCESS_ID = model.processId;
const handlerSourceByElementId = new Map(loanOrigination.handlers.map((h) => [h.elementId, h.source]));

/** A `jobType -> worker` map that drives each service/script task with the
 *  example's own editable handler source, exactly as the live runner does. */
function buildWorkers(): Record<string, JobHandler> {
  const workers: Record<string, JobHandler> = {};
  for (const task of model.tasks) {
    const source = handlerSourceByElementId.get(task.elementId);
    if (source === undefined) continue;
    const fn = compile(source);
    workers[task.jobType] = (job) => fn(job, helpersFor(job.variables)) as JobResult | Promise<JobResult>;
  }
  return workers;
}

/** The AI Agent host job, driven by the example's scripted stand-in for the LLM
 *  (deterministic tool choreography, derived from the instance's variables). */
function buildAgents(): Record<string, AgentHandler> {
  if (!model.agent) throw new Error("loan-origination model has no agent host");
  if (loanOrigination.scriptedAgent === undefined) {
    throw new Error("loan-origination example has no scriptedAgent");
  }
  const agent = compile(loanOrigination.scriptedAgent);
  return {
    [model.agent.jobType]: (job) => agent(job, helpersFor(job.variables)) as AgentResult | Promise<AgentResult>,
  };
}

const SCENARIO_STRONG = {
  applicantName: "Ada Lovelace",
  annualIncome: 96000,
  monthlyDebt: 850,
  creditScore: 782,
  loanAmount: 20000,
  loanPurpose: "Home improvement",
};
const SCENARIO_MARGINAL = {
  applicantName: "Cyrus Vale",
  annualIncome: 38000,
  monthlyDebt: 1450,
  creditScore: 566,
  loanAmount: 42000,
  loanPurpose: "Debt consolidation",
};

let session: ReadModelBojtosSession;
let engine: EngineReadModel;
let workers: Record<string, JobHandler>;
let agents: Record<string, AgentHandler>;

beforeAll(async () => {
  session = await createBojtosSession({ variant: "readmodel", wasm: loadReadModelWasm() });
  engine = bojtosReadModel(session);
  workers = buildWorkers();
  agents = buildAgents();
}, 30_000);

afterAll(() => {
  session?.free();
});

/** Deploy a clean instance, run the agent + tools to quiescence, and return the
 *  drain reason. `reset` first so the snapshot holds exactly this one instance
 *  (a precondition of `hasCompletedElements`, which reads snapshot-global stats). */
async function startAndRunToReview(seed: Record<string, unknown>): Promise<string> {
  session.reset();
  session.deploy(loanOrigination.bpmn);
  session.createInstance(PROCESS_ID, JSON.stringify(seed));
  const result = await dispatchWorkers(session, workers, { agents });
  return result.reason;
}

/** Complete the single open senior-officer review with `decision`, then drain
 *  the trunk (offer / decline) to completion. */
async function reviewAndSettle(decision: string): Promise<void> {
  const open = await engine.openUserTasks({ processInstanceKey: undefined });
  const review = open.find((t) => t.elementId === "SeniorOfficerReview");
  if (!review) throw new Error("no open SeniorOfficerReview task to complete");
  session.completeUserTask(review.userTaskKey, JSON.stringify({ decision, reviewNote: `officer: ${decision}` }));
  await dispatchWorkers(session, workers, { agents });
}

/** How many times `elementId` has completed in the current (single-instance) snapshot. */
function completedCount(elementId: string): number {
  return session.snapshot().elementStats.find((s) => s.elementId === elementId)?.completed ?? 0;
}

describe("loan-origination on the live engine — the governance gate", () => {
  it("parks every application on the senior-officer review before either outcome is reachable", async () => {
    const reason = await startAndRunToReview(SCENARIO_STRONG);

    // The agent has run its tools and handed off; the token is on the human gate.
    expect(reason).toBe("userTasks");
    await assertThatUserTask(engine, {
      instance: byProcessId(PROCESS_ID),
      elementId: "SeniorOfficerReview",
    }).isCreated();
    assertThatInstance(engine, byProcessId(PROCESS_ID))
      .isActive()
      .hasActiveElement("SeniorOfficerReview")
      .hasNoIncident();

    // Governance: neither outcome has been reached — the review is a real gate,
    // not decoration. No instance has completed while the officer holds the case.
    expect(session.snapshot().completedInstances).toBe(0);
  });

  it("routes an approved review to the loan offer", async () => {
    await startAndRunToReview(SCENARIO_STRONG);
    await reviewAndSettle("approved");

    assertThatInstance(engine, byProcessId(PROCESS_ID))
      .hasCompleted()
      .hasNoIncident()
      .hasCompletedElements("AssessApplication", "SeniorOfficerReview", "IssueLoanOffer", "LoanOfferIssued");
    // Exclusive routing: the decline branch was not taken.
    expect(completedCount("SendDeclineNotice")).toBe(0);
    await assertThatUserTask(engine, {
      instance: byProcessId(PROCESS_ID),
      elementId: "SeniorOfficerReview",
    }).isCompleted();
  });

  it("routes a declined review to the decline notice", async () => {
    await startAndRunToReview(SCENARIO_MARGINAL);
    await reviewAndSettle("declined");

    assertThatInstance(engine, byProcessId(PROCESS_ID))
      .hasCompleted()
      .hasNoIncident()
      .hasCompletedElements("AssessApplication", "SeniorOfficerReview", "SendDeclineNotice", "ApplicationDeclined");
    // Exclusive routing: the offer branch was not taken.
    expect(completedCount("IssueLoanOffer")).toBe(0);
    await assertThatUserTask(engine, {
      instance: byProcessId(PROCESS_ID),
      elementId: "SeniorOfficerReview",
    }).isCompleted();
  });
});
