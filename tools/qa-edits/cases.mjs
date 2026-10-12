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
  ...diagnosticCases(),
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

/** Edit -> the expected diagnostic appears, Run and Step are disabled -> undo -> both clear. */
async function expectGate(h, { edit, undo, error, warning }) {
  await edit();
  await h.page.waitForTimeout(300);
  const diags = await h.diagnostics();
  const warns = await h.warnings();
  if (error) {
    h.expect(diags.some((d) => error.test(d)), `no error matching ${error}; got ${JSON.stringify(diags)}`);
    h.expect(await h.runDisabled(), "Run is enabled despite an error diagnostic");
    h.expect(await h.stepButton().isDisabled(), "Step is enabled despite an error diagnostic");
  }
  if (warning) {
    h.expect(diags.length === 0, `unexpected errors: ${JSON.stringify(diags)}`);
    h.expect(warns.some((w) => warning.test(w)), `no warning matching ${warning}; got ${JSON.stringify(warns)}`);
    h.expect(!(await h.runDisabled()), "a warning disabled Run");
  }
  if (undo) {
    await undo();
    await h.page.waitForTimeout(300);
    const left = [...(await h.diagnostics()), ...(await h.warnings())];
    h.expect(left.length === 0, `diagnostics left after undoing the edit: ${JSON.stringify(left)}`);
    h.expect(!(await h.runDisabled()), "Run still disabled after undoing the edit");
  }
}

