import { describe, expect, it } from "vitest";
import { feelLiteralText, parseFromAiArgs, parseModel } from "./model";

const BPMN_HEADER = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
  xmlns:zeebe="http://camunda.org/schema/zeebe/1.0"
  id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">`;
const BPMN_FOOTER = `</bpmn:definitions>`;

/** A single service task carrying a `fromAi(...)` argument, as an agent tool. */
function agentModelXml(fromAiSource: string): string {
  return `${BPMN_HEADER}
  <bpmn:process id="proc1" name="Proc 1" isExecutable="true">
    <bpmn:adHocSubProcess id="Agent_1" name="Agent">
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" />
        <zeebe:ioMapping>
          <zeebe:input source="=&quot;You are a helper.&quot;" target="data.systemPrompt.prompt" />
          <zeebe:input source="=&quot;Do the thing.&quot;" target="data.userPrompt.prompt" />
          <zeebe:input source="=5" target="data.limits.maxModelCalls" />
        </zeebe:ioMapping>
      </bpmn:extensionElements>
      <bpmn:serviceTask id="ToolOne" name="Tool One">
        <bpmn:documentation>Does the one thing.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="tool-one-job" />
          <zeebe:ioMapping>
            <zeebe:input source="${fromAiSource}" target="data.variables" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
    </bpmn:adHocSubProcess>
  </bpmn:process>
  ${BPMN_FOOTER}`;
}

function parseDocElement(xml: string): Element {
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  const el = doc.documentElement.getElementsByTagName("bpmn:serviceTask")[0];
  if (!el) throw new Error("fixture must contain a bpmn:serviceTask");
  return el;
}

describe("parseFromAiArgs", () => {
  it("extracts a simple fromAi(...) argument", () => {
    const xml = `${BPMN_HEADER}
      <bpmn:serviceTask id="T1" name="T1">
        <bpmn:extensionElements>
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.geneMarker, &quot;The gene marker symbol.&quot;, &quot;string&quot;)" target="data.variables" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      ${BPMN_FOOTER}`;
    const args = parseFromAiArgs(parseDocElement(xml));
    expect(args).toEqual([
      { name: "geneMarker", description: "The gene marker symbol.", type: "string" },
    ]);
  });

  it("extracts multiple fromAi(...) arguments from one element", () => {
    const xml = `${BPMN_HEADER}
      <bpmn:serviceTask id="T1" name="T1">
        <bpmn:extensionElements>
          <zeebe:ioMapping>
            <zeebe:input source="={a: fromAi(toolCall.intA, &quot;first&quot;, &quot;number&quot;), b: fromAi(toolCall.intB, &quot;second&quot;, &quot;number&quot;)}" target="queryParameters" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      ${BPMN_FOOTER}`;
    const args = parseFromAiArgs(parseDocElement(xml));
    expect(args).toEqual([
      { name: "intA", description: "first", type: "number" },
      { name: "intB", description: "second", type: "number" },
    ]);
  });

  it("defaults the type to string when the third fromAi(...) argument is omitted", () => {
    const xml = `${BPMN_HEADER}
      <bpmn:serviceTask id="T1" name="T1">
        <bpmn:extensionElements>
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.decision, &quot;the decision&quot;)" target="decision" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      ${BPMN_FOOTER}`;
    const args = parseFromAiArgs(parseDocElement(xml));
    expect(args).toEqual([{ name: "decision", description: "the decision", type: "string" }]);
  });

  it("deduplicates a repeated argument name, keeping the first occurrence", () => {
    const xml = `${BPMN_HEADER}
      <bpmn:serviceTask id="T1" name="T1">
        <bpmn:extensionElements>
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.x, &quot;first mention&quot;, &quot;string&quot;)" target="a" />
            <zeebe:input source="=fromAi(toolCall.x, &quot;second mention&quot;, &quot;string&quot;)" target="b" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      ${BPMN_FOOTER}`;
    const args = parseFromAiArgs(parseDocElement(xml));
    expect(args).toEqual([{ name: "x", description: "first mention", type: "string" }]);
  });

  /**
   * Regression test for the shipped bug: a regex run over `XMLSerializer`
   * output matches nothing, because re-serializing an element re-escapes a
   * decoded `"` back into an entity (`&quot;`/`&#34;`), so a description
   * containing quotes and apostrophes — like every real example in this repo
   * — silently loses its arguments. `parseFromAiArgs` must read attribute
   * `.value` (already entity-decoded by the DOM) rather than serialize and
   * re-parse, so this keeps working. If someone "fixes" `attributeValues` to
   * use `new XMLSerializer().serializeToString(...)` and a fresh regex over
   * that string, this test fails because the literal `"` and `'` characters
   * this fixture relies on are no longer present in the (re-escaped) text.
   */
  it("survives entity-escaped quotes and apostrophes inside a description", () => {
    const xml = `${BPMN_HEADER}
      <bpmn:serviceTask id="RecordComplianceDecision" name="Record compliance decision">
        <bpmn:extensionElements>
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.decision, &quot;The clearance decision: &#39;cleared&#39; if the compliance score is even, &#39;flagged-for-review&#39; if it&#39;s odd.&quot;, &quot;string&quot;)" target="decision" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      ${BPMN_FOOTER}`;
    const args = parseFromAiArgs(parseDocElement(xml));
    expect(args).toHaveLength(1);
    expect(args[0].name).toBe("decision");
    expect(args[0].description).toBe(
      "The clearance decision: 'cleared' if the compliance score is even, 'flagged-for-review' if it's odd.",
    );
    expect(args[0].type).toBe("string");
  });

  it("returns an empty array when the element has no fromAi(...) calls", () => {
    const xml = `${BPMN_HEADER}
      <bpmn:serviceTask id="T1" name="T1">
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="plain-job" />
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      ${BPMN_FOOTER}`;
    expect(parseFromAiArgs(parseDocElement(xml))).toEqual([]);
  });
});

