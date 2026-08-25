import { useEffect, useMemo, useRef, useState } from "react";
import NavigatedViewer from "bpmn-js/lib/NavigatedViewer";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import { CollapsibleCard } from "./CollapsibleCard";
import { buildDag, stepsFromTrace, type DagNode, type ReifiedDag } from "../reify";
import { reifyToBpmn, bpmnElementId } from "../reifyBpmn";
import type { TraceEntry } from "../types";

/**
 * The **reified process** panel: a post-hoc BPMN of what the ad-hoc
 * sub-process actually executed this run, rendered as the sequence the agent
 * actually walked, wrapped in a sub-process container (see `reifyBpmn.ts`).
 *
 * The agent has no sequence flows — it activates tools on demand, choosing each
 * next step after seeing the previous result — so the only record of "what
 * happened" is the trace, and the honest picture of it is that sequence. On top
 * of the order, the reifier recovers the *data* dependencies (each step's
 * read-set, captured live in the sandbox, against earlier steps' write-sets):
 * the reveal on loan-origination is that although the agent ran the four gather
 * tools in sequence, only one step actually consumed another's output —
 * AssessApplication → IssueLoanOffer via `riskBand` — so the rest were ordered
 * by the agent's choice, not by a data requirement. That signal is surfaced as
 * annotation (the insight line and the per-step detail), not as parallelism.
 */
export interface ReifiedProcessProps {
  /** The run's activity log — the same trace `TraceTimeline` renders. */
  log: TraceEntry[];
  /** Element id → human label, reused for the reified node names. */
  labelFor: (id: string) => string;
  /** Process id/name for the emitted definition. */
  processId?: string;
  processName?: string;
}

