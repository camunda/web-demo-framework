import { AppHeader, Button } from "@camunda/design-system";
import { ExampleRunner } from "./framework/ui/ExampleRunner";
import { EXAMPLES } from "./examples";
import { useRoute } from "./framework/useRoute";
import { examplePath, galleryPath, navigate } from "./framework/routing";
import { readDeepLinkState } from "./framework/deepLink";
import { readTourParam } from "./framework/tour";
import { useEmbedHeightReporter } from "./framework/embedHeight";

/**
 * The gallery shell, plus routing:
 *
 * - `/` — the gallery: every example, pick one.
 * - `/examples/<id>` — a single example, deep-linkable so a docs page can
 *   link straight to it (see docs — this is issue #8's whole point).
 * - `?embed=1` — no gallery nav, no app header, sized for an iframe, with an
 *   "open full page" link back to the un-embedded URL. Meant for a docs page
 *   to inline via `<iframe>` rather than sending the reader away.
 *
 * Which brain is selected is deep-linked too, compressed into the URL hash
 * (see `framework/deepLink.ts`) — there's no server to hold state for us.
 * Handler *source code* is deliberately NOT part of that hash yet (see the
 * scope note in deepLink.ts): that's shareable, attacker-supplied code until
 * the sandboxing work lands.
 */
export function App() {
  const { route, embed } = useRoute();
  const initialBrainKind = readDeepLinkState().brain;
  const initialTourId = readTourParam();
  // Embedded, the host sizes the iframe from these messages, so the runner
  // never needs a scrollbar of its own inside the page's.
  useEmbedHeightReporter(embed);

  const activeId = route.kind === "example" ? route.id : EXAMPLES[0].id;
  const example = EXAMPLES.find((e) => e.id === activeId) ?? EXAMPLES[0];

  const goToExample = (id: string) => {
    navigate(examplePath(id), { hash: location.hash });
  };

  const body = (
    <>
      {!embed && route.kind === "gallery" && (
        <nav className="example-picker">
          {EXAMPLES.map((e) => (
            <Button
              key={e.id}
              size="sm"
              variant={e.id === example.id ? "default" : "secondary"}
              onClick={() => goToExample(e.id)}
            >
              {e.title}
            </Button>
          ))}
        </nav>
      )}
      {!embed && route.kind === "example" && (
        <div className="example-nav">
          <Button size="sm" variant="secondary" onClick={() => navigate(galleryPath())}>
            ← All examples
          </Button>
        </div>
      )}
      <div className="example-meta">
        {example.docsUrl && (
          <a
            className="docs-link"
            href={example.docsUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            View on camunda.com ↗
          </a>
        )}
        {embed && (
          <a
            className="open-full-page"
            href={examplePath(example.id) + (location.hash || "")}
            target="_top"
            rel="noreferrer"
          >
            Open full page ↗
          </a>
        )}
      </div>
      {/* Keyed so switching examples remounts with fresh editor/run state. */}
      <ExampleRunner
        key={example.id}
        example={example}
        initialBrainKind={initialBrainKind}
        initialTourId={initialTourId}
      />
    </>
  );

  if (embed) {
    return (
      <div className="c4-ui app-shell app-embed">
        <main id="main" className="layout layout-embed">
          {body}
        </main>
      </div>
    );
  }

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
        {body}
      </main>
    </div>
  );
}

