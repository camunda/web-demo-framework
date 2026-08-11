// Eval scenarios: known-good regression fixtures plus the specific failure
// modes observed running the agent loop against a real 3B model. Each
// scenario supplies a scripted fake-LLM reply queue and a `check(result)`
// that returns a list of failure reasons (empty = pass) against what
// `runAgentLoop` actually did — which tools ran, in what order, with what
// arguments, and the end state.
//
// Non-negotiable, enforced by these checks rather than just asserted in
// prose: a decorated/invented tool name must activate NOTHING, a repeat must
// be skipped (not silently re-run), and no failure mode may be "corrected" —
// see liveAgent.ts's module doc comment for the policy these encode.

import { makeFakeChat } from "./fakeLlm.mjs";
import { complianceAgentSpec, collidingArgsAgentSpec } from "./agentSpec.mjs";
import { complianceToolStubs, collidingToolStubs } from "./toolStubs.mjs";
import { decoratedToolName } from "./fixtures/decoratedToolName.mjs";
import { emptyArgument } from "./fixtures/emptyArgument.mjs";
import { repeatCall } from "./fixtures/repeatCall.mjs";
import { inventedTool } from "./fixtures/inventedTool.mjs";
import { proseWrappedReply } from "./fixtures/proseWrappedReply.mjs";
import { markdownFenceReply } from "./fixtures/markdownFenceReply.mjs";

const DONE = '{"done": true}';

function includesTrace(trace, substring) {
  return trace.some((e) => e.text.includes(substring));
}

