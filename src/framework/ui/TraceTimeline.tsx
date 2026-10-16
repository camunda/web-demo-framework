import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Button } from "@camunda/design-system";
import { CollapsibleCard } from "./CollapsibleCard";
import { usePersistentDisclosure } from "./usePersistentDisclosure";
import type { TraceEntry } from "../types";
import { callKey, type CallOutcome } from "../toolCalls";

/**
 * The activity log, told as a story instead of a flat stack of lines — the
 * point of an agentic run: a reader watching the model choose a tool, get a
 * result, and change its mind.
 *
 * Grouping is derived from `TraceEntry.turn` and `agentId` (additive fields —
 * see `types.ts`): every entry of one agent turn becomes one card — an
 * *iteration*, numbered the way Operate numbers them ("1. iteration") —
 * showing the model's reply, each tool it activated, and that tool's input
 * beside its output. Entries
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
  agentId?: string;
  entries: TraceLogLine[];
}

type Row = TraceLogLine | TurnGroup;

function isTurnGroup(row: Row): row is TurnGroup {
  return (row as TurnGroup).entries !== undefined;
}

/**
 * One card per host iteration, placed where that iteration began; everything
 * else stays a flat row. An iteration's entries need not be adjacent: two
 * hosts running at once interleave, and a tool's result can land after the
 * other host has moved on.
 */
function buildRows(log: TraceLogLine[]): Row[] {
  const rows: Row[] = [];
  const groups = new Map<string, TurnGroup>();
  for (const entry of log) {
    if (entry.turn === undefined) {
      rows.push(entry);
      continue;
    }
    const key = `${entry.agentId ?? ""}#${entry.turn}`;
    const group = groups.get(key);
    if (group) {
      group.entries.push(entry);
    } else {
      const created: TurnGroup = { turn: entry.turn, agentId: entry.agentId, entries: [entry] };
      groups.set(key, created);
      rows.push(created);
    }
  }
  return rows;
}

function safeStringify(value: unknown, space?: number): string {
  // Preserve `undefined`/`null` explicitly rather than folding `undefined`
  // into `{}` — a handler/tool that actually returned `undefined` should
  // show that, not an empty object it never produced.
  if (value === undefined) return "undefined";
  try {
    return JSON.stringify(value, null, space);
  } catch {
    return "[unserializable value]";
  }
}

