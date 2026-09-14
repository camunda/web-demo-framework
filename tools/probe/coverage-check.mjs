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

import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import { createBojtosSession, dispatchRound } from "@nanobpm/bojtos-kit";
import { probe, driveToQuiescence, loadWasm } from "./index.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const fixturesDir = path.join(here, "fixtures");

const results = [];

/**
 * Which check(s) prove each construct, for `tools/audit/construct-coverage.mjs`
 * to read instead of keeping its own list. A hand-maintained "verified" column
 * drifts the moment a check is renamed or deleted, and a stale one is worse
 * than none: it says something has been checked when nothing checks it.
 *
 * A construct covering several engine paths names *all* of them — a message
 * event behaves differently as an ordinary catch, a start event and a boundary
 * event, and one passing check must not stand for the other two.
 *
 * Some constructs are keyed `name[variant]` because the variants are different
 * engine paths with different verdicts — a call activity works on a sequence
 * flow and is silently broken as an ad-hoc tool (#1159). The audit records the
 * same qualified names, so the bare tag never collects a blanket verdict.
 *
 * Validated at the end of every run — a name here that no check records is a
 * hard error, not a quiet mismatch.
 */
export const PROVEN_CONSTRUCTS = {
  serviceTask: "timer (timeDuration)",
  sequenceFlow: "timer (timeDuration)",
  "startEvent[plain]": "timer (timeDuration)",
  "endEvent[plain]": "timer (timeDuration)",
  "startEvent[message]": "message start event (instance created by correlation)",
  "intermediateCatchEvent[timer]": "timer (timeDuration)",
  "intermediateCatchEvent[message]": "message correlation",
  "intermediateCatchEvent[signal]": "signal broadcast",
  "boundaryEvent[error]": "error boundary event",
  "boundaryEvent[message]": "message boundary event (interrupting)",
  "multiInstanceLoopCharacteristics[parallel]": "multi-instance (parallel)",
  "callActivity[sequenceFlow]": "call activity (on a sequence flow)",
  exclusiveGateway: "exclusive gateway (conditional + default flow)",
  "subProcess[sequenceFlow]": "embedded sub-process on a sequence flow",
  "subProcess[adHocTool]": "ad-hoc sub-process: embedded sub-process as a compound tool",
  adHocSubProcess: "ad-hoc sub-process: embedded sub-process as a compound tool",
  parallelGateway: "parallel gateway (fork and join)",
  task: "abstract task and manual task (pass-through)",
  manualTask: "abstract task and manual task (pass-through)",
  eventBasedGateway: "event-based gateway (race, loser cancelled)",
  scriptTask: "script task (job typed as its element id)",
  userTask: "user task (parks until completed)",
};

/**
 * Constructs proven for *one variant only* — reported apart from
 * `PROVEN_CONSTRUCTS` so one working path can't stand for an element. Empty
 * today: the signal throw that used to sit here turned out not to work at all
 * once a check observed the signal rather than the token, so
 * `intermediateThrowEvent` is a known failure instead.
 */
