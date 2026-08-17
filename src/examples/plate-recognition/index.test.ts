import { describe, expect, it } from "vitest";
import type { ActivatedJob, JobHandler } from "@nanobpm/bojtos-react";
import { buildWorkers } from "../../framework/compile";
import { parseModel } from "../../framework/model";
import { makeScriptedVisionBrain } from "../../framework/brains/vision";
import type { ExampleHandler, Trace } from "../../framework/types";
import type { ModelInfo } from "../../framework/model";
import type { RunImage, VisionSupport } from "../../framework/imageInput";
import { EXAMPLES } from "../index";
import { plateRecognition } from "./index";
import manifest from "./images.json";

/**
 * S2 — the plate-recognition example. These tests are offline (no GPU, no
 * network): they drive the shipped handler sources through the framework's
 * `buildWorkers`/`helpersFor` with the deterministic scripted-vision brain the
 * runner builds from `ExampleDef.scriptedVision`, exactly as `ExampleRunner`
 * does when no live browser-vision brain is connected.
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

/** Run one handler for `elementId` with the given run image + variables. */
async function runHandler(
  elementId: "ExtractPlate" | "RecordResult",
  {
    image,
    variables = {},
    live = false,
  }: { image?: RunImage; variables?: Record<string, unknown>; live?: boolean },
): Promise<Record<string, unknown>> {
  const jobType = elementId === "ExtractPlate" ? "extract-plate" : "record-result";
  const byElement: Record<string, ExampleHandler> = {
    ExtractPlate: compile(extractSource),
    RecordResult: compile(recordSource),
  };
  const support: VisionSupport = {
    read: makeScriptedVisionBrain(plateRecognition.scriptedVision).read,
    live,
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

describe("registration is additive", () => {
  it("registers plate-recognition without dropping any other example", () => {
    const ids = EXAMPLES.map((e) => e.id);
    expect(ids).toContain("plate-recognition");
    for (const id of [
      "rocket-launch",
      "seed-export-compliance",
      "order-process",
      "order-process-boundary-events",
    ]) {
      expect(ids).toContain(id);
    }
    // Exactly one manifest per id — no accidental duplicate.
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("manifest wiring (contracts A + B, from images.json)", () => {
  it("populates scriptedVision as id -> groundTruthPlate for every seed image", () => {
    for (const img of images) {
      expect(plateRecognition.scriptedVision![img.id]).toBe(img.groundTruthPlate);
    }
    expect(Object.keys(plateRecognition.scriptedVision!)).toHaveLength(images.length);
  });

  it("offers every seed image in the start gallery with a resolvable asset URL", () => {
    const seedIds = plateRecognition.imageInput!.seedImages.map((s) => s.id).sort();
    expect(seedIds).toEqual(images.map((i) => i.id).sort());
    for (const s of plateRecognition.imageInput!.seedImages) {
      expect(typeof s.file).toBe("string");
      expect(s.file.length).toBeGreaterThan(0);
      expect(typeof s.thumb).toBe("string");
    }
  });

  it("registers both user-task forms", () => {
    expect(plateRecognition.forms).toHaveProperty("plate-recognition-confirm");
    expect(plateRecognition.forms).toHaveProperty("plate-recognition-manual");
  });
});

describe("BPMN model", () => {
  const model = parseModel(plateRecognition.bpmn);

  it("parses with no error diagnostics", () => {
    expect(model.diagnostics.filter((d) => d.severity === "error")).toEqual([]);
  });

  it("has the two service-task job types and two user tasks", () => {
    const jobTypes = model.tasks.map((t) => t.jobType);
    expect(jobTypes).toContain("extract-plate");
    expect(jobTypes).toContain("record-result");
    const userTaskForms = model.userTasks.map((u) => u.formId);
    expect(userTaskForms).toContain("plate-recognition-confirm");
    expect(userTaskForms).toContain("plate-recognition-manual");
  });

  it("routes the low-confidence read down the manual-entry path via the gateway", () => {
    // The 'read' flow is guarded by plateReadOk; the gateway's default (an
    // empty / low-confidence read, i.e. plateReadOk !== true) goes to the
    // manual-entry user task. This is what makes a scripted UNKNOWN route to
    // manual entry rather than the pre-filled confirm form.
    expect(plateRecognition.bpmn).toContain("=plateReadOk = true");
    expect(plateRecognition.bpmn).toContain('default="Flow_CouldntRead"');
    expect(plateRecognition.bpmn).toContain(
      '<bpmn:sequenceFlow id="Flow_CouldntRead" name="couldn\'t read" sourceRef="Gateway_Read" targetRef="ManualEntry"',
    );
  });
});

describe("extract-plate handler (scripted-vision fallback)", () => {
  it("reads the seed image's known plate and marks the read confident", async () => {
    const seed = images[0];
    const out = await runHandler("ExtractPlate", {
      image: { imageId: seed.id, pixels: `${seed.id}.jpg` },
    });
    expect(out.plateReadOk).toBe(true);
    expect(out.modelPlate).toBe(seed.groundTruthPlate.toUpperCase());
    // The confirm form pre-fills from confirmedPlate.
    expect(out.confirmedPlate).toBe(seed.groundTruthPlate.toUpperCase());
  });

  it("marks an unknown / uploaded image as low-confidence and leaves the plate blank", async () => {
    const out = await runHandler("ExtractPlate", {
      // An id absent from scriptedVision -> scripted brain's UNKNOWN placeholder.
      image: { imageId: "not-a-seed-image", pixels: "not-a-seed.jpg" },
    });
    expect(out.plateReadOk).toBe(false);
    expect(out.modelPlate).toBe("");
    expect(out.confirmedPlate).toBe("");
  });

  it("treats 'no image selected' as low-confidence rather than throwing", async () => {
    const out = await runHandler("ExtractPlate", { image: undefined });
    expect(out.plateReadOk).toBe(false);
  });
});

describe("record-result handler (the process governs)", () => {
  it("confirming the model's reading unchanged records it and leaves corrected false", async () => {
    const out = await runHandler("RecordResult", {
      variables: { modelPlate: "MK70 ORJ", confirmedPlate: "MK70 ORJ" },
    });
    expect(out.plate).toBe("MK70 ORJ");
    expect(out.corrected).toBe(false);
  });

  it("correcting the confirm form changes the recorded plate and sets corrected", async () => {
    const out = await runHandler("RecordResult", {
      variables: { modelPlate: "MK7O ORJ", confirmedPlate: "MK70 ORJ" },
    });
    expect(out.plate).toBe("MK70 ORJ");
    expect(out.corrected).toBe(true);
  });

  it("a whitespace/case-only difference is not counted as a correction", async () => {
    const out = await runHandler("RecordResult", {
      variables: { modelPlate: "MK70 ORJ", confirmedPlate: "  mk70   orj " },
    });
    expect(out.corrected).toBe(false);
  });

  it("a manually-entered plate (model read nothing) counts as a correction", async () => {
    const out = await runHandler("RecordResult", {
      variables: { modelPlate: "", confirmedPlate: "GWAN EUM" },
    });
    expect(out.plate).toBe("GWAN EUM");
    expect(out.corrected).toBe(true);
  });
});

describe("end-to-end (offline, scripted vision)", () => {
  it("reads a seed plate then records it unchanged through both handlers", async () => {
    const seed = images[1];
    const extracted = await runHandler("ExtractPlate", {
      image: { imageId: seed.id, pixels: `${seed.id}.jpg` },
    });
    expect(extracted.plateReadOk).toBe(true);
    const recorded = await runHandler("RecordResult", {
      variables: {
        modelPlate: extracted.modelPlate,
        confirmedPlate: extracted.confirmedPlate,
      },
    });
    expect(recorded.plate).toBe(seed.groundTruthPlate.toUpperCase());
    expect(recorded.corrected).toBe(false);
  });
});
