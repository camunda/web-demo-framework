import type { ExampleDef, SeedImage } from "../../framework/types";
import bpmn from "./model.bpmn?raw";
import confirmForm from "./confirm.form.json";
import manualForm from "./manual.form.json";
import manifest from "./images.json";

/**
 * "Read a car's number plate from a photo" — the in-browser vision demo
 * (epic #67). A photo goes into the run, a service task reads the plate with
 * the vision brain seam (contract A) via `helpers.vision` (contract B), a human
 * confirms or corrects the reading on a pre-filled form, and the process records
 * the confirmed plate — logging when the human overruled the model.
 *
 * The model **recommends**; the process **governs** — the same shape as
 * `seed-export-compliance`, but with a vision model in the recommending seat.
 *
 * This file is layer 2: it only composes the framework seams. It consumes —
 * never redefines — contract A (the vision seam in `framework/brains`) and
 * contract B (`ExampleDef.imageInput`/`scriptedVision`, `helpers.vision`, the
 * `imageId`/`imageName` reference convention). It touches no `framework/` file.
 */

/** One record in `images.json`, produced by the seed-images slice. */
interface ManifestEntry {
  id: string;
  file: string;
  thumb: string;
  source: string;
  license: string;
  attribution: string;
  groundTruthPlate: string;
}

const images = manifest as ManifestEntry[];

/**
 * The seed photos ship in the repo/bundle; the gallery renders them by URL and
 * a live browser-vision brain loads those URLs directly. `import.meta.glob`
 * with `?url` turns each asset under `./images/` into a bundler URL at build
 * time, the same mechanism the compliance example uses for its prompt files.
 */
const imageUrls = import.meta.glob("./images/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function assetUrl(relPath: string): string {
  const url = imageUrls[`./${relPath}`];
  if (!url) {
    throw new Error(
      `plate-recognition: image asset "${relPath}" is in images.json but missing on disk`,
    );
  }
  return url;
}

/** Contract B — the start gallery: seed thumbnails keyed by the manifest id. */
const seedImages: SeedImage[] = images.map((img) => ({
  id: img.id,
  file: assetUrl(img.file),
  thumb: assetUrl(img.thumb),
  label: img.groundTruthPlate,
}));

/**
 * Contract B — the per-example scripted-vision ground truth: `imageId -> plate`.
 * This is the ONLY thing this slice supplies for the offline/no-GPU path; the
 * framework runner (slice `image-input-run`) reads this field and builds
 * `helpers.vision`'s scripted fallback from it. We do not wire it ourselves.
 */
const scriptedVision: Record<string, string> = Object.fromEntries(
  images.map((img) => [img.id, img.groundTruthPlate]),
);

/**
 * Reads the current run's image with the vision seam and records a plate.
 *
 * `helpers.vision("<OCR>")` (contract B) runs the connected browser-vision
 * (Florence-2) model on the reader's GPU when one is connected, and otherwise
 * falls back to the scripted-vision brain the runner built from `scriptedVision`
 * above — which returns the seed image's known plate for a gallery pick, and a
 * clearly-marked "UNKNOWN" for an unknown/uploaded image. It never throws.
 *
 * The gateway downstream routes on `plateReadOk`: a confident read goes to the
 * pre-filled confirm form; an empty / low-confidence read (an uploaded photo
 * with no live model, say) goes to the manual-entry path.
 */
const EXTRACT_PLATE = `async (job, { vision, trace }) => {
  const raw = vision ? await vision("<OCR>") : "";

  // Normalise to a plate-shaped string: uppercase, drop punctuation, collapse
  // whitespace. Florence's <OCR> may return "MK70ORJ" or "MK70 ORJ".
  const plate = String(raw)
    .toUpperCase()
    .replace(/[^A-Z0-9 ]+/g, " ")
    .replace(/\\s+/g, " ")
    .trim();

  // "Couldn't read" is exactly the seam's own no-read signals — the scripted
  // brain's UNKNOWN placeholder, the neutral no-image message, or a mid-run
  // backend error — plus a result too short to be a plate.
  const noRead =
    /^UNKNOWN\\b/.test(raw) ||
    /^No image selected/.test(raw) ||
    /^Couldn't read/.test(raw);
  const plateReadOk = !noRead && plate.replace(/\\s/g, "").length >= 4;

  trace(plateReadOk ? "read plate " + plate : "no confident plate read");

  return {
    // The raw reading is kept for the audit trail. 'confirmedPlate' pre-fills
    // the confirm form; leave it blank when we couldn't read, so the
    // manual-entry form starts empty.
    modelPlate: plateReadOk ? plate : "",
    plateReadRaw: String(raw),
    confirmedPlate: plateReadOk ? plate : "",
    plateReadOk: plateReadOk,
  };
}`;

/**
 * Governs the outcome: records the human-**confirmed** plate and logs when the
 * human corrected the model (confirmed differs from the model's reading) —
 * mirroring `RecordComplianceDecision` in `seed-export-compliance`. The final
 * variables show the confirmed plate and a `corrected` boolean.
 */
const RECORD_RESULT = `async (job, { text, trace }) => {
  const model = text("modelPlate", "");
  const confirmed = text("confirmedPlate", "");

  const norm = (s) => s.toUpperCase().replace(/\\s+/g, " ").trim();
  const corrected = norm(confirmed) !== norm(model);

  if (corrected) {
    trace(
      "human corrected the model: '" + (model || "(nothing read)") +
        "' -> '" + confirmed + "'",
    );
  } else {
    trace("human confirmed the model reading: '" + confirmed + "'");
  }

  return {
    plate: confirmed,
    confirmedPlate: confirmed,
    modelPlate: model,
    corrected: corrected,
  };
}`;

export const plateRecognition: ExampleDef = {
  id: "plate-recognition",
  title: "Read a number plate from a photo",
  blurb:
    "A photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",
  docsUrl:
    "https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",
  bpmn,
  forms: {
    "plate-recognition-confirm": confirmForm,
    "plate-recognition-manual": manualForm,
  },
  seed: {},
  imageInput: {
    label:
      "Pick a seed photo (its plate is known, so the scripted reader works offline) or upload your own — a live in-browser model reads a photo it has never seen.",
    seedImages,
  },
  scriptedVision,
  handlers: [
    {
      elementId: "ExtractPlate",
      standsInFor: "Vision model — Florence-2 <OCR> on WebGPU (in-browser)",
      source: EXTRACT_PLATE,
    },
    {
      elementId: "RecordResult",
      standsInFor: "Script task — records the governed outcome",
      source: RECORD_RESULT,
    },
  ],
};
