import { describe, expect, it } from "vitest";
import { coerceToolArg, makeLiveAgent } from "./liveAgent";
import type { AgentSpec } from "../model";
import type { ChatFn } from "../brains/types";

describe("coerceToolArg", () => {
  it("accepts a real number for a number-typed argument", () => {
    expect(coerceToolArg("number", 4)).toEqual({ ok: true, value: 4 });
  });

  it("coerces a numeric-looking string for a number-typed argument", () => {
    expect(coerceToolArg("number", "4")).toEqual({ ok: true, value: 4 });
  });

  it("rejects a non-numeric string for a number-typed argument", () => {
    expect(coerceToolArg("number", "four")).toEqual({ ok: false });
  });

  it("coerces a boolean-looking string for a boolean-typed argument", () => {
    expect(coerceToolArg("boolean", "true")).toEqual({ ok: true, value: true });
    expect(coerceToolArg("boolean", "FALSE")).toEqual({ ok: true, value: false });
  });

  it("rejects a non-boolean string for a boolean-typed argument", () => {
    expect(coerceToolArg("boolean", "maybe")).toEqual({ ok: false });
  });

  it("accepts a scalar for a string-typed argument, coerced to a string", () => {
    expect(coerceToolArg("string", 4)).toEqual({ ok: true, value: "4" });
  });

  it("rejects an object for a string-typed argument", () => {
    expect(coerceToolArg("string", { a: 1 })).toEqual({ ok: false });
  });
});

function makeSpec(): AgentSpec {
  return {
    elementId: "Agent",
    label: "Agent",
    jobType: "io.camunda.agenticai:aiagent-job-worker:1",
    systemPrompt: "",
    userPrompt: "",
    maxModelCalls: 5,
    tools: [
      {
        elementId: "ToolA",
        label: "Tool A",
        jobType: "fixture:tool-a",
        documentation: "",
        args: [{ name: "code", description: "", type: "string" }],
      },
      {
        elementId: "ToolB",
        label: "Tool B",
        jobType: "fixture:tool-b",
        documentation: "",
        args: [{ name: "code", description: "", type: "string" }],
      },
    ],
  };
}

function fakeChat(replies: string[]): ChatFn {
  const queue = [...replies];
  return async (_messages, _max, onToken) => {
    const reply = queue.shift() ?? '{"done": true}';
    onToken?.(reply);
    return reply;
  };
}

describe("makeLiveAgent — argument collision policy", () => {
  it("keeps the first-activated tool's value and drops the later one, with a trace entry", async () => {
    const trace: { kind: string; text: string }[] = [];
    const chat = fakeChat([
      '{"tools": [{"tool": "ToolA", "arguments": {"code": "A1"}}, {"tool": "ToolB", "arguments": {"code": "B1"}}], "done": false}',
    ]);
    const agent = makeLiveAgent(makeSpec(), chat, (e) => trace.push(e), {
      allowMultiToolTurns: true,
    });

    const result = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);

    expect(result.variables?.code).toBe("A1");
    expect(result.activateElements?.map((a) => a.elementId)).toEqual(["ToolA", "ToolB"]);
    expect(trace.some((e) => e.text.includes("argument name collision"))).toBe(true);
  });
});

