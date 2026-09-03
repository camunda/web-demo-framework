/**
 * Minimal client-side routing for two pages — no router dependency, since the
 * whole surface is "gallery at `/`" plus "one example at `/examples/<id>`".
 *
 * Respects Vite's configured base path (`import.meta.env.BASE_URL`), since
 * this app is served from a GitHub Pages project path in production
 * (`/web-demo-framework/`) and from a per-PR preview subpath
 * (`/pr-preview/pr-<n>/`) — see vite.config.ts and docs/hosting-and-deployment.md.
 */

export type Route = { kind: "gallery" } | { kind: "example"; id: string };

/** The app's base path, always ending in `/` (e.g. `/` or `/web-demo-framework/`). */
export function basePath(): string {
  return import.meta.env.BASE_URL || "/";
}

function stripBase(pathname: string): string {
  const base = basePath();
  if (base !== "/" && pathname.startsWith(base)) {
    return "/" + pathname.slice(base.length);
  }
  return pathname;
}

/** Parses `location.pathname` (relative to the base path) into a {@link Route}. */
export function parseRoute(pathname: string = location.pathname): Route {
  const relative = stripBase(pathname);
  const match = relative.match(/^\/examples\/([^/]+)\/?$/);
  if (match) {
    try {
      return { kind: "example", id: decodeURIComponent(match[1]) };
    } catch {
      // Malformed percent-encoding (e.g. a stray `%`) — fall back to the
      // gallery rather than crashing routing/page render.
      return { kind: "gallery" };
    }
  }
  return { kind: "gallery" };
}

/** True when `?embed=1` is present — a docs page inlining this example. */
export function isEmbed(search: string = location.search): boolean {
  return new URLSearchParams(search).get("embed") === "1";
}

/**
 * How much of the runner an embed shows.
 *
 * - `full` — everything, as a docs page wants it.
 * - `compact` — read-only: diagram, trace, run controls, and the scenario/input
 *   editor. No handler editors, no model editor, no brain picker; the "Open full
 *   page" link carries those. Meant for a marketing page, where the job is to
 *   make the process concrete in seconds rather than invite a reading session.
 */
export type EmbedView = "full" | "compact";

/** Reads `?view=compact`. Only meaningful alongside `?embed=1`. */
export function embedView(search: string = location.search): EmbedView {
  return new URLSearchParams(search).get("view") === "compact"
    ? "compact"
    : "full";
}

/**
 * Reads `?autostart=1` — press Run on the reader's behalf once the example is
 * on screen and able to run.
 *
 * Opt-in rather than implied by `?embed=1`: a docs page inlining an example to
 * be read alongside prose does not necessarily want it moving, and a host that
 * does want it can say so.
 */
export function isAutostart(search: string = location.search): boolean {
  return new URLSearchParams(search).get("autostart") === "1";
}

/** Builds the absolute path (including base path) for the gallery. */
export function galleryPath(): string {
  return basePath();
}

/** Builds the absolute path (including base path) for a single example. */
export function examplePath(id: string): string {
  return `${basePath()}examples/${encodeURIComponent(id)}`;
}

/**
 * Query parameter the site-root `404.html` uses to hand a deep-linked preview
 * path back to the preview's own build. Shared with the shim that writes it —
 * see `spaFallback404` in vite.config.ts.
 */
export const HANDOFF_PARAM = "p";

/**
 * Rewrites `<base>/?p=/examples/x` back to `<base>/examples/x` in the address
 * bar, undoing the site-root `404.html` handoff before anything reads the
 * route.
 *
 * GitHub Pages answers *every* unmatched path with the site-root `404.html`,
 * including paths under `pr-preview/pr-<n>/` where a separate build lives — so
 * refreshing a preview deep link would otherwise boot the root (production)
 * bundle, which can't parse a preview path and lands on the gallery. The shim
 * in that document redirects to the preview's real `index.html` with the route
 * in `p`; this puts it back.
 *
 * Returns whether it rewrote anything, for the test.
 */
export function restoreHandoffRoute(): boolean {
  const params = new URLSearchParams(location.search);
  const handoff = params.get(HANDOFF_PARAM);
  if (!handoff) return false;

  // Test what the URL parser will see, not the raw value: it strips tab, LF
  // and CR before parsing, so `/<TAB>/evil.example` slips past a literal `//`
  // check and only then reads as protocol-relative.
  const candidate = handoff.replace(/[\t\n\r]/g, "");
  if (
    !candidate.startsWith("/") ||
    candidate.startsWith("//") ||
    candidate.startsWith("/\\")
  )
    return false;

  params.delete(HANDOFF_PARAM);

  // Nothing here may throw: this runs before the first render, so an
  // unhandled error would leave the app unmounted rather than merely
  // mis-routed.
  try {
    const base = new URL(basePath(), location.href);
    const target = new URL(candidate.slice(1), base);
    // `replaceState` rejects a cross-origin URL, which an absolute BASE_URL
    // (assets on a CDN) would produce.
    if (target.origin !== location.origin) return false;
    target.search = params.toString();
    target.hash = location.hash;
    history.replaceState(null, "", target);
    return true;
  } catch {
    return false;
  }
}

/**
 * Navigates client-side (no full reload) to `path`, preserving `search`/`hash`
 * unless explicitly overridden, and notifies listeners (see `useRoute`).
 */
export function navigate(
  path: string,
  opts: { search?: string; hash?: string; replace?: boolean } = {},
): void {
  const url = new URL(location.href);
  url.pathname = path;
  url.search = opts.search ?? url.search;
  if (opts.hash !== undefined) url.hash = opts.hash;
  if (opts.replace) history.replaceState(history.state, "", url);
  else history.pushState(history.state, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
