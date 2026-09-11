#!/usr/bin/env node
// Audit the framework against a corpus of real Camunda models, without
// porting any of them.
//
// "Plug an example in and see where it breaks" only finds gaps in the order you
// happen to hit them, and only for the examples you chose. This inventories
// every BPMN construct and Zeebe extension a corpus actually uses, and diffs
// that against what this repo has *proven* — so the output is a ranked list of
// what to probe next, before anyone commits to a port.
//
//   node tools/audit/construct-coverage.mjs <dir> [<dir>...]
//
// Three verdicts, and the third is the point:
//   verified           — driven for real, here or in coverage-check.mjs
//   rejected-at-deploy — unmodelled, but it says so; a model can't pretend to run
//   known-broken       — accepted and then silently wrong. The dangerous class.
//   UNAUDITED          — used by real models, and we have never checked
//
// Deliberately not a pass/fail gate: it reports, and the interesting number is
// how much of the corpus sits in the third column.

import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { PROVEN_CONSTRUCTS } from "../probe/coverage-check.mjs";

/**
 * What this repo can actually claim, and on what evidence. Keep the evidence
 * concrete: a fixture that runs, or an issue that reproduces. "Looks fine in a
 * diagram" is not evidence — every silent-skip bug found so far (receive task,
 * link events, call-activity tools) looked fine in a diagram.
 */
/**
 * Constructs proven to run: taken straight from the checks that prove them,
 * so this column cannot claim something no longer covered. See
 * `PROVEN_CONSTRUCTS` in tools/probe/coverage-check.mjs, which fails its own
 * run if it names a check that doesn't exist.
 */
const CLAIMS = Object.fromEntries(
  Object.entries(PROVEN_CONSTRUCTS).map(([c, check]) => [c, ["verified", check]]),
);

/** Reproduced and filed. Not proofs — pointers to the issue that reproduces. */
Object.assign(CLAIMS, {
  callActivity: ["verified", "bank-support: on a sequence flow (no fixture)"],
  userTask: ["verified", "invoice-payment, loan-origination (no fixture)"],
  scriptTask: ["verified", "job typed as its element id (no fixture)"],
  receiveTask: ["known-broken", "nano-bpm#1009 — silently skipped, no subscription"],
  linkEventDefinition: ["known-broken", "nano-bpm#1157 — token vanishes, run reports success"],
  businessRuleTask: ["known-broken", "nano-bpm#1158 — no DMN deploy path exists"],
  compensateEventDefinition: ["known-broken", "nano-bpm#886 — fixed upstream, unreleased"],
  sendTask: ["rejected-at-deploy", "nano-bpm#1168 — unknown element"],
  inclusiveGateway: ["rejected-at-deploy", "nano-bpm#1168 — unknown element"],
  escalationEventDefinition: ["rejected-at-deploy", "nano-bpm#1168 — unknown element"],
});

/** Constructs a model can carry that say nothing about execution. */
const COSMETIC = new Set([
  "definitions", "process", "documentation", "extensionElements", "incoming",
  "outgoing", "textAnnotation", "association", "text", "collaboration",
  "participant", "laneSet", "lane", "flowNodeRef", "message", "signal", "error",
  "escalation", "conditionExpression", "timeDuration", "timeCycle", "timeDate",
  "loopCharacteristics", "dataObject", "dataObjectReference", "property",
  "dataInputAssociation", "dataOutputAssociation", "sourceRef", "targetRef",
  "group", "category", "categoryValue", "extension", "import", "resource",
]);

const BPMN_TAG = /<bpmn2?:([A-Za-z]+)[\s>/]/g;
const ZEEBE_TAG = /<zeebe:([A-Za-z]+)[\s>/]/g;

function bpmnFilesIn(dir) {
  const out = [];
  const walk = (d) => {
    for (const entry of readdirSync(d)) {
      const full = path.join(d, entry);
      if (statSync(full).isDirectory()) walk(full);
      else if (full.endsWith(".bpmn")) out.push(full);
    }
  };
  walk(dir);
  return out;
}


/**
 * What a model declares that the framework is supposed to act on.
 *
 * The construct table above asks whether the *engine* runs a thing. This asks
 * whether the *framework* notices it. A `zeebe:` extension the parser never
 * reads is, by definition, something the model asks for and the framework
 * ignores — silently, since the run still happens without it.
 *
 * Which of those matter is a judgement, so it is written down: ignoring a
 * connector's result expression is deliberate (examples replace connectors with
 * handlers outright), while ignoring a task listener is a gap that an example
 * needing one would have to close first.
 */
