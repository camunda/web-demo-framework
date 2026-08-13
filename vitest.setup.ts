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
// jsdom implements no `ResizeObserver`, which `ModelEditor.tsx` uses to refit
// the bpmn-js canvas whenever its box changes. This stub takes the callback and
// keeps it, matching the real constructor's signature, but never invokes it:
// jsdom computes no layout, so there is no box change to report, and these tests
// assert on structure and the expanded-layout toggle rather than geometry.
if (typeof globalThis.ResizeObserver === "undefined") {
  globalThis.ResizeObserver = class {
    constructor(private readonly callback: ResizeObserverCallback) {}
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof ResizeObserver;
}

// `SVGMatrix` and `SVGTransform` are absent from jsdom as *globals*, not just
// as methods — and `tiny-svg`'s `wrapMatrix` does a bare
// `transform instanceof SVGMatrix`, which throws `ReferenceError: SVGMatrix is
// not defined` rather than evaluating to false. So the classes have to exist,
// and `createSVGMatrix`/`createSVGTransform` below have to return real
// instances of them for that check to answer correctly.
class MatrixStub {
  a = 1;
  b = 0;
  c = 0;
  d = 1;
  e = 0;
  f = 0;

  constructor(a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
    Object.assign(this, { a, b, c, d, e, f });
  }

  scale(s: number): MatrixStub {
    return new MatrixStub(this.a * s, this.b * s, this.c * s, this.d * s, this.e, this.f);
  }

  translate(x: number, y: number): MatrixStub {
    return new MatrixStub(
      this.a,
      this.b,
      this.c,
      this.d,
      this.e + this.a * x + this.c * y,
      this.f + this.b * x + this.d * y,
    );
  }

  /** Standard 2D affine product, so folding a transform list composes correctly. */
  multiply(o: MatrixStub): MatrixStub {
    return new MatrixStub(
      this.a * o.a + this.c * o.b,
      this.b * o.a + this.d * o.b,
      this.a * o.c + this.c * o.d,
      this.b * o.c + this.d * o.d,
      this.a * o.e + this.c * o.f + this.e,
      this.b * o.e + this.d * o.f + this.f,
    );
  }
}

class TransformStub {
  matrix: MatrixStub;

  constructor(matrix: MatrixStub = new MatrixStub()) {
    this.matrix = matrix;
  }

  setTranslate(x: number, y: number) {
    this.matrix = new MatrixStub(1, 0, 0, 1, x, y);
  }

  setScale(sx: number, sy: number) {
    this.matrix = new MatrixStub(sx, 0, 0, sy, 0, 0);
  }

  setRotate() {
    // Rotation never affects the structural assertions these tests make, and a
    // real implementation would need trig on a matrix nothing reads back.
  }
}

const globalWithSvg = globalThis as typeof globalThis & {
  SVGMatrix?: unknown;
  SVGTransform?: unknown;
};
if (typeof globalWithSvg.SVGMatrix === "undefined") {
  globalWithSvg.SVGMatrix = MatrixStub;
}
if (typeof globalWithSvg.SVGTransform === "undefined") {
  globalWithSvg.SVGTransform = TransformStub;
}

if (typeof SVGSVGElement !== "undefined") {
  if (!SVGSVGElement.prototype.createSVGTransform) {
    SVGSVGElement.prototype.createSVGTransform = () =>
      new TransformStub() as unknown as SVGTransform;
  }
  if (!SVGSVGElement.prototype.createSVGPoint) {
    SVGSVGElement.prototype.createSVGPoint = () =>
      ({ x: 0, y: 0, matrixTransform: () => ({ x: 0, y: 0 }) }) as unknown as SVGPoint;
  }
  if (!SVGSVGElement.prototype.createSVGMatrix) {
    // Chainable on purpose: diagram-js's viewbox-fit math does
    // `createSVGMatrix().scale(s).translate(x, y)`, so every method has to
    // return another matrix, not just numeric fields.
    SVGSVGElement.prototype.createSVGMatrix = () =>
      new MatrixStub() as unknown as SVGMatrix;
  }
}

// jsdom also doesn't implement `SVGElement.transform` (an
// `SVGAnimatedTransformList`) at all, which `tiny-svg` (diagram-js's SVG
// helper, used throughout bpmn-js's renderer and canvas viewbox math) reads
// and writes directly via `node.transform.baseVal`. This is a minimal
// stand-in — enough for bpmn-js to consolidate a translate/scale transform
// into a matrix without throwing — not a real SVG transform engine.
//
// Defined on `SVGElement`, not `SVGGraphicsElement`: jsdom only implements a
// handful of SVG interfaces, so `<svg>` and `<g>` are `SVGGraphicsElement`
// while `<rect>`, `<path>`, `<circle>` and friends fall back to plain
// `SVGElement`. bpmn-js transforms those shapes too, and on the narrower
// prototype they had no `transform` at all — `node.transform.baseVal` then
// threw `TypeError: Cannot read properties of undefined (reading 'baseVal')`.
if (
  typeof SVGElement !== "undefined" &&
  !Object.getOwnPropertyDescriptor(SVGElement.prototype, "transform") &&
  !Object.getOwnPropertyDescriptor(
    globalThis.SVGGraphicsElement?.prototype ?? {},
    "transform",
  )
) {
  const transforms = new WeakMap<SVGElement, TransformStub[]>();
  function makeTransformList(node: SVGElement) {
    if (!transforms.has(node)) transforms.set(node, []);
    const list = transforms.get(node)!;
    const toTransform = (item: unknown): TransformStub =>
      item instanceof TransformStub
        ? item
        : new TransformStub(
            item instanceof MatrixStub
              ? item
              : ((item as { matrix?: MatrixStub })?.matrix ?? new MatrixStub()),
          );
    return {
      get numberOfItems() {
        return list.length;
      },
      clear() {
        list.length = 0;
      },
      getItem(index: number) {
        return list[index];
      },
      appendItem(item: unknown) {
        const transform = toTransform(item);
        list.push(transform);
        return transform;
      },
      // `tiny-svg`'s `wrapMatrix` calls this whenever it is handed a bare
      // matrix rather than a transform.
      createSVGTransformFromMatrix(matrix: unknown) {
        return toTransform(matrix);
      },
      // Folds the whole list, rather than letting the last item win — a
      // translate followed by a scale has to compose, since diagram-js reads
      // the consolidated matrix back for its viewbox math.
      consolidate() {
        if (list.length === 0) return null;
        return list.reduce(
          (acc, item) => new TransformStub(acc.matrix.multiply(item.matrix)),
          new TransformStub(),
        );
      },
    };
  }
  Object.defineProperty(SVGElement.prototype, "transform", {
    configurable: true,
    get(this: SVGElement) {
      return { baseVal: makeTransformList(this) };
    },
  });
}


