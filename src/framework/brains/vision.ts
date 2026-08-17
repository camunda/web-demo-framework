import type { LoadProgress, TokenListener, VisionBrain, VisionImage } from "./types";
import { webgpuUnavailableReason } from "./webgpu";

/**
 * The **vision** counterpart to `brains/browser.ts`: an image→text brain that
 * reads a photo and returns text, running entirely in the browser on WebGPU via
 * Transformers.js (`@huggingface/transformers`). No server, no API key — the
 * ONNX weights are fetched once (then browser-cached) and every token is
 * generated on the reader's GPU, the same shape the WebLLM `BrowserBrain` has.
 *
 * Beside it sits a deterministic, offline `scripted-vision` brain: the CI brain
 * and the WebGPU-absent fallback. It looks a **seed image id** up in a
 * caller-injected ground-truth mapping and returns a clearly-marked placeholder
 * for anything it doesn't recognise (an uploaded photo, an unknown id).
 *
 * This module publishes **contract A** of the vision epic (#67): the
 * `VisionImage`/`VisionFn`/`VisionBrain` types (in `types.ts`), the connectable
 * `BrowserVisionBrain`, and the injectable `scripted-vision` lookup signature.
 */

export interface VisionModel {
  id: string;
  label: string;
  /** Approximate download size shown to the reader before they opt in. */
  downloadLabel: string;
}

/**
 * Curated shortlist — Florence-2, Microsoft's small vision-language model, in
 * onnx-community's WebGPU-ready ONNX build. Florence-2 is the natural fit here:
 * it exposes an explicit `<OCR>` / `<OCR_WITH_REGION>` task (the region variant
 * also returns a bounding box), which is exactly "read the text off this photo"
 * — a number plate — rather than a general chat model coaxed into OCR.
 *
 * Default is **Florence-2 base-ft**: at ~0.23 B params it is the smallest
 * download in the family and runs fp32 (no `shader-f16` requirement), so — like
 * `browser.ts` preferring the f16-optional Qwen — it connects on the widest set
 * of WebGPU adapters. The `large-ft` build stays in the shortlist as the
 * higher-quality, heavier alternative behind the same `VisionBrain` seam; other
 * families (Moondream2, SmolVLM2 ONNX builds) plug in the same way.
 */
const CURATED_VISION_MODELS: VisionModel[] = [
  {
    id: "onnx-community/Florence-2-base-ft",
    label: "Florence-2 base",
    downloadLabel: "~0.4 GB",
  },
  {
    id: "onnx-community/Florence-2-large-ft",
    label: "Florence-2 large (higher quality)",
    downloadLabel: "~1.6 GB",
  },
];

export const VISION_MODELS: VisionModel[] = CURATED_VISION_MODELS.map((m) => ({
  ...m,
  label: `${m.label} (${m.downloadLabel})`,
}));

export const DEFAULT_VISION_MODEL = VISION_MODELS[0].id;

/**
 * The default vision task token. `<OCR>` returns the plain transcribed text;
 * `<OCR_WITH_REGION>` additionally yields per-region bounding boxes. A caller
 * wanting the box can pass the region token as the `prompt`.
 */
export const OCR_TASK = "<OCR>";
export const OCR_WITH_REGION_TASK = "<OCR_WITH_REGION>";

/**
 * What the `scripted-vision` brain returns when it can't identify the image —
 * an uploaded photo, or a seed id absent from the injected mapping. Exported so
 * the runner/example slices and their tests assert against the exact string.
 */
export const SCRIPTED_VISION_PLACEHOLDER =
  "UNKNOWN (scripted brain — connect the in-browser model to read a photo)";

/**
 * The ground-truth lookup the `scripted-vision` brain is built with. Either a
 * plain `Record<imageId, plate>` or a function; the runner slice (S1) supplies
 * it from an example's `ExampleDef.scriptedVision` field, which the plate
 * example (S2) populates from its `images.json`. No example's plates are
 * hard-coded here.
 */
export type ScriptedVisionLookup =
  | Record<string, string>
  | ((imageId: string) => string | undefined);

function resolveLookup(
  lookup: ScriptedVisionLookup | undefined,
  imageId: string,
): string | undefined {
  if (!lookup) return undefined;
  if (typeof lookup === "function") return lookup(imageId);
  return lookup[imageId];
}

/**
 * The offline, deterministic vision brain. Given a **seed image id** (a bare
 * string `VisionImage`) it returns that id's ground-truth text from the injected
 * lookup; given anything it can't identify — an unknown id, or a `Blob`/
 * `ImageBitmap` upload it has no id for — it returns `SCRIPTED_VISION_PLACEHOLDER`.
 * Never touches the network or the GPU, so it is safe in CI and is the fallback
 * when WebGPU is unavailable.
 */
