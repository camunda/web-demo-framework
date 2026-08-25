/**
 * Tolerant parsing of a small model's reply.
 *
 * Adapted from `camunda/seed-export-compliance-agent-demo`. The tolerance is
 * deliberately one-sided: we work hard to *find* the names a model stated, and
 * not at all to *correct* them. An invented tool name resolves to nothing and
 * the hallucination stays visible in the run — that's the honest demo.
 */

/** Pull the first balanced `{…}` block out of a reply and parse it. */
export function extractJson(text: string): Record<string, unknown> | null {
  const start = text.indexOf("{");
  if (start < 0) return null;
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    if (text[i] === "{") depth++;
    else if (text[i] === "}") {
      depth--;
      if (depth === 0) {
        try {
          const parsed: unknown = JSON.parse(text.slice(start, i + 1));
          return typeof parsed === "object" &&
            parsed !== null &&
            !Array.isArray(parsed)
            ? (parsed as Record<string, unknown>)
            : null;
        } catch {
          return null;
        }
      }
    }
  }
  return null;
}

export function shorten(text: string, max = 220): string {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max - 1)}…` : clean;
}

/** One tool the model asked for, as stated. */
export interface StatedCall {
  name: string;
  args: Record<string, unknown>;
  /** The model's plain-English rationale for this call, when it gave one. */
  reason?: string;
}

function argsOf(rec: Record<string, unknown>): Record<string, unknown> {
  const raw = rec.arguments ?? rec.args ?? rec.parameters ?? rec.input;
  return raw && typeof raw === "object" && !Array.isArray(raw)
    ? (raw as Record<string, unknown>)
    : {};
}

/** The model's stated rationale for a call, tolerating the field names it drifts to. */
function reasonOf(rec: Record<string, unknown>): string | undefined {
  const raw = rec.reason ?? rec.why ?? rec.rationale ?? rec.thought ?? rec.explanation;
  return typeof raw === "string" && raw.trim() ? raw.trim() : undefined;
}

/**
 * Extract the tool calls from a parsed reply, tolerating the shapes small
 * models drift into: `{"tool":"x","arguments":{…}}`, `{"tools":["a","b"]}`,
 * `{"tool_calls":[{"name":"a","args":{…}}]}`, or just the first array they
 * think of. Names are returned verbatim.
 */
export function collectToolCalls(
  json: Record<string, unknown> | null,
): StatedCall[] {
  if (!json) return [];

  // Single-call shape first — what we ask for, and what small models manage.
  const single = json.tool ?? json.name ?? json.action;
  if (typeof single === "string" && single.trim())
    return [{ name: single.trim(), args: argsOf(json), reason: reasonOf(json) }];

  const preferred = json.tools ?? json.tool_calls ?? json.toolset ?? json.actions;
  const arr = Array.isArray(preferred)
    ? preferred
    : (Object.values(json).find((v): v is unknown[] => Array.isArray(v)) ?? []);

  const calls: StatedCall[] = [];
  for (const item of arr) {
    if (typeof item === "string") {
      if (item.trim()) calls.push({ name: item.trim(), args: {} });
    } else if (item && typeof item === "object") {
      const rec = item as Record<string, unknown>;
      const label = rec.name ?? rec.tool ?? rec.id ?? rec.function;
      if (typeof label === "string" && label.trim())
        calls.push({ name: label.trim(), args: argsOf(rec), reason: reasonOf(rec) });
    }
  }
  return calls;
}

/** True when the reply says the agent considers itself finished. */
export function saysDone(json: Record<string, unknown> | null): boolean {
  if (!json) return false;
  const done = json.done ?? json.finished ?? json.complete;
  if (typeof done === "boolean") return done;
  if (typeof done === "string") return done.toLowerCase() === "true";
  return false;
}
