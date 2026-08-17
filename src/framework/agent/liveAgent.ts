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

function systemMessage(
  spec: AgentSpec,
  allowMultiToolTurns: boolean,
  /**
   * The tools that can still be called. Only these are listed.
   *
   * Listing the full set every turn and relying on "do not call these again"
   * elsewhere in the prompt does not work on a small model: the manifest reads
   * as the menu, and Qwen2.5 1.5B duly alternated between two already-run tools
   * until its budget was gone. An already-run tool that isn't in the prompt
   * can't be picked from it.
   */
  callable: ToolSpec[],
): string {
  const authored =
    spec.systemPrompt ||
    "You are an agent driving a business process. Use the tools available to you.";
  // Show the format with a real tool name from this diagram — a small model
  // copies the example far more reliably than it follows a description of it.
  const example = callable[0] ?? spec.tools[0];

  if (callable.length === 0) {
    return `${authored}

Every tool has already run. Reply with JSON only — no prose, no explanation, no
markdown fence — exactly:

{"done": true}`;
  }
  const exampleArgs = example?.args.length
    ? `{${example.args.map((a) => `"${a.name}": "…"`).join(", ")}}`
    : "{}";

  if (!allowMultiToolTurns) {
    return `${authored}

You drive the process by calling exactly one tool at a time. The tool names you
may use, one per block:

${callable.map(toolBlock).join("\n\n")}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${example?.elementId ?? "ToolName"}", "arguments": ${exampleArgs}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`;
  }

  // Multi-tool turns: costs the reader one round trip per independent tool on
  // a slow local model, so a turn may name more than one — but only when the
  // tools are genuinely independent (neither needs the other's result first).
  // Kept behind an explicit flag rather than the default: it changes the
  // reply shape every existing example prompt was written and tuned against.
  return `${authored}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${callable.map(toolBlock).join("\n\n")}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tools": [{"tool": "${example?.elementId ?? "ToolName"}", "arguments": ${exampleArgs}}], "done": false}

List one entry per tool you're calling this turn (often just one). Each
"tool" value must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tools.`;
}

function userMessage(
  spec: AgentSpec,
  variables: Record<string, unknown>,
  history: string[],
  remaining: ToolSpec[],
  /** Set after a premature "done" — see `requiredTools` in {@link LiveAgentOptions}. */
  outstanding: string[] = [],
  /** Why the previous reply in this same turn sequence was rejected, if it was. */
  rejected: string[] = [],
  /**
   * Mirrors `allowRepeats`. With repeats allowed, `remaining` is every tool, so
   * telling the model never to call an already-run one contradicts both the
   * manifest it can see and the policy that would accept the call.
   */
  allowRepeats = false,
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
      ? `${
          allowRepeats
            ? "Tools you have already run (you may call one again if it is genuinely needed):"
            : "Tools you have already run — do NOT call these again:"
        }\n${history.join("\n")}`
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
  if (rejected.length) {
    // Retrying with a byte-identical prompt at temperature 0 gets a
    // byte-identical reply — the model loops on the same rejected call until
    // the budget runs out. Observed with Qwen2.5 1.5B re-requesting a tool that
    // had already run, over and over. Saying what was wrong is what makes the
    // next call a different question.
    parts.push(
      `Your last reply was rejected: ${rejected.join("; ")}. Do not repeat it.`,
    );
  }
  if (outstanding.length) {
    // Stated plainly, because the model has already claimed to be finished
    // once: repeating the general instruction doesn't work, naming the
    // outstanding call does.
    parts.push(
      `You reported that you are done, but ${outstanding.join(" and ")} ` +
        `${outstanding.length === 1 ? "has" : "have"} not run. ` +
        `Passing those values as another tool's arguments does not count. ` +
        `Call ${outstanding.length === 1 ? "it" : "them"} now.`,
    );
  }
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
  turn: number,
): Promise<string> {
  let acc = "";
  trace({ kind: "llm", text: "LLM thinking…", key, pending: true, turn });
  const raw = await chat(messages, maxNewTokens, (delta) => {
    acc += delta;
    trace({ kind: "llm", text: `${shorten(acc)} ▍`, key, pending: true, turn });
  });
  trace({
    kind: "llm",
    text: shorten(raw || acc) || "(empty reply)",
    key,
    pending: false,
    turn,
  });
  return raw;
}

