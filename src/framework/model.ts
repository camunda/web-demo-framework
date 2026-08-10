/**
 * Read everything the runner needs straight out of the BPMN.
 *
 * The point of the framework: an example author supplies a model and handler
 * code, never prompt plumbing or a tool manifest. Both of those are already in
 * the diagram —
 *
 * - each tool's name and purpose live on the ad-hoc sub-process's children
 *   (`name` + `<bpmn:documentation>`),
 * - each tool argument is declared by a `fromAi(toolCall.x, "…", "string")`
 *   call in that element's input mappings,
 * - the agent's system/user prompts and turn budget are inputs on the AI Agent
 *   connector itself (`data.systemPrompt.prompt`, `data.limits.maxModelCalls`),
 * - every job type is a `zeebe:taskDefinition`.
 *
 * So we parse them, rather than making each example restate them in code.
 * Parsing uses the browser's own `DOMParser` — no XML dependency.
 */

/** The `zeebe:taskDefinition type` of the AI Agent sub-process connector. */
export const AGENT_JOB_TYPE_PREFIX = "io.camunda.agenticai:aiagent";

/** One argument the LLM must supply for a tool call, from `fromAi(...)`. */
export interface ToolArg {
  /** The argument name (`toolCall.geneMarker` → `geneMarker`). */
  name: string;
  /** The description shown to the model. */
  description: string;
  /** `string` | `number` | `boolean` | … as declared in the model. */
  type: string;
}

/** One tool the agent may activate: a child of the ad-hoc sub-process. */
export interface ToolSpec {
  elementId: string;
  /** The element's `name`, for display. */
  label: string;
  /** The job type the engine emits for it. */
  jobType: string;
  /** `<bpmn:documentation>` — what this tool is for, shown to the model. */
  documentation: string;
  args: ToolArg[];
}

/** The ad-hoc sub-process hosting the agent, plus its prompts and limits. */
export interface AgentSpec {
  elementId: string;
  label: string;
  /** The container's job type — what a handler registers against. */
  jobType: string;
  systemPrompt: string;
  userPrompt: string;
  /** `data.limits.maxModelCalls`, defaulted when the model doesn't say. */
  maxModelCalls: number;
  tools: ToolSpec[];
}

/**
 * A diagnostic naming a specific unresolved reference, unsupported construct,
 * or unknown job type — always pointing at the responsible element or
 * resource, so a reader sees exactly what's missing and where instead of a
 * console warning or a mid-run incident.
 *
 * `"error"` must gate Run; `"warning"` is a heads-up (a structural choice the
 * framework made on the reader's behalf, e.g. which of several processes is
 * primary) that doesn't block anything.
 */
export interface Diagnostic {
  severity: "error" | "warning";
  message: string;
  elementId?: string;
  formId?: string;
  jobType?: string;
}

/** Any element that produces a job a handler must serve. */
export interface TaskSpec {
  elementId: string;
  label: string;
  jobType: string;
  documentation: string;
  /** True when this element is a tool inside the agent's ad-hoc sub-process. */
  isTool: boolean;
}

/** A `userTask` — a human step the runner renders a form for. */
export interface UserTaskSpec {
  elementId: string;
  label: string;
  formId?: string;
}

/** Everything read out of one `<bpmn:process>`. */
export interface ProcessSpec {
  processId: string;
  processName: string;
  /** Every job-bearing element in this process, tools included. */
  tasks: TaskSpec[];
  /**
   * Every AI Agent ad-hoc sub-process hosting an agent in this process.
   * Ordinarily zero or one; a diagram with several gets one entry per host,
   * each with its own tool set — see {@link ModelInfo.agents}.
   */
  agents: AgentSpec[];
  userTasks: UserTaskSpec[];
  /** The `formId` bound to the start event, if any. */
  startFormId?: string;
}

export interface ModelInfo {
  /** Every `<bpmn:process>` found in the diagram, parsed independently. */
  processes: ProcessSpec[];
  /**
   * Parse-time diagnostics: unresolved references, unsupported constructs, and
   * unknown job types, each naming the responsible element/resource. Resolution
   * against an example's handlers/forms happens one layer up, in `draft.ts`.
   */
  diagnostics: Diagnostic[];

  // --- Convenience view onto the primary process, for existing callers that
  // only ever dealt with one process and (at most) one agent host. Points at
  // `processes[0]` (or the process selected via `parseModel`'s options).
  processId: string;
  processName: string;
  /** Every job-bearing element of the primary process, tools included. */
  tasks: TaskSpec[];
  /** The primary process's first agent host, or null if it has none. */
  agent: AgentSpec | null;
  /** Every agent host across every process — what a multi-host run needs. */
  agents: AgentSpec[];
  userTasks: UserTaskSpec[];
  /** The `formId` bound to the primary process's start event, if any. */
  startFormId?: string;
}

