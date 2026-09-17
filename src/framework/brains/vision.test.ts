import { afterEach, describe, expect, it, vi } from "vitest";
import {
  backendInitAdvice,
  BrowserVisionBrain,
  createLoadAggregator,
  DEFAULT_VISION_MODEL,
  isBackendInitError,
  type LoadReport,
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
 * Transformers.js reports per file, and Florence-2 fetches four ONNX sessions
 * at once. Forwarding each report raw showed whichever file reported last — a
 * ~1 GB download rendering as a bar flickering between 0% and 1% while cycling
 * the same filenames, indistinguishable from a stalled fetch.
 */
describe("load progress prefers the library's own aggregate", () => {
  /**
   * 4.2's `DefaultProgressCallback` seeds its denominator from a metadata pass
   * over every expected file, so `progress_total` is complete from the first
   * event — unlike the fallback below, whose total grows as files announce
   * themselves. It emits the aggregate and *then* the raw per-file event.
   */
  it("uses progress_total and drops the raw event that follows it", () => {
    const tally = createLoadAggregator();

    expect(
      tally({ status: "progress_total", loaded: 250e6, total: 1000e6, progress: 25 }),
    ).toEqual({ progress: 0.25, text: "downloading 250 of 1,000 MB" });
    // Same bytes again, one file at a time — already counted.
    expect(
      tally({ status: "progress", file: "onnx/vision_encoder.onnx", loaded: 250e6, total: 350e6 }),
    ).toBeNull();
    expect(tally({ status: "done", file: "onnx/vision_encoder.onnx" })).toBeNull();
  });

  it("does not let the per-file fallback take over once an aggregate has arrived", () => {
    const tally = createLoadAggregator();
    tally({ status: "progress", file: "a.onnx", loaded: 10e6, total: 100e6 });
    tally({ status: "progress_total", loaded: 10e6, total: 900e6, progress: 1.1 });

    // The fallback would say 10/100; the aggregate knows about 900.
    expect(
      tally({ status: "progress", file: "a.onnx", loaded: 20e6, total: 100e6 }),
    ).toBeNull();
  });
});

describe("load progress falls back to summing files when there is no aggregate", () => {
  /** Interleaved, the way four parallel fetches actually arrive. */
  const INTERLEAVED: LoadReport[] = [
    { status: "initiate", file: "onnx/embed_tokens.onnx" },
    { status: "initiate", file: "onnx/vision_encoder.onnx" },
    { status: "progress", file: "onnx/embed_tokens.onnx", loaded: 75e6, total: 150e6 },
    { status: "progress", file: "onnx/vision_encoder.onnx", loaded: 35e6, total: 350e6 },
    { status: "progress", file: "onnx/embed_tokens.onnx", loaded: 150e6, total: 150e6 },
    { status: "done", file: "onnx/embed_tokens.onnx" },
    { status: "progress", file: "onnx/vision_encoder.onnx", loaded: 350e6, total: 350e6 },
  ];

  it("reports total bytes fetched over total bytes known", () => {
    const tally = createLoadAggregator();
    const reported = INTERLEAVED.map((r) => tally(r)!.progress);

    // 0, 0 (no sizes yet), 75/150, 110/500, 185/500, 185/500 (done is a no-op
    // for an already-complete file), 500/500.
    expect(reported.map((p) => +p.toFixed(3))).toEqual([
      0, 0, 0.5, 0.22, 0.37, 0.37, 1,
    ]);
  });

  it("never reports the last file's own progress as the whole download", () => {
    const tally = createLoadAggregator();
    let last = { progress: 0, text: "" };
    for (const report of INTERLEAVED) last = tally(report)!;

    // The raw stream's final event says vision_encoder is at 100%; the whole
    // download only is because embed_tokens finished too.
    expect(last.progress).toBe(1);
    expect(last.text).toBe("downloading 500 of 500 MB");
  });

  it("completes a file on `done`, which carries no byte counts", () => {
    const tally = createLoadAggregator();
    tally({ status: "progress", file: "a.onnx", loaded: 10e6, total: 100e6 });
    expect(tally({ status: "done", file: "a.onnx" })!.progress).toBe(1);
  });

  it("falls back to the status while no file has announced a size", () => {
    const tally = createLoadAggregator();
    expect(tally({ status: "initiate", file: "a.onnx" })).toEqual({
      progress: 0,
      text: "initiate",
    });
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

/**
 * A backend that never started and a download that failed reach the same catch,
 * and the advice for one is wrong for the other: "try the smaller model" costs
 * a reader another gigabyte to reproduce a failure that has nothing to do with
 * the model. The real message below is the one a CSP without `blob:` in
 * `script-src` produces — recorded verbatim so the classifier is tested against
 * what ORT actually emits rather than a paraphrase of it.
 */
describe("backend-init failures are told apart from download failures", () => {
  const ortBlockedByCsp =
    "no available backend found. ERR: [webgpu] TypeError: Failed to fetch " +
    "dynamically imported module: blob:http://localhost:3000/32414a2e-e2a4-46a9-a553-996715057eaa";

  it("recognises ORT's blocked-backend message", () => {
    expect(isBackendInitError(ortBlockedByCsp)).toBe(true);
  });

  it("does not claim a genuine download failure", () => {
    // These must keep the default advice: here a smaller model and checking the
    // connection are exactly the right things to suggest.
    expect(isBackendInitError("Failed to fetch")).toBe(false);
    expect(
      isBackendInitError("Unauthorized access to file: onnx/model.onnx"),
    ).toBe(false);
    expect(
      isBackendInitError(
        "TypeError: Failed to execute 'add' on 'Cache': Request failed",
      ),
    ).toBe(false);
  });

  it("does not claim the Transformers.js chunk failing to download", () => {
    // `connect()` lazy-imports Transformers.js inside the same `try` as the
    // model load, so a chunk that genuinely 404s or is cut off arrives here
    // wearing the same sentence as the CSP-blocked ORT backend. Only the scheme
    // separates them, which is why the pattern anchors on `blob:` — matching
    // `dynamically imported module` alone reports a real deployment fault as a
    // missing CSP source and buries it.
    expect(
      isBackendInitError(
        "Failed to fetch dynamically imported module: " +
          "https://camunda.com/demo-app/assets/transformers.web-CWCFQ1o8.js",
      ),
    ).toBe(false);
    expect(
      isBackendInitError(
        "Failed to fetch dynamically imported module: /assets/transformers.web-CWCFQ1o8.js",
      ),
    ).toBe(false);
  });

  it("steers away from re-downloading, and names the CSP directive that fixes it", () => {
    const advice = backendInitAdvice();
    expect(advice).toContain("script-src");
    expect(advice).toContain("blob:");
    // The specific claim being guarded: it must not repeat the default advice.
    expect(advice).not.toMatch(/try the smaller/i);
  });

  it("offers CSP as a lead rather than a diagnosis, and keeps the other causes", () => {
    // A blob: import fails identically whether or not `script-src` allows
    // `blob:`, so naming CSP as *the* cause would send readers whose policy is
    // already correct off to edit it and skip the real driver/ORT question.
    // The fall-through has to survive alongside the CSP pointer.
    const advice = backendInitAdvice();
    expect(advice).toMatch(/driver/i);
    expect(advice).not.toMatch(/the cause is known|is missing `blob:`/i);
  });
});
