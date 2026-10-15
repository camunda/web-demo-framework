import { useEffect, useMemo, useRef } from "react";
import Viewer from "bpmn-js/lib/Viewer";
import { diagramIconsFor, installDiagramIcons } from "./diagramIcons";
import type { WalkTracker } from "./walkTracker";

/**
 * The live diagram: token and incident markers on a model the reader watches
 * but cannot move.
 *
 * Replaces `BpmnRuntimeView` from `@nanobpm/bojtos-react`, which is built on
 * bpmn-js's `NavigatedViewer` — that bundles `zoomscroll` and `move-canvas`, so
 * the diagram pans on drag and zooms on wheel, with no prop to turn either off.
 * In a page-embedded runner both are hazards rather than features: a wheel over
 * the diagram zooms it instead of scrolling the page, and one stray drag leaves
 * the model half off-screen with no visible way to recentre. This uses the plain
 * `Viewer`, which ships neither module, so "locked" is structural rather than a
 * handler we have to keep suppressing.
 *
 * It also refits on every container resize, which `BpmnRuntimeView` did not — it
 * fit the viewport once on import, so any later size change (an embed being
 * sized to its content, a window resize, a panel opening) left the model
 * off-centre for good.
 *
 * The marker/overlay behaviour is otherwise the same contract: import the XML
 * once and update markers in place, so nothing re-imports while a run steps
 * through. The consumer loads bpmn-js's CSS and provides the `.nano-active` /
 * `.nano-incident` / `.nano-token` styles (see `styles.css`).
 *
 * The run is drawn the way Operate draws one: the path already taken —
 * every element the walk has passed and every sequence flow it took — in blue,
 * and an AI Agent host that is working gets a "Thinking..." / "Calling
 * tools..." label above it and a moving purple outline, with a call count on
 * each tool it has run. All of it follows the walking token rather than the
 * engine's frontier, so none of it gets ahead of what the reader has seen
 * (see `.nano-executed`, `.nano-agent-state`, `.nano-agent-shine` and
 * `.nano-call-count` in `styles.css`).
 */

/** An AI Agent host on the diagram and the tools inside it. */
export interface AgentOnDiagram {
  elementId: string;
  toolIds: string[];
}

/**
 * The states Operate labels on the diagram. It shows nothing for an idle or
 * completed agent, and neither does this.
 */
export type AgentState = "thinking" | "calling-tools";

/** Operate's words for each state. */
export const AGENT_STATE_LABEL: Record<AgentState, string> = {
  thinking: "Thinking...",
  "calling-tools": "Calling tools...",
};

/**
 * What `agent` is doing, given where the token stands. A running tool wins
 * over the host, since the host stays active around its tools; with no tool
 * running, a host holding the token is waiting on its next decision — the
 * model's turn.
 */
export function agentStateOf(
  agent: AgentOnDiagram,
  tokenIds: readonly string[],
): AgentState | null {
  if (agent.toolIds.some((id) => tokenIds.includes(id))) return "calling-tools";
  if (tokenIds.includes(agent.elementId)) return "thinking";
  return null;
}

/** `ids` and every element that contains one of them, by the diagram's nesting. */
export function enclosing(
  registry: { get: (id: string) => unknown },
  ids: readonly string[],
): string[] {
  const out = new Set<string>();
  for (const id of ids) {
    let el = registry.get(id) as { id: string; parent?: unknown } | undefined;
    if (!el) out.add(id);
    while (el) {
      out.add(el.id);
      el = el.parent as typeof el;
    }
  }
  return [...out];
}

/**
 * How many times each element has been activated *as far as the walk has
 * shown*: every activation in `path`, less the ones still queued to walk.
 */
export function walkedCounts(
  path: readonly string[],
  queued: readonly string[],
): Map<string, number> {
  const counts = new Map<string, number>();
  for (const id of path) counts.set(id, (counts.get(id) ?? 0) + 1);
  for (const id of queued) {
    const n = counts.get(id);
    if (n !== undefined) counts.set(id, n - 1);
  }
  for (const [id, n] of counts) if (n <= 0) counts.delete(id);
  return counts;
}

/**
 * The taken-path colour, as a literal: it is written into the diagram's own
 * colour attributes (see `colorConnection`), where bpmn-js derives the arrow
 * marker from the value. Keep in step with `--blue` in `styles.css`.
 */
const PATH_BLUE = "#2563eb";

