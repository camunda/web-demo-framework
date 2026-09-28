import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  createBojtosSession,
  dispatchWorkers,
  type AgentHandler,
  type AgentResult,
  type JobHandler,
  type JobResult,
  type ReadModelBojtosSession,
  type Snapshot,
} from "@nanobpm/bojtos-kit";
import { parseModel } from "../../framework/model";
import { withToolCallArgs } from "../../framework/agent/activation";
import type { ExampleHandler, HandlerHelpers } from "../../framework/types";
import { loadReadModelWasm } from "../../framework/testing/readModelWasm";
import { expenseDecision } from "./index";

/**
 * The expense-decision example on the **real wasm engine**, with its DMN table
 * genuinely deployed.
 *
 * Every claim here is about a *mechanism*, because this example's outcomes are
 * reachable by more than one route and would pass on the wrong one. "The claim
 * was approved" is satisfied by an agent that approved it after the table had
 * already said so; "it reached a human" is satisfied by a gateway whose
 * conditions never evaluate at all. So the tests below count agent
 * activations, read `decisionInstances` off the snapshot, and assert the edge
 * actually taken.
 *
 * Nothing here uses a drive-to-quiescence helper: those complete open user
 * tasks for you, and one of the four claims is that a claim *parks* on one.
 */

function compile(source: string): ExampleHandler {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
  return new Function(`"use strict"; return (${source});`)() as ExampleHandler;
}

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

const model = parseModel(expenseDecision.bpmn);
const PROCESS_ID = model.processId;
const handlerByElementId = new Map(
  expenseDecision.handlers.map((h) => [h.elementId, compile(h.source)]),
);

/**
 * What each job was handed and what its handler answered.
 *
 * This exists because **a completed instance reports no variables at all** —
 * `snapshot().instances[…].variables` is `{}` once `completed` is true, so
 * three of the four scenarios here, which run start to finish in one dispatch,
 * have nothing to read afterwards. The job is where the value was supposed to
 * be visible anyway: "the business rule task's `resultVariable` landed where
 * the model expects" is a claim about what the *next* element could see, not
 * about a post-mortem snapshot.
 */
const jobLog: { elementId: string; variables: Record<string, unknown>; result: unknown }[] = [];

function jobFor(elementId: string) {
  const entry = jobLog.find((j) => j.elementId === elementId);
  if (!entry) throw new Error(`${elementId} was never dispatched`);
  return entry;
}

/**
 * One worker per *job type*, dispatching on `job.elementId` — all three of
 * this model's tasks share `io.camunda:http-json:1`, so a job-type-keyed map
 * of handlers would silently drop two of them. This mirrors what
 * `framework/compile.ts`'s `buildWorkers` does for the live runner.
 */
function buildWorkers(): Record<string, JobHandler> {
  const workers: Record<string, JobHandler> = {};
  for (const task of model.tasks) {
    if (!handlerByElementId.has(task.elementId)) continue;
    workers[task.jobType] = async (job) => {
      const fn = handlerByElementId.get(job.elementId);
      if (!fn) throw new Error(`no handler for ${job.elementId}`);
      const result = await fn(job, helpersFor(job.variables));
      jobLog.push({ elementId: job.elementId, variables: job.variables, result });
      return result as JobResult;
    };
  }
  return workers;
}

/**
 * How many times the agent host job was actually activated in this run. The
 * headline claim of this example is a *negative* one — for a clear-cut claim
 * the model is never called — and a counter on the handler is the only thing
 * that says so directly. An `elementStats` row can be absent because the agent
 * ran and the snapshot reports it differently; this cannot.
 */
let agentTurns = 0;

function buildAgents(): Record<string, AgentHandler> {
  if (!model.agent) throw new Error("expense-decision model has no agent host");
  if (expenseDecision.scriptedAgent === undefined) {
    throw new Error("expense-decision example has no scriptedAgent");
  }
  const agent = compile(expenseDecision.scriptedAgent);
  return {
    [model.agent.jobType]: withToolCallArgs((job) => {
      agentTurns += 1;
      return agent(job, helpersFor(job.variables)) as AgentResult | Promise<AgentResult>;
    }, model.agent.tools),
  };
}

const scenario = (startsWith: string): Record<string, unknown> =>
  expenseDecision.scenarios!.find((s) => s.label.startsWith(startsWith))!.variables;

const CLEAR_APPROVE = scenario("Clear approve");
const CLEAR_REJECT = scenario("Clear reject");
const AGENT_RESOLVES = scenario("Gray zone — agent converts");
const AGENT_ESCALATES = scenario("Gray zone — agent escalates");

let session: ReadModelBojtosSession;
let workers: Record<string, JobHandler>;
let agents: Record<string, AgentHandler>;

beforeAll(async () => {
  session = await createBojtosSession({ variant: "readmodel", wasm: loadReadModelWasm() });
  workers = buildWorkers();
  agents = buildAgents();
}, 30_000);

