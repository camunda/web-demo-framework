// Repro: are `AgentResult.activateElements[].variables` delivered to the
// activated element?
//
// spec/jobs.yaml (nano-bpm) describes JobResultActivateElement.variables as
// "variables scoped to that element", and ADR 0023 says they are "applied
// through the tool's ioMapping". This probes both readings against a minimal
// model: one tool with no ioMapping, one whose input mapping copies the
// activation variable via a plain FEEL expression.
//
//   node tools/probe-activation-vars.mjs
import { readFileSync } from "node:fs";
import { createBojtosSession, dispatchRound } from "@nanobpm/bojtos-kit";
import { loadLeanWasm } from "./wasm-path.mjs";

const wasm = loadLeanWasm();
const xml = readFileSync(
  new URL("./fixtures/activation-vars.bpmn", import.meta.url),
  "utf8",
);

const session = await createBojtosSession({ wasm });
const { processIds } = session.deploy(xml);
session.createInstance(processIds[0], JSON.stringify({ seeded: "from-start" }));

const ACTIVATION = { fromActivation: "SHOULD-REACH-THE-TOOL" };

let turn = 0;
const agents = {
  "io.camunda.agenticai:aiagent-job-worker:1": () => {
    turn += 1;
    if (turn === 1)
      return {
        activateElements: [
          { elementId: "ToolNoMapping", variables: ACTIVATION },
          { elementId: "ToolPlainMapping", variables: ACTIVATION },
        ],
      };
    return { completionConditionFulfilled: true };
  },
};

const seen = {};
const workers = {
  "tool-no-mapping": (job) => {
    seen.ToolNoMapping = job.variables;
    return {};
  },
  "tool-plain-mapping": (job) => {
    seen.ToolPlainMapping = job.variables;
    return {};
  },
};

let snap;
for (let i = 0; i < 6; i++) {
  const round = await dispatchRound(session, workers, { agents });
  snap = round.snapshot;
  if (seen.ToolNoMapping && seen.ToolPlainMapping) break;
  if (round.handled === 0) break;
}

const has = (o, k) => !!o && k in o;
console.log("ToolNoMapping    job.variables:", JSON.stringify(seen.ToolNoMapping ?? null));
console.log("ToolPlainMapping job.variables:", JSON.stringify(seen.ToolPlainMapping ?? null));
console.log("instance root   variables:", JSON.stringify(snap?.instances[0]?.variables ?? null));
console.log("");
console.log("activation variable visible to a tool with NO ioMapping? ",
  has(seen.ToolNoMapping, "fromActivation") ? "YES" : "NO");
console.log("copied through a PLAIN ioMapping (copiedByMapping)?      ",
  has(seen.ToolPlainMapping, "copiedByMapping") ? "YES" : "NO");
console.log("present anywhere in the instance?                        ",
  JSON.stringify(snap?.instances[0]?.variables ?? {}).includes(ACTIVATION.fromActivation) ? "YES" : "NO");
session.free();
