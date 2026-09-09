import { describe, expect, it } from "vitest";
import { parseModel } from "../framework/model";
import { createTemplateMap, substituteTemplates } from "../framework/templates";
import { EXAMPLES, loadExample } from "./index";

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
   * turns: `makeLiveAgent` resolves a tool call against `spec.tools` and
   * nothing else, so "call RequestPaymentRelease" is useless if what's
   * advertised is `PaymentReleaseGate`. It's an easy mistake to make when an
   * element is renamed or wrapped, and it's invisible to the scripted brain,
   * which activates ids directly and never reads the prompt.
   *
   * Run over the *resolved* XML, since an example's real prompts usually live
   * in `prompts/*.md` behind a `{{system-prompt}}` placeholder — parsing the
   * raw file would only ever see the placeholder and check nothing.
   *
   * Only element ids the prompt actually mentions are checked, so ordinary
   * prose is left alone.
   */
  it.each(EXAMPLES.map((e) => e.id))(
    "%s prompts only name callable tools",
    async (id) => {
      const example = await loadExample(id);
      const { result: xml } = substituteTemplates(
        example.bpmn,
        createTemplateMap(example.templates),
        "xml",
      );
      const model = parseModel(xml);
      const everyElementId = new Set(
        Array.from(xml.matchAll(/\sid="([A-Za-z_][\w.-]*)"/g), (m) => m[1]),
      );

      for (const agent of model.agents) {
        // The host itself is deliberately not in this set: a live brain can't
        // call it either, so a prompt naming it is the same bug.
        const callable = new Set(agent.tools.map((t) => t.elementId));
        const prompt = `${agent.systemPrompt} ${agent.userPrompt}`;
        const named = Array.from(
          new Set(Array.from(prompt.matchAll(/\b[A-Za-z_][\w.-]*\b/g), (m) => m[0])),
        ).filter((token) => everyElementId.has(token) && !callable.has(token));

        expect(named, `${agent.elementId} prompt names non-callable element(s)`).toEqual([]);
      }
    },
  );

  /**
   * The gallery reads `meta.ts` and the runner reads `index.ts`, so a card
   * could advertise one thing and the page open another. Nothing else would
   * catch that: both halves typecheck fine while disagreeing.
   */
  it.each(EXAMPLES.map((e) => e.id))("%s's card matches its manifest", async (id) => {
    const meta = EXAMPLES.find((e) => e.id === id)!;
    const { bpmn: _bpmn, ...def } = await loadExample(id);

    for (const key of ["id", "title", "blurb", "hero", "docsUrl", "group"] as const) {
      expect(def[key], `${id}.${key} differs between meta.ts and index.ts`).toEqual(
        meta[key],
      );
    }
  });

  it("offers every example's manifest to the lazy loader", async () => {
    // A card with no loadable manifest is a dead tile: it renders, routes, and
    // then fails only once someone clicks it.
    await expect(
      Promise.all(EXAMPLES.map((e) => loadExample(e.id))),
    ).resolves.toHaveLength(EXAMPLES.length);
  });
});
