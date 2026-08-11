// A `BojtosEngineClient`: an implementation of jwulf/nano-ide's `EngineClient`
// seam (`packages/urban/src/runtime/core/host.ts`) backed by this repo's
// `@nanobpm/bojtos-kit` `BojtosSession` — the in-browser wasm engine binding
// every example in this repo already runs on.
//
// SPIKE SCOPE (issue #23): this file exists to answer one question — can an
// Urban app (a `nano.app.json` manifest + `processes/*.bpmn` + `forms/*.form`
// + `workers/*.ts`) deploy into this repo's browser runner? It is NOT a
// dependency of the framework and nothing in `src/` imports it. See
// `../../docs/spike-urban-bojtos-findings.md` for the write-up and
// recommendation this spike produced.
//
// `@nanobpm/urban` (jwulf/nano-ide) is not installable here (private, not
// published to this repo's registry), so `EngineClient` and its supporting
// types are re-declared below, structurally, from the upstream source at
// packages/urban/src/runtime/core/host.ts (commit ad18264a). An implementation
// of the re-declared interface is assignable to the real one by structural
// typing, the same trick `@nanobpm/urban-testkit`'s own `WasmEngineClient`
// (backed directly by `@nanobpm/engine-wasm`'s `TestEngine`, not bojtos-kit)
// uses for the same reason.

import {
  createBojtosSession,
  type BojtosSession,
  type Snapshot,
  type WasmSource,
} from "@nanobpm/bojtos-kit";
import { dispatchWorkers, type JobHandler as BojtosJobHandler } from "@nanobpm/bojtos-kit";

// --- EngineClient contract, re-declared (see file header) -------------------

export type ProcessInstanceState = "ACTIVE" | "COMPLETED" | "TERMINATED";

export interface ProcessInstanceSnapshot {
  readonly processInstanceKey: string;
  readonly state: ProcessInstanceState;
}

export interface EngineJob<In extends object = Record<string, unknown>> {
  jobKey: string;
  jobType: string;
  processInstanceKey?: string;
  elementId?: string;
  variables: In;
}

export type JobHandler = (
  job: EngineJob,
) => Promise<Record<string, unknown> | void> | Record<string, unknown> | void;

export class BpmnError extends Error {
  readonly errorCode: string;
  constructor(errorCode: string, message?: string) {
    super(message ?? errorCode);
    this.name = "BpmnError";
    this.errorCode = errorCode;
  }
}

export function isBpmnError(err: unknown): err is { errorCode: string; message?: string } {
  if (typeof err !== "object" || err === null) return false;
  const errorCode = "errorCode" in err ? (err as { errorCode?: unknown }).errorCode : undefined;
  return typeof errorCode === "string" && errorCode.length > 0;
}

export interface WorkerSubscription {
  readonly jobType: string;
  unsubscribe(): Promise<void>;
}

export interface EngineClient {
  deployResources(
    resources: { name: string; content: string; contentType: string }[],
  ): Promise<{ deployed: number }>;
  createInstance(input: {
    processDefinitionId: string;
    variables?: Record<string, unknown>;
    awaitCompletion?: boolean;
  }): Promise<{ processInstanceKey: string; variables?: Record<string, unknown> }>;
  cancelInstance(input: { processInstanceKey: string }): Promise<void>;
  publishMessage(input: {
    name: string;
    correlationKey?: string;
    variables?: Record<string, unknown>;
  }): Promise<void>;
  searchUserTasks(filter?: {
    processInstanceKey?: string;
    assignee?: string;
    candidateGroup?: string;
  }): Promise<{ userTaskKey: string; elementId?: string; variables?: Record<string, unknown> }[]>;
  completeUserTask(userTaskKey: string, variables?: Record<string, unknown>): Promise<void>;
  searchProcessInstances(filter?: {
    processInstanceKeys?: string[];
    state?: ProcessInstanceState;
  }): Promise<ProcessInstanceSnapshot[]>;
  registerWorker(
    jobType: string,
    handler: JobHandler,
    options?: { workerName?: string; maxParallelJobs?: number; fetchVariables?: string[] },
  ): Promise<WorkerSubscription>;
  close(): Promise<void>;
}

// --- Content-type routing ----------------------------------------------------

/** How `deployResources` classifies a resource by its `contentType`/name. */
export type UrbanResourceKind = "bpmn" | "form" | "dmn" | "unknown";

export function classifyResource(r: { name: string; contentType: string }): UrbanResourceKind {
  const ct = r.contentType.toLowerCase();
  const name = r.name.toLowerCase();
  if (ct.includes("bpmn") || name.endsWith(".bpmn")) return "bpmn";
  if (ct.includes("form") || name.endsWith(".form")) return "form";
  if (ct.includes("dmn") || name.endsWith(".dmn")) return "dmn";
  return "unknown";
}

/** Map the wasm engine's process-instance `state` string onto the
 *  transport-agnostic {@link ProcessInstanceState}. Mirrors
 *  `@nanobpm/urban-testkit`'s `wasmStateToProcessInstanceState`. */
