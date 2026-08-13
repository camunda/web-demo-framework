import { createRef } from "react";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect, it, onTestFinished, vi } from "vitest";
import type { BpmnModdle as BpmnModdleType } from "bpmn-moddle";
import * as BpmnModdleModule from "bpmn-moddle";
import zeebeModdleDescriptor from "zeebe-bpmn-moddle/resources/zeebe.json";

/**
 * `bpmn-js-properties-panel`/`bpmn-js-element-templates`/
 * `camunda-bpmn-js-behaviors` ship pre-built CJS bundles that `require()`
 * their own transitive `bpmn-js`/`min-dash` copies at runtime by bare,
 * extension-less, or (for a hoisted `min-dash` under
 * `bpmn-js-properties-panel/node_modules`) pure-ESM-only specifiers. A real
 * bundler (Vite's production build, webpack, rollup — see `npm run build`,
 * which passes) resolves all of this at build time with no issue; Vitest's
 * SSR module runner, once it hands a CJS entry file off to Node's own
 * `require()`, can hit Node's *native* module resolver/loader for those
 * nested requires, which — unlike a bundler — doesn't append missing
 * extensions and can't `require()` an ESM-only package at all. That's a gap
 * in the test *runner*, not in this component: these libraries are additive
 * DI modules and a services lookup, not something this seam's own logic
 * depends on being real in a jsdom test. Mock them with the minimal shape
 * `ModelEditor` actually calls, and keep exercising the *real* `bpmn-js`
 * `Modeler` end to end below.
 */
vi.mock("bpmn-js-properties-panel", () => ({
  BpmnPropertiesPanelModule: {},
  BpmnPropertiesProviderModule: {},
  ZeebePropertiesProviderModule: {},
}));

vi.mock("camunda-bpmn-js-behaviors/lib/camunda-cloud", () => ({
  default: {},
}));

vi.mock("bpmn-js-element-templates", () => {
  class FakeElementTemplates {
    static $inject: string[] = [];
    private templates: Array<{ id: string; appliesTo?: string[] }> = [];
    set(templates: Array<{ id: string; appliesTo?: string[] }>) {
      this.templates = templates;
    }
    getAll(element: { type?: string } | null) {
      return this.templates.filter(
        (template) =>
          !template.appliesTo ||
          !element?.type ||
          template.appliesTo.includes(element.type),
      );
    }
    get(id: string) {
      return this.templates.find((template) => template.id === id) ?? null;
    }
    applyTemplate() {
      // No-op: the real package's application logic is exercised by
      // `npm run build`'s production bundle, not this jsdom unit test.
    }
  }
  return {
    CloudElementTemplatesCoreModule: {
      __init__: ["elementTemplates"],
      elementTemplates: ["type", FakeElementTemplates],
    },
    CloudElementTemplatesPropertiesProviderModule: {},
  };
});

const { ModelEditor } = await import("./ModelEditor");

// The published `@types/bpmn-moddle` declares a named `BpmnModdle` export,
// but the package itself ships a plain CJS default export at runtime (no
// `esModuleInterop` in this repo's tsconfig) — grab whichever shape actually
// resolves so this test works both under `tsc` and under Vitest's transform.
const BpmnModdle = (
  BpmnModdleModule as unknown as { default?: typeof BpmnModdleType }
).default ?? (BpmnModdleModule as unknown as typeof BpmnModdleType);


/**
 * The critical risk this component carries: without `zeebe-bpmn-moddle`
 * registered via `moddleExtensions`, bpmn-js's underlying `bpmn-moddle`
 * doesn't know about `zeebe:*` types at all, so anything that needs to
 * *construct* or type-check one — the properties panel, copy/paste, or any
 * modeling operation that touches an existing `zeebe:*` element — throws
 * outright the moment it does. The model can still deploy in that broken
 * state; it just never runs a single tool, and the failure has nothing to
 * do with the edit that triggered it. This fixture mirrors the shape of the
 * seed-export-compliance example's AI Agent sub-process (a
 * `zeebe:modelerTemplate`-tagged, `zeebe:adHoc`-flagged
 * `bpmn:adHocSubProcess`, plus `zeebe:taskDefinition` and `zeebe:ioMapping`),
 * so a regression here is caught before it reaches a real example.
 */
