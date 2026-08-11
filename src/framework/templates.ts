/**
 * Prompts as editable assets.
 *
 * An agent's system/user prompt lives inside the BPMN model, inside a FEEL
 * string literal, inside an XML attribute, with newlines encoded as `&#10;`
 * and quotes as `&#34;` — the least approachable place in the repo to edit
 * the thing that's edited most. This module lets an example keep its prompt
 * text in a plain file (`prompts/*.md`), edited in its own tab like handler
 * code, and substituted into the model once, at deploy/parse time, so
 * `src/framework/model.ts` keeps reading resolved text exactly as it does
 * today — no parser change needed.
 *
 * Design lifted from jwulf/nano-ide's
 * `packages/urban/src/runtime/core/modules/templates.ts` (~150 lines, read
 * for the shape — this is an adaptation, not a copy): `{{ name }}`
 * double-brace placeholders (deliberately double, so they don't clash with
 * FEEL's single-brace context syntax `{ x: 1 }`); `name` is the file stem
 * (`prompts/review-round.md` → `{{review-round}}`); substitution happens
 * once, single-pass, non-recursive — a template whose own content contains
 * `{{...}}` is not re-expanded, because we build the whole output in one
 * `String.replace` pass over the *original* source.
 *
 * The one thing Urban doesn't have to handle: Urban assumes a prompt lives in
 * a `zeebe:header` — a plain XML attribute. This repo's models put the system
 * prompt inside a FEEL string literal instead, e.g.
 *
 *   <zeebe:input source="=&#34;You are a demo workflow assistant...&#34;" .../>
 *
 * XML-decoded that's `="You are a demo workflow assistant..."` — a FEEL
 * string literal. If a placeholder there is replaced with content containing
 * a bare `"`, an XML-attribute escaper (`&quot;`) decodes right back to `"`,
 * which terminates the FEEL string literal early and corrupts the model — it
 * fails as malformed FEEL at deploy time, not obviously as a prompt problem.
 * `xmlContextAt` below detects that specific position (inside an attribute
 * value, itself inside an `&#34;`-delimited FEEL string) and escapes for it
 * specifically: FEEL's own `\"` escape for quotes (which survives the later
 * `&#34;` → `"` XML decode intact), `&amp;` for ampersands, and `&#10;` for
 * newlines (XML attribute-value normalisation collapses a literal newline to
 * a space, so it must travel as an entity to survive).
 */

/** A resolved name → content map. Untrusted input (file stems), so callers
 *  must build this with {@link createTemplateMap}, never a literal object,
 *  to avoid `__proto__`/prototype-pollution surprises. */
export type TemplateMap = Record<string, string>;

export interface TemplateResolution {
  /** The source with every resolvable `{{name}}` placeholder substituted. */
  result: string;
  /**
   * Placeholder names referenced in the source with no matching template,
   * each named once even if referenced more than once. Left verbatim in
   * `result` — reported, not silently blanked.
   */
  unresolved: string[];
}

/** What kind of content is being substituted into, so escaping matches it. */
export type TemplateContentType = "xml" | "json";

// Deliberately excludes `.` and `/`: this repo's models already use
// `{{secrets.SOME_NAME}}` (e.g. `{{secrets.CAMUNDA_PROVIDED_LLM_API_ENDPOINT}}`)
// as inert documentation of what a real deployment would need to resolve —
// not something this module owns or should touch. Restricting template names
// to a plain identifier (letters, digits, `_`, `-`) means that syntax simply
// never matches here, rather than being reported as an unresolved template.
const PLACEHOLDER_RE = /\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;

/**
 * Merge one or more name→content maps into a single map safe to index with
 * untrusted (file-stem-derived) names. Sources merge in order — a later
 * source's key wins over an earlier one's, matching Urban's "manifest globs
 * first, then a programmatic map, later wins" rule. Built on
 * `Object.create(null)`, since template names come from file names / example
 * authors, not a trusted schema — a plain `{}` risks `__proto__` pollution if
 * a template were ever named that.
 */
export function createTemplateMap(...sources: Array<TemplateMap | undefined>): TemplateMap {
  const map: TemplateMap = Object.create(null);
  for (const source of sources) {
    if (!source) continue;
    for (const name of Object.keys(source)) {
      map[name] = source[name];
    }
  }
  return map;
}

/** `"prompts/review-round.md"` → `"review-round"` — the file stem, no directory or extension. */
export function templateNameFromPath(path: string): string {
  const stem = path.split("/").pop() ?? path;
  return stem.replace(/\.[^./]+$/, "");
}

