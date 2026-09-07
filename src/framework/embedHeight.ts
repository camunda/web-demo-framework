/**
 * The messages an `?embed=1` runner posts to its host: a **height** (so the
 * page can size its iframe to this document instead of guessing) and a one-time
 * **readiness** signal (so the page can reveal the runner only once it is
 * usable — see {@link useEmbedReadyReporter}).
 *
 * Any guessed height is wrong: too short and the runner gets its own scrollbar
 * inside the page's scrollbar (scrolling within scrolling, and the diagram half
 * visible), too tall and the embed ends in dead space.
 *
 * Only these two non-sensitive signals travel, and only to `window.parent` — no
 * page content, no reader input. `targetOrigin` is `"*"` because the framework
 * has no way to know which origin embedded it, and neither a viewport height nor
 * a readiness flag is a secret. The host is expected to verify the *source* of a
 * message — `event.source` against its own `iframe.contentWindow` — rather than
 * trust an origin, since that is the check which actually establishes a message
 * came from this frame.
 */
import { useEffect, useRef } from "react";

/** The message this frame posts; the host matches on this `type`. */
export const EMBED_HEIGHT_MESSAGE = "web-demo-framework:height";

/**
 * The one-time "the runner is actually usable now" signal.
 *
 * Separate from the height message on purpose. Height is posted the moment the
 * app shell mounts (see {@link useEmbedHeightReporter}), long before the
 * WebAssembly engine has loaded — so a host that revealed the runner on the
 * first height would uncover it while it might still be loading, or fail to keep
 * its fallback up when the engine never initializes at all. This is posted only
 * after the engine is confirmed ready (see {@link useEmbedReadyReporter}), so
 * the host can hold its fallback until then and drop it exactly when there is a
 * working runner underneath. It arrives once per mounted runner, so a host that
 * swaps examples in place is told each new one is ready — idempotent for a host
 * that simply reveals the frame and leaves it revealed.
 */
export const EMBED_READY_MESSAGE = "web-demo-framework:ready";

export interface EmbedReadyMessage {
  type: typeof EMBED_READY_MESSAGE;
}

export function buildEmbedReadyMessage(): EmbedReadyMessage {
  return { type: EMBED_READY_MESSAGE };
}

/**
 * Sent by the host to ask for the current height. Needed because the first
 * report races the host: this app posts on mount, the host attaches its listener
 * when it hydrates, and neither order is guaranteed — a report that arrives
 * first is simply lost, and nothing would resend it until the content next
 * changed. The host asks on iframe load; this frame answers.
 */
export const EMBED_HEIGHT_REQUEST = "web-demo-framework:request-height";

export interface EmbedHeightMessage {
  type: typeof EMBED_HEIGHT_MESSAGE;
  height: number;
}

export function buildEmbedHeightMessage(height: number): EmbedHeightMessage {
  // Round up: a fractional height the host rounds *down* leaves a sliver of
  // overflow, which is enough for a scrollbar to appear.
  return { type: EMBED_HEIGHT_MESSAGE, height: Math.ceil(height) };
}

/**
 * Marks the document as content-sized while embedded. `styles.css` pins
 * `html`, `body` and `#root` to `height: 100%` so the standalone app fills the
 * window — but that makes their boxes exactly the iframe's height forever,
 * whatever the content does. A ResizeObserver reports *box* size, so it would
 * never fire, and the height below would be measured once and never again.
 */
const AUTO_HEIGHT_CLASS = "embed-height-auto";

/**
 * The height to report for `doc`.
 *
 * Deliberately NOT `documentElement.scrollHeight`: on the root element that is
 * floored at the viewport — which, inside an iframe, is the height the host just
 * granted us — so it ratchets. Growth gets reported, shrinkage never does, and
 * collapsing a panel leaves the frame stuck at its tallest with dead space under
 * the content.
 *
 * `offsetHeight` is the root's own border box, which {@link AUTO_HEIGHT_CLASS}
 * makes exactly the content. `body.scrollHeight` covers anything overflowing
 * that box — a fullscreen model editor, a tour popover — which is why the root
 * alone is not enough.
 */
export function measureDocumentHeight(doc: Document = document): number {
  return Math.max(doc.documentElement.offsetHeight, doc.body.scrollHeight);
}

/**
 * Posts the document height to the parent while `enabled`: on mount, whenever a
 * ResizeObserver sees the document change, and whenever the host asks with
 * {@link EMBED_HEIGHT_REQUEST}.
 *
 * A no-op when not embedded (`window.parent === window`), so calling it
 * unconditionally from the app shell is safe.
 */
export function useEmbedHeightReporter(enabled: boolean): void {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined" || window.parent === window) return;

    const root = document.documentElement;
    root.classList.add(AUTO_HEIGHT_CLASS);

    let lastSent = -1;
    const send = (force = false) => {
      const height = measureDocumentHeight();
      // Ignore sub-pixel churn. Each message makes the host resize the iframe,
      // which resizes this document, which measures again — without a
      // threshold that loop can oscillate forever over a rounding error.
      if (!force && Math.abs(height - lastSent) < 2) return;
      lastSent = height;
      window.parent.postMessage(buildEmbedHeightMessage(height), "*");
    };

    // `force`: the host only asks when it has missed a report, so answering with
    // "no change since last time" would leave it stuck on its fallback height.
    const onRequest = (event: MessageEvent) => {
      if (event.source !== window.parent) return;
      const data = event.data as { type?: unknown } | null;
      if (!data || data.type !== EMBED_HEIGHT_REQUEST) return;
      send(true);
    };
    window.addEventListener("message", onRequest);

    send();
    // With the class above making the document content-sized, observing the
    // root element catches growth from any cause: a panel expanding, a run
    // appending trace rows, fonts landing, a form rendering. A window `resize`
    // listener would miss every one of those.
    const observer = new ResizeObserver(() => send());
    observer.observe(root);
    return () => {
      observer.disconnect();
      window.removeEventListener("message", onRequest);
      root.classList.remove(AUTO_HEIGHT_CLASS);
    };
  }, [enabled]);
}

/**
 * Posts {@link EMBED_READY_MESSAGE} to the host the first time `ready` is true —
 * the signal a host uses to reveal an embedded runner.
 *
 * Once per mount, not once per page: `sent` is a per-instance ref, so a runner
 * that is remounted (in this app `ExampleRunner` is keyed by example id, so
 * switching examples remounts it) posts again for the newly-ready runner. That
 * is intended — each mounted runner reports its own readiness — and idempotent
 * for a host that reveals the frame and leaves it revealed. Within one mount it
 * fires only once, so a re-deploy that dips back through `"loading"` does not
 * re-cover an already-revealed frame.
 *
 * `ready` must mean the engine has actually initialized (in this app, the run
 * phase reaching `"ready"`), not merely that the shell mounted. A failed load
 * never makes `ready` true, so the message never fires and the host's fallback
 * stays up — which is the whole point of preferring this over the height
 * message, which fires regardless.
 *
 * A no-op when not embedded (`window.parent === window`), so it is safe to call
 * unconditionally.
 */
export function useEmbedReadyReporter(ready: boolean): void {
  const sent = useRef(false);
  useEffect(() => {
    if (!ready || sent.current) return;
    if (typeof window === "undefined" || window.parent === window) return;
    sent.current = true;
    window.parent.postMessage(buildEmbedReadyMessage(), "*");
  }, [ready]);
}
