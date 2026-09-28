import type { Snapshot } from "@nanobpm/bojtos-kit";
import type { BoundaryEventSpec } from "./model";
import type { MessageEventDef } from "./types";

/**
 * Which of an example's declared {@link MessageEventDef}s have an open
 * subscription right now — the ones the reader is being offered as buttons.
 *
 * A boundary event's subscription is reported against the activity it is
 * attached to, so an example names the event and this resolves it. The message
 * name is matched too: one activity can carry several message boundaries, and
 * the host alone would bind every button to whichever subscription came first.
 *
 * Lives here rather than in the runner because it also decides where a run
 * comes to rest — the drive loop refuses to fast-forward a timer that one of
 * these is racing, and `drive.test.ts` has to model the same resting place.
 */
export function matchReadyMessageEvents(
  declared: MessageEventDef[] | undefined,
  snapshot: Snapshot | null,
  boundaryEvents: BoundaryEventSpec[],
): { event: MessageEventDef; sub: Snapshot["messageSubscriptions"][number] }[] {
  if (!declared?.length || !snapshot) return [];
  return declared.flatMap((event) => {
    const spec = boundaryEvents.find((b) => b.elementId === event.elementId);
    const sub = snapshot.messageSubscriptions.find((m) =>
      m.elementId === event.elementId
        ? true
        : !!spec &&
          m.elementId === spec.attachedTo &&
          (!spec.messageName || m.messageName === spec.messageName),
    );
    return sub ? [{ event, sub }] : [];
  });
}