/**
 * Argument namespace and validation policy.
 *
 * `fromAi(toolCall.x, "…", "type")` in the model resolves `x` from **instance**
 * scope, not a per-activation local one (see the comment above where this is
 * called), so every tool activated in a turn writes its arguments into the
 * exact same flat namespace. That single shared namespace is a deliberate
 * engine constraint this framework has to work within, not something a
 * per-tool prefix could paper over — a prefixed variable name (e.g.
 * `ToolA.code`) wouldn't be the name the model's `fromAi(toolCall.code, …)`
 * call is actually looking up. The policy below makes the constraint's
 * consequences explicit and loud instead of a silent overwrite or a silently
 * accepted bad value:
 *
 * - **Required.** Every declared argument is required — the model has no
 *   syntax for marking one optional. `undefined`, `null`, or `""` counts as
 *   not supplied (a small model answering `{"decision": ""}` has skipped the
 *   argument, and passing `""` through would hide that). A missing argument
 *   is traced and excluded from the merged variables; the call still proceeds
 *   with whatever was supplied, so one skipped argument doesn't abort a turn
 *   that partially worked.
 * - **Declared-type checking and coercion.** A supplied value is checked
 *   against the tool's declared type (`string` | `number` | `boolean`,
 *   defaulting to `string`): a numeric- or boolean-*looking* string coerces
 *   (`"4"` → `4`, `"true"` → `true`), matching how a small model actually
 *   replies (everything as a JSON string). Anything that doesn't coerce
 *   cleanly — e.g. `{"intA": "four"}` — is a **type mismatch**: traced by
 *   name with the declared type and the value received, and excluded from the
 *   merged variables (treated the same as missing), never passed through
 *   unchecked to the handler.
 * - **Name-collision policy.** Two *different* tools resolved in the same
 *   turn that both declare an argument with the same name is a genuine
 *   collision, not a coincidence — the second tool's value would otherwise
 *   silently overwrite the first's in the shared instance root. First
 *   activation order wins; every later tool's same-named argument is dropped
 *   and the collision is traced, naming both tools and which one won.
 */
export function coerceToolArg(
  type: string,
  raw: unknown,
): { ok: true; value: unknown } | { ok: false } {
  switch (type) {
    case "number": {
      if (typeof raw === "number" && Number.isFinite(raw)) return { ok: true, value: raw };
      if (typeof raw === "string" && raw.trim() !== "" && Number.isFinite(Number(raw)))
        return { ok: true, value: Number(raw) };
      return { ok: false };
    }
    case "boolean": {
      if (typeof raw === "boolean") return { ok: true, value: raw };
      if (typeof raw === "string" && /^(true|false)$/i.test(raw.trim()))
        return { ok: true, value: raw.trim().toLowerCase() === "true" };
      return { ok: false };
    }
    default: {
      // "string" (and any type we don't otherwise recognise): accept any
      // scalar, coerced to a string. An object/array is still a mismatch —
      // that's not what a `fromAi(toolCall.x, …, "string")` argument expects.
      if (typeof raw === "object") return { ok: false };
      return { ok: true, value: String(raw) };
    }
  }
}