const EXTENSION_INTENT = {
  taskHeaders: ["by design", "connector result expressions; examples replace the connector with a handler"],
  script: ["by design", "a scriptTask runs as a job worker instead — see jobTypeOf in model.ts"],
  ioMapping: ["by design", "the engine applies these; the framework reads only the fromAi inputs"],
  output: ["by design", "as ioMapping"],
  properties: ["by design", "connector configuration, replaced wholesale by a handler"],
  property: ["by design", "as properties"],
  header: ["by design", "as taskHeaders"],
  adHoc: ["by design", "agent hosts are found by element type, not by this extension"],
  loopCharacteristics: ["by design", "the engine drives multi-instance; the framework needs no view of it"],
  calledDecision: ["by design", "DMN cannot be deployed at all — nano-bpm#1158"],
  userTask: ["by design", "a marker; the framework keys off the element type"],

  // Each of these was probed: the engine supports it, so the gap is ours.
  taskListeners: ["by design", "as taskListener — the container element"],
  assignmentDefinition: ["GAP", "the engine reports assignee and candidateGroups on the task; the runner shows neither, so a reader can't see who a task is for"],
  priorityDefinition: ["GAP", "the engine reports priority; the runner ignores it"],
  calledElement: ["GAP", "a call activity's target process is not modelled, so nothing can name what it delegates to"],
};

/** Read straight from the parser, so this can't claim support that was removed. */
function extensionsTheParserReads() {
  const model = readFileSync("src/framework/model.ts", "utf8");
  return new Set(
    [...model.matchAll(/(?:ownZeebeEls|zeebeEls)\([a-z]+, "([a-zA-Z]+)"\)/g)].map((m) => m[1]),
  );
}

function reportExtensions(used) {
  const read = extensionsTheParserReads();
  console.log("\nZeebe extensions the corpus declares:\n");
  let gaps = 0;
  for (const name of [...used].sort()) {
    if (read.has(name)) {
      console.log(`✅ ${name.padEnd(24)} read by the parser`);
      continue;
    }
    const [verdict, why] = EXTENSION_INTENT[name] ?? ["UNAUDITED", "nobody has decided whether this matters"];
    if (verdict !== "by design") gaps += 1;
    console.log(`${verdict === "by design" ? "·" : "❓"} ${name.padEnd(24)} ignored — ${why}`);
  }
  // A "by design" note for something now read is stale in the other direction.
  const stale = Object.keys(EXTENSION_INTENT).filter((n) => read.has(n));
  if (stale.length) console.log(`\n⚠ now read by the parser, so the note is out of date: ${stale.join(", ")}`);
  return gaps;
}

const dirs = process.argv.slice(2);
if (dirs.length === 0) {
  console.error("usage: node tools/audit/construct-coverage.mjs <dir> [<dir>...]");
  process.exit(2);
}

/** construct -> { count, models: Set } */
const bpmn = new Map();
const zeebe = new Map();
const record = (map, name, model) => {
  const hit = map.get(name) ?? { count: 0, models: new Set() };
  hit.count += 1;
  hit.models.add(model);
  map.set(name, hit);
};

let fileCount = 0;
for (const dir of dirs) {
  for (const file of bpmnFilesIn(dir)) {
    fileCount += 1;
    const xml = readFileSync(file, "utf8");
    const label = path.basename(file);
    for (const m of xml.matchAll(BPMN_TAG)) record(bpmn, m[1], label);
    for (const m of xml.matchAll(ZEEBE_TAG)) record(zeebe, m[1], label);
  }
}

const rows = [...bpmn.entries()]
  .filter(([name]) => !COSMETIC.has(name))
  .map(([name, { count, models }]) => {
    const [verdict, evidence] = CLAIMS[name] ?? ["UNAUDITED", ""];
    return { name, count, models, verdict, evidence };
  })
  .sort((a, b) => {
    const rank = { UNAUDITED: 0, "known-broken": 1, "rejected-at-deploy": 2, verified: 3 };
    return rank[a.verdict] - rank[b.verdict] || b.count - a.count;
  });

const icon = { verified: "✅", "known-broken": "❌", "rejected-at-deploy": "⛔", UNAUDITED: "❓" };

console.log(`Construct coverage — ${fileCount} models across ${dirs.length} corpus dir(s)\n`);
for (const r of rows) {
  const where =
    r.verdict === "UNAUDITED"
      ? [...r.models].slice(0, 3).join(", ") + (r.models.size > 3 ? `, +${r.models.size - 3}` : "")
      : r.evidence;
  console.log(`${icon[r.verdict]} ${r.name.padEnd(34)} ${String(r.count).padStart(4)}×  ${where}`);
}

const unaudited = rows.filter((r) => r.verdict === "UNAUDITED");
const extensionGaps = reportExtensions(new Set(zeebe.keys()));
console.log(
  `\n${unaudited.length} unaudited construct(s), in ${new Set(unaudited.flatMap((r) => [...r.models])).size} model(s).` +
    ` ${extensionGaps} framework-side extension gap(s).`,
);
if (unaudited.length) {
  console.log("Probe these before promising an example that needs them:");
  for (const r of unaudited) console.log(`  - ${r.name}`);
}
