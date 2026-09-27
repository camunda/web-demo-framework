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
import { creditLineIncrease } from "./index";

/**
 * The credit-line-increase example on the **real wasm engine**.
 *
 * Every claim here is about a *mechanism*, because this example's outcomes are
 * all reachable by more than one route and would pass on the wrong one. "The
 * agent produced a decision" is satisfied by a wait that never waited; "the
 * case reached underwriting ops" is satisfied by an agent that escalates
 * unconditionally. So each test pins the thing that was supposed to be
 * *pending* before anything drives the run, and then asserts the edge actually
 * taken.
 *
 * In particular, nothing below uses a drive-to-quiescence helper. Those
 * correlate waiting messages and advance due timers on your behalf — which is
 * exactly the wait this file exists to measure.
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

const model = parseModel(creditLineIncrease.bpmn);
const PROCESS_ID = model.processId;
const handlerByElementId = new Map(
  creditLineIncrease.handlers.map((h) => [h.elementId, compile(h.source)]),
);

/**
 * What each element was handed, by element id. A **completed** instance
 * reports an empty variable bag, so a run that finishes — which most of these
 * do — leaves nothing to read the agent's decision off afterwards. Recording
 * it at the step that consumed it is also the stronger claim: the assertion
 * becomes "the notification was given this decision", not "this value was
 * lying around at the end".
 */
const seenByElementId = new Map<string, Record<string, unknown>>();

/**
 * One worker per *job type*, dispatching on `job.elementId` — both HTTP tasks
 * share `io.camunda:http-json:1`, so a job-type-keyed map of handlers would
 * silently drop one of them. This mirrors what `framework/compile.ts`'s
 * `buildWorkers` does for the live runner.
 */
function buildWorkers(): Record<string, JobHandler> {
  const workers: Record<string, JobHandler> = {};
  for (const task of model.tasks) {
    if (!handlerByElementId.has(task.elementId)) continue;
    workers[task.jobType] = (job) => {
      const fn = handlerByElementId.get(job.elementId);
      if (!fn) throw new Error(`no handler for ${job.elementId}`);
      seenByElementId.set(job.elementId, { ...job.variables });
      return fn(job, helpersFor(job.variables)) as JobResult | Promise<JobResult>;
    };
  }
  return workers;
}

function buildAgents(): Record<string, AgentHandler> {
  if (!model.agent) throw new Error("credit-line-increase model has no agent host");
  if (creditLineIncrease.scriptedAgent === undefined) {
    throw new Error("credit-line-increase example has no scriptedAgent");
  }
  const agent = compile(creditLineIncrease.scriptedAgent);
  return {
    [model.agent.jobType]: withToolCallArgs(
      (job) => agent(job, helpersFor(job.variables)) as AgentResult | Promise<AgentResult>,
      model.agent.tools,
    ),
  };
}

const APPROVED = creditLineIncrease.seed;
const NO_FILE = creditLineIncrease.scenarios!.find((s) =>
  s.label.startsWith("Bureau never answers"),
)!.variables;

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

async function drain(): Promise<void> {
  await dispatchWorkers(session, workers, { agents });
}

/** Start one case and run until it can go no further on its own. */
async function start(scenario: Record<string, unknown>): Promise<void> {
  seenByElementId.clear();
  session.reset();
  session.deploy(creditLineIncrease.bpmn);
  session.createInstance(PROCESS_ID, JSON.stringify(scenario));
  await drain();
}

function snap(): Snapshot {
  return session.snapshot();
}

function cases(): Snapshot["instances"] {
  return snap().instances.filter((i) => i.processId === PROCESS_ID);
}

function completedCount(elementId: string): number {
  return snap().elementStats.find((s) => s.elementId === elementId)?.completed ?? 0;
}

function openTask(elementId: string) {
  return snap().userTasks.find((t) => t.elementId === elementId && t.state === "Created");
}

function tookFlow(from: string, to: string): boolean {
  return snap().takenSequenceFlows.some((f) => f.from === from && f.to === to);
}