describe("makeLiveAgent — recovers from a bad turn instead of ending the run", () => {
  /**
   * Recovery has to happen inside one invocation. `AgentResult` offers only
   * activate / complete / merge-variables — there is no "ask me again" — so an
   * empty result leaves the ad-hoc sub-process with nothing running and the
   * engine completes it. A handler that returns `{}` after a bad reply ends the
   * run, whatever its trace says.
   */
  it("retries within the same call when every stated call is unrecognised", async () => {
    const trace: { kind: string; text: string }[] = [];
    const chat = fakeChat([
      '{"tool": "NotARealTool", "arguments": {}, "done": false}',
      '{"tool": "ToolA", "arguments": {"code": "A1"}, "done": false}',
    ]);
    const agent = makeLiveAgent(makeSpec(), chat, (e) => trace.push(e));

    const result = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);

    expect(trace.some((e) => e.text.includes("doesn't exist"))).toBe(true);
    expect(result.activateElements?.[0]?.elementId).toBe("ToolA");
  });

  it("never hands the engine a result that does nothing", async () => {
    // The invariant behind all of this: activate something, complete, or merge
    // variables. Anything else silently ends the run.
    const chat = fakeChat([
      '{"tool": "NotARealTool", "arguments": {}}',
      "not json at all",
      '{"tool": "ToolA", "arguments": {"code": "A1"}}',
    ]);
    const result = await makeLiveAgent(makeSpec(), chat, () => {})({
      elementId: "Agent",
      variables: {},
      type: "x",
    } as never);

    const doesSomething =
      (result.activateElements?.length ?? 0) > 0 ||
      result.completionConditionFulfilled === true ||
      result.variables !== undefined;
    expect(doesSomething).toBe(true);
  });

  it("tells the model why a rejected call was rejected, so the retry differs", async () => {
    // At temperature 0 an identical prompt yields an identical reply, so a
    // retry that says nothing new loops until the budget is gone — which is
    // exactly what Qwen2.5 1.5B did, re-requesting an already-run tool.
    const prompts: string[] = [];
    const replies = [
      '{"tool": "ToolA", "arguments": {"code": "A1"}}',
      '{"tool": "ToolA", "arguments": {"code": "A2"}}',
      '{"tool": "ToolB", "arguments": {"code": "B1"}}',
    ];
    const chat: ChatFn = async (messages) => {
      prompts.push(messages[messages.length - 1]!.content);
      return replies.shift() ?? '{"done": true}';
    };
    const agent = makeLiveAgent(makeSpec(), chat, () => {});

    // First invocation activates ToolA.
    await agent({ elementId: "Agent", variables: {}, type: "x" } as never);
    // Second: the model asks for ToolA again, which is refused, and the retry
    // has to carry that back.
    const result = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);

    expect(prompts[2]).toContain("rejected");
    expect(prompts[2]).toContain("ToolA");
    expect(prompts[2]).toContain("already run");
    expect(result.activateElements?.[0]?.elementId).toBe("ToolB");
  });

  it("stops offering a tool that has already run", async () => {
    // The system message is the menu a small model shops from. Leaving an
    // already-run tool on it and saying "don't call this" elsewhere is how
    // Qwen2.5 1.5B ended up alternating between two spent tools.
    const systems: string[] = [];
    const replies = [
      '{"tool": "ToolA", "arguments": {"code": "A1"}}',
      '{"tool": "ToolB", "arguments": {"code": "B1"}}',
    ];
    const chat: ChatFn = async (messages) => {
      systems.push(messages[0]!.content);
      return replies.shift() ?? '{"done": true}';
    };
    const agent = makeLiveAgent(makeSpec(), chat, () => {});

    await agent({ elementId: "Agent", variables: {}, type: "x" } as never);
    await agent({ elementId: "Agent", variables: {}, type: "x" } as never);

    expect(systems[0]).toContain("ToolA");
    expect(systems[0]).toContain("ToolB");
    // Second turn: ToolA has run, so it is not on the menu at all.
    expect(systems[1]).not.toContain("ToolA");
    expect(systems[1]).toContain("ToolB");
  });

  it("completes without asking once nothing is left to call", async () => {
    // Asking a model to confirm a conclusion it has no move left to reach is
    // a formality only a capable model passes. Gemini Nano answered it with
    // six turns of spent tool names and JSON fragments before the budget ran
    // out; there is no reply that could have changed the outcome.
    const systems: string[] = [];
    const replies = [
      '{"tool": "ToolA", "arguments": {"code": "A1"}}',
      '{"tool": "ToolB", "arguments": {"code": "B1"}}',
    ];
    const chat: ChatFn = async (messages) => {
      systems.push(messages[0]!.content);
      return replies.shift() ?? '{"tool": "ToolA", "arguments": {}}';
    };
    const trace: { kind: string; text: string }[] = [];
    const agent = makeLiveAgent(makeSpec(), chat, (e) => trace.push(e));

    await agent({ elementId: "Agent", variables: {}, type: "x" } as never);
    await agent({ elementId: "Agent", variables: {}, type: "x" } as never);
    const third = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);

    expect(third.completionConditionFulfilled).toBe(true);
    // The third invocation never reached the model.
    expect(systems).toHaveLength(2);
    expect(trace.some((e) => e.text.includes("every tool has run"))).toBe(true);
  });

  it("stops after a streak of turns that activate nothing", async () => {
    // The backstop for the case the check above doesn't cover: tools are still
    // callable, but the model has lost the format and every reply is refused.
    // `spec.maxModelCalls` would eventually end it — after filling the trace
    // with identical refusals the reader has to scroll past.
    const trace: { kind: string; text: string }[] = [];
    const chat = fakeChat([
      '{"toolCallResult": "cleared"}',
      '{"tool": "NotARealTool", "arguments": {}}',
      '{"geneMarker": "TP53"}',
      '{"tool": "ToolA", "arguments": {"code": "A1"}}',
    ]);
    const spec = { ...makeSpec(), maxModelCalls: 20 };
    const result = await makeLiveAgent(spec, chat, (e) => trace.push(e))({
      elementId: "Agent",
      variables: {},
      type: "x",
    } as never);

    expect(result.completionConditionFulfilled).toBe(true);
    expect(result.activateElements).toBeUndefined();
    expect(trace.some((e) => e.text.includes("activated nothing"))).toBe(true);
    expect(trace.some((e) => e.text.includes("Turn budget spent"))).toBe(false);
  });

  it("counts the streak consecutively, not cumulatively", async () => {
    // A model that recovers must not be punished for earlier bad turns: the
    // counter is per-invocation, and a turn that activates something returns
    // to the engine.
    const chat = fakeChat([
      "not json at all",
      '{"tool": "NotARealTool", "arguments": {}}',
      '{"tool": "ToolA", "arguments": {"code": "A1"}}',
      "not json at all",
      '{"tool": "ToolB", "arguments": {"code": "B1"}}',
    ]);
    const agent = makeLiveAgent({ ...makeSpec(), maxModelCalls: 20 }, chat, () => {});

    const first = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);
    const second = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);

    expect(first.activateElements?.[0]?.elementId).toBe("ToolA");
    expect(second.activateElements?.[0]?.elementId).toBe("ToolB");
  });

  it("does not forbid repeats when the caller allows them", async () => {
    // With `allowRepeats`, an already-run tool stays on the menu and a repeat
    // is accepted — so telling the model never to call one again contradicts
    // both the manifest it can see and the policy that would honour the call.
    const prompts: string[] = [];
    const replies = [
      '{"tool": "ToolA", "arguments": {"code": "A1"}}',
      '{"tool": "ToolA", "arguments": {"code": "A2"}}',
    ];
    const chat: ChatFn = async (messages) => {
      prompts.push(messages.map((m) => m.content).join("\n\n"));
      return replies.shift() ?? '{"done": true}';
    };
    const agent = makeLiveAgent(makeSpec(), chat, () => {}, {
      allowRepeats: true,
    });

    await agent({ elementId: "Agent", variables: {}, type: "x" } as never);
    const second = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);

    expect(prompts[1]).not.toContain("do NOT call these again");
    expect(prompts[1]).toContain("ToolA");
    expect(second.activateElements?.[0]?.elementId).toBe("ToolA");
  });

  it("stops asking once the model-call budget is spent", async () => {
    const trace: { kind: string; text: string }[] = [];
    // Never says anything usable: the budget is what has to end this, and it
    // has to end as a completion rather than an empty result. The streak cap
    // is lifted so the budget is the thing under test.
    const chat = fakeChat(Array.from({ length: 20 }, () => "nonsense"));
    const spec = { ...makeSpec(), maxModelCalls: 3 };
    const result = await makeLiveAgent(spec, chat, (e) => trace.push(e), {
      maxUnproductiveTurns: 20,
    })({
      elementId: "Agent",
      variables: {},
      type: "x",
    } as never);

    expect(result.completionConditionFulfilled).toBe(true);
    expect(trace.some((e) => e.text.includes("Turn budget spent"))).toBe(true);
  });
});

