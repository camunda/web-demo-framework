import type { Snapshot } from "@nanobpm/bojtos-react";
import type { TourSuccessEvent, TourWaitFor } from "./types";

/**
 * Pure, framework-agnostic checks against a run snapshot — kept separate from
 * `./driverAdapter.ts` (the only module that imports driver.js) so this logic
 * is trivially unit-testable and reusable outside a running tour (e.g. by a
 * future browser smoke test asserting a tour's `successEvent` actually fires).
 */

/** Whether `elementId` has completed at least `atLeast` (default 1) times. */
function completedCount(snapshot: Snapshot, elementId: string): number {
  return (
    snapshot.elementStats.find((s) => s.elementId === elementId)?.completed ??
    0
  );
}

/**
 * Whether a step's `waitFor` condition currently holds. A `"click"` wait (the
 * default) is never satisfied by state — it only advances via the popover's
 * own Next button — so this always reports `false` for it; the caller (see
 * `useTour.ts`) simply never polls a click step against this function.
 */
export function isWaitForSatisfied(
  waitFor: TourWaitFor | undefined,
  snapshot: Snapshot | null,
): boolean {
  if (!waitFor || waitFor.kind === "click") return false;
  if (!snapshot) return false;
  if (waitFor.kind === "activeElement") {
    return snapshot.activeElementIds.includes(waitFor.elementId);
  }
  // waitFor.kind === "elementCompleted"
  return completedCount(snapshot, waitFor.elementId) >= (waitFor.atLeast ?? 1);
}

/**
 * Whether a tour's declared `successEvent` has happened — the measure of "did
 * the tour actually demonstrate something", independent of whether the
 * reader clicked through every popover. See `TourDef.successEvent`.
 */
export function isTourSuccessful(
  successEvent: TourSuccessEvent,
  snapshot: Snapshot | null,
): boolean {
  if (!snapshot) return false;
  if (successEvent.kind === "instanceCompleted") {
    return snapshot.completedInstances >= 1;
  }
  // successEvent.kind === "elementCompleted"
  return (
    completedCount(snapshot, successEvent.elementId) >=
    (successEvent.atLeast ?? 1)
  );
}
