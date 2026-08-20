import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useBrain } from "./useBrain";

afterEach(cleanup);

/**
 * The endpoint-model picker seam `useBrain` exposes. The panel replaced its
 * free-text model box with a Select populated from the server's OpenAI-style
 * `/models`, so a reader picks from what the endpoint actually serves rather
 * than typing an id from memory (a wrong one only fails at connect). jsdom is
 * served from `localhost`, so a `http://localhost` endpoint is *not* blocked
 * here — exactly the local-development case this feature is for. `fetch` is
 * stubbed so the tests never touch a real server.
 */
describe("useBrain — endpoint model list", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  function stubModels(ids: string[]) {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: true,
        status: 200,
        statusText: "OK",
        json: async () => ({ data: ids.map((id) => ({ id })) }),
      })) as unknown as typeof fetch,
    );
  }

  it("exposes the picker seam with idle defaults from the first render", () => {
    const { result } = renderHook(() => useBrain());
    expect(result.current.endpointModels).toEqual([]);
    expect(result.current.endpointModelsStatus).toBe("idle");
    expect(result.current.endpointModelsError).toBeNull();
    expect(typeof result.current.listEndpointModels).toBe("function");
  });

  it("populates the list from /models and defaults the selection to the first served model", async () => {
    stubModels(["llama3.2:3b", "qwen2.5"]);
    const { result } = renderHook(() => useBrain());

    await act(async () => {
      await result.current.listEndpointModels();
    });

    expect(result.current.endpointModels).toEqual(["llama3.2:3b", "qwen2.5"]);
    expect(result.current.endpointModelsStatus).toBe("ready");
    expect(result.current.endpointModel).toBe("llama3.2:3b");
  });

  it("keeps a still-served selection instead of resetting it to the first model", async () => {
    stubModels(["llama3.2:3b", "qwen2.5"]);
    const { result } = renderHook(() => useBrain());

    act(() => result.current.setEndpointModel("qwen2.5"));
    await act(async () => {
      await result.current.listEndpointModels();
    });

    expect(result.current.endpointModel).toBe("qwen2.5");
  });

  it("surfaces an error and clears the selection when the endpoint can't be listed", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: false,
        status: 404,
        statusText: "Not Found",
        json: async () => ({}),
      })) as unknown as typeof fetch,
    );
    const { result } = renderHook(() => useBrain());

    await act(async () => {
      await result.current.listEndpointModels();
    });

    await waitFor(() =>
      expect(result.current.endpointModelsStatus).toBe("error"),
    );
    expect(result.current.endpointModels).toEqual([]);
    expect(result.current.endpointModel).toBe("");
    expect(result.current.endpointModelsError).toBeTruthy();
  });
});
