import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  createBojtosSession,
  dispatchWorkers,
  type AgentHandler,
  type AgentResult,
  type Snapshot,
  type ReadModelBojtosSession,
} from "@nanobpm/bojtos-kit";
import { resolveCorrelationKey } from "../framework/model";
import { buildWorkers } from "../framework/compile";
import { buildDraftRunDefinition } from "../framework/draft";
import {
  makeImageAccessor,
  makeVisionAccessor,
  type VisionSupport,
} from "../framework/imageInput";
import { makeScriptedVisionBrain } from "../framework/brains/vision";
import { formDefaults, type FormSchema } from "../framework/ui/formSchema";
import type { ExampleDef, ExampleHandler, HandlerHelpers } from "../framework/types";
import { loadReadModelWasm } from "../framework/testing/readModelWasm";
import { EXAMPLES, loadExample } from "./index";

/**
 * Drive every example, not just the ones someone wrote a test for.
 *
 * The construct audits ask whether the engine supports a thing and whether the
 * runner can surface it. Neither would have caught the framework bugs actually
 * found while porting — a run ending when a delegated child completed, a stale
 * manifest under a new card, the Step log contradicting the status badge. Those
 * are behavioural, and they only appear when something is driven.
 *
 * Seven of sixteen examples had any behavioural test at all, so nine were
 * shipping on "it looked right when I opened it". This asserts the one property
 * every example must have however it is built: it goes somewhere. A run either
 * finishes, or stops on something a reader can act on. What it must never do is
 * stall with no incident, no open task, and nothing to press — which is exactly
 * how a silently-skipped construct presents.
 */

function compile(source: string): ExampleHandler {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
  return new Function(`"use strict"; return (${source});`)() as ExampleHandler;
}

/**
 * The runner gives an `imageInput` example a scripted-vision reader built from
 * its own `scriptedVision` ground truth. Without it `helpers.vision` resolves
 * to nothing and plate-recognition always takes its manual-entry branch — the
 * sweep would then drive a path no reader with an image ever sees.
 */
function visionFor(example: ExampleDef): VisionSupport | undefined {
  if (!example.imageInput) return undefined;
  const first = example.imageInput.seedImages[0];
  return {
    read: makeScriptedVisionBrain(example.scriptedVision).read,
    live: false,
    resolve: () => (first ? { imageId: first.id } : undefined),
  };
}

function helpersFor(
  variables: Record<string, unknown>,
  instanceKey: string,
  vision?: VisionSupport,
): HandlerHelpers {
  return {
    sleep: () => Promise.resolve(),
    trace: () => {},
    text: (key, fallback = "") => {
      const v = variables[key];
      return typeof v === "string" ? v : v == null ? fallback : String(v);
    },
    num: (key, fallback = 0) => {
      const v = variables[key];
      const n = typeof v === "number" ? v : Number(v);
      return Number.isFinite(n) ? n : fallback;
    },
    ...(vision
      ? {
          vision: makeVisionAccessor(vision, instanceKey),
          image: makeImageAccessor(vision, instanceKey),
        }
      : {}),
  };
}

/**
 * What a reader could actually submit for a task's form. The runner validates
 * before submitting, so a sweep that posts `{}` tests a state no reader can
 * reach — and the first run of this file duly "found" a stall in invoice-payment
 * that turned out to be its own empty submission, not the example.
 */
