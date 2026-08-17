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
 *
 * `manualJobTypes`, if given, are job types this example deliberately holds
 * out of the drive loop (see `HandlerDef.manualControl`/`manualControls` in
 * `ExampleRunner`, which passes its `manualControls` map straight through —
 * hence accepting anything with a `.has(jobType)` check rather than
 * demanding a `Set`). Those workers are removed from `beginRun`'s worker
 * map, so the engine reports a job of that type the same way as any other
 * unhandled job type (`reason: "unhandledJobs"`) — without this set, that
 * looks identical to a genuine "no worker registered" error even though the
 * UI is correctly waiting on the reader's manual choice.
 */
export function describeRound(
  round: RoundResult,
  flowsThisRound: SequenceFlowDto[],
  labelFor: LabelFor,
  manualJobTypes?: { has(jobType: string): boolean },
): TraceEntry {
  const snap = round.snapshot;
  // A user task can open in the very same round that also handled jobs (or
  // that stopped on a manually-held job) — check once up front so both
  // branches below can fold it in rather than hiding it behind a generic
  // "now at —"/error line.
  const humanWaitingText =
    "⏸ waiting for a human — complete the task below to continue";
  const userTaskOpened = snap.userTasks.some((t) => t.state === "Created");
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
    // Likewise, a round can handle jobs and open a user task in the same
    // pass — say so explicitly instead of "now at <label>", which would
    // otherwise look resumable when it's actually blocked on a form.
    if (userTaskOpened) {
      return {
        kind: "human",
        text:
          `⏭ round handled ${round.handled} job${round.handled === 1 ? "" : "s"}` +
          `${flowText} — ${humanWaitingText}`,
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
      return { kind: "human", text: humanWaitingText };
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
    case "unhandledJobs": {
      const unhandled = round.unhandled ?? [];
      // The example itself deliberately excludes these job types from the
      // drive loop (see `HandlerDef.manualControl`/`manualControls`) so the
      // reader can choose how to resolve them — that's a normal pause
      // waiting on a human choice, not an error, even though the engine's
      // `settleReason` can't tell the two apart.
      if (
        manualJobTypes &&
        unhandled.length > 0 &&
        unhandled.every((jt: string) => manualJobTypes.has(jt))
      ) {
        return { kind: "human", text: humanWaitingText };
      }
      return {
        kind: "error",
        text: `⏭ waiting on job type(s) with no worker registered: ${unhandled.join(", ")}`,
      };
    }
    case "idle":
      return {
        kind: "step",
        text: "Nothing to step — no instance is running.",
      };
    default:
      // `round.reason` is `@nanobpm/bojtos-kit`'s `settleReason` — if a new
      // value is ever added there (or `reason` is omitted), fall back to
      // surfacing it verbatim instead of silently reusing the "idle" text,
      // so the Step log stays honest about an unanticipated block rather
      // than misleadingly implying nothing is running.
      return {
        kind: "step",
        text: round.reason
          ? `Step blocked on an unrecognized reason: ${round.reason}`
          : "Nothing to step — no instance is running.",
      };
  }
}
