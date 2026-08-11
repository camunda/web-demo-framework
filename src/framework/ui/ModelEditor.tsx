import { useEffect, useRef, useState } from "react";
import Modeler from "bpmn-js/lib/Modeler";
import zeebeModdleDescriptor from "zeebe-bpmn-moddle/resources/zeebe.json";
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  ZeebePropertiesProviderModule,
} from "bpmn-js-properties-panel";
import {
  CloudElementTemplatesCoreModule,
  CloudElementTemplatesPropertiesProviderModule,
} from "bpmn-js-element-templates";
import ZeebeBehaviorsModule from "camunda-bpmn-js-behaviors/lib/camunda-cloud";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "@bpmn-io/properties-panel/dist/assets/properties-panel.css";
import "bpmn-js-element-templates/dist/assets/element-templates.css";
import inventoryCheckTemplate from "../element-templates/inventory-check.json";

/**
 * The demo's only connector element template. A reader applies it to the
 * order process's "Check inventory" service task through the properties
 * panel and edits its fields there instead of hand-editing XML attributes.
 * It deliberately pins `zeebe:taskDefinition:type` to `check-inventory` (a
 * `Hidden` property, not reader-editable) so applying it never orphans the
 * example's existing job-type handler — the acceptance bar here is "produces
 * valid XML that still deploys and runs", not "adds a new job type the
 * runner would need separate wiring for".
 */
const ELEMENT_TEMPLATES = [inventoryCheckTemplate];

/**
 * The bpmn-js/moddle types this component talks to (`ElementTemplates`,
 * selection service, the modeler's business object shape) aren't exported by
 * `@types/bpmn-moddle` in a way that covers every property used here, so this
 * narrows to just the handful of methods/fields actually called against
 * injected services — enough for type-safety at this seam without pulling in
 * `bpmn-js`'s (untyped) internals.
 */
interface ElementTemplateDescriptor {
  id: string;
  name?: string;
  version?: number;
}
interface ElementTemplatesService {
  set(templates: unknown[]): void;
  getAll(element: unknown): ElementTemplateDescriptor[];
  get(idOrElement: unknown, version?: number | null): unknown;
  applyTemplate(element: unknown, template: unknown): unknown;
}
interface SelectionService {
  get(): unknown[];
}
interface BusinessObjectLike {
  id?: string;
  name?: string;
  $type?: string;
}
interface SelectedElement {
  id?: string;
  businessObject?: BusinessObjectLike;
}

/**
 * The model-editing seam, now backed by a real bpmn-js `Modeler` instead of a
 * plain XML editor — but the external interface hasn't changed: `value` in,
 * `onChange` out, nothing else. Every edit made visually flows through the
 * exact same seam the XML editor used, so `ExampleRunner`'s draft-run-
 * definition resolution/diagnostics pipeline gates Run and reports
 * unsupported edits exactly as it did before (see `draft.ts`) — this
 * component does not build a second diagnostics path.
 *
 * A properties panel now sits alongside the canvas (bpmn-js-properties-panel
 * + its Zeebe provider), plus Camunda 8 element templates
 * (bpmn-js-element-templates' `CloudElementTemplates*` modules) so a reader
 * can configure element properties — including connector-specific fields —
 * through form fields instead of only through raw XML. Applying/editing a
 * template flows through the same `commandStack.changed` → `saveXML()` →
 * `onChange` export path as every other edit; there is no second diagnostics
 * path for it either.
 *
 * `moddleExtensions: { zeebe: ... }` is load-bearing, not decorative: without
 * it, bpmn-js's underlying `bpmn-moddle` has no `zeebe:*` type descriptors at
 * all, so any modeling operation that constructs or type-checks one — the
 * properties panel, copy/paste, or any edit touching an existing `zeebe:*`
 * element such as the AI Agent sub-process's `zeebe:adHoc`/
 * `zeebe:taskDefinition`/`zeebe:ioMapping` — throws outright the moment it
 * touches that element. The model can still *deploy* in that broken state —
 * it just never runs a single tool, which is a silent, confusing failure
 * with no error anywhere near the edit that caused it. See
 * `ModelEditor.test.tsx` for tests against exactly this shape of model.
 */
export interface ModelEditorProps {
  /** The current BPMN XML. */
  value: string;
  /** Called with the new BPMN XML on every edit. */
  onChange: (value: string) => void;
}

