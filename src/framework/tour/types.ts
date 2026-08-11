import type { TourAnchorName } from "./anchors";

/**
 * What a tour step waits on before advancing. `"click"` (the default when
 * `waitFor` is omitted) is the ordinary product-tour behaviour — the reader
 * presses the popover's Next button. The other kinds instead watch the run's
 * own state (via the snapshot's `activeElementIds`/`elementStats` — see
 * `./evaluate.ts`), so a step can say "continue when the token reaches this
 * element" or "continue when this tool has run" without the reader having to
 * guess when that's happened.
 */
export type TourWaitFor =
  | { kind: "click" }
  /** Continue once `elementId` is among the snapshot's active elements. */
  | { kind: "activeElement"; elementId: string }
  /** Continue once `elementId` has completed at least `atLeast` (default 1) times. */
  | { kind: "elementCompleted"; elementId: string; atLeast?: number };

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
   * What advances past this step. Defaults to `{ kind: "click" }` when
   * omitted — an ordinary "press Next" step.
   */
  waitFor?: TourWaitFor;
  /**
   * When the step's target isn't present in the DOM (a hidden panel, an
   * element renamed out from under a stale tour, an agent-only anchor on a
   * non-agentic example), skip this step and move on rather than breaking
   * the tour. Defaults to `true` — this is the expected, common case, not an
   * opt-in one. Set explicitly to `false` only while authoring a tour, to
   * catch a typo'd anchor/element id as a hard failure instead of a silent
   * skip.
   */
  skipMissingElement?: boolean;
}

/**
 * What must actually have happened for the tour to count as successful —
 * deliberately separate from "the reader clicked through every step" (a
 * reader can dismiss a tour early, or click through without the run ever
 * reaching a meaningful state). See `./evaluate.ts`'s `isTourSuccessful`.
 */
export type TourSuccessEvent =
  | { kind: "instanceCompleted" }
  | { kind: "elementCompleted"; elementId: string; atLeast?: number };

/** A short, declarative, per-example guided tour (see `docs/` for authoring notes). */
export interface TourDef {
  /** Stable id, matched against the `?tour=<id>` deep link (see `./deepLink.ts`). */
  id: string;
  /** Shown on the "Take the tour" affordance. */
  label: string;
  /** Kept to five steps or fewer by convention — a tour is a nudge, not a manual. */
  steps: TourStep[];
  successEvent: TourSuccessEvent;
}
