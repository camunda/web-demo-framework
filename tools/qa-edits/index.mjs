#!/usr/bin/env node
// Reader-edit QA: drive the runner's editors (modeler, properties panel,
// handler/agent/prompt tabs) through edit -> diagnostics -> Run -> Reset in a
// real browser, and check what the reader sees.
//
//   npm run qa:edits
//
// Opt-in, not CI. Each case asserts the behaviour we intend; a FAIL is a
// finding to triage, not necessarily a regression.
//
// Env:
//   QA_CASES      comma-separated case ids or id prefixes (default: all)
//   QA_BROWSERS   comma-separated: chromium,webkit,firefox (default: chromium)
//   QA_BASE_URL   use an already-running server instead of starting vite dev
//   QA_OUT        report directory (default: a fresh dir under the OS tmpdir)
//   QA_HEADED=1   show the browser

import { spawn } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import * as playwright from "playwright";
import { cases } from "./cases.mjs";

const ROOT = resolve(import.meta.dirname, "../..");
const OUT = process.env.QA_OUT ?? mkdtempSync(join(tmpdir(), "qa-edits-"));
mkdirSync(OUT, { recursive: true });

const STATUSES = [
  "Booting engine…", "Engine error", "Running…", "Stepping…",
  "Incident", "Fill out the form below", "Completed", "Paused", "Ready",
];

/** Page helpers handed to every case. */
function helpers(page, base, result) {
  const h = {
    page,
    async open(example, query = "") {
      await page.goto(`${base}/examples/${example}${query}`);
      await h.waitStatus("Ready", 120_000);
    },
    async status() {
      const badges = await page.locator(".runner .badge, .runner [class*='badge']").allInnerTexts().catch(() => []);
      for (const s of STATUSES) if (badges.some((b) => b.trim() === s)) return s;
      for (const s of STATUSES) if ((await page.getByText(s, { exact: true }).count()) > 0) return s;
      return "";
    },
    async waitStatus(want, timeout = 30_000) {
      const wants = [want].flat();
      const until = Date.now() + timeout;
      let s = "";
      while (Date.now() < until) {
        s = await h.status();
        if (wants.includes(s)) return s;
        await page.waitForTimeout(200);
      }
      throw new Error(`status stayed "${s}", wanted ${wants.join(" | ")}`);
    },
    /** Wait for an in-flight run to settle; returns the status it settled on. */
    async settle(timeout = 60_000) {
      const until = Date.now() + timeout;
      for (;;) {
        const s = await h.status();
        if (!["", "Booting engine…", "Running…", "Stepping…"].includes(s)) return s;
        if (Date.now() > until) return "timeout";
        await page.waitForTimeout(250);
      }
    },
    runButton: () => page.getByRole("button", { name: "▶ Run", exact: true }),
    stepButton: () => page.getByRole("button", { name: "⏭ Step", exact: true }),
    resetButton: () => page.getByRole("button", { name: "↺ Reset", exact: true }),
    async run() {
      await page.waitForFunction(() => {
        const b = [...document.querySelectorAll("button")].find((x) => x.textContent?.trim() === "▶ Run");
        return b && !b.disabled;
      }, null, { timeout: 30_000 });
      await h.runButton().click();
      return h.settle();
    },
    async reset() {
      await h.resetButton().click();
      return h.waitStatus("Ready");
    },
    async runDisabled() {
      return h.runButton().isDisabled();
    },
    /** Error diagnostics shown in the "Run is disabled" alert. */
    async diagnostics() {
      const alert = page.locator("[role=alert], .alert").filter({ hasText: "Run is disabled" });
      if (!(await alert.count())) return [];
      return alert.first().locator("li").allInnerTexts();
    },
    async warnings() {
      const alert = page.locator("[role=alert], .alert, [role=status]").filter({ hasText: "Heads up" });
      if (!(await alert.count())) return [];
      return alert.first().locator("li").allInnerTexts();
    },
    async traceText() {
      return page.locator(".timeline").first().innerText().catch(() => "");
    },
    /** Incident reasons from the run inspector's "Element completion" details. */
    async incidents() {
      return page.locator(".timeline-incidents li").evaluateAll((lis) => lis.map((li) => li.textContent?.trim() ?? ""));
    },
    async alerts() {
      return (await page.locator("[role=alert]").allInnerTexts()).map((t) => t.trim()).filter(Boolean);
    },
    /** Everything a reader could read to learn why: trace, incident reasons, alerts. */
    async explanation() {
      return [await h.traceText(), ...(await h.incidents()), ...(await h.alerts())].join("\n");
    },
    async openCode() {
      const trigger = page.locator(".editors .panel-trigger").first();
      if ((await trigger.getAttribute("data-state")) !== "open") await trigger.click();
    },
    async tab(name) {
      await h.openCode();
      await page.locator(".editors").getByRole("tab", { name, exact: true }).click();
    },
    async modelTab() {
      await h.tab("Model");
      await page.locator(".model-editor-canvas .djs-container").waitFor({ timeout: 60_000 });
    },
    async select(elementId) {
      const el = page.locator(`.model-editor-canvas [data-element-id="${elementId}"]`).first();
      await el.click({ force: true });
      await page.locator(".model-editor-properties .bio-properties-panel").waitFor();
    },
    /** Set a properties-panel text field by its input id suffix (name, id, …), opening `group` first. */
    async setProp(field, value, group = "General") {
      const input = page.locator(`.model-editor-properties #bio-properties-panel-${field}`);
      if (!(await input.isVisible().catch(() => false))) {
        await page.locator(".model-editor-properties .bio-properties-panel-group-header")
          .filter({ hasText: group }).first().click();
      }
      await input.waitFor({ timeout: 10_000 });
      await input.fill(value);
      await input.blur();
      // The modeler exports on a zero-delay timer after commandStack.changed.
      await page.waitForTimeout(400);
    },
    /** Replace the whole contents of the Monaco editor in the open tab panel. */
    async setEditor(tabName, text) {
      await h.tab(tabName);
      const editor = page.locator(".editors [role=tabpanel][data-state=active] .monaco-editor").first();
      await editor.waitFor({ timeout: 60_000 });
      await editor.locator(".view-lines").click();
      await editor.locator("textarea").first().focus();
      await page.keyboard.press("ControlOrMeta+A");
      await page.keyboard.press("Delete");
      await page.keyboard.insertText(text);
      await page.waitForTimeout(300);
      // An edit that silently didn't land would make every later check meaningless.
      const shown = (await editor.locator(".view-lines").innerText()).replace(/\s+/g, "");
      if (shown !== text.replace(/\s+/g, "")) throw new Error(`editor edit didn't apply in "${tabName}": shows ${shown.slice(0, 80)}`);
    },
    async editorText(tabName) {
      await h.tab(tabName);
      return page.locator(".editors [role=tabpanel][data-state=active] .view-lines").first().innerText();
    },
    expect(cond, message) {
      if (!cond) result.fail.push(message);
    },
    note(message) {
      result.notes.push(message);
    },
    async screenshot(name) {
      await page.screenshot({ path: join(OUT, `${result.slug}--${name}.png`), fullPage: true, timeout: 10_000 }).catch(() => {});
    },
  };
  return h;
}

