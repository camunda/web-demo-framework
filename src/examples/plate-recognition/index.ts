import type { ExampleDef, SeedImage } from "../../framework/types";
import bpmn from "./model.bpmn?raw";
import confirmForm from "./confirm.form.json";
import manualForm from "./manual.form.json";
import countryForm from "./country.form.json";
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
const EXTRACT_PLATE = `async (job, { vision, trace, text }) => {
  const raw = vision ? await vision("<OCR>") : "";

  // Surface the model's untouched <OCR> transcription in the trace timeline, so
  // it's visible how much of the plate the model actually read before we
  // extract the plate-shaped token (e.g. Florence-2 base dropping a digit).
  trace("raw <OCR>: " + JSON.stringify(String(raw)));

  // The reader picks the plate's country on the start form; that variable tells
  // us which format to pull out of the reading (Florence <OCR> transcribes ALL
  // text in the photo — dealer names, URLs, road signs — it has no "read only
  // the plate" mode). "auto" tries every format, most-specific first.
  const country = text("country", "auto").toLowerCase();

  // Normalise to a plate-shaped string: uppercase, drop punctuation, collapse
  // whitespace. Florence's <OCR> may return "MK70ORJ" or "MK70 ORJ".
  const cleaned = String(raw)
    .toUpperCase()
    .replace(/[^A-Z0-9 ]+/g, " ")
    .replace(/\\s+/g, " ")
    .trim();

  // Indian plates carry an "IND" country code on the blue strip; Florence often
  // reads it glued to the plate — "IND21 BH 2345 AA" (base) or "21 BH 2345
  // AAIND" (large). That glue destroys the boundary the plate patterns rely on,
  // so the leading "21" would be dropped. For the India (and auto) formats,
  // strip the country code where it abuts the plate.
  const base =
    country === "india" || country === "auto"
      ? cleaned
          .replace(/\\bIND(?=[0-9])/g, " ")
          .replace(/(?<=[A-Z])IND\\b/g, " ")
          .replace(/\\s+/g, " ")
          .trim()
      : cleaned;

  // Per-country plate shapes. Single-letter-group patterns (UK "IJZ 8992")
  // deliberately have no leading anchor so they can be pulled out of a word the
  // model glued to them ("FORDIJZ 8992..."); multi-group patterns are anchored
  // with (?<![A-Z])/(?<![0-9]) so a neighbouring word can't masquerade as the
  // plate's leading group ("FRONT 21..." -> not "NT 21 ..."). If nothing
  // matches (an unusual plate, or the scripted brain, which already returns a
  // bare plate) we keep the whole cleaned string.
  const PATTERNS = {
    uk: [
      /[A-Z]{2}[0-9]{2} [A-Z]{3}/, // MK70 ORJ
      /[A-Z][0-9]{1,3} [A-Z]{3}/,  // D651 RNB
      /[A-Z]{2,3} [0-9]{1,4}/,     // IJZ 8992 (Northern Ireland)
    ],
    india: [
      /(?<![A-Z])[A-Z]{2} [0-9]{1,2} [A-Z]{1,3} [0-9]{4}/,   // MH 12 AB 1234
      /(?<![0-9])[0-9]{2} BH [0-9]{4}( [A-Z]{2}(?![A-Z]))?/, // 21 BH 2345 AA
    ],
    germany: [
      /(?<![A-Z])[A-Z]{1,3} [A-Z]{1,2} [0-9]{1,4}/, // MS WL 545
    ],
    korea: [
      /[0-9]{2,3} [A-Z]{1,3} [0-9]{4}/,              // e.g. 12 GA 3456
      /(?<![A-Z])[A-Z]{2,4} [A-Z]{2,4}(?![A-Z])/,    // e.g. GWAN EUM
    ],
    auto: [
      /(?<![A-Z])[A-Z]{2} [0-9]{1,2} [A-Z]{1,3} [0-9]{4}/,   // India:      MH 12 AB 1234
      /(?<![0-9])[0-9]{2} BH [0-9]{4}( [A-Z]{2}(?![A-Z]))?/, // India BH:   21 BH 2345 AA
      /[A-Z]{2}[0-9]{2} [A-Z]{3}/,                           // UK current: MK70 ORJ
      /[A-Z][0-9]{1,3} [A-Z]{3}/,                            // UK older:   D651 RNB
      /(?<![A-Z])[A-Z]{1,3} [A-Z]{1,2} [0-9]{1,4}/,          // Germany:    MS WL 545
      /[A-Z]{2,3} [0-9]{1,4}/,                               // UK NI:      IJZ 8992
    ],
  };
  const patterns = PATTERNS[country] || PATTERNS.auto;
  let plate = base;
  for (const re of patterns) {
    const match = base.match(re);
    if (match) {
      plate = match[0];
      break;
    }
  }

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
    "Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",
  docsUrl:
    "https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",
  bpmn,
  forms: {
    "plate-recognition-country": countryForm,
    "plate-recognition-confirm": confirmForm,
    "plate-recognition-manual": manualForm,
  },
  seed: { country: "auto" },
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
