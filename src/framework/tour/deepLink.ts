/**
 * The `?tour=<id>` deep link (see the epic's issue #20): a plain query
 * parameter, deliberately separate from `../deepLink.ts`'s `#s=` hash blob
 * (which carries incidental state like the selected brain). A tour is a
 * one-shot "start this on load" instruction, not state to keep in sync as
 * the reader interacts — a hash-replace on every step would also fight
 * `../routing.ts`'s own `navigate()` calls. Reading it as a bare query
 * parameter keeps this additive and easy to merge alongside whatever
 * routing/deep-link mechanism another concurrent task builds: it's just
 * another `URLSearchParams` entry, ignored by any code that doesn't know
 * about it.
 */

/** Reads the `tour` query parameter from `search` (defaults to the current URL). */
export function readTourParam(search: string = location.search): string | null {
  return new URLSearchParams(search).get("tour");
}

/** Builds a `?tour=<id>` query string suitable for a docs page to link to. */
export function tourParam(id: string): string {
  return `?tour=${encodeURIComponent(id)}`;
}
