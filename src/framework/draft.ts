/**
 * The atomic "draft run definition": everything the runner needs to know
 * *before* pressing Run, bundled with every reason it might not be safe to.
 *
 * Today, an unresolved reference (a renamed tool, a service task with a new
 * job type, a dangling `formId`) surfaces mid-run as a thrown "no handler
 * registered" incident or a user task that silently opens with nothing to
 * show. That's a bad moment for a reader trying to learn from an edit: the
 * failure arrives disconnected from the edit that caused it.
 *
 * `buildDraftRunDefinition` closes that gap. It parses the model, resolves
 * every handler and form the model references against what the example
 * actually supplies, and returns a full list of diagnostics — each one naming
 * the element or resource responsible. `hasErrors` is the single flag the UI
 * needs to gate the Run button; `diagnostics` is what it shows instead.
 *
 * See docs/supported-edits.md for which edits this catches and which it
 * doesn't yet.
 */

import type { ExampleDef, ExampleHandler } from "./types";
import { parseModel, type Diagnostic, type ModelInfo, type TaskListenerSpec } from "./model";
import { compileHandler } from "./compile";
import { createTemplateMap, substituteTemplates } from "./templates";
import type { FormSchema } from "./ui/FormRenderer";

export type { Diagnostic };

export interface DraftRunDefinition {
  /**
   * `example.bpmn` with every `{{name}}` prompt-template placeholder
   * substituted (see `templates.ts`) — this, not `example.bpmn`, is what was
   * actually parsed and is what must be deployed, so the reader sees and runs
   * exactly the model the diagnostics below are about.
   */
  resolvedBpmn: string;
  /** The parsed model — every process, agent host, task and diagnostic model.ts found. */
  model: ModelInfo;
  /** Compiled handlers, keyed by BPMN element id. Only elements that compiled cleanly appear. */
  handlers: Record<string, ExampleHandler>;
  /** Resolved form schemas, keyed by `formId`. Only forms that resolved appear. */
  forms: Record<string, FormSchema>;
  /**
   * Every unresolved reference, unsupported construct and unknown job type
   * found while building this definition — model-level diagnostics plus the
   * handler/form cross-referencing this module does on top.
   */
  diagnostics: Diagnostic[];
  /** True when `diagnostics` contains at least one `"error"` — Run must be disabled. */
  hasErrors: boolean;
}

function emptyModel(): ModelInfo {
  return {
    processes: [],
    diagnostics: [],
    processId: "",
    processName: "",
    tasks: [],
    agent: null,
    agents: [],
    userTasks: [],
    taskListeners: [],
    startFormId: undefined,
    boundaryEvents: [],
  };
}

/**
 * Build the draft run definition for `example`, with `sources` (the editor's
 * live, possibly-edited handler code, keyed by element id) taking precedence
 * over the example's own default `handlers`, `bpmn` (the editor's live,
 * possibly-edited model XML) taking precedence over `example.bpmn` — this is
 * the seam the model-editing XML tab feeds edits through, so a hand-edited
 * diagram is gated by exactly the same diagnostics as the example's default
 * one, not a separate one-off error path — and `templateSources` (the
 * editor's live, possibly-edited prompt/template text, keyed by template
 * name) taking precedence over the example's own default `templates`.
 *
 * Substitution runs once, here, against `bpmn` (so a template edit is applied
 * on top of any hand-edited diagram, not just the example's original one) and
 * before `parseModel` — so a prompt edit is "just another edit" the
 * draft-definition pipeline picks up and reports on like any other, and
 * `model.ts` never has to know templates exist.
 */