export class ScriptedVisionBrain implements VisionBrain {
  readonly kind = "scripted-vision" as const;
  readonly model = null;

  constructor(private readonly lookup?: ScriptedVisionLookup) {}

  read: (
    image: VisionImage,
    prompt: string,
    onToken?: TokenListener,
  ) => Promise<string> = async (image, _prompt, onToken) => {
    // Only a bare string identifies a seed image; a Blob/ImageBitmap is an
    // upload the scripted brain has no ground truth for.
    const text =
      typeof image === "string"
        ? (resolveLookup(this.lookup, image) ?? SCRIPTED_VISION_PLACEHOLDER)
        : SCRIPTED_VISION_PLACEHOLDER;
    onToken?.(text);
    return text;
  };

  dispose(): void {
    // Nothing to release — no model, no worker, no GPU.
  }
}

/** Factory mirror of `new ScriptedVisionBrain(lookup)`, for call sites that prefer a function. */
export function makeScriptedVisionBrain(
  lookup?: ScriptedVisionLookup,
): ScriptedVisionBrain {
  return new ScriptedVisionBrain(lookup);
}

// The minimal slice of the Transformers.js surface this brain uses, typed
// locally so the module has no *static* type-import of `@huggingface/transformers`
// (which would pull it onto the initial bundle). The real objects come from the
// dynamic `import()` inside `connect()`.
interface Florence2Model {
  generate(inputs: Record<string, unknown>): Promise<unknown>;
  dispose?(): Promise<void> | void;
}
interface Florence2Processor {
  construct_prompts(task: string): string | string[];
  post_process_generation(
    text: string,
    task: string,
    imageSize: [number, number],
  ): Record<string, unknown>;
  batch_decode(ids: unknown, opts: { skip_special_tokens: boolean }): string[];
  (image: unknown, prompts: string | string[]): Promise<Record<string, unknown>>;
}

/**
 * A real vision-language model running **in the browser** on WebGPU via
 * Transformers.js. Mirrors `browser.ts`'s `BrowserBrain` lifecycle — a sibling
 * slice (`useBrain.ts`) instantiates and drives it exactly as it drives
 * `BrowserBrain`: `connect(model, onProgress)`, `read`, `cancelConnect`,
 * `dispose`.
 */
export class BrowserVisionBrain implements VisionBrain {
  readonly kind = "browser-vision" as const;
  model: string | null = null;

  private modelHandle: Florence2Model | null = null;
  private processor: Florence2Processor | null = null;
  private loadImage:
    | ((src: unknown) => Promise<{ size: [number, number] }>)
    | null = null;
  /** Bumped on every connect()/cancelConnect() so a stale load can be ignored. */
  private generation = 0;

  async connect(
    modelId: string = DEFAULT_VISION_MODEL,
    onProgress?: LoadProgress,
  ): Promise<string> {
    const blocked = await webgpuUnavailableReason("the scripted-vision fallback");
    if (blocked) throw new Error(blocked);
    if (this.modelHandle && this.model === modelId) return modelId;

    const myGeneration = ++this.generation;
    const progress_callback = (report: {
      status?: string;
      progress?: number;
      file?: string;
    }) => {
      if (myGeneration !== this.generation) return; // superseded by cancel/reconnect
      onProgress?.({
        progress: (report.progress ?? 0) / 100,
        text: report.file ? `${report.status ?? "loading"} ${report.file}` : (report.status ?? ""),
      });
    };

    this.teardown();

    let loaded: {
      model: Florence2Model;
      processor: Florence2Processor;
      loadImage: (src: unknown) => Promise<{
        size: [number, number];
      }>;
    };
    try {
      // Loaded only when a reader actually opts in — Transformers.js and the
      // ONNX runtime are a multi-MB bundle the scripted/text paths never need,
      // so this dynamic import keeps them off the initial page (guarded by the
      // budget test below and `npm run budget`).
      const {
        Florence2ForConditionalGeneration,
        AutoProcessor,
        load_image,
      } = await import("@huggingface/transformers");

      // fp32 for the broadest WebGPU compatibility — the same reasoning
      // `browser.ts` gives for preferring an f16-optional model: an adapter
      // without a working shader-f16 path fails every f16 build identically.
      const model = (await Florence2ForConditionalGeneration.from_pretrained(
        modelId,
        { dtype: "fp32", device: "webgpu", progress_callback },
      )) as unknown as Florence2Model;
      const processor = (await AutoProcessor.from_pretrained(
        modelId,
      )) as unknown as Florence2Processor;
      loaded = {
        model,
        processor,
        loadImage: load_image as unknown as (src: unknown) => Promise<{
          size: [number, number];
        }>,
      };
    } catch (e) {
      if (myGeneration !== this.generation) throw new Error("cancelled");
      const message = e instanceof Error ? e.message : String(e);
      throw new Error(
        `Couldn't load ${modelId} in the browser (${message}). ` +
          "Try the smaller Florence-2 base model, check your connection, or use the scripted-vision fallback.",
      );
    }
    if (myGeneration !== this.generation) {
      // The reader cancelled while this load was in flight. The bytes are
      // cached for next time regardless, but don't surface as "connected".
      // Mirror BrowserBrain.teardown(): dispose() may return a Promise, so
      // swallow a rejected cleanup instead of leaking an unhandled rejection.
      void Promise.resolve(loaded.model.dispose?.()).catch(() => {});
      throw new Error("cancelled");
    }
    this.modelHandle = loaded.model;
    this.processor = loaded.processor;
    this.loadImage = loaded.loadImage;
    this.model = modelId;
    return modelId;
  }

