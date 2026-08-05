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
  reset(): void;
}

export function useExampleRun({ bpmn }: { bpmn: string }): ExampleRunControls {
  const sessionRef = useRef<BojtosSession | null>(null);
  const [phase, setPhase] = useState<EnginePhase>("loading");
  const [error, setError] = useState<string | null>(null);
  const [processIds, setProcessIds] = useState<string[]>([]);
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);

  const deployInto = useCallback(
    (session: BojtosSession) => {
      const res = session.deploy(bpmn);
      setProcessIds(res.processIds);
      setSnapshot(null);
      setError(null);
    },
    [bpmn],
  );

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
          deployInto(session);
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
    };
  }, [deployInto]);

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

  const stepWorkers = useCallback(
    async (workers: Record<string, JobHandler>, opts?: DispatchOptions) => {
      const session = sessionRef.current;
      if (!session) return null;
      try {
        const round = await dispatchRound(session, workers, opts);
        // Bail if the session was replaced/freed while we awaited the round.
        if (sessionRef.current !== session) return null;
        setSnapshot(round.snapshot);
        setError(null);
        return round;
      } catch (e) {
        if (sessionRef.current !== session) return null;
        setSnapshot(session.snapshot());
        setError(String(e));
        return null;
      }
    },
    [],
  );

  const reset = useCallback(() => {
    const session = sessionRef.current;
    if (!session) return;
    try {
      session.reset();
      deployInto(session);
    } catch (e) {
      setError(String(e));
    }
  }, [deployInto]);

  return {
    phase,
    error,
    processIds,
    snapshot,
    createInstance,
    stepWorkers,
    completeUserTask,
    reset,
  };
}