function diagnosticCases() {
  return [
    {
      id: "p2-rename-id",
      title: "renaming a handled element's ID orphans its handler and names both, until renamed back",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        await h.select("Activity_prepare");
        await expectGate(h, {
          edit: () => h.setProp("id", "Activity_prepare_x"),
          error: /Handler "Activity_prepare" doesn't match any element/,
          undo: () => h.setProp("id", "Activity_prepare"),
        });
      },
    },
    {
      id: "p2-rename-id-missing-handler",
      title: "the renamed element is reported as having no handler",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        await h.select("Activity_prepare");
        await expectGate(h, {
          edit: () => h.setProp("id", "Activity_prepare_x"),
          error: /No handler for "Prepare package" \(Activity_prepare_x, job type "prepare-package"\)/,
        });
      },
    },
    {
      id: "p2-form-id",
      title: "pointing a user task at a missing form is an error before Run",
      async run(h) {
        await h.open("learn-user-task-form");
        await h.modelTab();
        await h.select("Activity_review");
        await expectGate(h, {
          edit: () => h.setProp("formId", "no-such-form", "Form"),
          error: /User task "Review request" \(Activity_review\) references form "no-such-form", which has no matching schema/,
          undo: () => h.setProp("formId", "learn-user-task-form-review", "Form"),
        });
      },
    },
    {
      id: "p2-placeholder",
      title: "an unresolved {{placeholder}} is a warning that doesn't block Run",
      async run(h) {
        await h.open("seed-export-compliance");
        await h.modelTab();
        const id = await h.page.locator(".model-editor-canvas [data-element-id]").evaluateAll((els) =>
          els.map((e) => e.getAttribute("data-element-id")).find((x) => /^Event_|^StartEvent/.test(x ?? "")));
        await h.select(id);
        const before = await h.page.locator(".model-editor-properties #bio-properties-panel-name").inputValue().catch(() => "");
        await expectGate(h, {
          edit: () => h.setProp("name", "Start {{no-such-template}}"),
          warning: /Template placeholder "\{\{no-such-template\}\}" has no matching/,
          undo: () => h.setProp("name", before),
        });
      },
    },
    {
      id: "p2-add-service-task",
      title: "a new service task with a job type and no handler is an error before Run",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        await h.createFromPalette("create.task", 300, 330);
        await h.replaceSelected("replace-with-service-task");
        // Still selected after the replace; re-clicking can land under the palette.
        const untyped = { diags: await h.diagnostics(), runDisabled: await h.runDisabled() };
        h.note(`service task with no job type: ${JSON.stringify(untyped)}`);
        await expectGate(h, {
          edit: async () => {
            await h.openGroup("Task definition");
            await h.fillField("bio-properties-panel-taskDefinitionType", "qa-new-type");
          },
          error: /No handler for .*job type "qa-new-type"/,
        });
      },
    },
    {
      id: "p2-clear-job-type",
      title: "clearing a handled task's job type is reported before Run, not discovered mid-run",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        await h.select("Activity_prepare");
        await h.openGroup("Task definition");
        await h.fillField("bio-properties-panel-taskDefinitionType", "");
        const diags = await h.diagnostics();
        h.expect(diags.some((d) => /has no job type/.test(d)), `no missing-job-type error; got ${JSON.stringify(diags)}`);
        h.expect(!diags.some((d) => /orphaned by a rename/.test(d)), "a task that lost its job type is called an orphaned handler");
        h.expect(await h.runDisabled(), "Run enabled");
      },
    },
    {
      id: "p2-connected-untyped",
      title: "a connected service task with no job type is reported before Run, not discovered mid-run",
      async run(h) {
        await h.open("learn-user-task-form");
        await h.modelTab();
        await h.select("Activity_review");
        await h.replaceSelected("replace-with-service-task");
        const diags = await h.diagnostics();
        h.expect(diags.some((d) => /"Review request" \(Activity_review\) has no job type/.test(d)), `no missing-job-type error; got ${JSON.stringify(diags)}`);
        h.expect(await h.runDisabled(), "Run enabled with an untyped service task in the flow");
      },
    },
    {
      id: "p2-untyped-service-task",
      title: "a new service task with no job type is reported before Run, not discovered mid-run",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        await h.createFromPalette("create.task", 300, 330);
        await h.replaceSelected("replace-with-service-task");
        const diags = await h.diagnostics();
        h.note(`diagnostics: ${JSON.stringify(diags)}`);
        if (!(await h.runDisabled())) {
          const s = await h.run();
          const why = await h.explanation();
          h.note(`Run ended "${s}"; incidents ${JSON.stringify(await h.incidents())}; alerts ${JSON.stringify(await h.alerts())}`);
          h.expect(s === "Completed" || diags.length > 0, `an unreported model problem surfaced only at run time: "${s}" — ${why.slice(0, 160).replace(/\s+/g, " ")}`);
        }
      },
    },
    {
      id: "p2-second-pool",
      title: "adding a second pool is a warning naming the active process",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        await h.createFromPalette("create.participant-expanded", 450, 200);
        await h.page.waitForTimeout(500);
        // The first pool wraps the existing process; only a second adds one.
        await h.createFromPalette("create.participant-expanded", 450, 340);
        await h.page.waitForTimeout(500);
        const diags = await h.diagnostics();
        const warns = await h.warnings();
        h.note(`errors ${JSON.stringify(diags)}; warnings ${JSON.stringify(warns)}`);
        h.expect(warns.some((w) => /<bpmn:process> elements/.test(w)), "no two-process warning");
        if (!diags.length) {
          const s = await h.run();
          h.expect(s === "Completed", `the primary process didn't complete after adding a pool: "${s}"`);
        }
      },
    },
    {
      id: "p2-listener-dup",
      title: "two task listeners sharing a job type on one user task are an error",
      async run(h) {
        await h.open("learn-user-task-form");
        await h.modelTab();
        await h.select("Activity_review");
        await h.openGroup("Task listeners");
        await h.addListItem("Task listeners");
        await h.addListItem("Task listeners");
        const ids = (await h.fieldIds()).filter((i) => /istener/i.test(i));
        h.note(`listener fields: ${ids.join(", ")}`);
        const types = ids.filter((i) => /listenerType$|-type$/i.test(i));
        for (const t of types) await h.fillField(t, "qa-notify");
        await h.page.waitForTimeout(300);
        const diags = await h.diagnostics();
        h.expect(diags.some((d) => /share the job type "qa-notify"/.test(d)), `no shared-type error; got ${JSON.stringify(diags)}`);
        h.expect(await h.runDisabled(), "Run enabled with ambiguous listeners");
      },
    },
    {
      id: "p2-listener-noop",
      title: "a single task listener with no handler runs as a no-op and says so",
      async run(h) {
        await h.open("learn-user-task-form");
        await h.modelTab();
        await h.select("Activity_review");
        await h.openGroup("Task listeners");
        await h.addListItem("Task listeners");
        const ids = (await h.fieldIds()).filter((i) => /istener/i.test(i));
        const type = ids.find((i) => /listenerType$|-type$/i.test(i));
        if (type) await h.fillField(type, "qa-notify");
        const s = await h.run();
        const trace = await h.traceText();
        h.note(`status "${s}"`);
        h.expect(/listener \(no code supplied\)/.test(trace), "trace doesn't say the listener ran with no code");
        h.expect(s === "Fill out the form below" || s === "Completed", `ended in "${s}"`);
      },
    },
  ];
}

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
