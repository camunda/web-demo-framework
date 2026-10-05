#!/usr/bin/env node
// Live-brain sweep: drive every agent example's preset scenarios through the
// real UI (Vite dev server + headless Chromium) with the "API endpoint" brain
// pointed at a local OpenAI-compatible server (Ollama by default), answering
// each human task with the first option until the run completes.
//
//   npm run eval:live
//
// Opt-in, not CI: it needs a local model server, and a run takes minutes.
// Model choices vary run to run, so a scenario only FAILS on checks that hold
// whatever the model decides:
//   - the run used the scripted brain instead of the live one
//   - an incident, an engine error, or "LLM call failed"
//   - a required tool never completed (engine counts), or "didn't finish its checks"
//   - a human-task field the model fills via an input mapping is empty
//   - a `{{…}}` line in a human-task form renders blank
//   - a form that won't validate after filling, or a run that stalls
// Model-quality signals (invented tool names, turn budget spent) are WARNINGs,
// as is a live run whose steps differ from the scripted run of the same input.
//
// Env:
//   LIVE_MODEL      model id to select (default: whatever the picker selects)
//   LIVE_ENDPOINT   default http://localhost:11434/v1
//   LIVE_EXAMPLES   comma-separated example ids (default: every agent example)
//   LIVE_SCENARIO   only scenarios whose label contains this text
//   LIVE_BASE_URL   use an already-running dev server instead of starting one
//   LIVE_OUT        report directory (default: a fresh dir under the OS tmpdir)
//   LIVE_TIMEOUT_MIN  per-scenario budget in minutes (default 20)
//   LIVE_HEADED=1   show the browser

import { spawn } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { chromium } from "playwright";

const ROOT = resolve(import.meta.dirname, "../..");
const EXAMPLES_DIR = join(ROOT, "src/examples");
const ENDPOINT = process.env.LIVE_ENDPOINT ?? "http://localhost:11434/v1";
const SCENARIO_BUDGET_MS = Number(process.env.LIVE_TIMEOUT_MIN ?? 20) * 60_000;
// setTimeout fires at once for anything above 2^31-1 ms.
if (!Number.isFinite(SCENARIO_BUDGET_MS) || SCENARIO_BUDGET_MS <= 0 || SCENARIO_BUDGET_MS > 2 ** 31 - 1) {
  console.error(`LIVE_TIMEOUT_MIN must be a positive number of minutes (got ${JSON.stringify(process.env.LIVE_TIMEOUT_MIN)}).`);
  process.exit(2);
}
const OUT = process.env.LIVE_OUT ?? mkdtempSync(join(tmpdir(), "eval-live-"));
mkdirSync(OUT, { recursive: true });

const STATUSES = [
  "Booting engine…", "Engine error", "Ready", "Running…", "Stepping…",
  "Incident", "Waiting for a human", "Completed", "Paused",
];
const IN_FLIGHT = new Set(["", "Booting engine…", "Running…", "Stepping…"]);

// --- what each example declares, read straight off its files ---------------

function agentExamplesUnfiltered() {
  return readdirSync(EXAMPLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((id) => existsSync(join(EXAMPLES_DIR, id, "index.ts")))
    .filter((id) => readFileSync(join(EXAMPLES_DIR, id, "index.ts"), "utf8").includes("scriptedAgent"))
    .sort();
}

function agentExamples() {
  const only = process.env.LIVE_EXAMPLES?.split(",").map((s) => s.trim()).filter(Boolean);
  return agentExamplesUnfiltered().filter((id) => !only || only.includes(id));
}

const decodeXml = (s) =>
  s.replace(/&#34;|&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&#10;/g, "\n")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

/** `ExampleDef.requiredTools`, read off the example's source. */
function requiredToolsOf(id) {
  const src = readFileSync(join(EXAMPLES_DIR, id, "index.ts"), "utf8");
  const list = /^\s*requiredTools:\s*\[([^\]]*)\]/m.exec(src)?.[1] ?? "";
  return [...list.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

/** element id → BPMN name, which is what the runner's panels show. */
function elementNamesOf(id) {
  const names = new Map();
  for (const file of readdirSync(join(EXAMPLES_DIR, id)).filter((f) => f.endsWith(".bpmn"))) {
    for (const m of readFileSync(join(EXAMPLES_DIR, id, file), "utf8").matchAll(/<bpmn:\w+\b([^>]*)>/g)) {
      const elementId = /\bid="([^"]+)"/.exec(m[1])?.[1];
      const name = /\bname="([^"]*)"/.exec(m[1])?.[1];
      if (elementId && name) names.set(elementId, decodeXml(name));
    }
  }
  return names;
}