afterAll(() => {
  session?.free();
});

/**
 * Start one claim, exactly as the runner does: **decisions first**, then the
 * diagram. `session.reset()` clears registrations along with the run, so the
 * DMN has to be redeployed every time or the business rule task incidents
 * instead of routing.
 */
async function submit(claim: Record<string, unknown>): Promise<void> {
  session.reset();
  agentTurns = 0;
  jobLog.length = 0;
  for (const dmn of Object.values(expenseDecision.decisions ?? {})) {
    session.deployDecision(dmn);
  }
  session.deploy(expenseDecision.bpmn);
  session.createInstance(PROCESS_ID, JSON.stringify(claim));
  await dispatchWorkers(session, workers, { agents });
}

function snap(): Snapshot {
  return session.snapshot();
}

function root(): Snapshot["instances"][number] | undefined {
  return snap().instances.find((i) => i.processId === PROCESS_ID);
}

function rootVariables(): Record<string, unknown> {
  return root()?.variables ?? {};
}

function completedCount(elementId: string): number {
  return snap().elementStats.find((s) => s.elementId === elementId)?.completed ?? 0;
}

function tookFlow(from: string, to: string): boolean {
  return snap().takenSequenceFlows.some((f) => f.from === from && f.to === to);
}

function openTask(elementId: string) {
  return snap().userTasks.find((t) => t.elementId === elementId && t.state === "Created");
}

describe("expense-decision — the rule table is the decision-maker", () => {
  /**
   * Read off the diagram, not off a run: `escalate` is the gateway's `default`
   * attribute. That is what decides where a claim goes when *neither*
   * condition can be evaluated — an unset `agentDecision`, a live brain that
   * answered in prose — and the behavioural tests below cannot distinguish it
   * from a third condition that happened to match.
   */
  it("routes escalate as the gateway's default, so an unreadable answer reaches a human", () => {
    const doc = new DOMParser().parseFromString(expenseDecision.bpmn, "application/xml");
    const BPMN_NS = "http://www.omg.org/spec/BPMN/20100524/MODEL";
    const elementById = (id: string) =>
      Array.from(doc.getElementsByTagNameNS(BPMN_NS, "*")).find(
        (el) => el.getAttribute("id") === id,
      );

    const gateway = elementById("Gateway_AgentOutcome");
    expect(gateway?.getAttribute("default")).toBe("Flow_AgentEscalate");

    // And the default flow carries no condition of its own — a `default` that
    // also had one would only be taken when that condition matched, which is
    // the opposite of the guarantee being claimed.
    const escalate = elementById("Flow_AgentEscalate");
    expect(escalate?.getAttribute("targetRef")).toBe("HumanTask_ReviewExpenseClaim");
    expect(
      escalate?.getElementsByTagNameNS(BPMN_NS, "conditionExpression"),
    ).toHaveLength(0);

    // The policy gateway is built the same way, for the same reason: a claim
    // the table could not settle is the agent's, not silently approved.
    expect(elementById("Gateway_PolicyOutcome")?.getAttribute("default")).toBe(
      "Flow_PolicyNeedsReview",
    );
  });

  it("approves a clear-cut claim from the table alone, never starting the agent", async () => {
    await submit(CLEAR_APPROVE);

    // (a) The claim this example is about: the model was never called.
    expect(agentTurns).toBe(0);
    expect(completedCount("ConvertCurrency")).toBe(0);
    expect(tookFlow("Gateway_PolicyOutcome", "ExpenseReasoningAgent")).toBe(false);

    // It was the DMN table that decided, named as such on the snapshot rather
    // than inferred from a variable a handler could equally have written.
    expect(snap().decisionInstances).toMatchObject([
      {
        decisionId: "expense_policy_decision",
        elementId: "BusinessRuleTask_EvaluatePolicy",
        output: "approved",
      },
    ]);
    // And the task's `resultVariable` landed where the model expects it: the
    // next element down the approved branch saw `policyDecision` in scope, and
    // saw no agent verdict beside it.
    const notice = jobFor("NotifyApprovedReimbursement");
    expect(notice.variables.policyDecision).toBe("approved");
    expect(notice.variables.agentDecision).toBeUndefined();
    expect(notice.result).toMatchObject({
      reimbursementNotice: { policyDecision: "approved", decisionSource: "policy" },
    });

    expect(tookFlow("Gateway_PolicyOutcome", "NotifyApprovedReimbursement")).toBe(true);
    expect(completedCount("NotifyApprovedReimbursement")).toBe(1);
    expect(completedCount("NotifyRejectedClaim")).toBe(0);
    expect(root()?.completed).toBe(true);
    expect(snap().incidents).toEqual([]);
  });

  it("rejects a clear-cut claim from the table alone, never starting the agent", async () => {
    await submit(CLEAR_REJECT);

    expect(agentTurns).toBe(0);
    expect(tookFlow("Gateway_PolicyOutcome", "ExpenseReasoningAgent")).toBe(false);
    expect(snap().decisionInstances).toMatchObject([
      { decisionId: "expense_policy_decision", output: "rejected" },
    ]);

    expect(tookFlow("Gateway_PolicyOutcome", "NotifyRejectedClaim")).toBe(true);
    expect(completedCount("NotifyRejectedClaim")).toBe(1);
    expect(completedCount("NotifyApprovedReimbursement")).toBe(0);
    // The notification was told which decision-maker settled it — the whole
    // point being that on these two scenarios it is never "agent".
    const notice = jobFor("NotifyRejectedClaim");
    expect(notice.variables.policyDecision).toBe("rejected");
    expect(notice.result).toMatchObject({
      rejectionNotice: { decisionSource: "policy" },
    });
    expect(root()?.completed).toBe(true);
    expect(snap().incidents).toEqual([]);
  });
});

