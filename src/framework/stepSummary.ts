import type { RoundResult, SequenceFlowDto, Snapshot, WasmEvent } from "@nanobpm/bojtos-kit";
import type { TraceEntry } from "./types";

export type LabelFor = (elementId: string) => string;

/**
 * The flows taken since `fromIndex` in the engine's event log, in the order
 * they were taken. Not `snapshot.takenSequenceFlows`: that list is not in
 * traversal order (it comes back sorted by source element), so slicing it by
 * a previous length returned the wrong flows.
 */
export function sequenceFlowsSince(
  events: WasmEvent[],
  fromIndex: number,
): SequenceFlowDto[] {
  return events
    .slice(fromIndex)
    .filter((e) => e.type === "SequenceFlowTaken")
    .map((e) => ({ from: String(e.from), to: String(e.to) }));
}

/**
 * Every element the engine activated, in order — the path the token took.
 * Given `instanceKey`, only that instance's: a called process runs as its own
 * instance, on a diagram that isn't this one.
 */
export function elementActivations(events: WasmEvent[], instanceKey?: string | null): string[] {
  return events
    .filter(
      (e) =>
        e.type === "ElementActivated" &&
        (instanceKey == null || String(e.instance_key) === instanceKey),
    )
    .map((e) => String(e.element_id));
}

const HUMAN_WAITING_TEXT =
  "⏸ waiting for a human — complete the task below to continue";

const viaText = (flows: SequenceFlowDto[], labelFor: LabelFor) =>
  flows.length
    ? ` via ${flows.map((f) => `${labelFor(f.from)} → ${labelFor(f.to)}`).join(", ")}`
    : "";

/**
 * The first Step of a run only creates the instance, so the reader sees where
 * it stops before any job runs — including what it passed on the way (a
 * business rule task, a gateway), which happens inside the create command.
 */
export function describeStart(
  snap: Snapshot,
  flows: SequenceFlowDto[],
  labelFor: LabelFor,
  runCompleted: boolean,
): TraceEntry {
  const head = `⏭ instance started${viaText(flows, labelFor)}`;
  if (runCompleted)
    return { kind: "done", text: `${head} — ✅ process instance completed` };
  if (snap.userTasks.some((t) => t.state === "Created"))
    return { kind: "human", text: `${head} — ${HUMAN_WAITING_TEXT}` };
  const active = snap.activeElementIds.map(labelFor);
  return { kind: "step", text: `${head} — now at ${active.length ? active.join(", ") : "—"}` };
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
  /**
   * Whether the instance the *run* started has finished. A run that delegates
   * (a call activity) has more than one instance, and a child finishing is not
   * the run finishing — see `rootInstanceOf` in `ExampleRunner`. Omitted for a
   * single-process run, where the global count says the same thing.
   */
  runCompleted?: boolean,
): TraceEntry {
  const snap = round.snapshot;
  const completed = runCompleted ?? snap.completedInstances >= 1;
  // A user task can open in the very same round that also handled jobs (or
  // that stopped on a manually-held job) — check once up front so both
  // branches below can fold it in rather than hiding it behind a generic
  // "now at —"/error line.
  const humanWaitingText = HUMAN_WAITING_TEXT;
  const userTaskOpened = snap.userTasks.some((t) => t.state === "Created");
  if (round.handled > 0) {
    const activeLabels = snap.activeElementIds.map(labelFor);
    const flowText = viaText(flowsThisRound, labelFor);
    // A round can both handle jobs *and* finish the instance in the same
    // pass — surface that explicitly as "done" rather than a plain "step"
    // entry, so a final round while stepping doesn't hide the completion.
    if (completed) {
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
      // The engine settles with this reason when an instance finished, which
      // for a delegating run can be a child while the caller is still going.
      return completed
        ? { kind: "done", text: "✅ process instance completed" }
        : {
            kind: "step",
            text: "⏭ a delegated process finished — the calling process is still running",
          };
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