/** formId → { elementId, name, inputTargets, inAgent } for every user task in the example's BPMN. */
function userTasksOf(id) {
  const dir = join(EXAMPLES_DIR, id);
  const tasks = new Map();
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".bpmn"))) {
    const xml = readFileSync(join(dir, file), "utf8");
    const agents = [...xml.matchAll(/<bpmn:adHocSubProcess\b[\s\S]*?<\/bpmn:adHocSubProcess>/g)].map((m) => [m.index, m.index + m[0].length]);
    for (const m of xml.matchAll(/<bpmn:userTask\b([^>]*)>([\s\S]*?)<\/bpmn:userTask>/g)) {
      const attrs = m[1];
      const formId = /formId="([^"]+)"/.exec(m[2])?.[1];
      if (!formId) continue;
      tasks.set(formId, {
        elementId: /\bid="([^"]+)"/.exec(attrs)?.[1],
        name: decodeXml(/\bname="([^"]*)"/.exec(attrs)?.[1] ?? ""),
        inputTargets: [...m[2].matchAll(/<zeebe:input\b[^>]*\btarget="([^"]+)"/g)].map((t) => t[1]),
        inAgent: agents.some(([from, to]) => m.index > from && m.index < to),
      });
    }
  }
  return tasks;
}

/** formId → parsed form-js schema. */
function formsOf(id) {
  const dir = join(EXAMPLES_DIR, id);
  const forms = new Map();
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".form.json"))) {
    const schema = JSON.parse(readFileSync(join(dir, file), "utf8"));
    forms.set(schema.id, schema);
  }
  return forms;
}

function componentsOf(schema) {
  const out = [];
  const walk = (list) => {
    for (const c of list ?? []) {
      out.push(c);
      walk(c.components);
    }
  };
  walk(schema.components);
  return out;
}

/**
 * Per text component, in document order: its paragraph count, and one anchored
 * regex per paragraph with a placeholder, capturing what each `{{…}}` rendered
 * as. A paragraph that is nothing but placeholders gets no regex — there is no
 * text to anchor it — and is caught by the paragraph count instead, since
 * form-js drops a paragraph that renders empty.
 */
function templateChecks(schema) {
  return componentsOf(schema)
    .filter((c) => c.type === "text" && typeof c.text === "string")
    .map((c) => {
      const paragraphs = c.text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
      return { id: c.id, paragraphs: paragraphs.length, probes: paragraphs.filter((p) => p.includes("{{")).map(probeFor) };
    });
}

