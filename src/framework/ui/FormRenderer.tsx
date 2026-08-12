import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { Form } from "@bpmn-io/form-js-viewer";
import "@bpmn-io/form-js-viewer/dist/assets/form-js.css";

/**
 * Renders a Camunda `.form` schema — the same JSON the model's `formId` points
 * at — via `@bpmn-io/form-js` (viewer only; no editor). This gets every field
 * type, real conditional visibility, and real validation for free, instead of
 * the small hand-rolled subset this component used to cover.
 *
 * `@bpmn-io/form-js-viewer`'s own `Form` class is framework-agnostic (attach
 * to a container, feed it a schema + data, listen for changes) — this
 * component is a thin React wrapper around it that keeps the same external
 * interface the rest of the runner already speaks: `schema` in, `values` out
 * via `onChange`, plus a `context` payload merged in for `{{…}}` templating.
 *
 * Known trap: form-js pins its own nested `preact`, while `diagram-js` (via
 * `bpmn-js`) resolves the hoisted one from a different dependency path. Two
 * copies means two independent render contexts and a crash reading
 * `undefined.context`. Fixed with `resolve.dedupe: ["preact"]` in
 * vite.config.ts — that holds for both `npm run dev` and `npm run build`,
 * which resolve dependencies differently.
 */

/** Opaque — the exact shape is `@bpmn-io/form-js`'s schema JSON. */
export type FormSchema = Record<string, unknown>;

export interface FormRendererHandle {
  /**
   * Runs full field validation against the form's current values and
   * returns whether it's valid. Call this synchronously right before acting
   * on a "submit"/"complete" affordance — `onValidityChange` alone is enough
   * to grey out a button, but this is the actual gate.
   */
  validate(): boolean;
}

export interface FormRendererProps {
  schema: FormSchema;
  /** Current field values, keyed by the schema's `key`. */
  values: Record<string, unknown>;
  onChange(key: string, value: unknown): void;
  /** Extra payload merged in (read-only) so `{{…}}` text blocks can reference it. */
  context?: Record<string, unknown>;
  disabled?: boolean;
  /**
   * Called whenever the rendered form's validity changes — after import and
   * after every field edit. Wire this to disable a host "Complete task"
   * button; a required field left empty must block completion.
   */
  onValidityChange?(valid: boolean): void;
}

interface ComponentNode {
  key?: unknown;
  components?: unknown;
}

function isComponentNode(value: unknown): value is ComponentNode {
  return typeof value === "object" && value !== null;
}

/**
 * `JSON.stringify` with object keys sorted, so two payloads with the same
 * content but different key insertion order (form-js's internal data model
 * vs. this component's own `{ ...context, ...values }`) still compare equal.
 */
function stableStringify(value: unknown): string {
  return JSON.stringify(value, (_key, val) => {
    if (val && typeof val === "object" && !Array.isArray(val)) {
      return Object.fromEntries(
        Object.keys(val)
          .sort()
          .map((k) => [k, (val as Record<string, unknown>)[k]]),
      );
    }
    return val;
  });
}

