/**
 * The one seam every brain implements. Adapted from
 * `camunda/seed-export-compliance-agent-demo` (`src/llm/*.ts`), where the
 * in-browser and API clients were deliberately given the same shape so the
 * agent wiring can't tell them apart. The runner depends only on `ChatFn`.
 */

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export type TokenListener = (delta: string) => void;

export type ChatFn = (
  messages: ChatMessage[],
  maxNewTokens?: number,
  onToken?: TokenListener,
) => Promise<string>;

/** Which brain drives the agent. */
export type BrainKind = "scripted" | "browser" | "endpoint";

/** Progress of a one-time model download / GPU load, 0–1 with a message. */
export type LoadProgress = (report: { progress: number; text: string }) => void;

export interface Brain {
  kind: BrainKind;
  /** The model id in use, once connected. */
  model: string | null;
  chat: ChatFn;
  dispose(): void;
}
