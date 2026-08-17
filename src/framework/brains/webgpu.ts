/**
 * Shared WebGPU probe/reason helpers.
 *
 * Extracted verbatim from `brains/browser.ts` so both the in-browser LLM brain
 * (`browser.ts`) and the in-browser vision brain (`vision.ts`) check WebGPU the
 * same way — a reader must never be handed a live brain that can't connect, and
 * both fall back (to Endpoint/Scripted, or to `scripted-vision`) with the *same*
 * explained reason. `browser.ts` re-exports these, so its public surface is
 * unchanged.
 */

interface GPUAdapterLike {
  features?: { has(name: string): boolean };
  limits?: Record<string, number>;
}

/** True when this browser exposes the WebGPU adapter the in-browser brains need. */
export async function webgpuAvailable(): Promise<boolean> {
  return (await webgpuUnavailableReason()) === null;
}

/**
 * Why WebGPU isn't usable here, if it isn't — checked and explained *before*
 * a Connect attempt rather than surfaced only after one fails.
 */
export async function webgpuUnavailableReason(): Promise<string | null> {
  const gpu = (
    navigator as unknown as {
      gpu?: { requestAdapter(): Promise<GPUAdapterLike | null> };
    }
  ).gpu;
  if (!gpu)
    return (
      "This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, " +
      "or Safari 17+ with hardware acceleration on, or pick the Scripted or Endpoint brain."
    );
  let adapter: GPUAdapterLike | null;
  try {
    adapter = await gpu.requestAdapter();
  } catch (e) {
    return `WebGPU adapter request failed (${e instanceof Error ? e.message : String(e)}). Try the Scripted or Endpoint brain instead.`;
  }
  if (!adapter)
    return (
      "This browser supports the WebGPU API, but no GPU adapter is available — " +
      "hardware acceleration may be off, or this device/VM has no usable GPU. " +
      "Pick the Scripted or Endpoint brain instead."
    );
  return null;
}
