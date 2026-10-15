import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, renderHook } from "@testing-library/react";
import {
  buildEmbedHeightMessage,
  buildEmbedReadyMessage,
  measureDocumentHeight,
  useEmbedReadyReporter,
  EMBED_HEIGHT_MESSAGE,
  EMBED_HEIGHT_REQUEST,
  EMBED_READY_MESSAGE,
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

describe("buildEmbedReadyMessage", () => {
  it("carries only the type the host matches on", () => {
    // A distinct type from the height message: the host reveals an embedded
    // runner on this one, and it fires only once the engine is actually ready.
    expect(buildEmbedReadyMessage()).toEqual({ type: EMBED_READY_MESSAGE });
    expect(EMBED_READY_MESSAGE).not.toBe(EMBED_HEIGHT_MESSAGE);
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

/**
 * `useEmbedReadyReporter` needs only a parent to post to — no layout — so it is
 * testable here. jsdom gives a top-level window no parent of its own, so a real
 * (jsdom) iframe window stands in: a plain object would not be accepted as a
 * `MessageEvent` source.
 */
describe("useEmbedReadyReporter", () => {
  let frame: HTMLIFrameElement;
  let parent: Window;
  let post: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    frame = document.createElement("iframe");
    document.body.appendChild(frame);
    parent = frame.contentWindow!;
    post = vi.fn();
    parent.postMessage = post as unknown as Window["postMessage"];
    vi.spyOn(window, "parent", "get").mockReturnValue(parent as Window & typeof globalThis);
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    frame.remove();
  });

  const ask = (source: Window = parent) =>
    window.dispatchEvent(
      new MessageEvent("message", { data: { type: EMBED_HEIGHT_REQUEST }, source }),
    );
  const readyPosts = () =>
    post.mock.calls.filter(([m]) => m?.type === EMBED_READY_MESSAGE).length;

  it("posts once when the runner becomes ready", () => {
    const { rerender } = renderHook(({ ready }) => useEmbedReadyReporter(ready), {
      initialProps: { ready: false },
    });
    expect(readyPosts()).toBe(0);
    rerender({ ready: true });
    rerender({ ready: true });
    expect(readyPosts()).toBe(1);
  });

  it("re-sends readiness when a host that missed it asks", () => {
    renderHook(() => useEmbedReadyReporter(true));
    expect(readyPosts()).toBe(1);
    ask();
    expect(readyPosts()).toBe(2);
  });

  it("does not claim readiness before the runner is ready", () => {
    renderHook(() => useEmbedReadyReporter(false));
    ask();
    expect(readyPosts()).toBe(0);
  });

  it("answers only its own parent", () => {
    renderHook(() => useEmbedReadyReporter(true));
    ask(window);
    expect(readyPosts()).toBe(1);
  });
});
