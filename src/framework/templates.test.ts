import { describe, expect, it } from "vitest";
import {
  createTemplateMap,
  substituteTemplates,
  templateNameFromPath,
  xmlContextAt,
} from "./templates";
import { feelLiteralText, parseModel } from "./model";

const BPMN_HEADER = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
  xmlns:zeebe="http://camunda.org/schema/zeebe/1.0"
  id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">`;
const BPMN_FOOTER = `</bpmn:definitions>`;

/** A minimal agent model whose system prompt is a `{{name}}` placeholder inside a FEEL string literal. */
function agentModelXml(systemPromptSource: string): string {
  return `${BPMN_HEADER}
  <bpmn:process id="proc1" name="Proc 1" isExecutable="true">
    <bpmn:adHocSubProcess id="Agent_1" name="Agent">
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" />
        <zeebe:ioMapping>
          <zeebe:input source="${systemPromptSource}" target="data.systemPrompt.prompt" />
          <zeebe:input source="=&quot;Do the thing.&quot;" target="data.userPrompt.prompt" />
        </zeebe:ioMapping>
      </bpmn:extensionElements>
    </bpmn:adHocSubProcess>
  </bpmn:process>
  ${BPMN_FOOTER}`;
}

describe("templateNameFromPath", () => {
  it("takes the file stem, no directory or extension", () => {
    expect(templateNameFromPath("prompts/review-round.md")).toBe("review-round");
    expect(templateNameFromPath("./prompts/system-prompt.md")).toBe("system-prompt");
    expect(templateNameFromPath("no-dir.md")).toBe("no-dir");
  });
});

describe("createTemplateMap", () => {
  it("merges sources in order, later wins", () => {
    const map = createTemplateMap({ a: "1", b: "2" }, { b: "3" });
    expect(map).toEqual({ a: "1", b: "3" });
  });

  it("is not vulnerable to prototype pollution via a crafted template name", () => {
    const map = createTemplateMap(JSON.parse('{"__proto__": {"polluted": true}}'));
    expect(({} as Record<string, unknown>).polluted).toBeUndefined();
    expect(Object.getPrototypeOf(map)).toBeNull();
  });

  it("skips undefined sources", () => {
    expect(createTemplateMap(undefined, { a: "1" })).toEqual({ a: "1" });
  });
});

describe("substituteTemplates — resolution", () => {
  it("substitutes a resolved placeholder and reports none unresolved", () => {
    const { result, unresolved } = substituteTemplates(
      "hello {{name}}!",
      { name: "world" },
      "xml",
    );
    expect(result).toBe("hello world!");
    expect(unresolved).toEqual([]);
  });

  it("leaves an unresolved placeholder verbatim and names it once", () => {
    const { result, unresolved } = substituteTemplates(
      "{{typo}} and {{typo}} again, but {{known}}",
      { known: "ok" },
      "xml",
    );
    expect(result).toBe("{{typo}} and {{typo}} again, but ok");
    expect(unresolved).toEqual(["typo"]);
  });

  it("does not touch this repo's {{secrets.X}} syntax — dots aren't a valid template name", () => {
    const { result, unresolved } = substituteTemplates(
      "endpoint {{secrets.CAMUNDA_PROVIDED_LLM_API_ENDPOINT}} here",
      {},
      "xml",
    );
    expect(result).toBe("endpoint {{secrets.CAMUNDA_PROVIDED_LLM_API_ENDPOINT}} here");
    expect(unresolved).toEqual([]);
  });

  it("is single-pass and non-recursive: a template's own {{...}} is not re-expanded", () => {
    const { result, unresolved } = substituteTemplates(
      "{{outer}}",
      { outer: "{{inner}}", inner: "should not appear" },
      "xml",
    );
    expect(result).toBe("{{inner}}");
    // "inner" was never referenced by the source text itself, so it's not unresolved either.
    expect(unresolved).toEqual([]);
  });
});

