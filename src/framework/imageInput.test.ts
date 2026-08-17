import { describe, expect, it, vi } from "vitest";
import type { ActivatedJob, JobHandler } from "@nanobpm/bojtos-react";
import { buildWorkers } from "./compile";
import type { ExampleHandler, HandlerHelpers, Trace } from "./types";
import type { ModelInfo } from "./model";
import type { VisionFn, VisionImage } from "./brains/types";
import { SCRIPTED_VISION_PLACEHOLDER } from "./brains/vision";
import {
  imageRefVariables,
  makeVisionAccessor,
  NO_LIVE_IMAGE_MESSAGE,
  pickVisionArg,
  type RunImage,
  type VisionSupport,
} from "./imageInput";

/**
 * Contract B, the runner half: an image reaches a handler via `helpers.vision`,
 * threaded through `buildWorkers`/`helpersFor`; process variables carry only a
 * small reference; a live brain gets the pixels while the scripted fallback
 * (built from `ExampleDef.scriptedVision`) resolves a seed id to its ground
 * truth and an unknown/uploaded image to the seam's placeholder.
 */

const SEED_JOB: ActivatedJob = {
  key: "job-1",
  type: "extract-plate-job",
  instanceKey: "inst-1",
  elementId: "extract-plate",
  retries: 3,
  variables: {},
};

