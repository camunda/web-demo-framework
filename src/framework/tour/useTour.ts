import { useCallback, useEffect, useRef, useState } from "react";
import { startTour, type TourHandle } from "./driverAdapter";
import type { TourDef } from "./types";

/** How often to check whether driver.js is still running. */
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
 * Drives an optional `TourDef` as a plain click-through walkthrough: starts
 * driver.js (via `./driverAdapter`, the only module that imports it) and tracks
 * whether it is still running.
 *
 * The tour is deliberately detached from run state — every step advances on the
 * reader's Next, never on what the engine is doing — so it behaves identically
 * whether the example has already run (e.g. under `?autostart=1`), is mid-run,
 * or has never been started. An earlier version polled the run snapshot to
 * auto-advance "watch the token move"-style steps; because a completed run
 * leaves those conditions permanently satisfied, that silently skipped steps
 * and left the tour ending mid-way. A walkthrough that only ever waits on Next
 * has no such coupling.
 *
 * An example with no `tour` gets a `start` that's simply a no-op — the calling
 * component doesn't need its own conditional.
 */
export function useTour(tour: TourDef | undefined): UseTourResult {
  const [active, setActive] = useState(false);
  const handleRef = useRef<TourHandle | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // Bumped by every `start()`/`stop()` so a `startTour()` promise that resolves
  // after the tour it belongs to has been superseded (a second `start()` before
  // the first resolved, `stop()`, or unmount) can tell it's stale and tear
  // itself down instead of adopting a handle for a tour that's no longer current.
  const startTokenRef = useRef(0);

  const stopPolling = useCallback(() => {
    if (pollRef.current !== null) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }, []);

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

    void startTour(tour.steps).then((handle) => {
      // A tour can end before this resolves — `drive()` runs inside
      // `startTour`, so a step list whose targets are all missing tears itself
      // down while the promise is still pending. Adopting the handle then would
      // leave `active` true with nothing on screen.
      if (token !== startTokenRef.current || !handle.isActive()) {
        handle.destroy();
        return;
      }
      handleRef.current = handle;
      setActive(true);
      // How the tour's end is noticed: driver.js declares an `onDestroyed` hook
      // and never calls it (1.8.0 — checked against overlay click, Escape, the
      // close button, and stepping past the last step), so being told is not an
      // option. Without this poll the button stays "Touring…" and disabled for
      // the rest of the page's life.
      //
      // Capture this interval's own id and act only while this handle is still
      // the current one: a callback belonging to a superseded tour (a rapid
      // stop-then-start swapped the handle underneath it) clears just itself and
      // touches nothing a newer tour owns — never its poll id, handle, or
      // `active`.
      const pollId = setInterval(() => {
        if (handleRef.current !== handle) {
          clearInterval(pollId);
          return;
        }
        if (!handle.isActive()) {
          clearInterval(pollId);
          if (pollRef.current === pollId) pollRef.current = null;
          handleRef.current = null;
          setActive(false);
        }
      }, POLL_MS);
      pollRef.current = pollId;
    });
  }, [tour, stopPolling]);

  // Tear down a running tour if the component unmounts (e.g. the reader
  // switches examples) mid-tour.
  useEffect(() => stop, [stop]);

  return { active, start, stop };
}
