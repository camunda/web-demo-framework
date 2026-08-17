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
  /** Approximate download size shown to the reader before they opt in. */
  downloadLabel: string;
  /** GPU memory WebLLM's own config says this model needs, in MB. */
  vramRequiredMB?: number;
  /** WebGPU features (e.g. "shader-f16") the model's build requires. */
  requiredFeatures?: string[];
}

/**
 * Curated shortlist — all ~0.3–2 B instruct models small enough for a tab.
 *
 * Default is Qwen2.5 1.5B: per `@mlc-ai/web-llm`'s own `prebuiltAppConfig`,
 * it needs slightly less VRAM than SmolLM2 1.7B (~1.63 GB vs ~1.77 GB) *and*
 * declares no `required_features`, meaning — unlike SmolLM2, which requires
 * `shader-f16` — it runs on WebGPU adapters that don't expose that feature.
 * That broader compatibility matters more here than a marginal quality edge:
 * a brain that fails to connect on a chunk of real hardware isn't "the best
 * local experience", it's a dead end. SmolLM2 1.7B stays in the shortlist as
 * the larger, `shader-f16`-only alternative.
 */
const CURATED_MODEL_IDS: { id: string; label: string; downloadLabel: string }[] = [
  {
    id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 1.5B",
    downloadLabel: "~1.0 GB",
  },
  {
    id: "SmolLM2-1.7B-Instruct-q4f16_1-MLC",
    label: "SmolLM2 1.7B",
    downloadLabel: "~1.1 GB",
  },
  {
    id: "Llama-3.2-1B-Instruct-q4f16_1-MLC",
    label: "Llama 3.2 1B",
    downloadLabel: "~0.7 GB",
  },
  {
    id: "gemma-2-2b-it-q4f16_1-MLC",
    label: "Gemma 2 2B",
    downloadLabel: "~1.5 GB",
  },
  // The f32 builds below are the fallback tier: same models, no `shader-f16`
  // requirement, at the cost of a bigger download and more VRAM. A driver whose
  // f16 shader path is broken (or absent) fails every f16 build identically, and
  // "every model fails" reads as "the feature is broken" rather than "try a
  // different quantisation" — so the alternative has to be on the menu.
  {
    id: "Llama-3.2-1B-Instruct-q4f32_1-MLC",
    label: "Llama 3.2 1B (f32, wider GPU support)",
    downloadLabel: "~1.1 GB",
  },
  {
    id: "SmolLM2-360M-Instruct-q4f32_1-MLC",
    label: "SmolLM2 360M (tiny, f32)",
    downloadLabel: "~0.6 GB",
  },
  {
    id: "SmolLM2-360M-Instruct-q4f16_1-MLC",
    label: "SmolLM2 360M (tiny)",
    downloadLabel: "~0.3 GB",
  },
];

/** Look up a curated model's real vram/feature requirements from WebLLM's own config. */
function lookupRequirements(
  modelId: string,
): Pick<BrowserModel, "vramRequiredMB" | "requiredFeatures"> {
  // Imported lazily so this module stays free of the WebLLM bundle until a
  // browser-model list is actually rendered.
  return requirementsCache.get(modelId) ?? {};
}

const requirementsCache = new Map<
  string,
  Pick<BrowserModel, "vramRequiredMB" | "requiredFeatures">
>();

/** Populate real vram/feature data from WebLLM's config — best-effort, cached. */
async function loadRequirements(): Promise<void> {
  if (requirementsCache.size > 0) return;
  const { prebuiltAppConfig } = await import("@mlc-ai/web-llm");
  for (const record of prebuiltAppConfig.model_list) {
    requirementsCache.set(record.model_id, {
      vramRequiredMB: record.vram_required_MB,
      requiredFeatures: record.required_features,
    });
  }
}

export const BROWSER_MODELS: BrowserModel[] = CURATED_MODEL_IDS.map((m) => ({
  id: m.id,
  label: `${m.label} (${m.downloadLabel})`,
  downloadLabel: m.downloadLabel,
  ...lookupRequirements(m.id),
}));

export const DEFAULT_BROWSER_MODEL = BROWSER_MODELS[0].id;

/**
 * Fill in real `vramRequiredMB` / `requiredFeatures` for the curated shortlist
 * from WebLLM's own `prebuiltAppConfig`. Call once before showing model
 * requirements in the UI; safe to call repeatedly (cached after the first).
 *
 * Returns a fresh array (and fresh model objects) rather than mutating
 * `BROWSER_MODELS` in place — callers that store the result in React state
 * (e.g. `setModels(...)`) need a new reference to reliably trigger a
 * re-render once the async load resolves.
 */
