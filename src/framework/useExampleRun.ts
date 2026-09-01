import { useCallback, useEffect, useRef, useState } from "react";
import {
  createBojtosSession,
  dispatchRound,
  type BojtosSession,
  type DispatchOptions,
  type JobHandler,
  type RoundResult,
  type Snapshot,
} from "@nanobpm/bojtos-kit";
import type { RunImage } from "./imageInput";

/**
 * The engine half of the runner: `useBojtos` from `@nanobpm/bojtos-react` plus
 * `completeUserTask`, which the published hook doesn't expose (0.4.0) because it
 * keeps its session private. Any example with a human step needs it, so the
 * framework owns this rather than each example rediscovering the gap.
 *
 * If a future bojtos release exposes the command, delete this and import
 * `useBojtos` directly — the surface is deliberately the same.
 */

export type EnginePhase = "loading" | "ready" | "error";

export interface ExampleRunControls {
  phase: EnginePhase;
  error: string | null;
  processIds: string[];
  snapshot: Snapshot | null;
  createInstance(processId: string, variablesJson: string): Snapshot | null;
  stepWorkers(
    workers: Record<string, JobHandler>,
    opts?: DispatchOptions,
  ): Promise<RoundResult | null>;
  completeUserTask(userTaskKey: string, variablesJson: string): Snapshot | null;
  /** Advance the virtual clock by `byMs`, firing any timer now due. */
  advanceTime(byMs: number): Snapshot | null;
  /**
   * Broadcast a signal by name, unblocking every open subscription waiting
   * on it (`BojtosSession.broadcastSignal`) — the counterpart to
   * `advanceTime` for a signal intermediate/boundary catch event. Used by
   * `ExampleRunner`'s drive loop to resolve a `reason: "signals"` settle
   * automatically, so a signal-broadcast construct still runs to completion
   * from a single Run button rather than pausing forever on the wait.
   */
  broadcastSignal(signalName: string, variablesJson: string): Snapshot | null;
  /**
   * Activate one waiting job of `jobType` and complete it directly against
   * the session, bypassing the normal `dispatchRound`/`workers` map. For a
   * job type an example deliberately excludes from the drive loop (see
   * `HandlerDef.manualControl`) so a reader can choose, at the moment it's
   * reached, between completing it normally and firing its boundary
   * event — this is the "complete it normally" half of that choice.
   */
  completeJobManually(jobType: string, variablesJson: string): Snapshot | null;
  /**
   * Activate one waiting job of `jobType` and throw a BPMN error on it
   * directly against the session (`BojtosSession.throwError`), routing the
   * token through a matching error boundary catch instead of raising an
   * incident. `dispatchRound`/`dispatchWorkers` only support
   * `completeJob`/`failJob` for a registered `JobHandler` — there is no way
   * for ordinary handler code to reach `throwError` — so this is the only
   * way the UI can demonstrate an error boundary event actually catching a
   * thrown error rather than the job merely failing. See
   * `HandlerDef.manualControl`.
   */
  throwJobError(
    jobType: string,
    errorCode: string,
    errorMessage: string,
  ): Snapshot | null;
  /**
   * Publish `messageName`/`correlationKey` against the live session
   * (`BojtosSession.correlateMessage`), unblocking any instance waiting on a
   * matching message catch/boundary event and merging `variablesJson` into
   * it. This is the in-browser stand-in for an external system publishing a
   * message — the only way the UI can resolve a `SettleReason: "messages"`
   * wait state (see `@nanobpm/bojtos-kit`'s `dispatchRound`/`settleReason`).
   */
  correlateMessage(
    messageName: string,
    correlationKey: string,
    variablesJson: string,
  ): Snapshot | null;
  reset(): Promise<void>;
  /**
   * Hold this run's picked/uploaded image (contract B) in run-scoped context,
   * keyed to its process instance — the actual pixels live here, never in a
   * BPMN variable. Handlers read it back through `helpers.vision`/`helpers.image`
   * (see `imageInput.ts`); it is dropped on `reset`/`redeploy` and on unmount.
   */
  setRunImage(instanceKey: string, image: RunImage): void;
  /** The image held for a process instance, or `undefined` if none. */
  getRunImage(instanceKey: string): RunImage | undefined;
  /**
   * Reset the engine and redeploy it with `xml`, replacing whatever was
   * deployed before (the initial `bpmn` or a prior `redeploy`/`reset`).
   *
   * This is the *only* thing that touches the live bojtos session on an
   * edited model: callers apply a hand-edited diagram by invoking this
   * explicitly (e.g. on Run), not by re-passing a changed `bpmn` prop on
   * every keystroke — see the `bpmn` param below for why.
   */
  redeploy(xml: string): Promise<string[] | null>;
}

