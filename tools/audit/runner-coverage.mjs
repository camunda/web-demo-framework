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
const unionStart = declarations.indexOf("export type SettleReason =");
const unionEnd = declarations.indexOf(";", unionStart);
// The delimiter is checked, not assumed: without it `slice(0, -1)` swallows the
// declarations that follow and their string literals pass for settle reasons.
if (unionStart === -1 || unionEnd === -1) {
  console.error(
    "Could not locate the kit's SettleReason union — its type layout has changed, and this audit is no longer reading it. Fix the parse before trusting the result.",
  );
  process.exit(2);
}
const reasons = [
  ...declarations.slice(unionStart, unionEnd).matchAll(/"([a-zA-Z]+)"/g),
].map((m) => m[1]);
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
// The fields come from the kit's own `Snapshot`, not a list kept here: a bump
// that adds a queue has to be classified before this audit will pass, rather
// than going unnoticed while the report still reads clean.
const runner = src("ui/ExampleRunner.tsx");
const types = kit("types.d.ts").replace(/\/\*[\s\S]*?\*\//g, "");
// `\b` matters: a bare `indexOf("export interface Snapshot")` also matches
// `SnapshotDelta` and would parse a different type without saying so.
const snapDecl = /export interface Snapshot\b[^{]*\{/.exec(types);
const snapStart = snapDecl ? snapDecl.index : -1;
// Match the braces rather than looking for an unindented `}`: that finds the
// *next* interface's brace if the kit is ever reformatted, and silently scans
// half the file's declarations into this audit's idea of a snapshot.
const bodyStart = snapDecl ? snapDecl.index + snapDecl[0].length - 1 : -1;
let bodyEnd = -1;
for (let i = bodyStart, depth = 0; snapStart !== -1 && i < types.length; i += 1) {
  if (types[i] === "{") depth += 1;
  else if (types[i] === "}" && (depth -= 1) === 0) {
    bodyEnd = i;
    break;
  }
}
if (snapStart === -1 || bodyEnd === -1) {
  console.error(
    "Could not locate the kit's Snapshot declaration — its type layout has changed, and this audit is no longer reading it. Fix the parse before trusting the result.",
  );
  process.exit(2);
}
// Every spelling of an array, not just `T[]`: a kit that switched a queue to
// `ReadonlyArray<T>` would otherwise drop out of this list silently, which is
// the drift this check exists to catch.
const isArrayType = (t) =>
  /\[\]$/.test(t) || /^(?:readonly\s+)?(?:Readonly)?Array<.*>$/.test(t);
const snapshotArrays = [
  ...types.slice(bodyStart + 1, bodyEnd).matchAll(/^\s+([a-zA-Z]+)\??:\s*([^;]+);/gm),
]
  .filter((m) => isArrayType(m[2].trim().replace(/^readonly\s+/, "readonly ")))
  .map((m) => m[1]);

if (snapshotArrays.length < 5) {
  console.error(
    `Only parsed ${snapshotArrays.length} array field(s) from the kit's Snapshot — its type layout has changed, and this audit is no longer reading it. Fix the parse before trusting the result.`,
  );
  process.exit(2);
}

/** Queues that hold work, and the runner call that clears each one. */
const RESOLUTIONS = {
  jobs: "stepWorkers",
  userTasks: "completeUserTask",
  timers: "advanceTime",
  messageSubscriptions: "correlateMessage",
  signalSubscriptions: "broadcastSignal",
  // The kit offers `resolveIncident`/`updateRetries`, so this one is ours: the
  // runner paints the element red via `incidentElementIds` and stops there.
  incidents: null,
  decisionInstances: null,
};

/** Fields that report what happened rather than park work waiting on someone. */
const REPORTING = new Set([
  "instances",
  "elementStats",
  "takenSequenceFlows",
  "activeElementIds",
  "incidentElementIds",
]);

console.log("");
for (const field of snapshotArrays) {
  if (REPORTING.has(field)) continue;
  if (!(field in RESOLUTIONS)) {
    report(false, `snapshot.${field}`, "new since this audit was written — classify it as a wait state or as reporting");
    continue;
  }
  const handler = RESOLUTIONS[field];
  if (!handler) {
    report(false, `snapshot.${field}`, field === "incidents"
      ? "no way out in the runner — the kit exposes resolveIncident/updateRetries, but nothing surfaces them"
      : "no way out — the runner offers the reader nothing that clears it");
    continue;
  }
  report(runner.includes(handler), `snapshot.${field}`, runner.includes(handler) ? `via ${handler}` : "no resolution path");
}

console.log(
  gaps === 0
    ? "\nNo gaps: every wait state the engine can produce is both explained and clearable."
    : `\n${gaps} gap(s). A reader hitting one of these sees a run that has stopped with nothing to press.`,
);