export async function loadBrowserModelRequirements(): Promise<BrowserModel[]> {
  await loadRequirements();
  return BROWSER_MODELS.map((m) => ({ ...m, ...lookupRequirements(m.id) }));
}

/** True when this browser exposes the WebGPU adapter WebLLM needs. */
export async function webgpuAvailable(): Promise<boolean> {
  return (await webgpuUnavailableReason()) === null;
}

/**
 * Why WebGPU isn't usable here, if it isn't — checked and explained *before*
 * a Connect attempt rather than surfaced only after one fails.
 */
export async function webgpuUnavailableReason(): Promise<string | null> {
  const gpu = (
    navigator as unknown as {
      gpu?: { requestAdapter(): Promise<GPUAdapterLike | null> };
    }
  ).gpu;
  if (!gpu)
    return (
      "This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, " +
      "or Safari 17+ with hardware acceleration on, or pick the Scripted or Endpoint brain."
    );
  let adapter: GPUAdapterLike | null;
  try {
    adapter = await gpu.requestAdapter();
  } catch (e) {
    return `WebGPU adapter request failed (${e instanceof Error ? e.message : String(e)}). Try the Scripted or Endpoint brain instead.`;
  }
  if (!adapter)
    return (
      "This browser supports the WebGPU API, but no GPU adapter is available — " +
      "hardware acceleration may be off, or this device/VM has no usable GPU. " +
      "Pick the Scripted or Endpoint brain instead."
    );
  return null;
}

interface GPUAdapterLike {
  features?: { has(name: string): boolean };
  limits?: Record<string, number>;
}

/**
 * Best-effort available GPU memory, in MB, or `null` when it can't be
 * estimated. There is no standard WebGPU/Web API for discrete GPU VRAM;
 * `navigator.deviceMemory` reports approximate *system* RAM (capped at 8 GB
 * by spec) and is the same coarse proxy WebLLM's own get-started demos use —
 * accurate for integrated/shared-memory GPUs (most laptops), a conservative
 * under-estimate for a discrete GPU with its own VRAM pool.
 */
export function estimateAvailableVramMB(): number | null {
  const gb = (navigator as unknown as { deviceMemory?: number }).deviceMemory;
  return typeof gb === "number" ? gb * 1024 : null;
}

/**
 * Why a model is unlikely to fit, if it isn't — checked before Connect using
 * WebLLM's own declared `vram_required_MB` for the model versus the
 * best-effort estimate above. Returns `null` when it looks fine *or* when
 * there isn't enough information to say either way (never blocks on a
 * guess — only warns when the estimate is clearly short).
 */
export function insufficientVramReason(
  model: BrowserModel,
  availableMB: number | null = estimateAvailableVramMB(),
): string | null {
  if (availableMB == null || model.vramRequiredMB == null) return null;
  if (availableMB >= model.vramRequiredMB) return null;
  return (
    `${model.label} needs roughly ${Math.round(model.vramRequiredMB)} MB of GPU memory; ` +
    `this device looks like it has about ${Math.round(availableMB)} MB available. ` +
    "It may still work, but expect it to fail or fall back to slow shared memory — " +
    "try a smaller model (e.g. SmolLM2 360M) if it doesn't load."
  );
}

/** Whether `modelId`'s weights are already in this browser's cache from a prior run. */
export async function isModelCached(modelId: string): Promise<boolean> {
  try {
    const { hasModelInCache } = await import("@mlc-ai/web-llm");
    return await hasModelInCache(modelId);
  } catch {
    return false;
  }
}

/**
 * Whether an error means the GPU device went away underneath us, rather than
 * anything about the model or the network.
 *
 * Windows resets a GPU that stops responding (`DXGI_ERROR_DEVICE_HUNG` /
 * `DEVICE_REMOVED`), and once that happens every tvmjs handle the engine holds
 * reports itself disposed. The messages come from three layers — Dawn, the
 * WebGPU spec, and tvmjs — so this matches on all of them.
 */
export function isDeviceLostError(message: string): boolean {
  return /device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(
    message,
  );
}

/** Advice that fits a dead GPU, rather than "check your connection". */
export function deviceLostAdvice(): string {
  return (
    "The GPU device was lost — the driver reset while the model was loading or running. " +
    "This is a browser/driver-level failure, not a problem with the model: fully quit and " +
    "reopen the browser (a lost device usually persists for the life of the GPU process), " +
    "check chrome://gpu still reports hardware acceleration, and update your GPU driver if " +
    "it recurs. The Scripted and Endpoint brains don't use the GPU at all."
  );
}

