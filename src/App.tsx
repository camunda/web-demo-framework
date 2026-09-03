import { AppHeader, Button } from "@camunda/design-system";
import { Fragment } from "react";
import { ExampleRunner } from "./framework/ui/ExampleRunner";
import { EXAMPLES } from "./examples";
import { useRoute } from "./framework/useRoute";
import { examplePath, navigate } from "./framework/routing";
import { readDeepLinkState } from "./framework/deepLink";
import { readTourParam } from "./framework/tour";
import { useEmbedHeightReporter } from "./framework/embedHeight";
import type { ExampleHero } from "./framework/types";

/** The hero shown for an example that doesn't supply one of its own. */
const DEFAULT_HERO: ExampleHero = {
  headline: "The model *runs*. The code is *yours* to edit.",
  lede: "Every example on this page is a real BPMN process executing in your browser on the nano WebAssembly engine — edit the model, edit the handlers, swap the LLM, and run it again.",
  tagline: "Runnable Camunda examples",
};

/**
 * Renders a headline, turning `*emphasised*` runs into accent-coloured `<em>`.
 * Keeps example manifests as plain `.ts` data (see `ExampleHero`).
 */
function Headline({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*([^*]+)\*/g).map((part, i) =>
        i % 2 === 1 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}

/**
 * The gallery shell, plus routing:
 *
 * - `/` — the gallery: every example, pick one.
 * - `/examples/<id>` — a single example, deep-linkable so a docs page can
 *   link straight to it (see docs — this is issue #8's whole point).
 * - `?embed=1` — no gallery nav, no app header, sized for an iframe, with an
 *   "open full page" link back to the un-embedded URL. Meant for a docs page
 *   to inline via `<iframe>` rather than sending the reader away.
 * - `?embed=1&view=compact` — the same, minus the editors and brain picker.
 *   A marketing page wants a process that visibly runs, not an IDE; the
 *   "Open full page" link is where the editable version lives.
 * - `?autostart=1` — press Run once the example scrolls into view, so the
 *   embed shows a process running rather than one waiting to be clicked.
 *
 * Which brain is selected is deep-linked too, compressed into the URL hash
 * (see `framework/deepLink.ts`) — there's no server to hold state for us.
 * Handler *source code* is deliberately NOT part of that hash yet (see the
 * scope note in deepLink.ts): that's shareable, attacker-supplied code until
 * the sandboxing work lands.
 */
export function App() {
  const { route, embed, view, autostart } = useRoute();
  const compact = embed && view === "compact";
  const initialBrainKind = readDeepLinkState().brain;
  const initialTourId = readTourParam();
  // Embedded, the host sizes the iframe from these messages, so the runner
  // never needs a scrollbar of its own inside the page's.
  useEmbedHeightReporter(embed);

  const activeId = route.kind === "example" ? route.id : EXAMPLES[0].id;
  const example = EXAMPLES.find((e) => e.id === activeId) ?? EXAMPLES[0];
  // Split the gallery nav by `group` — existing scenario examples (no
  // `group`, or `group: "scenario"`) render exactly as before; `learn-bpmn`
  // examples get their own visibly-labelled section.
  const scenarioExamples = EXAMPLES.filter((e) => e.group !== "learn-bpmn");
  const learnBpmnExamples = EXAMPLES.filter((e) => e.group === "learn-bpmn");

  const goToExample = (id: string) => {
    navigate(examplePath(id), { hash: location.hash });
  };

  const hero = example.hero ?? DEFAULT_HERO;

  const body = (
    <>
      {!embed && (
        <>
          <section className="hero">
            <h1>
              <Headline text={hero.headline} />
            </h1>
            {hero.lede && <p>{hero.lede}</p>}
          </section>
          <nav className="example-picker" aria-label="Scenario examples">
            {scenarioExamples.map((e) => (
              <Button
                key={e.id}
                size="sm"
                variant={e.id === example.id ? "default" : "secondary"}
                aria-current={e.id === example.id ? "page" : undefined}
                onClick={() => goToExample(e.id)}
              >
                {e.title}
              </Button>
            ))}
          </nav>
          {learnBpmnExamples.length > 0 && (
            <>
              <h2 className="example-group-heading" id="learn-bpmn-heading">
                Learn BPMN
              </h2>
              <nav className="example-picker" aria-labelledby="learn-bpmn-heading">
                {learnBpmnExamples.map((e) => (
                  <Button
                    key={e.id}
                    size="sm"
                    variant={e.id === example.id ? "default" : "secondary"}
                    aria-current={e.id === example.id ? "page" : undefined}
                    onClick={() => goToExample(e.id)}
                  >
                    {e.title}
                  </Button>
                ))}
              </nav>
            </>
          )}
        </>
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
          // No query string on purpose: the full page is the un-restricted one,
          // so `view=compact` must not follow the reader through this link.
          <a
            className="open-full-page"
            href={examplePath(example.id) + (location.hash || "")}
            target="_top"
            rel="noreferrer"
          >
            {compact ? "Open the editable version ↗" : "Open full page ↗"}
          </a>
        )}
      </div>
      {/* Keyed so switching examples remounts with fresh editor/run state. */}
      <ExampleRunner
        key={example.id}
        example={example}
        compact={compact}
        autostart={autostart}
        initialBrainKind={initialBrainKind}
        initialTourId={initialTourId}
      />
    </>
  );

  if (embed) {
    return (
      <div className={`c4-ui app-shell app-embed${compact ? " app-compact" : ""}`}>
        <main
          id="main"
          className={`layout layout-embed${compact ? " layout-compact" : ""}`}
        >
          {body}
        </main>
      </div>
    );
  }

  return (
    <div className="c4-ui app-shell">
      <AppHeader
        className="topbar"
        logo={<span className="brand-dot" aria-hidden />}
        appName="Runnable Camunda examples"
        trailing={
          <span className="app-subtitle">{hero.tagline ?? DEFAULT_HERO.tagline}</span>
        }
      />
      <main id="main" className="layout">
        {body}
      </main>
      <footer className="footer">
        Running locally in your browser on the nano WebAssembly BPMN engine — no
        cluster, no server, no data leaving the page.
      </footer>
    </div>
  );
}