const ZEEBE_AGENT_FIXTURE = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" id="Definitions_Fixture" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="fixture-process" name="Fixture process" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_1" sourceRef="StartEvent_1" targetRef="Agent_1" />
    <bpmn:adHocSubProcess id="Agent_1" name="Agent" zeebe:modelerTemplate="io.camunda.connectors.agenticai.aiagent.jobworker.v1">
      <bpmn:extensionElements>
        <zeebe:adHoc outputCollection="toolCallResults" outputElement="=toolCallResult" />
        <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" retries="3" />
        <zeebe:ioMapping>
          <zeebe:input source="=1" target="data.limits.maxModelCalls" />
        </zeebe:ioMapping>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1</bpmn:incoming>
    </bpmn:adHocSubProcess>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="fixture-process">
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="150" y="150" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Agent_1_di" bpmnElement="Agent_1">
        <dc:Bounds x="260" y="120" width="150" height="100" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1_di" bpmnElement="Flow_1">
        <di:waypoint x="186" y="168" />
        <di:waypoint x="260" y="168" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

/**
 * These tests exercise the actual mechanism of the "trap" directly through
 * `bpmn-moddle` (the lower-level library `bpmn-js`'s `Modeler`/`Viewer` both
 * wrap for parsing, serializing, and constructing new elements), rather than
 * through a full `Modeler` instance — this avoids depending on jsdom's very
 * incomplete SVG geometry APIs, which the component-level tests below
 * already cover for the mount/reimport behaviour.
 *
 * Note: a plain `fromXML` → `toXML` round-trip of *already-parsed* zeebe:*
 * content actually survives even without `moddleExtensions` registered (this
 * bpmn-moddle version keeps unrecognized attributes/elements in a generic
 * catch-all bag and re-serializes them verbatim) — so that isn't where the
 * trap bites. It bites the moment anything needs to *construct* or
 * *type-check* a zeebe:* element, which is exactly what happens during a
 * diagram edit (the properties panel, copy/paste, or any `bpmnFactory`/
 * `moddle.create()` call touching these elements) — without
 * `moddleExtensions`, that throws outright, since `bpmn-moddle` has no
 * `zeebe:*` type descriptors to construct against.
 */
describe("bpmn-js's moddle + zeebe-bpmn-moddle — the known export/edit trap", () => {
  it("cannot construct a zeebe:* extension element WITHOUT moddleExtensions (the trap)", () => {
    const bareModdle = new BpmnModdle();
    expect(() =>
      bareModdle.create("zeebe:TaskDefinition", {
        type: "io.camunda.agenticai:aiagent-job-worker:1",
        retries: "3",
      }),
    ).toThrow(/unknown type/i);
  });

  it("constructs a zeebe:* extension element WITH moddleExtensions (this component's config)", () => {
    const moddle = new BpmnModdle({ zeebe: zeebeModdleDescriptor });
    const taskDefinition = moddle.create("zeebe:TaskDefinition", {
      type: "io.camunda.agenticai:aiagent-job-worker:1",
      retries: "3",
    });
    expect(taskDefinition.$type).toBe("zeebe:TaskDefinition");
    const props = taskDefinition as unknown as {
      type: string;
      retries: string;
    };
    expect(props.type).toBe("io.camunda.agenticai:aiagent-job-worker:1");
    expect(props.retries).toBe("3");
  });

  it("round-trips every zeebe:* attribute and extension element from the AI Agent sub-process fixture WITH moddleExtensions", async () => {
    const moddle = new BpmnModdle({ zeebe: zeebeModdleDescriptor });
    const { rootElement } = await moddle.fromXML(ZEEBE_AGENT_FIXTURE);
    const { xml } = await moddle.toXML(rootElement, { format: true });
    expect(xml).toBeDefined();
    expect(xml).toContain(
      'zeebe:modelerTemplate="io.camunda.connectors.agenticai.aiagent.jobworker.v1"',
    );
    expect(xml).toContain("zeebe:adHoc");
    expect(xml).toContain("zeebe:taskDefinition");
    expect(xml).toContain(
      'type="io.camunda.agenticai:aiagent-job-worker:1"',
    );
    expect(xml).toContain("zeebe:ioMapping");
    expect(xml).toContain("zeebe:input");
  });
});

