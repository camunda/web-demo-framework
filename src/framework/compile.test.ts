import { describe, expect, it } from "vitest";
import { parseModel } from "./model";
import { buildWorkers } from "./compile";
import type { ExampleHandler } from "./types";

const ONE_TASK = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" id="D" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="p" isExecutable="true">
    <bpmn:startEvent id="S"><bpmn:outgoing>f1</bpmn:outgoing></bpmn:startEvent>
    <bpmn:sequenceFlow id="f1" sourceRef="S" targetRef="Pack" />
    <bpmn:serviceTask id="Pack" name="Pack">
      <bpmn:extensionElements><zeebe:taskDefinition type="pack" /></bpmn:extensionElements>
      <bpmn:incoming>f1</bpmn:incoming><bpmn:outgoing>f2</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="f2" sourceRef="Pack" targetRef="E" />
    <bpmn:endEvent id="E"><bpmn:incoming>f2</bpmn:incoming></bpmn:endEvent>
  </bpmn:process>
</bpmn:definitions>`;

const job = {
  key: "1",
  type: "pack",
  elementId: "Pack",
  variables: {},
  customHeaders: {},
  retries: 1,
  processInstanceKey: "1",
  instanceKey: "1",
};

const workerReturning = (value: unknown) =>
  buildWorkers(parseModel(ONE_TASK), { Pack: (() => value) as ExampleHandler }, () => {}).pack;

/**
 * The engine refuses a job completion whose variables aren't an object, and
 * that refusal surfaced only as "run stopped — no dispatch round was
 * returned", with the run Paused and no reason anywhere on the page.
 */
describe("a handler's return value", () => {
  it.each([
    [42, "a number"],
    ["done", "a string"],
    [true, "a boolean"],
    [[1, 2], "an array"],
  ])("fails the job, naming what came back, when it returns %j", async (value, what) => {
    await expect(workerReturning(value)(job)).rejects.toThrow(
      `Handler returned ${what} — return an object of variables to merge, or nothing.`,
    );
  });

  it.each([[{ packed: true }], [null], [undefined]])("is passed through when it is %j", async (value) => {
    await expect(workerReturning(value)(job)).resolves.toEqual(value);
  });
});
