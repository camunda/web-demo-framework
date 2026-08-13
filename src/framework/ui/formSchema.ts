/**
 * Schema-shaped helpers with no `@bpmn-io/form-js` dependency.
 *
 * Split out of `FormRenderer.tsx` so the eager path can seed a form's default
 * values (and type a schema) without dragging form-js — and its luxon /
 * flatpickr / dompurify / marked / lezer dependency cluster — onto the
 * initial-load bundle. `FormRenderer` itself is behind a `lazy()` boundary in
 * `ExampleRunner.tsx`; importing anything from that module eagerly defeats it.
 */

/** Opaque — the exact shape is `@bpmn-io/form-js`'s schema JSON. */
export type FormSchema = Record<string, unknown>;

interface ComponentNode {
  key?: unknown;
  components?: unknown;
}

function isComponentNode(value: unknown): value is ComponentNode {
  return typeof value === "object" && value !== null;
}

/** Every field `key` in the schema, walking nested `components` (e.g. groups). */
export function collectKeys(schema: FormSchema): Set<string> {
  const keys = new Set<string>();
  const visit = (node: unknown) => {
    if (!isComponentNode(node)) return;
    if (typeof node.key === "string") keys.add(node.key);
    if (Array.isArray(node.components)) node.components.forEach(visit);
  };
  visit(schema);
  return keys;
}

/** Seed values for a schema, from each field's `defaultValue`. */
export function formDefaults(schema: FormSchema): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  const visit = (node: unknown) => {
    if (!isComponentNode(node)) return;
    if (typeof node.key === "string" && "defaultValue" in node) {
      out[node.key] = (node as { defaultValue?: unknown }).defaultValue ?? "";
    }
    if (Array.isArray(node.components)) node.components.forEach(visit);
  };
  visit(schema);
  return out;
}
