import { useCallback, useMemo, useRef, useState } from "react";
import { BpmnRuntimeView, type AgentHandler } from "@nanobpm/bojtos-react";
import Editor from "@monaco-editor/react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@camunda/design-system";
import type { AgentSpec } from "../model";
import { buildDraftRunDefinition } from "../draft";
import { buildWorkers, compileAgent } from "../compile";
import { makeLiveAgentRouter } from "../agent/liveAgent";
import { useExampleRun } from "../useExampleRun";
import { useBrain } from "../useBrain";
import { BrainPanel } from "./BrainPanel";
import {
  FormRenderer,
  formDefaults,
  type FormRendererHandle,
  type FormSchema,
} from "./FormRenderer";
import { ModelEditor } from "./ModelEditor";
import type { ExampleDef, TraceEntry } from "../types";
import { createTemplateMap, type TemplateMap } from "../templates";

/** Milliseconds the token pauses between dispatch rounds, so a run is watchable. */
const BEAT = 650;
const AGENT_TAB = "__agent__";
const MODEL_TAB = "__model__";
/** Tab-id prefix for a prompt/template editor tab, namespaced away from element ids. */
const TEMPLATE_TAB_PREFIX = "__template__:";

function safeStringify(value: unknown, space?: number): string {
  try {
    return JSON.stringify(value ?? {}, null, space);
  } catch {
    return "[unserializable value]";
  }
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
export function ExampleRunner({ example }: { example: ExampleDef }) {
  // The diagram is data, not a static import: lifted into state so the new
  // XML editor tab (and, later, a visual bpmn-js Modeler behind the same
  // seam) can hand-edit it and have every downstream consumer — the
  // diagnostics, the diagram view — see the edit as it's typed. The engine
  // itself only sees this draft on the next Run (via `run.redeploy`, in
  // `start` below): feeding every keystroke straight into `useExampleRun`
  // would tear down and redeploy the whole session on every character typed,
  // repeatedly wiping the previous run's state mid-edit.
  const [bpmn, setBpmn] = useState(example.bpmn);
  const brain = useBrain();

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

  // The start form comes from the model's start-event `formId`, if it has one.
  const startSchema = model.startFormId
    ? ((example.forms?.[model.startFormId] as FormSchema | undefined) ?? null)
    : null;
  const [startValues, setStartValues] = useState<Record<string, unknown>>(() => ({
    ...example.seed,
    ...(startSchema ? formDefaults(startSchema) : {}),
  }));

  const [activeTab, setActiveTab] = useState<string>(
    model.agent ? AGENT_TAB : (example.handlers[0]?.elementId ?? ""),
  );
  const [running, setRunning] = useState(false);
  const [compileError, setCompileError] = useState<string | null>(null);
  const [log, setLog] = useState<LogLine[]>([]);
  const [displayVars, setDisplayVars] = useState<Record<string, unknown>>({});
  // The start form's live validity — Run stays disabled while a required
  // start-form field is missing, same as the review form below.
  const [startFormValid, setStartFormValid] = useState(false);
  const startFormRef = useRef<FormRendererHandle>(null);
  const [reviewValues, setReviewValues] = useState<Record<string, unknown>>({});
  // The rendered review form's live validity (required fields filled, etc.) —
  // "Complete task" must stay disabled while this is false, and
  // `reviewFormRef.current!.validate()` is the actual gate re-checked at
  // submit time, not just this display flag.
  const [reviewFormValid, setReviewFormValid] = useState(false);
  const reviewFormRef = useRef<FormRendererHandle>(null);

  const runningRef = useRef(false);
  const logIdRef = useRef(0);
  const logListRef = useRef<HTMLDivElement>(null);

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
    queueMicrotask(() => {
      const el = logListRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }, []);

  const openUserTask = useMemo(
    () => run.snapshot?.userTasks.find((t) => t.state === "Created") ?? null,
    [run.snapshot],
  );

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
    return model.agent.tools.filter((t) => (completed.get(t.elementId) ?? 0) === 0);
  }, [model.agent, run.snapshot]);
  const openUserTaskSpec = openUserTask
    ? model.userTasks.find((u) => u.elementId === openUserTask.elementId)
    : undefined;
  const reviewSchema = openUserTaskSpec?.formId
    ? ((example.forms?.[openUserTaskSpec.formId] as FormSchema | undefined) ??
      null)
    : null;

  const start = useCallback(async () => {
    // The draft already gates this in the UI (the Run button is disabled),
    // but re-check here too: `draft.hasErrors` is the single source of truth
    // for "safe to run", not just a button prop. Same for the start form's
    // validity — the button being disabled isn't the actual guarantee.
    if (
      run.phase !== "ready" ||
      runningRef.current ||
      draft.hasErrors ||
      (startFormRef.current && !startFormRef.current.validate())
    )
      return;
    setCompileError(null);

    // The scripted brain's agent code isn't part of the draft's handler
    // resolution (it's the LLM stand-in, not a BPMN element handler), so it's
    // still compiled here, next to the editor, before the engine is touched.
    let scripted: AgentHandler | null = null;
    try {
      if (model.agent && agentSource.trim())
        scripted = compileAgent(agentSource);
    } catch (e) {
      setCompileError(e instanceof Error ? e.message : String(e));
      return;
    }

    const workers = buildWorkers(model, draft.handlers, trace);

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
          byJobType.set(spec.jobType, [...(byJobType.get(spec.jobType) ?? []), spec]);
        for (const [jobType, specs] of byJobType)
          agents[jobType] = makeLiveAgentRouter(specs, brain.chat!, trace);
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

    runningRef.current = true;
    setRunning(true);
    setLog([]);
    setReviewValues({});
    const seed = { ...example.seed, ...startValues };
    setDisplayVars(seed);

    try {
      // Apply the draft XML to the engine now — not on every keystroke (see
      // `useExampleRun`'s `bpmn` param) — so Run always executes exactly
      // what's in the editor. `draft.hasErrors` already gated the button
      // above, so this redeploy is against XML the model parser accepted.
      const ids = run.redeploy(bpmn);
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
      let snap = run.createInstance(pid, JSON.stringify(seed));
      await new Promise((r) => setTimeout(r, BEAT));

      let guard = 0;
      while (
        runningRef.current &&
        snap &&
        snap.completedInstances < 1 &&
        guard++ < 80
      ) {
        const round = await run.stepWorkers(workers, { agents });
        snap = round?.snapshot ?? snap;
        const vars = snap.instances[0]?.variables;
        if (vars && Object.keys(vars).length) setDisplayVars({ ...vars });
        if (snap.userTasks.some((t) => t.state === "Created")) {
          trace({
            kind: "human",
            text: "⏸ waiting for a human — complete the task below to continue",
          });
          break;
        }
        if (!round || round.handled === 0) break;
        await new Promise((r) => setTimeout(r, BEAT));
      }

      if (snap && snap.completedInstances >= 1)
        trace({ kind: "done", text: "✅ process instance completed" });
      else if (snap && snap.incidentElementIds.length > 0)
        trace({ kind: "error", text: "A job failed — incident on the diagram" });
    } finally {
      runningRef.current = false;
      setRunning(false);
    }
  }, [run, example, draft, bpmn, agentSource, startValues, model, brain, trace]);

  const stop = useCallback(() => {
    runningRef.current = false;
    setRunning(false);
    run.reset();
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
    if (snap && snap.completedInstances >= 1)
      trace({ kind: "done", text: "✅ process instance completed" });
  }, [openUserTask, reviewValues, run, trace]);

  const statusBadge = useMemo(() => {
    if (run.phase === "loading")
      return <Badge variant="neutral">Booting engine…</Badge>;
    if (run.phase === "error") return <Badge variant="danger">Engine error</Badge>;
    if (running) return <Badge variant="info">Running…</Badge>;
    if ((run.snapshot?.incidentElementIds.length ?? 0) > 0)
      return <Badge variant="danger">Incident</Badge>;
    if (openUserTask) return <Badge variant="warning">Waiting for a human</Badge>;
    if ((run.snapshot?.completedInstances ?? 0) >= 1)
      return <Badge variant="success">Completed</Badge>;
    return <Badge variant="neutral">Ready</Badge>;
  }, [run.phase, run.snapshot, running, openUserTask]);

  return (
    <div className="runner">
      <section className="intro">
        <h1>{example.title}</h1>
        <p>{example.blurb}</p>
        <div className="controls">
          <Button
            onClick={() => void start()}
            disabled={
              run.phase !== "ready" ||
              running ||
              draft.hasErrors ||
              (!!startSchema && !startFormValid)
            }
          >
            ▶ Run
          </Button>
          <Button variant="secondary" onClick={stop} disabled={run.phase !== "ready"}>
            ↺ Reset
          </Button>
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
            <AlertTitle>Run is disabled — the diagram has unresolved references</AlertTitle>
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
      </section>

      <div className="grid">
        <div className="col">
          <Card className="panel">
            <CardHeader>
              <CardTitle>Process</CardTitle>
              <CardDescription>
                {model.processName} — live token (green), incidents (red).
              </CardDescription>
            </CardHeader>
            <CardContent>
              {run.phase === "loading" ? (
                <div className="diagram-fallback">Booting the engine…</div>
              ) : (
                <BpmnRuntimeView
                  xml={draft.resolvedBpmn}
                  activeIds={run.snapshot?.activeElementIds ?? []}
                  incidentIds={run.snapshot?.incidentElementIds ?? []}
                  className="diagram"
                />
              )}
            </CardContent>
          </Card>

          {openUserTask && (
            <Card className="panel">
              <CardHeader>
                <CardTitle>{openUserTaskSpec?.label ?? "Human task"}</CardTitle>
                <CardDescription>
                  {reviewSchema
                    ? `Rendered from the model's form "${openUserTaskSpec?.formId}".`
                    : "This task has no linked form — complete it with no variables."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {unrunTools.length > 0 && (
                  <Alert variant="destructive">
                    <AlertTitle>The agent didn't finish its checks</AlertTitle>
                    <AlertDescription>
                      It completed without running{" "}
                      {unrunTools.map((t) => t.label || t.elementId).join(", ")}.
                      The process took the default path to this task, so the
                      findings below have no value to report.
                    </AlertDescription>
                  </Alert>
                )}
                {reviewSchema && (
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
                )}
                <Button
                  onClick={submitUserTask}
                  disabled={!!reviewSchema && !reviewFormValid}
                >
                  Complete task
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="row">
            <Card className="panel grow">
              <CardHeader>
                <CardTitle>Variables</CardTitle>
                <CardDescription>The instance payload, live.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="vars">{safeStringify(displayVars, 2)}</pre>
              </CardContent>
            </Card>

            <Card className="panel grow">
              <CardHeader>
                <CardTitle>Activity</CardTitle>
                <CardDescription>
                  Agent turns, model replies, and tool calls.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="log" ref={logListRef}>
                  {log.length === 0 ? (
                    <div className="log-empty">Press Run to start.</div>
                  ) : (
                    log.map((l) => (
                      <div key={l.id} className={`log-line log-${l.kind}`}>
                        {l.pending ? "⏳ " : ""}
                        {l.text}
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="col">
          {model.agent && (
            <Card className="panel">
              <CardHeader>
                <CardTitle>Brain</CardTitle>
                <CardDescription>
                  What drives “{model.agent.label}”. The model recommends; the
                  process governs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BrainPanel brain={brain} />
              </CardContent>
            </Card>
          )}

          <Card className="panel">
            <CardHeader>
              <CardTitle>Start</CardTitle>
              <CardDescription>
                {model.startFormId
                  ? `The model's start form "${model.startFormId}".`
                  : "The starting payload."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {example.scenarios && (
                <div className="scenarios">
                  {example.scenarios.map((s) => (
                    <Button
                      key={s.label}
                      size="sm"
                      variant="secondary"
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
              {startSchema ? (
                <FormRenderer
                  ref={startFormRef}
                  schema={startSchema}
                  values={startValues}
                  onChange={(k, v) =>
                    setStartValues((prev) => ({ ...prev, [k]: v }))
                  }
                  disabled={running}
                  onValidityChange={setStartFormValid}
                />
              ) : (
                <pre className="vars">{safeStringify(startValues, 2)}</pre>
              )}
            </CardContent>
          </Card>

          <Card className="panel editors">
            <CardHeader>
              <CardTitle>Code</CardTitle>
              <CardDescription>
                One handler per BPMN element. Return variables to merge, or throw
                to fail the job.
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value={MODEL_TAB}>model (XML)</TabsTrigger>
                  {model.agent && (
                    <TabsTrigger value={AGENT_TAB}>agent (scripted)</TabsTrigger>
                  )}
                  {example.handlers.map((h) => (
                    <TabsTrigger key={h.elementId} value={h.elementId}>
                      {model.tasks.find((t) => t.elementId === h.elementId)
                        ?.label ?? h.elementId}
                    </TabsTrigger>
                  ))}
                  {Object.keys(templateSources).map((name) => (
                    <TabsTrigger
                      key={name}
                      value={TEMPLATE_TAB_PREFIX + name}
                    >
                      {name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value={MODEL_TAB}>
                  <div className="editor-meta">
                    <strong>BPMN XML</strong>
                    <code>hand-edit the diagram — Run re-checks it below</code>
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
                      <code>prompt / template text — substitutes {"{{" + name + "}}"}</code>
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
            </CardContent>
          </Card>

          {model.agent && (
            <Card className="panel">
              <CardHeader>
                <CardTitle>Tools, as the model sees them</CardTitle>
                <CardDescription>
                  Read from the diagram — element name, documentation, and every
                  <code> fromAi(…)</code> argument.
                </CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          )}
        </div>
      </div>
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
