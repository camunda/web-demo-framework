import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  createBojtosSession,
  dispatchWorkers,
  type AgentHandler,
  type AgentResult,
  type JobHandler,
  type JobResult,
  type ReadModelBojtosSession,
} from "@nanobpm/bojtos-kit";
import { resolveCorrelationKey } from "../framework/model";
import { buildDraftRunDefinition } from "../framework/draft";
import {
  makeImageAccessor,
  makeVisionAccessor,
  type VisionSupport,
} from "../framework/imageInput";
import { makeScriptedVisionBrain } from "../framework/brains/vision";
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
  const task = Array.from(doc.getElementsByTagNameNS(NS, "userTask")).find(
    (t) => t.getAttribute("id") === elementId,
  );
  const formId = task
    ?.getElementsByTagName("zeebe:formDefinition")[0]
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

/** The reader's moves, in the order the runner would offer them. */
async function readerCanAct(
  session: ReadModelBojtosSession,
  example: ExampleDef,
  bpmn: string,
  manualJobTypes: Set<string>,
): Promise<boolean> {
  const snap = session.snapshot();
  // Only tasks on an element the instance still has active. The engine can
  // leave an interrupted task reported as `Created` after a boundary event, and
  // completing one of those is a move no reader is offered — `openUserTasksOf`
  // filters the same way.
  const active = new Set(
    snap.instances.flatMap((i) =>
      (i.activeElements ?? []).map((e) => (typeof e === "string" ? e : e.elementId)),
    ),
  );
  const open = snap.userTasks.filter(
    (t) => t.state === "Created" && active.has(t.elementId),
  );
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
    session.correlateMessage(waiting[0].messageName, waiting[0].correlationKey, "{}");
    return true;
  }
  if (snap.signalSubscriptions.length > 0) {
    session.broadcastSignal(snap.signalSubscriptions[0].signalName, "{}");
    return true;
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
    const byElement = new Map(example.handlers.map((h) => [h.elementId, compile(h.source)]));
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

    const workers: Record<string, JobHandler> = {};
    for (const task of allTasks) {
      if (task.compound || !byElement.has(task.elementId)) continue;
      if (manualJobTypes.has(task.jobType)) continue;
      workers[task.jobType] = (job) => {
        const fn = byElement.get(job.elementId)!;
        return fn(job, helpersFor(job.variables, job.instanceKey, vision)) as
          | JobResult
          | Promise<JobResult>;
      };
    }

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
    let started;
    if (model.startMessage) {
      const { messageName, correlationKey } = model.startMessage;
      // The same resolution the runner uses — a start subscription can be any
      // FEEL expression, not just a bare variable name.
      const key = resolveCorrelationKey(correlationKey, example.seed);
      started = session.correlateMessage(messageName, key, JSON.stringify(example.seed));
    } else {
      started = session.createInstance(model.processId, JSON.stringify(example.seed));
    }
    // The root is the instance that was created, not `instances[0]`: a call
    // activity's child can complete first and take that slot, so position would
    // have this inspect a finished child and miss a stalled caller.
    const rootKey = started?.created;

    for (let round = 0; round < 40; round += 1) {
      await dispatchWorkers(session, workers, { agents });
      if (!(await readerCanAct(session, example, bpmn, manualJobTypes))) break;
    }

    const snap = session.snapshot();
    const root =
      snap.instances.find((i) => i.key === rootKey) ??
      snap.instances.find((i) => i.processId === model.processId);
    const stalled =
      root?.state === "Active" &&
      snap.incidents.length === 0 &&
      snap.userTasks.every((t) => t.state !== "Created") &&
      snap.timers.length === 0 &&
      snap.messageSubscriptions.length === 0 &&
      snap.signalSubscriptions.length === 0;

    expect({
      incidents: snap.incidents.map((i) => `${i.elementId}: ${i.reason}`),
      stalledWithNothingToDo: stalled
        ? (root?.activeElements ?? []).map((e) => e.elementId ?? e)
        : false,
    }).toEqual({ incidents: [], stalledWithNothingToDo: false });
  }, 30_000);
});