export interface ParseModelOptions {
  /**
   * Which `<bpmn:process>` is primary when the diagram has more than one.
   * Defaults to the first process encountered.
   */
  processId?: string;
}

const BPMN_NS = "http://www.omg.org/spec/BPMN/20100524/MODEL";
const ZEEBE_NS = "http://camunda.org/schema/zeebe/1.0";

function zeebeEls(el: Element, tag: string): Element[] {
  return Array.from(el.getElementsByTagNameNS(ZEEBE_NS, tag));
}

/** Direct-child lookup, so a container's own mappings don't pick up a tool's. */
function ownZeebeEls(el: Element, tag: string): Element[] {
  return zeebeEls(el, tag).filter((n) => nearestActivity(n) === el);
}

/** The activity element an extension node belongs to. */
function nearestActivity(node: Element): Element | null {
  let cur: Element | null = node.parentElement;
  while (cur) {
    if (cur.namespaceURI === BPMN_NS && cur.localName !== "extensionElements")
      return cur;
    cur = cur.parentElement;
  }
  return null;
}

/**
 * The job type the engine will emit for `el`. A `zeebe:taskDefinition` wins;
 * otherwise a `scriptTask` (no task definition) gets a job typed as its own
 * element id — an engine detail that would otherwise bite every example author.
 */
function jobTypeOf(el: Element): string | null {
  const def = ownZeebeEls(el, "taskDefinition")[0];
  const type = def?.getAttribute("type");
  if (type) return type;
  if (el.localName === "scriptTask") return el.getAttribute("id") ?? null;
  return null;
}

function documentationOf(el: Element): string {
  const doc = Array.from(el.children).find(
    (c) => c.namespaceURI === BPMN_NS && c.localName === "documentation",
  );
  return (doc?.textContent ?? "").trim();
}

/**
 * Turn a FEEL string expression into readable text by concatenating its string
 * literals. A prompt like `="Shipment notes:\n" + notes + "\n\nPlease verify…"`
 * yields the authored prose without evaluating FEEL — the runner supplies the
 * live variables separately, as JSON, so nothing is lost.
 */
export function feelLiteralText(raw: string | null | undefined): string {
  if (!raw) return "";
  const expr = raw.startsWith("=") ? raw.slice(1) : raw;
  const quoted = expr.match(/"((?:[^"\\]|\\.)*)"/g);
  if (!quoted) return expr.trim();
  return quoted
    .map((q) =>
      q
        .slice(1, -1)
        .replace(/\\n/g, "\n")
        .replace(/\\t/g, "\t")
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, "\\"),
    )
    .join("")
    .trim();
}

/** Every attribute value on an element and its descendants, unserialized. */
function attributeValues(el: Element): string {
  const out: string[] = [];
  const walk = (node: Element) => {
    for (const attr of Array.from(node.attributes)) out.push(attr.value);
    for (const child of Array.from(node.children)) walk(child);
  };
  walk(el);
  return out.join("\n");
}

/**
 * All `fromAi(toolCall.x, "desc", "type")` declarations inside an element.
 *
 * Reads attribute values straight off the DOM rather than re-serializing the
 * element: `XMLSerializer` escapes `"` back to `&quot;` inside attributes, and
 * the model stores these expressions as attributes (`zeebe:input/@source`), so
 * a regex over serialized XML silently matches nothing and every tool call
 * arrives with no arguments.
 */
