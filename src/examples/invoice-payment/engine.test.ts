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
import { invoicePayment } from "./index";

/**
 * The invoice-payment example on the **real wasm engine**, across both of the
 * human gates it exists to demonstrate.
 *
 * The property under test is the structural one: `ReleasePayment` has exactly
 * one incoming flow, from the approved branch of `Gateway_ReleaseApproved`, so
 * no run of this process can move money without a human having approved it
 * first — whatever the agent proposed. A denial has to come back to the agent
 * as a tool result it can act on, which is asserted here by the dispute notice
 * going out afterwards.
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

const model = parseModel(invoicePayment.bpmn);
const PROCESS_ID = model.processId;
const handlerByElementId = new Map(
  invoicePayment.handlers.map((h) => [h.elementId, compile(h.source)]),
);

/**
 * One worker per *job type*, dispatching on `job.elementId` — three of this
 * model's tasks share `io.camunda:http-json:1`, so a job-type-keyed map of
 * handlers would silently drop two of them. This mirrors what
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
  if (!model.agent) throw new Error("invoice-payment model has no agent host");
  if (invoicePayment.scriptedAgent === undefined) {
    throw new Error("invoice-payment example has no scriptedAgent");
  }
  const agent = compile(invoicePayment.scriptedAgent);
  return {
    [model.agent.jobType]: (job) =>
      agent(job, helpersFor(job.variables)) as AgentResult | Promise<AgentResult>,
  };
}

const CLEAN_MATCH = invoicePayment.seed;
const VAGUE_OVERAGE = {
  ...invoicePayment.seed,
  invoiceNumber: "INV-10277",
  invoiceAmount: 4494,
  invoiceNotes: "Additional items supplied.",
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

async function start(
  seed: Record<string, unknown>,
  opts: { xml?: string } = {},
): Promise<string> {
  session.reset();
  session.deploy(opts.xml ?? invoicePayment.bpmn);
  session.createInstance(PROCESS_ID, JSON.stringify(seed));
  const result = await dispatchWorkers(session, workers, { agents });
  return result.reason;
}

/** Complete the one open user task with `elementId`, then drain again. */
async function completeTask(
  elementId: string,
  variables: Record<string, unknown>,
): Promise<void> {
  const open = await engine.openUserTasks({ processInstanceKey: undefined });
  const task = open.find((t) => t.elementId === elementId);
  if (!task) throw new Error(`no open ${elementId} task to complete`);
  session.completeUserTask(task.userTaskKey, JSON.stringify(variables));
  await dispatchWorkers(session, workers, { agents });
}

function completedCount(elementId: string): number {
  return session.snapshot().elementStats.find((s) => s.elementId === elementId)?.completed ?? 0;
}

function currentVariables(): Record<string, unknown> {
  return session.snapshot().instances[0]?.variables ?? {};
}

describe("invoice-payment — the guardrail, as modelled", () => {
  /**
   * The claim the example exists to make: money moves on exactly one path. A
   * run can only ever show that no *observed* run paid twice; this reads the
   * diagram and asserts the structure itself, so adding a second way into
   * `ReleasePayment` fails here even if every scenario still behaves.
   */
  it("gives ReleasePayment exactly one incoming flow, from the approved branch", () => {
    const doc = new DOMParser().parseFromString(invoicePayment.bpmn, "application/xml");
    const BPMN_NS = "http://www.omg.org/spec/BPMN/20100524/MODEL";
    const flows = Array.from(
      doc.getElementsByTagNameNS(BPMN_NS, "sequenceFlow"),
    ).filter((f) => f.getAttribute("targetRef") === "ReleasePayment");

    expect(flows.map((f) => f.getAttribute("id"))).toEqual(["Flow_ReleaseApproved"]);
    expect(flows[0].getAttribute("sourceRef")).toBe("Gateway_ReleaseApproved");

    // And that branch is the conditional one, not the gateway's default —
    // otherwise it would be the path taken when nothing matched.
    const gateway = Array.from(doc.getElementsByTagNameNS(BPMN_NS, "exclusiveGateway")).find(
      (g) => g.getAttribute("id") === "Gateway_ReleaseApproved",
    );
    expect(gateway?.getAttribute("default")).not.toBe("Flow_ReleaseApproved");
    expect(flows[0].getElementsByTagNameNS(BPMN_NS, "conditionExpression")).toHaveLength(1);
  });
});

