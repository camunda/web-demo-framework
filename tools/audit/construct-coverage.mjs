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
// Seven verdicts, and the dangerous ones sort first:
//   UNAUDITED          — used by real models, and we have never checked
//   FAILING-PROBE      — a check claims this, and that check did not pass just now
//   silently-wrong     — accepted, runs green, does the wrong thing. The dangerous class.
//   partial            — one variant runs; the others have never been checked
//   raises-incident    — accepted, then fails loudly at run time. Visible, at least.
//   rejected-at-deploy — unmodelled, but it says so; a model can't pretend to run
//   verified           — driven for real, here or in coverage-check.mjs
//
// Deliberately not a pass/fail gate: it reports, and the interesting number is
// how much of the corpus sits in the third column.

import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { PROVEN_CONSTRUCTS, PARTIAL_CONSTRUCTS, runChecks } from "../probe/coverage-check.mjs";

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
/**
 * Constructs proven to run: taken from the checks that prove them *and* from
 * what those checks recorded on this run. A name only says a check exists;
 * running them is the only way to know it still passes, so the audit boots the
 * engine rather than trusting a label.
 */
const probeResults = new Map((await runChecks()).map((r) => [r.name, r]));
// A construct can name several checks — every path it covers has to pass, or
// one green variant would stand in for a regressed one.
const passed = (check) =>
  [check].flat().every((name) => probeResults.get(name)?.ok === true);
const failingOf = (check) =>
  [check].flat().filter((name) => probeResults.get(name)?.ok !== true);

const CLAIMS = {};
for (const [construct, check] of Object.entries(PROVEN_CONSTRUCTS)) {
  CLAIMS[construct] = passed(check)
    ? ["verified", [check].flat().join(" + ")]
    : ["FAILING-PROBE", `${failingOf(check).join(", ")} — did not pass on this run`];
}

// Proven for one variant only — also taken from the checks, so the qualifier
// can't drift from what actually ran.
for (const [c, p] of Object.entries(PARTIAL_CONSTRUCTS)) {
  CLAIMS[c] = passed(p.check)
    ? ["partial", `${p.check} — unproven: ${p.unproven}`]
    : ["FAILING-PROBE", `${p.check} — this check did not pass on this run`];
}

/**
 * Reproduced and filed. Nothing is claimed `verified` here: a verified column
 * anyone can type into is the stale-proof problem `PROVEN_CONSTRUCTS` exists to
 * prevent.
 *
 * Where a check asserts the broken behaviour, the claim is tied to it — those
 * checks assert the *failure*, so one of them failing means the engine changed
 * and the note here is the stale thing. `probe: null` marks a claim backed only
 * by an issue, which the summary counts so it can't hide.
 */
const KNOWN_FAILURES = {
  receiveTask: {
    verdict: "silently-wrong",
    why: "nano-bpm#1009 — silently skipped, no subscription",
    probe: "receive task (message wait) — NOT supported, silently skipped",
  },
  businessRuleTask: {
    verdict: "raises-incident",
    why: "nano-bpm#1158 — no DMN deploy path; fails loudly at run time",
    probe: "DMN business rule task (no decision deployed)",
  },
  compensateEventDefinition: {
    verdict: "rejected-at-deploy",
    why: "nano-bpm#886 — fixed upstream, unreleased",
    probe: "compensation (rejected at deploy — not modelled, #886)",
  },
  linkEventDefinition: {
    verdict: "silently-wrong",
    why: "nano-bpm#1157 — token vanishes, run reports success",
    probe: null,
  },
  intermediateThrowEvent: {
    verdict: "silently-wrong",
    why: "the token carries on, but a waiting catcher never receives the signal",
    probe: "intermediate throw event (signal) — NOT broadcast, silently skipped",
  },
  "callActivity[adHocTool]": {
    verdict: "silently-wrong",
    why: "nano-bpm#1159 — the child never starts, and output mapping yields nulls",
    probe: "ad-hoc sub-process: embedded sub-process as a compound tool",
  },
  sendTask: { verdict: "rejected-at-deploy", why: "nano-bpm#1168 — unknown element", probe: null },
  inclusiveGateway: {
    verdict: "rejected-at-deploy",
    why: "nano-bpm#1168 — unknown element",
    probe: null,
  },
  escalationEventDefinition: {
    verdict: "rejected-at-deploy",
    why: "nano-bpm#1168 — unknown element",
    probe: null,
  },
};