export function bojtosStateToProcessInstanceState(
  raw: unknown,
): ProcessInstanceState | undefined {
  if (typeof raw !== "string") return undefined;
  switch (raw.toUpperCase()) {
    case "ACTIVE":
      return "ACTIVE";
    case "COMPLETED":
      return "COMPLETED";
    case "TERMINATED":
    case "TERMINATING":
      return "TERMINATED";
    default:
      return undefined;
  }
}

interface RegisteredWorker {
  handler: JobHandler;
  fetchVariables?: readonly string[];
}

function pick(source: Record<string, unknown>, keys: readonly string[]): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const k of keys) if (Object.hasOwn(source, k)) out[k] = source[k];
  return out;
}

/**
 * An {@link EngineClient} backed by an in-process `@nanobpm/bojtos-kit`
 * `BojtosSession`. See the file header for scope and the mapping this class
 * implements:
 *
 * - `deployResources` — BPMN resources go to `session.deploy(xml)`; `.form`
 *   resources are captured in {@link forms} (this repo's runner has no engine
 *   form-deploy path — a form isn't an engine resource here, same as the real
 *   framework's `ExampleDef.forms`); `.dmn` resources are **rejected**, loudly
 *   (`deployResources` throws), because there is currently no DMN deploy path
 *   in this repo's engine binding (confirmed in `docs/engine-coverage.md`,
 *   issue #15/#6) — appearing to accept a `.dmn` deployment that silently does
 *   nothing would be worse than refusing it outright.
 * - `createInstance` — when `awaitCompletion` is set, drains registered
 *   workers to quiescence (bojtos-kit is pull-based; a live engine would
 *   push) and reads the instance back out of the snapshot; otherwise returns
 *   immediately without draining, so the caller controls whether workers run
 *   synchronously.
 * - `cancelInstance` — `session.cancelInstance` directly.
 * - `publishMessage` — `session.correlateMessage`, then drains (any job the
 *   correlation newly unblocks needs serving).
 * - `searchUserTasks` — filters `snapshot().userTasks` by state `"Created"`.
 * - `completeUserTask` — `session.completeUserTask`, then drains.
 * - `registerWorker` — Urban pushes (a live engine calls the handler); Bojtos
 *   pulls (`activateJobs` + `completeJob`/`failJob`). This adapter bridges the
 *   two by collecting handlers into a map driven by {@link dispatchWorkers}
 *   whenever a mutating call might have created new work; unsubscribe removes
 *   the handler from that map.
 * - `close` — `session.free()`.
 *
 * Known gap: a handler throwing {@link BpmnError} is NOT routed to
 * `session.throwError` (a modelled BPMN error, caught by an error boundary
 * event) — it is just failed like any other throw. `bojtos-kit`'s own
 * `dispatchWorkers`/`dispatchRound` loop (which this class's `#drain` uses)
 * has the same limitation: it only supports `completeJob`/`failJob`, not
 * `throwError` — see the "Error boundary event" row in
 * `docs/engine-coverage.md`, which notes exercising that path means calling
 * `activateJobs` + `throwError` directly against the session. `BpmnError`/
 * `isBpmnError` are kept here only because the real `EngineClient` contract
 * mentions them; wiring them through would mean bypassing `dispatchWorkers`
 * with a custom drain loop, which is out of scope for this spike.
 */
export class BojtosEngineClient implements EngineClient {
  #session: BojtosSession;
  #workers = new Map<string, RegisteredWorker>();

  /** `.form` resources deployed so far, keyed by the `id` field in their JSON
   *  schema. Not an engine resource under Bojtos — see the class doc — so this
   *  is the "form map" the spike's brief asks the deploy routing to feed. */
  readonly forms = new Map<string, unknown>();

  private constructor(session: BojtosSession) {
    this.#session = session;
  }

  static async create(opts?: { wasm?: WasmSource }): Promise<BojtosEngineClient> {
    const session = await createBojtosSession(opts);
    return new BojtosEngineClient(session);
  }

  async deployResources(
    resources: { name: string; content: string; contentType: string }[],
  ): Promise<{ deployed: number }> {
    let deployed = 0;
    for (const r of resources) {
      const kind = classifyResource(r);
      if (kind === "bpmn") {
        this.#session.deploy(r.content);
        deployed++;
      } else if (kind === "form") {
        const schema = JSON.parse(r.content) as { id?: string };
        if (!schema.id) {
          throw new Error(`form resource "${r.name}" has no "id" — cannot register it`);
        }
        this.forms.set(schema.id, schema);
        deployed++;
      } else if (kind === "dmn") {
        // Reject loudly rather than silently accepting a resource type the
        // underlying engine binding has no deploy path for (see class doc).
        throw new Error(
          `deployResources: "${r.name}" is a DMN resource — this BojtosEngineClient has no ` +
            `DMN deploy path (bojtos-kit/@nanobpm/engine-wasm has none as of the version ` +
            `pinned in package.json; see docs/engine-coverage.md). Refusing rather than ` +
            `appearing to deploy it.`,
        );
      } else {
        throw new Error(`deployResources: unrecognized resource "${r.name}" (contentType "${r.contentType}")`);
      }
    }
    return { deployed };
  }

