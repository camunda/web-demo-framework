import { describe, expect, it } from "vitest";
import { parseModel } from "./model";
import { buildWorkers } from "./compile";
import { buildDraftRunDefinition } from "./draft";
import type { ExampleDef, ExampleHandler } from "./types";

/**
 * A `zeebe:taskListener` is a job like any other: the engine offers it and
 * waits. Nothing here registered a worker for one, so a model carrying a
 * listener — as several of Camunda's own do — stopped the run on a job type the
 * reader had no way to answer, and the manifest had no way to answer either,
 * since handlers are keyed by element id and a listener has no element.
 *
 * Found by `tools/audit/construct-coverage.mjs`: the parser read four of the
 * nineteen `zeebe:` extensions the corpus declares, and this was one of the
 * ones it ignored.
 */
const WITH_LISTENER = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" id="D" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="p" isExecutable="true">
    <bpmn:startEvent id="S"><bpmn:outgoing>f1</bpmn:outgoing></bpmn:startEvent>
    <bpmn:sequenceFlow id="f1" sourceRef="S" targetRef="Review" />
    <bpmn:userTask id="Review" name="Review the case">
      <bpmn:extensionElements>
        <zeebe:userTask />
        <zeebe:taskListeners>
          <zeebe:taskListener eventType="creating" type="notify-reviewer" />
        </zeebe:taskListeners>
      </bpmn:extensionElements>
      <bpmn:incoming>f1</bpmn:incoming><bpmn:outgoing>f2</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="f2" sourceRef="Review" targetRef="E" />
    <bpmn:endEvent id="E"><bpmn:incoming>f2</bpmn:incoming></bpmn:endEvent>
  </bpmn:process>
</bpmn:definitions>`;

/**
 * Nothing says a listener's job type is unique. Two user tasks can be notified
 * the same way, and a listener can share a type with a service task — the
 * engine hands back only `type` and `elementId`, so that pair is the whole
 * routing key the framework has.
 */
const SHARED_JOB_TYPE = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" id="D" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="p" isExecutable="true">
    <bpmn:startEvent id="S"><bpmn:outgoing>f1</bpmn:outgoing></bpmn:startEvent>
    <bpmn:sequenceFlow id="f1" sourceRef="S" targetRef="Review" />
    <bpmn:userTask id="Review" name="Review the case">
      <bpmn:extensionElements>
        <zeebe:userTask />
        <zeebe:taskListeners>
          <zeebe:taskListener eventType="creating" type="notify" />
        </zeebe:taskListeners>
      </bpmn:extensionElements>
      <bpmn:incoming>f1</bpmn:incoming><bpmn:outgoing>f2</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="f2" sourceRef="Review" targetRef="Approve" />
    <bpmn:userTask id="Approve" name="Approve the case">
      <bpmn:extensionElements>
        <zeebe:userTask />
        <zeebe:taskListeners>
          <zeebe:taskListener eventType="completing" type="notify" />
        </zeebe:taskListeners>
      </bpmn:extensionElements>
      <bpmn:incoming>f2</bpmn:incoming><bpmn:outgoing>f3</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="f3" sourceRef="Approve" targetRef="Archive" />
    <bpmn:serviceTask id="Archive" name="Archive the case">
      <bpmn:extensionElements><zeebe:taskDefinition type="notify" /></bpmn:extensionElements>
      <bpmn:incoming>f3</bpmn:incoming><bpmn:outgoing>f4</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="f4" sourceRef="Archive" targetRef="E" />
    <bpmn:endEvent id="E"><bpmn:incoming>f4</bpmn:incoming></bpmn:endEvent>
  </bpmn:process>
</bpmn:definitions>`;

const example = (bpmn: string, handlers: { elementId: string; source: string }[]): ExampleDef => ({
  id: "x",
  title: "x",
  blurb: "x",
  bpmn,
  seed: {},
  handlers,
});

const job = (elementId: string, type: string) => ({
  key: "1",
  type,
  elementId,
  variables: {},
  customHeaders: {},
  retries: 1,
  processInstanceKey: "1",
  instanceKey: "1",
});

