import { cleanup, render } from "@testing-library/react";
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
});
