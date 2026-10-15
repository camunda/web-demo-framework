import { describe, expect, it } from "vitest";
import {
  createBojtosSession,
  dispatchRound,
  type AgentHandler,
  type AgentResult,
} from "@nanobpm/bojtos-kit";
import { parseModel } from "./model";
import { buildWorkers } from "./compile";
import { claimTools, type TurnRef } from "./agent/liveAgent";
import { tagActivations } from "./agent/activation";
import { loadReadModelWasm } from "./testing/readModelWasm";
import type { ExampleHandler, TraceEntry } from "./types";
import fixture from "../../tools/probe/fixtures/adhoc-inner-flow.bpmn?raw";

/**
 * Which call a tool's job belongs to, on the real engine.
 *
 * Inside an ad-hoc sub-process a tool can also be reached by a sequence flow
 * from another tool (`ChainedTool → ChainedFollowUp`, verified in
 * docs/engine-coverage.md). That run is no call of the agent's, so it must
 * carry no iteration or call number — and must not shift the numbering of
 * the agent's own calls of the same tool, in either order. The identity rides
 * on the activation's local variables, so this is asserting the engine hands
 * them to the activated element's job and to nothing reached afterwards.
 */
// `?raw` (Vite-native) loads the probe fixture as a string, as browser.test.ts does.
const BPMN: string = fixture;
const AGENT_JOB = "io.camunda.agenticai:aiagent-job-worker:1";

/** Run the agent through `plan` — one list of tools to activate per iteration. */
async function run(plan: string[][]) {
  const model = parseModel(BPMN);
  const session = await createBojtosSession({ variant: "readmodel", wasm: loadReadModelWasm() });
  session.deploy(BPMN);
  session.createInstance("probe-adhoc-inner-flow", "{}");
  const log: TraceEntry[] = [];
  const noop = (() => ({})) as ExampleHandler;
  const workers = buildWorkers(
    model,
    { ChainedTool: noop, ChainedFollowUp: noop, CompoundInner: noop, CompoundFollowUp: noop },
    (e) => log.push(e),
  );
  const turnRef: TurnRef = { current: undefined };
  let turn = 0;
  const agent: AgentHandler = async (): Promise<AgentResult> => {
    const tools = plan[turn];
    turn += 1;
    if (!tools) return { completionConditionFulfilled: true };
    const identities = claimTools(turnRef, turn, "Agent", tools);
    return tagActivations({ activateElements: tools.map((elementId) => ({ elementId })) }, identities);
  };
  for (let i = 0; i < 12; i++) {
    const round = await dispatchRound(session, workers, { agents: { [AGENT_JOB]: agent } });
    if (round.handled === 0) break;
  }
  // One identity per job: what its started line was stamped with.
  return log
    .filter((e) => e.elementId === "ChainedFollowUp" && e.text.startsWith("▶"))
    .map(({ turn, call }) => ({ turn, call }));
}

describe("a tool's job and the agent call that made it", () => {
  it("leaves a flow-started run uncounted, then numbers the agent's own call 1", async () => {
    // Iteration 1 runs ChainedTool, whose flow starts ChainedFollowUp; then
    // the agent calls ChainedFollowUp itself.
    expect(await run([["ChainedTool"], ["ChainedFollowUp"]])).toEqual([
      { turn: undefined, call: undefined },
      { turn: 2, call: 1 },
    ]);
  });

  it("does not hand an earlier call's identity to a later flow-started run", async () => {
    expect(await run([["ChainedFollowUp"], ["ChainedTool"]])).toEqual([
      { turn: 1, call: 1 },
      { turn: undefined, call: undefined },
    ]);
  });
});
