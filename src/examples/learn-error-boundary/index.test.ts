import { describe, expect, it } from "vitest";
import { parseModel } from "../../framework/model";
import { EXAMPLES } from "../index";
import learnErrorBoundary from "./index";

/**
 * Learn BPMN: error boundary event. These tests pin the model shape (a
 * guarded task with a matching-errorRef boundary event, and a deliberately
 * unguarded twin with none) and the manifest wiring that lets the reader
 * fire each task's error by hand — see index.ts's doc comment for why. The
 * live catch-vs-incident behaviour itself is exercised end-to-end by
 * tools/probe against the real engine (docs/engine-coverage.md's "Boundary
 * events" row); here we're offline, asserting the diagram and manifest never
 * silently drift back to a shape that could no longer demonstrate either
 * outcome.
 */

describe("registration is additive", () => {
  it("registers learn-error-boundary without dropping any other example", () => {
    const ids = EXAMPLES.map((e) => e.id);
    expect(ids).toContain("learn-error-boundary");
    for (const id of ["order-process-boundary-events", "learn-service-task"]) {
      expect(ids).toContain(id);
    }
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("belongs to the learn-bpmn gallery group", () => {
    expect(learnErrorBoundary.group).toBe("learn-bpmn");
  });
});

describe("manifest wiring", () => {
  it("supplies a handler for every service task in the model", () => {
    const model = parseModel(learnErrorBoundary.bpmn);
    const handlerIds = new Set(learnErrorBoundary.handlers.map((h) => h.elementId));
    const jobbedTaskIds = model.tasks.map((t) => t.elementId);
    for (const id of jobbedTaskIds) expect(handlerIds).toContain(id);
    for (const id of handlerIds) expect(jobbedTaskIds).toContain(id);
  });

  it("wires manual control so the reader can throw either task's error by hand", () => {
    const guarded = learnErrorBoundary.handlers.find((h) => h.elementId === "Activity_guarded");
    const unguarded = learnErrorBoundary.handlers.find((h) => h.elementId === "Activity_unguarded");
    expect(guarded?.manualControl?.action.kind).toBe("error");
    expect(unguarded?.manualControl?.action.kind).toBe("error");
    // Distinct error codes so firing one can never accidentally satisfy the
    // other task's boundary event.
    expect(guarded?.manualControl?.action).toMatchObject({ errorCode: "CHARGE_DECLINED" });
    expect(unguarded?.manualControl?.action).toMatchObject({ errorCode: "CARRIER_REJECTED" });
  });
});

describe("BPMN model", () => {
  const model = parseModel(learnErrorBoundary.bpmn);

  it("parses with no error diagnostics", () => {
    expect(model.diagnostics.filter((d) => d.severity === "error")).toEqual([]);
  });

  it("declares exactly two job-bearing tasks", () => {
    expect(model.tasks.map((t) => t.elementId).sort()).toEqual([
      "Activity_guarded",
      "Activity_unguarded",
    ]);
  });

  it("attaches a boundary event to the guarded task, pinned to its own error", () => {
    expect(learnErrorBoundary.bpmn).toContain('attachedToRef="Activity_guarded"');
    expect(learnErrorBoundary.bpmn).toContain('errorRef="Error_ChargeDeclined"');
    expect(learnErrorBoundary.bpmn).toContain('errorCode="CHARGE_DECLINED"');
  });

  it("attaches no boundary event to the unguarded task", () => {
    expect(learnErrorBoundary.bpmn).not.toContain('attachedToRef="Activity_unguarded"');
  });

  it("routes the boundary's catch to a distinct end event from the happy path", () => {
    expect(learnErrorBoundary.bpmn).toContain('sourceRef="Event_ChargeDeclined" targetRef="Event_Caught"');
    expect(learnErrorBoundary.bpmn).toContain('sourceRef="Activity_unguarded" targetRef="Event_Done"');
  });
});
