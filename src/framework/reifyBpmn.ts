/**
 * Render a reified run (see `reify.ts`) as BPMN 2.0 XML that mirrors **what the
 * ad-hoc sub-process actually did** — an expanded sub-process container holding
 * the executed steps in their real execution order.
 *
 * An `adHocSubProcess` has no sequence flows: the agent activates inner
 * activities on demand, choosing each next step *after* seeing the previous
 * step's result. So the honest reification of a single run is the sequence the
 * agent actually walked, wrapped in a sub-process box that stands in for the
 * ad-hoc container. That's what `reifyToBpmn` emits: a `<bpmn:subProcess>`
 * (rendered expanded) whose inner start → task₁ → … → taskₙ → end chain is the
 * steps in the order they ran.
 *
 * The emitted model is **descriptive**, not redeployable: each step becomes a
 * task reusing the original element's id and name, and the flows encode the
 * observed order. The data-dependency signal the reifier recovers (which step
 * *actually* consumed which earlier step's output) is not drawn as parallelism
 * here — showing data-independent steps as "parallel" would misrepresent a run
 * the agent performed strictly in sequence. That signal is surfaced as
 * annotation in the UI (see `ReifiedProcess.tsx`) instead.
 *
 * DI is hand-computed: `bpmn-auto-layout` does not lay out the *inside* of an
 * expanded sub-process (it leaves children in the parent's coordinate space),
 * and a single left-to-right chain is trivial to position deterministically —
 * so the output is snapshot-friendly and needs no auto-layouter.
 */

import type { ReifiedDag } from "./reify";

interface Positioned {
  x: number;
  y: number;
  w: number;
  h: number;
}

const TASK_W = 130;
const TASK_H = 80;
const EVENT_D = 36;
const GAP = 55; // horizontal gap between chained inner shapes
const PAD_SIDE = 34; // sub-process inner padding, left/right/bottom
const PAD_TOP = 46; // extra top padding for the sub-process name band
const TOP = 60; // sub-process top y
const SUB_X = 60; // sub-process left edge

export interface ReifyBpmnOptions {
  /** Process id for the reified definition. */
  processId?: string;
  /** Process name — also the sub-process container's label. */
  processName?: string;
}

/**
 * Emit BPMN XML for a reified run: the executed steps as a left-to-right chain
 * in **actual execution order**, wrapped in an expanded `<bpmn:subProcess>`
 * that stands in for the ad-hoc sub-process. DI is hand-computed and
 * deterministic — the same DAG always yields the same XML.
 */