for (const [construct, { verdict, why, probe }] of Object.entries(KNOWN_FAILURES)) {
  if (probe && !passed(probe)) {
    CLAIMS[construct] = ["FAILING-PROBE", `${probe} — this check did not pass on this run`];
  } else {
    CLAIMS[construct] = [verdict, probe ? why : `${why} (issue only — no probe)`];
  }
}

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

const BPMN_NS = "http://www.omg.org/spec/BPMN/20100524/MODEL";
const ZEEBE_NS = "http://camunda.org/schema/zeebe/1.0";

/**
 * Drop comments and CDATA before counting. A `<bpmn:sendTask>` quoted in a
 * comment or a FEEL script is not a construct any model executes, and counting
 * it would rank a gap nothing actually uses.
 */
function elementsOnly(xml) {
  return xml.replace(/<!--[\s\S]*?-->/g, "").replace(/<!\[CDATA\[[\s\S]*?\]\]>/g, "");
}

/**
 * Constructs whose variants are different engine paths with different verdicts,
 * recorded as `name[variant]` so the bare tag never collects one blanket
 * verdict. Counting `callActivity` as verified because it works on a sequence
 * flow would hide the ad-hoc use, which is silently broken (#1159).
 */
function variantsIn(xml, prefixes) {
  const p = `(?:${prefixes.map((x) => (x ? `${x}:` : "")).join("|")})`;
  const out = [];

  for (const m of xml.matchAll(new RegExp(`<${p}multiInstanceLoopCharacteristics\\b([^>]*)>?`, "g"))) {
    out.push(`multiInstanceLoopCharacteristics[${/isSequential\s*=\s*["']true["']/.test(m[1]) ? "sequential" : "parallel"}]`);
  }

  // Only a call activity the ad-hoc host can activate *directly* is the broken
  // use. One wrapped in an embedded sub-process is the documented #1159
  // workaround and works, so the nested blocks come out before counting.
  const adHocBlocks = [
    ...xml.matchAll(new RegExp(`<${p}adHocSubProcess\\b[\\s\\S]*?</${p}adHocSubProcess>`, "g")),
  ].map((m) => m[0].replace(new RegExp(`<${p}subProcess\\b[\\s\\S]*?</${p}subProcess>`, "g"), ""));
  const inAdHoc = adHocBlocks.reduce(
    (n, block) => n + [...block.matchAll(new RegExp(`<${p}callActivity\\b`, "g"))].length,
    0,
  );
  const total = [...xml.matchAll(new RegExp(`<${p}callActivity\\b`, "g"))].length;
  for (let i = 0; i < inAdHoc; i += 1) out.push("callActivity[adHocTool]");
  for (let i = 0; i < total - inAdHoc; i += 1) out.push("callActivity[sequenceFlow]");

  return out;
}

/** Tags the variant pass owns, so they aren't also counted bare. */
const VARIANT_TAGS = new Set(["multiInstanceLoopCharacteristics", "callActivity"]);

function tagMatchers(xml) {
  const prefixesFor = (ns) => {
    // Both quote styles: single-quoted attributes are equally valid XML, and a
    // corpus using them would otherwise inventory as zero constructs with no
    // error — a clean report that means nothing.
    const found = [
      ...xml.matchAll(new RegExp(`xmlns:([A-Za-z_][\\w.-]*)\\s*=\\s*["']${ns}["']`, "g")),
    ].map((m) => m[1]);
    // A default `xmlns` binding needs no prefix at all.
    if (new RegExp(`xmlns\\s*=\\s*["']${ns}["']`).test(xml)) found.push("");
    return [...new Set(found)];
  };
  const matcher = (prefixes) =>
    prefixes.length === 0
      ? null
      : new RegExp(
          `<(?:${prefixes.map((p) => (p ? `${p}:` : "")).join("|")})([A-Za-z]+)[\\s>/]`,
          "g",
        );
  const bpmnPrefixes = prefixesFor(BPMN_NS);
  return {
    bpmn: matcher(bpmnPrefixes),
    zeebe: matcher(prefixesFor(ZEEBE_NS)),
    bpmnPrefixes,
  };
}

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
  assignmentDefinition: ["GAP", "the engine reports assignee and candidateGroups on the task; the runner shows neither, so a reader can't see who a task is for"],
  priorityDefinition: ["GAP", "the engine reports priority; the runner ignores it"],
  calledElement: ["GAP", "a call activity's target process is not modelled, so nothing can name what it delegates to"],
};