function rootVariables(): Record<string, unknown> {
  return cases()[0]?.variables ?? {};
}

/** The variables `elementId` was activated with — see `seenByElementId`. */
function varsAt(elementId: string): Record<string, unknown> {
  const seen = seenByElementId.get(elementId);
  if (!seen) throw new Error(`${elementId} never ran`);
  return seen;
}

function activeElementIds(): string[] {
  return (cases()[0]?.activeElements ?? []).map((e) => e.elementId);
}

/** The bureau's reply, published the way a webhook connector would. */
async function publishBureauReport(
  key: string,
  report: Record<string, unknown>,
): Promise<void> {
  session.correlateMessage("bureau-report", key, JSON.stringify(report));
  await drain();
}

/** Fire the SLA boundary timer, without touching anything else. */
async function elapseSla(): Promise<void> {
  const timer = snap().timers.find((t) => t.elementId === "BureauReplyWindow");
  if (!timer) throw new Error("no SLA timer armed on BureauReplyWindow");
  session.advanceTime(timer.dueInMs + 1);
  await drain();
}

/** Answer the escalation the agent opened, then drain again. */
async function answerUnderwritingOps(payload: Record<string, unknown>): Promise<void> {
  const task = openTask("UnderwritingOpsDecision");
  if (!task) throw new Error("no open UnderwritingOpsDecision task to answer");
  session.completeUserTask(task.key, JSON.stringify(payload));
  await drain();
}

describe("credit-line-increase — the wait is one tool call", () => {
  /**
   * Read off the diagram, not off a run: the agent has exactly two root nodes,
   * and the wait is not one of them. Give `WaitForBureauReport` no incoming
   * flow and every behavioural test below still passes — with the agent free
   * to wait without ever having asked the bureau anything, which is the thing
   * this example says can't happen.
   */
  it("makes the wait the continuation of the request, not a second tool", () => {
    const doc = new DOMParser().parseFromString(creditLineIncrease.bpmn, "application/xml");
    const BPMN_NS = "http://www.omg.org/spec/BPMN/20100524/MODEL";
    const incomingOf = (elementId: string) =>
      Array.from(doc.getElementsByTagNameNS(BPMN_NS, "sequenceFlow"))
        .filter((f) => f.getAttribute("targetRef") === elementId)
        .map((f) => f.getAttribute("id"));

    // Camunda resolves ad-hoc tools as the host's root nodes — the children
    // with no incoming flow.
    expect(incomingOf("RequestCreditBureauReport")).toEqual([]);
    expect(incomingOf("EscalateToUnderwritingOps")).toEqual([]);
    expect(incomingOf("WaitForBureauReport")).toEqual(["Flow_RequestToWait"]);

    // And the timer is on the wait, not on the agent: nothing attached to the
    // host means nothing can eject it.
    const attachedTo = Array.from(doc.getElementsByTagNameNS(BPMN_NS, "boundaryEvent")).map(
      (b) => [b.getAttribute("id"), b.getAttribute("attachedToRef")],
    );
    expect(attachedTo).toEqual([["Boundary_BureauSLA", "BureauReplyWindow"]]);
  });
});

