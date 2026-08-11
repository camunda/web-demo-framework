import type { BrainKind } from "./brains/types";

/**
 * Interesting state deep-linked into the URL hash, since there's no server to
 * hold it for us. Kept as a single JSON blob (base64url-ish via
 * `encodeURIComponent`) rather than one hash field per concern, so a future
 * addition doesn't need a new parsing scheme — just another key here.
 *
 * IMPORTANT scope limit (see issue #8 / #18): do NOT add an edited handler
 * *source code* field to this state. That turns reader-supplied code into
 * attacker-supplied, shareable code (`compile.ts` runs it with `new Function`
 * in the page's own origin) and must wait for the sandboxing work in
 * `src/framework/sandbox/` to cover it. This shape is deliberately structured
 * so that can slot in as an additional optional field later — it is simply
 * not implemented yet.
 */
export interface DeepLinkState {
  /** Which brain (`scripted` | `browser` | `endpoint`) to pre-select. */
  brain?: BrainKind;
}

const HASH_PREFIX = "#s=";

// Keep in sync with `BrainKind` in ./brains/types — used to sanitize
// hash-supplied values before they reach `useBrain.setKind(...)`.
const VALID_BRAIN_KINDS: readonly BrainKind[] = ["scripted", "browser", "endpoint"];

function isBrainKind(value: unknown): value is BrainKind {
  return (
    typeof value === "string" && (VALID_BRAIN_KINDS as readonly string[]).includes(value)
  );
}

function safeParse(raw: string): DeepLinkState {
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === "object") {
      const candidate = parsed as Record<string, unknown>;
      // Only lift out fields we know about, and only when they're valid —
      // a crafted hash (e.g. `#s={"brain":"not-a-kind"}`) must not flow
      // through untouched, since it can reach `BrainPanel`'s
      // `KINDS.find(...)!` and throw.
      const state: DeepLinkState = {};
      if (isBrainKind(candidate.brain)) state.brain = candidate.brain;
      return state;
    }
  } catch {
    // Malformed or foreign hash content — treat as "nothing deep-linked"
    // rather than throwing on every page load.
  }
  return {};
}

/** Reads deep-link state from the current `location.hash`, if any. */
export function readDeepLinkState(hash: string = location.hash): DeepLinkState {
  if (!hash.startsWith(HASH_PREFIX)) return {};
  let json: string;
  try {
    json = decodeURIComponent(hash.slice(HASH_PREFIX.length));
  } catch {
    return {};
  }
  return safeParse(json);
}

/** Serializes deep-link state to a `#s=...` hash fragment (no leading `#s=` if empty). */
export function encodeDeepLinkState(state: DeepLinkState): string {
  const entries = Object.entries(state).filter(([, v]) => v !== undefined);
  if (entries.length === 0) return "";
  return HASH_PREFIX + encodeURIComponent(JSON.stringify(Object.fromEntries(entries)));
}

/**
 * Merges `patch` into the current hash state and replaces the URL in place
 * (no new history entry — this tracks incidental state, not a navigation).
 */
export function patchDeepLinkState(patch: DeepLinkState): void {
  const next = { ...readDeepLinkState(), ...patch };
  const hash = encodeDeepLinkState(next);
  const url = new URL(location.href);
  url.hash = hash;
  history.replaceState(history.state, "", url);
}
