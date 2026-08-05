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

export interface ModelInfo {
  processId: string;
  processName: string;
  /** Every job-bearing element, tools included. */
  tasks: TaskSpec[];
  /** The agent host, or null for a plain (non-agentic) process. */
  agent: AgentSpec | null;
  userTasks: UserTaskSpec[];
  /** The `formId` bound to the start event, if any. */
  startFormId?: string;
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

export function parseModel(xml: string): ModelInfo {
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  const parseError = doc.getElementsByTagName("parsererror")[0];
  if (parseError) throw new Error(`Invalid BPMN XML: ${parseError.textContent}`);

  const process = doc.getElementsByTagNameNS(BPMN_NS, "process")[0];
  if (!process) throw new Error("No <bpmn:process> in the diagram.");

  const adHoc = doc.getElementsByTagNameNS(BPMN_NS, "adHocSubProcess")[0] ?? null;
  const isAgentHost =
    adHoc != null && (jobTypeOf(adHoc) ?? "").startsWith(AGENT_JOB_TYPE_PREFIX);

  const tasks: TaskSpec[] = [];
  const tools: ToolSpec[] = [];

  // Every activity in the process, tools included. The agent container itself is
  // handled separately — it takes an AgentHandler, not a JobHandler.
  for (const el of Array.from(process.getElementsByTagName("*"))) {
    if (el.namespaceURI !== BPMN_NS) continue;
    if (el === adHoc) continue;
    const jobType = jobTypeOf(el);
    const id = el.getAttribute("id");
    if (!jobType || !id) continue;
    const isTool = isAgentHost && adHoc!.contains(el);
    const spec: TaskSpec = {
      elementId: id,
      label: el.getAttribute("name") ?? id,
      jobType,
      documentation: documentationOf(el),
      isTool,
    };
    tasks.push(spec);
    if (isTool) {
      tools.push({
        elementId: id,
        label: spec.label,
        jobType,
        documentation: spec.documentation,
        args: parseFromAiArgs(el),
      });
    }
  }

  let agent: AgentSpec | null = null;
  if (isAgentHost && adHoc) {
    const inputs = inputsOf(adHoc);
    const maxCalls = Number(
      (inputs["data.limits.maxModelCalls"] ?? "").replace(/^=/, ""),
    );
    agent = {
      elementId: adHoc.getAttribute("id") ?? "agent",
      label: adHoc.getAttribute("name") ?? "Agent",
      jobType: jobTypeOf(adHoc)!,
      systemPrompt: feelLiteralText(inputs["data.systemPrompt.prompt"]),
      userPrompt: feelLiteralText(inputs["data.userPrompt.prompt"]),
      maxModelCalls: Number.isFinite(maxCalls) && maxCalls > 0 ? maxCalls : 10,
      tools,
    };
  }

  const userTasks: UserTaskSpec[] = Array.from(
    process.getElementsByTagNameNS(BPMN_NS, "userTask"),
  ).map((el) => ({
    elementId: el.getAttribute("id") ?? "",
    label: el.getAttribute("name") ?? el.getAttribute("id") ?? "",
    formId: zeebeEls(el, "formDefinition")[0]?.getAttribute("formId") ?? undefined,
  }));

  const startEvent = doc.getElementsByTagNameNS(BPMN_NS, "startEvent")[0];
  const startFormId = startEvent
    ? (zeebeEls(startEvent, "formDefinition")[0]?.getAttribute("formId") ??
      undefined)
    : undefined;

  return {
    processId: process.getAttribute("id") ?? "",
    processName: process.getAttribute("name") ?? process.getAttribute("id") ?? "",
    tasks,
    agent,
    userTasks,
    startFormId,
  };
}