/** Every field `key` in the schema, walking nested `components` (e.g. groups). */
function collectKeys(schema: FormSchema): Set<string> {
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

export const FormRenderer = forwardRef<FormRendererHandle, FormRendererProps>(
  function FormRenderer(
    { schema, values, onChange, context = {}, disabled = false, onValidityChange },
    ref,
  ) {
    const containerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<Form | null>(null);

    // Kept fresh every render so the long-lived event listeners registered
    // once (below) always see the latest props without re-subscribing.
    const schemaRef = useRef(schema);
    const valuesRef = useRef(values);
    const onChangeRef = useRef(onChange);
    const onValidityChangeRef = useRef(onValidityChange);
    schemaRef.current = schema;
    valuesRef.current = values;
    onChangeRef.current = onChange;
    onValidityChangeRef.current = onValidityChange;

    // The merged `{ ...context, ...values }` payload the form was last given.
    // Distinguishes "the reader typed in the form" (form-js echoes that back
    // to us via onChange, which flows into `values` right back here — must
    // NOT re-import, that would reset the field mid-keystroke) from "the host
    // changed `values`/`context` from the outside" (a preset scenario button,
    // a live run updating `context`) — which does need a re-import.
    const lastDataRef = useRef<string | null>(null);

    // Cache of `collectKeys(schema)`, recomputed only when the schema object
    // itself changes — `handleChanged` runs on every keystroke and walking
    // the full schema tree each time is wasteful for larger schemas.
    const schemaKeysRef = useRef<{ schema: FormSchema; keys: Set<string> } | null>(
      null,
    );
    const getSchemaKeys = () => {
      const currentSchema = schemaRef.current;
      if (schemaKeysRef.current?.schema !== currentSchema) {
        schemaKeysRef.current = {
          schema: currentSchema,
          keys: collectKeys(currentSchema),
        };
      }
      return schemaKeysRef.current.keys;
    };

    useImperativeHandle(
      ref,
      () => ({
        validate() {
          const form = formRef.current;
          if (!form) return false;
          const errors = form.validate();
          const valid = Object.keys(errors).length === 0;
          onValidityChangeRef.current?.(valid);
          return valid;
        },
      }),
      [],
    );

    // Create the form once and tear it down on unmount.
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const form = new Form({ container });
      formRef.current = form;

      const handleChanged = ({
        data,
        errors,
      }: {
        // Nullable on purpose: form-js fires `changed` for *any* state change,
        // including `setProperty` (see the `disabled` effect below), and its
        // state starts with `data: null`. So this can run before — or instead
        // of — any `importSchema`, with nothing to read fields off.
        data: Record<string, unknown> | null;
        errors: Record<string, unknown> | null;
      }) => {
        if (!data) return;
        const keys = getSchemaKeys();
        for (const key of keys) {
          if (!Object.is(data[key], valuesRef.current[key])) {
            onChangeRef.current(key, data[key]);
          }
        }
        // Record what we just fed back out, so the sync effect below
        // recognises the resulting prop update as our own echo rather than
        // an external change that needs a full re-import.
        lastDataRef.current = stableStringify(data);
        onValidityChangeRef.current?.(Object.keys(errors ?? {}).length === 0);
      };
      form.on("changed", handleChanged);

      return () => {
        form.off("changed", handleChanged);
        form.destroy();
        formRef.current = null;
        // `lastDataRef` describes what *this* form instance was last given, so
        // it must not outlive it. Leaving it set meant the next mount's import
        // effect saw its own payload as "already imported" and skipped
        // `importSchema` entirely, leaving a schema-less form. React StrictMode
        // in development mounts, cleans up, and mounts again — which is exactly
        // that sequence, and why an example with a start form rendered blank in
        // `npm run dev` while the production build was fine (issue #50).
        lastDataRef.current = null;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps -- intentionally created once
    }, []);

    // Re-import the schema when it changes, or when `values`/`context`
    // changed from *outside* this component (see lastDataRef above).
    useEffect(() => {
      const form = formRef.current;
      if (!form) return;
      const data = { ...context, ...values };
      const serialized = stableStringify(data);
      if (serialized === lastDataRef.current) return;
      lastDataRef.current = serialized;
      form
        .importSchema(schema, data)
        .then(() => {
          const errors = form.validate();
          onValidityChangeRef.current?.(Object.keys(errors).length === 0);
        })
        .catch((e: unknown) => {
          // A malformed schema is the form author's bug — surface it in the
          // console rather than leaving a blank panel with no explanation.
          console.error("form-js failed to import schema", e);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [schema, values, context]);

    useEffect(() => {
      formRef.current?.setProperty("disabled", disabled);
    }, [disabled]);

    return <div className="form" ref={containerRef} />;
  },
);
