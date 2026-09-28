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
import { parseModel, resolveCorrelationKey } from "../../framework/model";
import { withToolCallArgs } from "../../framework/agent/activation";
import type { ExampleHandler, HandlerHelpers } from "../../framework/types";
import { loadReadModelWasm } from "../../framework/testing/readModelWasm";
import { fraudAlertTriage } from "./index";

/**
 * The fraud-alert-triage example on the **real wasm engine**.
 *
 * Every claim here is about a *mechanism*, because the outcomes this example
 * produces are all reachable by more than one route and would pass on the
 * wrong one. "The case ended up at the fraud team" is satisfied by the agent
 * escalating on its own; "there is still one instance" is satisfied by a
 * message start event that has quietly stopped working. So each test pins the
 * thing that was supposed to have been cancelled *before* publishing, and then
 * asserts the edge actually taken.
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

const model = parseModel(fraudAlertTriage.bpmn);
const PROCESS_ID = model.processId;
const handlerByElementId = new Map(
  fraudAlertTriage.handlers.map((h) => [h.elementId, compile(h.source)]),
);

/**
 * One worker per *job type*, dispatching on `job.elementId` — four of this
 * model's tasks share `io.camunda:http-json:1`, so a job-type-keyed map of
 * handlers would silently drop three of them. This mirrors what
 * `framework/compile.ts`'s `buildWorkers` does for the live runner.
 */
function buildWorkers(): Record<string, JobHandler> {
  const workers: Record<string, JobHandler> = {};
  for (const task of model.tasks) {
    if (!handlerByElementId.has(task.elementId)) continue;
    workers[task.jobType] = (job) => {
      const fn = handlerByElementId.get(job.elementId);
      if (!fn) throw new Error(`no handler for ${job.elementId}`);
      return fn(job, helpersFor(job.variables)) as JobResult | Promise<JobResult>;
    };
  }
  return workers;
}

function buildAgents(): Record<string, AgentHandler> {
  if (!model.agent) throw new Error("fraud-alert-triage model has no agent host");
  if (fraudAlertTriage.scriptedAgent === undefined) {
    throw new Error("fraud-alert-triage example has no scriptedAgent");
  }
  const agent = compile(fraudAlertTriage.scriptedAgent);
  return {
    [model.agent.jobType]: withToolCallArgs(
      (job) => agent(job, helpersFor(job.variables)) as AgentResult | Promise<AgentResult>,
      model.agent.tools,
    ),
  };
}

const AMBIGUOUS = fraudAlertTriage.seed;
const MUNDANE = fraudAlertTriage.scenarios!.find((s) =>
  s.label.startsWith("Mundane"),
)!.variables;
const SECOND_ALERT = fraudAlertTriage.messageEvents![0].variables!;

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
 * Publish `fraud-alert`, the way the runner does: there is no `createInstance`
 * on this model at all — whether this starts a case or interrupts one is the
 * engine's decision, not the caller's.
 */
async function publish(variables: Record<string, unknown>, key: string): Promise<void> {
  session.correlateMessage(
    model.startMessage!.messageName,
    key,
    JSON.stringify(variables),
  );
  await dispatchWorkers(session, workers, { agents });
}