describe("credit-line-increase on the live engine — the wait", () => {
  it("parks on the bureau's reply after the request, with the SLA armed", async () => {
    await start(APPROVED);

    // (a) Snapshotted before anything resolves the wait. The request ran, the
    // chained flow was taken, and the instance is genuinely stopped: one open
    // message subscription, one armed timer, no job anywhere for a worker to
    // take. A silently-skipped wait — which is how the receive task this
    // replaced fails — would show none of that and a finished instance.
    expect(snap().incidents).toEqual([]);
    expect(completedCount("RequestCreditBureauReport")).toBe(1);
    expect(tookFlow("RequestCreditBureauReport", "WaitForBureauReport")).toBe(true);

    const subscription = snap().messageSubscriptions.find(
      (m) => m.elementId === "BureauReportArrived",
    );
    expect(subscription?.messageName).toBe("bureau-report");
    expect(subscription?.correlationKey).toBe("CUST-70210");
    expect(snap().timers.map((t) => t.elementId)).toEqual(["BureauReplyWindow"]);

    expect(cases()[0].completed).toBe(false);
    expect(activeElementIds()).toContain("BureauReportArrived");
    expect(snap().jobs.filter((j) => j.state === "Created")).toEqual([]);
    // Nothing downstream of the agent has run, and the agent has not answered.
    expect(completedCount("NotifyCustomerDecision")).toBe(0);
    expect(rootVariables().decisionOutcome).toBeUndefined();
  });

  it("resumes the agent with the bureau's report when the reply correlates", async () => {
    await start(APPROVED);
    expect(rootVariables().bureauReplied).toBeUndefined();

    await publishBureauReport("CUST-70210", {
      creditScoreExternal: 745,
      existingDebtUSD: 4000,
      bureauFlags: "none",
    });

    // The report came back as the *tool's* result — the agent was not told
    // about a message, it was told what its own call returned. Read off the
    // notification step, which is the first thing downstream of the agent.
    expect(completedCount("RecordBureauReport")).toBe(1);
    const notified = varsAt("NotifyCustomerDecision");
    expect(String(notified.toolCallResult)).toContain("Bureau report received");
    expect(notified.bureauReplied).toBe(true);
    expect(notified.creditScoreExternal).toBe(745);
    // The timer lost the race and is gone, so the SLA can't fire afterwards.
    expect(snap().timers).toEqual([]);
    expect(completedCount("RecordBureauTimeout")).toBe(0);
    expect(snap().incidents).toEqual([]);
  });

  it("takes the published report over the stand-in file", async () => {
    // Otherwise "the agent read the bureau's report" would be satisfied by a
    // handler that ignores the correlation and answers from its own table.
    await start(APPROVED);
    await publishBureauReport("CUST-70210", {
      creditScoreExternal: 512,
      existingDebtUSD: 31000,
      bureauFlags: "charge-off recorded last year",
    });

    expect(varsAt("NotifyCustomerDecision").creditScoreExternal).toBe(512);
    expect(varsAt("NotifyCustomerDecision").decisionOutcome).toBe("denied");
    expect(cases()[0].completed).toBe(true);
    expect(snap().incidents).toEqual([]);
  });
});

describe("credit-line-increase on the live engine — the SLA", () => {
  it("reports the timeout back into the agent's loop instead of ejecting it", async () => {
    await start(NO_FILE);
    // Pin what there is to interrupt, before the clock moves: without this a
    // regression that never opened the wait at all would let the assertions
    // below describe a clean timeout of nothing.
    expect(
      snap().messageSubscriptions.find((m) => m.elementId === "BureauReportArrived"),
      "the case should be parked on the bureau's reply",
    ).toBeDefined();

    await elapseSla();

    // (c) The mechanism. The boundary's own outgoing flow was taken — which is
    // the part that silently does *not* happen when the same boundary is
    // attached one level higher — and the handler on the other end ran.
    expect(tookFlow("Boundary_BureauSLA", "RecordBureauTimeout")).toBe(true);
    expect(completedCount("RecordBureauTimeout")).toBe(1);
    expect(completedCount("RecordBureauReport")).toBe(0);
    expect(rootVariables().bureauTimedOut).toBe(true);

    // The agent survived it: the host is still active, and it went on to make
    // a *further* tool call. An ejected agent would have left the ad-hoc
    // sub-process and gone straight to the notification.
    expect(activeElementIds()).toContain("CreditReviewAgent");
    expect(openTask("UnderwritingOpsDecision")).toBeDefined();
    expect(completedCount("NotifyCustomerDecision")).toBe(0);
    expect(tookFlow("CreditReviewAgent", "NotifyCustomerDecision")).toBe(false);
    expect(snap().incidents).toEqual([]);
  });

  it("leaves the escalation the agent's own move, not the timer's", () => {
    // Nothing in the diagram connects the timeout to the escalation: the
    // boundary's only flow goes to the recorder, and the escalation has no
    // incoming flow at all. The tool call in the previous test was therefore
    // the agent's decision, not a route the model forced.
    const doc = new DOMParser().parseFromString(creditLineIncrease.bpmn, "application/xml");
    const BPMN_NS = "http://www.omg.org/spec/BPMN/20100524/MODEL";
    const flows = Array.from(doc.getElementsByTagNameNS(BPMN_NS, "sequenceFlow")).map((f) => [
      f.getAttribute("sourceRef"),
      f.getAttribute("targetRef"),
    ]);
    expect(flows.filter(([from]) => from === "Boundary_BureauSLA")).toEqual([
      ["Boundary_BureauSLA", "RecordBureauTimeout"],
    ]);
    expect(flows.filter(([, to]) => to === "EscalateToUnderwritingOps")).toEqual([]);
  });
});