describe("parseModel", () => {
  it("resolves an agent host, its tools, and their fromAi(...) arguments", () => {
    const xml = agentModelXml(
      '=fromAi(toolCall.geneMarker, &quot;The gene marker symbol.&quot;, &quot;string&quot;)',
    );
    const info = parseModel(xml);
    expect(info.processId).toBe("proc1");
    expect(info.agent).not.toBeNull();
    expect(info.agent?.elementId).toBe("Agent_1");
    expect(info.agent?.jobType).toBe("io.camunda.agenticai:aiagent-job-worker:1");
    expect(info.agent?.systemPrompt).toBe("You are a helper.");
    expect(info.agent?.userPrompt).toBe("Do the thing.");
    expect(info.agent?.maxModelCalls).toBe(5);
    expect(info.agent?.tools).toHaveLength(1);
    expect(info.agent?.tools[0]).toMatchObject({
      elementId: "ToolOne",
      label: "Tool One",
      jobType: "tool-one-job",
      documentation: "Does the one thing.",
    });
    expect(info.agent?.tools[0].args).toEqual([
      { name: "geneMarker", description: "The gene marker symbol.", type: "string" },
    ]);
    // Tools are also present in the flat task list, flagged `isTool`.
    const toolTask = info.tasks.find((t) => t.elementId === "ToolOne");
    expect(toolTask?.isTool).toBe(true);
  });

  it("defaults maxModelCalls to 10 when the model doesn't declare a positive one", () => {
    const xml = `${BPMN_HEADER}
    <bpmn:process id="proc1" name="Proc 1" isExecutable="true">
      <bpmn:adHocSubProcess id="Agent_1" name="Agent">
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" />
        </bpmn:extensionElements>
      </bpmn:adHocSubProcess>
    </bpmn:process>
    ${BPMN_FOOTER}`;
    expect(parseModel(xml).agent?.maxModelCalls).toBe(10);
  });

  it("resolves job type from a zeebe:taskDefinition on a service task", () => {
    const xml = `${BPMN_HEADER}
    <bpmn:process id="proc1" name="Proc 1" isExecutable="true">
      <bpmn:serviceTask id="Check" name="Check inventory">
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="check-inventory" />
        </bpmn:extensionElements>
      </bpmn:serviceTask>
    </bpmn:process>
    ${BPMN_FOOTER}`;
    const info = parseModel(xml);
    expect(info.tasks).toEqual([
      {
        elementId: "Check",
        label: "Check inventory",
        jobType: "check-inventory",
        documentation: "",
        isTool: false,
      },
    ]);
  });

  it("resolves job type from the element id for a scriptTask with no taskDefinition", () => {
    const xml = `${BPMN_HEADER}
    <bpmn:process id="proc1" name="Proc 1" isExecutable="true">
      <bpmn:scriptTask id="RecordComplianceDecision" name="Record compliance decision" />
    </bpmn:process>
    ${BPMN_FOOTER}`;
    const info = parseModel(xml);
    expect(info.tasks).toHaveLength(1);
    expect(info.tasks[0]).toMatchObject({
      elementId: "RecordComplianceDecision",
      jobType: "RecordComplianceDecision",
    });
  });

  it("binds a userTask's formId from zeebe:formDefinition", () => {
    const xml = `${BPMN_HEADER}
    <bpmn:process id="proc1" name="Proc 1" isExecutable="true">
      <bpmn:userTask id="Review" name="Review shipment">
        <bpmn:extensionElements>
          <zeebe:formDefinition formId="shipment-review" />
        </bpmn:extensionElements>
      </bpmn:userTask>
    </bpmn:process>
    ${BPMN_FOOTER}`;
    const info = parseModel(xml);
    expect(info.userTasks).toEqual([
      { elementId: "Review", label: "Review shipment", formId: "shipment-review" },
    ]);
  });

  it("leaves formId undefined for a userTask with no form binding", () => {
    const xml = `${BPMN_HEADER}
    <bpmn:process id="proc1" name="Proc 1" isExecutable="true">
      <bpmn:userTask id="Review" name="Review shipment" />
    </bpmn:process>
    ${BPMN_FOOTER}`;
    expect(parseModel(xml).userTasks[0].formId).toBeUndefined();
  });

  it("resolves the start event's formId", () => {
    const xml = `${BPMN_HEADER}
    <bpmn:process id="proc1" name="Proc 1" isExecutable="true">
      <bpmn:startEvent id="Start">
        <bpmn:extensionElements>
          <zeebe:formDefinition formId="intake" />
        </bpmn:extensionElements>
      </bpmn:startEvent>
    </bpmn:process>
    ${BPMN_FOOTER}`;
    expect(parseModel(xml).startFormId).toBe("intake");
  });

  it("produces agent: null for a non-agentic model", () => {
    const xml = `${BPMN_HEADER}
    <bpmn:process id="proc1" name="Proc 1" isExecutable="true">
      <bpmn:serviceTask id="Check" name="Check inventory">
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="check-inventory" />
        </bpmn:extensionElements>
      </bpmn:serviceTask>
    </bpmn:process>
    ${BPMN_FOOTER}`;
    expect(parseModel(xml).agent).toBeNull();
  });

  it("throws a clear error on invalid XML", () => {
    expect(() => parseModel("<not-xml")).toThrow(/Invalid BPMN XML/);
  });

  it("throws a clear error when there is no bpmn:process", () => {
    const xml = `${BPMN_HEADER}${BPMN_FOOTER}`;
    expect(() => parseModel(xml)).toThrow(/No <bpmn:process>/);
  });

  it("advertises a compound tool (embedded subProcess) with no taskDefinition", () => {
    const xml = `${BPMN_HEADER}
    <bpmn:process id="proc1" name="Proc 1" isExecutable="true">
      <bpmn:adHocSubProcess id="Agent_1" name="Agent">
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" />
        </bpmn:extensionElements>
        <bpmn:subProcess id="LoanReview" name="Loan decision review">
          <bpmn:documentation>Escalate a loan to a senior officer for review.</bpmn:documentation>
          <bpmn:extensionElements>
            <zeebe:ioMapping>
              <zeebe:input source="=fromAi(toolCall.amount, &quot;The loan amount.&quot;, &quot;number&quot;)" target="amount" />
            </zeebe:ioMapping>
          </bpmn:extensionElements>
          <bpmn:serviceTask id="OfficerReview" name="Senior officer review">
            <bpmn:extensionElements>
              <zeebe:taskDefinition type="officer-review" />
            </bpmn:extensionElements>
          </bpmn:serviceTask>
        </bpmn:subProcess>
      </bpmn:adHocSubProcess>
    </bpmn:process>
    ${BPMN_FOOTER}`;
    const info = parseModel(xml);
    // The compound tool is advertised to the model, with its own documentation
    // and fromAi inputs, independent of any taskDefinition.
    expect(info.agent?.tools.map((t) => t.elementId)).toEqual(["LoanReview"]);
    const tool = info.agent?.tools[0];
    expect(tool).toMatchObject({
      elementId: "LoanReview",
      label: "Loan decision review",
      jobType: "",
      documentation: "Escalate a loan to a senior officer for review.",
      compound: true,
    });
    expect(tool?.args).toEqual([
      { name: "amount", description: "The loan amount.", type: "number" },
    ]);
    // The compound tool is a task, flagged compound and isTool, with no jobType.
    const toolTask = info.tasks.find((t) => t.elementId === "LoanReview");
    expect(toolTask).toMatchObject({ isTool: true, compound: true, jobType: "" });
    // Its inner service task is a job-bearing task (needs a handler) but is NOT
    // advertised as a separate tool.
    const inner = info.tasks.find((t) => t.elementId === "OfficerReview");
    expect(inner?.jobType).toBe("officer-review");
    expect(inner?.isTool).toBe(false);
    expect(inner?.compound).toBeUndefined();
  });

  it("advertises a callActivity as a compound tool", () => {
    const xml = `${BPMN_HEADER}
    <bpmn:process id="proc1" name="Proc 1" isExecutable="true">
      <bpmn:adHocSubProcess id="Agent_1" name="Agent">
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" />
        </bpmn:extensionElements>
        <bpmn:callActivity id="Fulfil" name="Fulfil order">
          <bpmn:documentation>Kick off the fulfilment process.</bpmn:documentation>
          <bpmn:extensionElements>
            <zeebe:calledElement processId="fulfilment" />
            <zeebe:ioMapping>
              <zeebe:input source="=fromAi(toolCall.orderId, &quot;The order id.&quot;)" target="orderId" />
            </zeebe:ioMapping>
          </bpmn:extensionElements>
        </bpmn:callActivity>
      </bpmn:adHocSubProcess>
    </bpmn:process>
    ${BPMN_FOOTER}`;
    const info = parseModel(xml);
    expect(info.agent?.tools).toHaveLength(1);
    expect(info.agent?.tools[0]).toMatchObject({
      elementId: "Fulfil",
      jobType: "",
      compound: true,
    });
    expect(info.agent?.tools[0].args).toEqual([
      { name: "orderId", description: "The order id.", type: "string" },
    ]);
  });

  it("advertises compound and job tools side by side under one host", () => {
    const xml = `${BPMN_HEADER}
    <bpmn:process id="proc1" name="Proc 1" isExecutable="true">
      <bpmn:adHocSubProcess id="Agent_1" name="Agent">
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" />
        </bpmn:extensionElements>
        <bpmn:serviceTask id="Lookup" name="Lookup">
          <bpmn:extensionElements>
            <zeebe:taskDefinition type="lookup-job" />
          </bpmn:extensionElements>
        </bpmn:serviceTask>
        <bpmn:subProcess id="Review" name="Review">
          <bpmn:serviceTask id="Inner" name="Inner">
            <bpmn:extensionElements>
              <zeebe:taskDefinition type="inner-job" />
            </bpmn:extensionElements>
          </bpmn:serviceTask>
        </bpmn:subProcess>
      </bpmn:adHocSubProcess>
    </bpmn:process>
    ${BPMN_FOOTER}`;
    const info = parseModel(xml);
    expect(info.agent?.tools.map((t) => t.elementId).sort()).toEqual(["Lookup", "Review"]);
    const job = info.agent?.tools.find((t) => t.elementId === "Lookup");
    expect(job).toMatchObject({ jobType: "lookup-job" });
    expect(job?.compound).toBeUndefined();
    const compound = info.agent?.tools.find((t) => t.elementId === "Review");
    expect(compound).toMatchObject({ jobType: "", compound: true });
  });
});

describe("feelLiteralText", () => {
  it("returns an empty string for null/undefined input", () => {
    expect(feelLiteralText(null)).toBe("");
    expect(feelLiteralText(undefined)).toBe("");
  });

  it("concatenates string literals in a FEEL concatenation expression", () => {
    const raw = '="Shipment notes:\\n" + notes + "\\n\\nPlease verify."';
    expect(feelLiteralText(raw)).toBe("Shipment notes:\n\n\nPlease verify.");
  });

  it("unescapes \\\", \\\\, \\n and \\t inside literals", () => {
    const raw = '="She said \\"hi\\"\\tand left.\\nThen \\\\ appeared."';
    expect(feelLiteralText(raw)).toBe('She said "hi"\tand left.\nThen \\ appeared.');
  });

  it("falls back to the trimmed expression when there are no quoted literals", () => {
    expect(feelLiteralText("=5")).toBe("5");
  });
});
