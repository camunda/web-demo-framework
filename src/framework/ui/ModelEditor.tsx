import Editor from "@monaco-editor/react";

/**
 * The model-editing seam: the cheapest possible editor for the diagram's raw
 * BPMN XML, proving where new model XML enters the app before anyone spends
 * time on a visual editor.
 *
 * Deliberately dumb — `value` in, `onChange` out, nothing else. A later task
 * replaces the internals with a visual bpmn-js `Modeler` behind this exact
 * same interface (its `saveXML` export feeding the same `onChange`), so this
 * component must not leak anything XML-editor-specific (Monaco options,
 * markers, language ids) into its props.
 */
export interface ModelEditorProps {
  /** The current BPMN XML. */
  value: string;
  /** Called with the new BPMN XML on every edit. */
  onChange: (value: string) => void;
}

export function ModelEditor({ value, onChange }: ModelEditorProps) {
  return (
    <div className="editor-wrap">
      <Editor
        height="360px"
        defaultLanguage="xml"
        value={value}
        onChange={(v) => onChange(v ?? "")}
        options={modelEditorOptions}
      />
    </div>
  );
}

const modelEditorOptions = {
  minimap: { enabled: false },
  fontSize: 12,
  scrollBeyondLastLine: false,
  tabSize: 2,
  automaticLayout: true,
  wordWrap: "on",
} as const;