export function buildDraftRunDefinition(
  example: ExampleDef,
  sources: Record<string, string> = {},
  bpmn: string = example.bpmn,
  templateSources: Record<string, string> = {},
): DraftRunDefinition {
  const diagnostics: Diagnostic[] = [];

  const templates = createTemplateMap(example.templates, templateSources);
  const { result: resolvedBpmn, unresolved } = substituteTemplates(bpmn, templates, "xml");
  for (const name of unresolved) {
    diagnostics.push({
      severity: "warning",
      message: `Template placeholder "{{${name}}}" has no matching prompt/template content — left in the model as-is, not substituted.`,
    });
  }

  let model: ModelInfo;
  try {
    model = parseModel(resolvedBpmn);
  } catch (e) {
    diagnostics.push({
      severity: "error",
      message: e instanceof Error ? e.message : String(e),
    });
    return {
      resolvedBpmn,
      model: emptyModel(),
      handlers: {},
      forms: {},
      diagnostics,
      hasErrors: true,
    };
  }
  diagnostics.push(...model.diagnostics);

  // Every job-bearing element needs source, and that source needs to compile,
  // before the run starts — not as a mid-run "no handler registered" incident.
  // Check every process, not just the primary one: with multi-process BPMN
  // (call activities, or a runner that starts a non-primary processId), tasks
  // in secondary processes can still activate jobs, so `hasErrors` must cover
  // them too.
  const allTasks = model.processes.flatMap((p) => p.tasks);
  const defaultSourceOf = new Map(example.handlers.map((h) => [h.elementId, h.source]));
  const handlers: Record<string, ExampleHandler> = {};
  for (const task of allTasks) {
    // A compound tool (embedded sub-process / call activity) has no job type of
    // its own — the engine drives its inner flow — so it never needs a handler.
    if (task.compound) continue;
    const source = sources[task.elementId] ?? defaultSourceOf.get(task.elementId);
    if (source === undefined) {
      diagnostics.push({
        severity: "error",
        elementId: task.elementId,
        jobType: task.jobType,
        message: `No handler for "${task.label}" (${task.elementId}, job type "${task.jobType}"). Add a handler for this element, or remove it from the diagram.`,
      });
      continue;
    }
    try {
      handlers[task.elementId] = compileHandler(source);
    } catch (e) {
      diagnostics.push({
        severity: "error",
        elementId: task.elementId,
        jobType: task.jobType,
        message: `"${task.label}" (${task.elementId}): handler code didn't compile — ${
          e instanceof Error ? e.message : String(e)
        }`,
      });
    }
  }

  // Task listeners are addressed as `<elementId>:<jobType>` rather than by
  // element, and — unlike a task — supplying code for one is optional: a model
  // that merely carries a listener still runs, with the listener as a no-op.
  // So a missing source is not a diagnostic here; only one that fails to
  // compile is.
  const listeners = model.taskListeners ?? [];
  for (const listener of listeners) {
    const source = sources[listener.key] ?? defaultSourceOf.get(listener.key);
    if (source === undefined) continue;
    try {
      handlers[listener.key] = compileHandler(source);
    } catch (e) {
      diagnostics.push({
        severity: "error",
        elementId: listener.elementId,
        jobType: listener.jobType,
        message: `The ${listener.eventType} listener on "${listener.elementId}" (${listener.key}): handler code didn't compile — ${
          e instanceof Error ? e.message : String(e)
        }`,
      });
    }
  }

  // Two listeners on one element under one job type share a key and cannot be
  // told apart at run time — an activated job carries only `type` and
  // `elementId` — so say so here rather than let compile.ts guess which one a
  // job meant. This is also what makes `listener.key` unique.
  const seenListenerJob = new Map<string, TaskListenerSpec>();
  for (const listener of listeners) {
    const slot = `${listener.elementId}\u0000${listener.jobType}`;
    const first = seenListenerJob.get(slot);
    if (first) {
      diagnostics.push({
        severity: "error",
        elementId: listener.elementId,
        jobType: listener.jobType,
        message: `The ${first.eventType} and ${listener.eventType} listeners on "${listener.elementId}" share the job type "${listener.jobType}", so a job for one can't be told from the other. Give them distinct types.`,
      });
    } else {
      seenListenerJob.set(slot, listener);
    }
  }

  // A manual control holds a whole job *type* back from the drive loop, and the
  // engine's manual completion is keyed by type too — neither can single out an
  // element. So a listener sharing a type with a manually controlled task would
  // be silently completed as if it were that task, never running its own code.
  const manuallyControlled = new Set(
    example.handlers.filter((h) => h.manualControl).map((h) => h.elementId),
  );
  const manualJobTypes = new Map(
    allTasks.filter((t) => manuallyControlled.has(t.elementId)).map((t) => [t.jobType, t]),
  );
  for (const listener of listeners) {
    const task = manualJobTypes.get(listener.jobType);
    if (!task) continue;
    diagnostics.push({
      severity: "error",
      elementId: listener.elementId,
      jobType: listener.jobType,
      message: `The ${listener.eventType} listener on "${listener.elementId}" shares the job type "${listener.jobType}" with "${task.label}" (${task.elementId}), which is manually controlled. Manual control holds back a whole job type, so the listener would be completed as if it were that task. Give the listener its own type.`,
    });
  }

  // Orphaned handlers: source naming an element the current diagram no longer
  // has (typically after a rename) is otherwise silently inert.
  const taskIds = new Set([...allTasks.map((t) => t.elementId), ...listeners.map((l) => l.key)]);
  const handlerIds = new Set([...defaultSourceOf.keys(), ...Object.keys(sources)]);
  for (const elementId of handlerIds) {
    if (!taskIds.has(elementId)) {
      diagnostics.push({
        severity: "error",
        elementId,
        message: `Handler "${elementId}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`,
      });
    }
  }

  // Resolve every formId the model references against the example's forms, so
  // a dangling reference is reported here rather than when the user task opens.
  // Check every process, not just the primary one — a dangling formId in a
  // secondary process is otherwise invisible to hasErrors (see allTasks above).
  const forms: Record<string, FormSchema> = {};
  const formsAvailable = example.forms ?? {};
  const checkForm = (formId: string | undefined, where: string) => {
    if (!formId) return;
    const schema = formsAvailable[formId] as FormSchema | undefined;
    if (schema) {
      forms[formId] = schema;
    } else {
      diagnostics.push({
        severity: "error",
        formId,
        message: `${where} references form "${formId}", which has no matching schema.`,
      });
    }
  };
  for (const p of model.processes) {
    checkForm(p.startFormId, `The start event of process "${p.processName}"`);
    for (const ut of p.userTasks) {
      checkForm(ut.formId, `User task "${ut.label}" (${ut.elementId})`);
    }
  }

  return {
    resolvedBpmn,
    model,
    handlers,
    forms,
    diagnostics,
    hasErrors: diagnostics.some((d) => d.severity === "error"),
  };
}
