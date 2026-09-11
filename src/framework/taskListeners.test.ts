import { describe, expect, it } from "vitest";
import { parseModel } from "./model";
import { buildWorkers } from "./compile";
import type { ExampleHandler } from "./types";

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
});
