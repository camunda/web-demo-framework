#!/usr/bin/env node
// Headless eval harness for the agent loop (src/framework/agent/liveAgent.ts):
// run each scenario in ./scenarios.mjs against a scriptable fake LLM, no
// browser and no real BPMN engine, and report a deterministic pass rate.
//
//   npm run eval
//
// Exit code is non-zero if any scenario fails, so this is CI-usable the same
// way `npm run probe` is.

import { runAgentLoop } from "./runner.mjs";
import { scenarios, makeChatForScenario } from "./scenarios.mjs";
import { demonstrateArgumentPolicyFix } from "./beforeAfter.mjs";

async function runScenario(scenario) {
  const { chat } = makeChatForScenario(scenario);
  const result = await runAgentLoop({
    spec: scenario.spec,
    chat,
    toolStubs: scenario.toolStubs,
    agentOptions: scenario.agentOptions,
  });
  const reasons = scenario.check(result);
  return { scenario, result, reasons, pass: reasons.length === 0 };
}

async function main() {
  console.log("Agent loop eval\n");

  const outcomes = [];
  for (const scenario of scenarios) {
    outcomes.push(await runScenario(scenario));
  }

  for (const { scenario, reasons, pass } of outcomes) {
    console.log(`${pass ? "✔" : "✘"} ${scenario.name}`);
    for (const reason of reasons) console.log(`    - ${reason}`);
  }

  const passed = outcomes.filter((o) => o.pass).length;
  const rate = ((passed / outcomes.length) * 100).toFixed(0);
  console.log(`\n${passed}/${outcomes.length} scenarios passed (${rate}%)`);

  console.log("\nArgument-namespace/validation policy — before vs. after this task's fix:");
  const { before, after } = demonstrateArgumentPolicyFix();
  console.log(
    `  before: collision silently overwritten (code=${JSON.stringify(before.collision.code)}, ` +
      `no diagnostic); type mismatch merged unchecked (intA=${JSON.stringify(before.typeMismatch.intA)})`,
  );
  console.log(
    `  after:  collision resolved to first activation (code=${JSON.stringify(after.collision.code)}, ` +
      `${after.collision.diagnostics.length} diagnostic(s)); type mismatch rejected (${
        "intA" in after.typeMismatch
          ? "still present — BUG"
          : `intA absent, ${after.typeMismatch.diagnostics.length} diagnostic(s)`
      })`,
  );

  if (passed !== outcomes.length) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
