import { useCallback, useEffect, useState } from "react";

/**
 * Open/closed state for a collapsible section, persisted to `localStorage` so a
 * reader's layout choices survive a page reload. State is namespaced per
 * `sectionId` — collapsing one panel never touches another — under a single
 * key prefix, the one canonical place this feature writes.
 */
const STORAGE_PREFIX = "wdf:section:";

export function storageKeyFor(sectionId: string): string {
  return STORAGE_PREFIX + sectionId;
}

/**
 * Reads the stored open state. Returns `undefined` (not a default) when the
 * section has never been toggled or storage is unavailable, so the caller can
 * fall back to its own `defaultOpen` rather than a hard-coded one.
 */
function readStored(sectionId: string): boolean | undefined {
  try {
    const raw = window.localStorage.getItem(storageKeyFor(sectionId));
    if (raw === "1") return true;
    if (raw === "0") return false;
    // Missing, or an unrecognized/legacy value we never wrote: report "no
    // preference stored" so the caller falls back to `defaultOpen`, rather than
    // silently forcing the panel closed.
    return undefined;
  } catch {
    // Storage can throw in private-mode / disabled-cookie contexts — treat it
    // as "no preference stored" rather than crashing the runner.
    return undefined;
  }
}

function writeStored(sectionId: string, open: boolean): void {
  try {
    window.localStorage.setItem(storageKeyFor(sectionId), open ? "1" : "0");
  } catch {
    // Persistence is best-effort; a failed write must not break toggling.
  }
}

/**
 * `useState`-shaped disclosure state that writes every change through to
 * `localStorage`. On mount (and whenever `sectionId` changes) it re-hydrates
 * from storage, falling back to `defaultOpen` for a first-ever visit.
 */
export function usePersistentDisclosure(
  sectionId: string,
  defaultOpen = true,
): readonly [boolean, (open: boolean) => void] {
  const [open, setOpen] = useState<boolean>(
    () => readStored(sectionId) ?? defaultOpen,
  );

  // Re-hydrate when the section identity changes: the same component instance
  // is reused across examples, so a fresh id must adopt that id's saved state.
  useEffect(() => {
    setOpen(readStored(sectionId) ?? defaultOpen);
  }, [sectionId, defaultOpen]);

  const setOpenPersistent = useCallback(
    (next: boolean) => {
      setOpen(next);
      writeStored(sectionId, next);
    },
    [sectionId],
  );

  return [open, setOpenPersistent] as const;
}