/**
 * `path` as far as the walk has shown it, in order: everything but the last
 * `queued.length` on-diagram activations, which are still waiting to be walked
 * (off-diagram activations never enter the queue).
 */
export function walkedPrefix(
  path: readonly string[],
  queued: readonly string[],
  onDiagram: (id: string) => boolean,
): string[] {
  let unwalked = queued.length;
  let end = path.length;
  while (unwalked > 0 && end > 0) {
    end -= 1;
    if (onDiagram(path[end])) unwalked -= 1;
  }
  return path.slice(0, end);
}

/**
 * Whether the walk has shown a token leaving `from` and *then* reaching `to`.
 * Reaching `to` at all is not enough: on a loop (A → B → A) the flow B → A
 * would otherwise turn blue while the token is still on the first A.
 */
export function traversed(walked: readonly string[], from: string, to: string): boolean {
  const left = walked.indexOf(from);
  return left !== -1 && walked.lastIndexOf(to) > left;
}

export interface RuntimeDiagramProps {
  /** The diagram XML to render. */
  xml: string;
  /** Element ids to highlight as active (token) — marker class `nano-active`. */
  activeIds: string[];
  /** Element ids to highlight as incidents — marker class `nano-incident`. */
  incidentIds: string[];
  /**
   * Every element the engine has activated this run, in order (append-only).
   * When it grows, the token walks the new elements one at a time before
   * settling on `activeIds`, so elements the engine passes through instantly —
   * a business rule task, a gateway — are seen. Shrinking (a reset) clears it.
   */
  path?: string[];
  /**
   * Changes once per run. A new run's path can arrive no shorter than the last
   * one's (React may batch away the empty path between them), so length alone
   * can't say the walk should start over.
   */
  runId?: number;
  /**
   * The runner's record of how far the walk has got. It outlives this component,
   * so a reopened panel doesn't replay history while a first lazy mount still
   * walks what arrived during loading, and the runner can wait for the walk.
   */
  tracker?: WalkTracker;
  /** How long the walking token rests on each element, in ms. */
  hopMs?: number;
  /** AI Agent hosts to show agent state on — see {@link agentStateOf}. */
  agents?: AgentOnDiagram[];
  /**
   * Sequence flows the engine took, as source → target element ids
   * (`snapshot.takenSequenceFlows`). One is drawn blue once the walk reaches
   * its target.
   */
  takenFlows?: { from: string; to: string }[];
  /** Extra class for the container, added alongside `runtime-diagram`. */
  className?: string;
}