function formPayload(example: ExampleDef, bpmn: string, elementId: string): string {
  const doc = new DOMParser().parseFromString(bpmn, "application/xml");
  const NS = "http://www.omg.org/spec/BPMN/20100524/MODEL";
  const ZEEBE_NS = "http://camunda.org/schema/zeebe/1.0";
  const task = Array.from(doc.getElementsByTagNameNS(NS, "userTask")).find(
    (t) => t.getAttribute("id") === elementId,
  );
  // By namespace, not by literal prefix — `zeebe:` is conventional, not required,
  // and `parseModel` resolves the same extension the namespaced way.
  const formId = task
    ?.getElementsByTagNameNS(ZEEBE_NS, "formDefinition")[0]
    ?.getAttribute("formId");
  const schema = formId ? (example.forms?.[formId] as { components?: unknown[] }) : undefined;
  if (!schema?.components) return "{}";

  const values: Record<string, unknown> = {};
  for (const raw of schema.components) {
    const c = raw as {
      key?: string;
      type?: string;
      values?: { value: unknown }[];
      validate?: { required?: boolean };
    };
    if (!c.key || !c.validate?.required) continue;
    values[c.key] =
      c.type === "radio" || c.type === "select"
        ? (c.values?.[0]?.value ?? "")
        : c.type === "number"
          ? 1
          : c.type === "checkbox"
            ? true
            : "audit";
  }
  return JSON.stringify(values);
}

/**
 * Element ids each instance still has active. Keyed by instance and skipping
 * finished ones: a `Created` task left behind by an interrupted child can match
 * an identically-named active element in another instance, and completing it is
 * a move the runner would never offer. `openUserTasksOf` filters the same way.
 */
function openUserTasks(snap: Snapshot) {
  const active = new Map<string, Set<string>>();
  for (const i of snap.instances) {
    if (i.completed || i.state !== "Active") continue;
    active.set(
      i.key,
      new Set(
        (i.activeElements ?? []).map((e) => (typeof e === "string" ? e : e.elementId)),
      ),
    );
  }
  return snap.userTasks.filter(
    (t) => t.state === "Created" && active.get(t.instanceKey)?.has(t.elementId),
  );
}

/** The reader's moves, in the order the runner would offer them. */
async function readerCanAct(
  session: ReadModelBojtosSession,
  example: ExampleDef,
  bpmn: string,
  manualJobTypes: Set<string>,
): Promise<boolean> {
  const snap = session.snapshot();
  const open = openUserTasks(snap);
  if (open.length > 0) {
    session.completeUserTask(open[0].key, formPayload(example, bpmn, open[0].elementId));
    return true;
  }
  // A held-back job waits for the reader to press "Complete normally"; the
  // drive loop never dispatches it on its own.
  const held = snap.jobs.find((j) => j.state === "Created" && manualJobTypes.has(j.jobType));
  if (held) {
    await dispatchWorkers(session, { [held.jobType]: () => ({}) }, {});
    return true;
  }
  if (snap.timers.length > 0) {
    session.advanceTime(Math.max(1, Math.min(...snap.timers.map((t) => t.dueInMs))) + 1);
    return true;
  }
  // Boundary subscriptions are the reader's to fire deliberately, so leaving
  // one open is a legitimate resting place rather than a stall.
  const waiting = snap.messageSubscriptions.filter(
    (m) => !m.kind.toLowerCase().includes("boundary"),
  );
  if (waiting.length > 0) {
    const target = waiting[0];
    const after = session.correlateMessage(target.messageName, target.correlationKey, "{}");
    // Publishing is only a move if the engine took it. A correlation that
    // leaves the same subscription open has advanced nothing, and returning
    // true would spin out the round budget and then report a clean finish.
    return !after.messageSubscriptions.some(
      (m) => m.messageName === target.messageName && m.correlationKey === target.correlationKey,
    );
  }
  if (snap.signalSubscriptions.length > 0) {
    const name = snap.signalSubscriptions[0].signalName;
    const after = session.broadcastSignal(name, "{}");
    return !after.signalSubscriptions.some((s) => s.signalName === name);
  }
  return false;
}

let session: ReadModelBojtosSession;

beforeAll(async () => {
  session = await createBojtosSession({ variant: "readmodel", wasm: loadReadModelWasm() });
}, 30_000);

afterAll(() => {
  session?.free();
});