function ModelEditorComponent({ value, onChange }: ModelEditorProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const propertiesRef = useRef<HTMLDivElement | null>(null);
  const modelerRef = useRef<InstanceType<typeof Modeler> | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  // The currently selected diagram element and the connector templates
  // applicable to it, surfaced as a small "Apply connector template"
  // control above the canvas — bpmn-js-element-templates ships the panel
  // UI for *editing* an already-applied template's fields, but choosing
  // and applying one in the first place needs a chooser, which this repo
  // doesn't pull in a separate package for (see `bpmn-io/element-template-
  // chooser`); this inline select is the minimal stand-in.
  const [selected, setSelected] = useState<SelectedElement | null>(null);
  const [availableTemplates, setAvailableTemplates] = useState<
    ElementTemplateDescriptor[]
  >([]);
  // Bumped on every `applyTemplate` call and folded into the `<select>`'s
  // `key` below so the control remounts (and its uncontrolled value resets
  // to the placeholder) after each apply — otherwise the browser leaves the
  // `<select>` sitting on the just-chosen option, and choosing that same
  // (often only) option again fires no `onChange`, making it impossible to
  // re-apply a template after an undo/redo or a no-op first apply.
  const [applyNonce, setApplyNonce] = useState(0);
  // The last XML this component itself produced via `saveXML()`. `onChange`
  // round-trips through the host's state and comes straight back as the next
  // `value` prop — without this guard, that round-trip would trigger a
  // reimport on every single edit, resetting the modeler's selection, pan/
  // zoom and undo stack after every click or drag.
  const lastExportedRef = useRef<string | null>(null);
  // Monotonic sequence counters guarding against out-of-order async
  // resolution: `saveXML()`/`importXML()` calls can resolve in a different
  // order than they were started (e.g. rapid edits, or a fast "Revert to
  // original" following a slower in-flight export). Each call captures its
  // own sequence number and only applies its result if it's still the most
  // recently *started* call of its kind by the time it resolves — otherwise
  // a stale promise could overwrite newer state with older XML.
  const importSeqRef = useRef(0);
  const exportSeqRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const modeler = new Modeler({
      container: containerRef.current,
      propertiesPanel: {
        parent: propertiesRef.current,
      },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        ZeebePropertiesProviderModule,
        ZeebeBehaviorsModule,
        CloudElementTemplatesCoreModule,
        CloudElementTemplatesPropertiesProviderModule,
      ],
      moddleExtensions: {
        zeebe: zeebeModdleDescriptor,
      },
    });
    modelerRef.current = modeler;
    // Seed this with the initial `value` (not `null`) so the `[value]`
    // effect below — which also runs on this same mount — sees its own
    // reimport as already handled and skips it, instead of kicking off a
    // second, redundant `importXML(value)` racing the one just below.
    lastExportedRef.current = value;

    modeler
      .get<ElementTemplatesService>("elementTemplates")
      .set(ELEMENT_TEMPLATES);

    // Track selection so the "Apply connector template" control above the
    // canvas knows which element it's offering templates for, and which
    // templates (from `ELEMENT_TEMPLATES`) even apply to it (`appliesTo` /
    // `elementType` narrow this per element type in the template JSON).
    const updateSelection = () => {
      const selection = modeler
        .get<SelectionService>("selection")
        .get() as SelectedElement[];
      const element = selection[0] ?? null;
      setSelected(element);
      const elementTemplates = modeler.get<ElementTemplatesService>(
        "elementTemplates",
      );
      setAvailableTemplates(
        element ? elementTemplates.getAll(element) : [],
      );
    };
    modeler.on("selection.changed", updateSelection);
    modeler.on("elementTemplates.errors", (event: unknown) => {
      // Loading the templates themselves failing (malformed JSON) doesn't
      // block editing the rest of the diagram — the "Apply connector
      // template" control simply offers nothing for any element. Still log
      // it so a broken template is diagnosable instead of silently
      // vanishing from the picker.
      console.warn("ModelEditor: element templates failed to load", event);
    });

    let cancelled = false;
    const initialImportSeq = ++importSeqRef.current;
    modeler
      .importXML(value)
      .then(() => {
        if (cancelled || importSeqRef.current !== initialImportSeq) return;
        modeler.get<{ zoom: (mode: string) => void }>("canvas").zoom(
          "fit-viewport",
        );
      })
      .catch((err: unknown) => {
        // Malformed XML (e.g. a partial hand-edit made before this component
        // existed, or mid-typing in a sibling XML view) — leave the modeler
        // showing a blank canvas rather than crashing the editor.
        console.warn("ModelEditor: initial import failed", err);
      });

    const doExport = () => {
      const exportSeq = ++exportSeqRef.current;
      modeler
        .saveXML({ format: true })
        .then(({ xml }: { xml?: string }) => {
          if (
            cancelled ||
            xml === undefined ||
            exportSeqRef.current !== exportSeq
          )
            return;
          lastExportedRef.current = xml;
          onChangeRef.current(xml);
        })
        .catch((err: unknown) => {
          // Export can transiently fail mid-edit (e.g. an in-progress
          // multi-step diagram operation) — the previous `value` stays in
          // effect rather than emitting a broken/partial document.
          console.warn("ModelEditor: export failed", err);
        });
    };
    // `commandStack.changed` can fire many times for a single gesture (e.g.
    // dragging, or a multi-command operation). Coalesce those into a single
    // export per tick instead of serializing the whole diagram on every
    // intermediate event — this avoids redundant `saveXML()` calls and the
    // resulting `onChange`-triggered draft rebuilds causing jank on larger
    // diagrams.
    let scheduledExport: ReturnType<typeof setTimeout> | null = null;
    const exportChange = () => {
      if (scheduledExport !== null) return;
      scheduledExport = setTimeout(() => {
        scheduledExport = null;
        doExport();
      }, 0);
    };
    modeler.on("commandStack.changed", exportChange);

    return () => {
      cancelled = true;
      if (scheduledExport !== null) clearTimeout(scheduledExport);
      modeler.off("commandStack.changed", exportChange);
      modeler.destroy();
      modelerRef.current = null;
    };
    // Only re-run on mount/unmount — an external `value` change (e.g.
    // "Revert to original") is handled by the effect below via `importXML`
    // on the same long-lived modeler instance, not by tearing this one down.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const modeler = modelerRef.current;
    if (!modeler) return;
    // Skip reimport for the exact XML this component just emitted itself —
    // only reimport when `value` changed for a reason *external* to this
    // editor (a "Revert to original" click, a template substitution
    // changing the resolved model, etc.), matching the same reimport
    // condition the read-only diagram view (`BpmnRuntimeView`) applies on
    // every `xml` change, just narrowed to genuinely-external changes here
    // since this view is also the thing producing new values.
    if (value === lastExportedRef.current) return;
    // Guards against running side effects after this effect has been
    // superseded (a newer `value` triggered another run) or the component
    // has unmounted (the mount effect's cleanup calls `modeler.destroy()`)
    // while this `importXML` is still in flight.
    let cancelled = false;
    const importSeq = ++importSeqRef.current;
    modeler
      .importXML(value)
      .then(() => {
        if (cancelled || importSeqRef.current !== importSeq) return;
        lastExportedRef.current = null;
        modeler.get<{ zoom: (mode: string) => void }>("canvas").zoom(
          "fit-viewport",
        );
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        console.warn("ModelEditor: import failed", err);
      });
    return () => {
      cancelled = true;
    };
  }, [value]);

  const applyTemplate = (templateId: string) => {
    const modeler = modelerRef.current;
    if (!modeler || !selected) return;
    const elementTemplates = modeler.get<ElementTemplatesService>(
      "elementTemplates",
    );
    const template = elementTemplates.get(templateId);
    if (!template) return;
    elementTemplates.applyTemplate(selected, template);
    setApplyNonce((n) => n + 1);
  };

  const selectedLabel =
    selected?.businessObject?.name ?? selected?.businessObject?.id ?? null;

  return (
    <div className="model-editor-layout">
      <div className="model-editor-toolbar">
        {selected ? (
          availableTemplates.length > 0 ? (
            <label className="model-editor-template-picker">
              Connector template for <strong>{selectedLabel}</strong>:{" "}
              <select
                key={`${selected.id ?? ""}-${applyNonce}`}
                defaultValue=""
                onChange={(event) => {
                  if (event.target.value) applyTemplate(event.target.value);
                }}
              >
                <option value="" disabled>
                  Apply a template…
                </option>
                {availableTemplates.map((template) => (
                  <option key={template.id} value={template.id}>
                    {template.name ?? template.id}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <span className="model-editor-template-picker">
              No connector templates apply to <strong>{selectedLabel}</strong>.
            </span>
          )
        ) : (
          <span className="model-editor-template-picker">
            Select an element to see its properties and connector templates.
          </span>
        )}
      </div>
      <div className="model-editor-panes">
        <div
          ref={containerRef}
          className="editor-wrap model-editor-canvas"
        />
        <div
          ref={propertiesRef}
          className="model-editor-properties"
        />
      </div>
    </div>
  );
}

export { ModelEditorComponent as ModelEditor };
export default ModelEditorComponent;