/**
 * @param bpmn The model deployed when the session is (re)created — read once
 *   per mount, not tracked live. A component that lifts the diagram into an
 *   editable draft (see `ExampleRunner`'s `model (XML)` tab) must keep that
 *   draft in its own state and apply it via `redeploy(xml)` on an explicit
 *   action, not by feeding every keystroke back in here: this hook tears down
 *   and recreates the whole bojtos session whenever `bpmn` changes identity,
 *   which would otherwise redeploy/reset on every character typed and wipe
 *   the previous run's state mid-edit.
 */
export function useExampleRun({ bpmn }: { bpmn: string }): ExampleRunControls {
  const sessionRef = useRef<BojtosSession | null>(null);
  const [phase, setPhase] = useState<EnginePhase>("loading");
  const [error, setError] = useState<string | null>(null);
  const [processIds, setProcessIds] = useState<string[]>([]);
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const lastAppliedRef = useRef(bpmn);
  /**
   * Monotonic generation token, bumped whenever `reset()`/`redeploy()` reuse
   * the *same* `BojtosSession` object with a fresh instance (`session.reset()`
   * followed by `deployInto` on that same session). `stepWorkers`'s existing
   * `sessionRef.current !== session` guard only catches a session being
   * *replaced* (e.g. on unmount), not this in-place reset, so a `dispatchRound`
   * already in flight when Reset fires would otherwise still land its
   * `setSnapshot(round.snapshot)`/`setError` after the reset had already put
   * `snapshot`/`error` back to their post-reset values — breaking "Reset
   * returns to pre-run state". Capturing this token before the `await` and
   * comparing it after closes that window.
   */
  const runGenRef = useRef(0);

  /**
   * The dispatch round currently in flight, if any.
   *
   * The generation token above keeps a stale round from writing *React* state
   * after a reset, but `session.reset()` mutates the *engine* — and a round is
   * still open for as long as its slowest handler runs. With a live brain that
   * is one whole model turn: Reset during a Gemini Nano turn wiped the
   * instance, then the turn resolved and asked the engine to activate an
   * element on it, and the round threw. What the reader saw was the *next*
   * run stopping with "no dispatch round was returned" and the abandoned run's
   * trace entries landing in its log.
   *
   * So reset/redeploy wait for the round to settle rather than pulling the
   * state out from under it.
   */
  const inFlightRef = useRef<Promise<unknown> | null>(null);

  /**
   * This run's images, keyed by process instance (contract B). Holds the actual
   * pixels a `helpers.vision`/`helpers.image` call resolves, so they never have
   * to travel as a BPMN variable. Cleared whenever the run is torn down
   * (`reset`/`redeploy`) or the session is (re)created/freed, so an old run's
   * bytes don't linger.
   */
  const runImagesRef = useRef<Map<string, RunImage>>(new Map());

  const setRunImage = useCallback((instanceKey: string, image: RunImage) => {
    runImagesRef.current.set(instanceKey, image);
  }, []);

  const getRunImage = useCallback(
    (instanceKey: string) => runImagesRef.current.get(instanceKey),
    [],
  );

  const deployInto = useCallback((session: BojtosSession, xml: string) => {
    const res = session.deploy(xml);
    lastAppliedRef.current = xml;
    // A fresh deploy (mount, Reset, or Redeploy) starts a new run — drop any
    // prior run's held image bytes so they can't outlive their instance.
    runImagesRef.current.clear();
    setProcessIds(res.processIds);
    setSnapshot(null);
    setError(null);
    return res.processIds;
  }, []);

  useEffect(() => {
    let cancelled = false;
    setPhase("loading");
    setProcessIds([]);
    setSnapshot(null);
    setError(null);

    createBojtosSession()
      .then((session) => {
        if (cancelled) {
          session.free();
          return;
        }
        try {
          deployInto(session, bpmn);
        } catch (e) {
          session.free();
          setError(String(e));
          setPhase("error");
          return;
        }
        sessionRef.current = session;
        setPhase("ready");
      })
      .catch((e) => {
        if (cancelled) return;
        setError(String(e));
        setPhase("error");
      });

    return () => {
      cancelled = true;
      sessionRef.current?.free();
      sessionRef.current = null;
      runImagesRef.current.clear();
    };
    // `bpmn` here is the model to (re)deploy when the session itself is
    // (re)created — e.g. on mount or when the caller remounts for a new
    // example. It is deliberately not meant to track every edit; see
    // `redeploy` for applying a hand-edited draft to the live session.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bpmn]);

  const run = useCallback((fn: (s: BojtosSession) => Snapshot) => {
    const session = sessionRef.current;
    if (!session) return null;
    try {
      const snap = fn(session);
      setSnapshot(snap);
      setError(null);
      return snap;
    } catch (e) {
      setError(String(e));
      return null;
    }
  }, []);

  const createInstance = useCallback(
    (processId: string, variablesJson: string) =>
      run((s) => s.createInstance(processId, variablesJson)),
    [run],
  );

  const completeUserTask = useCallback(
    (userTaskKey: string, variablesJson: string) =>
      run((s) => s.completeUserTask(userTaskKey, variablesJson)),
    [run],
  );

  const advanceTime = useCallback(
    (byMs: number) => run((s) => s.advanceTime(byMs)),
    [run],
  );

  const broadcastSignal = useCallback(
    (signalName: string, variablesJson: string) =>
      run((s) => s.broadcastSignal(signalName, variablesJson)),
    [run],
  );

  /** Activate the one waiting job of `jobType`, or throw if none is waiting. */
  function activateOne(session: BojtosSession, jobType: string) {
    const [job] = session.activateJobs(jobType, 1, 30_000, "manual-control");
    if (!job)
      throw new Error(`No waiting job of type "${jobType}" to resolve.`);
    return job;
  }

  const completeJobManually = useCallback(
    (jobType: string, variablesJson: string) =>
      run((s) => {
        const job = activateOne(s, jobType);
        return s.completeJob(job.key, variablesJson);
      }),
    [run],
  );

  const throwJobError = useCallback(
    (jobType: string, errorCode: string, errorMessage: string) =>
      run((s) => {
        const job = activateOne(s, jobType);
        return s.throwError(job.key, errorCode, errorMessage);
      }),
    [run],
  );

  const correlateMessage = useCallback(
    (messageName: string, correlationKey: string, variablesJson: string) =>
      run((s) => s.correlateMessage(messageName, correlationKey, variablesJson)),
    [run],
  );

  const stepWorkers = useCallback(
    async (workers: Record<string, JobHandler>, opts?: DispatchOptions) => {
      const session = sessionRef.current;
      if (!session) return null;
      const gen = runGenRef.current;
      const pending = dispatchRound(session, workers, opts);
      inFlightRef.current = pending;
      try {
        const round = await pending;
        // Bail if the session was replaced/freed, or reset/redeployed in
        // place, while we awaited the round.
        if (sessionRef.current !== session || runGenRef.current !== gen)
          return null;
        setSnapshot(round.snapshot);
        setError(null);
        return round;
      } catch (e) {
        if (sessionRef.current !== session || runGenRef.current !== gen)
          return null;
        setSnapshot(session.snapshot());
        setError(String(e));
        return null;
      } finally {
        if (inFlightRef.current === pending) inFlightRef.current = null;
      }
    },
    [],
  );

  /** Wait for any in-flight round to finish. Never rejects — a round that threw is settled too. */
  const settle = useCallback(async () => {
    await inFlightRef.current?.catch(() => {});
  }, []);

  const reset = useCallback(async () => {
    await settle();
    const session = sessionRef.current;
    if (!session) return;
    runGenRef.current++;
    try {
      session.reset();
      deployInto(session, lastAppliedRef.current);
    } catch (e) {
      setError(String(e));
    }
  }, [deployInto, settle]);

  const redeploy = useCallback(
    async (xml: string) => {
      await settle();
      const session = sessionRef.current;
      if (!session) return null;
      runGenRef.current++;
      try {
        session.reset();
        return deployInto(session, xml);
      } catch (e) {
        setError(String(e));
        return null;
      }
    },
    [deployInto, settle],
  );

  return {
    phase,
    error,
    processIds,
    snapshot,
    createInstance,
    stepWorkers,
    completeUserTask,
    advanceTime,
    broadcastSignal,
    completeJobManually,
    throwJobError,
    correlateMessage,
    reset,
    redeploy,
    setRunImage,
    getRunImage,
  };
}