interface Box {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CanvasLike {
  addMarker: (id: string, cls: string) => void;
  removeMarker: (id: string, cls: string) => void;
  resized: () => void;
  zoom: (mode: string) => void;
  viewbox: (box?: Box) => { inner: Box; outer: Box };
}

interface OverlaysLike {
  add: (id: string, overlay: { position: unknown; html: string }) => string;
  remove: (id: string) => void;
}

/**
 * Room above an agent host for its state pill, in diagram units — added to the
 * top of the fit only when the model has a host, so other diagrams keep their
 * size.
 */
const AGENT_STATE_ROOM = 34;

interface RegistryLike {
  get: (id: string) => unknown;
  getAll: () => unknown[];
  getGraphics: (element: unknown) => SVGElement | undefined;
}

interface ConnectionLike {
  id: string;
  type: string;
  source?: { id: string };
  target?: { id: string };
  di?: { get: (key: string) => unknown; set: (key: string, value: unknown) => void };
}

/**
 * Room left around the model when fitting, in diagram units.
 *
 * `fit-viewport` fits the element bounding box exactly, but the live token is
 * an overlay anchored 12 units above and left of its element's corner (plus a
 * glow), so a token on the topmost or leftmost element lands outside the box
 * that was fitted and the container edge cuts it off. Padding the box the
 * canvas fits to is what gives it somewhere to sit. Diagram units rather than
 * pixels, because bpmn-js scales overlay offsets with the zoom too — a pixel
 * value would over- or under-shoot at every scale but one.
 */
const FIT_PADDING = 16;

/**
 * `fit-viewport`, then widened by {@link FIT_PADDING} on all four sides, plus
 * `extraTop` above.
 */
export function fitWithPadding(canvas: CanvasLike, extraTop = 0) {
  canvas.zoom("fit-viewport");
  const { inner, outer } = canvas.viewbox();
  // An empty diagram has nothing to pad, and its zero-sized box would make the
  // scale this derives from meaningless.
  if (!inner?.width || !inner.height) return;

  const padded = {
    x: inner.x - FIT_PADDING,
    y: inner.y - FIT_PADDING - extraTop,
    width: inner.width + FIT_PADDING * 2,
    height: inner.height + FIT_PADDING * 2 + extraTop,
  };
  // `fit-viewport` caps its scale at 1 (`Math.min(1, …)` in diagram-js's
  // `_fitViewport`) so a small model is never blown up to fill the container.
  // The `viewbox(box)` setter has no such cap — it takes whatever scale the box
  // implies — so the box has to carry the cap instead: never smaller than the
  // viewport, grown about its own centre so the padding stays even.
  const width = Math.max(padded.width, outer?.width ?? 0);
  const height = Math.max(padded.height, outer?.height ?? 0);
  canvas.viewbox({
    x: padded.x - (width - padded.width) / 2,
    y: padded.y - (height - padded.height) / 2,
    width,
    height,
  });
}

export function RuntimeDiagram({
  xml,
  activeIds,
  incidentIds,
  path,
  runId,
  tracker,
  hopMs = 450,
  agents,
  takenFlows,
  className,
}: RuntimeDiagramProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<InstanceType<typeof Viewer> | null>(null);
  const importedRef = useRef(false);
  const markedRef = useRef<{ id: string; cls: string }[]>([]);
  const tokenOverlaysRef = useRef<string[]>([]);
  // The latest ids, so the post-import marker pass uses current values rather
  // than the ones that were current when the import started — ids changing
  // mid-import would otherwise leave the diagram unmarked until the next change.
  const idsRef = useRef({ activeIds, incidentIds, agents, takenFlows });
  idsRef.current = { activeIds, incidentIds, agents, takenFlows };
  const agentOverlaysRef = useRef<string[]>([]);
  // Connections drawn blue, with the colour each had in the model before.
  const coloredFlowsRef = useRef(new Map<string, unknown>());
  const fit = (canvas: CanvasLike) =>
    fitWithPadding(canvas, idsRef.current.agents?.length ? AGENT_STATE_ROOM : 0);
  // The walk: elements still to show, the one shown now, and its timer.
  const walkRef = useRef<{ queue: string[]; at: string | null; timer: number }>({
    queue: [],
    at: null,
    timer: 0,
  });
  // How much of which run's `path` has been taken in. Without a tracker, what
  // `path` holds at mount is history: a remount must not replay the whole run.
  const localProgressRef = useRef<{ run: number | undefined; consumed: number }>({
    run: runId,
    consumed: path?.length ?? 0,
  });
  const progress = () => tracker ?? localProgressRef.current;
  const pathRef = useRef({ path, runId, hopMs });
  pathRef.current = { path, runId, hopMs };

  // Connector-template icons for this model (see `diagramIcons.ts`).
  const icons = useMemo(() => diagramIconsFor(xml), [xml]);
  const iconsRef = useRef(icons);
  iconsRef.current = icons;

  const applyMarkers = () => {
    const viewer = viewerRef.current;
    if (!viewer || !importedRef.current) return;
    const canvas = viewer.get<CanvasLike>("canvas");

    for (const { id, cls } of markedRef.current) {
      try {
        canvas.removeMarker(id, cls);
      } catch {
        /* element no longer in this diagram */
      }
    }

    // Mid-walk the token stands where the walk is, not on the final frontier.
    const walking = walkRef.current.at;
    const tokenIds = walking ? [walking] : idsRef.current.activeIds;
    const next: { id: string; cls: string }[] = [
      ...tokenIds.map((id) => ({ id, cls: "nano-active" })),
      ...idsRef.current.incidentIds.map((id) => ({ id, cls: "nano-incident" })),
    ];
    for (const { id, cls } of next) {
      try {
        canvas.addMarker(id, cls);
      } catch {
        /* element not in this diagram */
      }
    }

    // A visible badge on each active element, so token movement reads clearly
    // even where the class-only highlight is too subtle. Removed and re-added
    // each update so the token hops with the frontier.
    const overlays = viewer.get<OverlaysLike>("overlays");
    for (const id of tokenOverlaysRef.current) {
      try {
        overlays.remove(id);
      } catch {
        /* already gone */
      }
    }
    const nextOverlays: string[] = [];
    for (const id of tokenIds) {
      try {
        nextOverlays.push(
          overlays.add(id, {
            position: { top: -12, left: -12 },
            html: '<div class="nano-token" aria-hidden="true"></div>',
          }),
        );
      } catch {
        /* element not in this diagram */
      }
    }
    tokenOverlaysRef.current = nextOverlays;

    const walked = walkedCounts(pathRef.current.path ?? [], walkRef.current.queue);
    const registry = viewer.get<RegistryLike>("elementRegistry");
    const executed = [...walked.keys()].filter((id) => registry.get(id));
    for (const id of executed) {
      try {
        canvas.addMarker(id, "nano-executed");
        next.push({ id, cls: "nano-executed" });
      } catch {
        /* not a shape this diagram can mark */
      }
    }
    markedRef.current = next;
    paintTakenFlows(
      registry,
      walkedPrefix(pathRef.current.path ?? [], walkRef.current.queue, (id) => !!registry.get(id)),
    );

    for (const id of agentOverlaysRef.current) {
      try {
        overlays.remove(id);
      } catch {
        /* already gone */
      }
    }
    const agentOverlays: string[] = [];
    const hosts = idsRef.current.agents ?? [];
    // A token deep inside a compound tool (a sub-process the agent activated)
    // is still that tool running, so judge by every element enclosing it.
    const within = enclosing(registry, tokenIds);
    for (const agent of hosts) {
      const state = agentStateOf(agent, within);
      if (!state) continue;
      const host = registry.get(agent.elementId) as
        | { width?: number; height?: number }
        | undefined;
      if (!host) continue;
      try {
        agentOverlays.push(
          overlays.add(agent.elementId, {
            position: { top: -32, left: 0 },
            html: `<div class="nano-agent-state" aria-hidden="true"><span>${AGENT_STATE_LABEL[state]}</span></div>`,
          }),
        );
        // An outline drawn just outside the host's own border.
        agentOverlays.push(
          overlays.add(agent.elementId, {
            position: { top: -3, left: -3 },
            html: `<div class="nano-agent-shine" aria-hidden="true" style="width:${(host.width ?? 0) + 6}px;height:${(host.height ?? 0) + 6}px"></div>`,
          }),
        );
      } catch {
        /* host not in this diagram */
      }
    }
    const tools = new Set(hosts.flatMap((a) => a.toolIds));
    for (const [id, n] of walked) {
      if (!tools.has(id)) continue;
      try {
        agentOverlays.push(
          overlays.add(id, {
            position: { top: -10, right: 10 },
            html: `<div class="nano-call-count" aria-hidden="true" title="Called ${n} time${n === 1 ? "" : "s"}">${n}</div>`,
          }),
        );
      } catch {
        /* tool not in this diagram */
      }
    }
    agentOverlaysRef.current = agentOverlays;
  };

  /**
   * Draw each taken sequence flow blue once the walk has traversed it,
   * and put back the model's own colour on any that no longer qualify (a new
   * run). Through the connection's colour rather than a CSS marker, as Operate
   * does, so bpmn-js redraws the arrowhead to match the line.
   */
  const paintTakenFlows = (registry: RegistryLike, walked: string[]) => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const graphics = viewer.get<{ update: (type: string, el: unknown, gfx: SVGElement) => void }>(
      "graphicsFactory",
    );
    const taken = new Set(
      (idsRef.current.takenFlows ?? []).map((f) => `${f.from}\u0000${f.to}`),
    );
    const colored = coloredFlowsRef.current;
    for (const el of registry.getAll() as ConnectionLike[]) {
      if (el.type !== "bpmn:SequenceFlow" || !el.di || !el.source || !el.target) continue;
      const on =
        taken.has(`${el.source.id}\u0000${el.target.id}`) &&
        traversed(walked, el.source.id, el.target.id);
      if (on === colored.has(el.id)) continue;
      if (on) {
        colored.set(el.id, el.di.get("border-color"));
        el.di.set("border-color", PATH_BLUE);
      } else {
        el.di.set("border-color", colored.get(el.id));
        colored.delete(el.id);
      }
      const gfx = registry.getGraphics(el);
      if (gfx) graphics.update("connection", el, gfx);
    }
  };