describe("makeLiveAgent — a premature done, when a tool is required", () => {
  /**
   * Observed with Llama 3.2 1B on the compliance example: it runs the checks,
   * then reports done without ever calling the tool that records a decision —
   * having passed `decision: "cleared"` as an argument to a different tool,
   * which drops it. The gateway then routes to a human review task with
   * nothing to review, and the reader sees the failure as a business outcome.
   */
  const captureLastPrompt = (prompts: string[]): ChatFn => {
    const replies = ['{"done": true}', '{"tool": "ToolB", "arguments": {"code": "B1"}}'];
    return async (messages) => {
      prompts.push(messages[messages.length - 1]!.content);
      return replies.shift() ?? '{"done": true}';
    };
  };

  it("asks once more, naming the tool, instead of completing", async () => {
    const trace: { kind: string; text: string }[] = [];
    const prompts: string[] = [];
    const agent = makeLiveAgent(
      makeSpec(),
      captureLastPrompt(prompts),
      (e) => trace.push(e),
      { requiredTools: ["ToolB"] },
    );

    const result = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);

    expect(trace.some((e) => e.text.includes("hasn't run"))).toBe(true);
    // The reminder has to reach the model, not just the trace.
    expect(prompts[1]).toContain("ToolB");
    expect(prompts[1]).toContain("not run");
    expect(result.activateElements?.[0]?.elementId).toBe("ToolB");
  });

  it("accepts a second done — one nudge, not an argument", async () => {
    const trace: { kind: string; text: string }[] = [];
    const agent = makeLiveAgent(
      makeSpec(),
      fakeChat(['{"done": true}', '{"done": true}']),
      (e) => trace.push(e),
      { requiredTools: ["ToolB"] },
    );

    // A model that insists is allowed to be wrong; the run records that it was.
    const result = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);
    expect(result.completionConditionFulfilled).toBe(true);
    expect(trace.some((e) => e.text.includes("hasn't run"))).toBe(true);
  });

  it("takes done at face value once the required tool has run", async () => {
    const trace: { kind: string; text: string }[] = [];
    const agent = makeLiveAgent(
      makeSpec(),
      fakeChat([
        '{"tool": "ToolB", "arguments": {"code": "B1"}}',
        '{"done": true}',
      ]),
      (e) => trace.push(e),
      { requiredTools: ["ToolB"] },
    );

    // The engine calls back after the activated tool drains — that part is real,
    // and is how a run makes progress.
    const first = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);
    expect(first.activateElements?.[0]?.elementId).toBe("ToolB");

    const second = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);
    expect(second.completionConditionFulfilled).toBe(true);
    expect(trace.some((e) => e.text.includes("hasn't run"))).toBe(false);
  });

  it("is inert for an example that declares nothing", async () => {
    const agent = makeLiveAgent(makeSpec(), fakeChat(['{"done": true}']), () => {});
    const result = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);
    expect(result.completionConditionFulfilled).toBe(true);
  });
});

