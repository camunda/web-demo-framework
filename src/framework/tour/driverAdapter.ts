import type { TourStep } from "./types";
import { resolveTourSelector } from "./resolve";
import type { AllowedButtons } from "driver.js";

/**
 * The one module that imports driver.js (https://driverjs.com) — every other
 * tour module (types, evaluate, useTour, and any example's tour definition)
 * speaks only the `TourStep`/`TourDef` contract, so this library stays
 * swappable without touching the rest of the tour surface.
 *
 * `driver.js` and its stylesheet are imported dynamically from `startTour`
 * below, not at module load — this file itself has no top-level side
 * effects, so simply importing it (e.g. transitively, from `ExampleRunner`)
 * never pulls the library into the main bundle. See `vite.config.ts`'s
 * `chunkFileNames`, which gives the resulting on-demand chunk a readable name.
 */

export interface TourHandle {
  /** Programmatically advance past the current step (used for state-driven steps). */
  moveNext(): void;
  /** The index of the currently active step, or -1 once the tour has ended. */
  activeIndex(): number;
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

export interface StartTourOptions {
  /** Called whenever the active step changes (including on start, with index 0). */
  onIndexChange?: (index: number) => void;
}

/**
 * Maps `TourStep`s onto driver.js step config. Exported for tests — it does no
 * work beyond shaping plain objects, so it can be asserted on without loading
 * driver.js or standing up a DOM.
 *
 * A step whose `waitFor` is anything other than `{ kind: "click" }` (the
 * default) still advances itself, once `useTour.ts`'s polling loop observes its
 * condition and calls `TourHandle.moveNext()`. It keeps Next and Previous
 * visible anyway.
 *
 * Those buttons used to be hidden on such a step, on the theory that a reader
 * shouldn't be able to click past a moment the run hasn't reached yet. In
 * practice that produced a popover with no way forward whenever the condition
 * had already gone by — `{ kind: "activeElement" }` names momentary state, so a
 * reader who lingers a step behind the token, or who skips the "press Run" step
 * (its Next is enabled), waits on something that can never come true again.
 * driver.js's keyboard navigation ignores `showButtons` too, so the escape
 * hatch existed but was invisible: arrow keys worked, the buttons were gone.
 * Showing them makes the same escape discoverable, and the hint below still
 * says the step continues on its own.
 *
 * A step whose target can't be found in the DOM is skipped automatically
 * (driver.js's own `skipMissingElement`) rather than shown as a broken,
 * unhighlighted popover or aborting the rest of the tour.
 */
export function buildDriveSteps(steps: TourStep[]) {
  return steps.map((step) => {
    const stateDriven = !!step.waitFor && step.waitFor.kind !== "click";
    return {
      element: resolveTourSelector(step.target),
      popover: {
        title: step.title,
        description: stateDriven
          ? `${step.description} (continues automatically once you reach that point — or use Next to skip ahead)`
          : step.description,
        showButtons: ["next", "previous", "close"] satisfies AllowedButtons[],
      },
      // Per-step override of the driver-level default set below — kept
      // explicit here too since a mixed tour (some click steps, some
      // state-driven) needs it to vary step to step.
      disableActiveInteraction: false,
      // Honors `TourStep.skipMissingElement` (defaults to `true` — see
      // `types.ts`) so a step authored with `skipMissingElement: false` can
      // opt into a hard failure instead of silently skipping.
      skipMissingElement: step.skipMissingElement ?? true,
    };
  });
}

/** Starts a driver.js tour for `steps`. See {@link buildDriveSteps}. */
export async function startTour(
  steps: TourStep[],
  options: StartTourOptions = {},
): Promise<TourHandle> {
  const [{ driver }] = await Promise.all([
    import("driver.js"),
    import("driver.js/dist/driver.css"),
  ]);

  const driveSteps = buildDriveSteps(steps);

  const driverObj = driver({
    steps: driveSteps,
    showProgress: true,
    allowClose: true,
    // Driver-level default: most steps should degrade by skipping rather
    // than surfacing a broken centered fallback or aborting later steps.
    // Per-step `skipMissingElement` above overrides this for a given step.
    skipMissingElement: true,
    onHighlighted: (_element, _step, { index }) => {
      if (index !== undefined) options.onIndexChange?.(index);
    },
  });

  driverObj.drive();
  options.onIndexChange?.(driverObj.getActiveIndex() ?? 0);

  return {
    moveNext: () => driverObj.moveNext(),
    activeIndex: () => driverObj.getActiveIndex() ?? -1,
    isActive: () => driverObj.isActive(),
    destroy: () => driverObj.destroy(),
  };
}
