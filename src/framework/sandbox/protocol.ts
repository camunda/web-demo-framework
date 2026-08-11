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
}

/** Host → iframe: compile `source` as an `AgentHandler` and run it against `job`. */
export interface RunAgentMessage {
  kind: "run-agent";
  id: string;
  source: string;
  job: SandboxJob;
}

export type SandboxRequest = RunHandlerMessage | RunAgentMessage;

/** iframe → host: the sandbox's runtime has attached its listener. */
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
}

/** iframe → host: the call threw, or the source didn't compile. */
export interface ErrorMessage {
  kind: "error";
  id: string;
  message: string;
}

export type SandboxResponse =
  | ReadyMessage
  | TraceMessage
  | ResultMessage
  | ErrorMessage;
