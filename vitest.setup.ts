import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement several SVG geometry/transform APIs that
// diagram-js/bpmn-js rely on for rendering and viewbox math (getBBox,
// getScreenCTM, getCTM) or that the SVG DOM spec requires on
// SVGSVGElement (createSVGTransform, createSVGPoint, createSVGMatrix).
// Without these, mounting any bpmn-js Viewer/Modeler under jsdom throws
// (see src/framework/ui/ModelEditor.test.tsx). These are minimal stand-ins
// good enough for import/export/round-trip and structural assertions —
// not for real layout, since jsdom never computes actual visual geometry.
if (typeof SVGElement !== "undefined") {
  if (!SVGElement.prototype.getBBox) {
    // @ts-expect-error -- jsdom's SVGElement has no getBBox implementation
    SVGElement.prototype.getBBox = () => ({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });
  }
  if (!SVGElement.prototype.getScreenCTM) {
    // @ts-expect-error -- jsdom's SVGElement has no getScreenCTM implementation
    SVGElement.prototype.getScreenCTM = () => null;
  }
  if (!SVGElement.prototype.getCTM) {
    // @ts-expect-error -- jsdom's SVGElement has no getCTM implementation
    SVGElement.prototype.getCTM = () => null;
  }
}
if (typeof SVGSVGElement !== "undefined") {
  if (!SVGSVGElement.prototype.createSVGTransform) {
    SVGSVGElement.prototype.createSVGTransform = () => {
      const matrix = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
      return {
        matrix,
        setTranslate() {},
        setScale() {},
        setRotate() {},
      } as unknown as SVGTransform;
    };
  }
  if (!SVGSVGElement.prototype.createSVGPoint) {
    SVGSVGElement.prototype.createSVGPoint = () =>
      ({ x: 0, y: 0, matrixTransform: () => ({ x: 0, y: 0 }) }) as unknown as SVGPoint;
  }
  if (!SVGSVGElement.prototype.createSVGMatrix) {
    // Chainable stand-in: diagram-js's viewbox-fit math does
    // `createSVGMatrix().scale(s).translate(x, y)`, so `scale`/`translate`
    // (and the other DOMMatrix-alike methods) need to return a matrix-shaped
    // object too, not just plain numeric fields.
    const makeMatrix = (a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) => {
      const self = { a, b, c, d, e, f };
      return Object.assign(self, {
        scale: (s: number) => makeMatrix(a * s, b, c, d * s, e, f),
        translate: (x: number, y: number) =>
          makeMatrix(a, b, c, d, e + x * a, f + y * d),
        multiply: () => makeMatrix(a, b, c, d, e, f),
      }) as unknown as SVGMatrix;
    };
    SVGSVGElement.prototype.createSVGMatrix = () => makeMatrix();
  }
}

// jsdom also doesn't implement `SVGGraphicsElement.transform` (an
// `SVGAnimatedTransformList`) at all, which `tiny-svg` (diagram-js's SVG
// helper, used throughout bpmn-js's renderer and canvas viewbox math) reads
// and writes directly via `node.transform.baseVal`. This is a minimal
// stand-in — enough for bpmn-js to consolidate a translate/scale transform
// into a plain matrix without throwing — not a real SVG transform engine.
if (
  typeof SVGGraphicsElement !== "undefined" &&
  !Object.getOwnPropertyDescriptor(SVGGraphicsElement.prototype, "transform")
) {
  const transforms = new WeakMap<SVGGraphicsElement, unknown[]>();
  function makeTransformList(node: SVGGraphicsElement) {
    if (!transforms.has(node)) transforms.set(node, []);
    const list = transforms.get(node)!;
    return {
      get numberOfItems() {
        return list.length;
      },
      clear() {
        list.length = 0;
      },
      appendItem(item: unknown) {
        list.push(item);
        return item;
      },
      consolidate() {
        const matrix = list.reduce<{
          a: number;
          b: number;
          c: number;
          d: number;
          e: number;
          f: number;
        }>(
          (acc, item) => {
            const m = (item as { matrix?: typeof acc })?.matrix ?? acc;
            return m;
          },
          { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
        );
        return { matrix };
      },
    };
  }
  Object.defineProperty(SVGGraphicsElement.prototype, "transform", {
    configurable: true,
    get(this: SVGGraphicsElement) {
      return { baseVal: makeTransformList(this) };
    },
  });
}