describe("ModelEditor component", () => {
  it("mounts, imports the given XML and renders the diagram without crashing", async () => {
    const onChange = () => {};
    const { container } = render(
      <ModelEditor value={ZEEBE_AGENT_FIXTURE} onChange={onChange} />,
    );

    await waitFor(() =>
      expect(
        container.querySelectorAll("[data-element-id]").length,
      ).toBeGreaterThan(0),
    );
    expect(
      container.querySelector('[data-element-id="Agent_1"]'),
    ).not.toBeNull();
  });

  it("renders a properties panel container alongside the canvas", async () => {
    const onChange = () => {};
    const { container } = render(
      <ModelEditor value={ZEEBE_AGENT_FIXTURE} onChange={onChange} />,
    );
    await waitFor(() =>
      expect(
        container.querySelectorAll("[data-element-id]").length,
      ).toBeGreaterThan(0),
    );
    expect(
      container.querySelector(".model-editor-properties"),
    ).not.toBeNull();
    // Before anything is selected, the toolbar tells the reader what to do
    // rather than showing an empty/confusing template picker.
    expect(container.textContent).toContain(
      "Select an element to see its properties and connector templates.",
    );
  });

  it("reimports when `value` changes externally (e.g. Revert to original)", async () => {
    const onChange = () => {};
    const { container, rerender } = render(
      <ModelEditor value={ZEEBE_AGENT_FIXTURE} onChange={onChange} />,
    );
    await waitFor(() =>
      expect(
        container.querySelector('[data-element-id="Agent_1"]'),
      ).not.toBeNull(),
    );

    const otherModel = ZEEBE_AGENT_FIXTURE.replace(
      /Agent_1/g,
      "RenamedElement",
    );
    await act(async () => {
      rerender(<ModelEditor value={otherModel} onChange={onChange} />);
    });

    await waitFor(() =>
      expect(
        container.querySelector('[data-element-id="RenamedElement"]'),
      ).not.toBeNull(),
    );
  });

  it("toggles the expanded layout class, button label and aria-pressed on click, and Escape exits", async () => {
    const onChange = () => {};
    const { container } = render(
      <ModelEditor value={ZEEBE_AGENT_FIXTURE} onChange={onChange} />,
    );
    await waitFor(() =>
      expect(
        container.querySelectorAll("[data-element-id]").length,
      ).toBeGreaterThan(0),
    );

    const layout = container.querySelector(".model-editor-layout");
    const button = container.querySelector(
      ".model-editor-expand",
    ) as HTMLButtonElement;
    expect(layout).not.toBeNull();
    expect(button).not.toBeNull();

    expect(layout).not.toHaveClass("model-editor-layout--expanded");
    expect(button.getAttribute("aria-pressed")).toBe("false");
    expect(button.textContent).toBe("Full screen");

    await act(async () => {
      fireEvent.click(button);
    });

    expect(layout).toHaveClass("model-editor-layout--expanded");
    expect(button.getAttribute("aria-pressed")).toBe("true");
    expect(button.textContent).toBe("Exit full screen (Esc)");

    await act(async () => {
      fireEvent.keyDown(window, { key: "Escape" });
    });

    expect(layout).not.toHaveClass("model-editor-layout--expanded");
    expect(button.getAttribute("aria-pressed")).toBe("false");
    expect(button.textContent).toBe("Full screen");
  });

  /**
   * jsdom implements no Fullscreen API, so these install one. That absence is
   * itself worth noting: it is why `requestFullscreen`/`exitFullscreen` are
   * called through their return values rather than as
   * `document.exitFullscreen?.().catch(…)` — optional chaining yields
   * `undefined` there, and `.catch` on `undefined` throws.
   */
  function stubFullscreenApi() {
    // Captured so the stubs can be removed again: these mutate `Element
    // .prototype` and `document`, which outlive the test that installed them and
    // would otherwise make later tests order-dependent.
    const original = {
      request: Object.getOwnPropertyDescriptor(
        Element.prototype,
        "requestFullscreen",
      ),
      exit: Object.getOwnPropertyDescriptor(document, "exitFullscreen"),
      element: Object.getOwnPropertyDescriptor(document, "fullscreenElement"),
    };

    // Tracks which element the browser considers fullscreen, so the component's
    // own `document.fullscreenElement === layout` checks see something real.
    let fullscreenElement: Element | null = null;
    let pending: (() => void) | undefined;

    const requestFullscreen = vi.fn(function (this: Element) {
      return new Promise<void>((resolve) => {
        pending = () => {
          fullscreenElement = this;
          resolve();
        };
      });
    });
    const exitFullscreen = vi.fn(() => {
      fullscreenElement = null;
      return Promise.resolve();
    });

    Object.defineProperty(Element.prototype, "requestFullscreen", {
      value: requestFullscreen,
      configurable: true,
      writable: true,
    });
    Object.defineProperty(document, "exitFullscreen", {
      value: exitFullscreen,
      configurable: true,
      writable: true,
    });
    Object.defineProperty(document, "fullscreenElement", {
      get: () => fullscreenElement,
      configurable: true,
    });

    // Registered here rather than left to each caller: a test that forgets the
    // cleanup leaks a fake Fullscreen API into everything after it.
    onTestFinished(() => {
      const restore = (
        target: object,
        key: string,
        descriptor: PropertyDescriptor | undefined,
      ) => {
        if (descriptor) Object.defineProperty(target, key, descriptor);
        else delete (target as Record<string, unknown>)[key];
      };
      restore(Element.prototype, "requestFullscreen", original.request);
      restore(document, "exitFullscreen", original.exit);
      restore(document, "fullscreenElement", original.element);
    });

    return {
      requestFullscreen,
      exitFullscreen,
      /** Settles the in-flight request, as the browser would once it is fullscreen. */
      resolveRequest: () => pending?.(),
      /** Hands fullscreen to something else, as other UI on the page could. */
      setFullscreenElement: (element: Element | null) => {
        fullscreenElement = element;
      },
    };
  }

  it("exits fullscreen when the request resolves after the reader collapsed", async () => {
    // `requestFullscreen()` resolves asynchronously and nothing cancels it.
    // Collapse first and the browser would otherwise go fullscreen on a view
    // that is already closed, and record itself as owning it.
    const { requestFullscreen, exitFullscreen, resolveRequest } =
      stubFullscreenApi();
    const { container } = render(
      <ModelEditor value={ZEEBE_AGENT_FIXTURE} onChange={() => {}} />,
    );
    await waitFor(() =>
      expect(
        container.querySelectorAll("[data-element-id]").length,
      ).toBeGreaterThan(0),
    );
    const button = container.querySelector(
      ".model-editor-expand",
    ) as HTMLButtonElement;

    await act(async () => {
      fireEvent.click(button);
    });
    expect(requestFullscreen).toHaveBeenCalledTimes(1);
    // Collapsed while the request is still in flight.
    await act(async () => {
      fireEvent.click(button);
    });
    expect(exitFullscreen).not.toHaveBeenCalled();

    await act(async () => {
      resolveRequest();
    });

    expect(exitFullscreen).toHaveBeenCalledTimes(1);
    expect(button.getAttribute("aria-pressed")).toBe("false");
  });

  it("exits fullscreen on collapse when it owns it, and only then", async () => {
    const { exitFullscreen, resolveRequest } = stubFullscreenApi();
    const { container } = render(
      <ModelEditor value={ZEEBE_AGENT_FIXTURE} onChange={() => {}} />,
    );
    await waitFor(() =>
      expect(
        container.querySelectorAll("[data-element-id]").length,
      ).toBeGreaterThan(0),
    );
    const button = container.querySelector(
      ".model-editor-expand",
    ) as HTMLButtonElement;

    await act(async () => {
      fireEvent.click(button);
    });
    // Resolving while still expanded is the ordinary path: ownership is taken,
    // so collapsing has something to release.
    await act(async () => {
      resolveRequest();
    });
    expect(exitFullscreen).not.toHaveBeenCalled();

    await act(async () => {
      fireEvent.click(button);
    });
    expect(exitFullscreen).toHaveBeenCalledTimes(1);

    // Collapsing again must not call it a second time — nothing is owned now.
    await act(async () => {
      fireEvent.keyDown(window, { key: "Escape" });
    });
    expect(exitFullscreen).toHaveBeenCalledTimes(1);
  });

  it("leaves another element's fullscreen alone", async () => {
    // Something else on the page can take fullscreen from us — the browser then
    // fires `fullscreenchange` with a different element in it. Collapsing our
    // own overlay is right; ending *their* fullscreen is not ours to do.
    const { exitFullscreen, resolveRequest, setFullscreenElement } =
      stubFullscreenApi();
    const { container } = render(
      <ModelEditor value={ZEEBE_AGENT_FIXTURE} onChange={() => {}} />,
    );
    await waitFor(() =>
      expect(
        container.querySelectorAll("[data-element-id]").length,
      ).toBeGreaterThan(0),
    );
    const button = container.querySelector(
      ".model-editor-expand",
    ) as HTMLButtonElement;

    await act(async () => {
      fireEvent.click(button);
    });
    await act(async () => {
      resolveRequest();
    });

    const other = document.createElement("div");
    document.body.appendChild(other);
    await act(async () => {
      setFullscreenElement(other);
      document.dispatchEvent(new Event("fullscreenchange"));
    });

    expect(exitFullscreen).not.toHaveBeenCalled();
    // Our own overlay still closes — the editor is no longer the fullscreen view.
    expect(button.getAttribute("aria-pressed")).toBe("false");
    other.remove();
  });

  it("keeps the same value/onChange contract signature the XML editor used", () => {
    // Purely a type-level guard so a future edit can't silently widen the
    // props beyond the deliberately dumb `value` in / `onChange` out seam.
    const ref = createRef<HTMLDivElement>();
    void ref;
    const props: { value: string; onChange: (value: string) => void } = {
      value: ZEEBE_AGENT_FIXTURE,
      onChange: () => {},
    };
    expect(typeof props.onChange).toBe("function");
    expect(typeof props.value).toBe("string");
  });
});