/** Read straight from the parser, so this can't claim support that was removed. */
function extensionsTheParserReads() {
  const model = readFileSync("src/framework/model.ts", "utf8");
  return new Set(
    [
      ...model.matchAll(
        /(?:ownZeebeEls|zeebeEls)\(\s*[A-Za-z_$][\w$]*\s*,\s*"([A-Za-z]+)"/g,
      ),
    ].map((m) => m[1]),
  );
}

/** Container elements, covered when the parser reads what they contain. */
const CONTAINERS = { taskListeners: "taskListener" };

function reportExtensions(used) {
  const read = extensionsTheParserReads();
  console.log("\nZeebe extensions the corpus declares:\n");
  let gaps = 0;
  for (const name of [...used].sort()) {
    if (read.has(name) || read.has(CONTAINERS[name])) {
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
    const xml = elementsOnly(readFileSync(file, "utf8"));
    // Relative to cwd, not the basename: every example's model is `model.bpmn`,
    // and collapsing them would understate how widely a gap is used.
    const label = path.relative(process.cwd(), file);
    const tags = tagMatchers(xml);
    if (tags.bpmn)
      for (const m of xml.matchAll(tags.bpmn)) {
        if (VARIANT_TAGS.has(m[1])) continue;
        record(bpmn, m[1], label);
      }
    if (tags.bpmnPrefixes.length)
      for (const name of variantsIn(xml, tags.bpmnPrefixes)) record(bpmn, name, label);
    if (tags.zeebe) for (const m of xml.matchAll(tags.zeebe)) record(zeebe, m[1], label);
  }
}

const rows = [...bpmn.entries()]
  .filter(([name]) => !COSMETIC.has(name))
  .map(([name, { count, models }]) => {
    const [verdict, evidence] = CLAIMS[name] ?? ["UNAUDITED", ""];
    return { name, count, models, verdict, evidence };
  })
  .sort((a, b) => {
    const rank = {
      UNAUDITED: 0,
      "FAILING-PROBE": 1,
      "silently-wrong": 2,
      partial: 3,
      "raises-incident": 4,
      "rejected-at-deploy": 5,
      verified: 6,
    };
    return rank[a.verdict] - rank[b.verdict] || b.count - a.count;
  });

const icon = {
  verified: "✅",
  partial: "◑",
  "FAILING-PROBE": "🔥",
  "silently-wrong": "❌",
  "raises-incident": "💥",
  "rejected-at-deploy": "⛔",
  UNAUDITED: "❓",
};

// A corpus with no models is a typo or a wrong path, not a corpus with no gaps.
// Both print "0 unaudited", so refuse rather than hand back a false clean bill.
if (fileCount === 0) {
  console.error(
    `No .bpmn files found under ${dirs.join(", ")} — nothing was audited. Check the path.`,
  );
  process.exit(2);
}

console.log(`Construct coverage — ${fileCount} models across ${dirs.length} corpus dir(s)\n`);
for (const r of rows) {
  const where =
    r.verdict === "UNAUDITED"
      ? [...r.models].slice(0, 3).join(", ") + (r.models.size > 3 ? `, +${r.models.size - 3}` : "")
      : r.evidence;
  console.log(`${icon[r.verdict]} ${r.name.padEnd(34)} ${String(r.count).padStart(4)}×  ${where}`);
}

const unaudited = rows.filter((r) => r.verdict === "UNAUDITED");
const partial = rows.filter((r) => r.verdict === "partial");
const unprobed = rows.filter((r) => r.evidence.includes("(issue only — no probe)"));
const extensionGaps = reportExtensions(new Set(zeebe.keys()));
console.log(
  `\n${unaudited.length} unaudited construct(s), in ${new Set(unaudited.flatMap((r) => [...r.models])).size} model(s).` +
    ` ${partial.length} proven for one variant only.` +
    ` ${unprobed.length} claimed from an issue with no probe behind it.` +
    ` ${extensionGaps} framework-side extension gap(s).`,
);
if (unaudited.length || partial.length) {
  console.log("Probe these before promising an example that needs them:");
  for (const r of unaudited) console.log(`  - ${r.name}`);
  for (const r of partial) console.log(`  - ${r.name} (${r.evidence})`);
}
