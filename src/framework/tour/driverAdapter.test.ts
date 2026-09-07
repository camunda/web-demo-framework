import { describe, expect, it } from "vitest";
import { TOUR_ANCHOR } from "./anchors";
import { buildDriveSteps } from "./driverAdapter";
import type { TourStep } from "./types";

/**
 * Covers the step -> driver.js config mapping only. `startTour` itself needs a
 * real DOM and driver.js's animation loop, so it belongs in a browser smoke
 * test rather than here (see `vitest.config.ts`'s layering note).
 */

const CHROME_STEP: TourStep = {
  title: "Start a run",
  description: "Press Run.",
  target: { anchor: TOUR_ANCHOR.runButton },
};

const ELEMENT_STEP: TourStep = {
  title: "Watch the token move",
  description: "The agent looks up the marker.",
  target: { elementId: "VerifyGeneticMarker" },
};

describe("buildDriveSteps", () => {
  it("shows Next, Previous and Close on every step", () => {
    for (const step of buildDriveSteps([CHROME_STEP, ELEMENT_STEP])) {
      expect(step.popover.showButtons).toEqual(["next", "previous", "close"]);
    }
  });

  it("uses each step's own title and description verbatim", () => {
    const [chrome, element] = buildDriveSteps([CHROME_STEP, ELEMENT_STEP]);
    expect(chrome.popover.title).toBe(CHROME_STEP.title);
    expect(chrome.popover.description).toBe(CHROME_STEP.description);
    expect(element.popover.description).toBe(ELEMENT_STEP.description);
  });

  it("defaults skipMissingElement to true, and honours an explicit false", () => {
    const [defaulted, explicit] = buildDriveSteps([
      CHROME_STEP,
      { ...CHROME_STEP, skipMissingElement: false },
    ]);
    expect(defaulted.skipMissingElement).toBe(true);
    expect(explicit.skipMissingElement).toBe(false);
  });
});
