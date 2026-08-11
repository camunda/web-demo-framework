import { anchorSelector } from "./anchors";
import type { TourTarget } from "./types";

/**
 * Resolves a step's target to a CSS selector understood by driver.js's
 * `element` option (a selector string is resolved against the whole
 * document — see driver.js's Drive Step configuration).
 *
 * A chrome anchor (see `./anchors.ts`) is just `[data-tour="…"]`. A BPMN
 * element is targeted by id *within* the diagram anchor: bpmn-js renders
 * every element as an SVG group carrying `data-element-id` (see
 * `@nanobpm/bojtos-react`'s `BpmnRuntimeView`), so scoping the selector to
 * `[data-tour="diagram"] […]` both finds the right node and never
 * accidentally matches an unrelated same-id node elsewhere on the page.
 */
export function resolveTourSelector(target: TourTarget): string {
  if ("anchor" in target) return anchorSelector(target.anchor);
  return `${anchorSelector("diagram")} [data-element-id="${cssEscape(target.elementId)}"]`;
}

/** `CSS.escape`, with a manual fallback for environments that lack it (e.g. some jsdom versions). */
function cssEscape(value: string): string {
  if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
    return CSS.escape(value);
  }
  return value.replace(/[^a-zA-Z0-9_-]/g, (ch) => `\\${ch}`);
}