function ToolStep({
  activation,
  result,
  notes,
  outcome,
  labelFor,
}: {
  activation: TraceLogLine;
  result: TraceLogLine | undefined;
  /** The tool handler's own `trace()` lines. */
  notes: TraceLogLine[];
  /** What the engine says became of this call, when no job reported back. */
  outcome: CallOutcome | undefined;
  labelFor: (elementId: string) => string;
}) {
  const elementId = activation.elementId ?? "";
  const label = labelFor(elementId) || elementId;
  return (
    <article className="timeline-tool" aria-label={`Tool call: ${label}`}>
      <header className="timeline-tool-head">
        <span className="timeline-tool-icon" aria-hidden="true">
          ⚙
        </span>
        <strong>{label}</strong>
        {label !== elementId && <code>{elementId}</code>}
      </header>
      <div className="timeline-io">
        <div className="timeline-io-col">
          <span className="timeline-io-label">Input</span>
          <pre>{safeStringify(activation.args ?? {}, 2)}</pre>
        </div>
        <div className="timeline-io-col">
          <span className="timeline-io-label">Output</span>
          {result ? (
            <pre>{safeStringify(result.result, 2)}</pre>
          ) : outcome === "completed" || outcome === "canceled" ? (
            // A compound tool (a call activity or sub-process) completes in
            // the engine without any one job handing back a result; a call the
            // agent's end or an interrupt cut short never reports one at all.
            <pre className="timeline-io-muted">{outcome}</pre>
          ) : (
            <pre className="timeline-io-pending">running…</pre>
          )}
        </div>
      </div>
      {notes.length > 0 && (
        <ul className="timeline-tool-notes">
          {notes.map((n) => (
            <li key={n.id}>{n.text.trim()}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

function IterationCard({
  group,
  labelFor,
  showHost,
  callOutcomes,
}: {
  group: TurnGroup;
  labelFor: (elementId: string) => string;
  /** More than one agent host ran, so say whose iteration this is. */
  showHost: boolean;
  callOutcomes: ReadonlyMap<string, CallOutcome>;
}) {
  const reply = group.entries.find((e) => e.kind === "llm");
  const activations = group.entries.filter(
    (e) => e.kind === "agent" && e.elementId,
  );
  const decisions = group.entries.filter(
    (e) => e.kind === "agent" && !e.elementId,
  );
  const errors = group.entries.filter((e) => e.kind === "error");
  /**
   * The job entries that belong to one call: by its `call` number — the
   * identity an activation hands to the job it creates, so it holds when the
   * capped log has dropped an earlier call or a sequence flow ran the same
   * tool in between. Entries without call numbers pair the k-th activation
   * with the k-th job key in this iteration, or failing that, by order.
   */
  const entriesOf = (activation: TraceLogLine): TraceLogLine[] => {
    const own = group.entries.filter(
      (e) => e.elementId === activation.elementId && (e.kind === "tool" || e.kind === "vars"),
    );
    if (activation.call !== undefined) return own.filter((e) => e.call === activation.call);
    const k = activations
      .filter((a) => a.elementId === activation.elementId)
      .indexOf(activation);
    const keys = [...new Set(own.flatMap((e) => (e.jobKey ? [e.jobKey] : [])))];
    if (keys.length) return own.filter((e) => e.jobKey === keys[k]);
    const result = own.filter((e) => e.kind === "vars")[k];
    return own.filter((e) => (e.kind === "tool" && k === 0) || e === result);
  };
  const calls = activations.map((activation) => {
    const mine = entriesOf(activation);
    return {
      activation,
      mine,
      result: mine.find((e) => e.kind === "vars"),
      // The "▶ label" started line only repeats the card's own header.
      notes: mine.filter((e) => e.kind === "tool" && !e.text.startsWith("▶ ")),
    };
  });
  // Anything stamped with this iteration that belongs to no call — a task
  // listener on a tool, a task inside a compound tool — stays visible as a
  // plain line in the card, in original order.
  const used = new Set(calls.flatMap((c) => c.mine.map((e) => e.id)));
  const loose = group.entries
    .filter((e) => (e.kind === "tool" || e.kind === "vars" || e.kind === "step") && !used.has(e.id))
    .sort((a, b) => a.id - b.id);
  const host = showHost && group.agentId ? labelFor(group.agentId) || group.agentId : null;

  return (
    <section className="timeline-iteration">
      <header className="timeline-iteration-head">
        <span className="timeline-iteration-label">
          {host && <span className="timeline-iteration-host">{host} · </span>}
          {group.turn}. iteration
        </span>
        {reply?.pending && (
          <span className="timeline-thinking">
            <span>Thinking...</span>
          </span>
        )}
      </header>

      {reply && (
        <div className="timeline-assistant">
          <span className="timeline-role">Assistant</span>
          <blockquote className="timeline-reply">{reply.text}</blockquote>
        </div>
      )}

      {decisions.map((d) => (
        <div key={d.id} className="timeline-note">
          {d.text}
        </div>
      ))}

      {calls.map(({ activation, result, notes }) => (
        <ToolStep
          key={activation.id}
          activation={activation}
          result={result}
          notes={notes}
          outcome={callOutcomes.get(callKey(activation) ?? "")}
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
    </section>
  );
}

const NO_OUTCOMES: ReadonlyMap<string, CallOutcome> = new Map();

export function TraceTimeline({
  log,
  elementStats = [],
  incidents = [],
  labelFor = (id) => id,
  variables,
  decisions,
  hasAgent = false,
  callOutcomes = NO_OUTCOMES,
}: {
  log: TraceLogLine[];
  /** `snapshot.elementStats` — per-element completion counts, engine-side. */
  elementStats?: ElementStatLike[];
  /** Incidents on the current snapshot, with their reason. */
  incidents?: IncidentLike[];
  /** BPMN element id → human label, for both the timeline and the panels below. */
  labelFor?: (elementId: string) => string;
  /** Live instance payload, rendered as this panel's footer. */
  variables?: ReactNode;
  /** Evaluated DMN decisions, rendered beneath the variables when any ran. */
  decisions?: ReactNode;
  /** Whether the model has an AI Agent host — decides how this panel names itself. */
  hasAgent?: boolean;
  /** What became of each agent tool call, by `callKey` — see `toolCalls.ts`. */
  callOutcomes?: ReadonlyMap<string, CallOutcome>;
}) {
  const rows = useMemo(() => buildRows(log).reverse(), [log]);
  const showHost = useMemo(
    () => new Set(log.filter((e) => e.turn !== undefined).map((e) => e.agentId)).size > 1,
    [log],
  );
  const [copied, setCopied] = useState(false);
  const [engineViewOpen, setEngineViewOpen] = usePersistentDisclosure(
    "engine-view",
    false,
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  // Newest is on top, so keep the top in view as the run grows.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = 0;
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
    <CollapsibleCard
      sectionId="activity"
      className="grow activity-card"
      title={hasAgent ? "Agent activity" : "Activity"}
      description={
        hasAgent
          ? "Each iteration of the agent loop: what it decided, and every tool call's input and output — newest at the top."
          : "Every step the engine took — newest at the top."
      }
    >
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
                <IterationCard
                  key={`iteration-${row.agentId ?? ""}-${row.turn}-${row.entries[0].id}`}
                  group={row}
                  labelFor={labelFor}
                  showHost={showHost}
                  callOutcomes={callOutcomes}
                />
              ) : (
                <div key={row.id} className={`log-line log-${row.kind}`}>
                  {row.pending ? "⏳ " : ""}
                  {row.text}
                </div>
              ),
            )
          )}
        </div>

        {variables}

        {decisions}

        {(elementStats.length > 0 || incidents.length > 0) && (
          <details
            className="engine-view"
            open={engineViewOpen}
            onToggle={(e) => setEngineViewOpen(e.currentTarget.open)}
          >
            <summary>
              Element completion
              {incidents.length > 0 &&
                ` · ${incidents.length} incident${incidents.length === 1 ? "" : "s"}`}
            </summary>
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
          </details>
        )}
      </CollapsibleCard>
  );
}