function resolveArguments(
  resolved: { tool: ToolSpec; args: Record<string, unknown> }[],
  trace: Trace,
  turn: number,
): {
  variablesOut: Record<string, unknown>;
  forHistory: Map<string, Record<string, unknown>>;
} {
  const variablesOut: Record<string, unknown> = {};
  const claimedBy = new Map<string, string>(); // argument name -> owning tool elementId
  const forHistory = new Map<string, Record<string, unknown>>();

  for (const { tool, args } of resolved) {
    const historyArgs: Record<string, unknown> = {};
    for (const arg of tool.args) {
      const raw = args[arg.name];
      const supplied = raw !== undefined && raw !== null && raw !== "";
      if (!supplied) {
        trace({
          kind: "error",
          text: `🤖 ${tool.elementId}: model supplied no value for "${arg.name}"`,
          turn,
          elementId: tool.elementId,
        });
        continue;
      }

      const owner = claimedBy.get(arg.name);
      if (owner !== undefined && owner !== tool.elementId) {
        trace({
          kind: "error",
          text:
            `🤖 argument name collision on "${arg.name}": both ${owner} and ${tool.elementId} ` +
            `declare it — ${owner} already claimed it this turn, ${tool.elementId}'s value is dropped`,
          turn,
          elementId: tool.elementId,
        });
        continue;
      }

      const coerced = coerceToolArg(arg.type, raw);
      if (!coerced.ok) {
        trace({
          kind: "error",
          text:
            `🤖 ${tool.elementId}: "${arg.name}" is declared as ${arg.type} but the model supplied ` +
            `${JSON.stringify(raw)} — rejected, not passed through`,
          turn,
          elementId: tool.elementId,
        });
        continue;
      }

      variablesOut[arg.name] = coerced.value;
      historyArgs[arg.name] = coerced.value;
      claimedBy.set(arg.name, tool.elementId);
    }
    forHistory.set(tool.elementId, historyArgs);
  }


  return { variablesOut, forHistory };
}

/**
 * A shared counter, written by the currently-running agent turn and read by
 * `compile.ts`'s job wrapper, so a tool's "started"/"result" trace entries
 * land in the same turn group as the "agent" entry that activated it — see
 * `TraceEntry.turn` and `TraceTimeline.tsx`. Plain mutable object rather than
 * a return value: the agent and the job-dispatch loop run on two different
 * call paths (`stepWorkers`) that don't otherwise share state.
 *
 * A shared `TurnRef` across multiple agent hosts means their turn numbers
 * interleave rather than each host counting independently — an acceptable
 * simplification for what's a display grouping, not a run guarantee.
 */
export interface TurnRef {
  /**
   * `undefined` until a live agent turn actually runs — so a scripted-brain
   * or non-agentic run's tool entries stay ungrouped (their `turn` field is
   * left off entirely) instead of all landing under a spurious "Turn 0".
   */
  current: number | undefined;
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
  /**
   * Ask the model to name more than one independent tool per turn, when it
   * can — the engine already supports activating several elements from one
   * agent result (`activateElements: [...]`). Off by default: every existing
   * example prompt was written and tuned against the one-tool-per-turn shape,
   * so switching the reply shape out from under it is an opt-in change, not
   * a silent default flip.
   */
  allowMultiToolTurns?: boolean;
  /** See {@link TurnRef}. Optional — omitting it just leaves trace entries ungrouped. */
  turnRef?: TurnRef;
  /**
   * Element ids that must have run before a "done" is taken at face value.
   *
   * Small models finish early. Observed repeatedly with Llama 3.2 1B on the
   * compliance example: it verifies the marker, checks the country, computes
   * the score, passes `decision: "cleared"` as an argument to the *scoring*
   * tool — which has no such argument, so it is dropped — and then reports
   * done, having never called the tool that records a decision. The process
   * then correctly routes to a human, and the reader sees a review task
   * instead of the run they came for.
   *
   * When a required tool hasn't run, the first "done" is answered with one
   * turn naming it, rather than accepted. Only the first: a model that insists
   * is allowed to be wrong, and the run shows that it was — this nudges a
   * forgetful model, it doesn't argue with a determined one.
   *
   * Empty by default, so an example that doesn't declare requirements behaves
   * exactly as before.
   */
  requiredTools?: string[];
  /** How many premature "done" replies to answer with a reminder. Default 1. */
  maxEarlyDoneNudges?: number;
}