  const reportHops = () => {
    if (!tracker) return;
    const walk = walkRef.current;
    tracker.hopsLeft = walk.queue.length + (walk.at ? 1 : 0);
    tracker.notify();
  };

  /** Queue what `path` gained since last time and start walking it. */
  const consumePath = () => {
    // Until import finishes the registry is empty, so every id would look off-diagram.
    if (!importedRef.current) return;
    const walk = walkRef.current;
    const done = progress();
    const ids = pathRef.current.path ?? [];
    if (pathRef.current.runId !== done.run || ids.length < done.consumed) {
      window.clearTimeout(walk.timer);
      Object.assign(walk, { queue: [], at: null, timer: 0 });
      done.run = pathRef.current.runId;
      done.consumed = 0;
      applyMarkers();
    }
    const fresh = ids.slice(done.consumed);
    done.consumed = ids.length;
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const registry = viewerRef.current?.get<{ get: (id: string) => unknown }>("elementRegistry");
    // A called process's elements are in the log too, but not on this diagram.
    const onDiagram = fresh.filter((id) => registry?.get(id));
    if (onDiagram.length === 0 || reduced) {
      reportHops();
      return;
    }
    walk.queue.push(...onDiagram);
    reportHops();
    if (walk.timer) return;
    const hop = () => {
      walk.at = walk.queue.shift() ?? null;
      walk.timer = walk.at ? window.setTimeout(hop, pathRef.current.hopMs) : 0;
      applyMarkers();
      reportHops();
    };
    hop();
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const viewer = new Viewer({ container: containerRef.current });
    viewerRef.current = viewer;
    importedRef.current = false;
    // A fresh import has the model's own colours; nothing is painted yet.
    coloredFlowsRef.current = new Map();
    // `importXML` resolves after this effect may already have been cleaned up —
    // a new `xml` prop, or an unmount. Without this guard the late resolution
    // would zoom and mark a viewer that has been destroyed, or worse, mark the
    // *next* viewer as imported while its own import is still in flight.
    let current = true;
    viewer
      .importXML(xml)
      .then(() => {
        if (!current) return;
        fit(viewer.get<CanvasLike>("canvas"));
        importedRef.current = true;
        if (tracker) tracker.ready = true;
        applyMarkers();
        consumePath();
        if (containerRef.current)
          installDiagramIcons(containerRef.current, iconsRef.current);
      })
      .catch(() => {
        /* malformed XML — leave blank, the runner's diagnostics say why */
      });
    return () => {
      current = false;
      viewer.destroy();
      viewerRef.current = null;
      importedRef.current = false;
      if (tracker) tracker.ready = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- re-import only on new XML
  }, [xml]);

