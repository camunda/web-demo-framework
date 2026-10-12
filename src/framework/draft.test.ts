import { describe, expect, it } from "vitest";
import { buildDraftRunDefinition } from "./draft";
import type { ExampleDef } from "./types";

const withPack = (taskDefinition: string, tag = "serviceTask") => `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" id="D" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="p" isExecutable="true">
    <bpmn:startEvent id="S"><bpmn:outgoing>f1</bpmn:outgoing></bpmn:startEvent>
    <bpmn:sequenceFlow id="f1" sourceRef="S" targetRef="Pack" />
    <bpmn:${tag} id="Pack" name="Pack the order">
      <bpmn:extensionElements>${taskDefinition}</bpmn:extensionElements>
      <bpmn:incoming>f1</bpmn:incoming><bpmn:outgoing>f2</bpmn:outgoing>
    </bpmn:${tag}>
    <bpmn:sequenceFlow id="f2" sourceRef="Pack" targetRef="E" />
    <bpmn:endEvent id="E"><bpmn:incoming>f2</bpmn:incoming></bpmn:endEvent>
  </bpmn:process>
</bpmn:definitions>`;

const example = (bpmn: string, handlers: ExampleDef["handlers"] = []): ExampleDef => ({
  id: "x",
  title: "x",
  blurb: "x",
  bpmn,
  seed: {},
  handlers,
});

const errors = (bpmn: string, handlers?: ExampleDef["handlers"]) =>
  buildDraftRunDefinition(example(bpmn, handlers))
    .diagnostics.filter((d) => d.severity === "error")
    .map((d) => d.message);

/**
 * What the modeler's wrench menu produces when a reader turns a task into a
 * service task: no task definition at all. It deployed, and the run then sat
 * "Paused" on a job no worker could be offered, with nothing on the page
 * saying why.
 */
describe("a job-only task with no job type", () => {
  it.each(["serviceTask", "sendTask"])("is an error before Run for a %s", (tag) => {
    expect(errors(withPack("", tag))).toEqual([
      '"Pack the order" (Pack) has no job type, so no worker could ever pick it up and the run would stop there. Set one under Task definition → Job type.',
    ]);
  });

  it("is reported as that, not as a handler orphaned by a rename", () => {
    expect(errors(withPack(""), [{ elementId: "Pack", source: "async () => ({})" }])).toEqual([
      '"Pack the order" (Pack) has no job type, so no worker could ever pick it up and the run would stop there. Set one under Task definition → Job type.',
    ]);
  });

  it("is not reported once the job type is set", () => {
    expect(
      errors(withPack('<zeebe:taskDefinition type="pack" />'), [
        { elementId: "Pack", source: "async () => ({})" },
      ]),
    ).toEqual([]);
  });

  it("still reports a handler whose element really is gone", () => {
    expect(
      errors(withPack('<zeebe:taskDefinition type="pack" />'), [
        { elementId: "Pack", source: "async () => ({})" },
        { elementId: "Gone", source: "async () => ({})" },
      ]),
    ).toEqual([
      'Handler "Gone" doesn\'t match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.',
    ]);
  });
});