export function parseFromAiArgs(el: Element): ToolArg[] {
  const xml = attributeValues(el);
  const re =
    /fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g;
  const args: ToolArg[] = [];
  const seen = new Set<string>();
  for (const m of xml.matchAll(re)) {
    const name = m[1];
    if (seen.has(name)) continue;
    seen.add(name);
    args.push({
      name,
      description: (m[2] ?? "")
        .replace(/&#10;/g, "\n")
        .replace(/\\"/g, '"')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim(),
      type: m[3] ?? "string",
    });
  }
  return args;
}

/** Read an activity's own `zeebe:input` mappings as target → source. */
function inputsOf(el: Element): Record<string, string> {
  const out: Record<string, string> = {};
  for (const input of ownZeebeEls(el, "input")) {
    const target = input.getAttribute("target");
    if (target) out[target] = input.getAttribute("source") ?? "";
  }
  return out;
}

/**
 * Every AI Agent ad-hoc sub-process directly inside `process` (not nested
 * inside another process — callers pass one `<bpmn:process>` at a time).
 */
function agentHostsOf(process: Element): Element[] {
  return Array.from(process.getElementsByTagNameNS(BPMN_NS, "adHocSubProcess")).filter(
    (el) => (jobTypeOf(el) ?? "").startsWith(AGENT_JOB_TYPE_PREFIX),
  );
}

function agentSpecOf(adHoc: Element, tools: ToolSpec[]): AgentSpec {
  const inputs = inputsOf(adHoc);
  const maxCalls = Number(
    (inputs["data.limits.maxModelCalls"] ?? "").replace(/^=/, ""),
  );
  return {
    elementId: adHoc.getAttribute("id") ?? "agent",
    label: adHoc.getAttribute("name") ?? "Agent",
    jobType: jobTypeOf(adHoc)!,
    systemPrompt: feelLiteralText(inputs["data.systemPrompt.prompt"]),
    userPrompt: feelLiteralText(inputs["data.userPrompt.prompt"]),
    maxModelCalls: Number.isFinite(maxCalls) && maxCalls > 0 ? maxCalls : 10,
    tools,
  };
}

/** Parse one `<bpmn:process>` in isolation — everything scoped to its subtree. */
function parseProcess(process: Element, diagnostics: Diagnostic[]): ProcessSpec {
  const processId = process.getAttribute("id") ?? "";
  const processLabel = process.getAttribute("name") ?? processId;
  const agentHosts = agentHostsOf(process);
  if (agentHosts.length > 1) {
    diagnostics.push({
      severity: "warning",
      elementId: agentHosts.map((h) => h.getAttribute("id")).join(", "),
      message:
        `Process "${processLabel}" hosts ${agentHosts.length} AI Agent sub-processes ` +
        `(${agentHosts.map((h) => h.getAttribute("id")).join(", ")}). Each gets its ` +
        `own independent agent state (turn counter, called tools) — they don't share a run.`,
    });
  }

  const tasks: TaskSpec[] = [];
  const toolsByHost = new Map<Element, ToolSpec[]>(agentHosts.map((h) => [h, []]));

  // Every activity in the process, tools included. Agent host containers
  // themselves are handled separately — they take an AgentHandler, not a
  // JobHandler.
  for (const el of Array.from(process.getElementsByTagName("*"))) {
    if (el.namespaceURI !== BPMN_NS) continue;
    if (agentHosts.includes(el)) continue;
    const jobType = jobTypeOf(el);
    const id = el.getAttribute("id");
    if (!jobType || !id) continue;
    const host = agentHosts.find((h) => h.contains(el));
    const spec: TaskSpec = {
      elementId: id,
      label: el.getAttribute("name") ?? id,
      jobType,
      documentation: documentationOf(el),
      isTool: host != null,
    };
    tasks.push(spec);
    if (host) {
      toolsByHost.get(host)!.push({
        elementId: id,
        label: spec.label,
        jobType,
        documentation: spec.documentation,
        args: parseFromAiArgs(el),
      });
    }
  }

  const agents = agentHosts.map((host) => agentSpecOf(host, toolsByHost.get(host)!));

  const userTasks: UserTaskSpec[] = Array.from(
    process.getElementsByTagNameNS(BPMN_NS, "userTask"),
  ).map((el) => ({
    elementId: el.getAttribute("id") ?? "",
    label: el.getAttribute("name") ?? el.getAttribute("id") ?? "",
    formId: zeebeEls(el, "formDefinition")[0]?.getAttribute("formId") ?? undefined,
  }));

  const startEvent = process.getElementsByTagNameNS(BPMN_NS, "startEvent")[0];
  const startFormId = startEvent
    ? (zeebeEls(startEvent, "formDefinition")[0]?.getAttribute("formId") ??
      undefined)
    : undefined;

  return { processId, processName: processLabel, tasks, agents, userTasks, startFormId };
}

export function parseModel(xml: string, opts: ParseModelOptions = {}): ModelInfo {
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  const parseError = doc.getElementsByTagName("parsererror")[0];
  if (parseError) throw new Error(`Invalid BPMN XML: ${parseError.textContent}`);

  const processEls = Array.from(doc.getElementsByTagNameNS(BPMN_NS, "process"));
  if (processEls.length === 0) throw new Error("No <bpmn:process> in the diagram.");

  const diagnostics: Diagnostic[] = [];
  const processes = processEls.map((el) => parseProcess(el, diagnostics));

  let primary = opts.processId
    ? processes.find((p) => p.processId === opts.processId)
    : undefined;
  if (opts.processId && !primary) {
    diagnostics.push({
      severity: "warning",
      message: `Requested process "${opts.processId}" not found — falling back to "${processes[0].processId}".`,
    });
  }
  primary ??= processes[0];

  if (processes.length > 1) {
    diagnostics.push({
      severity: "warning",
      message:
        `Diagram has ${processes.length} <bpmn:process> elements ` +
        `(${processes.map((p) => p.processId).join(", ")}); using "${primary.processId}" ` +
        `as the active process. Pass a processId to parseModel to target another.`,
    });
  }

  return {
    processes,
    diagnostics,
    processId: primary.processId,
    processName: primary.processName,
    tasks: primary.tasks,
    agent: primary.agents[0] ?? null,
    agents: processes.flatMap((p) => p.agents),
    userTasks: primary.userTasks,
    startFormId: primary.startFormId,
  };
}