async function runCase(browser, browserName, base, c) {
  const slug = `${browserName}--${c.id}`.replace(/[^a-z0-9]+/gi, "-");
  const result = { id: c.id, title: c.title, browser: browserName, slug, pass: false, fail: [], notes: [], pageErrors: [], ms: 0 };
  const started = Date.now();
  const context = await browser.newContext({ viewport: { width: 1400, height: 1000 } });
  const page = await context.newPage();
  page.on("pageerror", (e) => result.pageErrors.push(e.message.slice(0, 200)));
  const h = helpers(page, base, result);
  try {
    await Promise.race([
      c.run(h),
      new Promise((_, reject) => setTimeout(() => reject(new Error(`case exceeded ${c.timeoutMs ?? 180_000} ms`)), c.timeoutMs ?? 180_000)),
    ]);
  } catch (e) {
    result.fail.push(`harness: ${String(e.message ?? e).split("\n")[0]}`);
  }
  if (!c.allowPageErrors) for (const e of result.pageErrors) result.fail.push(`uncaught page error: ${e}`);
  result.ms = Date.now() - started;
  result.pass = result.fail.length === 0;
  if (!result.pass) await h.screenshot("fail");
  await context.close().catch(() => {});
  return result;
}

async function startDevServer() {
  const port = 5198;
  const vite = spawn(process.execPath, [join(ROOT, "node_modules/vite/bin/vite.js"), ROOT, "--host", "127.0.0.1", "--port", String(port), "--strictPort"], {
    stdio: ["ignore", "pipe", "pipe"],
  });
  const base = `http://127.0.0.1:${port}`;
  let output = "";
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("vite dev server didn't come up")), 60_000);
    const onData = (chunk) => {
      output += chunk.toString().replace(/\x1b\[[0-9;]*m/g, "");
      // "Port … is already in use" also contains "ready in"; anchor on the digit.
      if (/\bready in \d/.test(output)) { clearTimeout(timer); resolve(); }
    };
    vite.stdout.on("data", onData);
    vite.stderr.on("data", onData);
    vite.on("error", (e) => { clearTimeout(timer); reject(e); });
    vite.on("exit", (code) => {
      clearTimeout(timer);
      reject(new Error(`vite exited (${code}) — is port ${port} in use?\n${output.trim().slice(-400)}`));
    });
  }).catch((e) => {
    vite.kill();
    throw e;
  });
  return { base, stop: () => vite.kill() };
}

async function main() {
  const only = process.env.QA_CASES?.split(",").map((s) => s.trim()).filter(Boolean);
  const selected = cases.filter((c) => !only || only.some((o) => c.id === o || c.id.startsWith(o)));
  if (!selected.length) {
    console.error(`No cases match QA_CASES=${process.env.QA_CASES}. Known: ${cases.map((c) => c.id).join(", ")}`);
    process.exit(2);
  }
  const browsers = (process.env.QA_BROWSERS ?? "chromium").split(",").map((s) => s.trim());
  const server = process.env.QA_BASE_URL
    ? { base: process.env.QA_BASE_URL.replace(/\/$/, ""), stop: () => {} }
    : await startDevServer();
  const results = [];
  try {
    for (const name of browsers) {
      const browser = await playwright[name].launch({ headless: process.env.QA_HEADED !== "1" });
      try {
        for (const c of selected) {
          if (c.browsers && !c.browsers.includes(name)) continue;
          const r = await runCase(browser, name, server.base, c);
          results.push(r);
          writeFileSync(join(OUT, "report.json"), JSON.stringify(results, null, 2));
          console.log(`${r.pass ? "✔" : "✘"} [${name}] ${c.id} — ${c.title}  (${Math.round(r.ms / 1000)}s)`);
          for (const f of r.fail) console.log(`    FAIL ${f}`);
          for (const n of r.notes) console.log(`    note ${n}`);
        }
      } finally {
        await browser.close();
      }
    }
  } finally {
    server.stop();
  }
  const failed = results.filter((r) => !r.pass).length;
  console.log(`\n${results.length - failed}/${results.length} passed. Report: ${join(OUT, "report.json")}`);
  process.exitCode = failed ? 1 : 0;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
