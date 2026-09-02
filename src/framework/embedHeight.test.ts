import { describe, expect, it } from "vitest";
import {
  buildEmbedHeightMessage,
  measureDocumentHeight,
  EMBED_HEIGHT_MESSAGE,
} from "./embedHeight";

/**
 * The hook itself needs a parent frame and a `ResizeObserver`, and jsdom has
 * neither — it does not implement `ResizeObserver` at all, and it computes no
 * layout for one to report on — so exercising the wiring belongs in a browser
 * smoke test. The message contract and the choice of what to measure are what a
 * host actually depends on, and both are testable here.
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

/**
 * Stubs the three sizes the measurement can read. Real layout is not needed —
 * and is not available in jsdom — because what matters is *which* of them the
 * measurement trusts.
 */
function docWith(sizes: {
  rootOffsetHeight: number;
  rootScrollHeight: number;
  bodyScrollHeight: number;
}): Document {
  return {
    documentElement: {
      offsetHeight: sizes.rootOffsetHeight,
      scrollHeight: sizes.rootScrollHeight,
    },
    body: { scrollHeight: sizes.bodyScrollHeight },
  } as unknown as Document;
}

describe("measureDocumentHeight", () => {
  it("shrinks with the content, even while the root's scrollHeight cannot", () => {
    // The regression this guards: `documentElement.scrollHeight` is floored at
    // the viewport, so after the host has grown the frame to 1200 it keeps
    // reporting 1200 however small the content gets. Reporting that back is a
    // ratchet — the frame can only ever grow.
    const height = measureDocumentHeight(
      docWith({
        rootOffsetHeight: 600,
        rootScrollHeight: 1200,
        bodyScrollHeight: 600,
      }),
    );
    expect(height).toBe(600);
  });

  it("still covers content that overflows the root's box", () => {
    const height = measureDocumentHeight(
      docWith({
        rootOffsetHeight: 600,
        rootScrollHeight: 600,
        bodyScrollHeight: 900,
      }),
    );
    expect(height).toBe(900);
  });
});
