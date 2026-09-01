import type { ActivatedJob } from "@nanobpm/bojtos-react";
import type { TemplateMap } from "./templates";
import type { TourDef } from "./tour/types";
import type { VisionImage } from "./brains/types";

/** A line in the run's activity log. */
export interface TraceEntry {
  kind:
    | "start"
    | "agent"
    | "llm"
    | "tool"
    | "human"
    | "done"
    | "error"
    | "vars"
    | "step";
  text: string;
  /**
   * Stable id for an entry that updates in place — a streaming completion grows
   * one line rather than spamming forty.
   */
  key?: string;
  /** True while the entry is still being produced (renders a spinner). */
  pending?: boolean;
  /**
   * Additive fields — used by `TraceTimeline` (see `ui/TraceTimeline.tsx`) to
   * render a run as a turn-by-turn story instead of a flat log. Every field
   * here is optional and safe to ignore: a consumer reading only `kind`/`text`
   * (or an example never touching an agent) is unaffected.
   *
   * - `turn` groups every entry produced by one agent turn together — the
   *   streamed LLM reply, each tool it activated, and that tool's own
   *   "started"/"result" entries (see `liveAgent.ts` and `compile.ts`, which
   *   share a turn counter via a `TurnRef` for exactly this correlation).
   *   Entries with no `turn` (process start, a human task, the final
   *   outcome) render outside any turn group, in their original order.
   * - `elementId` names the BPMN element (tool or task) this entry concerns.
   * - `args` are the arguments supplied when activating a tool — the
   *   validated/coerced values, not the model's raw reply.
   * - `result` is what a tool/handler returned, for pairing with its own
   *   `args` entry by `elementId`.
   */
  turn?: number;
  elementId?: string;
  args?: Record<string, unknown>;
  result?: unknown;
}

export type Trace = (entry: TraceEntry) => void;

/**
 * The helpers every editable handler receives as its second argument. Keeping
 * these out of the handler body means an example's code stays about the domain
 * ("look the marker up") rather than about the harness.
 */
export interface HandlerHelpers {
  sleep(ms: number): Promise<void>;
  trace(text: string): void;
  /** A string variable with a fallback — variables are `unknown` at runtime. */
  text(key: string, fallback?: string): string;
  /** A numeric variable with a fallback. */
  num(key: string, fallback?: number): number;
  /**
   * Read the current run's image with the connected vision brain and return its
   * text (contract B). `prompt` is the vision instruction — for the Florence-2
   * browser-vision backend a `<OCR>`/`<OCR_WITH_REGION>` task token (see
   * `brains/vision.ts`). With a live browser-vision brain connected this runs
   * the model on the reader's GPU; with none connected the framework's
   * scripted-vision fallback — built from the example's `scriptedVision`
   * ground truth — answers instead.
   *
   * **Optional and additive**: only present for an example whose `ExampleDef`
   * declares `imageInput`, so existing handlers and `HandlerHelpers` consumers
   * are unaffected. It **never throws** — a missing image or a mid-run backend
   * failure resolves to a clearly-marked string rather than failing the job.
   */
  vision?(prompt: string): Promise<string>;
  /**
   * The lower-level counterpart to {@link vision}: the current run's image as a
   * `VisionImage` (the uploaded/seed pixels, or the seed id for the scripted
   * fallback), or `undefined` when nothing is selected — so a handler can pass
   * it to a brain itself. Optional/additive on the same terms as `vision`.
   */
  image?(): Promise<VisionImage | undefined>;
}

/** What an example's editable handler compiles to. */
export type ExampleHandler = (
  job: ActivatedJob,
  helpers: HandlerHelpers,
) => unknown;

/** One editable handler in the example's code panel. */
export interface HandlerDef {
  /** The BPMN element this serves. */
  elementId: string;
  /** What it stands in for on a real cluster, shown above the editor. */
  standsInFor?: string;
  /** The default editable source: an arrow-function expression. */
  source: string;
  /**
   * When present, this handler's job type is deliberately held out of the
   * automatic drive loop instead of completing the moment it's activated —
   * see `ExampleRunner`'s manual-control panel (rendered from `run.snapshot`,
   * not example-specific UI). This exists for the boundary-event example: a
   * job handler dispatched through `dispatchRound`/`dispatchWorkers` can only
   * complete or fail a job (see `@nanobpm/bojtos-kit`'s `JobHandler` doc
   * comment) — it has no way to call `throwError`, the command that actually
   * routes a token through an error boundary catch rather than raising an
   * incident. Firing a boundary error (or a boundary timer, the other new
   * case this construct exists for) from the UI therefore means holding the
   * job back and resolving it directly against the session — see
   * `useExampleRun`'s `completeJobManually`/`throwJobError`/`advanceTime`.
   * Optional and additive: an example with no `manualControl` on any handler
   * behaves exactly as before (every job auto-dispatches).
   */
  manualControl?: {
    /** Panel heading, e.g. `"Charge payment"`. */
    label: string;
    /** Label for the "run it the normal way" button. */
    completeLabel?: string;
    /** What the other button does. */
    action:
      | { kind: "error"; errorCode: string; message: string; label: string }
      | { kind: "timer"; label: string };
  };
}

