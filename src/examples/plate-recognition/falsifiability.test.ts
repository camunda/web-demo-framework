import { describe, expect, it } from "vitest";
import type { ActivatedJob, JobHandler } from "@nanobpm/bojtos-react";
import { buildWorkers } from "../../framework/compile";
import { makeScriptedVisionBrain } from "../../framework/brains/vision";
import type { ExampleHandler, Trace } from "../../framework/types";
import type { ModelInfo } from "../../framework/model";
import type { RunImage, VisionSupport } from "../../framework/imageInput";
import { plateRecognition } from "./index";
import manifest from "./images.json";

/**
 * S4 — the **falsifiability probe** (epic #67).
 *
 * The claim this example makes is "a photo really goes into the run and the
 * vision path really reads the plate off it — not faked". This probe is the
 * offline, CI-default half of proving that: it drives the SHIPPED example
 * end-to-end through the framework's own `helpers.vision` wiring with the
 * deterministic **`scripted-vision`** brain the runner builds from
 * `ExampleDef.scriptedVision`, and asserts:
 *
 *   1. the run reads each seed image's `groundTruthPlate` straight from
 *      `images.json` (so a regression that silently stopped consulting the
 *      per-image ground truth would fail here), and
 *   2. a **corrected** confirmation flips the `corrected` flag while an
 *      unchanged confirmation leaves it false (so the "the model recommends,
 *      the process governs" guarantee stays real).
 *
 * It runs with **no GPU, no network, in the default `npm test`**. The
 * complementary proof that the *real* Florence-2 model reads a plate lives in
 * the opt-in `tools/eval-vision` eval (`npm run eval:vision`), deliberately
 * kept out of the default suite exactly as `npm run eval` is.
 *
 * The probe deliberately goes through `buildWorkers`/`helpersFor` and the real
 * `makeVisionAccessor` chain (a `VisionSupport` whose `read` is the scripted
 * brain), rather than calling the brain directly — that is the same path the
 * runner takes, so this exercises the whole contract-B seam, not a shortcut.
 */

interface ManifestEntry {
  id: string;
  groundTruthPlate: string;
}
const images = manifest as ManifestEntry[];

/** Evaluate a handler's editable source into the function the runner runs. */
function compile(source: string): ExampleHandler {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
  return new Function(`"use strict"; return (${source});`)() as ExampleHandler;
}

const extractSource = plateRecognition.handlers.find(
  (h) => h.elementId === "ExtractPlate",
)!.source;
const recordSource = plateRecognition.handlers.find(
  (h) => h.elementId === "RecordResult",
)!.source;

function modelFixture(): ModelInfo {
  const tasks = [
    { elementId: "ExtractPlate", label: "Extract plate", jobType: "extract-plate", isAgentTool: false },
    { elementId: "RecordResult", label: "Record result", jobType: "record-result", isAgentTool: false },
  ];
  return {
    processes: [
      { processId: "p", processName: "P", tasks, agents: [] } as unknown as ModelInfo["processes"][number],
    ],
    diagnostics: [],
    processId: "p",
    processName: "P",
    tasks,
    agent: null,
    agents: [],
    userTasks: [],
  } as unknown as ModelInfo;
}

const noopTrace: Trace = () => {};

/**
 * Run one of the example's handlers exactly as the runner would when no live
 * browser-vision brain is connected: the scripted-vision brain is built from
 * the example's OWN `scriptedVision` field (which the plate-example slice
 * populated from `images.json`), and threaded in through `VisionSupport`.
 */
async function runHandler(
  elementId: "ExtractPlate" | "RecordResult",
  { image, variables = {} }: { image?: RunImage; variables?: Record<string, unknown> },
): Promise<Record<string, unknown>> {
  const jobType = elementId === "ExtractPlate" ? "extract-plate" : "record-result";
  const byElement: Record<string, ExampleHandler> = {
    ExtractPlate: compile(extractSource),
    RecordResult: compile(recordSource),
  };
  const support: VisionSupport = {
    read: makeScriptedVisionBrain(plateRecognition.scriptedVision).read,
    live: false,
    resolve: () => image,
  };
  const workers = buildWorkers(modelFixture(), byElement, noopTrace, undefined, support);
  const worker: JobHandler = workers[jobType];
  const job: ActivatedJob = {
    key: "job-1",
    type: jobType,
    instanceKey: "inst-1",
    elementId,
    retries: 1,
    variables,
  };
  return (await worker(job)) as Record<string, unknown>;
}

