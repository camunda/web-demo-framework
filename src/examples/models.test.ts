import { describe, expect, it } from "vitest";
import { parseModel } from "../framework/model";

/**
 * Every example model, as raw XML. `import.meta.glob` with `eager` so this
 * covers whatever is in the tree, including examples added after this test.
 */
const models = import.meta.glob("./*/model.bpmn", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

describe("example models", () => {
  it("finds every example's model", () => {
    expect(Object.keys(models).length).toBeGreaterThan(0);
  });

  /**
   * Camunda Web Modeler writes the connector's icon into every templated
   * element as an inline base64 data URI, so a model exported from it carries
   * the same few kB of SVG repeated once per task. Nothing here reads that
   * attribute — `framework/ui/diagramIcons.ts` derives the icon from
   * `zeebe:modelerTemplate` (and from the job type) instead — but every byte
   * of it ships on the eager path, because example manifests are imported
   * eagerly by `src/examples/index.ts`. It was ~40% of one model file and
   * enough on its own to push the initial bundle past its budget.
   *
   * Strip it when porting a model in. This is easy to forget precisely
   * because the diagram looks identical either way.
   */
  it.each(Object.keys(models))(
    "%s carries no inline base64 template icons",
    (path) => {
      expect(models[path]).not.toContain("zeebe:modelerTemplateIcon");
    },
  );

  /**
   * A prompt that names a tool the agent can't call costs a live brain real
   * turns: `liveAgent` matches a tool call against `ToolSpec.elementId`
   * exactly, so "call RequestPaymentRelease" is useless if what's advertised
   * is `PaymentReleaseGate`. It's an easy mistake to make when an element is
   * renamed or wrapped, and it's invisible to the scripted brain, which
   * activates ids directly and never reads the prompt.
   *
   * Only element ids the prompt actually mentions are checked, so ordinary
   * prose is left alone.
   */
  it.each(Object.keys(models))("%s prompts only name callable tools", (path) => {
    const model = parseModel(models[path]);
    for (const agent of model.agents) {
      const callable = new Set([
        agent.elementId,
        ...agent.tools.map((t) => t.elementId),
      ]);
      const everyElementId = new Set(
        Array.from(models[path].matchAll(/\sid="([A-Za-z_][\w.-]*)"/g), (m) => m[1]),
      );
      const prompt = `${agent.systemPrompt} ${agent.userPrompt}`;
      const named = Array.from(
        new Set(Array.from(prompt.matchAll(/\b[A-Za-z_][\w.-]*\b/g), (m) => m[0])),
      ).filter((token) => everyElementId.has(token) && !callable.has(token));

      expect(named, `${agent.elementId} prompt names non-callable element(s)`).toEqual([]);
    }
  });
});
