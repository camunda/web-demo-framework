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
