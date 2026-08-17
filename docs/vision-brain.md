# The in-browser vision brain

The framework's fourth brain reads **images**, not chat. It sits beside the three
text brains (Scripted / In-browser WebLLM / Endpoint) and powers the
[`plate-recognition`](../src/examples/plate-recognition) example — "read a car's
number plate from a photo" (epic #67). Like the WebLLM brain it runs entirely in
the reader's browser on WebGPU, with no server and no API key, so a hosted https
page reads a photo the model has never seen with nothing but the browser.

This doc describes the seam, how an image gets into a run, and the two-layer
falsifiability proof (an offline CI probe plus an opt-in real-model eval).

## The vision seam (contract A) — `src/framework/brains/`

The text brains satisfy one `ChatFn`; the vision brain adds a parallel
image→text seam in `brains/types.ts`, deliberately kept **separate** from the
`ChatFn`/`BrainKind` text surface (a text brain has `chat`, a vision brain has
`read`):

```ts
export type VisionImage = string | Blob | ImageBitmap;
export type VisionFn = (image: VisionImage, prompt: string, onToken?: TokenListener) => Promise<string>;
export type VisionBrainKind = "scripted-vision" | "browser-vision";
export interface VisionBrain {
  kind: VisionBrainKind;
  model: string | null;
  read: VisionFn;
  dispose(): void;
}
```

`brains/vision.ts` implements two backends behind that seam, mirroring
`brains/browser.ts`:

- **`BrowserVisionBrain`** — a real vision-language model in the browser via
  `@huggingface/transformers` on `device: "webgpu"`. Its lifecycle matches
  `BrowserBrain`: `connect(modelId?, onProgress?)`, `read`, `cancelConnect`,
  `dispose`. The default model is **Florence-2 base-ft**
  (`onnx-community/Florence-2-base-ft`), driven by its `<OCR>` / `<OCR_WITH_REGION>`
  task tokens — Florence exposes an explicit "read the text off this photo" task
  rather than a chat model coaxed into OCR. A curated shortlist (`VISION_MODELS`)
  keeps the heavier `large-ft` build behind the same seam; the default is chosen
  for the broadest WebGPU compatibility (fp32, no `shader-f16` requirement) and
  smallest download, and exposes a **download size label** for the panel.
- **`ScriptedVisionBrain`** (`makeScriptedVisionBrain(lookup)`) — deterministic,
  offline, no GPU, no network. Given a **seed image id** (a bare-string
  `VisionImage`) it returns that id's ground-truth text from an injected
  `ScriptedVisionLookup` (`Record<imageId, plate>` or a function); for anything
  it can't identify — an unknown id, or a `Blob`/`ImageBitmap` upload — it
  returns `SCRIPTED_VISION_PLACEHOLDER`. This is the CI brain and the
  WebGPU-absent fallback.

WebGPU probing is shared with the text brain via `brains/webgpu.ts`
(`webgpuAvailable`, `webgpuUnavailableReason`), so a WebGPU-absent reader is
steered to the scripted-vision fallback with the *same* explained reason rather
than being handed a brain that can't connect.

### Lazy import — keeps the bundle budget green

`@huggingface/transformers` is a multi-hundred-MB backend and is the **only**
dependency this epic added. It is imported **dynamically**, inside
`BrowserVisionBrain.connect()`'s lazy path (`await import("@huggingface/transformers")`),
never statically — so it stays off the initial bundle exactly like WebLLM.
`npm run budget` (the `gallery-initial-js` budget) guards this: an accidental
eager `import` of the library would push initial JS over budget and fail CI. When
touching the vision brain, keep every reference to that package inside the async
`import()` path.

## Connecting the brain in the panel (contract B) — `useBrain.ts` / `BrainPanel.tsx`

`useBrain`'s `BrainControls` gains a **parallel** vision brain alongside the text
`chat`: `vision: VisionFn | null` plus `visionKind`, `setVisionKind`,
`visionStatus`, `visionError`, `visionModel`/`setVisionModel`, `visionModelInUse`,
`visionProgress`, `visionWebgpuReason`, `connectVision()`, `cancelVisionConnect()`.
It drives `BrowserVisionBrain` with the same connect/progress/cancel machinery
the WebLLM brain uses, so `BrainPanel` renders the opt-in **weight download with a
size label** and load progress through the existing UX. WebGPU absent →
`vision` stays the `scripted-vision` reader and `visionWebgpuReason` explains why.
`BrainPanel` takes `showText`/`showVision` props (defaults `showText=true`,
`showVision=false`) so only an example that wants a vision brain shows one.