  async createInstance(input: {
    processDefinitionId: string;
    variables?: Record<string, unknown>;
    awaitCompletion?: boolean;
  }): Promise<{ processInstanceKey: string; variables?: Record<string, unknown> }> {
    const snap = this.#session.createInstance(
      input.processDefinitionId,
      JSON.stringify(input.variables ?? {}),
    );
    const processInstanceKey = requireCreated(snap.created);
    if (input.awaitCompletion) {
      await this.#drain();
      return { processInstanceKey, variables: this.#instanceVariables(processInstanceKey) };
    }
    return { processInstanceKey };
  }

  async cancelInstance(input: { processInstanceKey: string }): Promise<void> {
    this.#session.cancelInstance(input.processInstanceKey);
  }

  async publishMessage(input: {
    name: string;
    correlationKey?: string;
    variables?: Record<string, unknown>;
  }): Promise<void> {
    this.#session.correlateMessage(
      input.name,
      input.correlationKey ?? "",
      JSON.stringify(input.variables ?? {}),
    );
    await this.#drain();
  }

  async searchUserTasks(filter?: {
    processInstanceKey?: string;
    assignee?: string;
    candidateGroup?: string;
  }): Promise<{ userTaskKey: string; elementId?: string; variables?: Record<string, unknown> }[]> {
    return this.#session
      .snapshot()
      .userTasks.filter((t) => t.state === "Created")
      .filter((t) => filter?.processInstanceKey === undefined || t.instanceKey === filter.processInstanceKey)
      .filter((t) => filter?.assignee === undefined || t.assignee === filter.assignee)
      .filter(
        (t) => filter?.candidateGroup === undefined || t.candidateGroups.includes(filter.candidateGroup),
      )
      .map((t) => ({ userTaskKey: t.key, elementId: t.elementId }));
  }

  async completeUserTask(userTaskKey: string, variables?: Record<string, unknown>): Promise<void> {
    this.#session.completeUserTask(userTaskKey, JSON.stringify(variables ?? {}));
    await this.#drain();
  }

  async searchProcessInstances(filter?: {
    processInstanceKeys?: string[];
    state?: ProcessInstanceState;
  }): Promise<ProcessInstanceSnapshot[]> {
    const wanted = filter?.processInstanceKeys ? new Set(filter.processInstanceKeys) : undefined;
    const out: ProcessInstanceSnapshot[] = [];
    for (const inst of this.#session.snapshot().instances) {
      if (wanted && !wanted.has(inst.key)) continue;
      const state = bojtosStateToProcessInstanceState(inst.state);
      if (state === undefined) continue;
      if (filter?.state !== undefined && state !== filter.state) continue;
      out.push({ processInstanceKey: inst.key, state });
    }
    return out;
  }

  async registerWorker(
    jobType: string,
    handler: JobHandler,
    options?: { workerName?: string; maxParallelJobs?: number; fetchVariables?: string[] },
  ): Promise<WorkerSubscription> {
    this.#workers.set(jobType, { handler, fetchVariables: options?.fetchVariables });
    // A freshly-registered worker should pick up jobs already waiting for its
    // type — mirrors the reference `WasmEngineClient` in @nanobpm/urban-testkit.
    await this.#drain();
    const workers = this.#workers;
    return {
      jobType,
      async unsubscribe() {
        workers.delete(jobType);
      },
    };
  }

  async close(): Promise<void> {
    this.#workers.clear();
    this.#session.free();
  }

  // --- internals -------------------------------------------------------------

  #instanceVariables(key: string): Record<string, unknown> {
    return this.#session.snapshot().instances.find((i) => i.key === key)?.variables ?? {};
  }

  /** Drive every registered worker to quiescence via bojtos-kit's own
   *  `dispatchWorkers`, translating between its `ActivatedJob` shape and the
   *  `EngineClient`-shaped {@link EngineJob} the caller's handler expects. */
  async #drain(): Promise<Snapshot> {
    const bojtosWorkers: Record<string, BojtosJobHandler> = {};
    for (const [jobType, reg] of this.#workers) {
      bojtosWorkers[jobType] = async (job) => {
        const variables = reg.fetchVariables ? pick(job.variables, reg.fetchVariables) : job.variables;
        const engineJob: EngineJob = {
          jobKey: job.key,
          jobType: job.type,
          processInstanceKey: job.instanceKey,
          elementId: job.elementId,
          variables,
        };
        return (await reg.handler(engineJob)) ?? undefined;
      };
    }
    const result = await dispatchWorkers(this.#session, bojtosWorkers);
    return result.snapshot;
  }
}

function requireCreated(created: string | undefined): string {
  if (created == null || created === "") {
    throw new Error("engine createInstance response missing `created` instance key");
  }
  return created;
}

export function createBojtosEngineClient(opts?: { wasm?: WasmSource }): Promise<BojtosEngineClient> {
  return BojtosEngineClient.create(opts);
}