function probeFor(paragraph) {
  const line = paragraph.replace(/\*\*|__|`/g, "").replace(/^\s*(#{1,6}|[-*])\s+/, "").replace(/\s+/g, " ").trim();
  // Placeholders separated only by whitespace can't be told apart in the
  // rendered text, so each such run is one capture.
  const groups = [];
  for (const part of line.split(/(\{\{[\s\S]*?\}\})/)) {
    const last = groups[groups.length - 1];
    if (part.startsWith("{{")) {
      const expr = part.slice(2, -2).trim();
      if (last?.exprs && last.joinable) last.exprs.push(expr);
      else groups.push({ exprs: [expr], joinable: true });
    } else if (!part.trim() && last?.exprs) {
      continue;
    } else if (part) {
      if (last?.exprs) last.joinable = false;
      groups.push({ literal: part });
    }
  }
  const exprs = groups.filter((g) => g.exprs).map((g) => g.exprs);
  if (!groups.some((g) => g.literal?.trim())) return { line, exprs, regex: null };
  let pattern = "^";
  groups.forEach((g, i) => {
    if (g.exprs) {
      pattern += i === groups.length - 1 ? "(.*)" : "(.*?)";
    } else {
      pattern += g.literal.trim().split(/\s+/).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(" ?");
      pattern += " ?";
    }
  });
  return { line, exprs, regex: new RegExp(pattern + "$") };
}

// --- the page --------------------------------------------------------------

async function statusOf(page) {
  for (const s of STATUSES) {
    if ((await page.getByText(s, { exact: true }).count()) > 0) return s;
  }
  return "";
}

class Trace {
  lines = [];
  seen = new Set();
  async capture(page) {
    const text = await page.locator(".timeline").first().innerText().catch(() => "");
    for (const line of text.split("\n").map((l) => l.trim()).filter(Boolean)) {
      if (this.seen.has(line)) continue;
      this.seen.add(line);
      this.lines.push(line);
    }
  }
  has(re) {
    return this.lines.some((l) => re.test(l));
  }
  matching(re) {
    return this.lines.filter((l) => re.test(l));
  }
}

async function waitWhileInFlight(page, trace, deadline) {
  for (;;) {
    await trace.capture(page);
    const s = await statusOf(page);
    if (!IN_FLIGHT.has(s)) return s;
    if (Date.now() > deadline) return "timeout";
    await page.waitForTimeout(1000);
  }
}

/** Click, then wait for the loop to start (trace grows or status leaves `from`). */
async function clickAndWaitForProgress(page, trace, button, from) {
  const before = (await page.locator(".timeline").first().innerText().catch(() => "")).length;
  await button.click();
  const until = Date.now() + 30_000;
  while (Date.now() < until) {
    const now = (await page.locator(".timeline").first().innerText().catch(() => "")).length;
    if (now !== before || (await statusOf(page)) !== from) return;
    await page.waitForTimeout(250);
  }
}

async function connectBrain(page) {
  const url = page.locator("#endpoint-url");
  if ((await url.inputValue()) !== ENDPOINT) await url.fill(ENDPOINT);
  // The picker lists the endpoint's models after a 400 ms debounce; pick from
  // that list, not the previous endpoint's.
  await page.waitForTimeout(600);
  await page.waitForFunction(() => {
    const picked = document.querySelector("#endpoint-model")?.textContent?.trim() ?? "";
    const refreshing = [...document.querySelectorAll("button")].some((b) => b.textContent?.trim() === "Refreshing…");
    return picked && !refreshing && !/^(Loading models…|Enter an endpoint above)$/.test(picked);
  }, null, { timeout: 60_000 });
  if (process.env.LIVE_MODEL) {
    const combo = page.locator("#endpoint-model");
    if ((await combo.innerText()).trim() !== process.env.LIVE_MODEL) {
      await combo.click();
      await page.getByRole("option", { name: process.env.LIVE_MODEL, exact: true }).click();
    }
  }
  const connect = page.getByRole("button", { name: "Connect", exact: true });
  await connect.waitFor({ timeout: 30_000 });
  await page.waitForFunction(() => {
    const b = [...document.querySelectorAll("button")].find((x) => x.textContent?.trim() === "Connect");
    return b && !b.disabled;
  }, null, { timeout: 60_000 });
  await connect.click();
  await Promise.race([
    page.getByRole("button", { name: "Reconnect", exact: true }).waitFor({ timeout: 300_000 }),
    page.getByText("Couldn't connect").waitFor({ timeout: 300_000 }).then(() => {
      throw new Error("brain: Couldn't connect");
    }),
  ]);
  return (await page.locator("#endpoint-model").innerText()).trim();
}

async function answerHumanTask(page, ctx, result) {
  const button = page.getByRole("button", { name: "Complete task", exact: true });
  const card = page.locator(".panel").filter({ has: button }).last();
  const desc = await card.locator(".panel-desc").innerText().catch(() => "");
  const formId = /form "([^"]+)"/.exec(desc)?.[1];
  const task = formId ? ctx.userTasks.get(formId) : undefined;
  const label = task?.name || formId || "human task";
  result.humanTasks.push(label);

  if (await card.getByText("The agent didn't finish its checks").count()) {
    result.fail.push(`${label}: "The agent didn't finish its checks" — a required tool never ran`);
  }

  const schema = formId ? ctx.forms.get(formId) : undefined;
  const form = card.locator(".fjs-form").first();
  if (schema) {
    await form.waitFor({ timeout: 30_000 });
    const fields = componentsOf(schema).filter((c) => c.key && c.label);
    const optionsOf = (c) => (c.values ?? []).map((v) => form.getByRole("radio", { name: v.label, exact: true }).first());
    const anyChecked = async (c) => {
      for (const o of optionsOf(c)) if (await o.isChecked().catch(() => false)) return true;
      return false;
    };

    // Fields the model maps a value into must arrive prefilled.
    for (const c of fields.filter((f) => task?.inputTargets.includes(f.key))) {
      if (c.type === "radio") {
        if (!(await anyChecked(c))) {
          result.fail.push(`${label}: "${c.label}" (${c.key}) is input-mapped but arrived unselected`);
        }
        continue;
      }
      const input = form.getByLabel(c.label, { exact: false }).first();
      const value = (await input.count()) ? await input.inputValue().catch(() => "") : "";
      if (!value.trim()) {
        result.fail.push(`${label}: "${c.label}" (${c.key}) is input-mapped but arrived empty`);
      }
    }

    // Every `{{…}}` should render something, checked within its own component.
    const components = templateChecks(schema);
    const rendered = await form.locator(".fjs-form-field-text").evaluateAll((els) =>
      els.map((el) => [...el.children].map((b) => b.innerText.replace(/\s+/g, " ").trim())),
    );
    if (rendered.length !== components.length) {
      result.warn.push(`${label}: ${rendered.length} text blocks rendered for ${components.length} in the form; template checks skipped`);
    } else {
      components.forEach((component, i) => {
        const blocks = rendered[i];
        if (blocks.length < component.paragraphs) {
          result.fail.push(`${label}: ${component.paragraphs - blocks.length} paragraph(s) of ${component.id} rendered empty`);
        }
        for (const probe of component.probes) {
          if (!probe.regex) continue;
          const m = blocks.map((b) => probe.regex.exec(b)).find(Boolean);
          if (!m) {
            result.warn.push(`${label}: couldn't locate "${probe.line.slice(0, 60)}" in ${component.id}`);
            continue;
          }
          probe.exprs.forEach((exprs, g) => {
            const got = (m[g + 1] ?? "").trim();
            // Blank because this harness left an optional field empty earlier.
            if (exprs.every((e) => ctx.leftBlank.has(e))) return;
            if (!got || got === "undefined" || got === "null") {
              const shown = exprs.map((e) => `{{${e.slice(0, 50)}}}`).join(" ");
              result.fail.push(`${label}: ${shown} renders blank in "${probe.line.slice(0, 60)}"`);
            }
          });
        }
      });
    }

    // Answer: first option for choices, a placeholder for required text/numbers.
    for (const c of fields) {
      if (c.type === "radio" && c.values?.length) {
        if (!(await anyChecked(c))) {
          // `check()` misreports here: form-js re-renders the group on change.
          await optionsOf(c)[0].click();
        }
        continue;
      }
      const input = form.getByLabel(c.label, { exact: false }).first();
      const filled = (await input.count()) && (await input.inputValue().catch(() => "")).trim();
      if (!c.validate?.required) {
        if (!filled) ctx.leftBlank.add(c.key);
        continue;
      }
      if (!(await input.count()) || filled) continue;
      // Typed, not `fill()`ed: form-js's number field ignores a programmatic fill.
      await input.pressSequentially(c.type === "number" ? "100" : "Automated live-eval reviewer note.");
      // A radio clicked within ~300 ms of typing a cleared number field is lost.
      await page.waitForTimeout(600);
    }
  }

  try {
    await page.waitForFunction(() => {
      const b = [...document.querySelectorAll("button")].find((x) => x.textContent?.trim() === "Complete task");
      return b && !b.disabled;
    }, null, { timeout: 10_000 });
  } catch {
    result.fail.push(`${label}: form still invalid after filling every required field`);
    return false;
  }
  await clickAndWaitForProgress(page, ctx.trace, button, "Waiting for a human");
  return true;
}

