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
  // Same-origin, absolute-path values only: `//evil.com` and `/\evil.com` are
  // both read as protocol-relative URLs by browsers, so a redirect built from
  // an attacker-supplied `?p=` could leave the origin.
  if (
    !handoff ||
    !handoff.startsWith("/") ||
    handoff.startsWith("//") ||
    handoff.startsWith("/\\")
  )
    return false;
  params.delete(HANDOFF_PARAM);
  const search = params.toString();
  history.replaceState(
    null,
    "",
    `${basePath()}${handoff.slice(1)}${search ? `?${search}` : ""}${location.hash}`,
  );
  return true;
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
