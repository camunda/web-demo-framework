import type { AgentHandler, AgentResult } from "@nanobpm/bojtos-react";
import type { AgentSpec, ToolSpec } from "../model";
import type { ChatFn, ChatMessage } from "../brains/types";
import type { Trace } from "../types";
import { collectToolCalls, extractJson, saysDone, shorten } from "./parse";

/**
 * A real LLM driving any agentic ad-hoc sub-process.
 *
 * Nothing here is example-specific: the tool manifest, each tool's purpose, the
 * arguments it needs, the system/user prompts and the turn budget all come from
 * the {@link AgentSpec} the model was parsed into. Point it at a different
 * diagram and it drives that one.
 *
 * Two deliberate properties, carried over from the Camunda demo:
 *
 * - **The model recommends; the process governs.** This handler only activates
 *   tools and passes arguments. Every real decision is made by the model's own
 *   handler code and the gateways after the agent — so a model that insists a
 *   flagged shipment is fine cannot clear it.
 * - **Tool names are matched exactly.** No fuzzy correction, no falling back to
 *   "run everything". An invented name activates nothing and is logged as a
 *   hallucination, which is the interesting part of watching a small model work.
 */

/**
 * One tool, as the model sees it.
 *
 * The name is presented bare on its own line. An earlier version labelled it
 * `- id: VerifyGeneticMarker`, and llama3.2:3b duly replied with
 * `{"tool": "id: VerifyGeneticMarker"}` — the label became part of the name.
 * Since tool names are matched exactly, anything decorating the name here is a
 * bug in the prompt rather than something to correct on the way back.
 */
function toolBlock(tool: ToolSpec): string {
  const args = tool.args.length
    ? tool.args
        .map((a) => `      ${a.name} (${a.type}) — ${a.description}`)
        .join("\n")
    : "      (none)";
  const doc = tool.documentation || tool.label;
  return `${tool.elementId}\n    purpose: ${doc}\n    arguments:\n${args}`;
}

function systemMessage(spec: AgentSpec): string {
  const authored =
    spec.systemPrompt ||
    "You are an agent driving a business process. Use the tools available to you.";
  // Show the format with a real tool name from this diagram — a small model
  // copies the example far more reliably than it follows a description of it.
  const example = spec.tools[0];
  const exampleArgs = example?.args.length
    ? `{${example.args.map((a) => `"${a.name}": "…"`).join(", ")}}`
    : "{}";
  return `${authored}

You drive the process by calling exactly one tool at a time. The tool names you
may use, one per block:

${spec.tools.map(toolBlock).join("\n\n")}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${example?.elementId ?? "ToolName"}", "arguments": ${exampleArgs}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`;
}

function userMessage(
  spec: AgentSpec,
  variables: Record<string, unknown>,
  history: string[],
  remaining: ToolSpec[],
): string {
  const authored = spec.userPrompt || "Carry out your task.";

  // The authored prompt is a FEEL expression whose interpolated values we don't
  // evaluate, so "Shipment notes:" arrives with nothing after it. Surfacing the
  // case's text variables directly under it puts the case data where the prompt
  // says it will be, instead of leaving it buried in the JSON dump below.
  const caseText = Object.entries(variables)
    .filter(
      ([, v]) => typeof v === "string" && v.trim().length > 0,
    )
    .map(([k, v]) => `  ${k}: ${String(v)}`);

  const parts = [
    authored,
    caseText.length ? `Case data:\n${caseText.join("\n")}` : "",
    `All current process variables:\n${JSON.stringify(variables, null, 2)}`,
  ].filter(Boolean);
  parts.push(
    history.length
      ? `Tools you have already run — do NOT call these again:\n${history.join("\n")}`
      : "You have not run any tools yet.",
  );
  // Naming what's left keeps a small model from looping on the tool it just
  // ran. This is prompt engineering, not answer-fixing: repeats are refused by
  // policy either way, so the prompt may as well be honest about it.
  parts.push(
    remaining.length
      ? `Tools still available:\n${remaining.map((t) => `  ${t.elementId}`).join("\n")}`
      : "No tools remain. Reply {\"done\": true}.",
  );
  parts.push("Which tool should run next? Reply with JSON only.");
  return parts.join("\n\n");
}

/** Run one completion, growing a single trace line token by token. */
async function streamChat(
  chat: ChatFn,
  trace: Trace,
  key: string,
  messages: ChatMessage[],
  maxNewTokens: number,
): Promise<string> {
  let acc = "";
  trace({ kind: "llm", text: "LLM thinking…", key, pending: true });
  const raw = await chat(messages, maxNewTokens, (delta) => {
    acc += delta;
    trace({ kind: "llm", text: `${shorten(acc)} ▍`, key, pending: true });
  });
  trace({
    kind: "llm",
    text: shorten(raw || acc) || "(empty reply)",
    key,
    pending: false,
  });
  return raw;
}

