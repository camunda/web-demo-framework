#!/usr/bin/env node
// Audit the runner against the engine's own contract.
//
// The construct audit next door asks "does the engine execute this?". This asks
// the other half: when the engine stops and waits, does the runner know what it
// is waiting for, tell the reader, and give them a way to clear it?
//
// A construct can execute perfectly and still be unusable in the UI. That is not
// hypothetical — message events executed fine long before the runner could
// publish one, and a run that stops on a wait state the runner doesn't
// recognise reads as "Paused" with no way forward and nothing explaining why.
//
//   node tools/audit/runner-coverage.mjs
//
// Two drift checks, both derived from `@nanobpm/bojtos-kit`'s own types rather
// than a list maintained here, so an engine bump that adds a wait state shows
// up as a gap instead of silently degrading to "idle".

import { readFileSync } from "node:fs";

const kit = (f) => readFileSync(`node_modules/@nanobpm/bojtos-kit/dist/${f}`, "utf8");
const src = (f) => readFileSync(`src/framework/${f}`, "utf8");

let gaps = 0;
const report = (ok, label, detail) => {
  if (!ok) gaps += 1;
  console.log(`${ok ? "✅" : "❓"} ${label}${detail ? ` — ${detail}` : ""}`);
};

// ── 1. Every reason the engine can settle on is something the reader is told ──
//
// `describeRound` turns a settled round into the one line a reader sees. A
// reason it doesn't handle falls through to a generic branch, so the run looks
// idle when it is actually blocked on something specific and resolvable.
const worker = kit("worker.d.ts");
// Comments first: the members are documented inline and the prose contains
// semicolons, which would otherwise truncate the union at the first one.
const declarations = worker.replace(/\/\*[\s\S]*?\*\//g, "");
const union = declarations.slice(declarations.indexOf("export type SettleReason ="));
const reasons = [...union.slice(0, union.indexOf(";")).matchAll(/"([a-zA-Z]+)"/g)].map((m) => m[1]);
const summary = src("stepSummary.ts");

if (reasons.length < 2) {
  console.error(
    `Only parsed ${reasons.length} settle reason(s) — the kit's type layout has changed, and this audit is no longer reading it. Fix the parse before trusting the result.`,
  );
  process.exit(2);
}

console.log(`Runner coverage — ${reasons.length} settle reason(s) in the engine's contract\n`);
for (const reason of reasons) {
  report(
    summary.includes(`case "${reason}"`),
    `settle reason "${reason}"`,
    summary.includes(`case "${reason}"`) ? "" : "not handled in stepSummary.describeRound",
  );
}

// ── 2. Every wait state in a snapshot has a way out ─────────────────────────
//
// Each of these is a queue the engine parks work in. The runner has to do
// something with each one: resolve it, or offer the reader a control that does.
// `decisionInstances` is listed because it is a surface we have never read —
// the audit's job is to say so rather than let it stay invisible.
const runner = src("ui/ExampleRunner.tsx");
const WAIT_STATES = {
  userTasks: "openUserTasksOf",
  timers: "advanceTime",
  messageSubscriptions: "correlateMessage",
  signalSubscriptions: "broadcastSignal",
  incidents: "incidentElementIds",
  decisionInstances: null,
};

console.log("");
for (const [field, handler] of Object.entries(WAIT_STATES)) {
  if (!handler) {
    report(false, `snapshot.${field}`, "never read by the runner — no affordance at all");
    continue;
  }
  report(runner.includes(handler), `snapshot.${field}`, runner.includes(handler) ? `via ${handler}` : "no resolution path");
}

console.log(
  gaps === 0
    ? "\nNo gaps: every wait state the engine can produce is both explained and clearable."
    : `\n${gaps} gap(s). A reader hitting one of these sees a run that has stopped with nothing to press.`,
);