describe("credit-line-increase on the live engine — one ending", () => {
  it("reaches the notification and one structured decision from the bureau's reply", async () => {
    await start(APPROVED);
    await publishBureauReport("CUST-70210", {
      creditScoreExternal: 745,
      existingDebtUSD: 4000,
      bureauFlags: "none",
    });

    expect(completedCount("UnderwritingOpsDecision")).toBe(0);
    expect(completedCount("NotifyCustomerDecision")).toBe(1);
    const notified = varsAt("NotifyCustomerDecision");
    expect(notified.decisionOutcome).toBe("approved");
    expect(notified.approvedLimitUSD).toBe(8000);
    expect(String(notified.decisionSummary)).toContain("bureau's report");
    expect(cases()[0].completed).toBe(true);
    expect(snap().incidents).toEqual([]);
  });

  it("reaches the same notification and shape from the escalated path", async () => {
    await start(NO_FILE);
    await elapseSla();
    await answerUnderwritingOps({
      opsDecisionOutcome: "reduced",
      opsApprovedLimitUSD: 9000,
      opsDecisionNotes: "Long tenure and clean internal record; half the ask is fine.",
    });

    // (d) Same step, same three variables, no separate ending and no merge
    // gateway — the only difference is which of the two the agent relied on.
    expect(completedCount("RecordBureauReport")).toBe(0);
    expect(completedCount("NotifyCustomerDecision")).toBe(1);
    const notified = varsAt("NotifyCustomerDecision");
    expect(notified.decisionOutcome).toBe("reduced");
    expect(notified.approvedLimitUSD).toBe(9000);
    expect(String(notified.decisionSummary)).toContain("underwriting ops");
    // The human's answer reached the agent as the tool's result, which is what
    // makes the escalation a tool call rather than a detour.
    expect(String(notified.toolCallResult)).toContain("Underwriting ops decided: reduced");
    expect(cases()[0].completed).toBe(true);
    expect(snap().incidents).toEqual([]);
  });

  it("uses one and the same notify step on both paths", async () => {
    // Asserted as a property of the diagram, since the two runs above each see
    // only their own half: a second ending added for the escalated case would
    // leave both of them green.
    const doc = new DOMParser().parseFromString(creditLineIncrease.bpmn, "application/xml");
    const BPMN_NS = "http://www.omg.org/spec/BPMN/20100524/MODEL";
    const process = doc.getElementsByTagNameNS(BPMN_NS, "process")[0];
    const topLevel = (local: string) =>
      Array.from(process.children)
        .filter((c) => c.namespaceURI === BPMN_NS && c.localName === local)
        .map((c) => c.getAttribute("id"));

    expect(topLevel("endEvent")).toEqual(["EndEvent_Done"]);
    expect(topLevel("exclusiveGateway")).toEqual([]);
    expect(topLevel("inclusiveGateway")).toEqual([]);
    expect(topLevel("parallelGateway")).toEqual([]);
  });
});