async function openTaskIsInAgent(page, ctx) {
  const card = page.locator(".panel").filter({ has: page.getByRole("button", { name: "Complete task", exact: true }) }).last();
  const formId = /form "([^"]+)"/.exec(await card.locator(".panel-desc").innerText().catch(() => ""))?.[1];
  return Boolean(formId && ctx.userTasks.get(formId)?.inAgent);
}

async function resolveWaitingEvent(page, ctx, result, from) {
  const card = page.locator(".panel").filter({ has: page.getByText("Something else happens", { exact: true }) });
  if (!(await card.count())) return false;
  const buttons = card.getByRole("button").filter({ hasNotText: "Something else happens" });
  const lapse = card.getByRole("button", { name: /Let the timer lapse/ });
  const choice = /never answers/i.test(ctx.scenario) && (await lapse.count())
    ? lapse.first()
    : buttons.filter({ hasNotText: /Let the timer lapse/ }).first();
  if (!(await choice.count())) return false;
  ctx.pressed = true;
  result.notes.push(`pressed "${(await choice.innerText()).trim()}"`);
  await clickAndWaitForProgress(page, ctx.trace, choice, from);
  return true;
}

async function runScenario(browser, base, example, scenario, brain = "endpoint") {
  const result = { example, scenario, brain, pass: false, fail: [], warn: [], notes: [], humanTasks: [], steps: [], model: "", ms: 0 };
  const started = Date.now();
  const deadline = started + SCENARIO_BUDGET_MS;
  const context = await browser.newContext({ viewport: { width: 1400, height: 1000 } });
  // Closing the context cancels whatever wait is pending, setup included.
  let overBudget = false;
  const budget = setTimeout(() => {
    overBudget = true;
    context.close().catch(() => {});
  }, SCENARIO_BUDGET_MS);
  const page = await context.newPage();
  const trace = new Trace();
  const ctx = { trace, scenario, userTasks: userTasksOf(example), forms: formsOf(example), leftBlank: new Set(), pressed: false, interrupted: false };
  page.on("pageerror", (e) => result.warn.push(`page error: ${e.message.slice(0, 160)}`));

  try {
    const hash = encodeURIComponent(JSON.stringify({ brain }));
    await page.goto(`${base}/examples/${example}#s=${hash}`);
    await page.getByText("Ready", { exact: true }).first().waitFor({ timeout: 120_000 });
    result.model = brain === "endpoint" ? await connectBrain(page) : "scripted";

    if (scenario !== "(default input)") {
      await page.getByRole("button", { name: scenario, exact: true }).click();
    }
    const run = page.getByRole("button", { name: "▶ Run" });
    await page.waitForFunction(() => {
      const b = [...document.querySelectorAll("button")].find((x) => x.textContent?.trim() === "▶ Run");
      return b && !b.disabled;
    }, null, { timeout: 60_000 });
    await clickAndWaitForProgress(page, trace, run, "Ready");

    let ended = "";
    for (let guard = 0; guard < 25 && !ended; guard++) {
      const s = await waitWhileInFlight(page, trace, deadline);
      if (s === "Completed") { ended = s; break; }
      if (s === "timeout") { result.fail.push(`still running after ${SCENARIO_BUDGET_MS / 60_000} min`); ended = s; break; }
      if (s === "Incident" || s === "Engine error") { result.fail.push(`status: ${s}`); ended = s; break; }
      if (s === "Waiting for a human") {
        // A scenario that says "press" means the event should land while the
        // agent is parked on its own human task — answering it first would skip
        // the interrupt. After the agent has finished there is nothing to
        // interrupt, and a press would only start another case.
        if (/\bpress\b/i.test(scenario) && !ctx.pressed && (await openTaskIsInAgent(page, ctx)) &&
          (await resolveWaitingEvent(page, ctx, result, s))) {
          ctx.interrupted = true;
          continue;
        }
        if (!(await answerHumanTask(page, ctx, result))) ended = s;
        continue;
      }
      if (s === "Paused" && (await resolveWaitingEvent(page, ctx, result, s))) continue;
      result.fail.push(`run stopped at status "${s}" with nothing to resolve`);
      ended = s;
    }
    if (!ended) {
      const s = await waitWhileInFlight(page, trace, deadline);
      if (s !== "Completed") result.fail.push(`not Completed after 25 interactions (status "${s}")`);
    }
    await trace.capture(page);
    result.steps = [...new Set([...trace.matching(/^▶ /), ...result.humanTasks.map((t) => `👤 ${t}`)])];

    if (brain === "endpoint" && !trace.has(/live brain/i)) {
      result.fail.push("never ran on the live brain (scripted fallback?)");
    }
    for (const l of trace.matching(/LLM call failed/)) result.fail.push(l);
    // From the engine's counts, not the trace: a model that says "done" again
    // after its one nudge is accepted without any "never ran" line.
    if (!ctx.interrupted) {
      const names = elementNamesOf(example);
      const completed = await page.locator(".engine-view .timeline-stats li").evaluateAll((lis) =>
        lis.map((li) => [li.querySelector("code")?.textContent?.trim() ?? "", Number(/completed (\d+)/.exec(li.textContent ?? "")?.[1] ?? 0)]),
      );
      for (const id of requiredToolsOf(example)) {
        const count = completed.find(([shown]) => shown === (names.get(id) || id) || shown === id)?.[1] ?? 0;
        if (!count) result.fail.push(`required tool ${id} never completed`);
      }
    }
    for (const l of trace.matching(/doesn't exist/)) result.warn.push(l);
    for (const l of trace.matching(/Turn budget spent|activated nothing — completing/)) result.warn.push(l);
  } catch (e) {
    result.fail.push(
      overBudget
        ? `exceeded the ${SCENARIO_BUDGET_MS / 60_000} min scenario budget`
        : `harness: ${String(e.message ?? e).split("\n")[0]}`,
    );
  }
  clearTimeout(budget);

  result.ms = Date.now() - started;
  result.pass = result.fail.length === 0;
  const slug = `${example}--${scenario}--${brain}`.replace(/[^a-z0-9]+/gi, "-").slice(0, 110);
  writeFileSync(join(OUT, `${slug}.trace.txt`), trace.lines.join("\n") + "\n");
  if (!result.pass) await page.screenshot({ path: join(OUT, `${slug}.png`), fullPage: true }).catch(() => {});
  await context.close().catch(() => {});
  return result;
}

async function scenariosOf(browser, base, example) {
  const page = await browser.newPage();
  await page.goto(`${base}/examples/${example}`);
  await page.getByText("Ready", { exact: true }).first().waitFor({ timeout: 120_000 });
  const labels = await page.locator(".scenario-toggle").getByRole("button").allInnerTexts();
  await page.close();
  const filter = process.env.LIVE_SCENARIO;
  const all = labels.length ? labels.map((l) => l.trim()) : ["(default input)"];
  return filter ? all.filter((l) => l.includes(filter)) : all;
}

// --- plumbing --------------------------------------------------------------

async function startDevServer() {
  const port = 5199;
  const vite = spawn(join(ROOT, "node_modules/.bin/vite"), [ROOT, "--port", String(port), "--strictPort"], {
    stdio: ["ignore", "pipe", "pipe"],
  });
  const base = `http://localhost:${port}`;
  const until = Date.now() + 60_000;
  while (Date.now() < until) {
    if (vite.exitCode !== null) throw new Error(`vite exited (${vite.exitCode}) — is port ${port} in use?`);
    if (await fetch(base).then((r) => r.ok, () => false)) return { base, stop: () => vite.kill() };
    await new Promise((r) => setTimeout(r, 300));
  }
  vite.kill();
  throw new Error("vite dev server didn't come up");
}

async function main() {
  const models = await fetch(`${ENDPOINT.replace(/\/$/, "")}/models`).then((r) => r.json()).catch(() => null);
  if (!models?.data?.length) {
    console.error(`No models served at ${ENDPOINT}/models — start Ollama (or set LIVE_ENDPOINT) first.`);
    process.exit(2);
  }

  const server = process.env.LIVE_BASE_URL
    ? { base: process.env.LIVE_BASE_URL.replace(/\/$/, ""), stop: () => {} }
    : await startDevServer();
  let browser;
  const results = [];
  try {
    browser = await chromium.launch({ headless: process.env.LIVE_HEADED !== "1" });
    for (const example of agentExamples()) {
      for (const scenario of await scenariosOf(browser, server.base, example)) {
        process.stdout.write(`… ${example} / ${scenario}\n`);
        // The scripted run is the reference path: a live run that takes a
        // different one is often the model, but sometimes a variable only the
        // scripted agent ever sets.
        const scripted = await runScenario(browser, server.base, example, scenario, "scripted");
        const r = await runScenario(browser, server.base, example, scenario);
        for (const f of scripted.fail) r.fail.push(`scripted run: ${f}`);
        const onlyScripted = scripted.steps.filter((s) => !r.steps.includes(s));
        const onlyLive = r.steps.filter((s) => !scripted.steps.includes(s));
        if (onlyScripted.length || onlyLive.length) {
          r.warn.push(
            `path differs from scripted — live skipped [${onlyScripted.join(", ")}], live added [${onlyLive.join(", ")}]`,
          );
        }
        r.pass = r.fail.length === 0;
        results.push(r);
        const head = `${r.pass ? "✔" : "✘"} ${example} / ${scenario}  (${Math.round(r.ms / 1000)}s, ${r.model || "?"})`;
        console.log(head);
        for (const f of r.fail) console.log(`    FAIL ${f}`);
        for (const w of r.warn) console.log(`    warn ${w}`);
        for (const n of r.notes) console.log(`    note ${n}`);
      }
    }
  } finally {
    await browser?.close();
    server.stop();
  }

  if (results.length === 0) {
    console.error(
      `No scenarios selected — check LIVE_EXAMPLES (${process.env.LIVE_EXAMPLES ?? "unset"}) ` +
        `and LIVE_SCENARIO (${process.env.LIVE_SCENARIO ?? "unset"}) against: ${agentExamplesUnfiltered().join(", ")}`,
    );
    process.exitCode = 1;
    return;
  }

  writeFileSync(join(OUT, "report.json"), JSON.stringify(results, null, 2));
  const passed = results.filter((r) => r.pass).length;
  console.log(`\n${passed}/${results.length} scenarios passed. Traces and failure screenshots: ${OUT}`);
  if (passed !== results.length) process.exitCode = 1;
}

await main();
