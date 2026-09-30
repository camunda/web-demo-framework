import { afterEach, describe, expect, it, vi } from "vitest";

async function freshRegistry() {
  vi.resetModules();
  return import("./index");
}

const learnIds = (examples: { id: string; group?: string }[]) =>
  examples.filter((e) => e.group === "learn-bpmn").map((e) => e.id);

describe("VITE_INCLUDE_LEARN_BPMN", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("includes the learn-bpmn examples when unset", async () => {
    vi.stubEnv("VITE_INCLUDE_LEARN_BPMN", undefined);
    const { EXAMPLES } = await freshRegistry();
    expect(learnIds(EXAMPLES)).toContain("learn-service-task");
  });

  it.each(["true", "1", ""])("includes them when set to %j", async (value) => {
    vi.stubEnv("VITE_INCLUDE_LEARN_BPMN", value);
    const { EXAMPLES } = await freshRegistry();
    expect(learnIds(EXAMPLES)).toContain("learn-service-task");
  });

  it.each(["false", "FALSE", "0", " false "])(
    "drops every learn-bpmn example, and only those, when set to %j",
    async (value) => {
      vi.stubEnv("VITE_INCLUDE_LEARN_BPMN", undefined);
      const all = (await freshRegistry()).EXAMPLES;

      vi.stubEnv("VITE_INCLUDE_LEARN_BPMN", value);
      const { EXAMPLES } = await freshRegistry();

      expect(learnIds(EXAMPLES)).toEqual([]);
      expect(EXAMPLES.map((e) => e.id)).toEqual(
        all.filter((e) => e.group !== "learn-bpmn").map((e) => e.id),
      );
    },
  );
});
