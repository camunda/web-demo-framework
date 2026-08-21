import { describe, expect, it } from "vitest";
import type { ActivatedJob } from "@nanobpm/bojtos-react";
import { parseModel } from "../../framework/model";
import type { ExampleHandler, HandlerHelpers } from "../../framework/types";
import { EXAMPLES } from "../index";
import learnMessageCorrelation from "./index";

/**
 * The learn-message-correlation construct page (issue #64). These tests are
 * offline, in the same layer as `learn-service-task`'s manifest and
 * `loan-origination`'s handler tests: they parse the shipped model and drive
 * the editable handler's source directly, pinning the model's shape (the
 * message subscription's `correlationKey` expression, in particular — get
 * this wrong and the construct silently never resumes) rather than exercising
 * the live engine.
 *
 * The construct itself — a message intermediate catch event correlating on a
 * process variable — is already `Verified` in `docs/engine-coverage.md` via
 * `tools/probe/fixtures/message.bpmn`; `npm run probe -- src/examples/
 * learn-message-correlation/model.bpmn --seed '{"orderId":"ORD-42"}'` confirms
 * this trimmed model completes the same way (message subscription opens,
 * correlates, the trailing service task runs, the instance completes).
 */

/** Evaluate a handler's editable source into the function the runner runs. */
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

async function runHandler(
  elementId: string,
  variables: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const def = learnMessageCorrelation.handlers.find(
    (h) => h.elementId === elementId,
  );
  if (!def) throw new Error(`no handler for ${elementId}`);
  const fn = compile(def.source);
  const job = {
    key: "j",
    type: "t",
    instanceKey: "i",
    elementId,
    retries: 1,
    variables,
  } as ActivatedJob;
  return (await fn(job, helpersFor(variables))) as Record<string, unknown>;
}

describe("registration is additive", () => {
  it("registers learn-message-correlation without dropping any other example", () => {
    const ids = EXAMPLES.map((e) => e.id);
    expect(ids).toContain("learn-message-correlation");
    expect(ids).toContain("learn-service-task");
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("manifest wiring", () => {
  it("belongs to the learn-bpmn gallery group", () => {
    expect(learnMessageCorrelation.group).toBe("learn-bpmn");
  });

  it("supplies a handler for every service/script task in the model", () => {
    const model = parseModel(learnMessageCorrelation.bpmn);
    const handlerIds = new Set(
      learnMessageCorrelation.handlers.map((h) => h.elementId),
    );
    const jobbedTaskIds = model.tasks.map((t) => t.elementId);
    for (const id of jobbedTaskIds) expect(handlerIds).toContain(id);
    for (const id of handlerIds) expect(jobbedTaskIds).toContain(id);
  });

  it("seeds the correlation-key variable the message subscription reads", () => {
    expect(learnMessageCorrelation.seed).toHaveProperty("orderId");
  });
});

describe("BPMN model", () => {
  const model = parseModel(learnMessageCorrelation.bpmn);

  it("parses with no error diagnostics", () => {
    expect(model.diagnostics.filter((d) => d.severity === "error")).toEqual(
      [],
    );
  });

  it("declares exactly one message catch event", () => {
    expect(learnMessageCorrelation.bpmn).toContain("bpmn:messageEventDefinition");
    expect(
      (learnMessageCorrelation.bpmn.match(/bpmn:messageEventDefinition/g) ?? [])
        .length,
    ).toBe(1);
  });

  it("declares a correlationKey on the message subscription (omitting it is a deploy-time error)", () => {
    expect(learnMessageCorrelation.bpmn).toContain(
      '<zeebe:subscription correlationKey="=orderId" />',
    );
  });

  it("routes the catch event straight into the recording service task, then the end event", () => {
    expect(learnMessageCorrelation.bpmn).toContain(
      'sourceRef="Event_wait_for_shipment" targetRef="Activity_record"',
    );
    expect(learnMessageCorrelation.bpmn).toContain(
      'sourceRef="Activity_record" targetRef="Event_done"',
    );
  });
});

describe("record-confirmation handler", () => {
  it("records the confirmation against the seeded orderId", async () => {
    const out = await runHandler("Activity_record", { orderId: "ORD-42" });
    expect(out.shipmentRecorded).toBe(true);
  });

  it("falls back gracefully when orderId is missing", async () => {
    const out = await runHandler("Activity_record", {});
    expect(out.shipmentRecorded).toBe(true);
  });
});
