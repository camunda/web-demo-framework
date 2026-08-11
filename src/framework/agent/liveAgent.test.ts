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
  it("does not complete the agent when every stated call is unrecognised", async () => {
    const trace: { kind: string; text: string }[] = [];
    const chat = fakeChat([
      '{"tool": "NotARealTool", "arguments": {}, "done": false}',
      '{"tool": "ToolA", "arguments": {"code": "A1"}, "done": false}',
    ]);
    const agent = makeLiveAgent(makeSpec(), chat, (e) => trace.push(e));

    const first = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);
    expect(first.completionConditionFulfilled).toBeFalsy();
    expect(first.activateElements).toBeUndefined();

    const second = await agent({ elementId: "Agent", variables: {}, type: "x" } as never);
    expect(second.activateElements?.[0]?.elementId).toBe("ToolA");
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
