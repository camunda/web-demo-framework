import { useEffect, useMemo, useRef } from "react";
import Viewer from "bpmn-js/lib/Viewer";
import { diagramIconsFor, installDiagramIcons } from "./diagramIcons";

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
 */
export interface RuntimeDiagramProps {
  /** The diagram XML to render. */
  xml: string;
  /** Element ids to highlight as active (token) — marker class `nano-active`. */
  activeIds: string[];
  /** Element ids to highlight as incidents — marker class `nano-incident`. */
  incidentIds: string[];
  /** Extra class for the container, added alongside `runtime-diagram`. */
  className?: string;
}

interface CanvasLike {
  addMarker: (id: string, cls: string) => void;
  removeMarker: (id: string, cls: string) => void;
  resized: () => void;
  zoom: (mode: string) => void;
}

interface OverlaysLike {
  add: (id: string, overlay: { position: unknown; html: string }) => string;
  remove: (id: string) => void;
}

export function RuntimeDiagram({
  xml,
  activeIds,
  incidentIds,
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
  const idsRef = useRef({ activeIds, incidentIds });
  idsRef.current = { activeIds, incidentIds };

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

    const next: { id: string; cls: string }[] = [
      ...idsRef.current.activeIds.map((id) => ({ id, cls: "nano-active" })),
      ...idsRef.current.incidentIds.map((id) => ({ id, cls: "nano-incident" })),
    ];
    for (const { id, cls } of next) {
      try {
        canvas.addMarker(id, cls);
      } catch {
        /* element not in this diagram */
      }
    }
    markedRef.current = next;

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
    for (const id of idsRef.current.activeIds) {
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
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const viewer = new Viewer({ container: containerRef.current });
    viewerRef.current = viewer;
    importedRef.current = false;
    // `importXML` resolves after this effect may already have been cleaned up —
    // a new `xml` prop, or an unmount. Without this guard the late resolution
    // would zoom and mark a viewer that has been destroyed, or worse, mark the
    // *next* viewer as imported while its own import is still in flight.
    let current = true;
    viewer
      .importXML(xml)
      .then(() => {
        if (!current) return;
        viewer.get<CanvasLike>("canvas").zoom("fit-viewport");
        importedRef.current = true;
        applyMarkers();
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
        canvas.zoom("fit-viewport");
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
  }, [activeIds, incidentIds]);

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
