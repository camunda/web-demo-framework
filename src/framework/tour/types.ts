import type { TourAnchorName } from "./anchors";

/** What a step in a guided tour targets. */
export type TourTarget =
  /** A DOM anchor in the runner chrome — see `./anchors.ts`. */
  | { anchor: TourAnchorName }
  /** A BPMN element on the live diagram, spotlighted by its element id. */
  | { elementId: string };

export interface TourStep {
  title: string;
  description: string;
  target: TourTarget;
  /**
   * When the step's target isn't present in the DOM (a collapsed panel, an
   * element renamed out from under a stale tour, an agent-only anchor on a
   * non-agentic example), skip this step and move on rather than breaking the
   * tour. Defaults to `true` — this is the expected, common case, not an
   * opt-in one. Set explicitly to `false` only while authoring a tour, to
   * catch a typo'd anchor/element id as a hard failure instead of a silent
   * skip.
   */
  skipMissingElement?: boolean;
}

/**
 * A short, declarative, per-example guided tour (see `docs/` for authoring
 * notes).
 *
 * Deliberately a plain click-through: every step advances on the reader's Next,
 * never on run state, so a tour behaves identically whether the example has
 * run, is mid-run, or has never been started. This is why there is no
 * `waitFor`/`successEvent` here — a tour explains the process, it does not
 * observe or drive the engine.
 */
export interface TourDef {
  /** Stable id, matched against the `?tour=<id>` deep link (see `./deepLink.ts`). */
  id: string;
  /** Shown on the "Take the tour" affordance. */
  label: string;
  /** Kept to five steps or fewer by convention — a tour is a nudge, not a manual. */
  steps: TourStep[];
}
