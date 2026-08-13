import { describe, expect, it } from "vitest";
import { TOUR_ANCHOR } from "./anchors";
import { buildDriveSteps } from "./driverAdapter";
import type { TourStep } from "./types";

/**
 * Covers the step -> driver.js config mapping only. `startTour` itself needs a
 * real DOM and driver.js's animation loop, so it belongs in a browser smoke
 * test rather than here (see `vitest.config.ts`'s layering note).
 */

const CLICK_STEP: TourStep = {
  title: "Start a run",
  description: "Press Run.",
  target: { anchor: TOUR_ANCHOR.runButton },
};

const STATE_DRIVEN_STEP: TourStep = {
  title: "Watch the token move",
  description: "The agent looks up the marker.",
  target: { elementId: "VerifyGeneticMarker" },
  waitFor: { kind: "activeElement", elementId: "VerifyGeneticMarker" },
};

describe("buildDriveSteps", () => {
  it("keeps Next and Previous on a state-driven step", () => {
    // Hiding them stranded the reader whenever the condition had already gone
    // by: `activeElement` names momentary state, and the step's own popover
    // then offered nothing but Close. Arrow keys still advanced it, since
    // driver.js's keyboard navigation ignores `showButtons` — so the fix is to
    // show the same escape the keyboard already had.
    const [step] = buildDriveSteps([STATE_DRIVEN_STEP]);
    expect(step.popover.showButtons).toEqual(["next", "previous", "close"]);
  });

  it("gives click and state-driven steps the same buttons", () => {
    const [click, stateDriven] = buildDriveSteps([
      CLICK_STEP,
      STATE_DRIVEN_STEP,
    ]);
    expect(stateDriven.popover.showButtons).toEqual(click.popover.showButtons);
  });

  it("still tells the reader a state-driven step continues on its own", () => {
    const [step] = buildDriveSteps([STATE_DRIVEN_STEP]);
    expect(step.popover.description).toContain(STATE_DRIVEN_STEP.description);
    expect(step.popover.description).toContain("continues automatically");
    // The manual escape has to be mentioned too, or Next reads as the only
    // way forward and the auto-advance looks broken when it fires on its own.
    expect(step.popover.description).toContain("Next");
  });

  it("leaves a click step's description alone", () => {
    const [step] = buildDriveSteps([CLICK_STEP]);
    expect(step.popover.description).toBe(CLICK_STEP.description);
  });

  it("defaults skipMissingElement to true, and honours an explicit false", () => {
    const [defaulted, explicit] = buildDriveSteps([
      CLICK_STEP,
      { ...CLICK_STEP, skipMissingElement: false },
    ]);
    expect(defaulted.skipMissingElement).toBe(true);
    expect(explicit.skipMissingElement).toBe(false);
  });
});
