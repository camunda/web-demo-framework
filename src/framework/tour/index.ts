/**
 * Public surface of the guided-tour framework — see `./types.ts` for the
 * `TourDef`/`TourStep` contract every example's tour speaks, and
 * `docs/supported-edits.md`-style authoring notes in the example directories
 * for how to write one.
 */
export { TOUR_ANCHOR, type TourAnchorName } from "./anchors";
export { readTourParam, tourParam } from "./deepLink";
export { isTourSuccessful, isWaitForSatisfied } from "./evaluate";
export { useTour, type UseTourResult } from "./useTour";
export type {
  TourDef,
  TourStep,
  TourSuccessEvent,
  TourTarget,
  TourWaitFor,
} from "./types";