function oneTaskModel(): ModelInfo {
  const tasks = [
    {
      elementId: "extract-plate",
      label: "Extract plate",
      jobType: "extract-plate-job",
      isAgentTool: false,
    },
  ];
  return {
    processes: [
      {
        processId: "p",
        processName: "P",
        tasks,
        agents: [],
      } as unknown as ModelInfo["processes"][number],
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

/** Run the one worker for a job carrying `variables`, returning its output. */
async function runVisionHandler(
  handler: ExampleHandler,
  vision: VisionSupport,
  job: ActivatedJob = SEED_JOB,
): Promise<unknown> {
  const model = oneTaskModel();
  const trace: Trace = () => {};
  const workers = buildWorkers(
    model,
    { "extract-plate": handler },
    trace,
    undefined,
    vision,
  );
  const worker: JobHandler = workers["extract-plate-job"];
  return worker(job);
}

const readPromptBack: ExampleHandler = async (_job, helpers: HandlerHelpers) => {
  const plate = await helpers.vision!("<OCR>");
  return { plate };
};

describe("imageRefVariables — only a reference reaches process variables", () => {
  it("carries imageId for a gallery pick and never the pixels", () => {
    const image: RunImage = {
      imageId: "uk-mk70-orj",
      pixels: "data:image/png;base64,AAAA",
    };
    const vars = imageRefVariables(image);
    expect(vars).toEqual({ imageId: "uk-mk70-orj" });
    expect(JSON.stringify(vars)).not.toContain("data:");
  });

  it("carries imageName for an upload and never the pixels", () => {
    const image: RunImage = {
      imageName: "my-car.jpg",
      pixels: "data:image/jpeg;base64,BBBB",
    };
    expect(imageRefVariables(image)).toEqual({ imageName: "my-car.jpg" });
  });

  it("is empty when nothing is selected", () => {
    expect(imageRefVariables(null)).toEqual({});
    expect(imageRefVariables(undefined)).toEqual({});
  });
});

describe("pickVisionArg — live gets pixels, scripted gets the seed id", () => {
  it("hands a live brain the pixels", () => {
    const image: RunImage = { imageId: "seed-1", pixels: "seed-1.jpg" };
    expect(pickVisionArg(image, true)).toBe("seed-1.jpg");
  });
  it("gives a live brain nothing when there are no pixels (never the seed id)", () => {
    const image: RunImage = { imageId: "seed-1" };
    expect(pickVisionArg(image, true)).toBeUndefined();
  });
  it("hands the scripted brain the seed id", () => {
    const image: RunImage = { imageId: "seed-1", pixels: "seed-1.jpg" };
    expect(pickVisionArg(image, false)).toBe("seed-1");
  });
  it("an upload falls back to its pixels for the scripted brain", () => {
    const image: RunImage = { imageName: "up.jpg", pixels: "data:blob" };
    expect(pickVisionArg(image, false)).toBe("data:blob");
  });
});

describe("helpers.vision threading via buildWorkers", () => {
  it("a selected seed image reaches the handler through a live VisionFn", async () => {
    const live = vi.fn<VisionFn>(async () => "MK70 ORJ");
    const support: VisionSupport = {
      read: live,
      live: true,
      resolve: () => ({ imageId: "uk-mk70-orj", pixels: "uk-mk70-orj.jpg" }),
    };
    const out = await runVisionHandler(readPromptBack, support);
    expect(out).toEqual({ plate: "MK70 ORJ" });
    // The live brain is handed the actual pixels, not the id.
    expect(live).toHaveBeenCalledWith("uk-mk70-orj.jpg", "<OCR>");
  });

  it("an uploaded image reaches the handler through a live VisionFn as pixels", async () => {
    const captured: VisionImage[] = [];
    const live: VisionFn = async (image) => {
      captured.push(image);
      return "UPLOADED";
    };
    const support: VisionSupport = {
      read: live,
      live: true,
      resolve: () => ({ imageName: "mine.jpg", pixels: "data:image/png;x" }),
    };
    const out = await runVisionHandler(readPromptBack, support);
    expect(out).toEqual({ plate: "UPLOADED" });
    expect(captured).toEqual(["data:image/png;x"]);
  });

  it("with NO live brain, falls back to a scripted-vision brain built from scriptedVision", async () => {
    // The runner builds this exactly as ExampleRunner does: the scripted VisionFn
    // from the example's `scriptedVision` id -> plate mapping.
    const scriptedVision: Record<string, string> = {
      "uk-mk70-orj": "MK70 ORJ",
      "uk-ni-ijz-8992": "IJZ 8992",
    };
    const { makeScriptedVisionBrain } = await import("./brains/vision");
    const support: VisionSupport = {
      read: makeScriptedVisionBrain(scriptedVision).read,
      live: false,
      resolve: () => ({ imageId: "uk-mk70-orj", pixels: "uk-mk70-orj.jpg" }),
    };
    const out = await runVisionHandler(readPromptBack, support);
    expect(out).toEqual({ plate: "MK70 ORJ" });
  });

  it("scripted fallback returns the UNKNOWN placeholder for an unknown / uploaded image", async () => {
    const { makeScriptedVisionBrain } = await import("./brains/vision");
    const support: VisionSupport = {
      read: makeScriptedVisionBrain({ "known-id": "AB12 CDE" }).read,
      live: false,
      resolve: () => ({ imageId: "not-a-seed", pixels: "not-a-seed.jpg" }),
    };
    const out = await runVisionHandler(readPromptBack, support);
    expect(out).toEqual({ plate: SCRIPTED_VISION_PLACEHOLDER });
  });

  it("helpers.vision never throws — a backend failure resolves to a string", async () => {
    const support: VisionSupport = {
      read: async () => {
        throw new Error("device lost");
      },
      live: true,
      resolve: () => ({ imageId: "seed", pixels: "seed.jpg" }),
    };
    const vision = makeVisionAccessor(support, "inst-1");
    await expect(vision("<OCR>")).resolves.toContain("device lost");
  });

  it("helpers.vision resolves to the placeholder when no image is selected", async () => {
    const support: VisionSupport = {
      read: async () => "should not be called",
      live: false,
      resolve: () => undefined,
    };
    const vision = makeVisionAccessor(support, "inst-1");
    await expect(vision("<OCR>")).resolves.toBe(SCRIPTED_VISION_PLACEHOLDER);
  });

  it("a live brain gets a neutral no-image message, not the scripted placeholder", async () => {
    const support: VisionSupport = {
      read: async () => "should not be called",
      live: true,
      resolve: () => undefined,
    };
    const vision = makeVisionAccessor(support, "inst-1");
    await expect(vision("<OCR>")).resolves.toBe(NO_LIVE_IMAGE_MESSAGE);
  });

  it("regression guard: without vision support, helpers.vision/image are undefined", async () => {
    const seen: HandlerHelpers[] = [];
    const handler: ExampleHandler = async (_job, helpers) => {
      seen.push(helpers);
      return {};
    };
    const model = oneTaskModel();
    const workers = buildWorkers(model, { "extract-plate": handler }, () => {});
    await workers["extract-plate-job"](SEED_JOB);
    expect(seen[0].vision).toBeUndefined();
    expect(seen[0].image).toBeUndefined();
    // The non-vision helpers a normal example relies on are untouched.
    expect(typeof seen[0].text).toBe("function");
    expect(typeof seen[0].num).toBe("function");
  });
});
