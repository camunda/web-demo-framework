#!/usr/bin/env node
// Deploy a .bpmn file on the real wasm engine (@nanobpm/bojtos-kit), drive it
// with stub handlers for every job type the model declares, and report what
// the engine actually did with it — process ids, job types by element, user
// tasks, timers, message/signal subscriptions, incidents, and whether every
// instance reached completion.
//
// The point: an example built on an unexercised BPMN construct (a timer, a
// message correlation, DMN, multi-instance, compensation, …) should fail here,
// loudly and in seconds — not as a mysterious stall in the browser three tasks
// later. See docs/engine-coverage.md for the running compatibility table this
// script produces.
//
//   npm run probe -- <path/to/model.bpmn> [--seed '{"json":"vars"}']
//
// Exit code is non-zero only if the script itself fails (bad args, parse
// error, deploy error, an engine command throwing, or exceeding the round
// budget) — an instance that simply doesn't reach completion is still a
// successful *probe*, and is reported as such (see the "completed" field).

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createBojtosSession, dispatchRound } from "@nanobpm/bojtos-kit";
import { parseXml } from "./xml.mjs";
import { analyzeModel } from "./model.mjs";
import { loadLeanWasm } from "../wasm-path.mjs";

function parseArgs(argv) {
  const args = { seed: "{}", files: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--seed") {
      args.seed = argv[++i] ?? "{}";
    } else if (a.startsWith("--seed=")) {
      args.seed = a.slice("--seed=".length);
    } else {
      args.files.push(a);
    }
  }
  return args;
}

/**
 * Read the engine wasm bytes explicitly from node_modules — the default
 * `import.meta.url` loader `@nanobpm/bojtos-kit`/`@nanobpm/engine-wasm` use
 * under a bundler doesn't resolve under plain Node. Path lives in the shared
 * `tools/wasm-path.mjs` so every raw-wasm loader resolves the same binary
 * (re-exported here for the callers that import it from this module).
 */
export { loadLeanWasm as loadWasm };

/**
 * A stub agent handler: on its first turn it activates every tool belonging
 * to its host element (so tool job types actually get exercised, the same
 * pattern tools/probe-activation-vars.mjs already uses), then completes the
 * ad-hoc container on the next turn. Turn state is kept per host element id
 * (not per job type — every AI Agent host shares the same job type), so two
 * hosts in one model don't interfere.
 */
export function makeAgentStub(toolsByHostElementId) {
  const turnByHost = new Map();
  return (job) => {
    const turn = (turnByHost.get(job.elementId) ?? 0) + 1;
    turnByHost.set(job.elementId, turn);
    const tools = toolsByHostElementId.get(job.elementId) ?? [];
    if (turn === 1 && tools.length > 0) {
      return { activateElements: tools.map((t) => ({ elementId: t.elementId, variables: {} })) };
    }
    return { completionConditionFulfilled: true };
  };
}

/**
 * Drive one instance to quiescence, generically unblocking whatever waiting
 * construct the engine reports next: a user task (completed with `{}`), a due
 * timer (fired by advancing the clock), a waiting message subscription
 * (correlated with `{}`), or a waiting signal subscription (broadcast). Each
 * round unblocks at most one *kind* of waiting state so the round budget also
 * bounds a model that can never settle (e.g. a timer that keeps re-arming).
 */
export async function driveToQuiescence(session, workers, agents, maxRounds) {
  let handled = 0;
  for (let round = 1; round <= maxRounds; round++) {
    const result = await dispatchRound(session, workers, { agents });
    handled += result.handled;
    if (result.handled > 0) continue;

    const snap = result.snapshot;
    const pendingUserTasks = snap.userTasks.filter((t) => t.state === "Created");
    if (pendingUserTasks.length > 0) {
      for (const ut of pendingUserTasks) session.completeUserTask(ut.key, "{}");
      continue;
    }
    if (snap.timers.length > 0) {
      const by = Math.max(1, Math.min(...snap.timers.map((t) => t.dueInMs)));
      session.advanceTime(by);
      continue;
    }
    if (snap.messageSubscriptions.length > 0) {
      const seen = new Set();
      for (const m of snap.messageSubscriptions) {
        const key = `${m.messageName}|${m.correlationKey}`;
        if (seen.has(key)) continue;
        seen.add(key);
        session.correlateMessage(m.messageName, m.correlationKey, "{}");
      }
      continue;
    }
    if (snap.signalSubscriptions.length > 0) {
      const seen = new Set();
      for (const s of snap.signalSubscriptions) {
        if (seen.has(s.signalName)) continue;
        seen.add(s.signalName);
        session.broadcastSignal(s.signalName, "{}");
      }
      continue;
    }
    return { snapshot: snap, handled, rounds: round };
  }
  throw new Error(`probe: exceeded ${maxRounds} rounds without reaching quiescence`);
}

/**
 * Deploy and run `file`, seeding the instance with `seedJson`. `workerOverrides`
 * lets a caller replace the default empty-object stub for specific job types —
 * used by tools/probe/coverage-check.mjs to exercise paths a no-op stub can't
 * reach (e.g. throwing a real BPMN error to test an error boundary).
 */
