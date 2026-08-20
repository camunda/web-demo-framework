import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { useEffect } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { BrainPanel } from "./BrainPanel";
import { useBrain } from "../useBrain";

afterEach(cleanup);

/**
 * The endpoint brain's model picker. jsdom serves the page from `localhost`, so
 * a `http://localhost` endpoint is reachable here (not structurally blocked),
 * and `fetch` is stubbed so the panel's auto-fetch never touches a real server.
 * Radix's popover needs pointer APIs jsdom lacks to *open*, so these assert on
 * the trigger's displayed value and the Connect gate rather than opening the
 * list — the behaviours a reader depends on before they've picked anything.
 */
describe("BrainPanel — endpoint model picker", () => {
  beforeEach(() => vi.restoreAllMocks());

  function Harness() {
    const brain = useBrain();
    useEffect(() => brain.setKind("endpoint"), [brain.setKind]);
    return <BrainPanel brain={brain} />;
  }

  it("auto-fetches the endpoint's models and defaults the Select to the first served one", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: true,
        status: 200,
        statusText: "OK",
        json: async () => ({ data: [{ id: "llama3.2:3b" }, { id: "qwen2.5" }] }),
      })) as unknown as typeof fetch,
    );

    render(<Harness />);

    // The debounced effect fires listEndpointModels; once it resolves the
    // Select trigger shows the first served model as the default selection.
    await waitFor(() =>
      expect(screen.getByText("llama3.2:3b")).toBeInTheDocument(),
    );
  });

  it("gates Connect until a model is selected", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: true,
        status: 200,
        statusText: "OK",
        json: async () => ({ data: [{ id: "llama3.2:3b" }] }),
      })) as unknown as typeof fetch,
    );

    render(<Harness />);

    // No model chosen yet → Connect is disabled.
    const connect = screen.getByRole("button", { name: /^connect$/i });
    expect(connect).toBeDisabled();

    // Once the auto-fetch defaults a selection, Connect is enabled.
    await waitFor(() => expect(connect).toBeEnabled());
  });
});
