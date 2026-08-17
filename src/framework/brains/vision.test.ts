import { afterEach, describe, expect, it, vi } from "vitest";
import {
  BrowserVisionBrain,
  DEFAULT_VISION_MODEL,
  makeScriptedVisionBrain,
  OCR_TASK,
  OCR_WITH_REGION_TASK,
  SCRIPTED_VISION_PLACEHOLDER,
  ScriptedVisionBrain,
  VISION_MODELS,
} from "./vision";
import { webgpuAvailable, webgpuUnavailableReason } from "./webgpu";
// `?raw` (a Vite-native import suffix) pulls the file in as a string so the
// bundle-lazy guard can assert against the source text directly.
import visionSource from "./vision.ts?raw";
// Read index.html through Vite (same as csp.test.ts) to assert the vision
// model host is covered by the deployed CSP.
import html from "../../../index.html?raw";

describe("VisionBrain seam contract", () => {
  it("scripted-vision satisfies the seam shape (kind, model, read, dispose)", () => {
    const brain = new ScriptedVisionBrain({ "seed-1": "AB12 CDE" });
    expect(brain.kind).toBe("scripted-vision");
    expect(brain.model).toBeNull();
    expect(typeof brain.read).toBe("function");
    expect(() => brain.dispose()).not.toThrow();
  });

  it("browser-vision satisfies the seam shape and starts disconnected", () => {
    const brain = new BrowserVisionBrain();
    expect(brain.kind).toBe("browser-vision");
    expect(brain.model).toBeNull();
    expect(typeof brain.read).toBe("function");
    expect(typeof brain.connect).toBe("function");
    expect(typeof brain.cancelConnect).toBe("function");
    expect(() => brain.dispose()).not.toThrow();
  });
});

describe("VISION_MODELS / DEFAULT_VISION_MODEL", () => {
  it("has a non-empty curated shortlist with the default among them", () => {
    expect(VISION_MODELS.length).toBeGreaterThan(0);
    expect(VISION_MODELS.some((m) => m.id === DEFAULT_VISION_MODEL)).toBe(true);
  });

  it("labels each model with an approximate download size", () => {
    for (const m of VISION_MODELS) {
      expect(m.label).toContain(m.downloadLabel);
    }
  });

  it("defaults to a Florence-2 build hosted on Hugging Face", () => {
    expect(DEFAULT_VISION_MODEL).toContain("Florence-2");
    expect(DEFAULT_VISION_MODEL).toContain("onnx-community/");
  });
});

describe("scripted-vision ground truth", () => {
  it("returns the injected ground truth for a known seed id (Record lookup)", async () => {
    const brain = makeScriptedVisionBrain({ "seed-1": "AB12 CDE" });
    expect(await brain.read("seed-1", OCR_TASK)).toBe("AB12 CDE");
  });

  it("returns the injected ground truth via a function lookup", async () => {
    const brain = new ScriptedVisionBrain((id) =>
      id === "seed-2" ? "1-ABC-234" : undefined,
    );
    expect(await brain.read("seed-2", OCR_TASK)).toBe("1-ABC-234");
  });

  it("returns the placeholder for an unknown seed id", async () => {
    const brain = new ScriptedVisionBrain({ "seed-1": "AB12 CDE" });
    expect(await brain.read("nope", OCR_TASK)).toBe(SCRIPTED_VISION_PLACEHOLDER);
  });

  it("returns the placeholder for an uploaded (Blob) image it has no id for", async () => {
    const brain = new ScriptedVisionBrain({ "seed-1": "AB12 CDE" });
    const blob = new Blob(["not a real image"], { type: "image/jpeg" });
    expect(await brain.read(blob, OCR_TASK)).toBe(SCRIPTED_VISION_PLACEHOLDER);
  });

  it("returns the placeholder when no lookup was injected at all", async () => {
    const brain = new ScriptedVisionBrain();
    expect(await brain.read("seed-1", OCR_TASK)).toBe(
      SCRIPTED_VISION_PLACEHOLDER,
    );
  });

  it("streams the result through onToken", async () => {
    const brain = new ScriptedVisionBrain({ "seed-1": "AB12 CDE" });
    const tokens: string[] = [];
    await brain.read("seed-1", OCR_TASK, (d) => tokens.push(d));
    expect(tokens.join("")).toBe("AB12 CDE");
  });
});

