import type { RoundResult, SequenceFlowDto } from "@nanobpm/bojtos-kit";
import type { TraceEntry } from "./types";

export type LabelFor = (elementId: string) => string;

/**
 * `snapshot.takenSequenceFlows` only appends — every flow traversal (including
 * a loop retaking the same flow) is pushed once and never removed — so the
 * flows a single round took are exactly the tail past the previous snapshot's
 * length. No need to diff by identity (which would collapse repeats).
 */
export function newSequenceFlows(
  current: SequenceFlowDto[],
  previousCount: number,
): SequenceFlowDto[] {
  return current.slice(previousCount);
}

/**
 * Turn one `dispatchRound` pass (see `useExampleRun.stepWorkers`) into a
 * single trace line describing what it did — the "delta, not a redraw" the
 * stepper needs (issue #63). When `handled` is 0, translate `round.reason`
 * (`@nanobpm/bojtos-kit`'s `settleReason`) into an honest sentence about what
 * is blocking progress, instead of a silent no-op: idle and terminal states
 * must say what they're waiting for.
 */
export function describeRound(
  round: RoundResult,
  flowsThisRound: SequenceFlowDto[],
  labelFor: LabelFor,
): TraceEntry {
  const snap = round.snapshot;
  if (round.handled > 0) {
    const activeLabels = snap.activeElementIds.map(labelFor);
    const flowText = flowsThisRound.length
      ? ` via ${flowsThisRound
          .map((f) => `${labelFor(f.from)} → ${labelFor(f.to)}`)
          .join(", ")}`
      : "";
    // A round can both handle jobs *and* finish the instance in the same
    // pass — surface that explicitly as "done" rather than a plain "step"
    // entry, so a final round while stepping doesn't hide the completion.
    if (snap.completedInstances >= 1) {
      return {
        kind: "done",
        text:
          `⏭ round handled ${round.handled} job${round.handled === 1 ? "" : "s"}` +
          `${flowText} — ✅ process instance completed`,
      };
    }
    return {
      kind: "step",
      text:
        `⏭ round handled ${round.handled} job${round.handled === 1 ? "" : "s"}` +
        `${flowText} — now at ${activeLabels.length ? activeLabels.join(", ") : "—"}`,
    };
  }

  switch (round.reason) {
    case "completed":
      return { kind: "done", text: "✅ process instance completed" };
    case "userTasks":
      return {
        kind: "human",
        text: "⏸ waiting for a human — complete the task below to continue",
      };
    case "timers":
      return {
        kind: "step",
        text: "⏱ waiting on a timer — advance the clock to continue",
      };
    case "messages":
      return {
        kind: "step",
        text: "✉ waiting on a message — correlate it to continue",
      };
    case "signals":
      return {
        kind: "step",
        text: "📶 waiting on a signal — broadcast it to continue",
      };
    case "incidents":
      return { kind: "error", text: "A job failed — incident on the diagram" };
    case "unhandledJobs":
      return {
        kind: "error",
        text: `⏭ waiting on job type(s) with no worker registered: ${(
          round.unhandled ?? []
        ).join(", ")}`,
      };
    case "idle":
    default:
      return {
        kind: "step",
        text: "Nothing to step — no instance is running.",
      };
  }
}
