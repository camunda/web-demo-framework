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
import { parseModel } from "../../framework/model";
import type { ExampleHandler, HandlerHelpers } from "../../framework/types";
import { loadReadModelWasm } from "../../framework/testing/readModelWasm";
import { bankSupport } from "./index";

/**
 * The orchestrator example on the **real wasm engine**.
 *
 * What is worth asserting here is what the *structure* buys, not that an LLM
 * stand-in routes well. Three things:
 *
 * 1. a request that needs two specialists really does start two child process
 *    instances, and the orchestrator waits for both;
 * 2. each specialist is given only its own part of the message, so it can't
 *    answer a question that wasn't addressed to it;
 * 3. a case can only close automatically when every specialist that ran said
 *    `resolved` — enforced by the diagram, not by the orchestrator's opinion.
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

const model = parseModel(bankSupport.bpmn);
const ORCHESTRATOR = model.processId;
const handlerByElementId = new Map(
  bankSupport.handlers.map((h) => [h.elementId, compile(h.source)]),
);

/**
 * What `PrepareCaseSummary` was handed. Read from the job rather than from the
 * snapshot because a run that closes automatically completes the orchestrator,
 * and a completed instance reports no variables at all — so asserting against
 * the snapshot would silently pass on `undefined` for every scenario that
 * worked.
 */
let summarySaw: Record<string, unknown> = {};

/** Every process's tasks, not just the orchestrator's — three of the four run. */
function buildWorkers(): Record<string, JobHandler> {
  const workers: Record<string, JobHandler> = {};
  for (const task of model.processes.flatMap((p) => p.tasks)) {
    if (task.compound || !handlerByElementId.has(task.elementId)) continue;
    workers[task.jobType] = (job) => {
      const fn = handlerByElementId.get(job.elementId);
      if (!fn) throw new Error(`no handler for ${job.elementId}`);
      if (job.elementId === "PrepareCaseSummary") summarySaw = { ...job.variables };
      return fn(job, helpersFor(job.variables)) as JobResult | Promise<JobResult>;
    };
  }
  return workers;
}

/** All four agent hosts share one job type; the source dispatches on elementId. */
function buildAgents(): Record<string, AgentHandler> {
  if (bankSupport.scriptedAgent === undefined) {
    throw new Error("bank-support example has no scriptedAgent");
  }
  const agent = compile(bankSupport.scriptedAgent);
  const agents: Record<string, AgentHandler> = {};
  for (const jobType of new Set(model.agents.map((a) => a.jobType))) {
    agents[jobType] = (job) =>
      agent(job, helpersFor(job.variables)) as AgentResult | Promise<AgentResult>;
  }
  return agents;
}

/**
 * A stand-in for the live-brain path: the specialists run their tool and then
 * stop, without the structured `status`/`summary` the scripted agent supplies.
 * That is what a live brain actually does here — `liveAgent` completes on the
 * model saying it is done, and this engine does not apply the AI Agent
 * connector's `agent.responseJson.*` output mapping.
 */
function buildAgentsWithNoStructuredAnswer(): Record<string, AgentHandler> {
  const scripted = compile(bankSupport.scriptedAgent!);
  const agents: Record<string, AgentHandler> = {};
  for (const jobType of new Set(model.agents.map((a) => a.jobType))) {
    agents[jobType] = async (job) => {
      const result = (await scripted(
        job,
        helpersFor(job.variables),
      )) as AgentResult;
      if (job.elementId === "CustomerSupportOrchestrator") return result;
      // Keep the routing, drop the answer.
      return result.completionConditionFulfilled
        ? { completionConditionFulfilled: true }
        : result;
    };
  }
  return agents;
}

const scenario = (label: string): Record<string, unknown> => {
  const found = bankSupport.scenarios?.find((s) => s.label.startsWith(label));
  if (!found) throw new Error(`no scenario starting "${label}"`);
  return found.variables;
};

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