/** One selectable start scenario, rendered by the start form. */
export interface Scenario {
  label: string;
  /** Variables merged into the seed when this scenario is chosen. */
  variables: Record<string, unknown>;
}

/**
 * One seed image offered in an example's start gallery (contract B). `id` is
 * the stable key that becomes the `imageId` process variable and the lookup
 * key for the example's `scriptedVision` ground truth; `file`/`thumb` are
 * asset paths (a bundler URL or a public path) the gallery renders.
 */
export interface SeedImage {
  id: string;
  file: string;
  thumb?: string;
  label?: string;
}

/**
 * The hero an example puts at the top of the page. Plain data rather than JSX
 * so example manifests stay `.ts`, not `.tsx`.
 */
export interface ExampleHero {
  /** Words wrapped in *asterisks* render in the accent colour. */
  headline: string;
  /** Standfirst paragraph under the headline. */
  lede?: string;
  /** Small uppercase label shown beside the app name in the top bar. */
  tagline?: string;
}

/**
 * An example, as a manifest: model + code + optional LLM wiring. Everything
 * else — the tool manifest, the prompts, the job types, the forms — the runner
 * derives from the model.
 */
export interface ExampleDef {
  id: string;
  title: string;
  blurb: string;
  /**
   * The page-level headline shown above the gallery for this example. Optional:
   * without it the shell falls back to a generic framework hero, so existing
   * examples need no changes.
   */
  hero?: ExampleHero;
  /**
   * The camunda.com docs page this example illustrates, rendered as a visible
   * link so a reader landing on `/examples/<id>` (see routing.ts) can get back
   * to the source material. Optional so an example can be added before its
   * docs page exists.
   */
  docsUrl?: string;
  /**
   * Which gallery section this example belongs to. `"scenario"` (the
   * default, used when this field is absent) is the existing hand-built
   * demos; `"learn-bpmn"` is the "one runnable page per BPMN construct"
   * gallery from issue #64, auto-discovered by `src/examples/index.ts` (see
   * the `import.meta.glob` there) rather than hand-listed. Optional and
   * additive: every existing example needs zero changes and keeps rendering
   * in the scenario section as before.
   */
  group?: "scenario" | "learn-bpmn";
  /** The BPMN XML. */
  bpmn: string;
  /** Camunda `.form` schemas by form id, for the start and user-task forms. */
  forms?: Record<string, unknown>;
  /** The starting payload. */
  seed: Record<string, unknown>;
  /** Optional preset scenarios offered above the start form. */
  scenarios?: Scenario[];
  /**
   * Heading for the scenario picker, e.g. "Example shipment". Defaults to
   * "Example input".
   */
  scenariosLabel?: string;
  /** Editable handlers, keyed by element id. */
  handlers: HandlerDef[];
  /**
   * The deterministic stand-in for the LLM, as editable source. Used by the
   * "Scripted" brain, and as the fallback when a live brain fails. Only needed
   * for a model with an agent.
   */
  scriptedAgent?: string;
  /**
   * Opt-in image input for this example (contract B). When present, the runner
   * renders an image start affordance — a gallery of `seedImages` plus an
   * "upload your own photo" control — instead of only the ordinary start form,
   * and threads the chosen image to `helpers.vision`/`helpers.image`. Purely
   * additive: an example without `imageInput` renders its start form unchanged.
   */
  imageInput?: { seedImages: SeedImage[]; label?: string };
  /**
   * Per-example deterministic vision ground truth (contract B) — the direct
   * analogue of `scriptedAgent` for the vision seam. A `seedImageId -> plate`
   * (image id → expected text) map the runner injects into a `scripted-vision`
   * brain (see `brains/vision.ts`) to build `helpers.vision`'s fallback when no
   * live browser-vision brain is connected. The example only supplies this
   * data; the runner owns the threading. Optional/additive.
   */
  scriptedVision?: Record<string, string>;
  /**
   * Prompt (and other) text assets, by template name, substituted into `bpmn`
   * as `{{name}}` placeholders before both deploy and `parseModel` — see
   * `src/framework/templates.ts`. Convention: one file per template under
   * `prompts/<name>.md`, name being the file stem, loaded with
   * `import.meta.glob(...)` and merged with `createTemplateMap`. Optional —
   * an example with no templates behaves exactly as one whose `bpmn` has no
   * `{{...}}` placeholders at all.
   */
  templates?: TemplateMap;
  /**
   * An optional, short guided tour of this example, built on driver.js (see
   * `src/framework/tour/**`) and offered via a "Take the tour" affordance and
   * a `?tour=<id>` deep link. Entirely additive: an example with no `tour`
   * behaves exactly as one without this field at all.
   */
  tour?: TourDef;
  /**
   * Tool element ids this example's agent must actually call before a "done"
   * is believed. A small model that reports done with one of these unrun is
   * asked once, naming it — see `requiredTools` in `agent/liveAgent.ts` for
   * why, and for what happens if it insists.
   *
   * Only for tools whose absence changes the outcome: the one that records a
   * decision, not every tool that might be relevant. Listing optional tools
   * here would push a model into calling things the case doesn't call for.
   */
  requiredTools?: string[];
}
