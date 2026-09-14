import { describe, expect, it } from "vitest";
import { parseModel } from "../framework/model";
import { createTemplateMap, substituteTemplates } from "../framework/templates";
import { EXAMPLES, loadExample } from "./index";

/**
 * Every example model, as raw XML. `import.meta.glob` with `eager` so this
 * covers whatever is in the tree, including examples added after this test.
 */
const models = import.meta.glob("./*/model.bpmn", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

describe("example models", () => {
  it("finds every example's model", () => {
    expect(Object.keys(models).length).toBeGreaterThan(0);
  });

  /**
   * Camunda Web Modeler writes the connector's icon into every templated
   * element as an inline base64 data URI, so a model exported from it carries
   * the same few kB of SVG repeated once per task. Nothing here reads that
   * attribute — `framework/ui/diagramIcons.ts` derives the icon from
   * `zeebe:modelerTemplate` (and from the job type) instead — but every byte
   * of it ships on the eager path, because example manifests are imported
   * eagerly by `src/examples/index.ts`. It was ~40% of one model file and
   * enough on its own to push the initial bundle past its budget.
   *
   * Strip it when porting a model in. This is easy to forget precisely
   * because the diagram looks identical either way.
   */
  it.each(Object.keys(models))(
    "%s carries no inline base64 template icons",
    (path) => {
      expect(models[path]).not.toContain("zeebe:modelerTemplateIcon");
    },
  );

  /**
   * A sequence flow says where it goes; the elements at each end say which
   * flows they own. Both have to agree, and only the flow's own `sourceRef`
   * and `targetRef` are load-bearing here — this engine ignores the
   * `<incoming>`/`<outgoing>` children entirely.
   *
   * That is what makes the mismatch worth a test: inserting an element
   * mid-chain by hand and forgetting to repoint its neighbour's `<outgoing>`
   * runs perfectly, and only misleads the next reader, bpmn-js, or Web Modeler.
   */
  it.each(Object.keys(models))("%s declares its sequence flows on both ends", (path) => {
    const doc = new DOMParser().parseFromString(models[path], "application/xml");
    const NS = "http://www.omg.org/spec/BPMN/20100524/MODEL";
    const declared = (elementId: string, tag: "incoming" | "outgoing") => {
      const el = Array.from(doc.getElementsByTagNameNS(NS, "*")).find(
        (e) => e.getAttribute("id") === elementId,
      );
      return Array.from(el?.getElementsByTagNameNS(NS, tag) ?? []).map(
        (c) => c.textContent?.trim(),
      );
    };

    const wrong: string[] = [];
    for (const flow of Array.from(doc.getElementsByTagNameNS(NS, "sequenceFlow"))) {
      const id = flow.getAttribute("id")!;
      const from = flow.getAttribute("sourceRef")!;
      const to = flow.getAttribute("targetRef")!;
      if (!declared(from, "outgoing").includes(id))
        wrong.push(`${id}: ${from} does not declare it as outgoing`);
      if (!declared(to, "incoming").includes(id))
        wrong.push(`${id}: ${to} does not declare it as incoming`);
    }
    expect(wrong).toEqual([]);
  });

  /**
   * A prompt that names a tool the agent can't call costs a live brain real
   * turns: `makeLiveAgent` resolves a tool call against `spec.tools` and
   * nothing else, so "call RequestPaymentRelease" is useless if what's
   * advertised is `PaymentReleaseGate`. It's an easy mistake to make when an
   * element is renamed or wrapped, and it's invisible to the scripted brain,
   * which activates ids directly and never reads the prompt.
   *
   * Run over the *resolved* XML, since an example's real prompts usually live
   * in `prompts/*.md` behind a `{{system-prompt}}` placeholder — parsing the
   * raw file would only ever see the placeholder and check nothing.
   *
   * Only element ids the prompt actually mentions are checked, so ordinary
   * prose is left alone.
   */
  it.each(EXAMPLES.map((e) => e.id))(
    "%s prompts only name callable tools",
    async (id) => {
      const example = await loadExample(id);
      const { result: xml } = substituteTemplates(
        example.bpmn,
        createTemplateMap(example.templates),
        "xml",
      );
      const model = parseModel(xml);
      const everyElementId = new Set(
        Array.from(xml.matchAll(/\sid="([A-Za-z_][\w.-]*)"/g), (m) => m[1]),
      );

      for (const agent of model.agents) {
        // The host itself is deliberately not in this set: a live brain can't
        // call it either, so a prompt naming it is the same bug.
        const callable = new Set(agent.tools.map((t) => t.elementId));
        const prompt = `${agent.systemPrompt} ${agent.userPrompt}`;
        const named = Array.from(
          new Set(Array.from(prompt.matchAll(/\b[A-Za-z_][\w.-]*\b/g), (m) => m[0])),
        ).filter((token) => everyElementId.has(token) && !callable.has(token));

        expect(named, `${agent.elementId} prompt names non-callable element(s)`).toEqual([]);
      }
    },
  );

  /**
   * The gallery reads `meta.ts` and the runner reads `index.ts`, so a card
   * could advertise one thing and the page open another. Nothing else would
   * catch that: both halves typecheck fine while disagreeing.
   */
  it.each(EXAMPLES.map((e) => e.id))("%s's card matches its manifest", async (id) => {
    const meta = EXAMPLES.find((e) => e.id === id)!;
    const { bpmn: _bpmn, ...def } = await loadExample(id);

    for (const key of ["id", "title", "blurb", "hero", "docsUrl", "group"] as const) {
      expect(def[key], `${id}.${key} differs between meta.ts and index.ts`).toEqual(
        meta[key],
      );
    }
  });

  it("offers every example's manifest to the lazy loader", async () => {
    // A card with no loadable manifest is a dead tile: it renders, routes, and
    // then fails only once someone clicks it.
    await expect(
      Promise.all(EXAMPLES.map((e) => loadExample(e.id))),
    ).resolves.toHaveLength(EXAMPLES.length);
  });
});

/**
 * Some wait states the runner can clear on the reader's behalf: it advances the
 * clock for a timer, correlates an ordinary message catch, broadcasts a signal.
 * A message *boundary* event is deliberately not one of them — firing it
 * automatically would cancel the activity on every single run, which is the
 * opposite of what a boundary event is there to demonstrate.
 *
 * So a boundary event is only reachable if the manifest declares it in
 * `messageEvents`, which is what puts a button in front of the reader. A model
 * that has one and a manifest that doesn't is a dead end: the run parks, the
 * subscription is open, and there is nothing to press.
 *
 * The engine can't catch this and neither can the type system — the two halves
 * are in different files and both are individually valid.
 */
function unreachableBoundaries(bpmn: string, declared: readonly string[]): string[] {
  const known = new Set(declared);
  return parseModel(bpmn)
    .boundaryEvents.filter((b) => b.messageName && !known.has(b.elementId))
    .map((b) => `${b.elementId} (on ${b.attachedTo}, message "${b.messageName}")`);
}

describe("every message boundary event is reachable by the reader", () => {
  /**
   * The rule, proven on a model built for it. No example ships a message
   * boundary event yet, so the sweep below cannot currently fail — and a check
   * that can't fail is not a check. This is what makes it one.
   */
  const WITH_BOUNDARY = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" id="D" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:message id="M" name="second-alert">
    <bpmn:extensionElements><zeebe:subscription correlationKey="=customerId" /></bpmn:extensionElements>
  </bpmn:message>
  <bpmn:process id="p" isExecutable="true">
    <bpmn:startEvent id="S"><bpmn:outgoing>f1</bpmn:outgoing></bpmn:startEvent>
    <bpmn:sequenceFlow id="f1" sourceRef="S" targetRef="Work" />
    <bpmn:serviceTask id="Work">
      <bpmn:extensionElements><zeebe:taskDefinition type="w" /></bpmn:extensionElements>
      <bpmn:incoming>f1</bpmn:incoming><bpmn:outgoing>f2</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:boundaryEvent id="Interrupt" attachedToRef="Work">
      <bpmn:outgoing>f3</bpmn:outgoing>
      <bpmn:messageEventDefinition id="med" messageRef="M" />
    </bpmn:boundaryEvent>
    <bpmn:sequenceFlow id="f2" sourceRef="Work" targetRef="E" />
    <bpmn:sequenceFlow id="f3" sourceRef="Interrupt" targetRef="E" />
    <bpmn:endEvent id="E"><bpmn:incoming>f2</bpmn:incoming><bpmn:incoming>f3</bpmn:incoming></bpmn:endEvent>
  </bpmn:process>
</bpmn:definitions>`;

  it("names a boundary event no manifest declares", () => {
    expect(unreachableBoundaries(WITH_BOUNDARY, [])).toEqual([
      'Interrupt (on Work, message "second-alert")',
    ]);
  });

  it("accepts one the manifest offers a button for", () => {
    expect(unreachableBoundaries(WITH_BOUNDARY, ["Interrupt"])).toEqual([]);
  });

  it.each(EXAMPLES.map((e) => e.id))("%s leaves none unreachable", async (id) => {
    const example = await loadExample(id);
    const declared = (example.messageEvents ?? []).map((m) => m.elementId);
    expect(unreachableBoundaries(example.bpmn, declared)).toEqual([]);
  });
});