export function reifyToBpmn(dag: ReifiedDag, options: ReifyBpmnOptions = {}): string {
  const processId = options.processId ?? "reified-process";
  const processName = options.processName ?? "Reified process (post-hoc)";
  const subId = "SubProcess_reified";
  const innerStartId = "StartEvent_inner";
  const innerEndId = "EndEvent_inner";

  // Execution order is the DAG's node order (`buildDag` pushes nodes as it walks
  // the trace in order) — the sequence the agent actually walked.
  const nodes = dag.nodes;

  // ---- Layout: a single inner row, left to right. ----
  const rowCenterY = TOP + PAD_TOP + TASK_H / 2;
  const eventY = Math.round(rowCenterY - EVENT_D / 2);
  const taskY = TOP + PAD_TOP;

  // Chain: innerStart → tasks → innerEnd, positioned relative to the
  // sub-process content origin, then shifted to absolute coordinates.
  const innerOrder: Array<{ id: string; w: number; h: number; y: number }> = [
    { id: innerStartId, w: EVENT_D, h: EVENT_D, y: eventY },
    ...nodes.map((n) => ({ id: n.id, w: TASK_W, h: TASK_H, y: taskY })),
    { id: innerEndId, w: EVENT_D, h: EVENT_D, y: eventY },
  ];

  const pos = new Map<string, Positioned>();
  let cursorX = SUB_X + PAD_SIDE;
  for (const s of innerOrder) {
    pos.set(s.id, { x: cursorX, y: s.y, w: s.w, h: s.h });
    cursorX += s.w + GAP;
  }
  const contentRight = cursorX - GAP; // trim trailing gap
  const subWidth = contentRight - SUB_X + PAD_SIDE;
  const subHeight = PAD_TOP + TASK_H + PAD_SIDE;
  pos.set(subId, { x: SUB_X, y: TOP, w: subWidth, h: subHeight });

  // ---- Flows: the inner chain in execution order. ----
  interface Flow {
    id: string;
    source: string;
    target: string;
  }
  const flows: Flow[] = [];
  const chain = innerOrder.map((s) => s.id);
  for (let i = 0; i < chain.length - 1; i++) {
    flows.push({ id: `Flow_${i + 1}`, source: chain[i], target: chain[i + 1] });
  }

  const incoming = new Map<string, string[]>();
  const outgoing = new Map<string, string[]>();
  for (const f of flows) {
    (outgoing.get(f.source) ?? outgoing.set(f.source, []).get(f.source)!).push(f.id);
    (incoming.get(f.target) ?? incoming.set(f.target, []).get(f.target)!).push(f.id);
  }
  const refs = (ids: string[] | undefined, tag: string) =>
    (ids ?? []).map((id) => `        <bpmn:${tag}>${id}</bpmn:${tag}>`).join("\n");

  // ---- Semantic elements. ----
  // A lone expanded sub-process (a descriptive, non-executable model needs no
  // outer start/end — the box itself delimits the reified run).
  const innerParts: string[] = [];
  innerParts.push(`      <bpmn:startEvent id="${innerStartId}" name="Run started">`);
  innerParts.push(refs(outgoing.get(innerStartId), "outgoing"));
  innerParts.push(`      </bpmn:startEvent>`);

  for (const n of nodes) {
    const inc = refs(incoming.get(n.id), "incoming");
    const out = refs(outgoing.get(n.id), "outgoing");
    innerParts.push(`      <bpmn:task id="${xmlId(n.id)}" name="${xmlAttr(n.label)}">`);
    if (inc) innerParts.push(inc);
    if (out) innerParts.push(out);
    innerParts.push(`      </bpmn:task>`);
  }

  innerParts.push(`      <bpmn:endEvent id="${innerEndId}" name="Run complete">`);
  innerParts.push(refs(incoming.get(innerEndId), "incoming"));
  innerParts.push(`      </bpmn:endEvent>`);

  for (const f of flows) {
    innerParts.push(
      `      <bpmn:sequenceFlow id="${f.id}" sourceRef="${xmlId(f.source)}" targetRef="${xmlId(f.target)}" />`,
    );
  }

  const semantic = [
    `    <bpmn:subProcess id="${subId}" name="${xmlAttr(processName)}">`,
    innerParts.filter((p) => p.length > 0).join("\n"),
    `    </bpmn:subProcess>`,
  ].join("\n");

  // ---- DI. ----
  const di: string[] = [];
  // The sub-process shape is marked expanded so bpmn-js renders it as a
  // container around its children rather than a collapsed task-sized box.
  const sp = pos.get(subId)!;
  di.push(`      <bpmndi:BPMNShape id="${subId}_di" bpmnElement="${subId}" isExpanded="true">`);
  di.push(`        <dc:Bounds x="${sp.x}" y="${sp.y}" width="${sp.w}" height="${sp.h}" />`);
  di.push(`      </bpmndi:BPMNShape>`);

  const shape = (elementId: string, p: Positioned) => {
    di.push(`      <bpmndi:BPMNShape id="${xmlId(elementId)}_di" bpmnElement="${xmlId(elementId)}">`);
    di.push(`        <dc:Bounds x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" />`);
    di.push(`      </bpmndi:BPMNShape>`);
  };
  shape(innerStartId, pos.get(innerStartId)!);
  for (const n of nodes) shape(n.id, pos.get(n.id)!);
  shape(innerEndId, pos.get(innerEndId)!);

  for (const f of flows) {
    const s = pos.get(f.source)!;
    const t = pos.get(f.target)!;
    const wp1 = { x: s.x + s.w, y: Math.round(s.y + s.h / 2) };
    const wp2 = { x: t.x, y: Math.round(t.y + t.h / 2) };
    di.push(`      <bpmndi:BPMNEdge id="${f.id}_di" bpmnElement="${f.id}">`);
    di.push(`        <di:waypoint x="${wp1.x}" y="${wp1.y}" />`);
    di.push(`        <di:waypoint x="${wp2.x}" y="${wp2.y}" />`);
    di.push(`      </bpmndi:BPMNEdge>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_reified" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="${xmlId(processId)}" isExecutable="false">
${semantic}
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_reified">
    <bpmndi:BPMNPlane id="BPMNPlane_reified" bpmnElement="${xmlId(processId)}">
${di.join("\n")}
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;
}

/**
 * The BPMN element id a reified step is emitted under — the same sanitisation
 * `reifyToBpmn` applies. Lets a viewer map a clicked shape's id back to its
 * `DagNode`.
 */
export function bpmnElementId(nodeId: string): string {
  return xmlId(nodeId);
}

/** Sanitise a value for an XML id (NCName-ish). */
function xmlId(id: string): string {
  const cleaned = id.replace(/[^A-Za-z0-9_.-]/g, "_");
  return /^[A-Za-z_]/.test(cleaned) ? cleaned : `_${cleaned}`;
}

/** Escape a string for use in an XML attribute value. */
function xmlAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
