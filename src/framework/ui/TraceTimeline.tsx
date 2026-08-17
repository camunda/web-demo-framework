import { useEffect, useMemo, useRef, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@camunda/design-system";
import type { TraceEntry } from "../types";

/**
 * The activity log, told as a story instead of a flat stack of lines — the
 * point of an agentic run: a reader watching the model choose a tool, get a
 * result, and change its mind.
 *
 * Grouping is derived from `TraceEntry.turn` (an additive field — see
 * `types.ts`): consecutive entries sharing a turn number become one card
 * showing that turn's raw LLM reply, each tool it activated (with the
 * arguments supplied), and — once it lands — what that tool returned. Entries
 * with no `turn` (process start, a human task, the final outcome, and every
 * entry in a non-agentic example) render as plain rows in their original
 * order, so an example with no agent looks exactly like the flat log used to.
 */

export interface TraceLogLine extends TraceEntry {
  id: number;
}

/** The bits of `ElementStatDto` (see `@nanobpm/bojtos-kit`) this view reads. */
export interface ElementStatLike {
  elementId: string;
  completed: number;
  active?: number;
}

/** The bits of `IncidentDto` this view reads. */
export interface IncidentLike {
  elementId: string;
  reason: string;
}

interface TurnGroup {
  turn: number;
  entries: TraceLogLine[];
}

type Row = TraceLogLine | TurnGroup;

function isTurnGroup(row: Row): row is TurnGroup {
  return (row as TurnGroup).entries !== undefined;
}

/** Group consecutive same-turn entries; everything else stays a flat row. */
function buildRows(log: TraceLogLine[]): Row[] {
  const rows: Row[] = [];
  let current: TurnGroup | null = null;
  for (const entry of log) {
    if (entry.turn !== undefined) {
      if (current && current.turn === entry.turn) {
        current.entries.push(entry);
      } else {
        current = { turn: entry.turn, entries: [entry] };
        rows.push(current);
      }
    } else {
      current = null;
      rows.push(entry);
    }
  }
  return rows;
}

function safeStringify(value: unknown): string {
  // Preserve `undefined`/`null` explicitly rather than folding `undefined`
  // into `{}` — a handler/tool that actually returned `undefined` should
  // show that, not an empty object it never produced.
  if (value === undefined) return "undefined";
  try {
    return JSON.stringify(value);
  } catch {
    return "[unserializable value]";
  }
}

function ToolStep({
  activation,
  result,
  labelFor,
}: {
  activation: TraceLogLine;
  result: TraceLogLine | undefined;
  labelFor: (elementId: string) => string;
}) {
  const elementId = activation.elementId ?? "";
  return (
    <div className="timeline-tool">
      <div className="timeline-tool-head">
        <Badge variant="info">tool</Badge>
        <strong>{labelFor(elementId) || elementId}</strong>
        <code>{elementId}</code>
      </div>
      {activation.args !== undefined && Object.keys(activation.args).length > 0 && (
        <div className="timeline-kv">
          <span className="timeline-kv-label">arguments</span>
          <code>{safeStringify(activation.args)}</code>
        </div>
      )}
      <div className="timeline-kv">
        <span className="timeline-kv-label">returned</span>
        <code>
          {result
            ? safeStringify(result.result)
            : "— waiting for the job to complete —"}
        </code>
      </div>
    </div>
  );
}

function TurnCard({
  group,
  labelFor,
}: {
  group: TurnGroup;
  labelFor: (elementId: string) => string;
}) {
  const reply = group.entries.find((e) => e.kind === "llm");
  const activations = group.entries.filter(
    (e) => e.kind === "agent" && e.elementId,
  );
  const results = group.entries.filter(
    (e) => e.kind === "vars" && e.elementId,
  );
  const decisions = group.entries.filter(
    (e) => e.kind === "agent" && !e.elementId,
  );
  const errors = group.entries.filter((e) => e.kind === "error");
  // Entries a handler's own `trace()` call emits (kind "tool", including
  // compile.ts's "▶ label" started line) and any "vars" result that never
  // paired with an activation above (e.g. a non-agentic handler run inside
  // an otherwise agentic turn) would otherwise vanish once stamped with a
  // turn — render them as plain lines within the card, in original order.
  const activatedElementIds = new Set(activations.map((a) => a.elementId));
  const loose = group.entries
    .filter(
      (e) =>
        e.kind === "tool" ||
        (e.kind === "vars" && e.elementId && !activatedElementIds.has(e.elementId)),
    )
    .sort((a, b) => a.id - b.id);

  return (
    <div className="timeline-turn">
      <div className="timeline-turn-head">
        <Badge variant={reply?.pending ? "warning" : "neutral"}>
          Turn {group.turn}
        </Badge>
        {reply?.pending && <span className="timeline-pending">thinking…</span>}
      </div>

      {reply && (
        <blockquote className="timeline-reply">{reply.text}</blockquote>
      )}

      {decisions.map((d) => (
        <div key={d.id} className="timeline-note">
          {d.text}
        </div>
      ))}

      {activations.map((a) => (
        <ToolStep
          key={a.id}
          activation={a}
          result={results.find((r) => r.elementId === a.elementId)}
          labelFor={labelFor}
        />
      ))}

      {loose.map((e) => (
        <div key={e.id} className={`log-line log-${e.kind}`}>
          {e.pending ? "⏳ " : ""}
          {e.text}
        </div>
      ))}

      {errors.map((e) => (
        <div key={e.id} className="timeline-error">
          ⚠ {e.text}
        </div>
      ))}
    </div>
  );
}

export function TraceTimeline({
  log,
  elementStats = [],
  incidents = [],
  labelFor = (id) => id,
}: {
  log: TraceLogLine[];
  /** `snapshot.elementStats` — per-element completion counts, engine-side. */
  elementStats?: ElementStatLike[];
  /** Incidents on the current snapshot, with their reason. */
  incidents?: IncidentLike[];
  /** BPMN element id → human label, for both the timeline and the panels below. */
  labelFor?: (elementId: string) => string;
}) {
  const rows = useMemo(() => buildRows(log), [log]);
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep the newest step in view as the run grows, same as the flat log
  // this replaces.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [rows]);

  const copyJson = () => {
    const payload = {
      log: log.map(({ id: _id, ...rest }) => rest),
      elementStats,
      incidents,
    };
    const text = JSON.stringify(payload, null, 2);
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        })
        .catch(() => {
          // Clipboard access can be denied (permissions policy, insecure
          // context, an embed iframe without a clipboard-write allowance) —
          // fail quietly rather than surfacing a console/promise error for
          // what's a convenience action, not a run-blocking one.
        });
    }
  };

  return (
    <Card className="panel grow">
      <CardHeader>
        <CardTitle>Activity</CardTitle>
        <CardDescription>
          Agent turns, model replies, and tool calls — read top to bottom as a
          story.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="timeline-toolbar">
          <Button variant="secondary" size="sm" onClick={copyJson}>
            {copied ? "Copied!" : "Copy run as JSON"}
          </Button>
        </div>

        <div className="timeline" ref={scrollRef}>
          {rows.length === 0 ? (
            <div className="log-empty">Press Run or Step to start.</div>
          ) : (
            rows.map((row) =>
              isTurnGroup(row) ? (
                <TurnCard key={`turn-${row.turn}-${row.entries[0].id}`} group={row} labelFor={labelFor} />
              ) : (
                <div key={row.id} className={`log-line log-${row.kind}`}>
                  {row.pending ? "⏳ " : ""}
                  {row.text}
                </div>
              ),
            )
          )}
        </div>

        {(elementStats.length > 0 || incidents.length > 0) && (
          <div className="timeline-engine-view">
            {elementStats.length > 0 && (
              <div className="timeline-stats">
                <span className="timeline-kv-label">Element completion</span>
                <ul>
                  {elementStats
                    .filter((s) => s.completed > 0 || (s.active ?? 0) > 0)
                    .map((s) => (
                      <li key={s.elementId}>
                        <code>{labelFor(s.elementId) || s.elementId}</code>{" "}
                        completed {s.completed}
                        {s.active ? `, ${s.active} active` : ""}
                      </li>
                    ))}
                </ul>
              </div>
            )}
            {incidents.length > 0 && (
              <div className="timeline-incidents">
                <span className="timeline-kv-label">Incidents</span>
                <ul>
                  {incidents.map((inc, i) => (
                    <li key={`${inc.elementId}-${i}`}>
                      <code>{labelFor(inc.elementId) || inc.elementId}</code> —{" "}
                      {inc.reason}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
