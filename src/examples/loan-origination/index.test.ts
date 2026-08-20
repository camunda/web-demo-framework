import { describe, expect, it } from "vitest";
import type { ActivatedJob } from "@nanobpm/bojtos-react";
import { parseModel } from "../../framework/model";
import type { ExampleHandler, HandlerHelpers } from "../../framework/types";
import { EXAMPLES } from "../index";
import { loanOrigination } from "./index";

/**
 * The loan-origination example — Camunda's governance illustration from
 * camunda.com/orchestrate/agents/, made runnable on the nano engine. These
 * tests are offline: they parse the shipped model and drive each handler's
 * editable source directly, asserting both the structural governance property
 * (every application passes through the senior-officer review before either
 * outcome) and the underwriting policy the assessment tool encodes.
 *
 * Branch routing through the live wasm engine (approved -> IssueLoanOffer,
 * declined -> SendDeclineNotice, both via the mandatory user task) is covered
 * end-to-end by tools/probe against the real engine; here we pin the model
 * shape and the deterministic handler logic that decides which way it routes.
 */

/** Evaluate a handler's editable source into the function the runner runs. */
function compile(source: string): ExampleHandler {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
  return new Function(`"use strict"; return (${source});`)() as ExampleHandler;
}

/** The subset of `HandlerHelpers` the loan handlers actually use. */
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

async function runHandler(
  elementId: string,
  variables: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const def = loanOrigination.handlers.find((h) => h.elementId === elementId);
  if (!def) throw new Error(`no handler for ${elementId}`);
  const fn = compile(def.source);
  const job = { key: "j", type: "t", instanceKey: "i", elementId, retries: 1, variables } as ActivatedJob;
  return (await fn(job, helpersFor(variables))) as Record<string, unknown>;
}

const STRONG = {
  applicantName: "Ada Lovelace",
  annualIncome: 96000,
  monthlyDebt: 850,
  creditScore: 782,
  loanAmount: 20000,
  loanPurpose: "Home improvement",
};
const MARGINAL = {
  applicantName: "Cyrus Vale",
  annualIncome: 38000,
  monthlyDebt: 1450,
  creditScore: 566,
  loanAmount: 42000,
  loanPurpose: "Debt consolidation",
};

