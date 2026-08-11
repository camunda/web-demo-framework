/**
 * The DOM-anchor registry for guided tours (see `./types.ts`).
 *
 * A tour step that targets runner chrome (as opposed to a BPMN element on the
 * live diagram — see `resolveTourTarget` in `./resolve.ts`) names one of these
 * constants, never a literal selector string. `ExampleRunner.tsx` tags the
 * corresponding DOM node with `data-tour={TOUR_ANCHOR.x}`. Deriving both ends
 * from the same constant means a future rename of the attribute value is a
 * compile error at every call site instead of a tour silently finding
 * nothing to highlight.
 */
export const TOUR_ANCHOR = {
  /** The diagram card — also the search root for BPMN-element-id targets. */
  diagram: "diagram",
  /** The ▶ Run button. */
  runButton: "run-button",
  /** The live variables panel. */
  variablesPanel: "variables-panel",
  /** The code/editors panel (whichever tab is active). */
  codePanel: "code-panel",
  /** The Brain panel (brain selection), when the example has an agent. */
  brainPanel: "brain-panel",
} as const;

export type TourAnchorName = (typeof TOUR_ANCHOR)[keyof typeof TOUR_ANCHOR];

/** Builds the `[data-tour="…"]` selector for a chrome anchor. */
export function anchorSelector(anchor: TourAnchorName): string {
  return `[data-tour="${anchor}"]`;
}