describe("expense-decision — the agent handles the residual", () => {
  it("converts a non-USD claim and approves it under the doubled meals cap", async () => {
    await submit(AGENT_RESOLVES);

    // (b) It reached the agent because the table could not judge it, not
    // because the table was skipped.
    expect(snap().decisionInstances).toMatchObject([
      { decisionId: "expense_policy_decision", output: "needs-review" },
    ]);
    expect(tookFlow("Gateway_PolicyOutcome", "ExpenseReasoningAgent")).toBe(true);
    expect(agentTurns).toBeGreaterThan(0);

    // The one real tool ran, and it was handed the claim under the renamed
    // argument names — not under `amount`/`currency`, which would have let the
    // model overwrite the very values the table just read.
    expect(completedCount("ConvertCurrency")).toBe(1);
    const convert = jobFor("ConvertCurrency");
    expect(convert.variables.claimAmount).toBe(90);
    expect(convert.variables.claimCurrency).toBe("EUR");
    expect(convert.variables.amount).toBe(90);
    expect(convert.variables.currency).toBe("EUR");

    // The agent's verdict is downstream of the tool's answer: 90 EUR is over
    // the flat $75 meals cap once converted, and only the documented exception
    // lets it through.
    const notice = jobFor("NotifyApprovedReimbursement");
    expect(notice.variables.convertedAmountUSD).toBe(98.1);
    expect(notice.variables.policyDecision).toBe("needs-review");
    expect(notice.variables.agentDecision).toBe("approved");
    expect(String(notice.variables.agentReasoning)).toContain("exception");
    expect(notice.result).toMatchObject({
      reimbursementNotice: { decisionSource: "agent" },
    });

    expect(tookFlow("Gateway_AgentOutcome", "NotifyApprovedReimbursement")).toBe(true);
    expect(tookFlow("Gateway_PolicyOutcome", "NotifyApprovedReimbursement")).toBe(false);
    expect(root()?.completed).toBe(true);
    expect(snap().incidents).toEqual([]);
  });

  it("escalates an ambiguous USD claim, parking it on the human review task", async () => {
    await submit(AGENT_ESCALATES);

    // (c) The table flagged it, the agent looked at it, and it still ends with
    // a person — with no currency conversion, because there was nothing to
    // convert. That absence is the claim: this tool is scoped to one residual
    // case, not called on principle.
    expect(rootVariables().policyDecision).toBe("needs-review");
    expect(agentTurns).toBe(1);
    expect(completedCount("ConvertCurrency")).toBe(0);
    expect(rootVariables().agentDecision).toBe("escalate");

    expect(tookFlow("Gateway_AgentOutcome", "HumanTask_ReviewExpenseClaim")).toBe(true);
    expect(completedCount("NotifyApprovedReimbursement")).toBe(0);
    expect(completedCount("NotifyRejectedClaim")).toBe(0);

    // Parked, not finished — asserted before anything completes the task, and
    // on `activeElements` as well as `userTasks`, since a task row can linger
    // in a state the instance is no longer waiting on.
    const parked = openTask("HumanTask_ReviewExpenseClaim");
    expect(parked, "the escalated claim should park on the review task").toBeDefined();
    expect(root()?.completed).toBe(false);
    expect(root()?.activeElements.map((e) => e.elementId)).toEqual([
      "HumanTask_ReviewExpenseClaim",
    ]);
    expect(snap().incidents).toEqual([]);

    // And a reviewer's decision is what finishes it.
    session.completeUserTask(
      parked!.key,
      JSON.stringify({ reviewDecision: "approved", reviewComments: "Confirmed with the employee." }),
    );
    await dispatchWorkers(session, workers, { agents });
    expect(root()?.completed).toBe(true);
    expect(snap().incidents).toEqual([]);
  });
});
