#!/usr/bin/env node
// Regenerate the findings behind docs/engine-coverage.md by actually running
// the wasm engine against a fixed candidate list of BPMN constructs — not
// simply parsed, driven to genuine engine behaviour so "verified" in that doc
// means "this script ran green against this version of @nanobpm/engine-wasm",
// not "looks right on paper".
//
// Not wired into `npm run probe` (that command is for probing one arbitrary
// example file); this is the fixture harness used to keep the coverage doc
// honest. Re-run it and diff docs/engine-coverage.md whenever
// @nanobpm/engine-wasm bumps:
//
//   node tools/probe/coverage-check.mjs

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createBojtosSession } from "@nanobpm/bojtos-kit";
import { probe, driveToQuiescence, loadWasm } from "./index.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const fixturesDir = path.join(here, "fixtures");

const results = [];

function record(name, ok, detail) {
  results.push({ name, ok, detail });
  console.log(`${ok ? "✅" : "❌"} ${name}: ${detail}`);
}

async function runGenericFixture(name, file) {
  const report = await probe(path.join(fixturesDir, file), "{}");
  const r = report.results[0];
  const ok = !!r?.completed;
  record(name, ok, ok ? `completed in ${r.rounds} round(s)` : `did not complete: ${JSON.stringify(r?.snapshot.incidents ?? [])}`);
  return report;
}

// Compensation is not modelled yet (Magikcraft/nano-bpm#886). The engine's
// deploy-validation parity (#850) correctly *rejects* `compensateEventDefinition`
// rather than silently degrading it — so the honest coverage assertion today is
// "deploy is rejected with UnsupportedElement", not "it runs". Flip this back to
// runGenericFixture once #886 lands and the fixture actually executes.
async function runCompensationRejection() {
  const name = "compensation (rejected at deploy — not modelled, #886)";
  const xml = readFileSync(path.join(fixturesDir, "compensation.bpmn"), "utf8");
  const wasm = loadWasm();
  const session = await createBojtosSession({ wasm });
  try {
    session.deploy(xml);
    record(name, false, "unexpectedly deployed — compensation may now be modelled; restore runGenericFixture and update the coverage doc (#886)");
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    const rejected =
      /compensateEventDefinition/.test(msg) &&
      /(does not model this construct|unsupported element)/i.test(msg);
    record(name, rejected, rejected ? "deploy correctly rejected: unsupported <compensateEventDefinition>" : `deploy threw unexpectedly: ${msg.slice(0, 120)}`);
  } finally {
    session.free();
  }
}

async function runErrorBoundaryFixture() {
  const file = path.join(fixturesDir, "error-boundary.bpmn");
  const xml = readFileSync(file, "utf8");
  const wasm = loadWasm();
  const session = await createBojtosSession({ wasm });
  try {
    const { processIds } = session.deploy(xml);
    session.createInstance(processIds[0], "{}");
    // Activate the risky job by hand and throw a BPMN error on it directly —
    // dispatchRound's JobHandler contract only supports complete/fail, not
    // throwError, so exercising this path means dropping to the session API.
    const [job] = session.activateJobs("probe-risky-task", 1, 30_000, "probe");
    if (!job) {
      record("error boundary event", false, "risky job never activated");
      return;
    }
    const snap = session.throwError(job.key, "PROBE_ERROR", "probe: deliberate failure");
    const instance = snap.instances.find((i) => i.processId === processIds[0]);
    const tookErrorPath = snap.takenSequenceFlows.some((f) => f.from === "ErrorBoundary");
    record(
      "error boundary event",
      !!instance?.completed && tookErrorPath,
      instance?.completed
        ? `completed via ${tookErrorPath ? "the error boundary path" : "the happy path (boundary not taken!)"}`
        : `did not complete, incidents: ${JSON.stringify(snap.incidents)}`,
    );
  } finally {
    session.free();
  }
}

async function runMultiInstanceFixture() {
  const file = path.join(fixturesDir, "multi-instance.bpmn");
  const xml = readFileSync(file, "utf8");
  const wasm = loadWasm();
  const session = await createBojtosSession({ wasm });
  try {
    const { processIds } = session.deploy(xml);
    session.createInstance(processIds[0], JSON.stringify({ items: [1, 2, 3] }));
    let seenJobCount = 0;
    const workers = {
      "probe-process-item": (job) => {
        seenJobCount += 1;
        return { result: (job.variables.item ?? 0) * 2 };
      },
    };
    const { snapshot, rounds } = await driveToQuiescence(session, workers, {}, 50);
    const instance = snapshot.instances.find((i) => i.processId === processIds[0]);
    record(
      "multi-instance (parallel)",
      !!instance?.completed && seenJobCount === 3,
      instance?.completed
        ? `completed in ${rounds} round(s), ${seenJobCount} item job(s) activated`
        : `did not complete after ${seenJobCount} item job(s); incidents: ${JSON.stringify(snapshot.incidents)}`,
    );
  } finally {
    session.free();
  }
}

async function runDmnFixture() {
  // No .dmn deploy path exists in this framework yet (see issue-23's finding),
  // so this deliberately deploys the BPMN alone and expects a business-rule
  // incident rather than a completion — recording that absence is the point.
  const report = await probe(path.join(fixturesDir, "dmn-business-rule.bpmn"), "{}");
  const r = report.results[0];
  const hasIncident = r?.snapshot.incidents.length > 0;
  record(
    "DMN business rule task (no decision deployed)",
    hasIncident && !r?.completed,
    hasIncident
      ? `raises an incident as expected: ${r.snapshot.incidents[0]?.reason}`
      : r?.completed
        ? "unexpectedly completed with no decision deployed — investigate"
        : "did not complete and raised no incident — investigate",
  );
}

async function main() {
  console.log(`Engine coverage check — @nanobpm/engine-wasm (see package.json for the pinned version)\n`);
  await runGenericFixture("timer (timeDuration)", "timer.bpmn");
  await runGenericFixture("message correlation", "message.bpmn");
  await runGenericFixture("signal broadcast", "signal.bpmn");
  await runCompensationRejection();
  await runMultiInstanceFixture();
  await runErrorBoundaryFixture();
  await runDmnFixture();

  console.log("\nSummary:");
  for (const r of results) console.log(`  ${r.ok ? "✅" : "❌"} ${r.name}`);
}

main().catch((e) => {
  console.error(e instanceof Error ? (e.stack ?? e.message) : String(e));
  process.exit(1);
});
