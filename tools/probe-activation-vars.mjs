// Minimal repro: does `AgentResult.activateElements[].variables` reach anything?
//
// Camunda's agentic contract seeds those variables into the activated element's
// local scope, so the tool's job should see them. Run:
//   node tools/probe-activation-vars.mjs
import { readFileSync } from "node:fs";
import { createBojtosSession, dispatchRound } from "@nanobpm/bojtos-kit";

const wasm = readFileSync(
  new URL(
    "../node_modules/@nanobpm/engine-wasm/nanobpmn_engine_bg.wasm",
    import.meta.url,
  ),
);
const xml = readFileSync(
  new URL("../src/examples/seed-export-compliance/model.bpmn", import.meta.url),
  "utf8",
);

const session = await createBojtosSession({ wasm });
const { processIds } = session.deploy(xml);
session.createInstance(processIds[0], JSON.stringify({ scenario: "probe" }));

let turn = 0;
const agents = {
  "io.camunda.agenticai:aiagent-job-worker:1": () => {
    turn += 1;
    if (turn === 1)
      return {
        activateElements: [
          {
            elementId: "VerifyGeneticMarker",
            variables: { fromActivation: "SHOULD-BE-VISIBLE" },
          },
        ],
      };
    return { completionConditionFulfilled: true };
  },
};

let seenByTool = null;
const workers = {
  "io.camunda:connector-jdbc:1": (job) => {
    seenByTool = job.variables;
    return {};
  },
  "io.camunda:connector-graphql:1": () => ({}),
  "io.camunda:http-json:1": () => ({}),
  RecordComplianceDecision: () => ({}),
};

let snap;
for (let i = 0; i < 4; i++) {
  const round = await dispatchRound(session, workers, { agents });
  snap = round.snapshot;
  if (seenByTool) break;
}

console.log("tool job.variables:", JSON.stringify(seenByTool));
console.log(
  "instance root variables:",
  JSON.stringify(snap?.instances[0]?.variables ?? null),
);
console.log(
  "\nfromActivation visible to the tool?",
  seenByTool && "fromActivation" in seenByTool ? "YES" : "NO",
);
console.log(
  "fromActivation anywhere in the instance?",
  JSON.stringify(snap?.instances[0]?.variables ?? {}).includes("SHOULD-BE-VISIBLE")
    ? "YES"
    : "NO",
);
session.free();
