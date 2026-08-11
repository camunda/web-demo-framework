#!/usr/bin/env node
// Deploy and run the create-urban-app template's `greet` app
// (jwulf/nano-ide `packages/create-urban-app/template`) through
// `BojtosEngineClient`, this repo's browser runner's engine binding. This is
// the working half of issue #23's spike — see
// `../../docs/spike-urban-bojtos-findings.md` for the write-up.
//
//   npm run spike:urban
//
// What this demonstrates: an Urban app's *model* (BPMN + form) deploys
// unmodified (bar one required addition — see below) and its *process*
// (a message-started service task) runs to completion driven entirely through
// the `EngineClient` seam, exactly the shape a real Urban runtime would drive
// it through. What it does NOT demonstrate — deliberately, see the findings
// doc — is the worker crossing the browser boundary as Urban ships it
// (`workers/greet.ts` imports `@nanobpm/urban`'s `AppApi` and a SQLite-backed
// `app.data` repo, neither of which exist in a browser): the worker below is
// a hand-ported equivalent of `workers/greet.ts`'s logic, with the
// `app.data.repo(...).insert(...)` persistence line replaced by a `trace()`
// call, standing in for "a bundling step would let the *code* run unmodified,
// but not its Deno/Node-only dependencies."

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createBojtosEngineClient, type EngineJob } from "./BojtosEngineClient.ts";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..");

/**
 * Read the engine wasm bytes explicitly from node_modules — the default
 * `import.meta.url` loader `@nanobpm/bojtos-kit`/`@nanobpm/engine-wasm` use
 * under a bundler doesn't resolve under plain Node (same trap `tools/probe`
 * works around; see its `loadWasm`).
 */
function loadWasm() {
  return readFileSync(
    path.join(repoRoot, "node_modules", "@nanobpm", "engine-wasm", "nanobpmn_engine_bg.wasm"),
  );
}

async function main() {
  const client = await createBojtosEngineClient({ wasm: loadWasm() });
  const trace: string[] = [];

  const bpmn = readFileSync(path.join(here, "fixtures", "greet.bpmn"), "utf8");
  const form = readFileSync(path.join(here, "fixtures", "greeting.form"), "utf8");

  // --- deploy: BPMN resource + form resource, exactly as Urban's
  // `deployResources` would be called with both content types together. ---
  const { deployed } = await client.deployResources([
    { name: "greet.bpmn", content: bpmn, contentType: "application/bpmn+xml" },
    { name: "greeting.form", content: form, contentType: "application/json" },
  ]);
  trace.push(`deployed ${deployed} resources (1 BPMN process, 1 form)`);
  trace.push(`form map now has: ${[...client.forms.keys()].join(", ")}`);

  // --- register the worker (hand-ported from workers/greet.ts) ---
  await client.registerWorker("demo.greet", (job: EngineJob) => {
    const who = String(job.variables.who ?? "world");
    const message = `Hello, ${who}!`;
    // Stands in for `app.data.repo("greeting").insert(...)` — SQLite via
    // `app.data` doesn't exist under this browser runner; see findings doc.
    trace.push(`[worker] would persist greeting row: { who: "${who}", message: "${message}" }`);
    return { message };
  });

  // --- start the app the way its trigger would: a webhook posts to
  // /hooks/greet, which the Urban runtime maps to publishing
  // `demo.greet-requested` correlated on `who`. We publish that message
  // directly, standing in for the (out-of-scope for this spike, see the
  // findings doc) webhook-trigger-to-message-publish plumbing. ---
  await client.publishMessage({
    name: "demo.greet-requested",
    correlationKey: "Ada",
    variables: { who: "Ada" },
  });

  const [instance] = await client.searchProcessInstances({ state: "COMPLETED" });
  if (!instance) {
    console.error("FAIL: no completed process instance found");
    console.error(trace.join("\n"));
    process.exitCode = 1;
    await client.close();
    return;
  }
  trace.push(`process instance ${instance.processInstanceKey} completed`);

  await client.close();

  console.log(trace.join("\n"));
  console.log("\nOK: the Urban `greet` app's model deployed and its process ran to");
  console.log("completion end-to-end through BojtosEngineClient's EngineClient seam.");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
