// The `AgentSpec` this harness drives the agent loop against — mirrors the
// tool declarations in src/examples/seed-export-compliance/model.bpmn
// (VerifyGeneticMarker / CheckDestinationCountry / ComputeComplianceScore /
// RecordComplianceDecision, each with its `fromAi(toolCall.x, "…", "type")`
// argument), authored directly here rather than parsed off the BPMN file.
//
// That's a deliberate choice, not a shortcut: this harness's job is to
// exercise the agent LOOP (prompt, reply parsing, tool-call resolution,
// argument validation) against known-tricky reply shapes, not to re-verify
// BPMN parsing — src/framework/model.test.ts (issue-10) already covers
// `fromAi` extraction, including the historical XMLSerializer-escaping bug.
// A hand-authored fixture keeps every scenario's expected behaviour legible
// next to its reply script, and stays in sync with the real model only by
// convention — if the compliance example's tool contract changes, update
// this fixture to match.

/** @type {import("../../src/framework/model.ts").AgentSpec} */
export const complianceAgentSpec = {
  elementId: "ComplianceAgent",
  label: "Compliance agent",
  jobType: "io.camunda.agenticai:aiagent-job-worker:1",
  systemPrompt:
    "You are a demo workflow assistant for fictional compliance checks.",
  userPrompt: "Please verify export compliance for this shipment.",
  maxModelCalls: 10,
  tools: [
    {
      elementId: "VerifyGeneticMarker",
      label: "Verify genetic marker",
      jobType: "io.camunda:connector-jdbc:1",
      documentation: "Looks up a gene marker in the reference genome.",
      args: [
        {
          name: "geneMarker",
          description: "The gene marker symbol referenced in the shipment notes.",
          type: "string",
        },
      ],
    },
    {
      elementId: "CheckDestinationCountry",
      label: "Check destination country",
      jobType: "io.camunda:connector-graphql:1",
      documentation: "Looks up the destination country's profile.",
      args: [
        {
          name: "countryCode",
          description: "The ISO-3166 alpha-2 destination country code.",
          type: "string",
        },
      ],
    },
    {
      elementId: "ComputeComplianceScore",
      label: "Compute compliance score",
      jobType: "io.camunda:connector-http:1",
      documentation: "Adds two numbers via the legacy scoring engine.",
      args: [
        {
          name: "intA",
          description: "Character length of the confirmed gene symbol.",
          type: "number",
        },
        {
          name: "intB",
          description: "Character length of the confirmed capital city name.",
          type: "number",
        },
      ],
    },
    {
      elementId: "RecordComplianceDecision",
      label: "Record compliance decision",
      jobType: "RecordComplianceDecision",
      documentation: "Script task — records the clearance decision.",
      args: [
        {
          name: "decision",
          description: "'cleared' if the compliance score is even, else 'flagged-for-review'.",
          type: "string",
        },
      ],
    },
  ],
};

/**
 * A second, deliberately tiny spec used only by the argument-collision
 * fixture: two distinct tools that both declare an argument named `code` —
 * the exact shape that silently overwrote one value with another before this
 * task's fix (liveAgent.ts previously merged every tool's arguments flat into
 * one instance-variable root, keyed by the bare argument name).
 * @type {import("../../src/framework/model.ts").AgentSpec}
 */
export const collidingArgsAgentSpec = {
  elementId: "CollisionAgent",
  label: "Collision-fixture agent",
  jobType: "io.camunda.agenticai:aiagent-job-worker:1",
  systemPrompt: "Fixture agent for the argument-collision scenario.",
  userPrompt: "Run both tools.",
  maxModelCalls: 5,
  tools: [
    {
      elementId: "ToolA",
      label: "Tool A",
      jobType: "fixture:tool-a",
      documentation: "Fixture tool A.",
      args: [{ name: "code", description: "A's code.", type: "string" }],
    },
    {
      elementId: "ToolB",
      label: "Tool B",
      jobType: "fixture:tool-b",
      documentation: "Fixture tool B.",
      args: [{ name: "code", description: "B's code.", type: "string" }],
    },
  ],
};
