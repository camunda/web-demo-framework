import { useEffect } from "react";

/**
 * Reports the document's height to the embedding page, so an `?embed=1` iframe
 * can be sized to its content instead of being given a guessed fixed height.
 *
 * Without this the host has to pick a height, and whatever it picks is wrong:
 * too short and the runner gets its own scrollbar inside the page's scrollbar
 * (scrolling within scrolling, and the diagram half-visible), too tall and the
 * embed ends in dead space. The host listens for these messages and follows.
 *
 * Only the height travels, and only to `window.parent` — no page content, no
 * reader input. `targetOrigin` is `"*"` because the framework has no way to
 * know which origin embedded it, and a viewport height is not a secret. The
 * host is expected to verify the *source* (`event.source === iframe
 * .contentWindow`) rather than trust the origin, which is the check that
 * actually establishes it came from this frame.
 */
export const EMBED_HEIGHT_MESSAGE = "web-demo-framework:height";

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
 * Posts the document height to the parent on mount and on every change, while
 * `enabled`. A no-op when not embedded (`window.parent === window`), so calling
 * it unconditionally from the app shell is safe.
 */
/**
 * Marks the document as content-sized while embedded. `styles.css` pins
 * `html`, `body` and `#root` to `height: 100%` so the standalone app fills the
 * window — but that makes their boxes exactly the iframe's height forever,
 * whatever the content does. A ResizeObserver reports *box* size, so it would
 * never fire, and the height below would be measured once and never again.
 */
const AUTO_HEIGHT_CLASS = "embed-height-auto";

export function useEmbedHeightReporter(enabled: boolean): void {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined" || window.parent === window) return;

    const root = document.documentElement;
    root.classList.add(AUTO_HEIGHT_CLASS);

    let lastSent = -1;
    const send = (force = false) => {
      // `scrollHeight` on the root element, not `body`: the body's own box
      // stops at its margin edge and misses anything positioned beyond it.
      const height = document.documentElement.scrollHeight;
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
