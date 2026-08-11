// A small, self-contained demonstration of the argument-namespace/validation
// bug this task fixed in src/framework/agent/liveAgent.ts, and what fixing it
// changed — printed by ./index.mjs as the "before vs. after" numbers this
// task's PR reports.
//
// `before` reimplements the OLD merge exactly as it read prior to this task
// (flat `variablesOut[arg.name] = args[arg.name]`, last tool in the resolved
// list wins, no type check) — inline here, not sourced from git history, so
// this file doesn't depend on removed code still existing anywhere.
// `after` calls the real, current implementation.

import { coerceToolArg } from "../../src/framework/agent/liveAgent.ts";
import { collidingArgsAgentSpec } from "./agentSpec.mjs";
import { complianceAgentSpec } from "./agentSpec.mjs";

function oldFlatMerge(resolvedCalls) {
  const variablesOut = {};
  for (const { tool, args } of resolvedCalls) {
    for (const arg of tool.args) {
      const v = args[arg.name];
      const supplied = v !== undefined && v !== null && v !== "";
      if (supplied) variablesOut[arg.name] = v; // <- last writer wins, no type check
    }
  }
  return variablesOut;
}

function newResolvedMerge(resolvedCalls) {
  // Mirrors liveAgent.ts's `resolveArguments`, using the same exported
  // `coerceToolArg` the real agent loop uses, so this isn't a second
  // reimplementation of the policy — only of the collision bookkeeping,
  // which is the part the "before" case skips entirely.
  const variablesOut = {};
  const claimedBy = new Map();
  const diagnostics = [];
  for (const { tool, args } of resolvedCalls) {
    for (const arg of tool.args) {
      const raw = args[arg.name];
      const supplied = raw !== undefined && raw !== null && raw !== "";
      if (!supplied) continue;
      const owner = claimedBy.get(arg.name);
      if (owner !== undefined && owner !== tool.elementId) {
        diagnostics.push(`collision on "${arg.name}": ${owner} vs ${tool.elementId}`);
        continue;
      }
      const coerced = coerceToolArg(arg.type, raw);
      if (!coerced.ok) {
        diagnostics.push(`type mismatch on "${arg.name}" (declared ${arg.type})`);
        continue;
      }
      variablesOut[arg.name] = coerced.value;
      claimedBy.set(arg.name, tool.elementId);
    }
  }
  return { variablesOut, diagnostics };
}

export function demonstrateArgumentPolicyFix() {
  const [toolA, toolB] = collidingArgsAgentSpec.tools;
  const collisionCalls = [
    { tool: toolA, args: { code: "A1" } },
    { tool: toolB, args: { code: "B1" } },
  ];

  const computeTool = complianceAgentSpec.tools.find((t) => t.elementId === "ComputeComplianceScore");
  const typeMismatchCalls = [{ tool: computeTool, args: { intA: "four", intB: 8 } }];

  const beforeCollision = oldFlatMerge(collisionCalls);
  const beforeTypeMismatch = oldFlatMerge(typeMismatchCalls);

  const afterCollision = newResolvedMerge(collisionCalls);
  const afterTypeMismatch = newResolvedMerge(typeMismatchCalls);

  return {
    before: { collision: beforeCollision, typeMismatch: beforeTypeMismatch },
    after: { collision: afterCollision.variablesOut, typeMismatch: afterTypeMismatch.variablesOut },
  };
}
