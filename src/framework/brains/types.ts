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
export type BrainKind = "scripted" | "browser" | "chrome" | "endpoint";

/**
 * The vision seam. A brain that reads an **image** and returns text — the
 * image analogue of `ChatFn`. It sits *beside* `ChatFn`/`Brain` rather than
 * inside them: the text `Brain.chat` contract is untouched, and a
 * `VisionBrainKind` is kept separate from `BrainKind` (they select different
 * capabilities — a text brain has no `read`, a vision brain has no `chat`), so
 * existing `BrainKind` consumers (`useBrain`, `BrainPanel`, the `Brain`
 * interface) are unaffected.
 *
 * `image` is any source the model backend can consume: a data URL / http(s)
 * URL string, a `Blob`/`File` (e.g. an uploaded photo), or an `ImageBitmap`.
 * The `scripted-vision` fallback additionally treats a bare string as the
 * **seed image id** it looks up in its injected ground-truth mapping — so to
 * exercise the deterministic scripted fallback, pass a seed id string, **not**
 * a URL (a URL is never fetched by `scripted-vision` and always resolves to the
 * placeholder).
 */
export type VisionImage = string | Blob | ImageBitmap;

export type VisionFn = (
  image: VisionImage,
  prompt: string,
  onToken?: TokenListener,
) => Promise<string>;

export type VisionBrainKind = "scripted-vision" | "browser-vision";

export interface VisionBrain {
  kind: VisionBrainKind;
  /** The model id in use, once connected. `null` for the scripted brain. */
  model: string | null;
  read: VisionFn;
  dispose(): void;
}

/** Progress of a one-time model download / GPU load, 0–1 with a message. */
export type LoadProgress = (report: { progress: number; text: string }) => void;

export interface Brain {
  kind: BrainKind;
  /** The model id in use, once connected. */
  model: string | null;
  chat: ChatFn;
  dispose(): void;
}