function escapeXmlText(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Plain XML attribute value (not a FEEL literal): quotes and newlines need entities too. */
function escapeXmlAttribute(s: string): string {
  return escapeXmlText(s).replace(/"/g, "&quot;").replace(/\n/g, "&#10;").replace(/\t/g, "&#9;");
}

/**
 * A value landing inside a FEEL string literal that itself sits inside an
 * XML attribute already using `&#34;` entities as its FEEL-literal quote
 * delimiters (see module doc). The escaped output is inserted straight into
 * the raw XML text (not the DOM-decoded attribute value), so a literal `"`
 * character must never appear directly — the XML parser would read it as the
 * end of the (real-quoted) attribute, regardless of any FEEL-level backslash
 * next to it. So a quote becomes a backslash (FEEL's own escape) followed by
 * the `&#34;` *entity* (not a raw quote) — order matters: ampersand escaping
 * must run before any entity we introduce ourselves, or we'd double-escape
 * our own `&#10;`/`&#34;` into `&amp;#10;`/`&amp;#34;`. `<`/`>` are escaped
 * last (also after the `&amp;` pass, for the same reason): the value still
 * lands inside an XML attribute value, where a raw `<` is illegal XML and
 * would otherwise fail parsing/deploy.
 */
function escapeFeelLiteral(s: string): string {
  return s
    .replace(/\\/g, "\\\\") // FEEL backslash escape, first, on the caller's own backslashes only
    .replace(/&/g, "&amp;") // XML ampersand escape, before we introduce any entities ourselves
    .replace(/"/g, "\\&#34;") // FEEL's \" escape, quote itself as an XML entity, not a raw "
    .replace(/\n/g, "&#10;") // XML attribute-value normalisation would otherwise collapse this
    .replace(/\t/g, "&#9;")
    .replace(/</g, "&lt;") // still an XML attribute value: a raw `<` is illegal XML
    .replace(/>/g, "&gt;");
}

/** A JSON string value: the surrounding quotes already exist in the JSON, so escape only the body. */
function escapeJsonString(s: string): string {
  return JSON.stringify(s).slice(1, -1);
}

/**
 * Classify where `index` sits in `xml`: inside an XML attribute value that is
 * itself inside an `&#34;`-delimited FEEL string literal (`"feel-literal"`),
 * inside a plain XML attribute value (`"attribute"`), or in element text
 * content / outside any tag (`"text"`).
 */
export function xmlContextAt(xml: string, index: number): "feel-literal" | "attribute" | "text" {
  const lastLt = xml.lastIndexOf("<", index);
  const lastGt = xml.lastIndexOf(">", index);
  if (lastLt <= lastGt) return "text"; // no open tag reaches this position

  const sinceTag = xml.slice(lastLt, index);
  const quoteCount = (sinceTag.match(/"/g) ?? []).length;
  if (quoteCount % 2 === 0) return "text"; // inside the tag, but between attributes

  // Inside an attribute value: count &#34; entities since that attribute's
  // opening real quote to see whether we're also inside a FEEL string literal.
  const lastRealQuote = sinceTag.lastIndexOf('"');
  const attrValueSoFar = sinceTag.slice(lastRealQuote + 1);
  const feelQuoteCount = (attrValueSoFar.match(/&#34;/g) ?? []).length;
  return feelQuoteCount % 2 === 1 ? "feel-literal" : "attribute";
}

/**
 * Substitute every `{{name}}` placeholder in `source` against `templates`,
 * once, in a single pass over the original text (so a template's own content
 * is never re-expanded). Escaping is content-type- and, for XML, position-
 * aware — see module doc. An unresolved placeholder is left verbatim in the
 * output and named in `unresolved`, rather than silently producing an empty
 * string.
 */
export function substituteTemplates(
  source: string,
  templates: TemplateMap,
  contentType: TemplateContentType = "xml",
): TemplateResolution {
  const unresolved: string[] = [];
  const seen = new Set<string>();

  const result = source.replace(PLACEHOLDER_RE, (match, rawName: string, offset: number) => {
    const name = rawName.trim();
    if (!Object.prototype.hasOwnProperty.call(templates, name)) {
      if (!seen.has(name)) {
        seen.add(name);
        unresolved.push(name);
      }
      return match;
    }

    const content = templates[name];
    if (contentType === "json") return escapeJsonString(content);

    const context = xmlContextAt(source, offset);
    if (context === "feel-literal") return escapeFeelLiteral(content);
    if (context === "attribute") return escapeXmlAttribute(content);
    return escapeXmlText(content);
  });

  return { result, unresolved };
}