export function makeLiveAgent(
  spec: AgentSpec,
  chat: ChatFn,
  trace: Trace,
  opts: LiveAgentOptions = {},
): AgentHandler {
  const {
    maxNewTokens = 384,
    allowRepeats = false,
    allowMultiToolTurns = false,
    turnRef,
    requiredTools = [],
    maxEarlyDoneNudges = 1,
  } = opts;

  // Per-run state. The engine re-emits the agent job after each activated tool
  // drains, so this closure is the agent's memory across turns.
  let turn = 0;
  const called = new Set<string>();
  const history: string[] = [];
  let earlyDoneNudges = 0;
  /** Named in the next prompt after a premature "done"; cleared once used. */
  let outstanding: string[] = [];
  /** Why the previous reply was rejected, fed back so the retry differs; cleared once used. */
  let rejected: string[] = [];

  return async (job): Promise<AgentResult> => {
    const variables = job.variables;
    // What the last tool produced, so the model can reason about it.
    const lastResult = variables.toolCallResult;
    if (lastResult !== undefined && history.length)
      history[history.length - 1] =
        `${history[history.length - 1]} → ${shorten(JSON.stringify(lastResult), 160)}`;

    // Retries happen *inside* this invocation, not by returning and waiting to
    // be asked again.
    //
    // `AgentResult` can activate elements, fulfil the completion condition, or
    // merge variables — there is no "ask me again". Returning `{}` leaves the
    // ad-hoc sub-process with nothing running, so the engine completes it, and
    // the run is over. Every "trying again next turn" below used to do exactly
    // that: a hallucinated name, an empty reply, or a repeat of an
    // already-run tool silently ended the agent with most of its budget
    // unspent — observed with Qwen2.5 1.5B, which re-requested
    // ComputeComplianceScore on turn 4 of 10 and never got a turn 5.
    //
    // Unit tests didn't catch it because they call this handler in a loop
    // themselves, which is precisely the behaviour the engine does not provide.
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const outcome = await runTurn();
      if (outcome) return outcome;
    }

    /** One model call. Returns a result to hand back, or `null` to try again. */
    async function runTurn(): Promise<AgentResult | null> {
    turn += 1;
    if (turnRef) turnRef.current = turn;

    if (turn > spec.maxModelCalls) {
      trace({
        kind: "error",
        text: `Turn budget spent (maxModelCalls=${spec.maxModelCalls}) — completing the agent.`,
        turn,
      });
      return { completionConditionFulfilled: true };
    }

    const remaining = allowRepeats
      ? spec.tools
      : spec.tools.filter((t) => !called.has(t.elementId));

    const messages: ChatMessage[] = [
      {
        role: "system",
        content: systemMessage(spec, allowMultiToolTurns, remaining),
      },
      {
        role: "user",
        content: userMessage(
          spec,
          variables,
          history,
          remaining,
          outstanding,
          rejected,
          allowRepeats,
        ),
      },
    ];
    outstanding = [];
    rejected = [];

    let raw: string;
    try {
      raw = await streamChat(
        chat,
        trace,
        `llm-turn-${turn}`,
        messages,
        maxNewTokens,
        turn,
      );
    } catch (e) {
      trace({
        kind: "error",
        text: `LLM call failed: ${e instanceof Error ? e.message : String(e)} — completing the agent.`,
        turn,
      });
      return { completionConditionFulfilled: true };
    }

    const json = extractJson(raw);
    if (saysDone(json) && collectToolCalls(json).length === 0) {
      const missing = requiredTools.filter((id) => !called.has(id));
      if (missing.length && earlyDoneNudges < maxEarlyDoneNudges) {
        earlyDoneNudges += 1;
        outstanding = missing;
        trace({
          kind: "agent",
          text: `🤖 model says it is done, but ${missing.join(", ")} hasn't run — asking once more`,
          turn,
        });
        return null;
      }
      trace({ kind: "agent", text: "🤖 model says it is done", turn });
      return { completionConditionFulfilled: true };
    }

    const stated = collectToolCalls(json);
    if (stated.length === 0) {
      // Not "done", but named nothing usable either — a confused or empty
      // reply. Don't end the whole run over one bad turn: ask again, same as
      // an all-hallucinated/all-repeat turn below. `spec.maxModelCalls`
      // (checked at the top of each turn) is the actual backstop against a
      // model that never recovers.
      trace({
        kind: "error",
        text: "🤖 model named no tool (and didn't say it was done) — asking again",
        turn,
      });
      rejected = [
        'it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}',
      ];
      return null;
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
        turn,
      });
    if (repeats.length)
      trace({
        kind: "error",
        text: `🤖 model asked to re-run ${repeats.join(", ")} — skipped (already run)`,
        turn,
      });

    if (resolved.length === 0) {
      // Every stated call was a hallucination and/or a repeat — nothing to
      // activate, but that's a bad reply, not a considered decision to stop.
      // Ending the agent here would mean one hallucinated name terminates a
      // run that might otherwise finish correctly, so ask again (still
      // bounded by `spec.maxModelCalls`).
      trace({
        kind: "agent",
        text: "🤖 nothing activated — asking again",
        turn,
      });
      rejected = [
        ...(unknown.length
          ? [`${unknown.join(", ")} ${unknown.length === 1 ? "is" : "are"} not a real tool`]
          : []),
        ...(repeats.length
          ? [
              `${repeats.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`,
            ]
          : []),
      ];
      return null;
    }

    // Tool arguments ride on the agent result, NOT on the activation: variables
    // seeded into an activation's local scope are not visible on the activated
    // tool's job, but instance variables are. That single shared instance-root
    // namespace is the reason the merge below has to actively guard against
    // collisions rather than just write — see `resolveArguments`' doc comment.
    const { variablesOut, forHistory } = resolveArguments(resolved, trace, turn);
    for (const { tool } of resolved) {
      called.add(tool.elementId);
      history.push(`- ${tool.elementId}(${JSON.stringify(forHistory.get(tool.elementId))})`);
    }

    // One trace entry per activated tool — not a single combined line — so
    // the trace timeline can show exactly which tool was chosen with which
    // arguments, rather than a joined name list.
    for (const { tool } of resolved) {
      trace({
        kind: "agent",
        text: `🤖 calling ${tool.elementId}`,
        turn,
        elementId: tool.elementId,
        args: forHistory.get(tool.elementId) ?? {},
      });
    }

    return {
      activateElements: resolved.map((r) => ({ elementId: r.tool.elementId })),
      variables: variablesOut,
    };
    }
  };
}

