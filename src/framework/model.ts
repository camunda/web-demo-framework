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
  /**
   * The job type the engine emits for it, or `""` for a {@link ToolSpec.compound}
   * tool — an embedded sub-process / call activity has no single job type of its
   * own, since its activation runs an inner flow rather than one job.
   */
  jobType: string;
  /** `<bpmn:documentation>` — what this tool is for, shown to the model. */
  documentation: string;
  args: ToolArg[];
  /**
   * True for a **compound tool**: an embedded `bpmn:subProcess` or a
   * `bpmn:callActivity` used as an ad-hoc tool. Zeebe treats these as valid
   * ad-hoc tool kinds alongside job-typed elements. Unlike a job tool, a
   * compound tool carries no `zeebe:taskDefinition`; the model still selects it
   * by id and supplies its `fromAi(...)` inputs, and the engine drives its inner
   * flow to completion — so no per-element job handler is registered for it.
   */
  compound?: boolean;
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
  /**
   * True for a **compound tool** (an embedded sub-process / call activity used
   * as an ad-hoc tool). It carries no job type of its own — its inner flow is
   * engine-driven — so it never needs a handler and is not dispatched by job
   * type, even though it is still surfaced as a tool. Its `jobType` is `""`.
   */
  compound?: boolean;
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
  return argsFromText(attributeValues(el));
}

/**
 * The `fromAi(...)` arguments declared by a **compound tool** (embedded
 * sub-process / call activity): read only from the tool activity's *own*
 * extension elements (its `zeebe:ioMapping`), never from the inner flow nodes
 * it contains. Those inner elements resolve their own inputs from the tool's
 * activation at run time — they are not arguments the model supplies — so
 * walking the whole subtree (as {@link parseFromAiArgs} does for a leaf job
 * tool) would wrongly advertise them as tool arguments.
 */
export function parseCompoundFromAiArgs(el: Element): ToolArg[] {
  const ext = Array.from(el.children).find(
    (c) => c.namespaceURI === BPMN_NS && c.localName === "extensionElements",
  );
  return ext ? argsFromText(attributeValues(ext)) : [];
}

/** Extract `fromAi(...)` declarations from already-unserialized attribute text. */
function argsFromText(xml: string): ToolArg[] {
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
 * Every AI Agent ad-hoc sub-process anywhere within `process`'s subtree
 * (`getElementsByTagNameNS` returns all descendants, not just direct
 * children — so this also matches one nested inside another sub-process).
 * Never crosses into another `<bpmn:process>` — callers pass one at a time.
 */
function agentHostsOf(process: Element): Element[] {
  return Array.from(process.getElementsByTagNameNS(BPMN_NS, "adHocSubProcess")).filter(
    (el) => (jobTypeOf(el) ?? "").startsWith(AGENT_JOB_TYPE_PREFIX),
  );
}

/**
 * BPMN activity kinds that can be used as a **compound tool** — an ad-hoc tool
 * whose activation runs an inner flow rather than emitting a single job. These
 * mirror the engine's ad-hoc activity kinds (`AdHocSubProcessTransformer`:
 * `SUB_PROCESS`, `AD_HOC_SUB_PROCESS`, `CALL_ACTIVITY`). An `adHocSubProcess`
 * only qualifies when it is not itself an AI Agent host.
 */
const COMPOUND_TOOL_LOCALS = new Set(["subProcess", "adHocSubProcess", "callActivity"]);

/** Sub-process families that own the flow nodes nested directly within them. */
const SUBPROCESS_CONTAINER_LOCALS = new Set(["adHocSubProcess", "subProcess", "transaction"]);

/**
 * The nearest enclosing sub-process-family activity of `el`, or null when `el`
 * sits at the process root. This is what makes a node a tool of exactly one
 * host: a node is a tool only when its immediate container *is* an agent host,
 * so a node nested inside a compound tool (whose container is that compound
 * sub-process, not the host) is an internal step of the tool, not a tool in its
 * own right. It also picks the innermost host when hosts nest.
 */
function enclosingContainer(el: Element): Element | null {
  let cur: Element | null = el.parentElement;
  while (cur) {
    if (cur.namespaceURI === BPMN_NS && SUBPROCESS_CONTAINER_LOCALS.has(cur.localName))
      return cur;
    cur = cur.parentElement;
  }
  return null;
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
        `own independent agent state (turn counter, called tools) — the run itself is ` +
        `shared across hosts, but each host's agent state within it is not.`,
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
    const id = el.getAttribute("id");
    if (!id) continue;

    // The host this element is a *tool* of — the agent host that immediately
    // contains it. A node whose immediate container is a compound tool (an
    // embedded sub-process / call activity used as a tool) is an internal step
    // of that tool, not a tool in its own right, so it is never advertised.
    // When hosts nest, the immediate container is the innermost host.
    const container = enclosingContainer(el);
    const host = container && agentHosts.includes(container) ? container : null;

    // A compound tool: an embedded sub-process / call activity nested directly
    // in an agent host, advertised independent of any zeebe:taskDefinition. It
    // has no single job type — its inner flow is engine-driven — so it is never
    // dispatched to a handler.
    if (host && COMPOUND_TOOL_LOCALS.has(el.localName)) {
      const label = el.getAttribute("name") ?? id;
      const documentation = documentationOf(el);
      tasks.push({ elementId: id, label, jobType: "", documentation, isTool: true, compound: true });
      toolsByHost.get(host)!.push({
        elementId: id,
        label,
        jobType: "",
        documentation,
        args: parseCompoundFromAiArgs(el),
        compound: true,
      });
      continue;
    }

    const jobType = jobTypeOf(el);
    if (!jobType) continue;
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