  // Keep the model centred at whatever size the container ends up. Observing the
  // element covers every cause — an embed sized to its content, a window resize,
  // a neighbouring panel opening — where a `resize` listener would miss most of
  // them, and `zoom("fit-viewport")` recentres as well as rescales.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const refit = () => {
      const viewer = viewerRef.current;
      if (!viewer || !importedRef.current) return;
      const canvas = viewer.get<CanvasLike>("canvas");
      try {
        canvas.resized();
        fit(canvas);
      } catch {
        /* nothing imported yet — the import fits the viewport itself */
      }
    };
    const observer = new ResizeObserver(refit);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    applyMarkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- applyMarkers reads refs
  }, [activeIds, incidentIds, agents, takenFlows]);

  useEffect(() => {
    consumePath();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- consumePath reads refs
  }, [path, runId, hopMs]);

  useEffect(
    () => () => {
      window.clearTimeout(walkRef.current.timer);
      // Whatever was queued is dropped with the component; nothing is walking now.
      Object.assign(walkRef.current, { queue: [], at: null, timer: 0 });
      reportHops();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- unmount only
    [],
  );

  // bpmn-js re-renders an element's visual whenever its markers change, which
  // drops any child we appended — so re-install on every mutation rather than
  // only after import. Coalesced to one pass per frame: a run mutates this
  // subtree constantly (markers, token overlays), and appending an icon is
  // itself a mutation that would otherwise re-trigger the observer.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        installDiagramIcons(container, iconsRef.current);
      });
    };
    const observer = new MutationObserver(schedule);
    observer.observe(container, { childList: true, subtree: true });
    installDiagramIcons(container, iconsRef.current);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [icons]);

  // No inline sizing: an inline `height` beats every class selector, and
  // `height: 100%` against an auto-height parent resolves back to auto, leaving
  // the box at the SVG's intrinsic 150px. `runtime-diagram` carries the height
  // instead, so the canvas has a definite one to fit against either way.
  return (
    <div
      ref={containerRef}
      className={className ? `runtime-diagram ${className}` : "runtime-diagram"}
    />
  );
}

export default RuntimeDiagram;
