import { useEffect, useRef } from "react";
import Modeler from "bpmn-js/lib/Modeler";
import zeebeModdleDescriptor from "zeebe-bpmn-moddle/resources/zeebe.json";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

/**
 * The model-editing seam, now backed by a real bpmn-js `Modeler` instead of a
 * plain XML editor — but the external interface hasn't changed: `value` in,
 * `onChange` out, nothing else. Every edit made visually flows through the
 * exact same seam the XML editor used, so `ExampleRunner`'s draft-run-
 * definition resolution/diagnostics pipeline gates Run and reports
 * unsupported edits exactly as it did before (see `draft.ts`) — this
 * component does not build a second diagnostics path.
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
  const modelerRef = useRef<InstanceType<typeof Modeler> | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  // The last XML this component itself produced via `saveXML()`. `onChange`
  // round-trips through the host's state and comes straight back as the next
  // `value` prop — without this guard, that round-trip would trigger a
  // reimport on every single edit, resetting the modeler's selection, pan/
  // zoom and undo stack after every click or drag.
  const lastExportedRef = useRef<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const modeler = new Modeler({
      container: containerRef.current,
      moddleExtensions: {
        zeebe: zeebeModdleDescriptor,
      },
    });
    modelerRef.current = modeler;
    lastExportedRef.current = null;

    let cancelled = false;
    modeler
      .importXML(value)
      .then(() => {
        if (cancelled) return;
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

    const exportChange = () => {
      modeler
        .saveXML({ format: true })
        .then(({ xml }: { xml?: string }) => {
          if (cancelled || xml === undefined) return;
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
    modeler.on("commandStack.changed", exportChange);

    return () => {
      cancelled = true;
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
    modeler
      .importXML(value)
      .then(() => {
        lastExportedRef.current = null;
        modeler.get<{ zoom: (mode: string) => void }>("canvas").zoom(
          "fit-viewport",
        );
      })
      .catch((err: unknown) => {
        console.warn("ModelEditor: import failed", err);
      });
  }, [value]);

  return (
    <div ref={containerRef} className="editor-wrap model-editor-canvas" />
  );
}

export { ModelEditorComponent as ModelEditor };
export default ModelEditorComponent;
