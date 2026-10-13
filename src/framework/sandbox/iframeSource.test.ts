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

/**
 * Runs the generated script itself, with `parent`/`window` stood in: no
 * isolation is being tested, only what the script posts back for a result.
 */
function runInStandInSandbox(source: string): Promise<Record<string, unknown>> {
  const script = /<script>([\s\S]*)<\/script>/.exec(buildSandboxDocument())![1];
  return new Promise((resolve) => {
    let onMessage: (event: { data: unknown }) => void = () => {};
    const parent = {
      postMessage(message: Record<string, unknown>) {
        if (message.kind === "result" || message.kind === "error") resolve(message);
      },
    };
    const window = {
      addEventListener: (_: string, fn: typeof onMessage) => (onMessage = fn),
    };
    // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
    new Function("parent", "window", script)(parent, window);
    onMessage({ data: { kind: "run-handler", id: "1", source, job: { variables: {} } } });
  });
}

/**
 * A function or symbol result can't be structured-cloned, so posting it threw
 * a DataCloneError before the host's own return-shape check ever saw it.
 */
describe("buildSandboxDocument (a handler's return value)", () => {
  it.each([
    ["() => () => 1", "a function"],
    ["() => Symbol('x')", "a symbol"],
    ["() => 42", "a number"],
    ["() => [1, 2]", "an array"],
  ])("fails `%s` with a message naming %s", async (source, what) => {
    await expect(runInStandInSandbox(source)).resolves.toEqual({
      kind: "error",
      id: "1",
      message: `Handler returned ${what} — return an object of variables to merge, or nothing.`,
    });
  });

  it.each([["() => ({ packed: true })"], ["() => null"], ["() => {}"]])("posts `%s` as a result", async (source) => {
    await expect(runInStandInSandbox(source)).resolves.toMatchObject({ kind: "result", id: "1" });
  });
});
