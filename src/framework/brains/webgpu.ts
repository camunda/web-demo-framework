/**
 * Shared WebGPU probe/reason helpers.
 *
 * Extracted from `brains/browser.ts` so both the in-browser LLM brain
 * (`browser.ts`) and the in-browser vision brain (`vision.ts`) check WebGPU the
 * same way — a reader must never be handed a live brain that can't connect, and
 * both fall back (to Endpoint/Scripted, or to `scripted-vision`) with the *same*
 * explained reason. The probe is unchanged from the original; the reason helper
 * gained a `fallbackHint` parameter (and slightly rephrased wording) so each
 * seam can name its own fallback. `browser.ts` re-exports these, so its public
 * surface is unchanged.
 */

interface GPUAdapterLike {
  features?: { has(name: string): boolean };
  limits?: Record<string, number>;
}

/**
 * The fallback a WebGPU-less reader should reach for, phrased for the text-brain
 * seam by default. The vision seam has no Endpoint alternative, so `vision.ts`
 * passes its own hint (`the scripted-vision fallback`) — the message must not
 * suggest a brain the current seam doesn't offer.
 */
const DEFAULT_FALLBACK_HINT = "the Scripted or Endpoint brain";

/** True when this browser exposes the WebGPU adapter the in-browser brains need. */
export async function webgpuAvailable(): Promise<boolean> {
  return (await webgpuUnavailableReason()) === null;
}

/**
 * Why WebGPU isn't usable here, if it isn't — checked and explained *before*
 * a Connect attempt rather than surfaced only after one fails. `fallbackHint`
 * names the alternative to steer the reader to; it defaults to the text-brain
 * seam's Scripted/Endpoint options, and the vision seam overrides it so the
 * message never points at a brain that seam can't offer.
 */
export async function webgpuUnavailableReason(
  fallbackHint: string = DEFAULT_FALLBACK_HINT,
): Promise<string | null> {
  const gpu = (
    navigator as unknown as {
      gpu?: { requestAdapter(): Promise<GPUAdapterLike | null> };
    }
  ).gpu;
  if (!gpu)
    return (
      "This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, " +
      `or Safari 17+ with hardware acceleration on, or pick ${fallbackHint}.`
    );
  let adapter: GPUAdapterLike | null;
  try {
    adapter = await gpu.requestAdapter();
  } catch (e) {
    return `WebGPU adapter request failed (${e instanceof Error ? e.message : String(e)}). Try ${fallbackHint} instead.`;
  }
  if (!adapter)
    return (
      "This browser supports the WebGPU API, but no GPU adapter is available — " +
      "hardware acceleration may be off, or this device/VM has no usable GPU. " +
      `Pick ${fallbackHint} instead.`
    );
  return null;
}
