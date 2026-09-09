import { describe, expect, it } from "vitest";

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
});
