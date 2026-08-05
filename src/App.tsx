import { useState } from "react";
import { AppHeader, Button } from "@camunda/design-system";
import { ExampleRunner } from "./framework/ui/ExampleRunner";
import { EXAMPLES } from "./examples";

/**
 * The gallery shell. Each entry is an `ExampleDef` manifest; the runner is the
 * same component for all of them — which is the whole point of the proof of
 * concept. A real deployment would route `/examples/<id>` to this and link each
 * page from its docs example on camunda.com.
 */
export function App() {
  const [id, setId] = useState(EXAMPLES[0].id);
  const example = EXAMPLES.find((e) => e.id === id) ?? EXAMPLES[0];

  return (
    <div className="c4-ui app-shell">
      <AppHeader
        appName="Runnable Camunda examples"
        trailing={
          <span className="app-subtitle">
            model + code + optional LLM, in your browser
          </span>
        }
      />
      <main id="main" className="layout">
        <nav className="example-picker">
          {EXAMPLES.map((e) => (
            <Button
              key={e.id}
              size="sm"
              variant={e.id === example.id ? "default" : "secondary"}
              onClick={() => setId(e.id)}
            >
              {e.title}
            </Button>
          ))}
        </nav>
        {/* Keyed so switching examples remounts with fresh editor/run state. */}
        <ExampleRunner key={example.id} example={example} />
      </main>
    </div>
  );
}