async function start(scenario: Record<string, unknown>): Promise<void> {
  session.reset();
  session.deploy(fraudAlertTriage.bpmn);
  await publish(
    scenario,
    resolveCorrelationKey(model.startMessage!.correlationKey, scenario),
  );
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

/** Answer the analyst consultation the agent opened, then drain again. */
async function answerAnalyst(assessment: string): Promise<void> {
  const task = openTask("ConsultFraudAnalyst");
  if (!task) throw new Error("no open ConsultFraudAnalyst task to answer");
  session.completeUserTask(task.key, JSON.stringify({ analystAssessment: assessment }));
  await dispatchWorkers(session, workers, { agents });
}

describe("fraud-alert-triage — one subscription, two jobs", () => {
  /**
   * The claim the example exists to make, read off the diagram rather than off
   * a run: the start event and the interrupting boundary event are subscribed
   * to the *same* `bpmn:message`. Give the boundary its own message and every
   * behavioural test below still passes — with a second endpoint, which is the
   * thing this example says you don't need.
   */
  it("subscribes the start event and the boundary to one and the same message", () => {
    const doc = new DOMParser().parseFromString(fraudAlertTriage.bpmn, "application/xml");
    const BPMN_NS = "http://www.omg.org/spec/BPMN/20100524/MODEL";
    const messageRefOf = (elementId: string) =>
      Array.from(doc.getElementsByTagNameNS(BPMN_NS, "*"))
        .find((el) => el.getAttribute("id") === elementId)
        ?.getElementsByTagNameNS(BPMN_NS, "messageEventDefinition")[0]
        ?.getAttribute("messageRef");

    expect(messageRefOf("StartEvent_FraudAlertWebhook")).toBe("Message_FraudAlert");
    expect(messageRefOf("Boundary_SecondAlert")).toBe("Message_FraudAlert");
    expect(doc.getElementsByTagNameNS(BPMN_NS, "message")).toHaveLength(1);

    // And that one message correlates on the customer, which is what makes a
    // follow-up alert for the *same* customer meet an open subscription.
    expect(model.startMessage?.correlationKey).toBe("=customerId");
    // No other way in: no start form either, so nothing can create an instance
    // except a published alert.
    expect(model.startFormId).toBeUndefined();
  });
});

describe("fraud-alert-triage on the live engine — the event is the entry", () => {
  it("creates the case from a published alert, with no createInstance call", async () => {
    session.reset();
    session.deploy(fraudAlertTriage.bpmn);
    expect(cases()).toHaveLength(0);

    await publish(AMBIGUOUS, "CUST-40101");

    expect(cases()).toHaveLength(1);
    expect(snap().incidents).toEqual([]);
    // It didn't merely start — it ran: the agent cross-referenced and then
    // stopped on the human it chose to consult.
    expect(completedCount("CrossReferenceTransactionHistory")).toBe(1);
    expect(openTask("ConsultFraudAnalyst")).toBeDefined();
  });

  it("lets the agent, not the model, decide whether a human is consulted", async () => {
    // Same process, an alert that clears every low-risk threshold. The analyst
    // tool is never called and no human sees this case at all — which no
    // structural guarantee in the diagram would allow if the consultation were
    // a mandatory gate the way invoice-payment's release review is.
    await start({
      alertId: "ALERT-6601",
      customerId: "CUST-40100",
      cardLast4: "2210",
      transactionAmount: 145.5,
      transactionCurrency: "USD",
      merchantName: "Riverside Coffee Roasters",
      merchantCountry: "United States",
      riskScore: 38,
      alertReason: "New merchant category for this customer.",
    });

    expect(snap().userTasks).toEqual([]);
    expect(completedCount("CloseAlertNotification")).toBe(1);
    expect(completedCount("FreezeCard")).toBe(0);
    expect(cases()[0].completed).toBe(true);
    expect(snap().incidents).toEqual([]);
  });

  it("escalates on the agent's own judgment when the analyst answers", async () => {
    await start(AMBIGUOUS);
    await answerAnalyst("looks-suspicious");

    // The analyst's answer came back to the agent as the *tool's* result —
    // AskFraudAnalyst's own `zeebe:output` mapping — which is what makes it a
    // tool call rather than a detour the agent has to notice on its own.
    expect(rootVariables().toolCallResult).toContain("Analyst assessment: looks-suspicious");
    // Through the merge, but by the other incoming flow — and the handoff says
    // so, which is how the interrupt test below can claim anything at all.
    expect(tookFlow("Gateway_InvestigationOutcome", "Gateway_HandoffMerge")).toBe(true);
    expect(tookFlow("Boundary_SecondAlert", "Gateway_HandoffMerge")).toBe(false);
    expect(rootVariables().handoffTrigger).toBe("agent-escalation");
    expect(openTask("FraudTeamHandoff")).toBeDefined();
    expect(snap().incidents).toEqual([]);
  });

  it("bounds the wait on the analyst with the timer, and tells the agent so", async () => {
    await start(AMBIGUOUS);
    // Reported against the *attached activity*, the way a boundary message
    // subscription is — there is no `Boundary_AnalystTimeout` row to look for.
    const timer = snap().timers.find((t) => t.elementId === "ConsultFraudAnalyst");
    expect(timer, "the consultation should arm its SLA timer").toBeDefined();
    expect(openTask("ConsultFraudAnalyst")).toBeDefined();

    session.advanceTime(timer!.dueInMs + 1);
    await dispatchWorkers(session, workers, { agents });

    // The timer cancelled the consultation and the tool returned anyway — the
    // agent is told nobody answered rather than being left parked. Asserting
    // the handler ran, not just that the case finished: a timer that fired and
    // skipped RecordAnalystTimeout would end the run just as tidily.
    expect(completedCount("RecordAnalystTimeout")).toBe(1);
    expect(rootVariables().analystTimedOut).toBe(true);
    expect(String(rootVariables().investigationSummary)).toContain("no analyst response");

    // The consultation is gone from the scope — which is what decides whether
    // anything can still be completed there. Its `userTasks` row is left at
    // `Created` rather than `Canceled`, unlike the message-boundary teardown
    // below; both the runner and `drive.test` resolve open tasks against
    // `activeElements` for exactly this reason, so it is a reporting artefact
    // and not a second wait state. Pinned so it goes red if that changes.
    expect(cases()[0].activeElements.map((e) => e.elementId)).toEqual(["FraudTeamHandoff"]);
    expect(snap().userTasks.find((t) => t.elementId === "ConsultFraudAnalyst")?.state).toBe(
      "Created",
    );
    expect(snap().timers).toEqual([]);
    expect(snap().incidents).toEqual([]);
  });
});

describe("fraud-alert-triage on the live engine — the interrupt", () => {
  it("takes a second alert for the same customer into the running case, not a new one", async () => {
    await start(MUNDANE);

    // Pin what there is to cancel, before publishing. Without this a silent
    // regression in tool activation would leave nothing running and the
    // teardown below would report a clean interrupt of an empty case.
    const parked = openTask("ConsultFraudAnalyst");
    expect(parked, "the agent should be parked on its analyst consultation").toBeDefined();
    const boundary = snap().messageSubscriptions.find(
      (m) => m.elementId === "FraudInvestigationAgent" || m.elementId === "Boundary_SecondAlert",
    );
    expect(boundary?.messageName).toBe("fraud-alert");
    expect(boundary?.correlationKey).toBe("CUST-40112");
    expect(cases()).toHaveLength(1);

    await publish(SECOND_ALERT, "CUST-40112");

    // (b) One case, still. The start event and the boundary were subscribed to
    // the same message and the same key; the engine preferred the open
    // subscription over creating a duplicate.
    expect(cases()).toHaveLength(1);
    expect(completedCount("SnapshotOriginalAlert")).toBe(1);
  });

  it("tears the agent down, human task and all, and runs the interrupt path", async () => {
    await start(MUNDANE);
    const parked = openTask("ConsultFraudAnalyst");
    expect(parked).toBeDefined();

    await publish(SECOND_ALERT, "CUST-40112");

    // (c) The mechanism, not the outcome. The task the agent was waiting on is
    // gone — and gone as *cancelled*, not left Created somewhere unreachable,
    // which is how Magikcraft/nano-bpm#1155 used to present.
    expect(openTask("ConsultFraudAnalyst")).toBeUndefined();
    const consult = snap().userTasks.find((t) => t.elementId === "ConsultFraudAnalyst");
    expect(consult?.state).toBe("Canceled");
    // The agent's own exit was not taken; the boundary's was.
    expect(tookFlow("Boundary_SecondAlert", "Gateway_HandoffMerge")).toBe(true);
    expect(tookFlow("FraudInvestigationAgent", "Gateway_InvestigationOutcome")).toBe(false);
    expect(completedCount("CloseAlertNotification")).toBe(0);
    expect(completedCount("FreezeCard")).toBe(1);

    // And the handoff is told which path it arrived by, derived from the agent
    // never having reached its own answer.
    const vars = rootVariables();
    expect(vars.investigationOutcome).toBeUndefined();
    expect(vars.handoffTrigger).toBe("second-alert-interrupt");
    // The second alert's data overwrote the plain variables; the snapshot the
    // handoff form shows alongside it did not move.
    expect(vars.alertId).toBe("ALERT-6605");
    expect(vars.originalAlertId).toBe("ALERT-6604");
    expect(openTask("FraudTeamHandoff")).toBeDefined();
    expect(snap().incidents).toEqual([]);
  });

  it("still starts a fresh case for a different customer", async () => {
    // (d) The preference above is about a *matching* open subscription, not
    // about the start event having quietly stopped working — which "still one
    // instance" would equally have shown.
    await start(MUNDANE);
    expect(cases()).toHaveLength(1);

    await publish({ ...AMBIGUOUS, customerId: "CUST-40101" }, "CUST-40101");

    expect(cases()).toHaveLength(2);
    expect(cases().map((i) => i.variables.customerId).sort()).toEqual([
      "CUST-40101",
      "CUST-40112",
    ]);
    // Both are live and independent: neither publish interrupted the other.
    expect(snap().userTasks.filter((t) => t.state === "Created")).toHaveLength(2);
    expect(snap().incidents).toEqual([]);
  });
});
