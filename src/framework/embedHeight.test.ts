import { describe, expect, it } from "vitest";
import {
  buildEmbedHeightMessage,
  EMBED_HEIGHT_MESSAGE,
} from "./embedHeight";

/**
 * The hook itself needs a real ResizeObserver and a parent frame, neither of
 * which jsdom provides (`vitest.setup.ts` stubs the observer as a no-op), so
 * it belongs in a browser smoke test. The message contract is what the host
 * depends on, and that is testable here.
 */
describe("buildEmbedHeightMessage", () => {
  it("carries the type the host matches on, and nothing else", () => {
    expect(buildEmbedHeightMessage(720)).toEqual({
      type: EMBED_HEIGHT_MESSAGE,
      height: 720,
    });
  });

  it("rounds a fractional height up", () => {
    // Rounding down would leave a sliver of overflow — enough for the host's
    // iframe to show a scrollbar, which is the whole thing this avoids.
    expect(buildEmbedHeightMessage(719.2).height).toBe(720);
  });
});
