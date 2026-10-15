import { cleanup, render, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
  agentStateOf,
  enclosing,
  fitWithPadding,
  traversed,
  walkedPrefix,
  RuntimeDiagram,
  walkedCounts,
  type CanvasLike,
} from "./RuntimeDiagram";
import { WalkTracker } from "./walkTracker";

afterEach(cleanup);

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

const FLOW_XML = XML.replace(
  '<bpmn:startEvent id="StartEvent_1" />',
  '<bpmn:startEvent id="StartEvent_1"><bpmn:outgoing>Flow_1</bpmn:outgoing></bpmn:startEvent><bpmn:sequenceFlow id="Flow_1" sourceRef="StartEvent_1" targetRef="Task_1" />',
)
  .replace(
    '<bpmn:task id="Task_1" name="Do the thing" />',
    '<bpmn:task id="Task_1" name="Do the thing"><bpmn:incoming>Flow_1</bpmn:incoming></bpmn:task>',
  )
  .replace(
    "</bpmndi:BPMNPlane>",
    '<bpmndi:BPMNEdge id="Flow_1_di" bpmnElement="Flow_1"><di:waypoint x="186" y="118" /><di:waypoint x="240" y="118" /></bpmndi:BPMNEdge></bpmndi:BPMNPlane>',
  )
  .replace(
    'xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"',
    'xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI"',
  );

