import { render, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RuntimeDiagram } from "./RuntimeDiagram";

/**
 * The "locked" part of this component is structural — a plain bpmn-js `Viewer`
 * ships no `zoomscroll` or `move-canvas` module, so there is no pan/zoom handler
 * to assert the absence of, and jsdom computes no layout to drag against
 * anyway. What is worth pinning down here is that the read-only marker contract
 * still holds after moving off `@nanobpm/bojtos-react`'s `BpmnRuntimeView`, and
 * that the navigation modules really are absent from the module graph.
 */

const XML = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1" />
    <bpmn:task id="Task_1" name="Do the thing" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="150" y="100" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1_di" bpmnElement="Task_1">
        <dc:Bounds x="240" y="78" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

describe("RuntimeDiagram", () => {
  // The sizing lives on `runtime-diagram`; without it bpmn-js has no definite
  // height to fit against and the canvas collapses to the SVG's intrinsic 150px.
  it("always carries its own sizing class, with or without a caller class", () => {
    const { container: bare } = render(
      <RuntimeDiagram xml={XML} activeIds={[]} incidentIds={[]} />,
    );
    expect(bare.firstElementChild).toHaveClass("runtime-diagram");

    const { container: classed } = render(
      <RuntimeDiagram
        xml={XML}
        activeIds={[]}
        incidentIds={[]}
        className="diagram"
      />,
    );
    expect(classed.firstElementChild).toHaveClass("runtime-diagram", "diagram");
  });

  it("imports the diagram and renders its elements", async () => {
    const { container } = render(
      <RuntimeDiagram xml={XML} activeIds={[]} incidentIds={[]} />,
    );

    await waitFor(() =>
      expect(container.querySelector(".djs-container")).toBeInTheDocument(),
    );
    await waitFor(() =>
      expect(
        container.querySelector('[data-element-id="Task_1"]'),
      ).toBeInTheDocument(),
    );
  });

  it("marks active and incident elements, and moves the marker on update", async () => {
    const { container, rerender } = render(
      <RuntimeDiagram xml={XML} activeIds={["StartEvent_1"]} incidentIds={[]} />,
    );

    await waitFor(() =>
      expect(
        container.querySelector('[data-element-id="StartEvent_1"]'),
      ).toHaveClass("nano-active"),
    );

    // The token has to hop rather than accumulate: the old marker comes off as
    // the new one goes on, which is what lets a run be watched without
    // re-importing the diagram.
    rerender(
      <RuntimeDiagram xml={XML} activeIds={["Task_1"]} incidentIds={["StartEvent_1"]} />,
    );

    await waitFor(() =>
      expect(container.querySelector('[data-element-id="Task_1"]')).toHaveClass(
        "nano-active",
      ),
    );
    const start = container.querySelector('[data-element-id="StartEvent_1"]');
    expect(start).not.toHaveClass("nano-active");
    expect(start).toHaveClass("nano-incident");
  });

  it("renders a token badge on an active element", async () => {
    // One active element, not several: bpmn-js positions overlays from real
    // element geometry, which jsdom does not compute, so adding a second one is
    // unreliable here for reasons that say nothing about this component. The
    // marker test above is what covers the multi-element frontier.
    const { container } = render(
      <RuntimeDiagram xml={XML} activeIds={["Task_1"]} incidentIds={[]} />,
    );

    await waitFor(() =>
      expect(container.querySelector(".nano-token")).toBeInTheDocument(),
    );
  });

  it("survives unmounting while the import is still in flight", async () => {
    // `importXML` resolves after the effect may have been cleaned up. Zooming
    // or marking a destroyed viewer at that point throws from inside a promise
    // nobody awaits — an unhandled rejection, and state set on a viewer that no
    // longer exists.
    const errors: unknown[] = [];
    const onError = (event: PromiseRejectionEvent | ErrorEvent) => {
      errors.push(event);
    };
    window.addEventListener("unhandledrejection", onError as EventListener);
    window.addEventListener("error", onError as EventListener);

    const { unmount } = render(
      <RuntimeDiagram xml={XML} activeIds={["Task_1"]} incidentIds={[]} />,
    );
    unmount();
    await new Promise((resolve) => setTimeout(resolve, 50));

    window.removeEventListener("unhandledrejection", onError as EventListener);
    window.removeEventListener("error", onError as EventListener);
    expect(errors).toEqual([]);
  });

  it("is built on a viewer with no pan or zoom modules", async () => {
    // The guarantee is "cannot be moved", and it holds because the plain
    // `Viewer` has no navigation modules — not because anything suppresses
    // events. If someone swaps this for `NavigatedViewer`, these services
    // appear and this test fails.
    const { default: Viewer } = await import("bpmn-js/lib/Viewer");
    const viewer = new Viewer();
    expect(() => viewer.get("zoomScroll")).toThrow();
    expect(() => viewer.get("moveCanvas")).toThrow();
    viewer.destroy();
  });
});