  private teardown(): void {
    const model = this.modelHandle;
    this.modelHandle = null;
    this.processor = null;
    this.loadImage = null;
    this.model = null;
    // dispose() may return a Promise; mirror BrowserBrain.teardown() and
    // swallow a rejected cleanup so it can't leak an unhandled rejection.
    void Promise.resolve(model?.dispose?.()).catch(() => {});
  }

  /**
   * Best-effort cancel of an in-flight connect(). Transformers.js exposes no
   * abort for the initial download/compile, so — like `BrowserBrain` — this
   * doesn't stop network activity; it stops the UI waiting on it and tears down
   * anything that did finish loading.
   */
  cancelConnect(): void {
    this.generation++;
  }

  /**
   * Reads text off `image`. For this Florence-2 backend `prompt` is a **task
   * token selector**, not a free-form instruction: Florence-2 is driven by a
   * fixed vocabulary of task tokens (`<OCR>`, `<OCR_WITH_REGION>`, …) that
   * `construct_prompts` expands — it has no "read only the plate, ignore the
   * rest" natural-language mode. So a `prompt` that is a `<…>` task token
   * selects that task; anything else (empty, or a free-form sentence) falls
   * back to plain `<OCR>`. A caller wanting bounding boxes passes
   * `OCR_WITH_REGION_TASK`.
   */
  read: (
    image: VisionImage,
    prompt: string,
    onToken?: TokenListener,
  ) => Promise<string> = async (image, prompt, onToken) => {
    const model = this.modelHandle;
    const processor = this.processor;
    const loadImage = this.loadImage;
    if (!model || !processor || !loadImage || !this.model)
      throw new Error("BrowserVisionBrain.read called before connect()");

    // Only a Florence-2 task token drives a task; a free-form prompt Florence-2
    // can't interpret degrades to plain OCR rather than being fed as garbage.
    const task = prompt && prompt.startsWith("<") ? prompt : OCR_TASK;
    const loaded = await loadImage(image);
    const prompts = processor.construct_prompts(task);
    const inputs = await processor(loaded, prompts);
    const generatedIds = await model.generate({
      ...inputs,
      max_new_tokens: 512,
      num_beams: 1,
      do_sample: false,
    });
    const generatedText = processor.batch_decode(generatedIds, {
      skip_special_tokens: false,
    })[0];
    const result = processor.post_process_generation(
      generatedText,
      task,
      // Transformers.js `load_image` yields a `RawImage` whose `size` is a
      // `[width, height]` tuple, which is exactly the shape Florence-2's
      // `post_process_generation` indexes for region scaling — pass it through.
      loaded.size,
    );
    const text = stringifyOcr(result, task);
    onToken?.(text);
    return text;
  };

  dispose(): void {
    this.generation++;
    this.teardown();
  }
}

/** Pull the plain text out of Florence-2's task-keyed post-processed result. */
function stringifyOcr(result: Record<string, unknown>, task: string): string {
  const value = result[task];
  if (typeof value === "string") return value.trim();
  // `<OCR_WITH_REGION>` returns `{ quad_boxes, labels }`; join the labels.
  if (value && typeof value === "object") {
    const labels = (value as { labels?: unknown }).labels;
    if (Array.isArray(labels)) return labels.join(" ").trim();
    return JSON.stringify(value);
  }
  return "";
}
