// Drives `makeLiveAgent` through a full agent loop, headlessly — no BPMN
// engine, no browser. A scenario supplies a fake chat (see ./fakeLlm.mjs) and
// a stub handler per tool element id; this module plays the two against each
// other exactly the way the real dispatch loop does: call the agent, execute
// whatever it activates, feed the results back, repeat until the agent signals
// completion or the round budget runs out.
//
// This is deliberately a smaller loop than the real engine (src/framework's
// `useExampleRun.ts` + `dispatchRound`) — it exists to exercise the agent LOOP
// itself (prompt → reply parsing → tool resolution → argument validation),
// which is what this harness is for. Full BPMN dispatch is covered elsewhere
// (tools/probe, issue-10's unit tests).

import { makeLiveAgent } from "../../src/framework/agent/liveAgent.ts";

/**
 * @param {object} opts
 * @param {import("./agentSpec.mjs").complianceAgentSpec} opts.spec
 * @param {import("../../src/framework/brains/types.ts").ChatFn} opts.chat
 * @param {Record<string, (variables: Record<string, unknown>, args: Record<string, unknown>) => Record<string, unknown>>} opts.toolStubs
 *   One stub per tool element id: given the instance variables and this
 *   tool's own declared-argument values (already validated/coerced), returns
 *   the variables it "produces" (merged into the instance, same as a real
 *   handler's return value).
 * @param {Record<string, unknown>} [opts.seed] Initial instance variables.
 * @param {import("../../src/framework/agent/liveAgent.ts").LiveAgentOptions} [opts.agentOptions]
 * @param {number} [opts.maxTurns]
 */
export async function runAgentLoop({
  spec,
  chat,
  toolStubs,
  seed = {},
  agentOptions = {},
  maxTurns = 20,
}) {
  const trace = [];
  const agent = makeLiveAgent(spec, chat, (entry) => trace.push(entry), agentOptions);

  let variables = { ...seed };
  const activatedOrder = [];
  let completed = false;

  for (let turn = 0; turn < maxTurns && !completed; turn++) {
    const result = await agent({ elementId: spec.elementId, variables, type: spec.jobType });

    if (result.variables) variables = { ...variables, ...result.variables };

    if (result.completionConditionFulfilled) {
      completed = true;
      break;
    }

    for (const { elementId } of result.activateElements ?? []) {
      activatedOrder.push(elementId);
      const tool = spec.tools.find((t) => t.elementId === elementId);
      const toolArgs = Object.fromEntries(
        (tool?.args ?? []).map((a) => [a.name, variables[a.name]]).filter(([, v]) => v !== undefined),
      );
      const stub = toolStubs[elementId];
      const produced = stub ? stub(variables, toolArgs) : {};
      // Same contract makeLiveAgentRouter's caller relies on in the real app:
      // whatever a tool returns is merged into instance variables, including
      // `toolCallResult` for the agent's next turn.
      variables = { ...variables, ...produced };
    }
  }

  return { trace, variables, activatedOrder, completed };
}