async function start(seed: Record<string, unknown>): Promise<string> {
  summarySaw = {};
  session.reset();
  session.deploy(bankSupport.bpmn);
  session.createInstance(ORCHESTRATOR, JSON.stringify(seed));
  const result = await dispatchWorkers(session, workers, { agents });
  return result.reason;
}

/** As `start`, but with agents that give no structured final answer. */
async function startWithoutStructuredAnswer(
  seed: Record<string, unknown>,
): Promise<string> {
  summarySaw = {};
  session.reset();
  session.deploy(bankSupport.bpmn);
  session.createInstance(ORCHESTRATOR, JSON.stringify(seed));
  const result = await dispatchWorkers(session, workers, {
    agents: buildAgentsWithNoStructuredAnswer(),
  });
  return result.reason;
}

function completedCount(elementId: string): number {
  return session.snapshot().elementStats.find((s) => s.elementId === elementId)?.completed ?? 0;
}

function openUserTaskIds(): string[] {
  return session
    .snapshot()
    .userTasks.filter((t) => t.state === "Created")
    .map((t) => t.elementId);
}

/**
 * The orchestrator's variables, readable only while it is still running — which
 * is exactly the escalating runs, since those are parked on the review task.
 * A completed instance reports none (see `summarySaw`).
 */
function liveVariables(): Record<string, unknown> {
  const open = session.snapshot().instances.find((i) => i.processId === ORCHESTRATOR);
  if (!open || open.state !== "Active") throw new Error("orchestrator is not parked");
  return open.variables ?? {};
}

describe("bank-support — auto-close is gated by the diagram", () => {
  /**
   * The structural claim. A run can only ever show that the cases tried didn't
   * close wrongly; this reads the model, so a second edge into `NotifyCustomer`
   * fails here even if every scenario still behaves.
   */
  it("gives NotifyCustomer exactly one incoming flow, from the conditional branch", () => {
    const doc = new DOMParser().parseFromString(bankSupport.bpmn, "application/xml");
    const BPMN_NS = "http://www.omg.org/spec/BPMN/20100524/MODEL";
    const flows = Array.from(doc.getElementsByTagNameNS(BPMN_NS, "sequenceFlow")).filter(
      (f) => f.getAttribute("targetRef") === "NotifyCustomer",
    );

    expect(flows.map((f) => f.getAttribute("id"))).toEqual(["Flow_Yes"]);
    expect(flows[0].getAttribute("sourceRef")).toBe("Gateway_AllResolved");

    // And it is the *conditional* branch: escalation is the default, so a case
    // the gateway can't evaluate goes to a human rather than closing itself.
    const gateway = Array.from(
      doc.getElementsByTagNameNS(BPMN_NS, "exclusiveGateway"),
    ).find((g) => g.getAttribute("id") === "Gateway_AllResolved");
    expect(gateway?.getAttribute("default")).toBe("Flow_Escalate");
    expect(flows[0].getElementsByTagNameNS(BPMN_NS, "conditionExpression")).toHaveLength(1);
  });
});