describe("browser-vision WebGPU-absent path", () => {
  afterEach(() => {
    delete (navigator as { gpu?: unknown }).gpu;
    vi.restoreAllMocks();
  });

  it("connect() rejects with the shared WebGPU reason so the caller can fall back to scripted-vision", async () => {
    // No navigator.gpu at all — same condition browser.test.ts exercises.
    expect(await webgpuAvailable()).toBe(false);
    const reason = await webgpuUnavailableReason();
    expect(reason).toContain("doesn't expose WebGPU");

    const brain = new BrowserVisionBrain();
    await expect(brain.connect(DEFAULT_VISION_MODEL)).rejects.toThrow(
      /doesn't expose WebGPU/,
    );

    // The reader must never be stranded: a scripted-vision brain built from the
    // same ground truth reads the seed plate offline.
    const fallback = makeScriptedVisionBrain({ "seed-1": "AB12 CDE" });
    expect(await fallback.read("seed-1", OCR_TASK)).toBe("AB12 CDE");
  });

  it("read() before connect() throws rather than silently returning", async () => {
    const brain = new BrowserVisionBrain();
    await expect(brain.read("seed-1", OCR_TASK)).rejects.toThrow(
      /before connect/,
    );
  });
});

describe("region task token is available for a bounding box", () => {
  it("exposes both the plain and region OCR task tokens", () => {
    expect(OCR_TASK).toBe("<OCR>");
    expect(OCR_WITH_REGION_TASK).toBe("<OCR_WITH_REGION>");
  });
});

/**
 * Regression guard mirroring `browser.test.ts`: `@huggingface/transformers` is a
 * multi-MB dependency that must only ever be reached via a dynamic `import()`
 * inside `BrowserVisionBrain.connect()`, so it stays off the initial bundle and
 * `npm run budget` keeps passing. A future edit hoisting it to a static
 * top-level import would compile and pass every functional test while silently
 * dragging the whole ONNX runtime onto first paint — assert against the source.
 */
describe("BrowserVisionBrain transformers import stays lazy", () => {
  it("has no static top-level import of @huggingface/transformers", () => {
    const staticImport =
      /^\s*import\s+(?!type\s)(?:.*from\s+)?["']@huggingface\/transformers["']/m;
    expect(visionSource).not.toMatch(staticImport);

    const dynamicImport = /import\(\s*["']@huggingface\/transformers["']\s*\)/;
    expect(visionSource).toMatch(dynamicImport);
  });
});

/**
 * The vision weights are ONNX files served from Hugging Face (the
 * `onnx-community/*` repos), fetched by the dynamic `@huggingface/transformers`
 * import at connect time — the same hosts WebLLM already uses. Assert the
 * deployed CSP's `connect-src` covers them, so a built page doesn't silently
 * misattribute a CSP-blocked fetch as "check your connection" (see csp.test.ts).
 */
describe("index.html connect-src covers the vision model host", () => {
  function connectSrc(): string[] {
    const csp =
      /content="([^"]*Content-Security|[^"]*default-src[^"]*)"/.exec(html);
    const content = csp?.[1] ?? "";
    const directive = content
      .split(";")
      .map((part) => part.trim())
      .find((part) => part.startsWith("connect-src "));
    expect(directive, "index.html has a connect-src directive").toBeTruthy();
    return directive!.slice("connect-src ".length).split(/\s+/);
  }

  function allowed(sources: string[], url: string): boolean {
    const { host } = new URL(url);
    return sources.some((source) => {
      if (!source.startsWith("https://")) return false;
      const pattern = source.slice("https://".length);
      if (pattern.startsWith("*.")) return host.endsWith(pattern.slice(1));
      return host === pattern;
    });
  }

  it("allows the Hugging Face hosts the ONNX weights are fetched from", () => {
    const sources = connectSrc();
    for (const url of [
      "https://huggingface.co/onnx-community/Florence-2-base-ft/resolve/main/onnx/model.onnx",
      "https://cdn-lfs.huggingface.co/repos/abc/model_quantized.onnx",
      "https://us.aws.cdn.hf.co/xet-bridge-us/abc123",
    ]) {
      expect(allowed(sources, url), url).toBe(true);
    }
  });
});
