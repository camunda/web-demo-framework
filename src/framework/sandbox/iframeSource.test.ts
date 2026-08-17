import { describe, expect, it } from "vitest";
import { buildSandboxDocument } from "./iframeSource";

/**
 * Contract B end-to-end coverage for the sandbox seam. The handler-facing
 * `imageInput.test.ts` exercises the *host-side* helpers by calling an
 * `ExampleHandler` directly, but in production every handler runs inside the
 * sandboxed iframe (`compileHandler` → `runHandlerSandboxed`), which builds its
 * own helpers object. A real cross-origin iframe can't run under jsdom (see
 * `selfTest.ts`), so we assert the generated sandbox document actually wires
 * `helpers.vision`/`helpers.image` back to the host — the regression that would
 * otherwise silently leave Contract B broken in real runs while the suite stays
 * green.
 */
describe("buildSandboxDocument (contract B sandbox bridge)", () => {
  const doc = buildSandboxDocument();

  it("exposes vision/image only when the host wired vision (hasVision)", () => {
    expect(doc).toContain("hasVision");
    expect(doc).toContain("helpers.vision");
    expect(doc).toContain("helpers.image");
  });

  it("delegates vision/image calls back to the host by request kind", () => {
    expect(doc).toContain("vision-request");
    expect(doc).toContain("image-request");
  });

  it("settles delegated calls on the host's helper responses", () => {
    expect(doc).toContain("helper-result");
    expect(doc).toContain("helper-error");
    expect(doc).toContain("pendingCalls");
  });
});