describe("registration is additive", () => {
  it("registers loan-origination without dropping any other example", () => {
    const ids = EXAMPLES.map((e) => e.id);
    expect(ids).toContain("loan-origination");
    for (const id of [
      "rocket-launch",
      "seed-export-compliance",
      "order-process",
      "order-process-boundary-events",
      "plate-recognition",
    ]) {
      expect(ids).toContain(id);
    }
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("manifest wiring", () => {
  it("registers the start form and the senior-officer review form", () => {
    expect(loanOrigination.forms).toHaveProperty("loan-application");
    expect(loanOrigination.forms).toHaveProperty("loan-senior-officer-review");
  });

  it("supplies a handler for every service/script task in the model", () => {
    const model = parseModel(loanOrigination.bpmn);
    const handlerIds = new Set(loanOrigination.handlers.map((h) => h.elementId));
    const jobbedTaskIds = model.tasks.map((t) => t.elementId);
    for (const id of jobbedTaskIds) expect(handlerIds).toContain(id);
    // No stray handler pointing at an element that isn't in the model.
    for (const id of handlerIds) expect(jobbedTaskIds).toContain(id);
  });

  it("names the governance-critical tools as required", () => {
    expect(loanOrigination.requiredTools).toContain("AssessApplication");
    expect(loanOrigination.requiredTools).toContain("UpdateApplicationStatus");
  });

  it("ships a scripted agent and two decision scenarios", () => {
    expect(typeof loanOrigination.scriptedAgent).toBe("string");
    expect(loanOrigination.scenarios).toHaveLength(2);
  });
});

describe("BPMN model", () => {
  const model = parseModel(loanOrigination.bpmn);

  it("parses with no error diagnostics", () => {
    expect(model.diagnostics.filter((d) => d.severity === "error")).toEqual([]);
  });

  it("exposes the four agent tools and no other agent host", () => {
    expect(model.agents).toHaveLength(1);
    const toolIds = model.agents[0].tools.map((t) => t.elementId).sort();
    expect(toolIds).toEqual([
      "AssessApplication",
      "CreditBureauLookup",
      "QueryCustomer",
      "UpdateApplicationStatus",
    ]);
  });

  it("binds the loan application as the start form", () => {
    expect(model.startFormId).toBe("loan-application");
  });

  it("realizes governance on the trunk: the senior-officer review is a user task, not an agent tool", () => {
    // The whole point of the example: the human review is NOT one of the
    // agent's tools (which nano could let the agent skip), it is a mandatory
    // user task on the main flow that every application passes through.
    const reviewIds = model.userTasks.map((u) => u.elementId);
    expect(reviewIds).toContain("SeniorOfficerReview");
    expect(model.userTasks.find((u) => u.elementId === "SeniorOfficerReview")?.formId).toBe(
      "loan-senior-officer-review",
    );
    const toolIds = model.agents[0].tools.map((t) => t.elementId);
    expect(toolIds).not.toContain("SeniorOfficerReview");
  });

  it("routes both outcomes off the decision gateway, declined as the default", () => {
    expect(loanOrigination.bpmn).toContain('default="Flow_declined"');
    expect(loanOrigination.bpmn).toContain('=decision = "approved"');
    expect(loanOrigination.bpmn).toContain('targetRef="IssueLoanOffer"');
    expect(loanOrigination.bpmn).toContain('targetRef="SendDeclineNotice"');
  });
});

describe("AssessApplication handler (the underwriting policy)", () => {
  it("recommends approval at low risk for a strong applicant", async () => {
    const out = await runHandler("AssessApplication", STRONG);
    expect(out.recommendation).toBe("approve");
    expect(out.riskBand).toBe("low");
    // DTI = (850*12)/96000 = 10.625% -> 11
    expect(out.debtToIncome).toBe(11);
  });

  it("recommends decline at high risk for a marginal applicant", async () => {
    const out = await runHandler("AssessApplication", MARGINAL);
    expect(out.recommendation).toBe("decline");
    expect(out.riskBand).toBe("high");
    // DTI = (1450*12)/38000 = 45.79% -> 46
    expect(out.debtToIncome).toBe(46);
  });

  it("declines when the requested amount exceeds annual income even at acceptable risk", async () => {
    const out = await runHandler("AssessApplication", {
      annualIncome: 60000,
      monthlyDebt: 500,
      creditScore: 760,
      loanAmount: 80000,
    });
    expect(out.riskBand).toBe("low");
    expect(out.recommendation).toBe("decline");
  });
});

describe("CreditBureauLookup handler", () => {
  it.each([
    [800, "excellent", 0],
    [700, "good", 0],
    [600, "fair", 1],
    [500, "poor", 3],
  ])("maps score %i to band %s with %i derogatory mark(s)", async (score, band, marks) => {
    const out = await runHandler("CreditBureauLookup", { applicantName: "Someone", creditScore: score });
    const report = out.bureauReport as Record<string, unknown>;
    expect(report.band).toBe(band);
    expect(report.derogatoryMarks).toBe(marks);
    expect(report.score).toBe(score);
  });
});

describe("QueryCustomer handler", () => {
  it("returns a stable profile derived from the applicant name", async () => {
    const a = (await runHandler("QueryCustomer", { applicantName: "Ada Lovelace" }))
      .customerProfile as Record<string, unknown>;
    const b = (await runHandler("QueryCustomer", { applicantName: "Ada Lovelace" }))
      .customerProfile as Record<string, unknown>;
    expect(a).toEqual(b);
    expect(typeof a.customerId).toBe("string");
    expect(["established", "new"]).toContain(a.segment);
  });
});

describe("UpdateApplicationStatus handler", () => {
  it("writes the case back as under-review (the governance state the officer picks up)", async () => {
    const out = await runHandler("UpdateApplicationStatus", { applicantName: "Ada Lovelace" });
    expect(out.applicationStatus).toBe("under-review");
    expect(out.toolCallResult).toBe("under-review");
  });
});

describe("trunk handlers", () => {
  it("IssueLoanOffer prices the approved loan with a positive monthly repayment", async () => {
    const out = await runHandler("IssueLoanOffer", { loanAmount: 20000, riskBand: "low" });
    const offer = out.loanOffer as Record<string, number>;
    expect(offer.amount).toBe(20000);
    expect(offer.aprPercent).toBe(6.9);
    expect(offer.termMonths).toBe(60);
    expect(offer.monthlyRepayment).toBeGreaterThan(0);
  });

  it("SendDeclineNotice quotes the officer's note as the reason", async () => {
    const out = await runHandler("SendDeclineNotice", {
      applicantName: "Cyrus Vale",
      reviewNote: "Debt-to-income too high.",
    });
    const notice = out.declineNotice as Record<string, string>;
    expect(notice.reason).toBe("Debt-to-income too high.");
    expect(notice.sentTo).toBe("Cyrus Vale");
  });

  it("SendDeclineNotice falls back to a policy reason when no note was given", async () => {
    const out = await runHandler("SendDeclineNotice", { applicantName: "Cyrus Vale" });
    const notice = out.declineNotice as Record<string, string>;
    expect(notice.reason.length).toBeGreaterThan(0);
  });
});