describe("every example goes somewhere", () => {
  it.each(EXAMPLES.map((e) => e.id))("%s", async (id) => {
    const example: ExampleDef = await loadExample(id);
    // The runner deploys `draft.resolvedBpmn`, not `example.bpmn`: prompts and
    // other `{{name}}` templates are substituted before the model is parsed.
    // Driving the unsubstituted XML tests a model no reader ever runs.
    const draft = buildDraftRunDefinition(example);
    const bpmn = draft.resolvedBpmn;
    const model = draft.model;
    const vision = visionFor(example);

    // Job types the example holds back for a reader choice. The runner deletes
    // these from its worker map, so registering one here would auto-complete a
    // job that is supposed to be waiting.
    const allTasks = model.processes.flatMap((p) => p.tasks);
    const manualElementIds = new Set(
      example.handlers.filter((h) => h.manualControl).map((h) => h.elementId),
    );
    const manualJobTypes = new Set(
      allTasks.filter((t) => manualElementIds.has(t.elementId)).map((t) => t.jobType),
    );

    // The runner's own worker builder, so the sweep routes exactly what it
    // routes — including task listeners, which are separate job entries and
    // would otherwise settle the round as `unhandledJobs`.
    const workers = buildWorkers(
      model,
      Object.fromEntries(example.handlers.map((h) => [h.elementId, compile(h.source)])),
      () => {},
      undefined,
      vision,
    );
    for (const jobType of manualJobTypes) delete workers[jobType];

    const agents: Record<string, AgentHandler> = {};
    if (example.scriptedAgent) {
      const agent = compile(example.scriptedAgent);
      for (const jobType of new Set(model.agents.map((a) => a.jobType))) {
        agents[jobType] = (job) =>
          agent(job, helpersFor(job.variables, job.instanceKey, vision)) as
            | AgentResult
            | Promise<AgentResult>;
      }
    }

    session.reset();
    session.deploy(bpmn);
    // What the runner would actually start with: the seed plus the start form's
    // own defaults. An example whose required start value comes from a
    // `defaultValue` is otherwise driven with input no reader could submit.
    const startSchema = model.startFormId
      ? (example.forms?.[model.startFormId] as FormSchema | undefined)
      : undefined;
    const startVars = {
      ...example.seed,
      ...(startSchema ? formDefaults(startSchema) : {}),
    };
    const seed = JSON.stringify(startVars);
    let started;
    if (model.startMessage) {
      const { messageName, correlationKey } = model.startMessage;
      // The same resolution the runner uses, against the same payload — a start
      // subscription can name a field the start form defaults, not just one the
      // seed carries.
      const key = resolveCorrelationKey(correlationKey, startVars);
      started = session.correlateMessage(messageName, key, seed);
    } else {
      started = session.createInstance(model.processId, seed);
    }
    // The instance this start produced, read off the returned snapshot rather
    // than by position: a call activity's child can complete first and take
    // `instances[0]`, which would have this inspect a finished child and miss a
    // stalled caller. Only the root exists at this point, so its processId
    // identifies it on both start paths — `created` is documented only for
    // `createInstance`.
    const rootKey =
      started.instances.find((i) => i.processId === model.processId)?.key ?? started.created;
    expect(rootKey, "the example never started an instance").toBeDefined();

    for (let round = 0; round < 40; round += 1) {
      await dispatchWorkers(session, workers, { agents });
      if (!(await readerCanAct(session, example, bpmn, manualJobTypes))) break;
    }

    const snap = session.snapshot();
    const root = snap.instances.find((i) => i.key === rootKey);
    // A boundary subscription is the reader's to fire, so one left open is a
    // resting place. An ordinary one still open here is not: the loop above
    // already tried to correlate it and the engine didn't take it.
    const pressable = snap.messageSubscriptions.filter((m) =>
      m.kind.toLowerCase().includes("boundary"),
    );
    const stalled =
      root?.state === "Active" &&
      snap.incidents.length === 0 &&
      openUserTasks(snap).length === 0 &&
      snap.timers.length === 0 &&
      pressable.length === 0 &&
      snap.signalSubscriptions.length === 0;

    expect({
      incidents: snap.incidents.map((i) => `${i.elementId}: ${i.reason}`),
      stalledWithNothingToDo: stalled
        ? (root?.activeElements ?? []).map((e) => e.elementId ?? e)
        : false,
    }).toEqual({ incidents: [], stalledWithNothingToDo: false });
  }, 30_000);
});
