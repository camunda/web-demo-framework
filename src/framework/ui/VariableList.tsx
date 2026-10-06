import type { ReactNode } from "react";

/**
 * Instance variables as a key/value list instead of raw JSON: nested objects
 * and lists indent under their key, and strings lose their quotes.
 */
export function VariableList({ value }: { value: Record<string, unknown> }) {
  const entries = Object.entries(value);
  return (
    <div className="vars vars-list">
      {entries.length === 0 ? (
        <p className="vars-none">No variables yet.</p>
      ) : (
        <Entries entries={entries} />
      )}
    </div>
  );
}

function Entries({ entries }: { entries: [string, unknown][] }) {
  return (
    <dl>
      {entries.map(([key, v]) =>
        isBranch(v) ? (
          <div key={key} className="vars-row vars-row-nested">
            <dt>{key}</dt>
            <dd>
              <Entries entries={childEntries(v)} />
            </dd>
          </div>
        ) : (
          <div key={key} className="vars-row">
            <dt>{key}</dt>
            <dd>{scalar(v)}</dd>
          </div>
        ),
      )}
    </dl>
  );
}

function isBranch(v: unknown): v is object {
  return typeof v === "object" && v !== null && Object.keys(v).length > 0;
}

// 1-based, as FEEL indexes lists.
function childEntries(v: object): [string, unknown][] {
  return Array.isArray(v)
    ? v.map((item, i) => [String(i + 1), item])
    : Object.entries(v);
}

function scalar(v: unknown): ReactNode {
  if (v === null || v === undefined) return <span className="vars-muted">{String(v)}</span>;
  if (v === "") return <span className="vars-muted">(empty)</span>;
  if (Array.isArray(v)) return <span className="vars-muted">(empty list)</span>;
  if (typeof v === "object") return <span className="vars-muted">(empty)</span>;
  return String(v);
}