describe("xmlContextAt", () => {
  it("classifies element text content", () => {
    const xml = `<a>{{x}}</a>`;
    expect(xmlContextAt(xml, xml.indexOf("{{x}}"))).toBe("text");
  });

  it("classifies a plain XML attribute value", () => {
    const xml = `<a b="{{x}}" />`;
    expect(xmlContextAt(xml, xml.indexOf("{{x}}"))).toBe("attribute");
  });

  it("classifies inside a &#34;-delimited FEEL string literal", () => {
    const xml = `<a b="=&#34;{{x}}&#34;" />`;
    expect(xmlContextAt(xml, xml.indexOf("{{x}}"))).toBe("feel-literal");
  });

  it("classifies inside a &quot;-delimited FEEL string literal", () => {
    const xml = `<a b="=&quot;{{x}}&quot;" />`;
    expect(xmlContextAt(xml, xml.indexOf("{{x}}"))).toBe("feel-literal");
  });
});

describe("substituteTemplates — content-type-aware escaping", () => {
  it("escapes for a plain XML attribute (quotes and newlines as entities)", () => {
    const xml = `<a b="{{x}}" />`;
    const { result } = substituteTemplates(xml, { x: 'He said "hi"\nBye' }, "xml");
    expect(result).toBe(`<a b="He said &quot;hi&quot;&#10;Bye" />`);
  });

  it("escapes for element text content", () => {
    const xml = `<a>{{x}}</a>`;
    const { result } = substituteTemplates(xml, { x: "A & B < C" }, "xml");
    expect(result).toBe(`<a>A &amp; B &lt; C</a>`);
  });

  it("escapes a JSON string body (surrounding quotes already present)", () => {
    const json = `{"label": "{{x}}"}`;
    const { result } = substituteTemplates(json, { x: 'He said "hi"\nBye & well' }, "json");
    expect(JSON.parse(result).label).toBe('He said "hi"\nBye & well');
  });

  it(
    "round-trips a prompt containing a double quote, an ampersand, and multiple lines " +
      "through a FEEL string literal inside an XML attribute — the whole risk this module exists to cover",
    () => {
      const prompt =
        'Say "hello" to the team & remember:\nSecond line with another "quote" and an & sign.';
      const xml = agentModelXml('=&#34;{{system-prompt}}&#34;');
      const { result, unresolved } = substituteTemplates(
        xml,
        { "system-prompt": prompt },
        "xml",
      );
      expect(unresolved).toEqual([]);

      // The result must still be well-formed XML that DOMParser accepts...
      const doc = new DOMParser().parseFromString(result, "application/xml");
      expect(doc.getElementsByTagName("parsererror")).toHaveLength(0);

      // ...and must decode back to the exact original FEEL string literal
      // content, unmangled — not truncated by an early-terminated FEEL string.
      const model = parseModel(result);
      expect(model.agent).not.toBeNull();
      expect(model.agent!.systemPrompt).toBe(prompt);

      // Cross-check against the raw attribute value directly, via the same
      // feelLiteralText model.ts uses, to be sure the DOM (not just our own
      // parseModel plumbing) sees the unmangled text.
      const input = doc.getElementsByTagName("zeebe:input")[0];
      expect(feelLiteralText(input.getAttribute("source"))).toBe(prompt);
    },
  );

  it("escapes < and > in a FEEL-literal-in-XML-attribute round-trip, since a raw < is illegal XML there", () => {
    const prompt = "If score < 5 and threshold > 2, flag it.";
    const xml = agentModelXml('=&#34;{{system-prompt}}&#34;');
    const { result, unresolved } = substituteTemplates(
      xml,
      { "system-prompt": prompt },
      "xml",
    );
    expect(unresolved).toEqual([]);

    const doc = new DOMParser().parseFromString(result, "application/xml");
    expect(doc.getElementsByTagName("parsererror")).toHaveLength(0);

    const model = parseModel(result);
    expect(model.agent).not.toBeNull();
    expect(model.agent!.systemPrompt).toBe(prompt);
  });

  it("a prompt containing '{{' and '}}' as literal text (not a placeholder) is preserved through the FEEL round-trip", () => {
    const prompt = "Use the {{placeholder}} syntax like this in your answer.";
    const xml = agentModelXml('=&#34;{{system-prompt}}&#34;');
    // Only "{{system-prompt}}" in the *source* is a placeholder; the prompt's
    // own literal braces are just its content and must not be re-scanned
    // (single-pass, non-recursive).
    const { result } = substituteTemplates(xml, { "system-prompt": prompt }, "xml");
    const model = parseModel(result);
    expect(model.agent!.systemPrompt).toBe(prompt);
  });
});