describe("task listeners", () => {
  it("is parsed with the key a manifest can address it by", () => {
    expect(parseModel(WITH_LISTENER).taskListeners).toEqual([
      {
        elementId: "Review",
        eventType: "creating",
        jobType: "notify-reviewer",
        key: "Review:creating",
      },
    ]);
  });

  it("registers a worker, so the run is not left on an unanswerable job type", () => {
    const model = parseModel(WITH_LISTENER);
    const workers = buildWorkers(model, {}, () => {});
    expect(Object.keys(workers)).toContain("notify-reviewer");
  });

  /**
   * A model that merely *has* a listener must still run. Failing the job would
   * turn "this model uses a Camunda feature" into "this example is broken",
   * which is the failure being fixed, not a different shape of it.
   */
  it("runs an unclaimed listener as a no-op and says so", async () => {
    const model = parseModel(WITH_LISTENER);
    const lines: string[] = [];
    const workers = buildWorkers(model, {}, (e) => lines.push(e.text));

    await expect(
      workers["notify-reviewer"](job("Review", "notify-reviewer")),
    ).resolves.toBeUndefined();
    expect(lines.join("\n")).toContain("Review the case — creating listener (no code supplied)");
  });

  it("runs the manifest's code when one is supplied", async () => {
    const model = parseModel(WITH_LISTENER);
    const handler: ExampleHandler = () => ({ notified: true });
    const workers = buildWorkers(model, { "Review:creating": handler }, () => {});

    await expect(workers["notify-reviewer"](job("Review", "notify-reviewer"))).resolves.toEqual({
      notified: true,
    });
  });

  /**
   * The routing bug this guards: registering one worker per listener and
   * skipping a job type already taken meant the second listener never got a
   * worker, and the first worker's closure hard-coded its own `eventType` — so
   * a job for `Approve` looked up `Approve:creating`, a key no manifest has.
   */
  it("routes two listeners sharing a job type to their own handlers", async () => {
    const model = parseModel(SHARED_JOB_TYPE);
    const ran: string[] = [];
    const workers = buildWorkers(
      model,
      {
        "Review:creating": () => {
          ran.push("review");
          return { a: 1 };
        },
        "Approve:completing": () => {
          ran.push("approve");
          return { b: 2 };
        },
      },
      () => {},
    );

    await expect(workers["notify"](job("Review", "notify"))).resolves.toEqual({ a: 1 });
    await expect(workers["notify"](job("Approve", "notify"))).resolves.toEqual({ b: 2 });
    expect(ran).toEqual(["review", "approve"]);
  });

  it("keeps a service task on that same job type on the task path", async () => {
    const model = parseModel(SHARED_JOB_TYPE);
    const lines: string[] = [];
    const workers = buildWorkers(
      model,
      { Archive: () => ({ archived: true }) },
      (e) => lines.push(e.text),
    );

    await expect(workers["notify"](job("Archive", "notify"))).resolves.toEqual({
      archived: true,
    });
    expect(lines.join("\n")).toContain("▶ Archive the case");
  });

  /**
   * `buildWorkers` only sees listener code if the draft pipeline put it in the
   * handler map — and that map was built from element ids alone, so a manifest
   * entry keyed `Review:creating` was dropped *and* then reported as orphaned,
   * blocking Run. Supplying a handler directly to `buildWorkers`, as the tests
   * above do, walks straight past that.
   */
  describe("through the draft pipeline the runner actually uses", () => {
    it("resolves a listener handler the manifest supplies", () => {
      const draft = buildDraftRunDefinition(
        example(WITH_LISTENER, [{ elementId: "Review:creating", source: "() => ({ ok: true })" }]),
      );

      expect(Object.keys(draft.handlers)).toContain("Review:creating");
      expect(draft.diagnostics).toEqual([]);
      expect(draft.hasErrors).toBe(false);
    });

    it("leaves an unclaimed listener alone rather than demanding code for it", () => {
      const draft = buildDraftRunDefinition(example(WITH_LISTENER, []));

      expect(draft.diagnostics).toEqual([]);
      expect(draft.hasErrors).toBe(false);
    });

    it("still reports a listener key no diagram element matches", () => {
      const draft = buildDraftRunDefinition(
        example(WITH_LISTENER, [{ elementId: "Review:typo", source: "() => ({})" }]),
      );

      expect(draft.hasErrors).toBe(true);
      expect(draft.diagnostics.map((d) => d.message).join("\n")).toContain("Review:typo");
    });

    /**
     * Two listeners on *one* element under one job type is the case the job
     * gives us no way to resolve, so it has to be refused up front instead of
     * guessed at mid-run.
     */
    it("refuses two listeners on one element that share a job type", () => {
      const ambiguous = WITH_LISTENER.replace(
        '<zeebe:taskListener eventType="creating" type="notify-reviewer" />',
        '<zeebe:taskListener eventType="creating" type="notify-reviewer" />' +
          '<zeebe:taskListener eventType="completing" type="notify-reviewer" />',
      );
      const draft = buildDraftRunDefinition(example(ambiguous, []));

      expect(draft.hasErrors).toBe(true);
      expect(draft.diagnostics.map((d) => d.message).join("\n")).toContain(
        'share the job type "notify-reviewer"',
      );
    });
  });
});