export const scenarios = [
  {
    name: "known-good: cleared (scripted-brain parity)",
    description:
      "The full happy path the compliance example's 'likely cleared' scenario exercises, replayed through a scripted LLM reply sequence instead of the real scripted-agent JS stand-in.",
    spec: complianceAgentSpec,
    toolStubs: complianceToolStubs,
    replies: [
      '{"tool": "VerifyGeneticMarker", "arguments": {"geneMarker": "TP53"}, "done": false}',
      '{"tool": "CheckDestinationCountry", "arguments": {"countryCode": "BR"}, "done": false}',
      '{"tool": "ComputeComplianceScore", "arguments": {"intA": 4, "intB": 8}, "done": false}',
      '{"tool": "RecordComplianceDecision", "arguments": {"decision": "cleared"}, "done": false}',
      DONE,
    ],
    check(result) {
      const reasons = [];
      const expectedOrder = [
        "VerifyGeneticMarker",
        "CheckDestinationCountry",
        "ComputeComplianceScore",
        "RecordComplianceDecision",
      ];
      if (JSON.stringify(result.activatedOrder) !== JSON.stringify(expectedOrder))
        reasons.push(`expected tool order ${expectedOrder}, got ${result.activatedOrder}`);
      if (result.variables.decision !== "cleared")
        reasons.push(`expected decision "cleared", got ${JSON.stringify(result.variables.decision)}`);
      if (!result.completed) reasons.push("run did not complete");
      return reasons;
    },
  },
  {
    name: "known-good: flagged (scripted-brain parity)",
    description: "Same shape, an odd compliance score routing to human review.",
    spec: complianceAgentSpec,
    toolStubs: complianceToolStubs,
    replies: [
      '{"tool": "VerifyGeneticMarker", "arguments": {"geneMarker": "BRCA1"}, "done": false}',
      '{"tool": "CheckDestinationCountry", "arguments": {"countryCode": "DE"}, "done": false}',
      '{"tool": "ComputeComplianceScore", "arguments": {"intA": 5, "intB": 6}, "done": false}',
      '{"tool": "RecordComplianceDecision", "arguments": {"decision": "flagged-for-review"}, "done": false}',
      DONE,
    ],
    check(result) {
      const reasons = [];
      if (result.variables.decision !== "flagged-for-review")
        reasons.push(`expected decision "flagged-for-review", got ${JSON.stringify(result.variables.decision)}`);
      if (!result.completed) reasons.push("run did not complete");
      return reasons;
    },
  },
  {
    name: "decorated tool name is not fuzzy-matched",
    description:
      'A model labels the tool name itself ("id: VerifyGeneticMarker") — must activate nothing, then recover once it names the tool correctly.',
    spec: complianceAgentSpec,
    toolStubs: complianceToolStubs,
    replies: [
      decoratedToolName,
      '{"tool": "VerifyGeneticMarker", "arguments": {"geneMarker": "TP53"}, "done": false}',
      DONE,
    ],
    check(result) {
      const reasons = [];
      if (result.activatedOrder.includes("id: VerifyGeneticMarker"))
        reasons.push("decorated name was activated verbatim instead of rejected");
      const verifyCount = result.activatedOrder.filter((id) => id === "VerifyGeneticMarker").length;
      if (verifyCount !== 1)
        reasons.push(`expected VerifyGeneticMarker to run exactly once, ran ${verifyCount} times`);
      if (!includesTrace(result.trace, "doesn't exist"))
        reasons.push("expected a trace entry naming the unrecognised tool");
      return reasons;
    },
  },
  {
    name: "empty argument is reported, not silently passed through",
    description: '`{"geneMarker": ""}` counts as not supplied.',
    spec: complianceAgentSpec,
    toolStubs: complianceToolStubs,
    replies: [emptyArgument, DONE],
    check(result) {
      const reasons = [];
      if ("geneMarker" in result.variables)
        reasons.push("empty argument was merged into variables instead of treated as missing");
      if (!includesTrace(result.trace, 'model supplied no value for "geneMarker"'))
        reasons.push("expected a trace entry naming the missing argument");
      return reasons;
    },
  },
  {
    name: "repeat call is skipped, not re-run",
    description: "The model asks for a tool it already ran.",
    spec: complianceAgentSpec,
    toolStubs: complianceToolStubs,
    replies: [
      '{"tool": "VerifyGeneticMarker", "arguments": {"geneMarker": "TP53"}, "done": false}',
      repeatCall,
    ],
    check(result) {
      const reasons = [];
      if (result.activatedOrder.length !== 1)
        reasons.push(`expected VerifyGeneticMarker to run exactly once, ran ${result.activatedOrder.length} times`);
      if (!includesTrace(result.trace, "already run"))
        reasons.push("expected a trace entry naming the skipped repeat");
      return reasons;
    },
  },
  {
    name: "invented tool name activates nothing",
    description: "A hallucinated tool that isn't in this diagram at all.",
    spec: complianceAgentSpec,
    toolStubs: complianceToolStubs,
    replies: [inventedTool, DONE],
    check(result) {
      const reasons = [];
      if (result.activatedOrder.length !== 0)
        reasons.push(`expected nothing activated, got ${result.activatedOrder}`);
      if (!includesTrace(result.trace, "doesn't exist"))
        reasons.push("expected a trace entry naming the invented tool");
      return reasons;
    },
  },
  {
    name: "reply wrapped in prose still parses",
    spec: complianceAgentSpec,
    toolStubs: complianceToolStubs,
    replies: [proseWrappedReply, DONE],
    check(result) {
      return result.activatedOrder[0] === "VerifyGeneticMarker"
        ? []
        : [`expected VerifyGeneticMarker to run, got ${result.activatedOrder}`];
    },
  },
  {
    name: "reply wrapped in a markdown fence still parses",
    spec: complianceAgentSpec,
    toolStubs: complianceToolStubs,
    replies: [markdownFenceReply, DONE],
    check(result) {
      return result.activatedOrder[0] === "VerifyGeneticMarker"
        ? []
        : [`expected VerifyGeneticMarker to run, got ${result.activatedOrder}`];
    },
  },
  {
    name: "multi-tool turn: two independent tools in one reply",
    description:
      "With allowMultiToolTurns on, two tools with no shared argument names both activate from a single reply.",
    spec: complianceAgentSpec,
    toolStubs: complianceToolStubs,
    agentOptions: { allowMultiToolTurns: true },
    replies: [
      '{"tools": [{"tool": "VerifyGeneticMarker", "arguments": {"geneMarker": "TP53"}}, {"tool": "CheckDestinationCountry", "arguments": {"countryCode": "BR"}}], "done": false}',
      '{"tool": "ComputeComplianceScore", "arguments": {"intA": 4, "intB": 8}, "done": false}',
      '{"tool": "RecordComplianceDecision", "arguments": {"decision": "cleared"}, "done": false}',
      DONE,
    ],
    check(result) {
      const reasons = [];
      if (result.activatedOrder.slice(0, 2).sort().join() !==
        ["VerifyGeneticMarker", "CheckDestinationCountry"].sort().join())
        reasons.push(`expected both tools activated in the first turn, got ${result.activatedOrder}`);
      if (result.variables.markerRecord?.geneSymbol !== "TP53")
        reasons.push("VerifyGeneticMarker's own argument did not survive the multi-tool turn");
      if (result.variables.countryInfo?.capital !== "Brasília")
        reasons.push("CheckDestinationCountry's own argument did not survive the multi-tool turn");
      if (!result.completed) reasons.push("run did not complete");
      return reasons;
    },
  },
  {
    name: "argument name collision: first activation wins, loudly",
    description:
      "Two different tools declare the same argument name and are activated in the same turn — the shared instance-variable namespace means the second would otherwise silently overwrite the first.",
    spec: collidingArgsAgentSpec,
    toolStubs: collidingToolStubs,
    agentOptions: { allowMultiToolTurns: true },
    replies: [
      '{"tools": [{"tool": "ToolA", "arguments": {"code": "A1"}}, {"tool": "ToolB", "arguments": {"code": "B1"}}], "done": false}',
      DONE,
    ],
    check(result) {
      const reasons = [];
      if (result.variables.code !== "A1")
        reasons.push(`expected first-activated ToolA's value ("A1") to win, got ${JSON.stringify(result.variables.code)}`);
      if (!includesTrace(result.trace, "argument name collision"))
        reasons.push("expected a trace entry naming the collision");
      if (result.activatedOrder.length !== 2)
        reasons.push("expected both tools to still activate despite the argument collision");
      return reasons;
    },
  },
  {
    name: "declared-type mismatch is rejected, not coerced past reason",
    description:
      '{"intA": "four"} for a number-typed argument must not reach the tool as a string, and must not silently become NaN either.',
    spec: complianceAgentSpec,
    toolStubs: complianceToolStubs,
    replies: [
      '{"tool": "ComputeComplianceScore", "arguments": {"intA": "four", "intB": 8}, "done": false}',
      DONE,
    ],
    check(result) {
      const reasons = [];
      if ("intA" in result.variables)
        reasons.push('expected "intA" to be rejected rather than merged as a string');
      if (!includesTrace(result.trace, "declared as number"))
        reasons.push("expected a trace entry naming the type mismatch");
      if (Number.isNaN(result.variables.complianceScore) || "complianceScore" in result.variables)
        reasons.push(
          `expected the rejected "intA" to prevent complianceScore from being computed, got ${JSON.stringify(result.variables.complianceScore)}`,
        );
      return reasons;
    },
  },
  {
    name: "declared-type coercion: numeric-looking string is accepted",
    description: 'A stringly-typed "8" for a number argument is exactly what a real small model sends — it should coerce, not reject.',
    spec: complianceAgentSpec,
    toolStubs: complianceToolStubs,
    replies: [
      '{"tool": "ComputeComplianceScore", "arguments": {"intA": "4", "intB": "8"}, "done": false}',
      DONE,
    ],
    check(result) {
      return result.variables.complianceScore === 12
        ? []
        : [`expected complianceScore 12 from coerced string args, got ${JSON.stringify(result.variables.complianceScore)}`];
    },
  },
];

export function makeChatForScenario(scenario) {
  return makeFakeChat(scenario.replies);
}
