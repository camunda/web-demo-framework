import { describe, expect, it } from "vitest";
import { create, transform } from "tiny-svg";

/**
 * Guards the jsdom SVG stand-ins in `vitest.setup.ts`, not application code.
 *
 * Those stubs exist so bpmn-js can mount under jsdom at all. When they were
 * incomplete, the damage did not look like a failing test: `ModelEditor.test.tsx`
 * reported every test passing while `tiny-svg` threw asynchronously inside
 * diagram-js's canvas, which vitest reports as unhandled errors and turns into
 * a non-zero exit. So `npm test` was red with 0 failing tests — on `main`, for
 * anyone's branch, indefinitely.
 *
 * These assertions go straight at `tiny-svg`'s `transform()`, the accessor
 * bpmn-js's renderer and viewbox math funnel through, so a regression in the
 * stubs fails a named test here instead of reappearing as an unattributable
 * exit code.
 */
describe("jsdom SVG stand-ins", () => {
  it("exposes SVGMatrix as a global", () => {
    // `tiny-svg`'s `wrapMatrix` does a bare `x instanceof SVGMatrix`, which
    // throws ReferenceError rather than evaluating to false when the class is
    // missing from the global scope.
    expect(typeof SVGMatrix).not.toBe("undefined");
  });

  it("transforms a shape jsdom types as a plain SVGElement", () => {
    // <rect> is not an SVGGraphicsElement in jsdom, unlike <svg> and <g> —
    // stubbing only the narrower prototype left these throwing on
    // `node.transform.baseVal`.
    const rect = create("rect");
    expect(rect).not.toBeInstanceOf(SVGGraphicsElement);

    const svg = create("svg") as SVGSVGElement;
    const translate = svg.createSVGTransform();
    translate.setTranslate(10, 20);

    expect(() => transform(rect, translate)).not.toThrow();
    expect(rect.transform.baseVal.numberOfItems).toBe(1);
  });

  it("composes a transform list instead of letting the last item win", () => {
    const svg = create("svg") as SVGSVGElement;
    const g = create("g");

    const translate = svg.createSVGTransform();
    translate.setTranslate(10, 20);
    const scale = svg.createSVGTransform();
    scale.setScale(2, 2);

    // `tiny-svg`'s types declare `void | SVGTransform`; the setter form always
    // returns the consolidated transform at runtime.
    const consolidated = transform(g, [translate, scale]) as SVGTransform;

    // translate(10, 20) then scale(2) — diagram-js reads this matrix back for
    // its viewbox, so dropping either half silently skews the canvas.
    expect(consolidated.matrix).toMatchObject({ a: 2, d: 2, e: 10, f: 20 });
  });

  it("accepts a bare matrix, wrapping it into a transform", () => {
    const svg = create("svg") as SVGSVGElement;
    const g = create("g");
    const matrix = svg.createSVGMatrix().scale(3).translate(5, 7);
    // `transform()` documents `SVGTransform | SVGMatrix | Array<…>` but its
    // published types only name the transform half — hence the cast, and hence
    // `createSVGTransformFromMatrix` needing to exist on the stubbed list.
    const asTransform = matrix as unknown as SVGTransform;

    expect(() => transform(g, asTransform)).not.toThrow();
    expect((transform(g) as SVGTransform).matrix).toMatchObject({
      a: 3,
      d: 3,
      e: 15,
      f: 21,
    });
  });
});
