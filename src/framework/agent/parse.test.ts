import { describe, expect, it } from "vitest";
import { collectToolCalls, extractJson, saysDone, shorten } from "./parse";

describe("extractJson", () => {
  it("parses a bare JSON object", () => {
    expect(extractJson('{"tool":"Foo","arguments":{"x":1}}')).toEqual({
      tool: "Foo",
      arguments: { x: 1 },
    });
  });

  it("extracts the first balanced {...} block from prose", () => {
    const text = 'Sure, here you go:\n{"tool":"Foo"}\nLet me know if that helps.';
    expect(extractJson(text)).toEqual({ tool: "Foo" });
  });

  it("extracts JSON wrapped in a markdown code fence", () => {
    const text = '```json\n{"tool":"Foo","arguments":{}}\n```';
    expect(extractJson(text)).toEqual({ tool: "Foo", arguments: {} });
  });

  it("handles nested braces inside the JSON block", () => {
    const text = '{"tool":"Foo","arguments":{"nested":{"a":1}}}';
    expect(extractJson(text)).toEqual({
      tool: "Foo",
      arguments: { nested: { a: 1 } },
    });
  });

  it("returns null when there is no { in the text", () => {
    expect(extractJson("no json here")).toBeNull();
  });

  it("returns null for malformed JSON", () => {
    expect(extractJson('{"tool": "Foo",}')).toBeNull();
  });
});

describe("shorten", () => {
  it("collapses whitespace and trims", () => {
    expect(shorten("  a   b\n\tc  ")).toBe("a b c");
  });

  it("leaves short text untouched", () => {
    expect(shorten("short")).toBe("short");
  });

  it("truncates long text with an ellipsis, respecting max", () => {
    const long = "x".repeat(300);
    const out = shorten(long, 50);
    expect(out.length).toBe(50);
    expect(out.endsWith("…")).toBe(true);
  });
});

describe("collectToolCalls", () => {
  it("returns [] for a null reply", () => {
    expect(collectToolCalls(null)).toEqual([]);
  });

  it("reads the single-call shape: {tool, arguments}", () => {
    expect(collectToolCalls({ tool: "VerifyGeneticMarker", arguments: { geneMarker: "TP53" } })).toEqual([
      { name: "VerifyGeneticMarker", args: { geneMarker: "TP53" } },
    ]);
  });

  it("captures the model's reason on a single call, tolerating synonyms", () => {
    expect(
      collectToolCalls({ tool: "Foo", arguments: {}, reason: "  because X  " }),
    ).toEqual([{ name: "Foo", args: {}, reason: "because X" }]);
    // A synonym field, and per-entry reasons in the multi-call shape.
    expect(collectToolCalls({ tool: "Foo", rationale: "why" })[0].reason).toBe("why");
    expect(
      collectToolCalls({ tools: [{ tool: "A", reason: "ra" }, { tool: "B", why: "rb" }] }),
    ).toEqual([
      { name: "A", args: {}, reason: "ra" },
      { name: "B", args: {}, reason: "rb" },
    ]);
  });

  it("tolerates {name, args} in place of {tool, arguments}", () => {
    expect(collectToolCalls({ name: "Foo", args: { a: 1 } })).toEqual([
      { name: "Foo", args: { a: 1 } },
    ]);
  });

  it("tolerates {action, parameters}", () => {
    expect(collectToolCalls({ action: "Foo", parameters: { a: 1 } })).toEqual([
      { name: "Foo", args: { a: 1 } },
    ]);
  });

  it("tolerates {input} as the arguments key", () => {
    expect(collectToolCalls({ tool: "Foo", input: { a: 1 } })).toEqual([
      { name: "Foo", args: { a: 1 } },
    ]);
  });

  it("defaults args to {} when no recognised arguments key is present", () => {
    expect(collectToolCalls({ tool: "Foo" })).toEqual([{ name: "Foo", args: {} }]);
  });

  it("reads a {tools: [\"a\", \"b\"]} list of bare names", () => {
    expect(collectToolCalls({ tools: ["a", "b"] })).toEqual([
      { name: "a", args: {} },
      { name: "b", args: {} },
    ]);
  });

  it("reads a {tool_calls: [{name, args}]} list", () => {
    expect(
      collectToolCalls({ tool_calls: [{ name: "Foo", args: { x: 1 } }, { name: "Bar" }] }),
    ).toEqual([
      { name: "Foo", args: { x: 1 } },
      { name: "Bar", args: {} },
    ]);
  });

  it("falls back to the first array-valued field when no known key matches", () => {
    expect(collectToolCalls({ weirdKey: ["Foo"] })).toEqual([{ name: "Foo", args: {} }]);
  });

  it("skips blank string entries in an array", () => {
    expect(collectToolCalls({ tools: ["", "  ", "Foo"] })).toEqual([
      { name: "Foo", args: {} },
    ]);
  });

  it("returns an invented tool name verbatim rather than correcting it", () => {
    // The tolerance is one-sided: we find names, we never fix them. A model
    // hallucinating a tool that doesn't exist in the model must still surface
    // as that exact hallucinated name, so the run stays honest about it.
    expect(collectToolCalls({ tool: "TotallyMadeUpTool" })).toEqual([
      { name: "TotallyMadeUpTool", args: {} },
    ]);
  });

  it("returns [] when nothing recognisable is present", () => {
    expect(collectToolCalls({ foo: "bar" })).toEqual([]);
  });
});

describe("saysDone", () => {
  it("returns false for a null reply", () => {
    expect(saysDone(null)).toBe(false);
  });

  it("reads a boolean done/finished/complete field", () => {
    expect(saysDone({ done: true })).toBe(true);
    expect(saysDone({ finished: true })).toBe(true);
    expect(saysDone({ complete: true })).toBe(true);
    expect(saysDone({ done: false })).toBe(false);
  });

  it("reads a stringly-typed 'true'/'false'", () => {
    expect(saysDone({ done: "true" })).toBe(true);
    expect(saysDone({ done: "TRUE" })).toBe(true);
    expect(saysDone({ done: "false" })).toBe(false);
  });

  it("returns false when no done-like field is present", () => {
    expect(saysDone({ tool: "Foo" })).toBe(false);
  });
});