/** Drive the whole example path for one seed image, confirming `confirmed`. */
async function driveRun(
  seedId: string,
  confirmed: string,
): Promise<Record<string, unknown>> {
  const extracted = await runHandler("ExtractPlate", {
    image: { imageId: seedId, pixels: `${seedId}.jpg` },
  });
  // The confirm form pre-fills from the model reading; the human may edit it.
  return runHandler("RecordResult", {
    variables: {
      modelPlate: extracted.modelPlate,
      confirmedPlate: confirmed,
    },
  });
}

describe("falsifiability probe — the scripted-vision path reads the real ground truth", () => {
  it("has ground truth to prove against (images.json is non-empty)", () => {
    expect(images.length).toBeGreaterThan(0);
    for (const img of images) {
      expect(img.groundTruthPlate.trim().length).toBeGreaterThan(0);
    }
  });

  it("reads each seed image's images.json groundTruthPlate via helpers.vision", async () => {
    for (const img of images) {
      const out = await runHandler("ExtractPlate", {
        image: { imageId: img.id, pixels: `${img.id}.jpg` },
      });
      expect(out.plateReadOk).toBe(true);
      // The read plate must equal the manifest's ground truth (normalised the
      // same way the handler normalises Florence's <OCR> output).
      expect(out.modelPlate).toBe(img.groundTruthPlate.toUpperCase());
    }
  });

  it("proves the ground truth is CONSULTED, not hard-coded: a doctored mapping changes the read", async () => {
    // If the run ignored the per-image ground truth and returned a canned
    // answer, swapping the mapping wouldn't change the read. It does.
    const seed = images[0];
    const doctored = makeScriptedVisionBrain({ [seed.id]: "ZZ99 ZZZ" });
    const byElement: Record<string, ExampleHandler> = {
      ExtractPlate: compile(extractSource),
    };
    const support: VisionSupport = {
      read: doctored.read,
      live: false,
      resolve: () => ({ imageId: seed.id, pixels: `${seed.id}.jpg` }),
    };
    const workers = buildWorkers(modelFixture(), byElement, noopTrace, undefined, support);
    const out = (await workers["extract-plate"]({
      key: "j",
      type: "extract-plate",
      instanceKey: "i",
      elementId: "ExtractPlate",
      retries: 1,
      variables: {},
    } as ActivatedJob)) as Record<string, unknown>;
    expect(out.modelPlate).toBe("ZZ99 ZZZ");
    expect(out.modelPlate).not.toBe(seed.groundTruthPlate.toUpperCase());
  });
});

describe("falsifiability probe — the process governs the model's reading", () => {
  it("confirming the model's reading unchanged records it with corrected=false", async () => {
    const seed = images[0];
    const recorded = await driveRun(seed.id, seed.groundTruthPlate.toUpperCase());
    expect(recorded.plate).toBe(seed.groundTruthPlate.toUpperCase());
    expect(recorded.corrected).toBe(false);
  });

  it("a corrected confirmation flips the corrected flag and records the human's plate", async () => {
    const seed = images[0];
    const humanPlate = "AB12 CDE"; // deliberately different from the read
    const recorded = await driveRun(seed.id, humanPlate);
    expect(recorded.plate).toBe(humanPlate);
    expect(recorded.corrected).toBe(true);
    // …and the model's original reading is preserved for the audit trail.
    expect(recorded.modelPlate).toBe(seed.groundTruthPlate.toUpperCase());
  });

  it("an unknown/uploaded image (no ground truth) reads low-confidence, not a fake plate", async () => {
    const out = await runHandler("ExtractPlate", {
      image: { imageId: "not-a-seed-image", pixels: "uploaded.jpg" },
    });
    expect(out.plateReadOk).toBe(false);
    expect(out.modelPlate).toBe("");
  });
});