export interface LiveAgentOptions {
  /** Tokens per completion. Small models need room for the JSON. */
  maxNewTokens?: number;
  /**
   * Let the model call the same tool more than once. Off by default: most
   * example prompts say "each tool at most once", and a small model that loops
   * on one tool otherwise burns the whole turn budget.
   */
  allowRepeats?: boolean;
}

export function makeLiveAgent(
  spec: AgentSpec,
  chat: ChatFn,
  trace: Trace,
  opts: LiveAgentOptions = {},
): AgentHandler {
  const { maxNewTokens = 384, allowRepeats = false } = opts;

  // Per-run state. The engine re-emits the agent job after each activated tool
  // drains, so this closure is the agent's memory across turns.
  let turn = 0;
  const called = new Set<string>();
  const history: string[] = [];

  return async (job): Promise<AgentResult> => {
    turn += 1;

    if (turn > spec.maxModelCalls) {
      trace({
        kind: "error",
        text: `Turn budget spent (maxModelCalls=${spec.maxModelCalls}) — completing the agent.`,
      });
      return { completionConditionFulfilled: true };
    }

    const variables = job.variables;
    // What the last tool produced, so the model can reason about it.
    const lastResult = variables.toolCallResult;
    if (lastResult !== undefined && history.length)
      history[history.length - 1] =
        `${history[history.length - 1]} → ${shorten(JSON.stringify(lastResult), 160)}`;

    const remaining = allowRepeats
      ? spec.tools
      : spec.tools.filter((t) => !called.has(t.elementId));

    const messages: ChatMessage[] = [
      { role: "system", content: systemMessage(spec) },
      { role: "user", content: userMessage(spec, variables, history, remaining) },
    ];

    let raw: string;
    try {
      raw = await streamChat(
        chat,
        trace,
        `llm-turn-${turn}`,
        messages,
        maxNewTokens,
      );
    } catch (e) {
      trace({
        kind: "error",
        text: `LLM call failed: ${e instanceof Error ? e.message : String(e)} — completing the agent.`,
      });
      return { completionConditionFulfilled: true };
    }

    const json = extractJson(raw);
    if (saysDone(json) && collectToolCalls(json).length === 0) {
      trace({ kind: "agent", text: "🤖 model says it is done" });
      return { completionConditionFulfilled: true };
    }

    const stated = collectToolCalls(json);
    if (stated.length === 0) {
      trace({
        kind: "error",
        text: "Model named no tool (and didn't say it was done) — completing the agent.",
      });
      return { completionConditionFulfilled: true };
    }

    // Exact-match only. A name that isn't a real element activates nothing.
    const resolved: { tool: ToolSpec; args: Record<string, unknown> }[] = [];
    const unknown: string[] = [];
    const repeats: string[] = [];
    for (const call of stated) {
      const tool = spec.tools.find((t) => t.elementId === call.name);
      if (!tool) {
        unknown.push(call.name);
        continue;
      }
      if (!allowRepeats && called.has(tool.elementId)) {
        repeats.push(tool.elementId);
        continue;
      }
      resolved.push({ tool, args: call.args });
    }

    if (unknown.length)
      trace({
        kind: "error",
        text: `🤖 model named a tool that doesn't exist: ${unknown.join(", ")} — nothing activated`,
      });
    if (repeats.length)
      trace({
        kind: "error",
        text: `🤖 model asked to re-run ${repeats.join(", ")} — skipped (already run)`,
      });

    if (resolved.length === 0) {
      trace({ kind: "agent", text: "🤖 nothing left to activate — completing" });
      return { completionConditionFulfilled: true };
    }

    // Tool arguments ride on the agent result, NOT on the activation: variables
    // seeded into an activation's local scope are not visible on the activated
    // tool's job, but instance variables are.
    const variablesOut: Record<string, unknown> = {};
    for (const { tool, args } of resolved) {
      // An empty string counts as not supplied: a small model that answers
      // `{"decision": ""}` has skipped the argument, and silently passing "" on
      // hides that from whoever is watching the run.
      const supplied = (name: string) => {
        const v = args[name];
        return v !== undefined && v !== null && v !== "";
      };
      for (const arg of tool.args) {
        if (supplied(arg.name)) variablesOut[arg.name] = args[arg.name];
      }
      const missing = tool.args
        .filter((a) => !supplied(a.name))
        .map((a) => a.name);
      if (missing.length)
        trace({
          kind: "error",
          text: `🤖 ${tool.elementId}: model supplied no value for ${missing.join(", ")}`,
        });
      called.add(tool.elementId);
      history.push(
        `- ${tool.elementId}(${JSON.stringify(
          Object.fromEntries(
            tool.args
              .map((a) => [a.name, args[a.name]])
              .filter(([, v]) => v !== undefined),
          ),
        )})`,
      );
    }

    trace({
      kind: "agent",
      text: `🤖 calling ${resolved.map((r) => r.tool.elementId).join(", ")}`,
    });

    return {
      activateElements: resolved.map((r) => ({ elementId: r.tool.elementId })),
      variables: variablesOut,
    };
  };
}
