import { act, renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { cleanup } from "@testing-library/react";
import { useBrain } from "./useBrain";

afterEach(cleanup);

/**
 * The vision brain seam `useBrain` exposes (contract B). jsdom has no
 * `navigator.gpu`, so WebGPU is absent here — exactly the environment where the
 * panel must offer the vision brain but fall back to scripted with a clear
 * reason rather than leaving a reader on a brain that can't connect.
 */
describe("useBrain — vision brain", () => {
  it("exposes the vision seam and defaults to scripted-vision with a reason when WebGPU is absent", async () => {
    const { result } = renderHook(() => useBrain());

    // The seam the runner consumes is present from the first render.
    expect(result.current.vision).toBeNull();
    expect(typeof result.current.connectVision).toBe("function");
    expect(typeof result.current.setVisionKind).toBe("function");

    // After the WebGPU probe resolves (absent in jsdom), the default vision
    // brain is the scripted fallback and a reason is surfaced.
    await waitFor(() => {
      expect(result.current.visionWebgpuReason).not.toBeNull();
    });
    expect(result.current.webgpu).toBe(false);
    expect(result.current.visionKind).toBe("scripted-vision");
    expect(result.current.visionWebgpuReason).toMatch(/scripted-vision/i);
  });

  it("connecting scripted-vision is ready with a null live reader (runner supplies the fallback)", async () => {
    const { result } = renderHook(() => useBrain());
    await waitFor(() =>
      expect(result.current.visionWebgpuReason).not.toBeNull(),
    );

    await act(async () => {
      await result.current.connectVision();
    });
    expect(result.current.visionStatus).toBe("ready");
    expect(result.current.vision).toBeNull();
  });

  it("connecting browser-vision without WebGPU errors, leaving the reader on the scripted fallback", async () => {
    const { result } = renderHook(() => useBrain());
    await waitFor(() =>
      expect(result.current.visionWebgpuReason).not.toBeNull(),
    );

    act(() => result.current.setVisionKind("browser-vision"));
    await act(async () => {
      await result.current.connectVision();
    });
    expect(result.current.visionStatus).toBe("error");
    expect(result.current.vision).toBeNull();
    expect(result.current.visionError).toBeTruthy();
  });

  it("switching vision kind after a failed connect resets to idle and clears the error", async () => {
    const { result } = renderHook(() => useBrain());
    await waitFor(() =>
      expect(result.current.visionWebgpuReason).not.toBeNull(),
    );

    act(() => result.current.setVisionKind("browser-vision"));
    await act(async () => {
      await result.current.connectVision();
    });
    expect(result.current.visionStatus).toBe("error");

    // Switching kinds tears down the failed brain and clears its state so no
    // stale error/model lingers for the newly selected kind.
    act(() => result.current.setVisionKind("scripted-vision"));
    expect(result.current.visionKind).toBe("scripted-vision");
    expect(result.current.visionStatus).toBe("idle");
    expect(result.current.visionError).toBeNull();
    expect(result.current.visionModelInUse).toBeNull();
    expect(result.current.vision).toBeNull();
  });
});
