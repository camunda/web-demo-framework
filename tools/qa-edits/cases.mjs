// Cases for tools/qa-edits. Each asserts the behaviour we intend; `h` is the
// helper object built in index.mjs.

export const cases = [
  {
    id: "d1-model-edit-while-parked",
    title: "a model edit while parked on a human task leaves the run in place",
    async run(h) {
      await h.open("learn-user-task-form");
      const s = await h.run();
      h.expect(s === "Fill out the form below", `expected to park on the human task, got "${s}"`);
      await h.modelTab();
      await h.select("Event_done");
      await h.setProp("name", "Request reviewed (edited)");
      await h.page.waitForTimeout(1500);
      const after = await h.status();
      h.expect(after === "Fill out the form below", `status after the edit was "${after}" — the parked run was torn down`);
      const complete = await h.page.getByRole("button", { name: "Complete task", exact: true }).count();
      h.expect(complete > 0, "the human task card disappeared after a model edit");
    },
  },
  {
    id: "d1-model-edit-applies-on-next-run",
    title: "a model edit is applied by the next Run, not before",
    async run(h) {
      await h.open("learn-user-task-form");
      await h.modelTab();
      await h.select("Event_done");
      await h.setProp("name", "Edited end");
      const s = await h.run();
      h.expect(s === "Fill out the form below", `expected to park on the human task, got "${s}"`);
    },
  },
  {
    id: "d1-prompt-edit-while-parked",
    title: "a prompt edit while parked leaves the run in place",
    async run(h) {
      await h.open("seed-export-compliance");
      await h.page.getByRole("button", { name: /Likely flagged/ }).first().click();
      const s = await h.run();
      h.expect(s === "Fill out the form below", `expected to park on the human task, got "${s}"`);
      await h.setEditor("user-prompt", "Edited prompt text.");
      await h.page.waitForTimeout(1500);
      const after = await h.status();
      h.expect(after === "Fill out the form below", `status after the prompt edit was "${after}" — the parked run was torn down`);
    },
  },
  {
    id: "d3-sync-infinite-loop",
    title: "a handler stuck in a synchronous loop is terminated, and the page stays responsive",
    timeoutMs: 120_000,
    async run(h) {
      await h.open("learn-service-task");
      await h.setEditor("Prepare package", "async () => { while (true) {} }");
      await h.runButton().click();
      // Each probe runs on the page's main thread; a blocked thread never answers.
      const deadline = Date.now() + 60_000;
      let outcome = "";
      let worstMs = 0;
      while (Date.now() < deadline && !outcome) {
        const t = Date.now();
        const probe = await Promise.race([
          h.page.evaluate(() => document.querySelector(".runner")?.textContent ?? ""),
          new Promise((r) => setTimeout(() => r(null), 10_000)),
        ]);
        worstMs = Math.max(worstMs, Date.now() - t);
        if (probe === null) continue;
        if (/timed out after/.test(probe)) outcome = "timed out";
        else await h.page.waitForTimeout(500);
      }
      h.note(`slowest main-thread probe: ${worstMs} ms`);
      h.expect(outcome === "timed out", "no 'timed out' message within 60 s");
      h.expect(worstMs < 2000, `the page's main thread was blocked for ${worstMs} ms`);
    },
  },
  ...handlerCases(),
  {
    id: "d4-agent-syntax-gates-run",
    title: "a syntax error in the scripted agent disables Run before it is pressed, and clears when fixed",
    async run(h) {
      await h.open("seed-export-compliance");
      const original = await h.editorText("Agent (scripted)");
      // No opening bracket: Monaco would auto-close it.
      await h.setEditor("Agent (scripted)", "async (job) => }");
      await h.page.waitForTimeout(300);
      h.expect(await h.runDisabled(), "Run stays enabled with a broken scripted agent");
      const shown = (await h.alerts()).join(" | ");
      h.expect(/syntax error/i.test(shown), `no syntax error shown before Run (alerts: ${shown || "none"})`);
      if (!(await h.runDisabled())) {
        await h.runButton().click();
        await h.page.waitForTimeout(500);
        h.note(`after Run: alerts ${JSON.stringify(await h.alerts())}`);
      }
      await h.setEditor("Agent (scripted)", "async (job) => ({ completionConditionFulfilled: true })");
      await h.page.waitForTimeout(300);
      const after = (await h.alerts()).join(" | ");
      h.expect(!/syntax error|didn't compile/i.test(after), `the compile error is still shown after the fix: ${after}`);
      h.note(`original agent source starts: ${original.slice(0, 40)}`);
    },
  },
];

function handlerCases() {
  const shapes = [
    ["throws", "async () => { throw new Error('qa-boom'); }", { incident: true, trace: /qa-boom/ }],
    ["non-function", "42", { incident: true, trace: /must evaluate to a function/ }],
    ["pending-promise", "() => new Promise(() => {})", { incident: true, trace: /timed out after/, timeoutMs: 120_000 }],
    ["returns-number", "async () => 42", { incident: true, trace: /Handler returned a number/ }],
    ["returns-string", "async () => 'x'", { incident: true, trace: /Handler returned a string/ }],
    ["returns-array", "async () => [1, 2]", { incident: true, trace: /Handler returned an array/ }],
    ["returns-null", "async () => null", { completes: true }],
    ["returns-undefined", "async () => {}", { completes: true }],
    ["returns-function", "async () => ({ f: () => 1 })", {}],
    ["returns-circular", "async () => { const o = {}; o.self = o; return o; }", {}],
    ["returns-big", "async () => ({ big: 'x'.repeat(5_000_000) })", {}],
  ];
  return shapes.map(([name, source, want]) => ({
    id: `h4-${name}`,
    title: `a handler that ${name.replace(/-/g, " ")} ends in a readable state`,
    timeoutMs: want.timeoutMs ?? 90_000,
    async run(h) {
      await h.open("learn-service-task");
      await h.setEditor("Prepare package", source);
      h.expect((await h.diagnostics()).length === 0, `unexpected diagnostics: ${(await h.diagnostics()).join(" | ")}`);
      const s = await h.run();
      const trace = await h.traceText();
      const why = await h.explanation();
      h.note(`status "${s}"; trace tail: ${trace.slice(0, 160).replace(/\s+/g, " ")}`);
      h.note(`incidents: ${JSON.stringify(await h.incidents())}; alerts: ${JSON.stringify(await h.alerts())}`);
      h.expect(!["timeout", "Running…", "Stepping…", "Engine error"].includes(s), `ended in "${s}"`);
      if (s === "Paused") {
        const reasons = (await h.alerts()).length + (await h.incidents()).length;
        h.expect(reasons > 0, "the run stopped (Paused) without saying why");
      }
      if (want.incident) h.expect(s === "Incident", `expected Incident, got "${s}"`);
      if (want.completes) h.expect(s === "Completed", `expected Completed, got "${s}"`);
      if (want.trace) h.expect(want.trace.test(why), `nothing the reader can see mentions ${want.trace}`);
    },
  }));
}