## Getting an image into a run (contract B) — `types.ts` / `useExampleRun.ts` / `compile.ts`

`ExampleDef` gains two **optional, additive** fields, so every other example is
unchanged:

```ts
imageInput?: { seedImages: SeedImage[]; label?: string };
// SeedImage: { id: string; file: string; thumb?: string; label?: string }

// The per-example deterministic vision stand-in — the direct analogue of the
// existing `scriptedAgent?: string` (the scripted LLM stand-in). A seed
// id -> plate ground-truth map the runner injects into the scripted-vision
// brain to build helpers.vision's offline fallback.
scriptedVision?: Record<string, string>; // imageId -> groundTruthPlate
```

When `imageInput` is present the runner renders a start affordance offering both
a **gallery of seed thumbnails** and an **"upload your own photo"** control
(uploading a personal photo is the proof the demo is real). Crucially, process
variables carry only a **small reference** — `imageId` for a gallery pick or
`imageName` for an upload — **never** a multi-MB data URL; the pixels are held in
run-scoped context in `useExampleRun` (`runImagesRef`, keyed by process instance)
and cleaned up when the run ends.

Handlers reach the image through a new **optional** helper built in `compile.ts`'s
`helpersFor` from a `VisionSupport`:

- `helpers.vision(prompt): Promise<string>` — resolves the current run's image
  and reads it with the **active** brain (the connected live `VisionFn`, or the
  scripted fallback), returning the text. It **never throws**: a missing image or
  a mid-run backend error resolves to a clearly-marked string rather than raising
  an incident on a service task.
- `helpers.image(): Promise<VisionImage | undefined>` — the lower-level accessor
  returning the current run's image so a handler can call the brain itself.

### The scripted-vision ground-truth channel

The runner picks the live vision reader when a browser-vision brain is connected;
otherwise it builds the fallback from the example's own `scriptedVision` field —
instantiating `makeScriptedVisionBrain(example.scriptedVision)` and threading its
`VisionFn` through `useExampleRun`→`helpersFor`. This is the exact analogue of how
`ExampleRunner` compiles `example.scriptedAgent` to stand in for `brain.chat`. It
is what makes an example's per-image ground truth reach `helpers.vision` offline.

## The plate-recognition example — model recommends, process governs

`extract-plate` (a service task) calls `helpers.vision("<OCR>")`, normalises the
reading to a plate-shaped string, and sets `plateReadOk`. A gateway routes a
confident read to a **pre-filled confirm form** and an empty/low-confidence read
to a manual-entry form. `record-result` records the human-**confirmed** plate and
logs a `corrected` boolean when the human overruled the model — the same "the
model recommends, the BPMN process governs" shape as `seed-export-compliance`,
with a vision model in the recommending seat.

## Proving it's real, not faked — two layers

**1. Offline CI probe (default `npm test`).**
[`src/examples/plate-recognition/falsifiability.test.ts`](../src/examples/plate-recognition/falsifiability.test.ts)
drives the shipped example end-to-end through the framework's own
`helpers.vision` wiring with the `scripted-vision` brain the runner builds from
`ExampleDef.scriptedVision`. It asserts the run reads each seed image's
`groundTruthPlate` straight from `images.json`, proves the ground truth is
*consulted* (a doctored mapping changes the read), and asserts a corrected
confirmation flips the `corrected` flag. No GPU, no network — it runs in the
default suite.

**2. Opt-in real-model eval (`npm run eval:vision`).**
[`tools/eval-vision/index.mjs`](../tools/eval-vision/index.mjs) loads the *real*
Florence-2 ONNX model through `@huggingface/transformers` and runs its `<OCR>`
task against the seed photos, asserting the model genuinely reads each plate.
It is **gated exactly like `npm run eval`**: a separate npm script, **not** part
of `npm test` and **not** run in CI (which runs typecheck / test / build /
budget only), because Florence-2 is a multi-hundred-MB download.

```sh
npm run eval:vision                     # all seed images, ONNX cpu backend
VISION_EVAL_IMAGE=uk-mk70-orj npm run eval:vision   # a single seed
VISION_DEVICE=webgpu npm run eval:vision            # if Node exposes WebGPU
VISION_EVAL_MODEL=onnx-community/Florence-2-large-ft npm run eval:vision
```

Node has no `navigator.gpu`, so the eval defaults to ONNX Runtime's `cpu`
backend — still the real weights and real inference, just slower than the
browser's WebGPU path. It exits non-zero if the model reads none of the seed
plates, so a genuine regression is catchable when someone chooses to run it.
