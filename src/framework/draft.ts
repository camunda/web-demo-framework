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
import { parseModel, type Diagnostic, type ModelInfo } from "./model";
import { compileHandler } from "./compile";
import type { FormSchema } from "./ui/FormRenderer";

export type { Diagnostic };

export interface DraftRunDefinition {
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
    startFormId: undefined,
  };
}

/**
 * Build the draft run definition for `example`, with `sources` (the editor's
 * live, possibly-edited handler code, keyed by element id) taking precedence
 * over the example's own default `handlers`, and `bpmn` (the editor's live,
 * possibly-edited model XML) taking precedence over `example.bpmn` — this is
 * the seam the model-editing XML tab feeds edits through, so a hand-edited
 * diagram is gated by exactly the same diagnostics as the example's default
 * one, not a separate one-off error path.
 */
export function buildDraftRunDefinition(
  example: ExampleDef,
  sources: Record<string, string> = {},
  bpmn: string = example.bpmn,
): DraftRunDefinition {
  const diagnostics: Diagnostic[] = [];

  let model: ModelInfo;
  try {
    model = parseModel(bpmn);
  } catch (e) {
    diagnostics.push({
      severity: "error",
      message: e instanceof Error ? e.message : String(e),
    });
    return { model: emptyModel(), handlers: {}, forms: {}, diagnostics, hasErrors: true };
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

  // Orphaned handlers: source naming an element the current diagram no longer
  // has (typically after a rename) is otherwise silently inert.
  const taskIds = new Set(allTasks.map((t) => t.elementId));
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
    model,
    handlers,
    forms,
    diagnostics,
    hasErrors: diagnostics.some((d) => d.severity === "error"),
  };
}