export const PARTIAL_CONSTRUCTS = {};

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

    // The bug only appears with a tool actually activated, so a silent
    // activation regression would otherwise let this check report the gap as
    // still present while exercising nothing.
    const armed = session
      .snapshot()
      .userTasks.some((t) => t.elementId === "AskHuman" && t.state === "Created");
    if (!armed) {
      record(name, false, "the agent's tool never opened, so nothing was there to survive the boundary");
      return;
    }

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
    // looking for "an instance that completed" afterwards could find either —
    // and a silent activation regression would leave nothing to cancel, which
    // the wrapper would then "pass" by completing normally.
    const armed = session.snapshot();
    const caseKey = armed.instances[0]?.key;
    const askHuman = armed.userTasks.find(
      (t) =>
        t.elementId === "AskHuman" &&
        t.instanceKey === caseKey &&
        t.state === "Created",
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


/**
 * The constructs `tools/audit/construct-coverage.mjs` found in real Camunda
 * models that nothing here had ever driven. Each verdict in that audit's
 * "verified" column points at one of these, so the claim is backed by a run
 * rather than by a note written after probing once by hand.
 */
async function runAuditedConstructsFixture() {
  const xml = readFileSync(path.join(fixturesDir, "audited-constructs.bpmn"), "utf8");

  // --- parallel gateway: fork, both branches, join ---
  {
    const session = await createBojtosSession({ wasm: loadWasm() });
    try {
      session.deploy(xml);
      session.createInstance("probe-parallel", "{}");
      const ran = new Set();
      const { snapshot } = await driveToQuiescence(
        session,
        { "probe-branch": (job) => { ran.add(job.elementId); return {}; } },
        {},
        20,
      );
      // Both branches, not just one: a fork that ran a single side and still
      // completed would look identical from the instance count alone. And
      // exactly one completion, since a join that let both tokens through would
      // satisfy "at least one" while being precisely the bug worth catching.
      const ok =
        ran.has("BranchA") && ran.has("BranchB") && snapshot.completedInstances === 1;
      record(
        "parallel gateway (fork and join)",
        ok,
        ok
          ? "both branches ran and the join completed the instance exactly once"
          : `ran ${JSON.stringify([...ran])}, completed ${snapshot.completedInstances}`,
      );
    } finally {
      session.free();
    }
  }

  // --- bpmn:task / bpmn:manualTask: no implementation, no job, no stall ---
  {
    const session = await createBojtosSession({ wasm: loadWasm() });
    try {
      session.deploy(xml);
      session.createInstance("probe-passthrough", "{}");
      const { snapshot } = await driveToQuiescence(session, {}, {}, 20);
      // Reaching the end is not the same as passing *through* these two. A
      // regression that skipped either and still completed would look identical
      // from the instance count, so read the per-element stats.
      const ran = (id) =>
        (snapshot.elementStats.find((e) => e.elementId === id)?.completed ?? 0) >= 1;
      const ok =
        ran("AbstractTask") &&
        ran("ManualTask") &&
        snapshot.completedInstances >= 1 &&
        snapshot.incidents.length === 0;
      record(
        "abstract task and manual task (pass-through)",
        ok,
        ok
          ? "neither offered a job, both completed, and the token carried on through them"
          : `AbstractTask completed: ${ran("AbstractTask")}, ManualTask completed: ${ran("ManualTask")}, instances ${snapshot.completedInstances}, incidents ${JSON.stringify(snapshot.incidents)}`,
      );
    } finally {
      session.free();
    }
  }

  // --- intermediate throw event: carries on rather than waiting ---
  {
    const session = await createBojtosSession({ wasm: loadWasm() });
    try {
      session.deploy(xml);
      // Park a listener on the signal first — a signal isn't retained, so the
      // catcher has to be waiting before the throw happens.
      session.createInstance("probe-signal-catcher", "{}");
      const armed = session.snapshot().signalSubscriptions.length === 1;

      session.createInstance("probe-throw", "{}");
      let after = false;
      let caught = false;
      // Jobs only. `driveToQuiescence` broadcasts a signal itself once nothing
      // else can progress, which would fire the catcher and prove nothing.
      for (let round = 0; round < 10; round += 1) {
        const result = await dispatchRound(
          session,
          {
            "probe-after-throw": () => { after = true; return {}; },
            "probe-caught-signal": () => { caught = true; return {}; },
          },
          {},
        );
        if (result.handled === 0) break;
      }
      const snapshot = session.snapshot();
      // The recorded failure, asserted exactly: the token carries on (so this is
      // not a wait state) while a catcher that was already waiting never hears
      // it. Asserting the failure rather than lamenting it means this check
      // turns red the day the engine starts broadcasting.
      const stillBroken =
        armed &&
        after &&
        !caught &&
        snapshot.signalSubscriptions.length === 1 &&
        // The throwing instance has to have *finished*. Without this, a
        // regression that ran AfterThrow but left the process hanging would be
        // recorded as the expected silent skip.
        snapshot.instances.some((i) => i.processId === "probe-throw" && i.completed);
      record(
        "intermediate throw event (signal) — NOT broadcast, silently skipped",
        stillBroken,
        stillBroken
          ? "the token passed through the throw and finished; a waiting catcher never received the signal"
          : `behaviour changed — catcher armed: ${armed}, after the throw: ${after}, caught: ${caught}, subscriptions left: ${snapshot.signalSubscriptions.length}, throw instance completed: ${snapshot.instances.some((i) => i.processId === "probe-throw" && i.completed)}; re-check the engine and update the coverage doc`,
      );
    } finally {
      session.free();
    }
  }

  // --- event-based gateway: both arm, first wins, loser is cancelled ---
  {
    const session = await createBojtosSession({ wasm: loadWasm() });
    try {
      session.deploy(xml);
      session.createInstance("probe-event-gateway", JSON.stringify({ k: "K1" }));
      const armed = session.snapshot();
      const bothArmed = armed.messageSubscriptions.length === 1 && armed.timers.length === 1;

      const snap = session.correlateMessage("probe-race-msg", "K1", "{}");
      const tookMessage = snap.takenSequenceFlows.some((f) => f.from === "OnMessage");
      const tookTimer = snap.takenSequenceFlows.some((f) => f.from === "OnTimeout");
      // "Message won" is only half of it. The timer has to be *gone*, or the
      // gateway is a parallel split wearing a diamond.
      const ok =
        bothArmed && tookMessage && !tookTimer && snap.timers.length === 0 &&
        snap.completedInstances >= 1;
      record(
        "event-based gateway (race, loser cancelled)",
        ok,
        !bothArmed
          ? `both events did not arm: ${armed.messageSubscriptions.length} subscription(s), ${armed.timers.length} timer(s)`
          : ok
            ? "message won, the timer was cancelled, and the instance completed once"
            : `took message: ${tookMessage}, took timer: ${tookTimer}, timers left: ${snap.timers.length}`,
      );
    } finally {
      session.free();
    }
  }

  // --- user task parks the run; script task is a job typed as its element id ---
  {
    const session = await createBojtosSession({ wasm: loadWasm() });
    try {
      session.deploy(xml);
      session.createInstance("probe-humanwork", "{}");
      // Snapshot before driving: `driveToQuiescence` completes open user tasks
      // itself, so parking is only observable from here.
      const parked = session.snapshot();
      const open = parked.userTasks.filter((t) => t.state === "Created");
      const parkedOk = open.length === 1 && open[0].elementId === "Human";
      record(
        "user task (parks until completed)",
        parkedOk,
        parkedOk
          ? "the engine parked on it and offered no job for it"
          : `open tasks ${JSON.stringify(parked.userTasks.map((t) => [t.elementId, t.state]))}`,
      );

      let scriptRan = false;
      if (parkedOk) session.completeUserTask(open[0].key, "{}");
      const { snapshot } = await driveToQuiescence(
        session,
        { Script: () => { scriptRan = true; return {}; } },
        {},
        20,
      );
      const ok = parkedOk && scriptRan && snapshot.completedInstances >= 1;
      record(
        "script task (job typed as its element id)",
        ok,
        ok
          ? "offered a job under its own element id, and the instance completed after it"
          : `script ran: ${scriptRan}, completed ${snapshot.completedInstances}`,
      );
    } finally {
      session.free();
    }
  }

  // --- call activity on a sequence flow: child runs, caller carries on ---
  {
    const session = await createBojtosSession({ wasm: loadWasm() });
    try {
      session.deploy(xml);
      session.createInstance("probe-caller", "{}");
      let childRan = false;
      const { snapshot } = await driveToQuiescence(
        session,
        { "probe-child-work": () => { childRan = true; return {}; } },
        {},
        20,
      );
      // Two instances complete — caller and child, exactly. "At least two" would
      // also pass if a regression spawned duplicate children.
      const ok = childRan && snapshot.completedInstances === 2 && snapshot.incidents.length === 0;
      record(
        "call activity (on a sequence flow)",
        ok,
        ok
          ? "the child process ran and the caller completed after it"
          : `child ran: ${childRan}, completed ${snapshot.completedInstances}, incidents ${JSON.stringify(snapshot.incidents)}`,
      );
    } finally {
      session.free();
    }
  }
}

/**
 * BPMN ids are document-wide. A multi-process fixture that reuses one across
 * processes still deploys, so a check can pass while its flow references bind
 * ambiguously — the proof then means nothing, which is worse than no proof.
 */
function checkFixtureIds() {
  const offenders = [];
  for (const file of readdirSync(fixturesDir).filter((f) => f.endsWith(".bpmn"))) {
    // Comments and CDATA stripped first: an id mentioned in documentation is not
    // a declared id, and failing a valid fixture for it would train people to
    // ignore this check.
    const xml = readFileSync(path.join(fixturesDir, file), "utf8")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<!\[CDATA\[[\s\S]*?\]\]>/g, "");
    const ids = [...xml.matchAll(/\sid=(?:"([^"]+)"|'([^']+)')/g)].map((m) => m[1] ?? m[2]);
    const dupes = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
    if (dupes.length) offenders.push(`${file}: ${dupes.join(", ")}`);
  }
  record(
    "fixtures declare no duplicate ids",
    offenders.length === 0,
    offenders.length === 0 ? "every id is unique within its document" : offenders.join(" | "),
  );
}

/**
 * Run every check and return what each one actually recorded. The audit next
 * door consumes this rather than the check *names*: a name proves a check
 * exists, not that it passed, and a construct whose probe is failing must not
 * keep reporting as verified.
 *
 * `record` sets `process.exitCode` so the CLI fails CI. A caller embedding
 * these checks gets the results instead, and decides its own status — this is
 * a library call, and a report-only tool must stay report-only.
 */
export async function runChecks() {
  const before = process.exitCode;
  results.length = 0;
  try {
    await main();
  } catch (e) {
    // A fixture that throws must still leave a report. Rejecting here would
    // reject the audit's top-level await and print no rows at all — the one
    // outcome a report-only tool must not have.
    record(
      "probe harness",
      false,
      `a check threw and the run stopped early: ${e instanceof Error ? e.message : String(e)}`,
    );
  }
  const collected = results.map((r) => ({ name: r.name, ok: r.ok, detail: r.detail }));
  process.exitCode = before;
  return collected;
}

/**
 * Constructs the engine refuses at deploy (#1168). Probing a refusal matters as
 * much as probing a success: without it, the day one of these starts deploying,
 * the audit keeps reporting "rejected-at-deploy" for something that now runs —
 * and an unsupported construct quietly becoming supported is exactly the kind
 * of change a coverage tool exists to notice.
 *
 * The refusal is not an "unsupported element" message: the parser doesn't model
 * these at all, so the element simply isn't there and the sequence flow into it
 * dangles. Matching the offending element *id* is therefore what pins the
 * behaviour — matching on the construct name passes for the wrong reason (an id
 * containing "escalation" satisfied that, which is how this check first went
 * green).
 */
async function runDeployRejections() {
  const cases = [
    ["sendTask", "reject-send-task.bpmn", "Send"],
    ["inclusiveGateway", "reject-inclusive-gateway.bpmn", "Fork"],
    ["escalationEventDefinition", "reject-escalation.bpmn", "EscBoundary"],
  ];
  for (const [construct, file, elementId] of cases) {
    const name = `${construct} (not modelled — rejected at deploy, #1168)`;
    const xml = readFileSync(path.join(fixturesDir, file), "utf8");
    const session = await createBojtosSession({ wasm: loadWasm() });
    try {
      session.deploy(xml);
      record(name, false, `unexpectedly deployed — ${construct} may now be supported; re-check the engine and update the coverage doc (#1168)`);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      const rejected = msg.includes(elementId) && /unknown|unsupported|invalid/i.test(msg);
      record(
        name,
        rejected,
        rejected
          ? `deploy rejected, naming ${elementId}: ${msg.slice(0, 80)}`
          : `deploy threw, but not about ${elementId}: ${msg.slice(0, 120)}`,
      );
    } finally {
      session.free();
    }
  }
}

/**
 * The two claims the wrapped ad-hoc fixture next door does *not* back: a call
 * activity activated directly as a tool (#1159), and an ordinary sub-process on
 * a sequence flow. Both were previously reported on that fixture's evidence,
 * which contains neither.
 */
async function runAdHocCallActivityFixture() {
  const xml = readFileSync(path.join(fixturesDir, "adhoc-call-activity.bpmn"), "utf8");

  {
    const session = await createBojtosSession({ wasm: loadWasm() });
    try {
      session.deploy(xml);
      session.createInstance("probe-adhoc-call", "{}");
      let childRan = false;
      let turn = 0;
      const { snapshot } = await driveToQuiescence(
        session,
        { "probe-adhoc-child-work": () => { childRan = true; return {}; } },
        {
          "io.camunda.agenticai:aiagent-job-worker:1": () => {
            turn += 1;
            return turn === 1
              ? { activateElements: [{ elementId: "DirectCallTool" }] }
              : { completionConditionFulfilled: true };
          },
        },
        40,
      );
      // The recorded failure: the child never starts, and nothing complains.
      const childInstances = snapshot.instances.filter(
        (i) => i.processId === "probe-adhoc-child",
      ).length;
      const stillBroken =
        !childRan && childInstances === 0 && snapshot.incidents.length === 0;
      record(
        "ad-hoc sub-process: call activity as a tool — child never starts (#1159)",
        stillBroken,
        stillBroken
          ? "the tool was activated, no child instance was created, and no incident was raised"
          : `behaviour changed — child job ran: ${childRan}, child instances: ${childInstances}, incidents ${JSON.stringify(snapshot.incidents)}; re-check the engine and update the coverage doc`,
      );
    } finally {
      session.free();
    }
  }

  {
    const session = await createBojtosSession({ wasm: loadWasm() });
    try {
      session.deploy(xml);
      session.createInstance("probe-plain-subprocess", "{}");
      let inner = false;
      const { snapshot } = await driveToQuiescence(
        session,
        { "probe-inner-job": () => { inner = true; return {}; } },
        {},
        20,
      );
      const ok = inner && snapshot.completedInstances >= 1 && snapshot.incidents.length === 0;
      record(
        "embedded sub-process on a sequence flow",
        ok,
        ok
          ? "the inner flow ran and the outer process completed after it"
          : `inner job ran: ${inner}, completed ${snapshot.completedInstances}, incidents ${JSON.stringify(snapshot.incidents)}`,
      );
    } finally {
      session.free();
    }
  }
}

/**
 * A signal start event opens no subscription, so nothing can start the process.
 * Recorded as the failure it is, rather than left as an assumption.
 */
async function runSignalStartFixture() {
  const name = "signal start event — NOT subscribed, never starts anything";
  const xml = readFileSync(path.join(fixturesDir, "signal-start.bpmn"), "utf8");
  const session = await createBojtosSession({ wasm: loadWasm() });
  try {
    session.deploy(xml);
    const subs = session.snapshot().signalSubscriptions.length;
    const after = session.broadcastSignal("probe-start-signal", "{}");
    const stillBroken = subs === 0 && after.instances.length === 0;
    record(
      name,
      stillBroken,
      stillBroken
        ? "no subscription after deploy, and a broadcast created no instance"
        : `behaviour changed — ${subs} subscription(s), ${after.instances.length} instance(s); re-check the engine and update the coverage doc`,
    );
  } finally {
    session.free();
  }
}

async function main() {
  console.log(`Engine coverage check — @nanobpm/engine-wasm (see package.json for the pinned version)\n`);
  checkFixtureIds();
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
  await runAdHocCallActivityFixture();
  await runSignalStartFixture();
  await runDeployRejections();
  await runAuditedConstructsFixture();

  console.log("\nSummary:");
  for (const r of results) console.log(`  ${r.ok ? "✅" : "❌"} ${r.name}`);

  // The audit downstream trusts this map; a name pointing at a check that no
  // longer exists would have it report proof that nothing produces.
  const recorded = new Set(results.map((r) => r.name));
  const dangling = [
    ...new Set([
      ...Object.values(PROVEN_CONSTRUCTS).flat(),
      ...Object.values(PARTIAL_CONSTRUCTS).map((p) => p.check),
    ]),
  ].filter((name) => !recorded.has(name));
  if (dangling.length) {
    process.exitCode = 1;
    console.log(
      `\n❌ PROVEN_CONSTRUCTS names ${dangling.length} check(s) that did not run: ${dangling.join(", ")}`,
    );
  }
}

// Importable for its PROVEN_CONSTRUCTS map without running the whole suite.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
main().catch((e) => {
  console.error(e instanceof Error ? (e.stack ?? e.message) : String(e));
  process.exit(1);
});
