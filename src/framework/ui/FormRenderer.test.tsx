import { createRef, StrictMode } from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { FormRenderer, type FormRendererHandle } from "./FormRenderer";
import { formDefaults, type FormSchema } from "./formSchema";

/**
 * Fixtures covering the behaviour that used to be hand-rolled in this
 * component and is now delegated to `@bpmn-io/form-js`: default values,
 * conditional visibility, and required-field validation gating task
 * completion. See `docs/supported-edits.md` / `draft.ts` for how a dangling
 * `formId` is resolved separately, upstream of this component.
 */

const CONDITIONAL_SCHEMA: FormSchema = {
  type: "default",
  id: "conditional-fixture",
  components: [
    {
      key: "showExtra",
      type: "checkbox",
      label: "Show extra",
      id: "Field_show",
    },
    {
      key: "extra",
      type: "textfield",
      label: "Extra field",
      id: "Field_extra",
      conditional: { hide: "=showExtra = false" },
    },
  ],
};

const VALIDATION_SCHEMA: FormSchema = {
  type: "default",
  id: "validation-fixture",
  components: [
    {
      key: "decision",
      type: "textfield",
      label: "Decision",
      id: "Field_decision",
      validate: { required: true },
    },
  ],
};

const DEFAULTS_SCHEMA: FormSchema = {
  type: "default",
  id: "defaults-fixture",
  components: [
    {
      key: "withDefault",
      type: "textfield",
      label: "Seeded",
      id: "Field_seeded",
      defaultValue: "seeded-value",
    },
    {
      key: "noDefault",
      type: "textfield",
      label: "Not seeded",
      id: "Field_not_seeded",
    },
  ],
};

describe("formDefaults", () => {
  it("seeds only fields that declare a defaultValue", () => {
    expect(formDefaults(DEFAULTS_SCHEMA)).toEqual({
      withDefault: "seeded-value",
    });
  });
});

describe("FormRenderer — conditional visibility", () => {
  it("hides a field guarded by `conditional.hide` until its condition is met", async () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <FormRenderer
        schema={CONDITIONAL_SCHEMA}
        values={{ showExtra: false, extra: "" }}
        onChange={onChange}
      />,
    );

    await waitFor(() =>
      expect(screen.getByText("Show extra")).toBeInTheDocument(),
    );
    expect(screen.queryByText("Extra field")).not.toBeInTheDocument();

    // An external change (e.g. a preset scenario button) toggles the guard —
    // not a keystroke inside this form, so it must flow through as a prop
    // change and be picked up.
    rerender(
      <FormRenderer
        schema={CONDITIONAL_SCHEMA}
        values={{ showExtra: true, extra: "" }}
        onChange={onChange}
      />,
    );

    await waitFor(() =>
      expect(screen.getByText("Extra field")).toBeInTheDocument(),
    );
  });
});

describe("FormRenderer — StrictMode remount (issue #50)", () => {
  /**
   * `main.tsx` renders the app inside `<StrictMode>`, so in development every
   * effect runs mount → cleanup → mount. The form instance is recreated by that
   * second mount; anything remembered *about* it must not survive the first.
   *
   * When it did, the second mount's import effect recognised its own payload as
   * already-imported and skipped `importSchema`, leaving a form with no schema.
   * form-js then fired `changed` with `data: null` from the unrelated
   * `disabled` `setProperty`, and reading a field off it threw
   * `TypeError: Cannot read properties of null (reading '<first key>')` —
   * blanking the whole page, since the throw happens inside an effect.
   */
  it("imports the schema into the form the second mount created", async () => {
    const onValidityChange = vi.fn();
    const ref = createRef<FormRendererHandle>();
    render(
      <StrictMode>
        <FormRenderer
          ref={ref}
          schema={VALIDATION_SCHEMA}
          values={{ decision: "" }}
          onChange={() => {}}
          onValidityChange={onValidityChange}
        />
      </StrictMode>,
    );

    await waitFor(() => expect(screen.getByText("Decision")).toBeInTheDocument());

    // Asserted through validation rather than rendered output on purpose: a
    // destroyed form leaves its markup in the container, so fields stay visible
    // even when the live instance holds no schema. Validation is answered by the
    // live instance, so an empty required field can only read as invalid if the
    // schema actually reached it.
    let valid = true;
    act(() => {
      valid = ref.current!.validate();
    });
    expect(valid).toBe(false);
  });

  it("stays mounted when the form reports a change with no data imported", async () => {
    const onChange = vi.fn();
    const onValidityChange = vi.fn();
    render(
      <StrictMode>
        <FormRenderer
          schema={VALIDATION_SCHEMA}
          values={{ decision: "" }}
          onChange={onChange}
          onValidityChange={onValidityChange}
          disabled
        />
      </StrictMode>,
    );

    // Reaching the rendered field at all means no effect threw on the way here.
    await waitFor(() => expect(screen.getByText("Decision")).toBeInTheDocument());
    // A `changed` event carrying `data: null` must not be mistaken for the
    // reader clearing every field.
    expect(onChange).not.toHaveBeenCalled();
  });
});

describe("FormRenderer — validation gates completion", () => {
  it("reports invalid while a required field is empty, and valid once filled", async () => {
    const onValidityChange = vi.fn();
    const ref = createRef<FormRendererHandle>();
    const { rerender } = render(
      <FormRenderer
        ref={ref}
        schema={VALIDATION_SCHEMA}
        values={{ decision: "" }}
        onChange={() => {}}
        onValidityChange={onValidityChange}
      />,
    );

    await waitFor(() => expect(onValidityChange).toHaveBeenCalledWith(false));

    // This is the actual submit-time gate a host ("Complete task") re-checks
    // synchronously — it must say "invalid" for an empty required field.
    let valid = true;
    act(() => {
      valid = ref.current!.validate();
    });
    expect(valid).toBe(false);

    // Filling the field (simulating an external update, e.g. re-opening the
    // task with a previously-entered value restored) clears the error.
    rerender(
      <FormRenderer
        ref={ref}
        schema={VALIDATION_SCHEMA}
        values={{ decision: "approved" }}
        onChange={() => {}}
        onValidityChange={onValidityChange}
      />,
    );

    await waitFor(() => expect(onValidityChange).toHaveBeenCalledWith(true));
    act(() => {
      valid = ref.current!.validate();
    });
    expect(valid).toBe(true);
  });
});