describe("bank-support on the live engine", () => {
  it("delegates a loan question to one specialist, as its own process instance", async () => {
    await start(scenario("Loan question"));

    const children = session
      .snapshot()
      .instances.filter((i) => i.processId !== ORCHESTRATOR);
    expect(children.map((i) => i.processId)).toEqual(["bank-support-loan-agent"]);

    expect(completedCount("CalculateLoanPayment")).toBe(1);
    expect(completedCount("NotifyCustomer")).toBe(1);
    expect(openUserTaskIds()).toEqual([]);
  });

  it("runs two specialists for one message and waits for both", async () => {
    await start(scenario("Loan + account"));

    const children = session
      .snapshot()
      .instances.filter((i) => i.processId !== ORCHESTRATOR)
      .map((i) => i.processId)
      .sort();
    expect(children).toEqual(["bank-support-account-agent", "bank-support-loan-agent"]);

    // Both resolutions are present, so the summary was built after both
    // specialists returned rather than after the first.
    expect(summarySaw.loanResolution).toMatchObject({ status: "resolved" });
    expect(summarySaw.accountResolution).toMatchObject({ status: "resolved" });
    expect(completedCount("NotifyCustomer")).toBe(1);
  });

  /**
   * The orchestrator's second job, after choosing who to ask: giving each
   * specialist only its own part of the message. Handing over the whole thing
   * would let the account agent answer a loan question it was never asked —
   * which its own prompt would happily let it try.
   */
  it("gives each specialist only its own part of the message", async () => {
    await start(scenario("Loan + account"));

    expect(String(summarySaw.loanRequest)).toMatch(/200,000|loan/i);
    expect(String(summarySaw.loanRequest)).not.toMatch(/IBAN/i);

    expect(String(summarySaw.accountRequest)).toMatch(/IBAN/i);
    expect(String(summarySaw.accountRequest)).not.toMatch(/monthly payment/i);

    // The leak this guards against is not hypothetical: handed the whole
    // message, the loan agent reads the IBAN's digits as the loan amount and
    // quotes on it.
    expect(String(summarySaw.loanResolution && (summarySaw.loanResolution as { summary: string }).summary)).not.toMatch(
      /8937040044/,
    );

    // The orchestrator's own copy of the full message survives both, which is
    // what the reviewer is shown if the case escalates.
    expect(String(summarySaw.customerRequest)).toMatch(/IBAN/i);
    expect(String(summarySaw.customerRequest)).toMatch(/monthly payment/i);
  });

  it("escalates to a human when a specialist could not resolve its part", async () => {
    const reason = await start(scenario("Account question"));

    expect(reason).toBe("userTasks");
    expect(openUserTaskIds()).toEqual(["ReviewEscalatedCase"]);
    // Not merely "a human was asked": the automatic path was not taken.
    expect(completedCount("NotifyCustomer")).toBe(0);

    expect(summarySaw.accountResolution).toMatchObject({ status: "needs-human" });

    // What the reviewer is actually shown.
    const vars = liveVariables();
    expect(vars.allResolved).toBe(false);
    expect(String(vars.combinedSummary)).toMatch(/check digits/i);
  });

  it("resolves a card question from the BIN lookup", async () => {
    await start(scenario("Card question"));

    expect(completedCount("LookupCardBin")).toBe(1);
    expect(completedCount("NotifyCustomer")).toBe(1);
    expect(summarySaw.cardResolution).toMatchObject({ status: "resolved" });
  });

  /**
   * The account agent decides whether to call its tool at all, so a written
   * form it fails to recognise is not a validation failure — it is a customer
   * told their IBAN wasn't checked when it never was. Both of these are how
   * IBANs are actually written down.
   */
  it.each([
    ["lowercase", "Is de89370400440532013000 a valid account number?"],
    ["printed in groups of four", "Is DE89 3704 0044 0532 0130 00 a valid account number?"],
  ])("validates an IBAN written %s", async (_label, customerRequest) => {
    await start({ customerRequest });

    expect(completedCount("ValidateIban")).toBe(1);
    expect(summarySaw.accountResolution).toMatchObject({ status: "resolved" });
    expect(completedCount("NotifyCustomer")).toBe(1);
  });

  /**
   * The orchestrator can decline to delegate — nothing in the message matched a
   * specialist. Closing the case then would mean auto-answering a customer no
   * specialist looked at, so the summary says so and it goes to a human.
   */
  it("escalates rather than auto-closing when no specialist was called", async () => {
    const reason = await start({ customerRequest: "Do you have a branch open on Saturday?" });

    expect(reason).toBe("userTasks");
    expect(openUserTaskIds()).toEqual(["ReviewEscalatedCase"]);
    expect(completedCount("NotifyCustomer")).toBe(0);

    expect(summarySaw.loanResolution).toBeUndefined();
    expect(summarySaw.accountResolution).toBeUndefined();
    expect(summarySaw.cardResolution).toBeUndefined();

    const vars = liveVariables();
    expect(vars.allResolved).toBe(false);
    expect(String(vars.combinedSummary)).toMatch(/No specialist agent was called/i);
  });

  /**
   * The specialist's answer is the agent's structured response upstream, and
   * this engine doesn't apply the mapping that would deliver it. Without a
   * deterministic last step in each specialist, every case would escalate on a
   * live brain however well the specialist did — a failure invisible on the
   * scripted brain, which supplies the answer itself.
   */
  it("still resolves when the agent gives no structured answer", async () => {
    const reason = await startWithoutStructuredAnswer(scenario("Loan question"));

    expect(completedCount("CalculateLoanPayment")).toBe(1);
    expect(summarySaw.loanResolution).toMatchObject({ status: "resolved" });
    expect(
      String((summarySaw.loanResolution as { summary: string }).summary),
    ).toMatch(/monthly payment/i);
    expect(completedCount("NotifyCustomer")).toBe(1);
    expect(reason).not.toBe("userTasks");
  });

  it("still escalates a failed check when the agent gives no structured answer", async () => {
    await startWithoutStructuredAnswer(scenario("Account question"));

    expect(summarySaw.accountResolution).toMatchObject({ status: "needs-human" });
    expect(openUserTaskIds()).toEqual(["ReviewEscalatedCase"]);
    expect(completedCount("NotifyCustomer")).toBe(0);
  });
});