/**
 * Route a shared job type across multiple agent hosts.
 *
 * Every AI Agent sub-process shares one job type
 * (`io.camunda.agenticai:aiagent-job-worker:1`), so a diagram with more than
 * one host still gets a single `AgentHandler` registration per job type. This
 * builds one `makeLiveAgent` closure per host (keyed by `elementId`) up front,
 * lazily-dispatching each job to its own host's closure underneath — the same
 * trick `compile.ts` already uses for tool handlers, so each host keeps its
 * own turn counter and called-tools set instead of sharing one.
 */
export function makeLiveAgentRouter(
  specs: AgentSpec[],
  chat: ChatFn,
  trace: Trace,
  opts: LiveAgentOptions = {},
): AgentHandler {
  const byElement = new Map(
    specs.map((spec) => [spec.elementId, makeLiveAgent(spec, chat, trace, opts)]),
  );
  return async (job) => {
    const handler = byElement.get(job.elementId);
    if (!handler) {
      // Fail the job rather than silently completing it: a model/dispatch
      // mismatch here means the diagram and the router disagree about which
      // hosts exist, and completing anyway would hide that behind a
      // seemingly-successful agent turn. Throwing surfaces an incident on the
      // diagram, consistent with how compile.ts treats a missing tool handler.
      throw new Error(`No agent host registered for "${job.elementId}"`);
    }
    return handler(job);
  };
}
