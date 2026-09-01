import type { ChatMessage, LoadProgress, TokenListener } from "./types";

/**
 * Gemini Nano running **inside Chrome itself**, via the built-in Prompt API
 * (`LanguageModel`). Chrome owns the weights: nothing is bundled, nothing is
 * fetched from a model host, no API key exists, and every token is generated
 * on the reader's machine — the same "no cloud, no key" property the WebLLM
 * `BrowserBrain` has, minus the multi-hundred-MB download this app pays for.
 *
 * It is Chrome-only by construction (see `chromeAiSupported`), so the panel
 * offers it as an *extra* option beside the cross-browser brains rather than
 * as a replacement for any of them.
 *
 * Adapted for `camunda/seed-export-compliance-agent-demo` issue #7.
 */

/** What Chrome reports for `LanguageModel.availability()`. */
type Availability = "unavailable" | "downloadable" | "downloading" | "available";

interface DownloadProgressEvent extends Event {
  /** Fraction downloaded, 0–1. */
  loaded: number;
}

interface CreateMonitor {
  addEventListener(
    type: "downloadprogress",
    listener: (event: DownloadProgressEvent) => void,
  ): void;
}

interface LanguageModelSession {
  promptStreaming(
    input: string | { role: string; content: string }[],
    options?: { signal?: AbortSignal },
  ): ReadableStream<string>;
  destroy(): void;
}

interface LanguageModelStatic {
  availability(): Promise<Availability>;
  create(options?: {
    initialPrompts?: { role: string; content: string }[];
    monitor?(m: CreateMonitor): void;
    signal?: AbortSignal;
  }): Promise<LanguageModelSession>;
}

/** The model id shown once connected — Chrome exposes no version string. */
export const CHROME_MODEL_ID = "gemini-nano";

/** Chrome's built-in Prompt API, or null in any browser that lacks it. */
export function languageModelApi(): LanguageModelStatic | null {
  const api = (globalThis as { LanguageModel?: LanguageModelStatic }).LanguageModel;
  return typeof api?.create === "function" && typeof api.availability === "function"
    ? api
    : null;
}

/** True when this browser exposes the Prompt API at all. Cheap and synchronous. */
export function chromeAiSupported(): boolean {
  return languageModelApi() !== null;
}

/**
 * Why Chrome's built-in model can't be used here, if it can't (null when it
 * can). Two distinct failures worth separating: the browser has no Prompt API
 * at all, and the API exists but this device doesn't meet Chrome's bar for
 * running Gemini Nano — the second is the one people otherwise diagnose as
 * "the demo is broken".
 */
export async function chromeAiUnavailableReason(): Promise<string | null> {
  const api = languageModelApi();
  if (!api) {
    return (
      "This browser has no built-in AI model. Chrome's Prompt API (Gemini Nano) needs " +
      "Chrome 138+ on desktop Windows 10/11, macOS 13+, Linux or a Chromebook Plus. " +
      "Use the Scripted, In-browser (WebGPU) or API endpoint brain instead."
    );
  }
  let availability: Availability;
  try {
    availability = await api.availability();
  } catch (e) {
    return `Chrome couldn't report on its built-in model (${e instanceof Error ? e.message : String(e)}).`;
  }
  if (availability === "unavailable") {
    return (
      "Chrome exposes the built-in AI API here, but Gemini Nano can't run on this device. " +
      "Chrome requires ~22 GB free on the volume holding your Chrome profile, and either a " +
      "GPU with more than 4 GB of VRAM or 16 GB of RAM with 4+ CPU cores. " +
      "Check chrome://on-device-internals for the details."
    );
  }
  return null;
}

export class ChromeBrain {
  readonly kind = "chrome" as const;
  model: string | null = null;

  /**
   * Kept alive between turns purely to hold the model in memory — it is never
   * prompted. Each `chat` call builds its own session so the agent's message
   * array is the whole context, with no history carried across turns.
   */
  private warm: LanguageModelSession | null = null;
  private connecting: AbortController | null = null;

  /**
   * Make Gemini Nano ready, downloading it first if Chrome hasn't already
   * (progress reported through `onProgress`). Must be called from a user
   * gesture — Chrome requires user activation before it will start the
   * download.
   */
  async connect(onProgress?: LoadProgress): Promise<string> {
    const blocked = await chromeAiUnavailableReason();
    if (blocked) throw new Error(blocked);
    const api = languageModelApi()!;

    this.dispose();
    const controller = new AbortController();
    this.connecting = controller;
    try {
      this.warm = await api.create({
        signal: controller.signal,
        monitor: (m) => {
          m.addEventListener("downloadprogress", (e) => {
            onProgress?.({ progress: e.loaded, text: "Downloading Gemini Nano" });
          });
        },
      });
    } catch (e) {
      if (controller.signal.aborted) throw new Error("cancelled");
      const message = e instanceof Error ? e.message : String(e);
      throw new Error(
        `Chrome couldn't start its built-in model (${message}). The first run downloads ` +
          "Gemini Nano and must be triggered by a click — press Connect again, and check " +
          "chrome://on-device-internals if it keeps failing.",
      );
    } finally {
      this.connecting = null;
    }
    this.model = CHROME_MODEL_ID;
    return CHROME_MODEL_ID;
  }

  /** Abort an in-flight connect — Chrome aborts the download with the signal. */
  cancelConnect(): void {
    this.connecting?.abort();
  }

  /**
   * One streaming completion. `maxNewTokens` is accepted for the `ChatFn` seam
   * but ignored: the Prompt API exposes no output-length cap.
   */
  chat = async (
    messages: ChatMessage[],
    _maxNewTokens?: number,
    onToken?: TokenListener,
  ): Promise<string> => {
    if (!this.model) throw new Error("ChromeBrain.chat called before connect()");
    const api = languageModelApi();
    if (!api) throw new Error("Chrome's built-in AI API went away.");

    const system = messages.filter((m) => m.role === "system");
    const turns = messages.filter((m) => m.role !== "system");
    const session = await api.create(
      system.length ? { initialPrompts: system } : undefined,
    );
    try {
      // Read with a reader rather than `for await`: `lib.dom` still types
      // `ReadableStream` as non-async-iterable, even though Chrome's is.
      const reader = session.promptStreaming(turns).getReader();
      let full = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        if (!value) continue;
        full += value;
        onToken?.(value);
      }
      return full;
    } finally {
      session.destroy();
    }
  };

  dispose(): void {
    // Also abort a connect still in flight: `useBrain` disposes on unmount, and
    // Chrome would otherwise keep downloading the model for a page that's gone.
    this.connecting?.abort();
    this.connecting = null;
    this.warm?.destroy();
    this.warm = null;
    this.model = null;
  }
}