describe("bank-support — what each specialist is given, and what it refuses", () => {
  /** The comma before "and also" is optional in practice; the split can't rely on it. */
  it("splits a two-subject message even without a comma before the conjunction", async () => {
    await start({
      customerRequest:
        "Please validate DE89370400440532013000 for my transfer and also tell me the monthly payment on a $200,000 loan at 6% over 30 years.",
    });

    expect(String(summarySaw.accountRequest)).not.toMatch(/monthly payment/i);
    expect(String(summarySaw.loanRequest)).not.toMatch(/IBAN|DE8937/i);
    expect(completedCount("NotifyCustomer")).toBe(1);
  });

  /**
   * `CalculateLoanPayment` refuses a non-positive principal by throwing, which
   * would surface as an incident. A request for a zero loan is a question for a
   * human, not a broken demo.
   */
  it("declines a zero loan amount instead of raising an incident", async () => {
    await start({ customerRequest: "What would the monthly payment be on a $0 loan at 6% over 30 years?" });

    expect(session.snapshot().incidents).toEqual([]);
    expect(completedCount("CalculateLoanPayment")).toBe(0);
    expect(summarySaw.loanResolution).toMatchObject({ status: "needs-human" });
  });

  /**
   * Routing reaches the card specialist on the word "charge" alone, so a bare
   * number is as likely to be a transaction reference. Looking it up and naming
   * an issuing bank would be a confident wrong answer.
   */
  it("does not treat a bare reference number as a card BIN", async () => {
    await start({ customerRequest: "I don't recognize charge 123456 on my statement." });

    expect(completedCount("LookupCardBin")).toBe(0);
    expect(summarySaw.cardResolution).toMatchObject({ status: "needs-human" });
    expect(completedCount("NotifyCustomer")).toBe(0);
  });

  it.each([
    ["a full 16-digit number", "There's a charge on my card 4532015112830366 I don't recognise."],
    ["one written in groups of four", "There's a charge on my card 4532 0151 1283 0366 I don't recognise."],
  ])("reads the BIN from %s", async (_label, customerRequest) => {
    await start({ customerRequest });

    expect(completedCount("LookupCardBin")).toBe(1);
    expect(summarySaw.cardResolution).toMatchObject({ status: "resolved" });
  });

  /** The review form offers "Escalate further"; the model has to honour it. */
  it("routes the reviewer's escalation to its own end state", async () => {
    await start(scenario("Account question"));
    const task = session.snapshot().userTasks.find((t) => t.state === "Created");
    session.completeUserTask(task!.key, JSON.stringify({ reviewDecision: "escalated" }));
    await dispatchWorkers(session, workers, { agents });

    expect(completedCount("EndEvent_EscalatedFurther")).toBe(1);
    expect(completedCount("EndEvent_ResolvedManually")).toBe(0);
  });

  it("routes the reviewer's resolution to the manual end state", async () => {
    await start(scenario("Account question"));
    const task = session.snapshot().userTasks.find((t) => t.state === "Created");
    session.completeUserTask(task!.key, JSON.stringify({ reviewDecision: "resolved" }));
    await dispatchWorkers(session, workers, { agents });

    expect(completedCount("EndEvent_ResolvedManually")).toBe(1);
    expect(completedCount("EndEvent_EscalatedFurther")).toBe(0);
  });

  /** The currency marker can be a symbol or a code, and can follow the number. */
  it.each([
    ["a euro symbol", "What's the monthly payment on a €200,000 loan at 6% over 30 years?"],
    ["a trailing code", "What's the monthly payment on a 200,000 GBP loan at 6% over 30 years?"],
  ])("reads a loan amount marked with %s", async (_label, customerRequest) => {
    await start({ customerRequest });

    expect(completedCount("CalculateLoanPayment")).toBe(1);
    expect(summarySaw.loanResolution).toMatchObject({ status: "resolved" });
  });

  /**
   * Taking the first currency-marked number quotes on the monthly payment
   * here, which reads as a perfectly plausible answer and is the wrong loan.
   */
  it("picks the principal, not the first sum in the sentence", async () => {
    await start({
      customerRequest:
        "I can afford a $1,500 monthly payment for a $200,000 loan at 6% over 30 years - what would it actually be?",
    });

    const summary = String((summarySaw.loanResolution as { summary: string }).summary);
    expect(summary).toContain("200000");
    expect(summary).not.toContain("1500");
  });

  it("declines to guess when two sums could both be the loan", async () => {
    await start({
      customerRequest: "Could I borrow $200,000 or $300,000 at 6% over 30 years?",
    });

    expect(completedCount("CalculateLoanPayment")).toBe(0);
    expect(summarySaw.loanResolution).toMatchObject({ status: "needs-human" });
    expect(completedCount("NotifyCustomer")).toBe(0);
  });

  /**
   * A live agent can report a status without the summary its prompt asks for.
   * Passing that through auto-notifies the customer with "undefined" as the
   * explanation, which is worse than escalating.
   */
  it("derives a summary when the agent gives a status but no words", async () => {
    summarySaw = {};
    session.reset();
    session.deploy(bankSupport.bpmn);
    session.createInstance(ORCHESTRATOR, JSON.stringify(scenario("Loan question")));
    const scripted = compile(bankSupport.scriptedAgent!);
    const halfAnswering: Record<string, AgentHandler> = {};
    for (const jobType of new Set(model.agents.map((a) => a.jobType))) {
      halfAnswering[jobType] = async (job) => {
        const r = (await scripted(job, helpersFor(job.variables))) as AgentResult;
        if (job.elementId === "CustomerSupportOrchestrator") return r;
        return r.completionConditionFulfilled
          ? { completionConditionFulfilled: true, variables: { status: "resolved" } }
          : r;
      };
    }
    await dispatchWorkers(session, workers, { agents: halfAnswering });

    const resolution = summarySaw.loanResolution as { status: string; summary: string };
    expect(resolution.status).toBe("resolved");
    expect(String(resolution.summary)).toMatch(/monthly payment/i);
    expect(String(summarySaw.combinedSummary ?? "")).not.toMatch(/undefined/);
  });
});
