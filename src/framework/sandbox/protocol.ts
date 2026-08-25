/**
 * The postMessage protocol between the host page and the sandboxed iframe
 * that actually runs reader-supplied handler/agent source. Every message is
 * plain, structured-clone-safe data — no functions cross this boundary, which
 * is what keeps the boundary real. See docs/security.md for why this exists.
 */

/** The minimal, JSON-safe slice of `ActivatedJob` the sandbox needs. */
export interface SandboxJob {
  key: string;
  type: string;
  elementId: string;
  instanceKey: string;
  variables: Record<string, unknown>;
}

/** Host → iframe: compile `source` and run it against `job`. */
export interface RunHandlerMessage {
  kind: "run-handler";
  id: string;
  source: string;
  job: SandboxJob;
  /**
   * Whether the host wired vision support for this run (contract B). When true
   * the sandbox exposes `helpers.vision`/`helpers.image`, which bridge back to
   * the host (which alone holds this run's image pixels and the active brain)
   * via `vision-request`/`image-request` messages. Absent/false leaves those
   * helpers `undefined`, exactly mirroring the host-side `helpersFor`.
   */
  hasVision?: boolean;
}

/** Host → iframe: compile `source` as an `AgentHandler` and run it against `job`. */
export interface RunAgentMessage {
  kind: "run-agent";
  id: string;
  source: string;
  job: SandboxJob;
}

export type SandboxRequest = RunHandlerMessage | RunAgentMessage;

/**
 * A `SandboxRequest` before the runner stamps its correlation `id` — kept
 * distributive over the union so the `run-handler` branch retains `hasVision`
 * (a plain `Omit<SandboxRequest, "id">` would drop keys not common to both).
 */
export type SandboxRequestInput =
  | Omit<RunHandlerMessage, "id">
  | Omit<RunAgentMessage, "id">;

/**
 * Host → iframe: the resolved value of a `helpers.vision`/`helpers.image`
 * call the sandbox delegated back to the host via a `*-request` message,
 * correlated by `callId`. The reader's source runs in the sandbox, but these
 * helpers must execute host-side (only the host holds this run's image and the
 * active vision brain), so their result crosses back as plain, clone-safe data.
 */
export interface HelperResultMessage {
  kind: "helper-result";
  id: string;
  callId: string;
  value: unknown;
}

/** Host → iframe: a delegated helper call rejected host-side. */
export interface HelperErrorMessage {
  kind: "helper-error";
  id: string;
  callId: string;
  message: string;
}

export type SandboxHostMessage =
  | SandboxRequest
  | HelperResultMessage
  | HelperErrorMessage;

/** iframe → host: the ready listener has attached. */
export interface ReadyMessage {
  kind: "ready";
}

/** iframe → host: a `trace(...)` call made during a handler's run. */
export interface TraceMessage {
  kind: "trace";
  id: string;
  text: string;
}

/** iframe → host: the call returned a value. */
export interface ResultMessage {
  kind: "result";
  id: string;
  value: unknown;
  /**
   * The process-variable names the handler read while it ran (captured in the
   * sandbox — see `iframeSource.ts`'s `recordingVariables`). Present for a
   * `run-handler` call; omitted for `run-agent`. Paired with the returned
   * value's keys (the write-set), this is what `reify.ts` uses to reconstruct
   * the run as a data-dependency DAG.
   */
  reads?: string[];
}

/** iframe → host: the call threw, or the source didn't compile. */
export interface ErrorMessage {
  kind: "error";
  id: string;
  message: string;
}

/** iframe → host: a `helpers.vision(prompt)` call made during a handler's run. */
export interface VisionRequestMessage {
  kind: "vision-request";
  id: string;
  callId: string;
  prompt: string;
}

/** iframe → host: a `helpers.image()` call made during a handler's run. */
export interface ImageRequestMessage {
  kind: "image-request";
  id: string;
  callId: string;
}

export type SandboxResponse =
  | ReadyMessage
  | TraceMessage
  | ResultMessage
  | ErrorMessage
  | VisionRequestMessage
  | ImageRequestMessage;
