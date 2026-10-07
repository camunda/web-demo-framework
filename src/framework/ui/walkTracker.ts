import { useEffect } from "react";

interface Waiter {
  run: number;
  target: number;
  resolve: () => void;
  timer: number;
}

/**
 * Shared between the runner and its lazy, collapsible diagram, so the run can
 * wait for the token walk to actually finish rather than for an estimate of it,
 * and so a remounted diagram knows which part of the path it already showed.
 */
export class WalkTracker {
  /** The run `consumed` counts for. */
  run: number | undefined = undefined;
  /** Entries of that run's path the diagram has taken in, walked or skipped. */
  consumed = 0;
  walking = false;
  /** A diagram is mounted and has imported its XML. */
  ready = false;
  /** The panel holding the diagram is open; when it isn't, nothing is shown to wait for. */
  panelOpen = false;
  /** A ready diagram went away, so the next mount is a reopen, not a first load. */
  detached = false;
  private waiters = new Set<Waiter>();

  private idleFor(run: number, target: number) {
    if (!this.panelOpen) return true;
    return this.ready && this.run === run && this.consumed >= target && !this.walking;
  }

  /** Resolves once the diagram has walked the first `target` entries of `run`, or after `capMs`. */
  waitFor(run: number, target: number, capMs: number): Promise<void> {
    if (this.idleFor(run, target)) return Promise.resolve();
    return new Promise((resolve) => {
      const waiter: Waiter = { run, target, resolve, timer: 0 };
      waiter.timer = window.setTimeout(() => this.settle(waiter), capMs);
      this.waiters.add(waiter);
    });
  }

  /** Entries of `run` not yet taken in by the diagram. */
  pending(run: number, target: number) {
    return Math.max(0, target - (this.run === run ? this.consumed : 0));
  }

  notify() {
    for (const waiter of [...this.waiters])
      if (this.idleFor(waiter.run, waiter.target)) this.settle(waiter);
  }

  private settle(waiter: Waiter) {
    window.clearTimeout(waiter.timer);
    this.waiters.delete(waiter);
    waiter.resolve();
  }
}

/** Mounted eagerly inside the diagram's panel: says whether there is a diagram to wait for. */
export function WalkPanelPresence({ tracker }: { tracker: WalkTracker }) {
  useEffect(() => {
    tracker.panelOpen = true;
    return () => {
      tracker.panelOpen = false;
      tracker.notify();
    };
  }, [tracker]);
  return null;
}
