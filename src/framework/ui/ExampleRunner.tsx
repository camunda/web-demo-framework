import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { AgentHandler, JobHandler, Snapshot } from "@nanobpm/bojtos-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@camunda/design-system";
import type { AgentSpec } from "../model";
import { buildDraftRunDefinition } from "../draft";
import { buildWorkers, compileAgent } from "../compile";
import { makeLiveAgentRouter, type TurnRef } from "../agent/liveAgent";
import { useExampleRun } from "../useExampleRun";
import { describeRound, newSequenceFlows } from "../stepSummary";
import { useBrain } from "../useBrain";
import type { BrainKind, VisionFn } from "../brains/types";
import { makeScriptedVisionBrain } from "../brains/vision";
import { imageRefVariables, type RunImage, type VisionSupport } from "../imageInput";
import { patchDeepLinkState } from "../deepLink";
import { BrainPanel } from "./BrainPanel";
import { ImageInputPanel } from "./ImageInputPanel";
import type { FormRendererHandle } from "./FormRenderer";
import { formDefaults, type FormSchema } from "./formSchema";
import { TraceTimeline } from "./TraceTimeline";
import { CollapsibleCard } from "./CollapsibleCard";
import { usePersistentDisclosure } from "./usePersistentDisclosure";
import type { ExampleDef, TraceEntry } from "../types";
import { createTemplateMap, type TemplateMap } from "../templates";
import { TOUR_ANCHOR, useTour } from "../tour";
import { useAutostart } from "../useAutostart";

/** Milliseconds the token pauses between dispatch rounds, so a run is watchable. */
const BEAT = 650;
const AGENT_TAB = "__agent__";
const MODEL_TAB = "__model__";
/** Tab-id prefix for a prompt/template editor tab, namespaced away from element ids. */
const TEMPLATE_TAB_PREFIX = "__template__:";

// Both the live diagram (bpmn-js, via `./RuntimeDiagram`) and the code
// editor (Monaco) are multi-MB dependencies that most of a first paint never
// needs to touch. Loading them via `React.lazy()` keeps them out of the
// initial JS payload and into their own on-demand chunks (see
// `vite.config.ts`'s `manualChunks` and `tools/bundle-budget/check.mjs`,
// which enforces separate budgets for each) — though in practice the Code
// panel renders immediately and starts fetching the Monaco chunk on first
// render, and the diagram chunk now starts downloading as soon as this view
// mounts rather than waiting for the engine to finish booting.
const BpmnRuntimeView = lazy(async () => {
  // bpmn-js's stylesheets used to load eagerly from main.tsx; they only
  // matter once the diagram itself renders, so they ride along with this
  // same dynamic import instead.
  await Promise.all([
    import("bpmn-js/dist/assets/diagram-js.css"),
    // Not optional: it takes the drilldown breadcrumbs out of flow. Left in
    // flow they eat ~20px inside the container that the canvas still measures
    // as its own, so `fit-viewport` overshoots and clips the model's bottom.
    import("bpmn-js/dist/assets/bpmn-js.css"),
    import("bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css"),
  ]);
  // `./RuntimeDiagram`, not `@nanobpm/bojtos-react`'s `BpmnRuntimeView`: that
  // one is a `NavigatedViewer`, so the model pans on drag and zooms on wheel
  // with no prop to disable it, and it only fits the viewport on import. See
  // that module's own comment.
  const { RuntimeDiagram } = await import("./RuntimeDiagram");
  return { default: RuntimeDiagram };
});
// Monaco's own setup (worker environment, `loader.config`) lives in
// `./MonacoEditor` so it only runs once this dynamic import actually resolves.
const Editor = lazy(() => import("./MonacoEditor"));
// The model-editing seam's visual bpmn-js `Modeler` pulls in the same
// multi-MB `bpmn-js` dependency `BpmnRuntimeView` above already lazy-loads —
// loading it eagerly here would put it right back on the initial-load path
// this file otherwise keeps clear (see `tools/bundle-budget/check.mjs`'s
// `modeler-on-demand` budget).
const ModelEditor = lazy(() => import("./ModelEditor"));
// `@bpmn-io/form-js-viewer` brings luxon, flatpickr, dompurify, marked and the
// lezer/feel parsers with it — the single largest cluster on what used to be the
// initial-load path, for a panel only examples with a `.form` ever render. The
// pure schema helpers it used to export live in `./formSchema` so seeding
// default values doesn't pull the viewer back in.
const FormRenderer = lazy(async () => {
  const { FormRenderer } = await import("./FormRenderer");
  return { default: FormRenderer };
});

function safeStringify(value: unknown, space?: number): string {
  try {
    return JSON.stringify(value ?? {}, null, space);
  } catch {
    return "[unserializable value]";
  }
}

/** One-line preview of the starting payload, for the inline “edit input” button. */
function summarizeStart(values: Record<string, unknown>): string {
  const text = safeStringify(values).replace(/\s+/g, " ");
  return text.length > 78 ? `${text.slice(0, 78)}…` : text;
}

interface LogLine extends TraceEntry {
  id: number;
}

/**
 * The whole runner: one example in, a running, editable page out.
 *
 * Everything example-specific arrives as the {@link ExampleDef} manifest —
 * model, handler code, seed, forms. The tool manifest, prompts, job types, and
 * which elements are agent tools are read off the diagram by `parseModel`, so
 * adding an example means writing handlers, not wiring.
 */
