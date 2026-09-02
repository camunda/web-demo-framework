import { useCallback, useEffect, useRef, useState } from "react";
import type { Snapshot } from "@nanobpm/bojtos-react";
import { startTour, type TourHandle } from "./driverAdapter";
import { isWaitForSatisfied } from "./evaluate";
import type { TourDef } from "./types";

/** How often to check a state-driven step's condition while a tour is active. */
const POLL_MS = 300;

export interface UseTourResult {
  /** Whether a tour is currently being driven. */
  active: boolean;
  /** Starts `tour` from its first step. No-op if `tour` is undefined or already active. */
  start(): void;
  /** Tears down the active tour, if any. */
  stop(): void;
}

/**
 * Drives an optional `TourDef` end-to-end: starts driver.js (via
 * `./driverAdapter`, the only module that imports it), and polls
 * `getSnapshot()` so a step whose `waitFor` names run state (rather than a
 * click) advances itself the moment that state is reached — "continue when
 * the token reaches this element" or "continue when this tool has run",
 * using the same snapshot fields (`activeElementIds`, `elementStats`) the
 * rest of the runner already reads.
 *
 * An example with no `tour` gets a `start` that's simply a no-op — the
 * calling component doesn't need its own conditional.
 */
export function useTour(
  tour: TourDef | undefined,
  getSnapshot: () => Snapshot | null,
): UseTourResult {
  const [active, setActive] = useState(false);
  const handleRef = useRef<TourHandle | null>(null);
  const indexRef = useRef(0);
  // Guards against calling `moveNext()` more than once for the same step: the
  // 300ms poll tick and driver.js's own `onHighlighted` callback (which is
  // what actually updates `indexRef.current`, via `onIndexChange` below) run
  // on independent clocks. Without this, two poll ticks landing before
  // `onHighlighted` fires would both see the same still-satisfied condition
  // and both call `moveNext()` — silently skipping the step in between.
  const lastAdvancedIndexRef = useRef(-1);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // `getSnapshot` is typically a fresh closure every render (it reads
  // `run.snapshot` off a hook result that's itself recreated per render).
  // The poll loop below is set up once, in `start`, and must always read the
  // *current* snapshot rather than the one captured when polling began — a
  // ref kept in sync via this effect is what makes that safe without
  // recreating `start`/the interval on every snapshot tick.
  const getSnapshotRef = useRef(getSnapshot);
  useEffect(() => {
    getSnapshotRef.current = getSnapshot;
  }, [getSnapshot]);

  const stopPolling = useCallback(() => {
    if (pollRef.current !== null) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }, []);

  // Bumped by every `start()` call (and by `stop()`) so a `startTour()`
  // promise that resolves after the tour it belongs to has been superseded
  // (a second `start()` before the first resolved, `stop()`, or unmount) can
  // tell it's stale and tear itself down instead of calling `setActive(true)`
  // / beginning to poll on a component/tour that's no longer current.
  const startTokenRef = useRef(0);

  const stop = useCallback(() => {
    startTokenRef.current += 1;
    stopPolling();
    handleRef.current?.destroy();
    handleRef.current = null;
    setActive(false);
  }, [stopPolling]);

  const start = useCallback(() => {
    if (!tour || tour.steps.length === 0 || handleRef.current) return;
    const token = (startTokenRef.current += 1);
    // Per-tour, not per-hook: both survive the tour they belong to, and a
    // second run starting with them left at the previous run's values would
    // treat its own first step as already advanced.
    indexRef.current = 0;
    lastAdvancedIndexRef.current = -1;

    void startTour(tour.steps, {
      onIndexChange: (index) => {
        indexRef.current = index;
      },
    }).then((handle) => {
      // A tour can end before this resolves — `drive()` runs inside
      // `startTour`, so a step list whose targets are all missing tears itself
      // down while the promise is still pending. Adopting the handle then
      // would leave `active` true with nothing on screen.
      if (token !== startTokenRef.current || !handle.isActive()) {
        handle.destroy();
        return;
      }
      handleRef.current = handle;
      setActive(true);
      pollRef.current = setInterval(() => {
        // Also how the tour's end is noticed: driver.js declares an
        // `onDestroyed` hook and never calls it (1.8.0 — checked against
        // overlay click, Escape, the close button, and stepping past the last
        // step), so being told is not an option. Without this the button stays
        // "Touring…" and disabled for the rest of the page's life.
        if (!handle.isActive()) {
          stopPolling();
          handleRef.current = null;
          setActive(false);
          return;
        }
        const index = indexRef.current;
        if (index === lastAdvancedIndexRef.current) return;
        const step = tour.steps[index];
        if (step && isWaitForSatisfied(step.waitFor, getSnapshotRef.current())) {
          lastAdvancedIndexRef.current = index;
          handle.moveNext();
        }
      }, POLL_MS);
    });
    // `tour` identity changes only when the example itself changes (a fresh
    // manifest, not a re-render) — `getSnapshot` deliberately isn't a dep
    // here, since the ref above already keeps the poll loop reading the
    // latest snapshot without needing to recreate `start`/the interval.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tour, stopPolling]);

  // Tear down a running tour if the component unmounts (e.g. the reader
  // switches examples) mid-tour.
  useEffect(() => stop, [stop]);

  return { active, start, stop };
}
