import { describe, expect, it } from "vitest";
import { resolveTourSelector } from "./resolve";
import { TOUR_ANCHOR } from "./anchors";

describe("resolveTourSelector", () => {
  it("resolves a chrome anchor to a plain data-tour selector", () => {
    expect(resolveTourSelector({ anchor: TOUR_ANCHOR.runButton })).toBe(
      '[data-tour="run-button"]',
    );
  });

  it("resolves a BPMN element id scoped inside the diagram anchor", () => {
    expect(resolveTourSelector({ elementId: "VerifyGeneticMarker" })).toBe(
      '[data-tour="diagram"] [data-element-id="VerifyGeneticMarker"]',
    );
  });

  it("escapes an element id containing characters special to CSS selectors", () => {
    const selector = resolveTourSelector({ elementId: "Task:with.dots" });
    expect(selector).toContain('[data-tour="diagram"]');
    // Whichever escaping strategy is used (CSS.escape or the manual
    // fallback), the raw unescaped characters must not appear bare in the
    // selector — that would either fail to match or match the wrong thing.
    expect(selector).not.toContain('data-element-id="Task:with.dots"');
  });
});