describe("makeLiveAgent — trace timeline correlation (turn/elementId/args)", () => {
  it("stamps every entry in a turn with the same turn number, and the activated tool with its elementId + resolved args", async () => {
    const trace: import("../types").TraceEntry[] = [];
    const chat = fakeChat([
      '{"tool": "ToolA", "arguments": {"code": "A1"}, "done": false}',
    ]);
    const turnRef = { current: undefined as number | undefined };
    const agent = makeLiveAgent(makeSpec(), chat, (e) => trace.push(e), {
      turnRef,
    });

    await agent({ elementId: "Agent", variables: {}, type: "x" } as never);

    // The LLM reply and the tool activation both belong to turn 1.
    const llmEntries = trace.filter((e) => e.kind === "llm");
    const agentEntries = trace.filter((e) => e.kind === "agent" && e.elementId);
    expect(llmEntries.every((e) => e.turn === 1)).toBe(true);
    expect(agentEntries).toHaveLength(1);
    expect(agentEntries[0]).toMatchObject({
      elementId: "ToolA",
      args: { code: "A1" },
      turn: 1,
    });

    // The shared TurnRef lets a tool's own trace entries (built in
    // compile.ts) adopt the same turn number.
    expect(turnRef.current).toBe(1);
  });

  it("still stamps its own entries with turn even when no TurnRef is supplied (compile.ts's tool entries just won't correlate)", async () => {
    const trace: import("../types").TraceEntry[] = [];
    const chat = fakeChat([
      '{"tool": "ToolA", "arguments": {"code": "A1"}, "done": false}',
    ]);
    const agent = makeLiveAgent(makeSpec(), chat, (e) => trace.push(e));

    await agent({ elementId: "Agent", variables: {}, type: "x" } as never);

    // The agent's own entries always carry a turn number (that's what lets
    // its llm/agent/error entries form one group on their own) — a TurnRef
    // is only needed to correlate a *separately traced* tool run (compile.ts)
    // with the turn that activated it.
    expect(trace.every((e) => e.turn === 1)).toBe(true);
  });
});
