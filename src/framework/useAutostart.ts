import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Presses Run once, on behalf of a reader who has not asked to.
 *
 * The epic wants an embed on a marketing page to show a process *running*
 * rather than a diagram waiting to be clicked, so `?autostart=1` opts into
 * that. It is deliberately narrow: one run, only when the example could have
 * been run by hand anyway, and never when the reader has said they do not want
 * motion.
 */
export interface UseAutostartOptions {
  /** `?autostart=1` was asked for. */
  enabled: boolean;
  /**
   * Everything that gates the Run button — engine booted, model compiles, the
   * start form filled. Autostart must not be a second, laxer route into a run
   * the UI would have refused.
   */
  ready: boolean;
  /** The element whose visibility decides when to fire. */
  targetRef: RefObject<HTMLElement | null>;
  start: () => void;
}

/** True when the reader has asked their OS for less animation. */
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useAutostart({
  enabled,
  ready,
  targetRef,
  start,
}: UseAutostartOptions): void {
  const firedRef = useRef(false);
  const [onScreen, setOnScreen] = useState(false);
  // `start` is a fresh closure most renders; firing reads the current one
  // rather than whichever existed when the observer was attached.
  const startRef = useRef(start);
  useEffect(() => {
    startRef.current = start;
  }, [start]);

  useEffect(() => {
    if (!enabled || firedRef.current) return;
    const el = targetRef.current;
    // No element yet, or a environment without the observer (jsdom): fall back
    // to "on screen", so the readiness gate below is the only thing left. A
    // missing observer should not mean a demo that never runs.
    if (!el || typeof IntersectionObserver === "undefined") {
      setOnScreen(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setOnScreen(true);
          observer.disconnect();
        }
      },
      // A sliver is enough: this decides "has the reader arrived at it", not
      // "can they see all of it" — the runner is taller than most viewports.
      { threshold: 0.01 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled, targetRef]);

  useEffect(() => {
    if (!enabled || firedRef.current || !ready || !onScreen) return;
    // Checked at fire time, not on mount: this is a run that starts moving
    // things on its own, and the reader asked not to be shown that.
    if (prefersReducedMotion()) return;
    firedRef.current = true;
    startRef.current();
  }, [enabled, ready, onScreen]);
}
