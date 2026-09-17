import { describe, expect, it } from "vitest";
import { prebuiltAppConfig } from "@mlc-ai/web-llm";
// Read through Vite rather than `node:fs`: `src` has no Node types, and this
// keeps the test reading the same file the build consumes.
import html from "../../../index.html?raw";

/**
 * Guards `index.html`'s CSP against what the brains actually need: the hosts
 * the in-browser brain fetches from, and the `blob:` script source the vision
 * brain's ONNX Runtime backend loads itself from.
 *
 * This is worth a test because the failures are silent and misattributed: a
 * CSP-blocked `fetch` throws the same `TypeError: Failed to fetch` as being
 * offline, so the UI says "check your connection" and the reader believes it,
 * and a CSP-blocked module import surfaces as ORT's "no available backend
 * found", which reads like the GPU's fault. Nothing in dev catches either —
 * `vite.config.ts`'s `strip-dev-csp` removes the tag from `npm run dev`, so the
 * policy only ever applies to a built, deployed page.
 */

function sourcesFor(name: string): string[] {
  const csp = /content="([^"]*Content-Security|[^"]*default-src[^"]*)"/.exec(html);
  const content = csp?.[1] ?? "";
  const directive = content
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name} `));
  expect(directive, `index.html has a ${name} directive`).toBeTruthy();
  return directive!.slice(name.length + 1).split(/\s+/);
}

/**
 * CSP host matching: `*.example.com` matches subdomains at any depth
 * (`a.example.com`, `a.b.example.com`) but not the apex `example.com`, which is
 * why the allowlist names `huggingface.co` separately from `*.huggingface.co`.
 */
function allowed(sources: string[], url: string): boolean {
  const { host } = new URL(url);
  return sources.some((source) => {
    if (!source.startsWith("https://")) return false;
    const pattern = source.slice("https://".length);
    if (pattern.startsWith("*.")) return host.endsWith(pattern.slice(1));
    return host === pattern;
  });
}

describe("index.html script-src", () => {
  const sources = sourcesFor("script-src");

  it("allows blob:, which the vision brain's ONNX Runtime backend needs", () => {
    // ORT brings up its WebGPU backend by `import()`ing its wasm glue module
    // from a `URL.createObjectURL` blob, on the main thread. Drop this source
    // and Florence-2 never loads — while every other brain keeps working, and
    // while the weight downloads already in flight carry on in the background,
    // so the reader watches a progress bar for a model that has already failed.
    //
    // `worker-src 'self' blob:` does not stand in for it, which is the part
    // that makes this worth asserting: a main-thread module import is matched
    // by `script-src-elem`, and with `script-src-elem` unset that falls back to
    // `script-src` — a different directive from the one already allowing blobs.
    expect(sources).toContain("blob:");
  });
});

describe("index.html connect-src", () => {
  const sources = sourcesFor("connect-src");

  it("allows every host WebLLM's prebuilt config points at", () => {
    const hosts = new Set<string>();
    for (const record of prebuiltAppConfig.model_list) {
      hosts.add(record.model);
      if (record.model_lib) hosts.add(record.model_lib);
    }
    const blocked = [...hosts].filter((url) => !allowed(sources, url));
    expect(blocked).toEqual([]);
  });

  it("allows the storage hosts a weight download is redirected to", () => {
    // Not derivable from the config: `huggingface.co/.../resolve/...` 302s to
    // whichever storage host serves the repo, and CSP is enforced on the
    // redirect target. These are the ones seen in practice; the wildcard is
    // what actually keeps this working when Hugging Face moves storage again.
    for (const url of [
      "https://us.aws.cdn.hf.co/xet-bridge-us/abc123",
      "https://cdn-lfs.huggingface.co/repos/abc/params_shard_0.bin",
      "https://cdn-lfs-us-1.hf.co/repos/abc/params_shard_0.bin",
      "https://transfer.xethub.hf.co/xorbs/default/abc",
    ]) {
      expect(allowed(sources, url), url).toBe(true);
    }
  });

  it("allows an arbitrary https provider, but never plaintext or a bare wildcard", () => {
    // The Endpoint brain's remote-provider mode dials a URL the reader types,
    // so `https:` is deliberate. The named Hugging Face sources stay: they
    // document what the in-browser brain needs and survive a later tightening
    // of `https:` back to an allowlist.
    expect(sources).toContain("https:");
    expect(sources).not.toContain("*");
    expect(sources).not.toContain("http:");
    expect(sources).not.toContain("data:");
  });

  it("matches subdomains but not the apex, so the apex is listed in its own right", () => {
    // The distinction the comment on `allowed()` describes, asserted: were
    // `*.huggingface.co` enough on its own, dropping `huggingface.co` from the
    // allowlist would still pass — and every model download would break, since
    // that apex is the host WebLLM's config actually names.
    expect(allowed(["https://*.hf.co"], "https://us.aws.cdn.hf.co/x")).toBe(true);
    expect(allowed(["https://*.hf.co"], "https://hf.co/x")).toBe(false);
    expect(sources).toContain("https://huggingface.co");
  });
});
