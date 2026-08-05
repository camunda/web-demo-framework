import { evaluate } from "feelin";
import {
  Checkbox,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@camunda/design-system";

/**
 * Renders a Camunda `.form` schema — the same JSON the model's `formId` points
 * at — so an example's start form and user-task forms come from the model
 * instead of being hand-built per example.
 *
 * This is a deliberate proof-of-concept subset: the field types the Camunda
 * examples actually use, plus `{{variable}}` substitution in text blocks. The
 * productionisation path is `@bpmn-io/form-js`, which renders the full schema
 * (and is what Camunda's own console uses) — at the cost of a preact-dedupe
 * dance in Vite that isn't worth it to prove the seam.
 */

/** Stand-in for an option whose real value is "" — Radix reserves that. */
const EMPTY_OPTION = "__empty__";

interface FormComponent {
  id?: string;
  type?: string;
  key?: string;
  label?: string;
  description?: string;
  text?: string;
  defaultValue?: unknown;
  values?: { label?: string; value?: string }[];
  validate?: { required?: boolean };
}

export interface FormSchema {
  components?: FormComponent[];
}

/**
 * Resolve a `{{…}}` template against the live payload using **real FEEL**.
 *
 * `feelin` is the engine bpmn-io's own form-js templating runs on, so a Camunda
 * form's expressions — `{{if markerRecord = null then "none" else
 * markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ")"}}` —
 * evaluate here exactly as they would in Tasklist.
 */
function interpolate(text: string, vars: Record<string, unknown>): string {
  return text.replace(/\{\{([^}]+)\}\}/g, (whole, expr: string) => {
    let value: unknown;
    try {
      const result: unknown = evaluate(expr.trim(), vars);
      // feelin 7 returns `{ value, warnings }`; older releases return the value.
      value =
        result && typeof result === "object" && "value" in result
          ? (result as { value: unknown }).value
          : result;
    } catch {
      // A malformed expression is the form author's bug — show it rather than
      // silently blanking the field.
      return whole;
    }
    if (value === null || value === undefined) return "—";
    return typeof value === "object" ? JSON.stringify(value) : String(value);
  });
}

/** Very small markdown subset: `# heading`, `**bold**`, `*` bullets. */
function renderText(text: string, key: string) {
  return (
    <div className="form-text" key={key}>
      {text.split("\n").map((line, i) => {
        const bold = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j}>{part.slice(2, -2)}</strong>
          ) : (
            <span key={j}>{part}</span>
          ),
        );
        if (line.startsWith("# "))
          return <h4 key={i}>{line.replace(/^#\s+/, "")}</h4>;
        if (line.startsWith("* "))
          return <li key={i}>{line.replace(/^\*\s+/, "")}</li>;
        if (!line.trim()) return <br key={i} />;
        return <p key={i}>{bold}</p>;
      })}
    </div>
  );
}

export interface FormRendererProps {
  schema: FormSchema;
  /** Current field values, keyed by the schema's `key`. */
  values: Record<string, unknown>;
  onChange(key: string, value: unknown): void;
  /** Payload used to resolve `{{…}}` in text blocks. */
  context?: Record<string, unknown>;
  disabled?: boolean;
}

export function FormRenderer({
  schema,
  values,
  onChange,
  context = {},
  disabled = false,
}: FormRendererProps) {
  return (
    <div className="form">
      {(schema.components ?? []).map((c, i) => {
        const id = c.id ?? `field-${i}`;
        const key = c.key ?? "";
        const value = key in values ? values[key] : c.defaultValue;

        switch (c.type) {
          case "text":
            return renderText(interpolate(c.text ?? "", context), id);

          case "textfield":
          case "number":
            return (
              <div className="field" key={id}>
                <Label htmlFor={id}>{c.label}</Label>
                <Input
                  id={id}
                  type={c.type === "number" ? "number" : "text"}
                  value={value == null ? "" : String(value)}
                  disabled={disabled}
                  onChange={(e) =>
                    onChange(
                      key,
                      c.type === "number"
                        ? e.target.value === ""
                          ? null
                          : Number(e.target.value)
                        : e.target.value,
                    )
                  }
                />
                {c.description && <p className="field-hint">{c.description}</p>}
              </div>
            );

          case "textarea":
            return (
              <div className="field" key={id}>
                <Label htmlFor={id}>{c.label}</Label>
                <Textarea
                  id={id}
                  rows={3}
                  value={value == null ? "" : String(value)}
                  disabled={disabled}
                  onChange={(e) => onChange(key, e.target.value)}
                />
                {c.description && <p className="field-hint">{c.description}</p>}
              </div>
            );

          case "checkbox":
            return (
              <div className="field radio-row" key={id}>
                <Checkbox
                  id={id}
                  checked={Boolean(value)}
                  disabled={disabled}
                  onCheckedChange={(v: boolean | string) => onChange(key, !!v)}
                />
                <Label htmlFor={id}>{c.label}</Label>
              </div>
            );

          case "radio":
            return (
              <div className="field" key={id}>
                <Label>{c.label}</Label>
                <RadioGroup
                  value={value == null ? "" : String(value)}
                  onValueChange={(v: string) => onChange(key, v)}
                  disabled={disabled}
                >
                  {(c.values ?? []).map((o, j) => (
                    <div className="radio-row" key={j}>
                      <RadioGroupItem value={o.value ?? ""} id={`${id}-${j}`} />
                      <Label htmlFor={`${id}-${j}`}>{o.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
                {c.description && <p className="field-hint">{c.description}</p>}
              </div>
            );

          case "select":
            return (
              <div className="field" key={id}>
                <Label htmlFor={id}>{c.label}</Label>
                <Select
                  value={
                    value == null || value === ""
                      ? EMPTY_OPTION
                      : String(value)
                  }
                  onValueChange={(v: string) =>
                    onChange(key, v === EMPTY_OPTION ? "" : v)
                  }
                  disabled={disabled}
                >
                  <SelectTrigger id={id}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(c.values ?? []).map((o, j) => (
                      <SelectItem
                        key={j}
                        // A Camunda form may offer an option whose value is ""
                        // (the "write your own" escape hatch). Radix reserves
                        // the empty string for "cleared", so stand in for it.
                        value={o.value ? o.value : EMPTY_OPTION}
                      >
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {c.description && <p className="field-hint">{c.description}</p>}
              </div>
            );

          default:
            return (
              <p className="field-hint" key={id}>
                (unsupported field type <code>{c.type}</code>)
              </p>
            );
        }
      })}
    </div>
  );
}

/** Seed values for a schema, from each field's `defaultValue`. */
export function formDefaults(schema: FormSchema): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const c of schema.components ?? []) {
    if (c.key) out[c.key] = c.defaultValue ?? "";
  }
  return out;
}
