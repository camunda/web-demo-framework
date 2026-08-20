import { describe, expect, it } from "vitest";
import { parseModel } from "../../framework/model";
import { EXAMPLES } from "../index";
import learnTimerCatchEvent from "./index";

/**
 * Offline coverage for the timer-catch-event "Learn BPMN" page, mirroring
 * `loan-origination/index.test.ts`'s shape: parse the shipped model and pin
 * its structure and manifest wiring. The live wasm-engine behaviour (advancing
 * the virtual clock past the timer's due time fires it) is already covered by
 * `tools/probe` against `tools/probe/fixtures/timer.bpmn` — see
 * `docs/engine-coverage.md`'s "Timer intermediate catch event" row — so these
 * tests don't re-probe the engine, just the example's own shape.
 */

describe("registration is additive", () => {
  it("registers learn-timer-catch-event without dropping any other example", () => {
    const ids = EXAMPLES.map((e) => e.id);
    expect(ids).toContain("learn-timer-catch-event");
    expect(ids).toContain("learn-service-task");
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("belongs to the learn-bpmn gallery group", () => {
    expect(learnTimerCatchEvent.group).toBe("learn-bpmn");
  });
});

describe("BPMN model", () => {
  const model = parseModel(learnTimerCatchEvent.bpmn);

  it("parses with no error diagnostics", () => {
    expect(model.diagnostics.filter((d) => d.severity === "error")).toEqual([]);
  });

  it("declares exactly one timer catch event with a timeDuration", () => {
    const count = (needle: string) =>
      learnTimerCatchEvent.bpmn.split(needle).length - 1;
    expect(count("<bpmn:intermediateCatchEvent")).toBe(1);
    expect(count("<bpmn:timerEventDefinition")).toBe(1);
    expect(count("<bpmn:timeDuration")).toBe(1);
    expect(count("PT3S")).toBe(1);
  });

  it("supplies a handler for every service/script task in the model", () => {
    const handlerIds = new Set(learnTimerCatchEvent.handlers.map((h) => h.elementId));
    const jobbedTaskIds = model.tasks.map((t) => t.elementId);
    for (const id of jobbedTaskIds) expect(handlerIds).toContain(id);
    for (const id of handlerIds) expect(jobbedTaskIds).toContain(id);
  });

  it("has no agent, user task, or manualControl — this page runs unattended end to end", () => {
    expect(model.agents).toHaveLength(0);
    expect(model.userTasks).toHaveLength(0);
    for (const h of learnTimerCatchEvent.handlers) expect(h.manualControl).toBeUndefined();
  });
});
