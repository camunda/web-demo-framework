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
  /** Tears the tour down (removes the overlay/popover and its listeners). */
  destroy(): void;
}

export interface StartTourOptions {
  /** Called whenever the active step changes (including on start, with index 0). */
  onIndexChange?: (index: number) => void;
  /** Called once the tour is torn down, for any reason (finished, closed, escaped). */
  onDestroyed?: () => void;
}

/**
 * Starts a driver.js tour for `steps`. A step whose `waitFor` is anything
 * other than `{ kind: "click" }` (the default) hides the Next/Previous
 * buttons — the reader can't click past it — leaving only Close, since it
 * advances itself once `useTour.ts`'s polling loop observes its condition and
 * calls `TourHandle.moveNext()`.
 *
 * A step whose target can't be found in the DOM is skipped automatically
 * (driver.js's own `skipMissingElement`) rather than shown as a broken,
 * unhighlighted popover or aborting the rest of the tour.
 */
export async function startTour(
  steps: TourStep[],
  options: StartTourOptions = {},
): Promise<TourHandle> {
  const [{ driver }] = await Promise.all([
    import("driver.js"),
    import("driver.js/dist/driver.css"),
  ]);

  const driveSteps = steps.map((step) => {
    const stateDriven = !!step.waitFor && step.waitFor.kind !== "click";
    return {
      element: resolveTourSelector(step.target),
      popover: {
        title: step.title,
        description: stateDriven
          ? `${step.description} (continues automatically once you reach that point)`
          : step.description,
        showButtons: stateDriven
          ? (["close"] satisfies AllowedButtons[])
          : (["next", "previous", "close"] satisfies AllowedButtons[]),
      },
      // Per-step override of the driver-level default set below — kept
      // explicit here too since a mixed tour (some click steps, some
      // state-driven) needs it to vary step to step.
      disableActiveInteraction: false,
    };
  });

  const driverObj = driver({
    steps: driveSteps,
    showProgress: true,
    allowClose: true,
    // A tour step's element is expected to sometimes be legitimately absent
    // (an agent-only anchor on a non-agentic example, a renamed element) —
    // degrade by skipping it rather than surfacing a broken centered
    // fallback or aborting later steps.
    skipMissingElement: true,
    onHighlighted: (_element, _step, { index }) => {
      if (index !== undefined) options.onIndexChange?.(index);
    },
    onDestroyed: () => {
      options.onDestroyed?.();
    },
  });

  driverObj.drive();
  options.onIndexChange?.(driverObj.getActiveIndex() ?? 0);

  return {
    moveNext: () => driverObj.moveNext(),
    activeIndex: () => driverObj.getActiveIndex() ?? -1,
    destroy: () => driverObj.destroy(),
  };
}
