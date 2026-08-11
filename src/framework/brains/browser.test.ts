import { afterEach, describe, expect, it, vi } from "vitest";
import {
  BROWSER_MODELS,
  DEFAULT_BROWSER_MODEL,
  estimateAvailableVramMB,
  insufficientVramReason,
  webgpuAvailable,
  webgpuUnavailableReason,
} from "./browser";
// `?raw` (a Vite-native import suffix) pulls the file in as a string without
// needing Node's `fs`/`url` typings, which this browser-focused tsconfig
// doesn't include.
import browserSource from "./browser.ts?raw";

describe("webgpuUnavailableReason", () => {
  afterEach(() => {
    delete (navigator as { gpu?: unknown }).gpu;
    vi.restoreAllMocks();
  });

  it("explains that WebGPU isn't exposed at all when navigator.gpu is missing", async () => {
    const reason = await webgpuUnavailableReason();
    expect(reason).toContain("doesn't expose WebGPU");
    expect(await webgpuAvailable()).toBe(false);
  });

  it("explains that no adapter is available when requestAdapter() resolves null", async () => {
    Object.defineProperty(navigator, "gpu", {
      value: { requestAdapter: () => Promise.resolve(null) },
      configurable: true,
    });
    const reason = await webgpuUnavailableReason();
    expect(reason).toContain("no GPU adapter is available");
    expect(await webgpuAvailable()).toBe(false);
  });

  it("returns null once an adapter resolves", async () => {
    Object.defineProperty(navigator, "gpu", {
      value: { requestAdapter: () => Promise.resolve({}) },
      configurable: true,
    });
    expect(await webgpuUnavailableReason()).toBeNull();
    expect(await webgpuAvailable()).toBe(true);
  });

  it("surfaces a requestAdapter() rejection as a reason rather than throwing", async () => {
    Object.defineProperty(navigator, "gpu", {
      value: {
        requestAdapter: () => Promise.reject(new Error("boom")),
      },
      configurable: true,
    });
    const reason = await webgpuUnavailableReason();
    expect(reason).toContain("boom");
  });
});

describe("BROWSER_MODELS / DEFAULT_BROWSER_MODEL", () => {
  it("has a non-empty curated shortlist with the default among them", () => {
    expect(BROWSER_MODELS.length).toBeGreaterThan(0);
    expect(BROWSER_MODELS.some((m) => m.id === DEFAULT_BROWSER_MODEL)).toBe(true);
  });

  it("labels each model with an approximate download size", () => {
    for (const m of BROWSER_MODELS) {
      expect(m.label).toContain(m.downloadLabel);
    }
  });
});

describe("insufficientVramReason", () => {
  const model = {
    id: "test-model",
    label: "Test Model",
    downloadLabel: "~1 GB",
    vramRequiredMB: 2000,
  };

  it("returns null when the estimate is unknown", () => {
    expect(insufficientVramReason(model, null)).toBeNull();
  });

  it("returns null when the model doesn't declare a requirement", () => {
    expect(insufficientVramReason({ ...model, vramRequiredMB: undefined }, 100)).toBeNull();
  });

  it("returns null when the estimate covers the requirement", () => {
    expect(insufficientVramReason(model, 4096)).toBeNull();
  });

  it("names the model and the shortfall when the estimate falls short", () => {
    const reason = insufficientVramReason(model, 1024);
    expect(reason).toContain("Test Model");
    expect(reason).toContain("2000");
    expect(reason).toContain("1024");
  });
});

describe("estimateAvailableVramMB", () => {
  afterEach(() => {
    delete (navigator as { deviceMemory?: number }).deviceMemory;
  });

  it("returns null when navigator.deviceMemory isn't exposed", () => {
    expect(estimateAvailableVramMB()).toBeNull();
  });

  it("converts navigator.deviceMemory (GB) to MB", () => {
    Object.defineProperty(navigator, "deviceMemory", {
      value: 8,
      configurable: true,
    });
    expect(estimateAvailableVramMB()).toBe(8 * 1024);
  });
});

/**
 * Regression guard for issue #9's bundle-size work: WebLLM is a ~6 MB
 * (~2.1 MB gzip) dependency that must only ever be reached via a dynamic
 * `import()` inside `BrowserBrain.connect()`, so it stays out of the
 * initial JS entirely (see `vite.config.ts`'s `vendor-webllm` chunk and
 * `tools/bundle-budget/check.mjs`). A future edit that hoists
 * `import { CreateMLCEngine } from "@mlc-ai/web-llm"` to the top of this
 * file (a static import) would compile fine and pass every functional test,
 * but would silently drag the whole WebLLM bundle back onto the page's
 * first paint. Assert against the source text directly, since that's the
 * one thing that actually determines static vs. dynamic at build time.
 */
describe("BrowserBrain WebLLM import stays lazy", () => {
  it("has no static top-level import of @mlc-ai/web-llm", () => {
    const staticImport =
      /^\s*import\s+(?!type\s).*from\s+["']@mlc-ai\/web-llm["']/m;
    expect(browserSource).not.toMatch(staticImport);

    const dynamicImport = /await\s+import\(\s*["']@mlc-ai\/web-llm["']\s*\)/;
    expect(browserSource).toMatch(dynamicImport);
  });
});
