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
  // A printed ❌ has to reach the exit status too, or CI reads a failed run as a pass.
  if (!ok) process.exitCode = 1;
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

// `route` comes from the instance variables, not from `SetBranch` — that task
// is a no-op stub standing in for whatever would compute the branch upstream,
// so the seed is what actually decides the route here.
async function runExclusiveGatewayFixture() {
  const file = path.join(fixturesDir, "exclusive-gateway.bpmn");
  const xml = readFileSync(file, "utf8");
  const cases = [
    { name: "route: \"fast\"", vars: { route: "fast" }, expect: "FastPath" },
    { name: "route: \"slow\"", vars: { route: "slow" }, expect: "SlowPath" },
    { name: "route unset", vars: {}, expect: "SlowPath" },
  ];
  const workers = {
    "probe-set-branch": () => ({}),
    "probe-fast-path": () => ({}),
    "probe-slow-path": () => ({}),
  };
  const taken = [];
  for (const c of cases) {
    const wasm = loadWasm();
    const session = await createBojtosSession({ wasm });
    try {
      const { processIds } = session.deploy(xml);
      session.createInstance(processIds[0], JSON.stringify(c.vars));
      const { snapshot } = await driveToQuiescence(session, workers, {}, 50);
      const instance = snapshot.instances.find((i) => i.processId === processIds[0]);
      const went = snapshot.takenSequenceFlows.find((f) => f.from === "Decide")?.to;
      taken.push(
        `${c.name} → ${went ?? "nothing"}${instance?.completed ? "" : " (did not complete!)"}`,
      );
      if (went !== c.expect || !instance?.completed) {
        record(
          "exclusive gateway (conditional + default flow)",
          false,
          `${c.name} took ${went ?? "no flow"} (expected ${c.expect})${instance?.completed ? "" : " and did not complete"}`,
        );
        return;
      }
    } finally {
      session.free();
    }
  }
  record("exclusive gateway (conditional + default flow)", true, taken.join(", "));
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

/** A message start event has no `createInstance` entry point — publishing the
 *  message is what creates the instance. */
async function runMessageStartFixture() {
  const name = "message start event (instance created by correlation)";
  const xml = readFileSync(path.join(fixturesDir, "message-start.bpmn"), "utf8");
  const session = await createBojtosSession({ wasm: loadWasm() });
  try {
    session.deploy(xml);
    // Deliberately no createInstance call: if correlation doesn't start the
    // process, there is nothing to run.
    session.correlateMessage(
      "probe-kickoff",
      "PROBE-1",
      JSON.stringify({ customerId: "PROBE-1" }),
    );
    const started = session.snapshot().instances.length === 1;
    if (!started) {
      record(name, false, "correlating the start message created no instance");
      return;
    }
    const { snapshot } = await driveToQuiescence(
      session,
      { "probe-work": () => ({ handled: true }) },
      {},
      20,
    );
    const completed = snapshot.completedInstances >= 1;
    record(
      name,
      completed,
      completed
        ? "correlateMessage created the instance and it ran to completion"
        : `instance created but did not complete: ${JSON.stringify(snapshot.incidents)}`,
    );
  } finally {
    session.free();
  }
}

/** An interrupting message boundary event must cancel the activity and take
 *  its own outgoing flow — not the activity's happy path. */
async function runMessageBoundaryFixture() {
  const name = "message boundary event (interrupting)";
  const xml = readFileSync(path.join(fixturesDir, "message-boundary.bpmn"), "utf8");
  const session = await createBojtosSession({ wasm: loadWasm() });
  try {
    const { processIds } = session.deploy(xml);
    session.createInstance(processIds[0], JSON.stringify({ customerId: "PROBE-9" }));

    // The subscription has to be visible *before* it fires, since that is what
    // tells a UI a boundary event is armed rather than a wait state to resolve.
    const sub = session.snapshot().messageSubscriptions[0];
    const kind = sub?.kind ?? "(none)";
    if (!sub) {
      record(name, false, "no message subscription opened for the boundary event");
      return;
    }

    const snap = session.correlateMessage("probe-cancel", "PROBE-9", "{}");
    const interrupted = snap.takenSequenceFlows.some((f) => f.from === "MessageBoundary");
    const tookHappyPath = snap.takenSequenceFlows.some((f) => f.from === "LongWork");
    // `!tookHappyPath` on its own proves nothing: the happy path can't be
    // taken while `LongWork`'s job is still uncompleted, so a *non*-
    // interrupting boundary would look identical. The interrupting claim is
    // that the activity was cancelled — no job left to activate, and the
    // instance finished through the boundary alone.
    const jobStillThere = session
      .activateJobs("probe-long-work", 1, 1000, "coverage-check")
      .length > 0;
    const completed = snap.completedInstances >= 1;
    // `ExampleRunner` tells a boundary subscription apart from a wait state by
    // looking for "boundary" in `kind`, and refuses to auto-correlate the
    // former. If an engine bump renames or drops that discriminator while
    // boundary routing still works, every ordinary run would start firing
    // interrupting boundaries on its own — so the contract is asserted, not
    // merely printed.
    const discriminated = kind.toLowerCase().includes("boundary");
    const ok = interrupted && !tookHappyPath && !jobStillThere && completed && discriminated;
    record(
      name,
      ok,
      !interrupted
        ? "the boundary path was not taken"
        : !discriminated
          ? `routing works but the subscription kind is "${kind}" — no longer identifies a boundary, and ExampleRunner's isBoundarySubscription depends on that`
          : jobStillThere
            ? "the boundary fired but the attached activity was not cancelled — not interrupting"
            : !completed
              ? "routed through the boundary but the instance did not complete"
              : `cancelled the activity and completed through the boundary (subscription kind: "${kind}")`,
    );
  } finally {
    session.free();
  }
}

/**
 * A `bpmn:receiveTask` should behave like an intermediate message catch event.
 * It does not: it completes on arrival, opening no subscription and waiting
 * for nothing. A silent degrade rather than a deploy rejection, so a model
 * built on it looks like it works while skipping the wait entirely — this
 * check exists to catch the day that changes.
 */
async function runReceiveTaskFixture() {
  const name = "receive task (message wait) — NOT supported, silently skipped";
  const xml = readFileSync(path.join(fixturesDir, "receive-task.bpmn"), "utf8");
  const session = await createBojtosSession({ wasm: loadWasm() });
  try {
    const { processIds } = session.deploy(xml);
    session.createInstance(processIds[0], JSON.stringify({ customerId: "PROBE-3" }));
    const snap = session.snapshot();
    const subscriptions = snap.messageSubscriptions.length;
    const completed = snap.completedInstances;
    // Assert the recorded failure exactly — zero subscriptions AND immediate
    // completion — rather than merely "it didn't wait". A loose negative would
    // stay green if the engine started opening a subscription but completed
    // anyway, or opened none and left the instance stuck: both are changes
    // worth seeing.
    const stillBroken = subscriptions === 0 && completed === 1;
    record(
      name,
      stillBroken,
      stillBroken
        ? "completed immediately with 0 subscription(s) and no wait"
        : `behaviour changed — ${subscriptions} subscription(s), ${completed} completed instance(s); re-check the engine and update the coverage doc`,
    );
  } finally {
    session.free();
  }
}

/**
 * Two ways to give an ad-hoc tool a follow-up step. Camunda documents chained
 * sequence flows between an ad-hoc sub-process's children as supported; this
 * engine drops them, treating an activated tool as a leaf. An embedded
 * sub-process used as one compound tool does get its inner flow driven, which
 * is the workaround every example in this repo uses.
 */
async function runAdHocInnerFlowFixture() {
  const xml = readFileSync(path.join(fixturesDir, "adhoc-inner-flow.bpmn"), "utf8");
  const session = await createBojtosSession({ wasm: loadWasm() });
  const seen = new Set();
  const worker = (job) => {
    seen.add(job.elementId);
    return {};
  };
  try {
    const { processIds } = session.deploy(xml);
    session.createInstance(processIds[0], "{}");
    let turn = 0;
    const { snapshot } = await driveToQuiescence(
      session,
      {
        "probe-chained-tool": worker,
        "probe-chained-follow-up": worker,
        "probe-compound-inner": worker,
        "probe-compound-follow-up": worker,
      },
      {
        "io.camunda.agenticai:aiagent-job-worker:1": () => {
          turn += 1;
          return turn === 1
            ? {
                activateElements: [
                  { elementId: "ChainedTool" },
                  { elementId: "CompoundTool" },
                ],
              }
            : { completionConditionFulfilled: true };
        },
      },
      50,
    );

    // The recorded failure is specifically "the activated tool runs, only its
    // outgoing flow is dropped" — so assert the tool ran too. Checking only
    // the follow-up's absence would stay green if activation broke entirely.
    const chainedRan = seen.has("ChainedTool");
    const followUpRan = seen.has("ChainedFollowUp");
    record(
      "ad-hoc sub-process: chained sequence flow between tools — NOT followed",
      chainedRan && !followUpRan,
      !chainedRan
        ? "the activated tool itself never ran — this check no longer measures what it claims"
        : followUpRan
          ? "the follow-up now runs — engine fixed; update the coverage doc and drop the sub-process workaround"
          : "the activated tool ran, its outgoing sequence flow was dropped",
    );
    // Both inner workers running isn't the claim — the workaround relies on
    // the compound tool *finishing* and handing control back, so a run that
    // ran both tasks and then stalled or incidented has to fail this.
    const finishedCleanly =
      snapshot.completedInstances >= 1 && snapshot.incidents.length === 0;
    const compoundDrove = seen.has("CompoundInner") && seen.has("CompoundFollowUp");
    record(
      "ad-hoc sub-process: embedded sub-process as a compound tool",
      compoundDrove && finishedCleanly,
      !compoundDrove
        ? `only ${[...seen].join(", ") || "nothing"} ran`
        : finishedCleanly
          ? "the compound tool's whole inner flow was driven, and the instance completed"
          : `inner flow ran but the instance did not complete cleanly: ${JSON.stringify(snapshot.incidents)}`,
    );
  } finally {
    session.free();
  }
}

/**
 * An interrupting boundary event on an ad-hoc sub-process fires, but leaves the
 * tool the agent had activated — and the ad-hoc `#innerInstance` — running, so
 * the instance never completes (Magikcraft/nano-bpm#1155). The same boundary on
 * a plain sub-process wrapper tears the whole scope down, which is the
 * workaround; `runAgentInterruptFixture` below asserts that half still works.
 */
async function runAdHocBoundaryCancelFixture() {
  const name =
    "ad-hoc sub-process: interrupting boundary — does NOT cancel an activated tool (#1155)";
  const xml = readFileSync(path.join(fixturesDir, "adhoc-boundary-cancel.bpmn"), "utf8");
  const session = await createBojtosSession({ wasm: loadWasm() });
  try {
    const { processIds } = session.deploy(xml);
    session.createInstance(processIds[0], JSON.stringify({ customerId: "PROBE-11" }));
    const jobs = session.activateJobs("probe-agent", 1, 1000, "coverage-check");
    if (jobs.length === 0) {
      record(name, false, "the ad-hoc sub-process never offered an agent job");
      return;
    }
    session.completeAgentJob(jobs[0].key, {
      activateElements: [{ elementId: "AskHuman", variables: {} }],
    });

    const snap = session.correlateMessage("probe-cancel", "PROBE-11", "{}");
    const fired = snap.takenSequenceFlows.some((f) => f.from === "Interrupt");
    const active = (snap.instances[0]?.activeElements ?? []).map(
      (e) => e.elementId ?? e,
    );
    // The recorded failure is specific: the boundary *does* fire, and what
    // survives it is the inner scope. Asserting only "did not complete" would
    // stay green if the boundary stopped firing at all, which is a different
    // and worse bug.
    const stillBroken =
      fired && active.includes("AskHuman") && snap.completedInstances === 0;
    record(
      name,
      stillBroken,
      !fired
        ? "the boundary did not fire at all — this check no longer measures what it claims"
        : stillBroken
          ? `boundary fired but left ${JSON.stringify(active)} active; instance never completes`
          : `behaviour changed — active after: ${JSON.stringify(active)}, completed: ${snap.completedInstances}. If it now cancels cleanly, #1155 is fixed: drop the sub-process wrapper from the event-driven agent example`,
    );
  } finally {
    session.free();
  }
}

/**
 * The event-driven agent's premise: one message name, subscribed to by both a
 * message start event and an interrupting boundary on the running case. Zeebe
 * correlates a published message once and prefers the open subscription; this
 * engine satisfies both, interrupting the case *and* opening a duplicate
 * (Magikcraft/nano-bpm#1156). That is what parks the example.
 */
async function runAgentInterruptFixture() {
  const xml = readFileSync(path.join(fixturesDir, "agent-interrupt.bpmn"), "utf8");
  const session = await createBojtosSession({ wasm: loadWasm() });
  try {
    session.deploy(xml);
    session.correlateMessage(
      "probe-alert",
      "PROBE-12",
      JSON.stringify({ customerId: "PROBE-12" }),
    );
    const jobs = session.activateJobs("probe-agent", 1, 1000, "coverage-check");
    if (jobs.length === 0) {
      record("event-driven agent fixture", false, "no agent job after the start message");
      return;
    }
    session.completeAgentJob(jobs[0].key, {
      activateElements: [{ elementId: "AskHuman", variables: {} }],
    });

    // Pin the case that is meant to be interrupted, and its open task, *before*
    // publishing. #1156 means the same publish also opens a second instance, so
    // looking for "an instance that completed" afterwards could find either.
    const armed = session.snapshot();
    const caseKey = armed.instances[0]?.key;
    const askHuman = armed.userTasks.find(
      (t) => t.elementId === "AskHuman" && t.instanceKey === caseKey,
    );
    if (!caseKey || !askHuman) {
      record(
        "sub-process wrapper: interrupting boundary cancels the agent inside it (#1155 workaround)",
        false,
        "the agent's user task never opened, so there was nothing to cancel",
      );
      return;
    }

    const snap = session.correlateMessage(
      "probe-alert",
      "PROBE-12",
      JSON.stringify({ customerId: "PROBE-12" }),
    );
    const fired = snap.takenSequenceFlows.some((f) => f.from === "SecondAlert");
    const interrupted = snap.instances.find((i) => i.key === caseKey);
    const active = (interrupted?.activeElements ?? []).map((e) => e.elementId ?? e);
    // "Cancelled" by the definition `ExampleRunner.openUserTasksOf` uses: gone
    // from the instance's active elements. Asserting on the task's own `state`
    // would fail — the engine still reports it `Created` after the instance has
    // completed, which is the reporting wart noted on #1155.
    const taskState =
      snap.userTasks.find((t) => t.key === askHuman.key)?.state ?? "(gone)";
    const cancelled =
      fired && interrupted?.state === "Completed" && active.length === 0;
    record(
      "sub-process wrapper: interrupting boundary cancels the agent inside it (#1155 workaround)",
      cancelled,
      !fired
        ? "the boundary did not fire — this check no longer measures what it claims"
        : cancelled
          ? `the boundary tore down the ad-hoc sub-process and its open user task (which the engine still reports as "${taskState}" — #1155)`
          : `the wrapped agent was not cancelled: instance ${interrupted?.state ?? "(gone)"}, still active ${JSON.stringify(active)}`,
    );

    // One publish, two subscriptions satisfied. Counting instances is the whole
    // assertion: the boundary firing is already covered above, so what is left
    // to detect is the duplicate case the same call opened.
    const duplicated = snap.instances.length === 2;
    record(
      "message start event + open boundary subscription — one publish hits BOTH (#1156)",
      duplicated,
      duplicated
        ? "the follow-up interrupted the open case and started a second instance from the same publish"
        : `behaviour changed — ${snap.instances.length} instance(s). If correlation now prefers the open subscription, #1156 is fixed: the event-driven agent example can be un-parked`,
    );
  } finally {
    session.free();
  }
}

async function main() {
  console.log(`Engine coverage check — @nanobpm/engine-wasm (see package.json for the pinned version)\n`);
  await runGenericFixture("timer (timeDuration)", "timer.bpmn");
  await runGenericFixture("message correlation", "message.bpmn");
  await runGenericFixture("signal broadcast", "signal.bpmn");
  await runCompensationRejection();
  await runMultiInstanceFixture();
  await runErrorBoundaryFixture();
  await runExclusiveGatewayFixture();
  await runDmnFixture();
  await runMessageStartFixture();
  await runMessageBoundaryFixture();
  await runReceiveTaskFixture();
  await runAdHocInnerFlowFixture();
  await runAdHocBoundaryCancelFixture();
  await runAgentInterruptFixture();

  console.log("\nSummary:");
  for (const r of results) console.log(`  ${r.ok ? "✅" : "❌"} ${r.name}`);
}

main().catch((e) => {
  console.error(e instanceof Error ? (e.stack ?? e.message) : String(e));
  process.exit(1);
});