export function ExampleRunner({
  example,
  compact = false,
  autostart = false,
  initialBrainKind,
  initialTourId,
}: {
  example: ExampleDef;
  /**
   * Read-only presentation: no handler editors, no model editor, no brain
   * picker — see `EmbedView` in `src/framework/routing.ts`. The scenario
   * selector and input editor stay: "edit the input and re-run" is the point
   * of the demo, and it is those, not the code editors, that deliver it.
   *
   * Not rendering the editors is also what keeps Monaco and the bpmn-js
   * Modeler off the wire — both sit behind `React.lazy()` below, so an
   * unrendered tab is an unfetched chunk.
   */
  compact?: boolean;
  /**
   * Press Run once, unprompted, when the example scrolls into view — see
   * `?autostart=1` in `src/framework/routing.ts`. Gated on the same conditions
   * as the Run button, so it is never a laxer route into a run the UI would
   * have refused, and skipped entirely under `prefers-reduced-motion`.
   */
  autostart?: boolean;
  /**
   * Pre-selects a brain from a deep link (see `src/framework/deepLink.ts`)
   * instead of the default "scripted". Applied once, right after mount —
   * additive to `useBrain`'s own default, not a change to it.
   */
  initialBrainKind?: BrainKind;
  /**
   * Auto-starts `example.tour` when it matches (see
   * `src/framework/tour/deepLink.ts`'s `?tour=<id>`), so a docs page can link
   * straight into the guided version. Applied once, right after mount, same
   * as `initialBrainKind` above — additive, ignored entirely when `example`
   * has no `tour` or the id doesn't match.
   */
  initialTourId?: string | null;
}) {
  // The diagram is data, not a static import: lifted into state so the new
  // XML editor tab (and, later, a visual bpmn-js Modeler behind the same
  // seam) can hand-edit it and have every downstream consumer — the
  // diagnostics, the diagram view — see the edit as it's typed. The engine
  // itself only sees this draft on the next Run (via `run.redeploy`, in
  // `start` below): feeding every keystroke straight into `useExampleRun`
  // would tear down and redeploy the whole session on every character typed,
  // repeatedly wiping the previous run's state mid-edit.
  const [bpmn, setBpmn] = useState(example.bpmn);
  // Observed by `useAutostart` to decide the example has been scrolled to.
  const runnerRef = useRef<HTMLDivElement>(null);
  const brain = useBrain();
  // The image picked/uploaded for the next run (contract B), or null. Only ever
  // set for an `imageInput` example; the small reference goes into process
  // variables, the pixels into run-scoped context — see `start`/`beginRun`.
  const [imageSelection, setImageSelection] = useState<RunImage | null>(null);

  useEffect(() => {
    if (initialBrainKind && initialBrainKind !== brain.kind) {
      brain.setKind(initialBrainKind);
    }
    // Intentionally only on mount: this seeds the initial choice from the
    // URL, it doesn't keep re-syncing on every brain.kind change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the deep-linkable brain choice (see deepLink.ts) in sync so a
  // reader who switches brains and shares the URL hands over that choice too.
  useEffect(() => {
    patchDeepLinkState({ brain: brain.kind });
  }, [brain.kind]);

  const [sources, setSources] = useState<Record<string, string>>(() =>
    Object.fromEntries(example.handlers.map((h) => [h.elementId, h.source])),
  );
  const [agentSource, setAgentSource] = useState(example.scriptedAgent ?? "");
  // Prompts/templates, editable in their own tab (see templates.ts):
  // `{{name}}` placeholders in `example.bpmn` are substituted from here,
  // falling back to `example.templates`, before the model is ever parsed or
  // deployed — a prompt edit flows through the exact same draft-definition
  // pipeline as a handler edit.
  const [templateSources, setTemplateSources] = useState<TemplateMap>(() =>
    createTemplateMap(example.templates),
  );

  // The atomic "draft run definition": the parsed model, every handler and
  // form resolved (or not) against what's actually on offer, and the
  // diagnostics that follow — naming exactly what's missing and where. Run
  // stays disabled while it reports an error; see docs/supported-edits.md.
  // Hand-edited XML from the model tab flows through here too, so an
  // unsupported edit (a renamed tool element, a second process) surfaces via
  // these same diagnostics rather than a new one-off error path.
  const draft = useMemo(
    () => buildDraftRunDefinition(example, sources, bpmn, templateSources),
    [example, sources, bpmn, templateSources],
  );
  const model = draft.model;

  // Deployed and diagrammed from the *resolved* BPMN (templates substituted),
  // not `example.bpmn` directly — so what runs and what's shown is exactly
  // what the diagnostics above are about.
  const run = useExampleRun({ bpmn: draft.resolvedBpmn });

  // The example's optional guided tour (see `src/framework/tour/**`) — a
  // no-op `start`/`stop` when `example.tour` is undefined, so nothing below
  // needs its own conditional. `getSnapshot` reads live via a ref-like
  // closure over `run.snapshot` at poll time rather than being recreated
  // every render, since `useTour` only calls it from its own interval.
  const tour = useTour(example.tour, () => run.snapshot);
  useEffect(() => {
    if (initialTourId && example.tour?.id === initialTourId) {
      tour.start();
    }
    // Intentionally only on mount, mirroring `initialBrainKind` above — this
    // seeds the initial "start the tour" instruction from the URL once, it
    // doesn't re-trigger on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The start form comes from the model's start-event `formId`, if it has one.
  const startSchema = model.startFormId
    ? ((example.forms?.[model.startFormId] as FormSchema | undefined) ?? null)
    : null;
  const [startValues, setStartValues] = useState<Record<string, unknown>>(
    () => ({
      ...example.seed,
      ...(startSchema ? formDefaults(startSchema) : {}),
    }),
  );

  const [activeTab, setActiveTab] = useState<string>(
    model.agent ? AGENT_TAB : (example.handlers[0]?.elementId ?? ""),
  );
  // Which preset the segmented picker shows as chosen. Derived from the live
  // payload rather than held as state, so editing the start form deselects a
  // preset the input no longer matches instead of leaving a stale pill lit.
  // Matched against `startValues`, not `example.seed`: the two differ whenever
  // a start form contributes defaults.
  const selectedScenario = useMemo(() => {
    const i = (example.scenarios ?? []).findIndex((s) =>
      Object.entries(s.variables).every(
        ([k, v]) => JSON.stringify(startValues[k]) === JSON.stringify(v),
      ),
    );
    return i === -1 ? null : i;
  }, [example.scenarios, startValues]);
  // An example with a real start form opens it on a first visit — its fields
  // may be required, and Run stays disabled until they're filled. Compact is
  // the exception: an embed on a marketing page should read as "press play",
  // so it starts collapsed and only opens when the form actually blocks Run
  // (see `startEditorOpen`). Its own storage key, because the compact embed is
  // same-origin with the full runner and would otherwise inherit a preference
  // set over there.
  const [startOpen, setStartOpen] = usePersistentDisclosure(
    compact ? "start-compact" : "start",
    compact ? false : !!startSchema,
  );
  // Set when an invalid start form forces the editor open. Kept out of
  // `usePersistentDisclosure` on purpose: that setter writes to localStorage,
  // and this is not a disclosure preference — persisting it would leave every
  // later compact load rehydrating as open, including ones whose seeded form is
  // perfectly valid, which is exactly what compact mode is trying to avoid.
  const [forcedStartOpen, setForcedStartOpen] = useState(false);
  const [running, setRunning] = useState(false);
  // True only while a single `⏭ Step` round is in flight — distinct from
  // `running` (a continuous `driveLoop`), so the status badge and button
  // disabling can tell "mid-round" apart from "mid-drive".
  const [stepping, setStepping] = useState(false);
  const [compileError, setCompileError] = useState<string | null>(null);
  const [log, setLog] = useState<LogLine[]>([]);
  const [displayVars, setDisplayVars] = useState<Record<string, unknown>>({});
  // The payload the next instance will start with. Doubles as what the
  // variables panel shows before a run (and after Reset), so it previews the
  // input instead of an empty object.
  const pendingSeed = useMemo(
    () => ({
      ...example.seed,
      ...startValues,
      ...imageRefVariables(example.imageInput ? imageSelection : null),
    }),
    [example.seed, example.imageInput, startValues, imageSelection],
  );
  // The start form's live validity — Run stays disabled while a required
  // start-form field is missing, same as the review form below.
  // `null` until the lazy `FormRenderer` reports — which is not the same as
  // invalid. Run stays disabled either way, but only a reported `false` is
  // allowed to force the input editor open (see `startFormBlocking`).
  const [startFormValid, setStartFormValid] = useState<boolean | null>(null);
  const startFormRef = useRef<FormRendererHandle>(null);
  const [reviewValues, setReviewValues] = useState<Record<string, unknown>>({});
  // The rendered review form's live validity (required fields filled, etc.) —
  // "Complete task" must stay disabled while this is false, and
  // `reviewFormRef.current!.validate()` is the actual gate re-checked at
  // submit time, not just this display flag.
  const [reviewFormValid, setReviewFormValid] = useState(false);
  const reviewFormRef = useRef<FormRendererHandle>(null);

  const runningRef = useRef(false);
  // Monotonic generation token for `driveLoop`: `runningRef.current` alone
  // can't tell a stale in-flight round from a brand-new run, because Reset
  // clears it to `false` and a subsequent Start/manual-resume sets it back
  // to `true` before the stale round's `await` resolves — the boolean check
  // would then wrongly let the old round trace/update vars into the new run.
  // Each call that owns `driveLoop` captures the value *after* bumping this
  // ref and only proceeds past its `await` if the ref still matches (pattern
  // borrowed from `ModelEditor`'s `importSeqRef`), so Reset (which also
  // bumps it) reliably drops late arrivals even once `runningRef.current`
  // flips back to `true` for a new run.
  const runSeqRef = useRef(0);
  const logIdRef = useRef(0);
  // Shared with `buildWorkers` (compile.ts) and `makeLiveAgentRouter`
  // (agent/liveAgent.ts) for one run, so a tool's own trace entries land in
  // the same turn group as the agent entry that activated it — see
  // `TraceTimeline.tsx`. Recreated fresh in `start` below, per run.
  const turnRef = useRef<TurnRef>({ current: undefined });
  // The workers/agents maps from the run currently in progress, kept around
  // so a manual-control resolution (below) can resume the same drive loop
  // instead of rebuilding it.
  const workersRef = useRef<Record<string, JobHandler>>({});
  const agentsRef = useRef<Record<string, AgentHandler>>({});

  /** Element id -> human label, for the trace timeline and its engine-view panels. */
  const elementLabels = useMemo(() => {
    const map = new Map<string, string>();
    for (const p of model.processes) {
      for (const t of p.tasks) map.set(t.elementId, t.label);
      for (const a of p.agents) {
        map.set(a.elementId, a.label);
        for (const t of a.tools) map.set(t.elementId, t.label);
      }
      for (const u of p.userTasks) map.set(u.elementId, u.label);
    }
    return (elementId: string) => map.get(elementId) ?? elementId;
  }, [model]);

  /** Append a trace line — or update in place when it carries a `key`. */
  const trace = useCallback((entry: TraceEntry) => {
    setLog((prev) => {
      if (entry.key) {
        const at = prev.findIndex((l) => l.key === entry.key);
        if (at >= 0) {
          const next = [...prev];
          next[at] = { ...next[at], ...entry };
          return next;
        }
      }
      return [...prev, { ...entry, id: logIdRef.current++ }].slice(-80);
    });
  }, []);

  const openUserTask = useMemo(
    () => run.snapshot?.userTasks.find((t) => t.state === "Created") ?? null,
    [run.snapshot],
  );

  /**
   * Job types this example holds out of the automatic drive loop (see
   * `HandlerDef.manualControl`), keyed by the job type the engine actually
   * emits (not the element id) — that's what `run.snapshot.jobs` and the
   * `workers` map both key on.
   */
  const manualControls = useMemo(() => {
    const allTasks = model.processes.flatMap((p) => p.tasks);
    const map = new Map<
      string,
      NonNullable<(typeof example.handlers)[number]["manualControl"]> & {
        elementId: string;
      }
    >();
    for (const h of example.handlers) {
      if (!h.manualControl) continue;
      const task = allTasks.find((t) => t.elementId === h.elementId);
      if (task)
        map.set(task.jobType, { ...h.manualControl, elementId: h.elementId });
    }
    return map;
  }, [example.handlers, model]);

  /**
   * The one job, if any, currently waiting on a job type this example holds
   * back manually — the drive loop below stops here (nothing registered for
   * this job type) rather than completing it, so the reader gets a choice.
   */
  const pendingManualJob = useMemo(() => {
    if (!run.snapshot) return null;
    for (const job of run.snapshot.jobs) {
      const control = manualControls.get(job.jobType);
      if (control && job.state === "Created") return { job, control };
    }
    return null;
  }, [run.snapshot, manualControls]);

  /**
   * Agent tools that never ran this instance. When a human task opens with some
   * of these outstanding, the agent finished early — a hallucinated tool name,
   * or it declared itself done — and the process took a gateway's default path.
   * Saying so beats handing the reviewer a form full of dashes.
   *
   * Read from the engine's own per-element stats, so it holds for any diagram
   * rather than looking for an example's variable names.
   */
  const unrunTools = useMemo(() => {
    if (!model.agent || !run.snapshot) return [];
    const completed = new Map(
      run.snapshot.elementStats.map((s) => [s.elementId, s.completed]),
    );
    return model.agent.tools.filter(
      (t) => (completed.get(t.elementId) ?? 0) === 0,
    );
  }, [model.agent, run.snapshot]);
  const openUserTaskSpec = openUserTask
    ? model.userTasks.find((u) => u.elementId === openUserTask.elementId)
    : undefined;
  const reviewSchema = openUserTaskSpec?.formId
    ? ((example.forms?.[openUserTaskSpec.formId] as FormSchema | undefined) ??
      null)
    : null;

  /**
   * Drive `stepWorkers` to quiescence, completion, a human task, or a
   * manually-held job — shared by `start` and by `resolveManualControl`
   * below, which resumes exactly this loop after the reader picks how a
   * held-back job resolves (see `manualControls`/`pendingManualJob`).
   */
  const driveLoop = useCallback(
    async (
      workers: Record<string, JobHandler>,
      agents: Record<string, AgentHandler>,
      initialSnap: Snapshot | null,
      seq: number,
    ) => {
      let snap = initialSnap;
      let guard = 0;
      while (
        runSeqRef.current === seq &&
        snap &&
        snap.completedInstances < 1 &&
        guard++ < 80
      ) {
        const round = await run.stepWorkers(workers, { agents });
        // Reset (or a fresh Start/manual-resume that landed while this await
        // was in flight) can bump `runSeqRef` — checking that instead of the
        // resettable `runningRef.current` boolean means a stale round is
        // dropped even if a *new* run has since flipped `runningRef.current`
        // back to `true`. Bail out immediately and drop this round rather
        // than let it leak into whichever run is current now.
        if (runSeqRef.current !== seq) return snap;
        snap = round?.snapshot ?? snap;
        const vars = snap.instances[0]?.variables;
        if (vars) setDisplayVars({ ...vars });
        if (snap.userTasks.some((t) => t.state === "Created")) {
          trace({
            kind: "human",
            text: "⏸ waiting for a human — complete the task below to continue",
          });
          break;
        }
        if (!round) {
          // `stepWorkers` returned null on a dispatch error — surface that
          // explicitly rather than silently stopping as if the run had just
          // quiesced (see `handled === 0` below), so a Run doesn't go
          // "Paused" with no explanation.
          trace({
            kind: "error",
            text: "▶ run stopped — no dispatch round was returned",
          });
          break;
        }
        if (round.handled === 0) {
          // A round with nothing handled but a waiting message subscription
          // (`SettleReason: "messages"`) means the process is parked on a
          // message catch/boundary event — the in-browser equivalent of an
          // external system needing to publish it. Echo the subscription's
          // own `messageName`/`correlationKey` straight back via
          // `correlateMessage` (no extra variables) so a plain Run completes
          // the demo without a separate manual step; the panel below still
          // shows the correlation happening. Any settle reason not handled
          // here (an unhandled job type, an incident) still just stops the
          // loop below as before.
          const pendingMessage = snap.messageSubscriptions[0];
          if (round.reason === "messages" && pendingMessage) {
            trace({
              kind: "step",
              text: `⏳ parked on a message catch event — waiting for "${pendingMessage.messageName}"`,
              elementId: pendingMessage.elementId,
            });
            await new Promise((r) => setTimeout(r, BEAT));
            if (runSeqRef.current !== seq) return snap;
            trace({
              kind: "vars",
              text: `📨 correlating message "${pendingMessage.messageName}" (key: ${pendingMessage.correlationKey})`,
              elementId: pendingMessage.elementId,
            });
            const correlated = run.correlateMessage(
              pendingMessage.messageName,
              pendingMessage.correlationKey,
              "{}",
            );
            if (correlated) {
              snap = correlated;
              const correlatedVars = snap.instances[0]?.variables;
              if (correlatedVars) setDisplayVars({ ...correlatedVars });
              await new Promise((r) => setTimeout(r, BEAT));
              continue;
            }
            // `correlateMessage` returns null when the engine call threw, so
            // without this the loop stops right after the "correlating…" line
            // above and the failure reads as a successful correlation.
            trace({
              kind: "error",
              text: `▶ run stopped — correlating "${pendingMessage.messageName}" (key: ${pendingMessage.correlationKey}) failed`,
              elementId: pendingMessage.elementId,
            });
          }
          // The signal equivalent: a broadcast unblocks every open
          // subscription for the name at once, so the construct runs to
          // completion from a single Run click instead of settling "Paused".
          if (round.reason === "signals" && snap.signalSubscriptions.length > 0) {
            const sub = snap.signalSubscriptions[0];
            const waiting = snap.signalSubscriptions.length;
            trace({
              kind: "step",
              text: `⏳ parked on ${waiting} open signal subscription${waiting === 1 ? "" : "s"} — waiting for "${sub.signalName}"`,
              elementId: sub.elementId,
            });
            await new Promise((r) => setTimeout(r, BEAT));
            if (runSeqRef.current !== seq) return snap;
            const next = run.broadcastSignal(sub.signalName, "{}");
            if (next) {
              snap = next;
              trace({
                kind: "vars",
                text: `📡 broadcasting signal "${sub.signalName}" — every waiting subscription unblocks`,
                elementId: sub.elementId,
              });
              const signalVars = snap.instances[0]?.variables;
              if (signalVars) setDisplayVars({ ...signalVars });
              await new Promise((r) => setTimeout(r, BEAT));
              continue;
            }
            // `broadcastSignal` returns null when the engine call threw — say so
            // rather than dropping out of the loop as if the run had quiesced.
            trace({
              kind: "error",
              text: `▶ run stopped — broadcasting signal "${sub.signalName}" failed`,
              elementId: sub.elementId,
            });
          }
          // The timer equivalent: a pending timer that nobody's holding back
          // for a manual-control choice (that case surfaces as
          // "unhandledJobs" instead, since the job itself is still waiting —
          // see `HandlerDef.manualControl`). A plain intermediate/boundary
          // timer catch event has no job at all, so left alone the run would
          // look finished when it's merely waiting on the clock. Jump straight
          // to the earliest due timer and keep driving — the same move
          // `HandlerDef.manualControl`'s `kind: "timer"` button performs by
          // hand (see `resolveManualControl` below), just applied
          // automatically.
          if (round.reason === "timers") {
            const due = snap.timers.reduce(
              (min, t) => Math.min(min, t.dueInMs),
              Infinity,
            );
            if (Number.isFinite(due)) {
              // Log the parked state before jumping the clock, otherwise the
              // wait — the whole point of a timer catch event — leaves no
              // trace at all and the fast-forward reads as if nothing waited.
              trace({
                kind: "step",
                text: `⏳ parked on a timer — ${(Math.max(due, 0) / 1000).toFixed(1)}s left on the clock`,
              });
              await new Promise((r) => setTimeout(r, BEAT));
              if (runSeqRef.current !== seq) return snap;
              const advanced = run.advanceTime(Math.max(due, 0) + 1);
              if (advanced) {
                snap = advanced;
                trace({
                  kind: "step",
                  text: "🕐 the clock advanced — timer fired",
                });
                await new Promise((r) => setTimeout(r, BEAT));
                continue;
              }
            }
          }
          break;
        }
        await new Promise((r) => setTimeout(r, BEAT));
      }

      // Every `continue` above re-tests the generation in the `while` head,
      // but falling out of the loop lands here directly — without this a run
      // superseded by Reset still appends its outcome to the cleared log.
      if (runSeqRef.current !== seq) return snap;
      if (snap && snap.completedInstances >= 1)
        trace({ kind: "done", text: "✅ process instance completed" });
      else if (snap && snap.incidentElementIds.length > 0)
        trace({
          kind: "error",
          text: "A job failed — incident on the diagram",
        });
      return snap;
    },
    [run, trace],
  );

  /**
   * Resolve the job `pendingManualJob` is holding back, either by completing
   * it the normal way or by firing its boundary event (a timer or a thrown
   * BPMN error — see `HandlerDef.manualControl`), then resume the drive loop
   * with the same workers/agents the run started with.
   */
  const resolveManualControl = useCallback(
    async (choice: "complete" | "action") => {
      if (!pendingManualJob || runningRef.current) return;
      const { job, control } = pendingManualJob;
      const seq = ++runSeqRef.current;
      runningRef.current = true;
      setRunning(true);
      try {
        let snap: Snapshot | null;
        let successText: string;
        if (choice === "complete") {
          snap = run.completeJobManually(job.jobType, "{}");
          successText = "  ↳ completed normally";
        } else if (control.action.kind === "timer") {
          const dueInMs = run.snapshot?.timers[0]?.dueInMs ?? 0;
          snap = run.advanceTime(Math.max(dueInMs, 0) + 1);
          successText = `  ↳ advanced the clock — timer fired`;
        } else {
          const { errorCode, message } = control.action;
          snap = run.throwJobError(job.jobType, errorCode, message);
          successText = `  ↳ threw BPMN error ${errorCode}: ${message}`;
        }
        if (snap) {
          trace({ kind: "vars", text: successText, elementId: job.elementId });
          const vars = snap.instances[0]?.variables;
          if (vars) setDisplayVars({ ...vars });
          await new Promise((r) => setTimeout(r, BEAT));
          await driveLoop(workersRef.current, agentsRef.current, snap, seq);
        } else {
          trace({
            kind: "error",
            text: "  ↳ failed to resolve the manual job",
            elementId: job.elementId,
          });
        }
      } finally {
        // Same generation guard as `start` above — a Reset followed by a new
        // run before this call's own awaits settle must not have this stale
        // call mark the new run idle.
        if (runSeqRef.current === seq) {
          runningRef.current = false;
          setRunning(false);
        }
      }
    },
    [pendingManualJob, run, trace, driveLoop],
  );

  /**
   * Compile the scripted agent, build the `workers`/`agents` maps, reset the
   * per-run UI state, redeploy the draft XML, and create a fresh instance.
   * Shared by `start` and `step` — whichever one is pressed first on a fresh
   * page does this exactly once; the other one, and every step or Run after
   * it, reuses `workersRef`/`agentsRef` and the live `run.snapshot` instead
   * of calling this again (see `canResume` in both callbacks below), so
   * stepping and running always drive the *same* instance.
   */
  const beginRun = useCallback(async () => {
    // The scripted brain's agent code isn't part of the draft's handler
    // resolution (it's the LLM stand-in, not a BPMN element handler), so it's
    // still compiled here, next to the editor, before the engine is touched.
    let scripted: AgentHandler | null = null;
    try {
      if (model.agent && agentSource.trim())
        scripted = compileAgent(agentSource);
    } catch (e) {
      setCompileError(e instanceof Error ? e.message : String(e));
      return null;
    }

    // Fresh per run, so a tool's trace entries only group with this run's
    // agent turns — see the `turnRef` comment above.
    turnRef.current = { current: undefined };
    // Vision support (contract B): only for an `imageInput` example. The active
    // reader is the connected live browser-vision `VisionFn` when present, else
    // a `scripted-vision` brain built from this example's `scriptedVision`
    // ground truth — mirroring exactly how `brain.chat`/`scriptedAgent` pick the
    // agent's reader above. Handlers reach it via `helpers.vision`/`helpers.image`.
    let visionSupport: VisionSupport | undefined;
    if (example.imageInput) {
      const live: VisionFn | null = brain.vision;
      const read: VisionFn =
        live ?? makeScriptedVisionBrain(example.scriptedVision).read;
      visionSupport = {
        read,
        live: !!live,
        resolve: (instanceKey) => run.getRunImage(instanceKey),
      };
    }
    const workers = buildWorkers(
      model,
      draft.handlers,
      trace,
      turnRef.current,
      visionSupport,
    );
    // Job types this example holds back for a manual choice (see
    // `manualControls`/`pendingManualJob`) never auto-dispatch — the drive
    // loop below simply finds nothing registered for them and stops there.
    for (const jobType of manualControls.keys()) delete workers[jobType];

    // Which brain drives every agent host this run. Every AI Agent
    // sub-process shares one job type, so hosts are grouped by job type and
    // routed by `job.elementId` underneath — each keeps its own turn counter
    // and called-tools set instead of sharing one closure.
    const agents: Record<string, AgentHandler> = {};
    if (model.agents.length > 0) {
      const live = brain.kind !== "scripted" && brain.chat;
      if (live) {
        const byJobType = new Map<string, AgentSpec[]>();
        for (const spec of model.agents)
          byJobType.set(spec.jobType, [
            ...(byJobType.get(spec.jobType) ?? []),
            spec,
          ]);
        for (const [jobType, specs] of byJobType)
          agents[jobType] = makeLiveAgentRouter(specs, brain.chat!, trace, {
            turnRef: turnRef.current,
            requiredTools: example.requiredTools,
          });
      } else if (scripted && model.agent) {
        // The scripted brain is one closure today — it only drives the
        // primary process's first agent host. Every AI Agent host shares one
        // job type, so without an elementId guard this closure would also be
        // dispatched for any other host's jobs. Guard explicitly: any host
        // other than the primary throws, which the engine reports as an
        // incident on the diagram (not a silent stall, and not silently
        // driven by the primary host's closure).
        const primaryElementId = model.agent.elementId;
        agents[model.agent.jobType] = async (job) => {
          if (job.elementId !== primaryElementId) {
            throw new Error(
              `No scripted agent handler for "${job.elementId}" — only "${primaryElementId}" ` +
                `(the primary process's first agent host) is driven by the scripted brain. ` +
                `Use a live brain to exercise more than one host.`,
            );
          }
          const result = await scripted!(job);
          const tools = (result.activateElements ?? [])
            .map((a) => a.elementId)
            .join(", ");
          trace({
            kind: "agent",
            text: result.completionConditionFulfilled
              ? "🤖 scripted agent: done"
              : `🤖 scripted agent: calling ${tools || "(nothing)"}`,
          });
          return result;
        };
      }
    }

    setLog([]);
    setReviewValues({});
    // Only the *reference* to the image (imageId/imageName) rides in the
    // process variables — never the pixels (see `imageInput.ts`). The bytes are
    // put into run-scoped context below, keyed to the instance just created.
    const seed = pendingSeed;
    setDisplayVars(seed);
    workersRef.current = workers;
    agentsRef.current = agents;

    // Apply the draft XML to the engine now — not on every keystroke (see
    // `useExampleRun`'s `bpmn` param) — so Run/Step always execute exactly
    // what's in the editor. `draft.hasErrors` already gated both buttons
    // above, so this redeploy is against XML the model parser accepted.
    const ids = await run.redeploy(bpmn);
    const pid = ids?.[0] ?? model.processId;
    trace({
      kind: "start",
      text: `Starting "${pid}" — ${
        model.agent
          ? brain.kind === "scripted" || !brain.chat
            ? "scripted brain"
            : `live brain (${brain.modelInUse ?? brain.kind})`
          : "no agent in this model"
      }`,
    });
    const snap = run.createInstance(pid, JSON.stringify(seed));
    // Stash the picked image against the instance just created, so
    // `helpers.vision`/`helpers.image` can resolve it during the run.
    const instanceKey = snap?.instances[0]?.key;
    if (example.imageInput && imageSelection && instanceKey)
      run.setRunImage(instanceKey, imageSelection);
    return { workers, agents, snap };
  }, [
    run,
    example,
    draft,
    bpmn,
    agentSource,
    startValues,
    imageSelection,
    pendingSeed,
    model,
    brain,
    trace,
    manualControls,
  ]);

  /**
   * A live, not-yet-completed instance already exists (from a prior Run or
   * from stepping) — `start`/`step` should drive *it* forward with the
   * workers/agents it was built with, instead of calling `beginRun` and
   * starting a second one. `run.snapshot` is `null` right after `beginRun`'s
   * `redeploy` and only becomes non-null once `createInstance` runs, and
   * `reset()` (Reset) nulls it again — so this same check is what makes
   * Reset return the page to its pre-run state.
   */
  const canResume = !!run.snapshot && run.snapshot.completedInstances < 1;
  /** The start form (if any) is not yet known to be complete. */
  const needsStartForm = !canResume && !!startSchema && startFormValid !== true;
  /**
   * Reported invalid, as opposed to not yet reported. Never leave Run disabled
   * by a form the reader cannot see — but do not flash the editor open during
   * the moment before the lazy form first validates, which for a seeded example
   * ends in "valid" anyway.
   */
  const startFormBlocking = !canResume && !!startSchema && startFormValid === false;
  // Compact only: the full runner already opens the editor on a first visit
  // when the example has a start form, and forcing it there would override both
  // the "Done" button and a persisted closed preference.
  const startEditorOpen = startOpen || forcedStartOpen;

  // Latch the forced-open panel open. Without this it closes itself the instant
  // the last required field is filled — pulling focus out from under the reader
  // mid-form, and taking the optional fields with it.
  useEffect(() => {
    if (compact && startFormBlocking) setForcedStartOpen(true);
  }, [compact, startFormBlocking]);

  /** Closing has to drop the latch too, or the panel springs straight back open. */
  const setStartEditorOpen = (open: boolean) => {
    setStartOpen(open);
    if (!open) setForcedStartOpen(false);
  };

  const start = useCallback(async () => {
    // The draft already gates this in the UI (the Run button is disabled),
    // but re-check here too: `draft.hasErrors` is the single source of truth
    // for "safe to run", not just a button prop. Same for the start form's
    // validity — the button being disabled isn't the actual guarantee.
    if (run.phase !== "ready" || runningRef.current || stepping || draft.hasErrors)
      return;

    // Set the in-flight lock *before* the first `await` (matching
    // `resolveManualControl` above) so a second click landing while
    // `beginRun()` is still pending can't slip past the check above and
    // kick off a second redeploy/createInstance.
    runningRef.current = true;
    setRunning(true);
    // Captured before the `try` (not inside it) so the `finally` below can
    // still read it after a superseded call's awaits settle.
    const seq = ++runSeqRef.current;
    try {
      let workers = workersRef.current;
      let agents = agentsRef.current;
      let snap = run.snapshot;

      if (!canResume) {
        if (startFormRef.current && !startFormRef.current.validate()) return;
        setCompileError(null);
        const prepared = await beginRun();
        if (!prepared) return;
        workers = prepared.workers;
        agents = prepared.agents;
        snap = prepared.snap;
        await new Promise((r) => setTimeout(r, BEAT));
      }

      await driveLoop(workers, agents, snap, seq);
    } finally {
      // A Reset (bumping `runSeqRef`) followed by a new Start/manual-resume
      // before this call's own awaits settle would otherwise have this stale
      // call's cleanup mark the *new* run idle — only clear state if this is
      // still the current generation.
      if (runSeqRef.current === seq) {
        runningRef.current = false;
        setRunning(false);
      }
    }
  }, [run, stepping, draft.hasErrors, canResume, beginRun, driveLoop]);

  // Same conditions as the Run button's `disabled`, deliberately duplicated
  // from one place rather than inverted by hand at each call site.
  const canRun =
    run.phase === "ready" &&
    !running &&
    !stepping &&
    !draft.hasErrors &&
    !needsStartForm;

  useAutostart({
    enabled: autostart,
    ready: canRun,
    targetRef: runnerRef,
    start: () => void start(),
  });

  /**
   * Advance the *same* run by exactly one dispatch round (see
   * `useExampleRun.stepWorkers`) instead of driving it to quiescence — the
   * reader-controlled unit `driveLoop`'s continuous loop otherwise hides.
   * Reuses `beginRun` on a fresh page, exactly like `start` above, so
   * stepping from the very first press still creates the instance.
   */
  const step = useCallback(async () => {
    if (
      run.phase !== "ready" ||
      runningRef.current ||
      stepping ||
      draft.hasErrors
    )
      return;

    // Same in-flight lock as `start` above, set before the first `await` —
    // otherwise a second Step/Run click landing while `beginRun()` is still
    // pending slips past the check above and starts a second instance.
    runningRef.current = true;
    setStepping(true);
    // Captured for the same reason `start`/`resolveManualControl` capture it —
    // a Reset during one of this call's awaits must stop it from clobbering a
    // newer run's state in the `finally` below.
    const seq = ++runSeqRef.current;
    try {
      let workers = workersRef.current;
      let agents = agentsRef.current;
      let snap = run.snapshot;

      if (!canResume) {
        if (startFormRef.current && !startFormRef.current.validate()) return;
        setCompileError(null);
        const prepared = await beginRun();
        if (!prepared) return;
        workers = prepared.workers;
        agents = prepared.agents;
        snap = prepared.snap;
      }

      if (!snap || snap.completedInstances >= 1) return;

      // `takenSequenceFlows` only appends — the flows this one round takes
      // are exactly what lands past this length (see `newSequenceFlows`).
      const prevFlowCount = snap.takenSequenceFlows.length;
      const round = await run.stepWorkers(workers, { agents });
      if (!round) {
        trace({
          kind: "error",
          text: "⏭ step failed — no dispatch round was returned",
        });
        return;
      }
      const vars = round.snapshot.instances[0]?.variables;
      if (vars) setDisplayVars({ ...vars });
      const flows = newSequenceFlows(
        round.snapshot.takenSequenceFlows,
        prevFlowCount,
      );
      trace(
        describeRound(round, flows, elementLabels, manualControls),
      );
    } finally {
      if (runSeqRef.current === seq) {
        runningRef.current = false;
        setStepping(false);
      }
    }
  }, [
    run,
    stepping,
    draft.hasErrors,
    canResume,
    beginRun,
    trace,
    elementLabels,
    manualControls,
  ]);

  const stop = useCallback(async () => {
    runningRef.current = false;
    // Bump the generation token so any `driveLoop` round already in flight
    // (dispatched before Reset was clicked) is dropped even if a new
    // Start/manual-resume flips `runningRef.current` back to `true` before
    // that stale round's `await` resolves.
    runSeqRef.current++;
    setRunning(false);
    setStepping(false);
    // `run.reset()` waits for an in-flight round to settle before touching the
    // engine (see `inFlightRef` in useExampleRun) — with a live brain that can
    // be a whole model turn. Hold the run "busy" across the wait so pressing
    // Start in that window can't race the reset, and clear the log afterwards
    // so the settling round's own trace entries go with it.
    runningRef.current = true;
    try {
      await run.reset();
    } finally {
      runningRef.current = false;
    }
    setLog([]);
    setDisplayVars({});
  }, [run]);

  const submitUserTask = useCallback(() => {
    if (!openUserTask) return;
    // Re-validate synchronously rather than trusting only the last
    // `onValidityChange` flag — this is the actual submit-time gate; a form
    // with no linked schema (reviewFormRef unset) has nothing to validate.
    if (reviewFormRef.current && !reviewFormRef.current.validate()) return;
    const snap = run.completeUserTask(
      openUserTask.key,
      JSON.stringify(reviewValues),
    );
    trace({ kind: "human", text: `👤 ${safeStringify(reviewValues)}` });
    // A completed instance reports `variables: {}`, so read the snapshot over
    // the submission only while there's still an instance carrying state —
    // otherwise completing the last task would blank the card.
    const vars = snap?.instances[0]?.variables;
    setDisplayVars((prev) => ({ ...prev, ...reviewValues, ...(vars ?? {}) }));
    if (snap && snap.completedInstances >= 1)
      trace({ kind: "done", text: "✅ process instance completed" });
  }, [openUserTask, reviewValues, run, trace]);

  const statusBadge = useMemo(() => {
    if (run.phase === "loading")
      return <Badge variant="neutral">Booting engine…</Badge>;
    if (run.phase === "error")
      return <Badge variant="danger">Engine error</Badge>;
    if (running) return <Badge variant="info">Running…</Badge>;
    if (stepping) return <Badge variant="info">Stepping…</Badge>;
    if ((run.snapshot?.incidentElementIds.length ?? 0) > 0)
      return <Badge variant="danger">Incident</Badge>;
    if (openUserTask)
      return <Badge variant="warning">Waiting for a human</Badge>;
    if ((run.snapshot?.completedInstances ?? 0) >= 1)
      return <Badge variant="success">Completed</Badge>;
    // An incomplete run that has quiesced short of completion — via Step, or
    // via Run stopping on a wait state (timer/message/signal). Reset still
    // clears this back to "Ready" (see `stop`/`canResume`) — this is not a
    // stalled run, just a paused one.
    if (run.snapshot) return <Badge variant="warning">Paused</Badge>;
    return <Badge variant="neutral">Ready</Badge>;
  }, [run.phase, run.snapshot, running, stepping, openUserTask]);

  // A blurb is plain prose authored with blank lines between paragraphs; one
  // `<p>` per paragraph so a long explanation isn't a single wall of text.
  const blurbParagraphs = useMemo(
    () =>
      example.blurb
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean),
    [example.blurb],
  );

  return (
    <div className="runner" ref={runnerRef}>
      {/* An iframe is its own document with its own heading outline, so the
          host page's heading does not cover this one. Compact keeps the
          example's identity for heading navigation and drops only the copy. */}
      {compact ? (
        <h1 className="visually-hidden">{example.title}</h1>
      ) : (
        <section className="intro">
          <h1>{example.title}</h1>
          {blurbParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      )}

      {example.imageInput && (
        <ImageInputPanel
          imageInput={example.imageInput}
          value={imageSelection}
          onSelect={setImageSelection}
          disabled={running}
        />
      )}

      <div className="scenario">
        <span className="scenario-label" id="scenario-label">
          {example.scenariosLabel ?? "Example input"}
        </span>
        {example.scenarios && (
          <div
            className="scenario-toggle"
            role="group"
            aria-labelledby="scenario-label"
          >
            {example.scenarios.map((s, i) => (
              <Button
                key={s.label}
                size="sm"
                variant={i === selectedScenario ? "default" : "secondary"}
                aria-pressed={i === selectedScenario}
                disabled={running}
                onClick={() =>
                  setStartValues((prev) => ({ ...prev, ...s.variables }))
                }
              >
                {s.label}
              </Button>
            ))}
          </div>
        )}
        <button
          type="button"
          className="scenario-input-button"
          onClick={() => setStartEditorOpen(!startEditorOpen)}
          aria-expanded={startEditorOpen}
          aria-controls="start-input-editor"
          title="Edit the starting payload"
        >
          <span className="scenario-edit-icon" aria-hidden>
            ✎
          </span>{" "}
          input: <code>{summarizeStart(startValues)}</code>
        </button>
        {needsStartForm && (
          <span className="scenario-hint">
            Fill in the input to enable Run
          </span>
        )}
      </div>

      {/* Hidden rather than unmounted while collapsed: the start form reports
          its validity through `onValidityChange`, and Run is gated on it — an
          unmounted form never reports, so Run would stay disabled forever. */}
      <div
        className="inline-input-editor"
        id="start-input-editor"
        hidden={!startEditorOpen}
      >
        <div className="inline-input-editor-head">
          <div>
            <div className="inline-input-editor-title">
              {model.startFormId ? "Start form" : "Start payload"}
            </div>
            <div className="inline-input-editor-copy">
              {model.startFormId
                ? `Rendered from the model's start form "${model.startFormId}".`
                : "The variables the instance starts with."}
            </div>
          </div>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setStartEditorOpen(false)}
          >
            Done
          </Button>
        </div>
        {startSchema ? (
          <Suspense fallback={<div className="form-fallback">Loading form…</div>}>
            <FormRenderer
              ref={startFormRef}
              schema={startSchema}
              values={startValues}
              onChange={(k, v) => setStartValues((prev) => ({ ...prev, [k]: v }))}
              disabled={running}
              onValidityChange={setStartFormValid}
            />
          </Suspense>
        ) : (
          <pre className="vars">{safeStringify(startValues, 2)}</pre>
        )}
      </div>

      {!compact && (model.agent || example.imageInput) && (
        <CollapsibleCard
          sectionId="brain"
          className="brain-card"
          data-tour={TOUR_ANCHOR.brainPanel}
          title="Agent brain"
          description={
            model.agent
              ? `What drives “${model.agent.label}”. The model recommends; the process governs.`
              : "What reads the image. The model recommends; the process governs."
          }
        >
          <BrainPanel
            brain={brain}
            showText={!!model.agent}
            showVision={!!example.imageInput}
          />
        </CollapsibleCard>
      )}

      <div className="controls">
        <Button
          data-tour={TOUR_ANCHOR.runButton}
          onClick={() => void start()}
          disabled={!canRun}
        >
          ▶ Run
        </Button>
        <Button
          variant="secondary"
          onClick={() => void step()}
          disabled={
            run.phase !== "ready" ||
            running ||
            stepping ||
            draft.hasErrors ||
            needsStartForm ||
            (run.snapshot?.completedInstances ?? 0) >= 1
          }
        >
          ⏭ Step
        </Button>
        <Button
          variant="secondary"
          onClick={() => void stop()}
          disabled={run.phase !== "ready" || stepping}
        >
          ↺ Reset
        </Button>
        {example.tour && (
          <Button
            variant="secondary"
            onClick={tour.start}
            disabled={tour.active}
          >
            {tour.active ? "Touring…" : `🧭 ${example.tour.label}`}
          </Button>
        )}
        {statusBadge}
      </div>

      {run.phase === "error" && (
        <Alert variant="destructive">
          <AlertTitle>Engine error</AlertTitle>
          <AlertDescription>{run.error}</AlertDescription>
        </Alert>
      )}
      {compileError && (
        <Alert variant="destructive">
          <AlertTitle>Code didn't compile</AlertTitle>
          <AlertDescription>{compileError}</AlertDescription>
        </Alert>
      )}
      {draft.hasErrors && (
        <Alert variant="destructive">
          <AlertTitle>
            Run is disabled — the diagram has unresolved references
          </AlertTitle>
          <AlertDescription>
            <ul className="diagnostics">
              {draft.diagnostics
                .filter((d) => d.severity === "error")
                .map((d, i) => (
                  <li key={i}>{d.message}</li>
                ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}
      {!draft.hasErrors && draft.diagnostics.length > 0 && (
        <Alert>
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>
            <ul className="diagnostics">
              {draft.diagnostics.map((d, i) => (
                <li key={i}>{d.message}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid">
        <div className="col">
          <CollapsibleCard
            sectionId="process"
            data-tour={TOUR_ANCHOR.diagram}
            title="Process"
            description={`${model.processName} — live token (green), incidents (red).`}
          >
            {/* Render the Suspense boundary unconditionally so the lazy
                diagram chunk starts downloading immediately, in parallel
                with engine boot, instead of waiting for `run.phase` to
                leave "loading" first. */}
            <Suspense
              fallback={
                <div className="diagram-fallback">
                  {run.phase === "loading"
                    ? "Booting the engine…"
                    : "Loading diagram…"}
                </div>
              }
            >
              <BpmnRuntimeView
                xml={draft.resolvedBpmn}
                activeIds={run.snapshot?.activeElementIds ?? []}
                incidentIds={run.snapshot?.incidentElementIds ?? []}
                className="diagram"
              />
            </Suspense>
          </CollapsibleCard>

          {openUserTask && (
            <CollapsibleCard
              sectionId="human-task"
              title={openUserTaskSpec?.label ?? "Human task"}
              description={
                reviewSchema
                  ? `Rendered from the model's form "${openUserTaskSpec?.formId}".`
                  : "This task has no linked form — complete it with no variables."
              }
            >
              {unrunTools.length > 0 && (
                <Alert variant="destructive">
                  <AlertTitle>The agent didn't finish its checks</AlertTitle>
                  <AlertDescription>
                    It completed without running{" "}
                    {unrunTools.map((t) => t.label || t.elementId).join(", ")}
                    . The process took the default path to this task, so the
                    findings below have no value to report.
                  </AlertDescription>
                </Alert>
              )}
              {reviewSchema && (
                <Suspense fallback={<div className="form-fallback">Loading form…</div>}>
                  <FormRenderer
                    ref={reviewFormRef}
                    schema={reviewSchema}
                    values={reviewValues}
                    onChange={(k, v) =>
                      setReviewValues((prev) => ({ ...prev, [k]: v }))
                    }
                    context={displayVars}
                    onValidityChange={setReviewFormValid}
                  />
                </Suspense>
              )}
              <Button
                onClick={submitUserTask}
                disabled={!!reviewSchema && !reviewFormValid}
              >
                Complete task
              </Button>
            </CollapsibleCard>
          )}

          {pendingManualJob && (
            <CollapsibleCard
              sectionId="manual-job"
              title={pendingManualJob.control.label}
              description="This job is held here on purpose — pick how it resolves."
            >
              <div className="controls">
                <Button
                  onClick={() => void resolveManualControl("complete")}
                  disabled={running || stepping}
                >
                  {pendingManualJob.control.completeLabel ??
                    "✅ Complete normally"}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => void resolveManualControl("action")}
                  disabled={running || stepping}
                >
                  {pendingManualJob.control.action.label}
                </Button>
              </div>
            </CollapsibleCard>
          )}

        </div>

        <div className="col">
          <TraceTimeline
            log={log}
            elementStats={run.snapshot?.elementStats}
            incidents={run.snapshot?.incidents}
            labelFor={elementLabels}
            variables={
              <div className="vars-block" data-tour={TOUR_ANCHOR.variablesPanel}>
                <div className="vars-head">Instance variables</div>
                <pre className="vars">
                  {safeStringify(
                    Object.keys(displayVars).length > 0 ? displayVars : pendingSeed,
                    2,
                  )}
                </pre>
              </div>
            }
          />
        </div>
      </div>

      {!compact && (
      <div className="runner-secondary">
        <CollapsibleCard
          sectionId="code"
          className="editors"
          data-tour={TOUR_ANCHOR.codePanel}
          defaultOpen={false}
          title="Code"
          description="One handler per BPMN element, plus a model tab holding the editable diagram — select an element there to edit its properties. Return variables to merge, or throw to fail the job."
        >
          <Suspense
            fallback={
              <div className="editor-fallback">Loading editor…</div>
            }
          >
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value={MODEL_TAB}>model</TabsTrigger>
                  {model.agent && (
                    <TabsTrigger value={AGENT_TAB}>
                      agent (scripted)
                    </TabsTrigger>
                  )}
                  {example.handlers.map((h) => (
                    <TabsTrigger key={h.elementId} value={h.elementId}>
                      {model.tasks.find((t) => t.elementId === h.elementId)
                        ?.label ?? h.elementId}
                    </TabsTrigger>
                  ))}
                  {Object.keys(templateSources).map((name) => (
                    <TabsTrigger key={name} value={TEMPLATE_TAB_PREFIX + name}>
                      {name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value={MODEL_TAB}>
                  <div className="editor-meta">
                    <strong>Model</strong>
                    <code>
                      click an element to edit its properties on the right — Run
                      re-reads whatever you leave here
                    </code>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setBpmn(example.bpmn)}
                      disabled={bpmn === example.bpmn}
                    >
                      Revert to original
                    </Button>
                  </div>
                  <ModelEditor value={bpmn} onChange={setBpmn} />
                </TabsContent>

                {model.agent && (
                  <TabsContent value={AGENT_TAB}>
                    <div className="editor-meta">
                      <strong>{model.agent.label}</strong>
                      <code>
                        {brain.kind === "scripted" || !brain.chat
                          ? "in use"
                          : "unused — a live brain is connected"}
                      </code>
                    </div>
                    <div className="editor-wrap">
                      <Editor
                        height="360px"
                        defaultLanguage="javascript"
                        value={agentSource}
                        onChange={(v) => setAgentSource(v ?? "")}
                        options={editorOptions}
                      />
                    </div>
                  </TabsContent>
                )}

                {example.handlers.map((h) => (
                  <TabsContent key={h.elementId} value={h.elementId}>
                    <div className="editor-meta">
                      <strong>
                        {model.tasks.find((t) => t.elementId === h.elementId)
                          ?.label ?? h.elementId}
                      </strong>
                      <code>{h.standsInFor ?? h.elementId}</code>
                    </div>
                    <div className="editor-wrap">
                      <Editor
                        height="360px"
                        defaultLanguage="javascript"
                        value={sources[h.elementId]}
                        onChange={(v) =>
                          setSources((prev) => ({
                            ...prev,
                            [h.elementId]: v ?? "",
                          }))
                        }
                        options={editorOptions}
                      />
                    </div>
                  </TabsContent>
                ))}

                {/*
                 * Prompts as editable assets: each `{{name}}` template gets
                 * its own tab, edited as plain text — not JS, and not the raw
                 * FEEL/XML it's substituted into. A change here reaches the
                 * agent on the next run, through the same draft-definition
                 * pipeline as any other edit (see templates.ts / draft.ts).
                 */}
                {Object.keys(templateSources).map((name) => (
                  <TabsContent key={name} value={TEMPLATE_TAB_PREFIX + name}>
                    <div className="editor-meta">
                      <strong>{name}</strong>
                      <code>
                        prompt / template text — substitutes{" "}
                        {"{{" + name + "}}"}
                      </code>
                    </div>
                    <div className="editor-wrap">
                      <Editor
                        height="360px"
                        defaultLanguage="markdown"
                        value={templateSources[name]}
                        onChange={(v) =>
                          setTemplateSources((prev) =>
                            createTemplateMap(prev, { [name]: v ?? "" }),
                          )
                        }
                        options={editorOptions}
                      />
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Suspense>
          </CollapsibleCard>

          {model.agent && (
            <CollapsibleCard
              sectionId="tools"
              defaultOpen={false}
              title="Tools, as the model sees them"
              description={
                <>
                  Read from the diagram — element name, documentation, and every
                  <code> fromAi(…)</code> argument.
                </>
              }
            >
              <ul className="tool-list">
                {model.agent.tools.map((t) => (
                  <li key={t.elementId}>
                    <code>{t.elementId}</code>
                    <span> — {t.documentation || t.label}</span>
                    {t.args.length > 0 && (
                      <ul>
                        {t.args.map((a) => (
                          <li key={a.name}>
                            <code>
                              {a.name}: {a.type}
                            </code>{" "}
                            — {a.description}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </CollapsibleCard>
          )}
      </div>
      )}
    </div>
  );
}

const editorOptions = {
  minimap: { enabled: false },
  fontSize: 13,
  scrollBeyondLastLine: false,
  tabSize: 2,
  automaticLayout: true,
} as const;