export async function probe(file, seedJson, workerOverrides = {}) {
  const xmlPath = path.resolve(process.cwd(), file);
  const xml = readFileSync(xmlPath, "utf8");
  const tree = parseXml(xml);
  const analysis = analyzeModel(tree);

  const wasm = loadLeanWasm();

  const session = await createBojtosSession({ wasm });
  try {
    const { processIds } = session.deploy(xml);

    const toolsByHostElementId = new Map(analysis.agents.map((a) => [a.elementId, a.tools]));
    const workers = Object.fromEntries(
      analysis.jobTypes.map((jt) => [jt, workerOverrides[jt] ?? (() => ({}))]),
    );
    const agents = Object.fromEntries(
      analysis.agentJobTypes.map((jt) => [jt, makeAgentStub(toolsByHostElementId)]),
    );

    const results = [];
    for (const [index, processId] of processIds.entries()) {
      // Reset + redeploy between processes so a prior process's still-active
      // instance (e.g. one waiting on a signal/message) can't interfere with
      // — or be mistakenly unblocked by — this run's probing.
      if (index > 0) {
        session.reset();
        session.deploy(xml);
      }
      session.createInstance(processId, seedJson);
      const { snapshot, rounds } = await driveToQuiescence(session, workers, agents, 200);
      const instance = snapshot.instances.find((i) => i.processId === processId) ?? null;
      results.push({
        processId,
        completed: instance?.completed ?? snapshot.completedInstances > 0,
        rounds,
        snapshot,
      });
    }

    return { analysis, processIds, results };
  } finally {
    session.free();
  }
}

function printReport(file, report) {
  const { analysis, results } = report;
  console.log(`\n=== ${file} ===`);
  console.log(`process ids: ${report.processIds.join(", ") || "(none)"}`);
  if (analysis.processes.length > 1) {
    console.log(
      `⚠ ${analysis.processes.length} <bpmn:process> elements found — only the first is a typical example's default; every id is still deployable/selectable.`,
    );
  }

  console.log("\njob types by element:");
  for (const t of analysis.tasksByElement) {
    const tag = t.isTool ? ` (tool of ${t.hostElementId})` : "";
    const mi = t.multiInstance
      ? ` [multiInstance:${t.multiInstance.isSequential ? "sequential" : "parallel"}]`
      : "";
    console.log(`  - ${t.elementId} → ${t.jobType}${tag}${mi}`);
  }
  for (const a of analysis.agents) {
    console.log(`  - ${a.elementId} → ${a.jobType} (agent host, ${a.tools.length} tool(s))`);
  }
  if (analysis.tasksByElement.length === 0 && analysis.agents.length === 0) {
    console.log("  (none)");
  }

  console.log("\nuser tasks:");
  for (const ut of analysis.userTasks) {
    console.log(`  - ${ut.elementId}${ut.formId ? ` (formId: ${ut.formId})` : " (no form)"}`);
  }
  if (analysis.userTasks.length === 0) console.log("  (none)");

  console.log("\ntimers:");
  for (const t of analysis.timers) {
    console.log(
      `  - ${t.elementId}: ${t.timeDuration ?? t.timeDate ?? t.timeCycle ?? "(unspecified)"}`,
    );
  }
  if (analysis.timers.length === 0) console.log("  (none)");

  console.log("\nmessage subscriptions:");
  for (const m of analysis.messages) console.log(`  - ${m.elementId}: "${m.messageName}"`);
  if (analysis.messages.length === 0) console.log("  (none)");

  console.log("\nsignal subscriptions:");
  for (const s of analysis.signals) console.log(`  - ${s.elementId}: "${s.signalName}"`);
  if (analysis.signals.length === 0) console.log("  (none)");

  if (analysis.businessRuleTasks.length > 0) {
    console.log("\nbusiness rule (DMN) tasks:");
    for (const b of analysis.businessRuleTasks) {
      console.log(`  - ${b.elementId} → decision "${b.decisionId ?? "(none declared)"}"`);
    }
  }
  if (analysis.compensations.length > 0) {
    console.log("\ncompensation handlers:");
    for (const c of analysis.compensations) console.log(`  - ${c.elementId}`);
  }
  if (analysis.errorBoundaries.length > 0) {
    console.log("\nerror boundary/end events:");
    for (const e of analysis.errorBoundaries) console.log(`  - ${e.elementId}`);
  }

  console.log("\nrun result:");
  for (const r of results) {
    const snap = r.snapshot;
    console.log(
      `  - ${r.processId}: completed=${r.completed} rounds=${r.rounds} incidents=${snap.incidents.length}`,
    );
    for (const inc of snap.incidents) {
      console.log(`      ⚠ incident on ${inc.elementId} (${inc.kind}): ${inc.reason}`);
    }
    if (!r.completed) {
      const pending = [
        ...snap.userTasks.filter((t) => t.state === "Created").map((t) => `userTask:${t.elementId}`),
        ...snap.timers.map((t) => `timer:${t.elementId}`),
        ...snap.messageSubscriptions.map((m) => `message:${m.elementId}`),
        ...snap.signalSubscriptions.map((s) => `signal:${s.elementId}`),
      ];
      if (pending.length > 0) console.log(`      still waiting on: ${pending.join(", ")}`);
    }
  }
  console.log("");
}

async function main() {
  const { files, seed } = parseArgs(process.argv.slice(2));
  if (files.length === 0) {
    console.error("usage: npm run probe -- <path/to/model.bpmn> [--seed '{...}']");
    process.exit(1);
  }
  for (const file of files) {
    const report = await probe(file, seed);
    printReport(file, report);
  }
}

// Only run the CLI when invoked directly (`npm run probe -- ...`) — this
// module is also imported by tools/probe/coverage-check.mjs to reuse the
// deploy/drive machinery without re-running the CLI's argv handling.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((e) => {
    console.error(e instanceof Error ? (e.stack ?? e.message) : String(e));
    process.exit(1);
  });
}
