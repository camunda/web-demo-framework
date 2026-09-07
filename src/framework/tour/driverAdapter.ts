import type { TourStep } from "./types";
import { resolveTourSelector } from "./resolve";
import type { AllowedButtons } from "driver.js";

/**
 * The one module that imports driver.js (https://driverjs.com) — every other
 * tour module (types, useTour, and any example's tour definition) speaks only
 * the `TourStep`/`TourDef` contract, so this library stays swappable without
 * touching the rest of the tour surface.
 *
 * `driver.js` and its stylesheet are imported dynamically from `startTour`
 * below, not at module load — this file itself has no top-level side effects,
 * so simply importing it (e.g. transitively, from `ExampleRunner`) never pulls
 * the library into the main bundle. See `vite.config.ts`'s `chunkFileNames`,
 * which gives the resulting on-demand chunk a readable name.
 */

export interface TourHandle {
  /**
   * Whether driver.js still has a tour running.
   *
   * The end of a tour is observed by asking, not by being told. driver.js
   * declares an `onDestroyed` config hook and does not call it — verified
   * against 1.8.0 for every exit: overlay click, Escape, the close button, and
   * stepping past the last step. Anything that trusts that hook to fire leaves
   * the caller believing a torn-down tour is still running.
   */
  isActive(): boolean;
  /** Tears the tour down (removes the overlay/popover and its listeners). */
  destroy(): void;
}

/**
 * Maps `TourStep`s onto driver.js step config. Exported for tests — it does no
 * work beyond shaping plain objects, so it can be asserted on without loading
 * driver.js or standing up a DOM.
 *
 * Every step is a plain "press Next" step: the tour is a click-through
 * walkthrough, detached from run state (see `useTour`), so there is no
 * per-step advance condition to encode here.
 *
 * A step whose target can't be found in the DOM is skipped automatically
 * (driver.js's own `skipMissingElement`) rather than shown as a broken,
 * unhighlighted popover or aborting the rest of the tour.
 */
export function buildDriveSteps(steps: TourStep[]) {
  return steps.map((step) => ({
    element: resolveTourSelector(step.target),
    popover: {
      title: step.title,
      description: step.description,
      showButtons: ["next", "previous", "close"] satisfies AllowedButtons[],
    },
    // The highlighted element stays interactive (driver.js default) so a reader
    // can, say, press the Run button the step points at.
    disableActiveInteraction: false,
    // Honors `TourStep.skipMissingElement` (defaults to `true` — see
    // `types.ts`) so a step authored with `skipMissingElement: false` can opt
    // into a hard failure instead of silently skipping.
    skipMissingElement: step.skipMissingElement ?? true,
  }));
}

/** Starts a driver.js tour for `steps`. See {@link buildDriveSteps}. */
export async function startTour(steps: TourStep[]): Promise<TourHandle> {
  const [{ driver }] = await Promise.all([
    import("driver.js"),
    import("driver.js/dist/driver.css"),
  ]);

  const driverObj = driver({
    steps: buildDriveSteps(steps),
    showProgress: true,
    allowClose: true,
    // Most steps should degrade by skipping rather than surfacing a broken
    // centered fallback or aborting later steps. Per-step `skipMissingElement`
    // above overrides this for a given step.
    skipMissingElement: true,
  });

  driverObj.drive();

  return {
    isActive: () => driverObj.isActive(),
    destroy: () => driverObj.destroy(),
  };
}
