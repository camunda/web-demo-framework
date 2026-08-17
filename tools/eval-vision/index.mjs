#!/usr/bin/env node
// Opt-in, real-model **falsifiability eval** for the vision path (epic #67).
//
//   npm run eval:vision
//
// This is the "real, not faked" proof that the offline CI probe
// (src/examples/plate-recognition/falsifiability.test.ts) cannot give: it loads
// the *actual* Florence-2 ONNX model through `@huggingface/transformers` — the
// very backend `src/framework/brains/vision.ts`'s `BrowserVisionBrain` uses in
// the browser — and runs its `<OCR>` task against the seed car photos, then
// checks the model genuinely reads the plates (it reports the per-plate hit
// rate and, per the exit criteria below, fails only when it reads *none* of
// them). It reuses the seam's read
// sequence (construct_prompts → processor → generate → batch_decode →
// post_process_generation) so it exercises exactly what the browser brain does.
//
// It is **gated exactly like `npm run eval`**: a separate npm script, NOT part
// of `npm test` and NOT run in CI (.github/workflows/ci.yml runs typecheck /
// test / build / budget only). Florence-2 is a multi-hundred-MB download and
// the first run fetches + compiles the weights, so this is opt-in on purpose.
//
// Node has no `navigator.gpu`, so this runs on the ONNX Runtime **cpu** backend
// by default (still the real model, real weights, real inference — just slower
// than the browser's WebGPU path). Override with env vars:
//
//   VISION_DEVICE=webgpu     # if your Node build exposes a WebGPU adapter
//   VISION_DEVICE=coreml     # Apple Silicon acceleration, when available
//   VISION_DTYPE=fp16        # default fp32 (broadest compatibility)
//   VISION_EVAL_MODEL=onnx-community/Florence-2-large-ft
//   VISION_EVAL_IMAGE=uk-mk70-orj   # run a single seed id instead of all
//
// Exit code is non-zero if the model reads none of the seed plates, so a
// genuine regression (a seam that stopped feeding pixels to the model, say) is
// catchable when someone chooses to run this.
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Kept in sync with the vision seam (src/framework/brains/vision.ts): the
// default model and the `<OCR>` task token `BrowserVisionBrain` uses. They are
// duplicated here as plain constants rather than imported, because vision.ts
// uses a constructor parameter property that Node's TypeScript type-stripping
// can't run directly (unlike the pure-erasure sources tools/eval imports). If
// the seam's DEFAULT_VISION_MODEL / OCR_TASK ever change, update these too.
const DEFAULT_VISION_MODEL = "onnx-community/Florence-2-base-ft";
const OCR_TASK = "<OCR>";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const exampleDir = path.resolve(
  __dirname,
  "..",
  "..",
  "src",
  "examples",
  "plate-recognition",
);

const DEVICE = process.env.VISION_DEVICE || "cpu";
const DTYPE = process.env.VISION_DTYPE || "fp32";
const MODEL_ID = process.env.VISION_EVAL_MODEL || DEFAULT_VISION_MODEL;

/** Uppercase alphanumerics only — plates compare regardless of spacing/case. */
function normalise(s) {
  return String(s)
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "");
}

/** Pull the plain text out of Florence-2's task-keyed post-processed result. */
function stringifyOcr(result, task) {
  const value = result[task];
  if (typeof value === "string") return value.trim();
  if (value && typeof value === "object") {
    const labels = value.labels;
    if (Array.isArray(labels)) return labels.join(" ").trim();
    return JSON.stringify(value);
  }
  return "";
}

async function loadManifest() {
  const raw = await readFile(path.join(exampleDir, "images.json"), "utf8");
  const all = JSON.parse(raw);
  const only = process.env.VISION_EVAL_IMAGE;
  return only ? all.filter((r) => r.id === only) : all;
}

async function main() {
  console.log("Vision falsifiability eval — real Florence-2 reads the seed plates\n");
  console.log(`  model:  ${MODEL_ID}`);
  console.log(`  device: ${DEVICE}   dtype: ${DTYPE}\n`);

  const manifest = await loadManifest();
  if (manifest.length === 0) {
    console.error("No seed images to evaluate (check VISION_EVAL_IMAGE).");
    process.exitCode = 1;
    return;
  }

  // Dynamic import — the same multi-MB backend the browser brain lazy-loads,
  // so the framework's own bundle budget is never touched by this tool.
  console.log("Loading @huggingface/transformers (first run downloads the weights)…\n");
  const { Florence2ForConditionalGeneration, AutoProcessor, load_image } =
    await import("@huggingface/transformers");

  const model = await Florence2ForConditionalGeneration.from_pretrained(MODEL_ID, {
    dtype: DTYPE,
    device: DEVICE,
    progress_callback: (r) => {
      if (r?.status === "progress" && r?.file) {
        process.stdout.write(`\r  ${r.status} ${r.file} ${Math.round(r.progress ?? 0)}%   `);
      }
    },
  });
  const processor = await AutoProcessor.from_pretrained(MODEL_ID);
  process.stdout.write("\r" + " ".repeat(72) + "\r");

  const prompts = processor.construct_prompts(OCR_TASK);
  const outcomes = [];

  for (const rec of manifest) {
    const bytes = await readFile(path.join(exampleDir, rec.file));
    // Transformers.js `load_image` fetches a URL — and Node's fetch can't read
    // a file:// URL — so hand it the decoded bytes as a Blob instead.
    const loaded = await load_image(new Blob([bytes]));
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
    const result = processor.post_process_generation(generatedText, OCR_TASK, loaded.size);
    const read = stringifyOcr(result, OCR_TASK);

    // "Read the plate" = the model's OCR contains the ground-truth plate's
    // alphanumerics somewhere in the transcribed text (Florence reads the whole
    // photo, so the plate is a substring of the full <OCR> output).
    const pass = normalise(read).includes(normalise(rec.groundTruthPlate));
    outcomes.push({ rec, read, pass });
    console.log(
      `${pass ? "✔" : "✘"} ${rec.id}  expected "${rec.groundTruthPlate}"  read: ${JSON.stringify(read)}`,
    );
  }

  await model.dispose?.();

  const passed = outcomes.filter((o) => o.pass).length;
  console.log(`\n${passed}/${outcomes.length} seed plates read by the real model.`);

  if (passed === 0) {
    console.error(
      "\nThe model read none of the seed plates — the vision path is NOT proven. " +
        "This is the falsifiable failure: a real Florence-2 run over these photos should read at least one plate.",
    );
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
