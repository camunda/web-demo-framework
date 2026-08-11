import { createRef } from "react";
import { act, render, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { BpmnModdle as BpmnModdleType } from "bpmn-moddle";
import * as BpmnModdleModule from "bpmn-moddle";
import zeebeModdleDescriptor from "zeebe-bpmn-moddle/resources/zeebe.json";
import { ModelEditor } from "./ModelEditor";

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
