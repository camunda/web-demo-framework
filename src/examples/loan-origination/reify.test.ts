import { describe, expect, it } from "vitest";
import { loanOrigination } from "./index";
import { buildDag, type ReifyStep } from "../../framework/reify";
import { reifyToBpmn } from "../../framework/reifyBpmn";
import type { HandlerHelpers } from "../../framework/types";

/**
 * Proves the data-dependency reification against the example's **real** handler
 * sources — not a hand-transcribed summary of them — including the read-capture
 * mechanism that makes it work.
 *
 * Each handler is compiled and run with its `job.variables` wrapped in the same
 * kind of read-recording proxy the sandbox uses (see
 * `sandbox/iframeSource.ts`'s `recordingVariables`), so the read-set is
 * observed exactly as it is in a live run — crucially catching direct
 * `job.variables.riskBand` access (IssueLoanOffer), not just text()/num().
 * The write-set is the keys of what each handler returns. Feeding those steps,
 * in the scripted agent's execution order, to `buildDag` must recover the true
 * dependency structure.
 */

function compile(source: string): (job: unknown, helpers: HandlerHelpers) => unknown {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
  return new Function(`"use strict"; return (${source});`)() as (
    job: unknown,
    helpers: HandlerHelpers,
  ) => unknown;
}

function helpersOver(variables: Record<string, unknown>): HandlerHelpers {
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

/** Run a handler with a read-recording proxy over the live variables. */
async function runStep(
  elementId: string,
  source: string,
  variables: Record<string, unknown>,
): Promise<ReifyStep> {
  const reads: Record<string, true> = {};
  const proxied = new Proxy(variables, {
    get(target, key, receiver) {
      if (typeof key === "string") reads[key] = true;
      return Reflect.get(target, key, receiver);
    },
  });
  const job = { key: "1", type: "t", elementId, instanceKey: "1", variables: proxied };
  const out = (await compile(source)(job, helpersOver(proxied))) as Record<string, unknown>;
  // Apply the writes to the shared variable state, as the engine would.
  Object.assign(variables, out);
  return {
    elementId,
    reads: Object.keys(reads),
    writes: out && typeof out === "object" ? Object.keys(out) : [],
  };
}

const sourceOf = (id: string) =>
  loanOrigination.handlers!.find((h) => h.elementId === id)!.source;

describe("loan-origination — reified from the real handler sources", () => {
  it("recovers AssessApplication → IssueLoanOffer via riskBand (a direct job.variables read)", async () => {
    // Strong applicant: the scripted agent runs the four gather tools in order,
    // the officer approves, then IssueLoanOffer runs on the trunk.
    const vars: Record<string, unknown> = {
      applicantName: "Ada Lovelace",
      annualIncome: 96000,
      monthlyDebt: 850,
      creditScore: 782,
      loanAmount: 20000,
      loanPurpose: "Home improvement",
    };

    const steps: ReifyStep[] = [];
    for (const id of [
      "QueryCustomer",
      "CreditBureauLookup",
      "AssessApplication",
      "UpdateApplicationStatus",
    ]) {
      steps.push(await runStep(id, sourceOf(id), vars));
    }
    // The officer's approval, then the trunk offer task.
    vars.decision = "approved";
    steps.push(await runStep("IssueLoanOffer", sourceOf("IssueLoanOffer"), vars));

    const dag = buildDag(steps);

    // The one real inter-step dependency, carried by riskBand — and riskBand is
    // read by IssueLoanOffer through `job.variables.riskBand`, so this only
    // passes if direct-access reads are captured.
    const interStep = dag.edges.filter((e) => e.from !== e.to);
    expect(interStep).toContainEqual({
      from: "AssessApplication",
      to: "IssueLoanOffer",
      via: ["riskBand"],
    });

    // The four gather tools depended only on seeds — genuinely parallel despite
    // running in sequence.
    expect(new Set(dag.sources)).toEqual(
      new Set([
        "QueryCustomer",
        "CreditBureauLookup",
        "AssessApplication",
        "UpdateApplicationStatus",
      ]),
    );

    // And the reified BPMN wraps the real elements in a sub-process container,
    // chained in execution order (Assess → Update, not the data edge to Issue).
    const xml = reifyToBpmn(dag, { processId: "loan_reified" });
    expect(xml).toContain('isExpanded="true"');
    expect(xml).toMatch(/sourceRef="AssessApplication" targetRef="UpdateApplicationStatus"/);
  });
});