export class BrowserBrain {
  readonly kind = "browser" as const;
  model: string | null = null;

  private engine: MLCEngine | null = null;
  private worker: Worker | null = null;
  /** Bumped on every connect()/cancelConnect() so a stale load can be ignored. */
  private generation = 0;

  async connect(
    modelId: string = DEFAULT_BROWSER_MODEL,
    onProgress?: LoadProgress,
  ): Promise<string> {
    const blocked = await webgpuUnavailableReason();
    if (blocked) throw new Error(blocked);
    if (this.engine && this.model === modelId) return modelId;

    const myGeneration = ++this.generation;
    const initProgressCallback = (report: InitProgressReport) => {
      if (myGeneration !== this.generation) return; // superseded by cancel/reconnect
      onProgress?.({ progress: report.progress ?? 0, text: report.text ?? "" });
    };

    // Always a fresh engine and worker, never `engine.reload()`. Reload keeps
    // the same underlying device, so once one has been lost the reused engine
    // stays poisoned: `reload()` can even resolve against a dead device,
    // leaving this brain reporting "connected" over something that throws on
    // first use. Tearing down and rebuilding is what a page refresh does, and
    // it is what actually recovers.
    this.teardown();

    let loaded: MLCEngine;
    let worker: Worker | undefined;
    try {
      // Load WebLLM only when a user actually opts in — it's a multi-MB bundle
      // the scripted and endpoint paths never need.
      const { CreateWebWorkerMLCEngine } = await import("@mlc-ai/web-llm");
      // The engine runs in a worker, not on this thread. See the comment in
      // `webllm.worker.ts`: GPU work submitted from a thread that is also doing
      // React/bpmn-js/Monaco layout is what hangs the driver.
      worker = new Worker(new URL("./webllm.worker.ts", import.meta.url), {
        type: "module",
      });
      loaded = (await CreateWebWorkerMLCEngine(worker, modelId, {
        initProgressCallback,
      })) as unknown as MLCEngine;
    } catch (e) {
      worker?.terminate();
      if (myGeneration !== this.generation) throw new Error("cancelled");
      const message = e instanceof Error ? e.message : String(e);
      if (isDeviceLostError(message)) {
        throw new Error(
          `Couldn't load ${modelId} in the browser (${message}). ${deviceLostAdvice()}`,
        );
      }
      const needsShaderF16 = BROWSER_MODELS.find(
        (m) => m.id === modelId,
      )?.requiredFeatures?.includes("shader-f16");
      throw new Error(
        `Couldn't load ${modelId} in the browser (${message}). ` +
          (needsShaderF16
            ? "This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain."
            : "Try a smaller model, check your connection, or use the endpoint brain instead."),
      );
    }
    if (myGeneration !== this.generation) {
      // The reader cancelled while this load was in flight. The bytes are
      // now cached for next time regardless, but don't surface as "connected".
      void loaded.unload().catch(() => {});
      worker?.terminate();
      throw new Error("cancelled");
    }
    this.engine = loaded;
    this.worker = worker ?? null;
    this.model = modelId;
    return modelId;
  }

  /** Drop the engine and its worker. Safe to call when there is nothing to drop. */
  private teardown(): void {
    const { engine, worker } = this;
    this.engine = null;
    this.worker = null;
    this.model = null;
    void engine?.unload().catch(() => {});
    worker?.terminate();
  }

  /**
   * Best-effort cancel of an in-flight connect(). WebLLM exposes no abort for
   * the initial download/compile, so this doesn't stop network activity —
   * it stops the UI from waiting on it and tears down anything that did
   * finish loading, so a reader isn't left staring at a stuck progress bar.
   */
  cancelConnect(): void {
    this.generation++;
  }

  chat = async (
    messages: ChatMessage[],
    maxNewTokens = 512,
    onToken?: TokenListener,
  ): Promise<string> => {
    const engine = this.engine;
    if (!engine || !this.model)
      throw new Error("BrowserBrain.chat called before connect()");
    try {
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
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      if (isDeviceLostError(message)) {
        // Everything this engine holds is dead. Drop it so the next connect
        // rebuilds instead of hitting the "same model, already connected"
        // early return and handing back the same corpse.
        this.teardown();
        throw new Error(`The in-browser model stopped: ${deviceLostAdvice()}`);
      }
      throw e;
    }
  };

  dispose(): void {
    this.generation++;
    this.teardown();
  }
}
