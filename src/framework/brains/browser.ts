import type { MLCEngine, InitProgressReport } from "@mlc-ai/web-llm";
import type { ChatMessage, LoadProgress, TokenListener } from "./types";

/**
 * A real quantised LLM running **in the browser** on WebGPU, via MLC's WebLLM.
 * No server, no API key: the weights are fetched once (then browser-cached) and
 * every token is generated on the user's GPU. Adapted from
 * `camunda/seed-export-compliance-agent-demo` (`src/llm/browser-llm.ts`).
 *
 * This is the only live brain that works from a hosted https page.
 */

export interface BrowserModel {
  id: string;
  label: string;
}

/**
 * Curated shortlist — all ~0.3–2 B instruct models small enough for a tab.
 * SmolLM2 1.7B leads because it follows the tool-call format most reliably at
 * this size; the rest trade quality for download size and VRAM.
 */
export const BROWSER_MODELS: BrowserModel[] = [
  { id: "SmolLM2-1.7B-Instruct-q4f16_1-MLC", label: "SmolLM2 1.7B (~1.1 GB)" },
  { id: "Llama-3.2-1B-Instruct-q4f16_1-MLC", label: "Llama 3.2 1B (~0.7 GB)" },
  { id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC", label: "Qwen2.5 1.5B (~1.0 GB)" },
  { id: "gemma-2-2b-it-q4f16_1-MLC", label: "Gemma 2 2B (~1.5 GB)" },
  {
    id: "SmolLM2-360M-Instruct-q4f16_1-MLC",
    label: "SmolLM2 360M (tiny, ~0.3 GB)",
  },
];

export const DEFAULT_BROWSER_MODEL = BROWSER_MODELS[0].id;

/** True when this browser exposes the WebGPU adapter WebLLM needs. */
export async function webgpuAvailable(): Promise<boolean> {
  const gpu = (navigator as unknown as { gpu?: { requestAdapter(): Promise<unknown> } })
    .gpu;
  if (!gpu) return false;
  try {
    return (await gpu.requestAdapter()) != null;
  } catch {
    return false;
  }
}

export class BrowserBrain {
  readonly kind = "browser" as const;
  model: string | null = null;

  private engine: MLCEngine | null = null;

  async connect(
    modelId: string = DEFAULT_BROWSER_MODEL,
    onProgress?: LoadProgress,
  ): Promise<string> {
    if (!(await webgpuAvailable()))
      throw new Error(
        "WebGPU isn't available in this browser. Use a recent Chrome/Edge (or Safari 17+) " +
          "with hardware acceleration on, or pick the Scripted or Endpoint brain.",
      );
    if (this.engine && this.model === modelId) return modelId;

    const initProgressCallback = (report: InitProgressReport) =>
      onProgress?.({ progress: report.progress ?? 0, text: report.text ?? "" });

    try {
      if (this.engine) {
        await this.engine.reload(modelId);
      } else {
        // Load WebLLM only when a user actually opts in — it's a multi-MB
        // bundle the scripted and endpoint paths never need.
        const { CreateMLCEngine } = await import("@mlc-ai/web-llm");
        this.engine = await CreateMLCEngine(modelId, { initProgressCallback });
      }
    } catch (e) {
      throw new Error(
        `Couldn't load ${modelId} in the browser (${e instanceof Error ? e.message : String(e)}). ` +
          "This model needs WebGPU with shader-f16; try a smaller model or the endpoint brain.",
      );
    }
    this.model = modelId;
    return modelId;
  }

  chat = async (
    messages: ChatMessage[],
    maxNewTokens = 512,
    onToken?: TokenListener,
  ): Promise<string> => {
    const engine = this.engine;
    if (!engine || !this.model)
      throw new Error("BrowserBrain.chat called before connect()");
    const stream = await engine.chat.completions.create({
      messages,
      temperature: 0,
      max_tokens: maxNewTokens,
      stream: true,
    });
    let full = "";
    for await (const chunk of stream) {
      const delta = chunk.choices[0]?.delta?.content ?? "";
      if (delta) {
        full += delta;
        onToken?.(delta);
      }
    }
    return full;
  };

  dispose(): void {
    void this.engine?.unload().catch(() => {});
    this.engine = null;
    this.model = null;
  }
}
