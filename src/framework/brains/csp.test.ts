import { describe, expect, it } from "vitest";
import { prebuiltAppConfig } from "@mlc-ai/web-llm";
// Read through Vite rather than `node:fs`: `src` has no Node types, and this
// keeps the test reading the same file the build consumes.
import html from "../../../index.html?raw";

/**
 * Guards `index.html`'s `connect-src` against the hosts the in-browser brain
 * actually fetches from.
 *
 * This is worth a test because the failure is silent and misattributed: a
 * CSP-blocked `fetch` throws the same `TypeError: Failed to fetch` as being
 * offline, so the UI says "check your connection" and the reader believes it.
 * Nothing in dev catches it either — `vite.config.ts`'s `strip-dev-csp` removes
 * the tag from `npm run dev`, so the policy only ever applies to a built,
 * deployed page.
 */

function connectSrc(): string[] {
  const csp = /content="([^"]*Content-Security|[^"]*default-src[^"]*)"/.exec(html);
  const content = csp?.[1] ?? "";
  const directive = content
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("connect-src "));
  expect(directive, "index.html has a connect-src directive").toBeTruthy();
  return directive!.slice("connect-src ".length).split(/\s+/);
}

/** CSP host matching: `*.example.com` matches any number of leading labels. */
function allowed(sources: string[], url: string): boolean {
  const { host } = new URL(url);
  return sources.some((source) => {
    if (!source.startsWith("https://")) return false;
    const pattern = source.slice("https://".length);
    if (pattern.startsWith("*.")) return host.endsWith(pattern.slice(1));
    return host === pattern;
  });
}

describe("index.html connect-src", () => {
  const sources = connectSrc();

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

  it("does not widen to a bare wildcard", () => {
    expect(sources).not.toContain("*");
    expect(sources).not.toContain("https:");
  });
});