describe("RuntimeDiagram", () => {
  const WALK_XML = XML.replace(
    '<bpmn:task id="Task_1" name="Do the thing" />',
    '<bpmn:businessRuleTask id="Rule_1" /><bpmn:task id="Task_1" name="Do the thing" />',
  ).replace(
    '<bpmndi:BPMNShape id="Task_1_di"',
    '<bpmndi:BPMNShape id="Rule_1_di" bpmnElement="Rule_1"><dc:Bounds x="400" y="78" width="100" height="80" /></bpmndi:BPMNShape><bpmndi:BPMNShape id="Task_1_di"',
  );
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

  it("labels a working agent and outlines it, and counts the calls of each tool it ran", async () => {
    // Task_1 stands in for the agent host and StartEvent_1 for its tool; only
    // the ids matter to the overlays.
    const agents = [{ elementId: "Task_1", toolIds: ["StartEvent_1"] }];
    const { container, rerender } = render(
      <RuntimeDiagram xml={XML} activeIds={["Task_1"]} incidentIds={[]} agents={agents} />,
    );
    await waitFor(() =>
      expect(container.querySelector(".nano-agent-state")).toHaveTextContent("Thinking..."),
    );
    expect(container.querySelector(".nano-agent-shine")).toBeInTheDocument();

    // The agent has finished: Operate labels nothing for a completed agent.
    rerender(
      <RuntimeDiagram
        xml={XML}
        activeIds={[]}
        incidentIds={[]}
        agents={agents}
        path={["StartEvent_1"]}
      />,
    );
    await waitFor(() => expect(container.querySelector(".nano-agent-state")).toBeNull());
    expect(container.querySelector(".nano-agent-shine")).toBeNull();
    expect(container.querySelector(".nano-call-count")).toHaveTextContent("1");
  });

  it("does not mark activations that arrive mid-walk until the token reaches them", async () => {
    const marked = (container: HTMLElement, id: string) =>
      container.querySelector(`[data-element-id="${id}"]`)?.classList.contains("nano-executed");
    // A long hop holds the token on StartEvent_1 with Rule_1 queued behind it.
    const { container, rerender } = render(
      <RuntimeDiagram xml={WALK_XML} activeIds={[]} incidentIds={[]} path={[]} runId={1} hopMs={60_000} />,
    );
    await waitFor(() => expect(container.querySelector('[data-element-id="Task_1"]')).toBeInTheDocument());
    rerender(
      <RuntimeDiagram
        xml={WALK_XML}
        activeIds={["Rule_1"]}
        incidentIds={[]}
        path={["StartEvent_1", "Rule_1"]}
        runId={1}
        hopMs={60_000}
      />,
    );
    await waitFor(() => expect(marked(container, "StartEvent_1")).toBe(true));

    // A new batch lands mid-hop, with a new frontier: the markers effect runs
    // before the walk has queued Task_1.
    rerender(
      <RuntimeDiagram
        xml={WALK_XML}
        activeIds={["Task_1"]}
        incidentIds={[]}
        path={["StartEvent_1", "Rule_1", "Task_1"]}
        runId={1}
        hopMs={60_000}
      />,
    );
    expect(marked(container, "StartEvent_1")).toBe(true);
    expect(marked(container, "Rule_1")).toBe(false);
    expect(marked(container, "Task_1")).toBe(false);
  });

  it("draws the path already taken: walked elements, and the flows taken into them", async () => {
    const { container } = render(
      <RuntimeDiagram
        xml={FLOW_XML}
        activeIds={[]}
        incidentIds={[]}
        path={["StartEvent_1", "Task_1"]}
        takenFlows={[{ from: "StartEvent_1", to: "Task_1" }]}
        hopMs={1}
      />,
    );
    await waitFor(() =>
      expect(container.querySelector('[data-element-id="Task_1"]')).toHaveClass("nano-executed"),
    );
    expect(container.querySelector('[data-element-id="StartEvent_1"]')).toHaveClass("nano-executed");
    // Coloured through the diagram, so bpmn-js draws the line and its arrow blue.
    await waitFor(() =>
      expect(
        container.querySelector('[data-element-id="Flow_1"] .djs-visual path')?.getAttribute("style") ?? "",
      ).toMatch(/37, 99, 235|#2563eb/i),
    );
  });

  it("shows no agent state on a model without one", async () => {
    const { container } = render(
      <RuntimeDiagram xml={XML} activeIds={["Task_1"]} incidentIds={[]} />,
    );
    await waitFor(() =>
      expect(container.querySelector(".nano-token")).toBeInTheDocument(),
    );
    expect(container.querySelector(".nano-agent-state")).toBeNull();
    expect(container.querySelector(".nano-call-count")).toBeNull();
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

  /**
   * Reviewer: on expense-decision's "Clear reject", even Step never showed the
   * token on the business rule task — the engine passes it, and the gateway, in
   * the same command, so no snapshot ever has it active. The walk replays what
   * the engine activated, one element at a time, before settling.
   */
  it("walks the token through elements the engine passed instantly", async () => {
    const { container, rerender } = render(
      <RuntimeDiagram xml={WALK_XML} activeIds={[]} incidentIds={[]} path={[]} hopMs={30} />,
    );
    await waitFor(() =>
      expect(container.querySelector('[data-element-id="Rule_1"]')).toBeInTheDocument(),
    );

    const seen: string[] = [];
    const observer = new MutationObserver(() => {
      const at = Array.from(container.querySelectorAll(".nano-active[data-element-id]")).map(
        (el) => el.getAttribute("data-element-id")!,
      );
      if (at.length === 1 && seen.at(-1) !== at[0]) seen.push(at[0]);
    });
    observer.observe(container, { subtree: true, attributes: true, attributeFilter: ["class"] });

    rerender(
      <RuntimeDiagram
        xml={WALK_XML}
        activeIds={["Task_1"]}
        incidentIds={[]}
        // `Child_1` stands for a called process's element: in the log, not on this diagram.
        path={["StartEvent_1", "Rule_1", "Child_1", "Task_1"]}
        hopMs={30}
      />,
    );

    await waitFor(() => expect(seen).toEqual(["StartEvent_1", "Rule_1", "Task_1"]));
    observer.disconnect();
  });

  // An autostarting embed can run before bpmn-js has finished importing; the
  // walk has to wait for the registry rather than treat every id as off-diagram.
  it("walks activations that arrived before the import finished", async () => {
    const { container, rerender } = render(
      <RuntimeDiagram xml={WALK_XML} activeIds={[]} incidentIds={[]} path={[]} hopMs={30} />,
    );
    rerender(
      <RuntimeDiagram
        xml={WALK_XML}
        activeIds={["Task_1"]}
        incidentIds={[]}
        path={["StartEvent_1", "Rule_1", "Task_1"]}
        hopMs={30}
      />,
    );
    expect(container.querySelector('[data-element-id="Rule_1"]')).toBeNull();

    const seen: string[] = [];
    const observer = new MutationObserver(() => {
      const at = Array.from(container.querySelectorAll(".nano-active[data-element-id]")).map(
        (el) => el.getAttribute("data-element-id")!,
      );
      if (at.length === 1 && seen.at(-1) !== at[0]) seen.push(at[0]);
    });
    observer.observe(container, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });

    await waitFor(() => expect(seen).toEqual(["StartEvent_1", "Rule_1", "Task_1"]));
    observer.disconnect();
  });

  // Run twice without Reset: React can batch away the empty path between runs,
  // so the second run's path arrives as long as the first's. Only `runId` says
  // it is a new run.
  it("walks a new run from the start even when its path is no shorter", async () => {
    const PATH = ["StartEvent_1", "Rule_1", "Task_1"];
    const props = { xml: WALK_XML, activeIds: ["Task_1"], incidentIds: [], hopMs: 30 };
    const { container, rerender } = render(<RuntimeDiagram {...props} path={[]} runId={1} />);
    await waitFor(() =>
      expect(container.querySelector('[data-element-id="Rule_1"]')).toBeInTheDocument(),
    );
    rerender(<RuntimeDiagram {...props} path={[...PATH]} runId={1} />);
    await waitFor(() =>
      expect(container.querySelector('[data-element-id="Task_1"]')).toHaveClass("nano-active"),
    );
    await new Promise((r) => setTimeout(r, 150));

    const seen: string[] = [];
    const observer = new MutationObserver(() => {
      const at = Array.from(container.querySelectorAll(".nano-active[data-element-id]")).map(
        (el) => el.getAttribute("data-element-id")!,
      );
      if (at.length === 1 && seen.at(-1) !== at[0]) seen.push(at[0]);
    });
    observer.observe(container, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });

    rerender(<RuntimeDiagram {...props} path={[...PATH]} runId={2} />);
    await waitFor(() => expect(seen).toEqual(["StartEvent_1", "Rule_1", "Task_1"]));
    observer.disconnect();
  });

  describe("with the runner's tracker", () => {
    const watchWalk = (container: HTMLElement) => {
      const seen: string[] = [];
      const observer = new MutationObserver(() => {
        const at = Array.from(container.querySelectorAll(".nano-active[data-element-id]")).map(
          (el) => el.getAttribute("data-element-id")!,
        );
        if (at.length === 1 && seen.at(-1) !== at[0]) seen.push(at[0]);
      });
      observer.observe(container, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
      return { seen, stop: () => observer.disconnect() };
    };

    // The diagram chunk is lazy: autostart can run before it first mounts. That
    // first mount must walk what it missed, not file it as history.
    it("walks what arrived before a lazy first mount", async () => {
      const tracker = new WalkTracker();
      tracker.panelOpen = true;
      const { container } = render(<div />);
      const walk = watchWalk(container);
      render(
        <RuntimeDiagram
          xml={WALK_XML}
          activeIds={["Task_1"]}
          incidentIds={[]}
          path={["StartEvent_1", "Rule_1", "Task_1"]}
          runId={1}
          tracker={tracker}
          hopMs={30}
        />,
        { container },
      );
      await waitFor(() => expect(walk.seen).toEqual(["StartEvent_1", "Rule_1", "Task_1"]));
      walk.stop();
    });

    // While the panel was closed the runner kept the tracker level with the path.
    it("does not replay what happened while its panel was closed", async () => {
      const tracker = new WalkTracker();
      Object.assign(tracker, { panelOpen: true, run: 1, consumed: 3 });
      const { container } = render(<div />);
      const walk = watchWalk(container);
      render(
        <RuntimeDiagram
          xml={WALK_XML}
          activeIds={["Task_1"]}
          incidentIds={[]}
          path={["StartEvent_1", "Rule_1", "Task_1"]}
          runId={1}
          tracker={tracker}
          hopMs={30}
        />,
        { container },
      );
      await waitFor(() =>
        expect(container.querySelector('[data-element-id="Task_1"]')).toHaveClass("nano-active"),
      );
      await new Promise((r) => setTimeout(r, 150));
      walk.stop();
      expect(walk.seen).toEqual(["Task_1"]);
    });

    // What the runner waits on is the walk itself, import delay included.
    it("lets the runner wait for the walk to finish, not for an estimate", async () => {
      const tracker = new WalkTracker();
      tracker.panelOpen = true;
      const started = performance.now();
      const finished = tracker.waitFor(1, 3, 10_000).then(() => performance.now());
      const { container } = render(
        <RuntimeDiagram
          xml={WALK_XML}
          activeIds={["Task_1"]}
          incidentIds={[]}
          path={["StartEvent_1", "Rule_1", "Task_1"]}
          runId={1}
          tracker={tracker}
          hopMs={60}
        />,
      );
      const at = await finished;
      // Three hops of 60ms, after however long the import took.
      expect(at - started).toBeGreaterThanOrEqual(170);
      expect(container.querySelector('[data-element-id="Task_1"]')).toHaveClass("nano-active");
    });
  });

  // A remount (a collapsed panel reopened) gets the whole run's path at once:
  // that is history, not something to replay.
  it("does not replay the path it was mounted with", async () => {
    const { container } = render(
      <RuntimeDiagram
        xml={WALK_XML}
        activeIds={["Task_1"]}
        incidentIds={[]}
        path={["StartEvent_1", "Rule_1", "Task_1"]}
        hopMs={30}
      />,
    );
    const marked = new Set<string>();
    const observer = new MutationObserver(() => {
      for (const el of Array.from(container.querySelectorAll(".nano-active[data-element-id]")))
        marked.add(el.getAttribute("data-element-id")!);
    });
    observer.observe(container, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });

    await waitFor(() =>
      expect(container.querySelector('[data-element-id="Task_1"]')).toHaveClass("nano-active"),
    );
    await new Promise((r) => setTimeout(r, 150));
    observer.disconnect();
    expect([...marked]).toEqual(["Task_1"]);
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

/**
 * jsdom computes no layout, so the real fit can't be measured here — but the
 * box this hands bpmn-js can be, and that box is the whole fix. `fit-viewport`
 * fits the element bounding box exactly, which clips the live-token overlay
 * anchored outside its element's top-left corner.
 */
describe("fitWithPadding", () => {
  const fakeCanvas = (
    inner: { x: number; y: number; width: number; height: number },
    outer = { x: 0, y: 0, width: 200, height: 100 },
  ) => {
    const zoomed: string[] = [];
    const set: unknown[] = [];
    const canvas: CanvasLike = {
      addMarker: () => {},
      removeMarker: () => {},
      resized: () => {},
      zoom: (mode) => {
        zoomed.push(mode);
      },
      viewbox: (box) => {
        if (box) set.push(box);
        return { inner, outer };
      },
    };
    return { canvas, zoomed, set };
  };

  it("fits first, then widens the content box by the padding on all four sides", () => {
    const { canvas, zoomed, set } = fakeCanvas({ x: 100, y: 50, width: 400, height: 200 });

    fitWithPadding(canvas);

    expect(zoomed).toEqual(["fit-viewport"]);
    expect(set).toEqual([{ x: 84, y: 34, width: 432, height: 232 }]);
  });

  /**
   * `fit-viewport` caps its scale at 1, so a model smaller than its container
   * renders at 100% rather than being blown up. The `viewbox(box)` setter takes
   * whatever scale the box implies, so padding alone would have magnified it.
   */
  it("never magnifies a diagram smaller than its container", () => {
    const { canvas, set } = fakeCanvas(
      { x: 0, y: 0, width: 100, height: 50 },
      { x: 0, y: 0, width: 800, height: 400 },
    );

    fitWithPadding(canvas);

    const box = set[0] as { x: number; y: number; width: number; height: number };
    // The setter's scale is min(outer/box) per axis — at least as big as the
    // viewport on both means it can never exceed 1.
    expect(Math.min(800 / box.width, 400 / box.height)).toBeLessThanOrEqual(1);
    // ...and the content stays centred rather than pinned to a corner.
    expect(box.x + box.width / 2).toBe(50);
    expect(box.y + box.height / 2).toBe(25);
  });

  it("leaves extra room above when asked, for an agent's state pill", () => {
    const { canvas, set } = fakeCanvas({ x: 100, y: 50, width: 400, height: 200 });

    fitWithPadding(canvas, 34);

    expect(set).toEqual([{ x: 84, y: 0, width: 432, height: 266 }]);
  });

  it("leaves an empty diagram to plain fit-viewport", () => {
    // A zero-sized content box has nothing to pad, and padding it would invert
    // the box rather than inset it.
    const { canvas, zoomed, set } = fakeCanvas({ x: 0, y: 0, width: 0, height: 0 });

    fitWithPadding(canvas);

    expect(zoomed).toEqual(["fit-viewport"]);
    expect(set).toEqual([]);
  });
});

describe("agentStateOf", () => {
  const agent = { elementId: "Agent", toolIds: ["ToolA", "ToolB"] };

  it("is calling tools while the token is on one of its tools", () => {
    // The host stays active around a running tool; the tool is what to say.
    expect(agentStateOf(agent, ["Agent", "ToolA"])).toBe("calling-tools");
  });

  it("is thinking while the token rests on the host itself", () => {
    expect(agentStateOf(agent, ["Agent"])).toBe("thinking");
  });

  it("says nothing once the token has moved on, or before it arrives", () => {
    // Operate shows no label for an idle or completed agent.
    expect(agentStateOf(agent, ["Next"])).toBeNull();
    expect(agentStateOf(agent, [])).toBeNull();
  });
});

describe("walkedCounts", () => {
  it("counts each element's activations on the path", () => {
    const counts = walkedCounts(["Start", "Agent", "ToolA", "ToolB", "ToolA"], []);
    expect(Object.fromEntries(counts)).toEqual({ Start: 1, Agent: 1, ToolA: 2, ToolB: 1 });
  });

  it("does not count an activation the walk has not reached yet", () => {
    const counts = walkedCounts(["Agent", "ToolA", "ToolB"], ["ToolB"]);
    expect(Object.fromEntries(counts)).toEqual({ Agent: 1, ToolA: 1 });
  });
});

describe("enclosing", () => {
  // Agent > SubTool (a compound tool) > Inner.
  const agent = { id: "Agent" };
  const subTool = { id: "SubTool", parent: agent };
  const inner = { id: "Inner", parent: subTool };
  const registry = { get: (id: string) => ({ Agent: agent, SubTool: subTool, Inner: inner })[id] };

  it("keeps a token inside a compound tool attributed to that tool and its agent", () => {
    const within = enclosing(registry, ["Inner"]);
    expect(within).toEqual(expect.arrayContaining(["Inner", "SubTool", "Agent"]));
    // ...so the agent still reads as calling tools, not as nothing at all.
    expect(agentStateOf({ elementId: "Agent", toolIds: ["SubTool"] }, within)).toBe(
      "calling-tools",
    );
  });

  it("passes through an id the diagram doesn't have", () => {
    expect(enclosing(registry, ["Elsewhere"])).toEqual(["Elsewhere"]);
  });
});

describe("walkedPrefix", () => {
  const onDiagram = (id: string) => id !== "Called";

  it("drops the activations still queued to walk", () => {
    expect(walkedPrefix(["Start", "A", "B", "A"], ["B", "A"], onDiagram)).toEqual(["Start", "A"]);
  });

  it("does not count an off-diagram activation as one of the queued", () => {
    // A called process's elements never enter the queue.
    expect(walkedPrefix(["Start", "A", "Called", "B"], ["B"], onDiagram)).toEqual([
      "Start",
      "A",
      "Called",
    ]);
  });
});

describe("traversed", () => {
  it("needs the walk to reach the target after leaving the source", () => {
    expect(traversed(["Start", "A", "B"], "A", "B")).toBe(true);
    expect(traversed(["Start", "A"], "A", "B")).toBe(false);
  });

  it("does not show a loop's way back while the token is still on its first pass", () => {
    // Start → A → B → A, walked only as far as the first A: B → A hasn't happened yet.
    expect(traversed(["Start", "A"], "B", "A")).toBe(false);
    expect(traversed(["Start", "A", "B", "A"], "B", "A")).toBe(true);
  });
});
