// Static analysis of a BPMN document: everything the probe needs to know
// *before* deploying it, so it can register a stub handler for each job type
// and describe what it found in the coverage report. Deliberately mirrors the
// approach in src/framework/model.ts (own-scoped extensionElements lookups
// rather than a raw-XML regex, since XMLSerializer-style re-escaping is what
// broke fromAi() parsing there) — but implemented against the plain-object
// tree from ./xml.mjs instead of a browser DOMParser, which Node doesn't have.

import { directChild, findAll, localName, nearestOwner } from "./xml.mjs";

export const AGENT_JOB_TYPE_PREFIX = "io.camunda.agenticai:aiagent";

const ACTIVITY_TAGS = [
  "task",
  "serviceTask",
  "scriptTask",
  "sendTask",
  "receiveTask",
  "businessRuleTask",
  "userTask",
  "manualTask",
  "callActivity",
  "adHocSubProcess",
  "subProcess",
];

function ownExtensionElements(el) {
  return directChild(el, "extensionElements");
}

/** The `zeebe:taskDefinition/@type` declared directly on `el`, if any. */
function ownTaskDefinitionType(el) {
  const ext = ownExtensionElements(el);
  if (!ext) return null;
  const def = directChild(ext, "taskDefinition");
  return def?.attrs.type ?? null;
}

/**
 * The job type the engine emits for `el` — a `zeebe:taskDefinition` wins;
 * otherwise a `scriptTask` with none gets a job typed as its own element id
 * (matching src/framework/model.ts's `jobTypeOf`).
 */
function jobTypeOf(el) {
  const type = ownTaskDefinitionType(el);
  if (type) return type;
  if (localName(el) === "scriptTask") return el.attrs.id ?? null;
  return null;
}

function documentationOf(el) {
  return (directChild(el, "documentation")?.text ?? "").trim();
}

function formIdOf(el) {
  const ext = ownExtensionElements(el);
  if (!ext) return undefined;
  return directChild(ext, "formDefinition")?.attrs.formId ?? undefined;
}

function loopCharacteristicsOf(el) {
  const lc = directChild(el, "multiInstanceLoopCharacteristics");
  if (!lc) return null;
  return {
    isSequential: lc.attrs.isSequential === "true",
  };
}

/** Every message/signal definition by name, resolved through its `*Ref`. */
function refLookup(root, elementTag, idAttr = "id", nameAttr = "name") {
  const map = new Map();
  for (const el of findAll(root, elementTag)) {
    map.set(el.attrs[idAttr], el.attrs[nameAttr] ?? el.attrs[idAttr]);
  }
  return map;
}

function isDescendant(ancestor, node) {
  let cur = node.parent;
  while (cur) {
    if (cur === ancestor) return true;
    cur = cur.parent;
  }
  return false;
}

export function analyzeModel(xmlRoot) {
  const definitions = directChild(xmlRoot, "definitions") ?? xmlRoot;

  const processes = findAll(definitions, "process").map((p) => ({
    elementId: p.attrs.id ?? "",
    name: p.attrs.name ?? p.attrs.id ?? "",
  }));

  const agentHosts = findAll(definitions, "adHocSubProcess").filter((el) =>
    (jobTypeOf(el) ?? "").startsWith(AGENT_JOB_TYPE_PREFIX),
  );

  const tasksByElement = [];
  for (const el of findAll(definitions, ACTIVITY_TAGS)) {
    if (agentHosts.includes(el)) continue; // the container itself is handled separately
    const jobType = jobTypeOf(el);
    const id = el.attrs.id;
    if (!jobType || !id) continue;
    const host = agentHosts.find((h) => isDescendant(h, el));
    tasksByElement.push({
      elementId: id,
      label: el.attrs.name ?? id,
      jobType,
      documentation: documentationOf(el),
      isTool: !!host,
      hostElementId: host?.attrs.id,
      multiInstance: loopCharacteristicsOf(el),
    });
  }

  const agents = agentHosts.map((host) => ({
    elementId: host.attrs.id ?? "",
    label: host.attrs.name ?? host.attrs.id ?? "",
    jobType: jobTypeOf(host),
    tools: tasksByElement.filter((t) => t.hostElementId === host.attrs.id),
  }));

  const userTasks = findAll(definitions, "userTask").map((el) => ({
    elementId: el.attrs.id ?? "",
    label: el.attrs.name ?? el.attrs.id ?? "",
    formId: formIdOf(el),
  }));

  const messageNames = refLookup(definitions, "message");
  const signalNames = refLookup(definitions, "signal");

  const timers = findAll(definitions, "timerEventDefinition").map((td) => {
    const owner = nearestOwner(td);
    const dur = directChild(td, "timeDuration")?.text?.trim();
    const date = directChild(td, "timeDate")?.text?.trim();
    const cycle = directChild(td, "timeCycle")?.text?.trim();
    return {
      elementId: owner?.attrs.id ?? "",
      label: owner?.attrs.name ?? owner?.attrs.id ?? "",
      timeDuration: dur,
      timeDate: date,
      timeCycle: cycle,
    };
  });

  const messages = findAll(definitions, "messageEventDefinition").map((md) => {
    const owner = nearestOwner(md);
    const ref = md.attrs.messageRef;
    return {
      elementId: owner?.attrs.id ?? "",
      label: owner?.attrs.name ?? owner?.attrs.id ?? "",
      messageName: (ref && messageNames.get(ref)) ?? ref ?? "",
    };
  });

  const signals = findAll(definitions, "signalEventDefinition").map((sd) => {
    const owner = nearestOwner(sd);
    const ref = sd.attrs.signalRef;
    return {
      elementId: owner?.attrs.id ?? "",
      label: owner?.attrs.name ?? owner?.attrs.id ?? "",
      signalName: (ref && signalNames.get(ref)) ?? ref ?? "",
    };
  });

  const compensations = findAll(definitions, "compensateEventDefinition").map((cd) => {
    const owner = nearestOwner(cd);
    return { elementId: owner?.attrs.id ?? "", label: owner?.attrs.name ?? owner?.attrs.id ?? "" };
  });

  const businessRuleTasks = findAll(definitions, "businessRuleTask").map((el) => {
    const ext = ownExtensionElements(el);
    const calledDecision = ext ? directChild(ext, "calledDecision") : null;
    return {
      elementId: el.attrs.id ?? "",
      label: el.attrs.name ?? el.attrs.id ?? "",
      decisionId: calledDecision?.attrs.decisionId,
    };
  });

  const errorBoundaries = findAll(definitions, "errorEventDefinition").map((ed) => {
    const owner = nearestOwner(ed);
    return { elementId: owner?.attrs.id ?? "", label: owner?.attrs.name ?? owner?.attrs.id ?? "" };
  });

  // Every job type a stub worker must cover: every non-tool, non-agent task,
  // plus every tool (tools are activated by the agent's stub, but still need
  // a plain worker registered to actually complete once activated).
  const jobTypes = [...new Set(tasksByElement.map((t) => t.jobType))];
  const agentJobTypes = [...new Set(agents.map((a) => a.jobType).filter(Boolean))];

  return {
    processes,
    agents,
    tasksByElement,
    userTasks,
    timers,
    messages,
    signals,
    compensations,
    businessRuleTasks,
    errorBoundaries,
    jobTypes,
    agentJobTypes,
  };
}
