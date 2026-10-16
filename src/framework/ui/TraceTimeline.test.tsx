import { cleanup, render, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { TraceTimeline, type TraceLogLine } from "./TraceTimeline";

afterEach(cleanup);

const LOG: TraceLogLine[] = [
  { id: 1, kind: "start", text: "process instance started" },
  { id: 2, kind: "llm", text: "I'll check the customer first.", turn: 1 },
  { id: 3, kind: "agent", text: "activated LookupCustomer", turn: 1, elementId: "LookupCustomer" },
  { id: 4, kind: "llm", text: "Now the credit bureau.", turn: 2 },
  { id: 5, kind: "done", text: "process instance completed" },
];

const rows = (container: HTMLElement) =>
  Array.from(container.querySelector(".timeline")!.children).map((el) => el.textContent ?? "");

const iterations = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>(".timeline-iteration"));

describe("TraceTimeline", () => {
  it("puts the newest row at the top", () => {
    const { container } = render(<TraceTimeline log={LOG} hasAgent />);
    const shown = rows(container);
    expect(shown).toHaveLength(4);
    expect(shown[0]).toContain("process instance completed");
    expect(shown[1]).toContain("Now the credit bureau.");
    expect(shown[2]).toContain("I'll check the customer first.");
    expect(shown[3]).toContain("process instance started");
  });

  it("keeps a turn's own reply above the tools it called", () => {
    const { container } = render(<TraceTimeline log={LOG} hasAgent />);
    const turn = rows(container)[2];
    expect(turn.indexOf("I'll check the customer first.")).toBeLessThan(
      turn.indexOf("LookupCustomer"),
    );
  });

  // Operate's word for one pass of the agent loop, in Operate's format.
  it("labels each turn as a numbered iteration", () => {
    const { container } = render(<TraceTimeline log={LOG} hasAgent />);
    const heads = iterations(container).map(
      (el) => el.querySelector(".timeline-iteration-label")?.textContent,
    );
    expect(heads).toEqual(["2. iteration", "1. iteration"]);
    expect(container.textContent).not.toMatch(/\bturn\b|\bround\b/i);
  });

  it("shows a tool call's input beside its output", () => {
    const log: TraceLogLine[] = [
      { id: 1, kind: "agent", text: "🤖 calling Lookup", turn: 1, elementId: "Lookup", args: { id: "c-1" } },
      { id: 2, kind: "tool", text: "▶ Look up customer", turn: 1, elementId: "Lookup" },
      { id: 3, kind: "tool", text: "   found c-1", turn: 1, elementId: "Lookup" },
      { id: 4, kind: "vars", text: "↳ …", turn: 1, elementId: "Lookup", result: { tier: "gold" } },
    ];
    const { container } = render(
      <TraceTimeline log={log} hasAgent labelFor={() => "Look up customer"} />,
    );
    const call = within(container).getByRole("article", { name: "Tool call: Look up customer" });
    const [input, output] = Array.from(call.querySelectorAll(".timeline-io-col"));
    expect(input).toHaveTextContent(/^Input/);
    expect(JSON.parse(input.querySelector("pre")!.textContent!)).toEqual({ id: "c-1" });
    expect(output).toHaveTextContent(/^Output/);
    expect(JSON.parse(output.querySelector("pre")!.textContent!)).toEqual({ tier: "gold" });
    // The handler's own note lives with its call; the started line would only
    // repeat the card's own header.
    expect(call).toHaveTextContent("found c-1");
    expect(container.textContent).not.toContain("▶ Look up customer");
  });

  // A call with no job output (a compound tool) says what the engine says
  // became of that very call — see toolCalls.ts — never an element-wide count.
  const outputs = (container: HTMLElement) =>
    Array.from(container.querySelectorAll(".timeline-tool")).map(
      (el) => el.querySelectorAll(".timeline-io-col")[1].textContent,
    );

  it("says what became of a call with no job output: running, completed or cancelled", () => {
    const call = (id: number, elementId: string) =>
      ({ id, kind: "agent", text: `calling ${elementId}`, turn: 1, agentId: "Agent", elementId, args: {}, call: 1 }) as TraceLogLine;
    const { container } = render(
      <TraceTimeline
        log={[call(1, "A"), call(2, "Sub"), call(3, "Consult")]}
        hasAgent
        callOutcomes={
          new Map([
            ["Agent#1#Sub#1", "completed"],
            ["Agent#1#Consult#1", "canceled"],
          ])
        }
      />,
    );
    expect(outputs(container)).toEqual(["Outputrunning…", "Outputcompleted", "Outputcanceled"]);
  });

  it("does not call a repeated compound tool completed just because an earlier call was", () => {
    const log: TraceLogLine[] = [
      { id: 1, kind: "agent", text: "calling Sub", turn: 1, agentId: "Agent", elementId: "Sub", args: {}, call: 1 },
      { id: 2, kind: "agent", text: "calling Sub", turn: 2, agentId: "Agent", elementId: "Sub", args: {}, call: 2 },
    ];
    const { container } = render(
      <TraceTimeline
        log={log}
        hasAgent
        callOutcomes={new Map([["Agent#1#Sub#1", "completed"], ["Agent#2#Sub#2", "running"]])}
      />,
    );
    // Newest first: the second call is still running, the first finished.
    expect(outputs(container)).toEqual(["Outputrunning…", "Outputcompleted"]);
  });

  it("keeps two calls of one tool in the same iteration apart, output and notes", () => {
    // Both activations come before either job runs, as they do in one iteration.
    const log: TraceLogLine[] = [
      { id: 1, kind: "agent", text: "calling Fx", turn: 1, elementId: "Fx", args: { pair: "EUR" } },
      { id: 2, kind: "agent", text: "calling Fx", turn: 1, elementId: "Fx", args: { pair: "GBP" } },
      { id: 3, kind: "tool", text: "▶ Fx", turn: 1, elementId: "Fx", jobKey: "j1" },
      { id: 4, kind: "tool", text: "▶ Fx", turn: 1, elementId: "Fx", jobKey: "j2" },
      { id: 5, kind: "tool", text: "   gbp note", turn: 1, elementId: "Fx", jobKey: "j2" },
      { id: 6, kind: "tool", text: "   eur note", turn: 1, elementId: "Fx", jobKey: "j1" },
      { id: 7, kind: "vars", text: "↳", turn: 1, elementId: "Fx", jobKey: "j1", result: { rate: 1.1 } },
      { id: 8, kind: "vars", text: "↳", turn: 1, elementId: "Fx", jobKey: "j2", result: { rate: 0.9 } },
    ];
    const { container } = render(<TraceTimeline log={log} hasAgent />);
    const [eur, gbp] = Array.from(container.querySelectorAll(".timeline-tool"));
    expect(eur).toHaveTextContent('"rate": 1.1');
    expect(eur).toHaveTextContent("eur note");
    expect(eur).not.toHaveTextContent("gbp note");
    expect(gbp).toHaveTextContent('"rate": 0.9');
    expect(gbp).toHaveTextContent("gbp note");
    expect(gbp).not.toHaveTextContent("eur note");
  });

  it("pairs a call with its own job even when the capped log has dropped the call before it", () => {
    // The duplicate-Fx run with EUR's activation dropped off the front of the
    // log: GBP's activation is the only one left, but it is still call 2.
    const log: TraceLogLine[] = [
      { id: 2, kind: "agent", text: "calling Fx", turn: 1, elementId: "Fx", args: { pair: "GBP" }, call: 2 },
      { id: 3, kind: "tool", text: "▶ Fx", turn: 1, elementId: "Fx", jobKey: "j1", call: 1 },
      { id: 4, kind: "tool", text: "▶ Fx", turn: 1, elementId: "Fx", jobKey: "j2", call: 2 },
      { id: 5, kind: "tool", text: "   gbp note", turn: 1, elementId: "Fx", jobKey: "j2", call: 2 },
      { id: 6, kind: "tool", text: "   eur note", turn: 1, elementId: "Fx", jobKey: "j1", call: 1 },
      { id: 7, kind: "vars", text: "↳", turn: 1, elementId: "Fx", jobKey: "j1", call: 1, result: { rate: 1.1 } },
      { id: 8, kind: "vars", text: "↳", turn: 1, elementId: "Fx", jobKey: "j2", call: 2, result: { rate: 0.9 } },
    ];
    const { container } = render(<TraceTimeline log={log} hasAgent />);
    const cards = container.querySelectorAll(".timeline-tool");
    expect(cards).toHaveLength(1);
    expect(cards[0]).toHaveTextContent('"rate": 0.9');
    expect(cards[0]).toHaveTextContent("gbp note");
    expect(cards[0]).not.toHaveTextContent("1.1");
    expect(cards[0]).not.toHaveTextContent("eur note");
  });

  it("names the host and keeps each host's iterations apart when several run at once", () => {
    // Two hosts both on their first turn, interleaved as parallel hosts are.
    const log: TraceLogLine[] = [
      { id: 1, kind: "agent", text: "calling A", turn: 1, agentId: "LoanAgent", elementId: "A", args: {} },
      { id: 2, kind: "agent", text: "calling B", turn: 1, agentId: "AccountAgent", elementId: "B", args: {} },
      { id: 3, kind: "vars", text: "↳", turn: 1, agentId: "LoanAgent", elementId: "A", result: { a: 1 } },
      { id: 4, kind: "vars", text: "↳", turn: 1, agentId: "AccountAgent", elementId: "B", result: { b: 2 } },
    ];
    const labels: Record<string, string> = { LoanAgent: "Loan agent", AccountAgent: "Account agent" };
    const { container } = render(
      <TraceTimeline log={log} hasAgent labelFor={(id) => labels[id] ?? id} />,
    );
    const cards = iterations(container);
    expect(cards.map((c) => c.querySelector(".timeline-iteration-label")?.textContent)).toEqual([
      "Account agent · 1. iteration",
      "Loan agent · 1. iteration",
    ]);
    // Each result reached its own host's card despite the interleaving.
    expect(cards[0]).toHaveTextContent('"b": 2');
    expect(cards[1]).toHaveTextContent('"a": 1');
  });

  it("marks a turn whose reply is still streaming as thinking", () => {
    const log: TraceLogLine[] = [
      { id: 1, kind: "llm", text: "LLM thinking…", turn: 1, pending: true },
    ];
    const { container } = render(<TraceTimeline log={log} hasAgent />);
    expect(container.querySelector(".timeline-thinking")).toHaveTextContent("Thinking...");
  });
});