describe("invoice-payment on the live engine — the in-loop human gate", () => {
  it("parks on the release request before any payment is made", async () => {
    const reason = await start(CLEAN_MATCH);

    expect(reason).toBe("userTasks");
    await assertThatUserTask(engine, {
      instance: byProcessId(PROCESS_ID),
      elementId: "ReviewPaymentRelease",
    }).isCreated();
    // The guardrail: nothing has been paid while the reviewer holds the case.
    expect(completedCount("ReleasePayment")).toBe(0);
    assertThatInstance(engine, byProcessId(PROCESS_ID)).isActive().hasNoIncident();
  });

  it("releases the payment only once a reviewer approves, then closes at compliance sign-off", async () => {
    await start(CLEAN_MATCH);
    await completeTask("ReviewPaymentRelease", {
      approvedAmountUSD: 4200,
      releaseDecision: "approve",
      releaseReviewerComments: "Matches the PO.",
    });

    expect(completedCount("ReleasePayment")).toBe(1);
    expect(completedCount("NotifyVendorDispute")).toBe(0);

    // What the compliance reviewer is shown, and the only thing they're
    // shown: derived from the payment having happened, not from the agent's
    // account of itself. Blank here means the sign-off form renders empty.
    expect(currentVariables().caseOutcome).toBe("released");
    expect(currentVariables().caseSummary).toContain("4200 USD released");

    await completeTask("HumanTask_ComplianceSignoff", {
      complianceDecision: "confirm",
      complianceComments: "Clean match, no exceptions.",
    });

    assertThatInstance(engine, byProcessId(PROCESS_ID))
      .hasCompleted()
      .hasNoIncident()
      .hasCompletedElements("ReleasePayment", "HumanTask_ComplianceSignoff", "EndEvent_CaseClosed");
  });

  it("hands a denial back to the agent, which disputes instead of paying", async () => {
    await start(VAGUE_OVERAGE);
    await completeTask("ReviewPaymentRelease", {
      releaseDecision: "deny",
      releaseReviewerComments: "No documentation for the overage.",
    });

    // The denial reached the agent as its own tool result and changed what it
    // did next — no payment, a dispute notice instead.
    expect(completedCount("ReleasePayment")).toBe(0);
    expect(completedCount("NotifyVendorDispute")).toBe(1);
    expect(currentVariables().caseOutcome).toBe("disputed");

    await completeTask("HumanTask_ComplianceSignoff", {
      complianceDecision: "escalate",
      complianceComments: "Send to audit.",
    });

    assertThatInstance(engine, byProcessId(PROCESS_ID))
      .hasCompleted()
      .hasNoIncident()
      .hasCompletedElements("EndEvent_EscalatedForAudit");
  });

  it("acts on the tool's result, not on the reviewer's form fields", async () => {
    // The denied branch reports back through a `toolCallResult` output mapping
    // on `RecordReleaseDenied`. Strip just that mapping: the reviewer's
    // answer is still sitting in `releaseDecision` and
    // `releaseReviewerComments` where the agent can see it, but the *tool*
    // now returns nothing. If the agent disputes anyway it is reading the form
    // behind the tool's back, and the in-loop contract this example
    // demonstrates is not what makes it work.
    const mapping =
      '<zeebe:output source="=&#34;Payment release denied by reviewer. Comments: &#34; + releaseReviewerComments" target="toolCallResult" />';
    expect(invoicePayment.bpmn).toContain(mapping);
    const silent = invoicePayment.bpmn.replace(mapping, "");

    await start(VAGUE_OVERAGE, { xml: silent });
    await completeTask("ReviewPaymentRelease", {
      releaseDecision: "deny",
      releaseReviewerComments: "No documentation.",
    });

    expect(completedCount("NotifyVendorDispute")).toBe(0);
    expect(completedCount("ReleasePayment")).toBe(0);
  });
});