export function ReifiedProcess({
  log,
  labelFor,
  processId = "reified-process",
  processName = "Reified process (post-hoc)",
}: ReifiedProcessProps) {
  const dag = useMemo(
    () => buildDag(stepsFromTrace(log, labelFor)),
    [log, labelFor],
  );

  const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);
  const viewerRef = useRef<InstanceType<typeof NavigatedViewer> | null>(null);
  const [importError, setImportError] = useState<string | null>(null);
  // The id of the node whose variables are shown in the detail panel (null =
  // nothing selected). Cleared whenever the reified graph changes.
  const [selectedId, setSelectedId] = useState<string | null>(null);
  // The reified BPMN: the executed steps as a sequence inside an expanded
  // sub-process, with hand-computed DI (deterministic, synchronous). Held so
  // both the viewer and the download button share the exact same document.
  const xml = useMemo(
    () => (dag.nodes.length ? reifyToBpmn(dag, { processId, processName }) : null),
    [dag, processId, processName],
  );

  // Clicked-shape id -> node, so a viewer selection maps back to its data.
  const nodeByBpmnId = useMemo(() => {
    const map = new Map<string, DagNode>();
    for (const n of dag.nodes) map.set(bpmnElementId(n.id), n);
    return map;
  }, [dag]);

  const selectedNode = useMemo(
    () => dag.nodes.find((n) => n.id === selectedId) ?? null,
    [dag, selectedId],
  );

  // The graph changed — drop any stale selection.
  useEffect(() => {
    setSelectedId(null);
  }, [dag]);

  // One viewer, (re)created whenever the container mounts (the panel is a
  // collapsible — its body, and so the canvas element, only exists once the
  // reader expands it) or the laid-out XML changes. Guard against overlapping
  // async imports (a fast re-run) by tagging each and ignoring a stale one.
  useEffect(() => {
    if (!containerEl || !xml) return;
    const viewer = new NavigatedViewer({ container: containerEl });
    viewerRef.current = viewer;
    let cancelled = false;
    viewer
      .importXML(xml)
      .then(() => {
        if (cancelled) return;
        setImportError(null);
        try {
          viewer
            .get<{ zoom: (mode: string, center?: string | object) => void }>("canvas")
            .zoom("fit-viewport", "auto");
        } catch {
          /* canvas not ready — harmless */
        }
        // Clicking a task selects it; clicking a gateway/event/background
        // clears the selection. A node the reifier didn't produce (start/end/
        // gateway) isn't in the lookup, so it reads as "clear".
        const eventBus = viewer.get<{
          on: (event: string, cb: (e: { element: { id: string } }) => void) => void;
        }>("eventBus");
        eventBus.on("element.click", (e) => {
          if (cancelled) return;
          setSelectedId(nodeByBpmnId.get(e.element.id)?.id ?? null);
        });
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setImportError(err instanceof Error ? err.message : String(err));
      });
    return () => {
      cancelled = true;
      viewer.destroy();
      if (viewerRef.current === viewer) viewerRef.current = null;
    };
  }, [containerEl, xml, nodeByBpmnId]);

  // Reflect the selection onto the canvas with a highlight marker.
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    let canvas: {
      addMarker: (id: string, cls: string) => void;
      removeMarker: (id: string, cls: string) => void;
    };
    try {
      canvas = viewer.get("canvas");
    } catch {
      return;
    }
    if (!selectedNode) return;
    const bpmnId = bpmnElementId(selectedNode.id);
    try {
      canvas.addMarker(bpmnId, "reified-selected");
    } catch {
      return;
    }
    return () => {
      try {
        canvas.removeMarker(bpmnId, "reified-selected");
      } catch {
        /* viewer torn down — nothing to clean */
      }
    };
  }, [selectedNode, xml]);

  const download = () => {
    if (!xml) return;
    const blob = new Blob([xml], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${processId}.bpmn`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <CollapsibleCard
      sectionId="reified-process"
      className="grow"
      title="Reified process"
      description="A post-hoc BPMN of what actually ran — the executed steps in sequence, inside the ad-hoc sub-process."
      defaultOpen={false}
    >
      {dag.nodes.length === 0 ? (
        <p className="panel-empty">
          Run the example to reconstruct the executed process from its trace.
        </p>
      ) : (
        <>
          <div
            ref={setContainerEl}
            className="reified-canvas"
            style={{ height: 320, width: "100%" }}
            aria-label="Reified process diagram"
          />
          {importError && (
            <p className="panel-error">Could not render the reified model: {importError}</p>
          )}
          <ReifiedDetail dag={dag} node={selectedNode} />
          <ReifiedInsight dag={dag} />
          <button type="button" className="btn-plain" onClick={download}>
            Download .bpmn
          </button>
        </>
      )}
    </CollapsibleCard>
  );
}

/** A one-line reading of what the DAG reveals, above the raw diagram. */
function ReifiedInsight({ dag }: { dag: ReifiedDag }) {
  const nameOf = useMemo(() => {
    const byId = new Map(dag.nodes.map((n) => [n.id, n.label]));
    return (id: string) => byId.get(id) ?? id;
  }, [dag]);
  const handoffs = dag.edges.filter((e) => e.from !== e.to);
  // Steps that actually consumed an earlier step's output — everything that
  // isn't a source. The rest were ordered by the agent's choice, not by data.
  const dependent = dag.nodes.length - dag.sources.length;
  const independent = dag.sources.length;
  return (
    <div className="reified-insight">
      <p>
        <strong>{dag.nodes.length}</strong> step{dag.nodes.length === 1 ? "" : "s"} ran in
        sequence. <strong>{dependent}</strong> consumed an earlier step's output; the other{" "}
        <strong>{independent}</strong> depended only on the start inputs — their order was the
        agent's choice, not a data requirement.
      </p>
      {handoffs.length > 0 ? (
        <ul>
          {handoffs.map((e) => (
            <li key={`${e.from}-${e.to}`}>
              {nameOf(e.from)} → {nameOf(e.to)}{" "}
              <span className="reified-via">via {e.via.join(", ")}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No inter-step data hand-offs — every step depended only on the start inputs.</p>
      )}
    </div>
  );
}

/**
 * The variables a clicked step touched: what it read (and which upstream step
 * produced each), and what it wrote (with the actual values). Prompts the
 * reader to click a task when nothing is selected.
 */
function ReifiedDetail({ dag, node }: { dag: ReifiedDag; node: DagNode | null }) {
  const producerOf = useMemo(() => {
    // For the selected node, map each read variable to the label of the step
    // that last wrote it (via the dependency edges into this node).
    const byVar = new Map<string, string>();
    if (node) {
      const labelById = new Map(dag.nodes.map((n) => [n.id, n.label]));
      for (const e of dag.edges) {
        if (e.to !== node.id) continue;
        for (const v of e.via) byVar.set(v, labelById.get(e.from) ?? e.from);
      }
    }
    return byVar;
  }, [dag, node]);

  if (!node) {
    return (
      <p className="reified-hint">
        Click a step in the diagram to see the variables it read and wrote.
      </p>
    );
  }

  return (
    <div className="reified-detail">
      <div className="reified-detail-head">
        <strong>{node.label}</strong>
        {node.turn != null && <span className="reified-turn">turn {node.turn}</span>}
      </div>

      {node.thought && (
        <div className="reified-detail-section">
          <span className="reified-detail-label">Agent reasoning</span>
          <blockquote className="reified-thought">{node.thought}</blockquote>
        </div>
      )}

      <div className="reified-detail-section">
        <span className="reified-detail-label">Read</span>
        {node.reads.length === 0 ? (
          <span className="reified-none">— nothing (depended only on start inputs)</span>
        ) : (
          <ul>
            {node.reads.map((v) => (
              <li key={v}>
                <code>{v}</code>
                {producerOf.has(v) ? (
                  <span className="reified-source"> from {producerOf.get(v)}</span>
                ) : (
                  <span className="reified-source reified-seed"> (start input)</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="reified-detail-section">
        <span className="reified-detail-label">Wrote</span>
        {node.writes.length === 0 ? (
          <span className="reified-none">— nothing</span>
        ) : (
          <ul>
            {node.writes.map((v) => (
              <li key={v}>
                <code>{v}</code>
                {node.values && v in node.values && (
                  <span className="reified-value"> = {formatValue(node.values[v])}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/** Compact one-line rendering of a written value for the detail list. */
function formatValue(value: unknown): string {
  let text: string;
  try {
    text = typeof value === "string" ? value : JSON.stringify(value);
  } catch {
    text = String(value);
  }
  if (text === undefined) text = String(value);
  return text.length > 120 ? `${text.slice(0, 117)}…` : text;
}
