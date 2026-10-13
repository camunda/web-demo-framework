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
      const parked = await h.run();
      h.expect(parked === "Fill out the form below", `expected to park on the human task, got "${parked}"`);
      // Observable either way: with the user task gone, a run completes instead of parking.
      await h.modelTab();
      await h.select("Activity_review");
      await h.replaceSelected("replace-with-task");
      await h.page.waitForTimeout(800);
      const during = await h.status();
      h.expect(during === "Fill out the form below", `the edit reached the parked run: "${during}"`);
      await h.reset();
      const next = await h.run();
      h.expect(next === "Completed", `the next run didn't use the edited model: "${next}"`);
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
    title: "a handler stuck in a synchronous loop: recovers where the browser isolates the sandbox, may freeze the tab otherwise (accepted)",
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
      h.note(`slowest main-thread probe: ${worstMs} ms; ${outcome || "no timeout message within 60 s"}`);
      // Accepted (docs/security.md): only browsers that isolate the sandboxed iframe recover.
      if (worstMs < 2000) h.expect(outcome === "timed out", "the page stayed responsive but the run never timed out");
    },
  },
  ...handlerCases(),
  ...diagnosticCases(),
  ...modelerCases(),
  ...securityCases(),
  ...agentCases(),
  ...modeCases(),
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
        h.expect(diags.some((d) => /has no job type/.test(d)), `no missing-job-type error; got ${JSON.stringify(diags)}`);
        h.expect(await h.runDisabled(), "Run enabled with an untyped service task");
      },
    },
    {
      id: "p2-decision-id",
      title: "a missing decision isn't checked before Run (documented), but the incident names it",
      async run(h) {
        await h.open("expense-decision");
        await h.modelTab();
        await h.select("BusinessRuleTask_EvaluatePolicy");
        await h.openGroup("Called decision");
        await h.fillField("bio-properties-panel-decisionId", "no_such_decision");
        h.expect(!(await h.runDisabled()), "now reported before Run — update docs/supported-edits.md");
        const s = await h.run();
        const incidents = await h.incidents();
        h.expect(s === "Incident", `ended "${s}"`);
        h.expect(incidents.some((i) => /no_such_decision/.test(i)), `the incident doesn't name the decision: ${JSON.stringify(incidents)}`);
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
        h.expect(!warns.some((w) => /parseModel/.test(w)), "the warning tells a reader to call an internal function");
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

const nameOnCanvas = (h, id) =>
  h.page.locator(`.model-editor-canvas [data-element-id="${id}"] text`).evaluateAll((ts) => ts.map((t) => t.textContent).join(" ").replace(/\s+/g, " ").trim());

function modelerCases() {
  return [
    {
      id: "p3-revert",
      title: "Revert to original restores only the diagram and keeps handler edits",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        const revert = h.page.getByRole("button", { name: "Revert to original" });
        h.expect(await revert.isDisabled(), "Revert enabled before any edit");
        await h.select("Activity_prepare");
        await h.setProp("name", "Renamed step");
        h.expect(!(await revert.isDisabled()), "Revert still disabled after an edit");
        await h.setEditor("Dispatch courier", "async () => ({ edited: true })");
        await h.modelTab();
        await revert.click();
        await h.page.waitForTimeout(600);
        const label = await nameOnCanvas(h, "Activity_prepare");
        h.expect(/Prepare package/.test(label), `diagram not restored: "${label}"`);
        h.expect(await revert.isDisabled(), "Revert still enabled after reverting");
        const src = await h.editorText("Dispatch courier");
        h.expect(/edited/.test(src), "Revert also discarded a handler edit");
      },
    },
    {
      id: "p3-gateway-condition",
      title: "an edited gateway condition changes the path the next Run takes",
      async run(h) {
        await h.open("learn-exclusive-gateway");
        await h.modelTab();
        await h.select("Flow_to_express");
        await h.openGroup("Condition");
        const editor = h.page.locator(".model-editor-properties [contenteditable=true]").first();
        await editor.click();
        await h.page.keyboard.press("ControlOrMeta+A");
        await h.page.keyboard.insertText("true");
        await h.page.locator(".model-editor-properties").click({ position: { x: 5, y: 5 } });
        await h.page.waitForTimeout(500);
        const s = await h.run();
        const trace = await h.traceText();
        h.expect(s === "Completed", `ended "${s}"`);
        h.expect(/Express ship/.test(trace) && !/Standard ship/.test(trace), `took the wrong path: ${trace.slice(0, 200).replace(/\s+/g, " ")}`);
      },
    },
    {
      id: "p3-connector-template",
      title: "applying the Inventory Check template keeps the handler wired and the run completing",
      async run(h) {
        await h.open("order-process");
        await h.modelTab();
        await h.select("Activity_0tw2fu0");
        const picker = h.page.locator(".model-editor-template-picker select");
        await picker.selectOption({ label: "Inventory Check (Demo Connector)" });
        await h.page.waitForTimeout(600);
        const ids = await h.fieldIds();
        h.note(`fields after apply: ${ids.filter((i) => /warehouse|sku|stock|timeout/i.test(i)).join(", ")}`);
        const panel = await h.page.locator(".model-editor-properties").innerText();
        h.expect(/Warehouse URL/.test(panel) || /Warehouse endpoint/.test(panel), `the template's fields never appeared; panel groups: ${panel.split("\n").slice(0, 12).join(" / ")}`);
        h.note(`console: ${JSON.stringify(h.consoleMessages())}`);
        h.expect((await h.diagnostics()).length === 0, `diagnostics after apply: ${JSON.stringify(await h.diagnostics())}`);
        const s = await h.run();
        h.expect(s === "Completed", `ended "${s}" after applying the template`);
      },
    },
    {
      id: "p3-select-template-button",
      title: "the properties panel's 'Select a template' button doesn't break the page",
      async run(h) {
        await h.open("order-process");
        await h.modelTab();
        await h.select("Activity_0tw2fu0");
        const button = h.page.locator(".model-editor-properties").getByTitle("Select a template");
        if (!(await button.count())) return h.note("no Select a template button");
        await button.click();
        await h.page.waitForTimeout(800);
        h.note(`after click: popups ${await h.page.locator(".djs-popup, [role=dialog]").count()}`);
      },
    },
    {
      id: "p3-undo-keyboard",
      title: "Cmd/Ctrl+Z on the canvas undoes the last modeler edit",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        await h.select("Activity_prepare");
        await h.setProp("name", "Renamed step");
        await h.page.locator(".model-editor-canvas .djs-container").click({ position: { x: 600, y: 40 } });
        await h.page.keyboard.press("ControlOrMeta+Z");
        await h.page.waitForTimeout(600);
        const label = await nameOnCanvas(h, "Activity_prepare");
        h.expect(/Prepare package/.test(label), `undo did nothing: "${label}"`);
        await h.page.keyboard.press("ControlOrMeta+Shift+Z");
        await h.page.waitForTimeout(600);
        const redone = await nameOnCanvas(h, "Activity_prepare");
        h.expect(/Renamed step/.test(redone), `redo did nothing: "${redone}"`);
      },
    },
    {
      id: "p3-undo-scoped",
      title: "Cmd/Ctrl+Z outside the diagram doesn't undo a diagram edit",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        // A canvas edit, not a text field: the browser's own undo would revert a field.
        await h.select("Activity_dispatch");
        await h.page.locator(`.model-editor-canvas .djs-context-pad [data-action="delete"]`).click();
        await h.page.waitForTimeout(500);
        await h.page.locator(".runner h1, .runner h2").first().click();
        await h.page.keyboard.press("ControlOrMeta+Z");
        await h.page.waitForTimeout(600);
        const back = await h.page.locator('.model-editor-canvas [data-element-id="Activity_dispatch"]').count();
        h.expect(back === 0, "a page-level undo reached the diagram");
      },
    },
    {
      id: "p3-undo-after-collapse",
      title: "undo history starts fresh after the Code panel is collapsed and reopened",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        await h.select("Activity_dispatch");
        await h.page.locator(`.model-editor-canvas .djs-context-pad [data-action="delete"]`).click();
        await h.page.locator(".editors .panel-trigger").first().click();
        await h.page.waitForTimeout(300);
        await h.modelTab();
        await h.page.waitForTimeout(600);
        await h.page.locator(".model-editor-canvas .djs-container").click({ position: { x: 600, y: 40 } });
        await h.page.keyboard.press("ControlOrMeta+Z");
        await h.page.waitForTimeout(600);
        const back = await h.page.locator('.model-editor-canvas [data-element-id="Activity_dispatch"]').count();
        h.note(`deleted element back after undo: ${back > 0}`);
        h.expect(back === 0, "undo reached across a collapse");
      },
    },
    {
      id: "p3-collapse-keeps-edits",
      title: "collapsing and reopening the Code panel keeps the edited diagram",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        await h.select("Activity_prepare");
        await h.setProp("name", "Renamed step");
        await h.page.locator(".editors .panel-trigger").first().click();
        await h.page.waitForTimeout(300);
        await h.modelTab();
        await h.page.waitForTimeout(600);
        const label = await nameOnCanvas(h, "Activity_prepare");
        h.expect(/Renamed step/.test(label), `edit lost after collapsing Code: "${label}"`);
      },
    },
    {
      id: "p3-fullscreen-esc",
      title: "Escape leaves full screen without losing the edit",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        await h.page.getByRole("button", { name: "Full screen" }).click();
        await h.select("Activity_prepare");
        await h.setProp("name", "Renamed step");
        await h.page.locator(".model-editor-canvas .djs-container").click({ position: { x: 600, y: 40 } });
        await h.page.keyboard.press("Escape");
        await h.page.waitForTimeout(400);
        h.expect(await h.page.getByRole("button", { name: "Full screen" }).count() > 0, "still in full screen after Escape");
        const label = await nameOnCanvas(h, "Activity_prepare");
        h.expect(/Renamed step/.test(label), `edit lost leaving full screen: "${label}"`);
      },
    },
    {
      id: "p3-edit-then-reset-then-run",
      title: "after Reset, the next Run uses the edited model",
      async run(h) {
        await h.open("learn-user-task-form");
        await h.run();
        await h.modelTab();
        await h.select("Activity_review");
        await h.replaceSelected("replace-with-task");
        await h.reset();
        const s = await h.run();
        h.expect(s === "Completed", `the edited model (no user task) should complete; ended "${s}"`);
      },
    },
    {
      id: "p3-template-on-other-task",
      title: "applying the connector to a business rule task turns it into a service task and says it needs a handler",
      async run(h) {
        await h.open("expense-decision");
        await h.modelTab();
        await h.select("BusinessRuleTask_EvaluatePolicy");
        const options = await h.page.locator(".model-editor-template-picker select option:not([disabled])").allInnerTexts();
        h.expect(options.includes("Inventory Check (Demo Connector)"), `not offered: ${JSON.stringify(options)}`);
        await h.page.locator(".model-editor-template-picker select").selectOption({ label: "Inventory Check (Demo Connector)" });
        await h.page.waitForTimeout(600);
        const diags = await h.diagnostics();
        h.expect(diags.some((d) => /No handler for "Evaluate expense policy".*job type "check-inventory"/.test(d)), `got ${JSON.stringify(diags)}`);
        h.expect(await h.runDisabled(), "Run enabled");
      },
    },
  ];
}

function securityCases() {
  const xss = `<img src=x onerror="window.__qaXss=(window.__qaXss||0)+1">`;
  return [
    {
      id: "p9-xss-element-name",
      title: "markup in an element name renders as text everywhere it is shown",
      async run(h) {
        await h.open("learn-service-task");
        await h.modelTab();
        await h.select("Activity_prepare");
        await h.setProp("name", xss);
        await h.run();
        // Still selected; the id field then puts the name into an orphaned-handler diagnostic.
        await h.setProp("id", "Activity_prepare_x");
        await h.page.waitForTimeout(500);
        h.expect(!(await h.page.evaluate(() => window.__qaXss)), "an element name executed as HTML");
        h.expect((await h.page.locator(".runner img[src=x]").count()) === 0, "an element name became an <img>");
        h.expect((await h.page.locator(".runner").innerText()).includes("<img src=x"), "the edited name isn't shown as text");
      },
    },
    {
      id: "p9-xss-tool-documentation",
      title: "markup in a tool's documentation renders as text in the tools panel",
      async run(h) {
        await h.open("seed-export-compliance");
        await h.modelTab();
        const tool = await h.page.locator(".model-editor-canvas [data-element-id]").evaluateAll((els) =>
          els.map((e) => e.getAttribute("data-element-id")).find((x) => /^Verify|^Compute|^Lookup|^Record|Activity/i.test(x ?? "")));
        await h.select(tool);
        await h.setProp("documentation", xss, "Documentation");
        const trigger = h.page.locator(".panel-trigger").filter({ hasText: "Tools, as the model sees them" });
        if ((await trigger.getAttribute("data-state")) !== "open") await trigger.click();
        await h.page.waitForTimeout(500);
        h.expect(!(await h.page.evaluate(() => window.__qaXss)), "tool documentation executed as HTML");
        // A CSP could stop the handler running and still leave a real element behind.
        h.expect((await h.page.locator(".runner img[src=x]").count()) === 0, "tool documentation became an <img>");
        // Otherwise both checks pass vacuously when the panel shows no documentation at all.
        h.expect((await h.page.locator(".runner").innerText()).includes("<img src=x"), "the edited documentation isn't shown as text");
        h.note(`tool ${tool}`);
      },
    },
    {
      id: "p9-sandbox-reach",
      title: "handler code can't reach the page, its storage, or navigate it",
      // WebKit reports the sandbox's own refusals (navigation, alert) as page errors.
      allowPageErrors: true,
      async run(h) {
        await h.open("learn-service-task");
        await h.page.evaluate(() => localStorage.setItem("qa-secret", "s3cret"));
        const probe = `async (job, { trace }) => {
  const tryIt = (name, fn) => { try { trace(name + ": " + String(fn())); } catch (e) { trace(name + " blocked: " + e.name); } };
  tryIt("parent.document", () => parent.document.title);
  tryIt("top.location.set", () => { top.location.href = "about:blank"; return "set"; });
  tryIt("localStorage", () => localStorage.getItem("qa-secret"));
  tryIt("cookie", () => document.cookie);
  tryIt("window.open", () => window.open("about:blank"));
  tryIt("alert", () => alert("x"));
  try { const r = await fetch(location.origin === "null" ? "${"http://127.0.0.1:5197/"}" : "/"); trace("fetch: " + r.status); } catch (e) { trace("fetch blocked: " + e.message); }
  return { probed: true };
}`;
        await h.setEditor("Prepare package", probe);
        const url = h.page.url();
        const popups = [];
        h.page.context().on("page", (p) => popups.push(p));
        const s = await h.run();
        const trace = await h.traceText();
        h.note(`status "${s}"; ${trace.split("\n").filter((l) => /blocked|: /.test(l) && /parent|top|local|cookie|open|alert|fetch/.test(l)).join(" | ")}`);
        h.expect(h.page.url() === url, "the handler navigated the page");
        const unexpected = h.pageErrors().filter((e) => !/sandboxed/i.test(e));
        h.expect(unexpected.length === 0, `page errors besides the sandbox's refusals: ${JSON.stringify(unexpected)}`);
        h.expect(popups.length === 0, "the handler opened a window");
        h.expect(!/localStorage: s3cret/.test(trace), "the handler read the page's localStorage");
        h.expect(!/parent\.document: /.test(trace.replace(/parent\.document blocked/g, "")), "the handler read the parent document");
      },
    },
  ];
}

const OLLAMA = process.env.QA_ENDPOINT ?? "http://localhost:11434/v1";

async function connectEndpointBrain(h) {
  const page = h.page;
  const url = page.locator("#endpoint-url");
  if ((await url.inputValue()) !== OLLAMA) await url.fill(OLLAMA);
  await page.waitForTimeout(600);
  await page.waitForFunction(() => {
    const picked = document.querySelector("#endpoint-model")?.textContent?.trim() ?? "";
    const refreshing = [...document.querySelectorAll("button")].some((b) => b.textContent?.trim() === "Refreshing…");
    return picked && !refreshing && !/^(Loading models…|Enter an endpoint above)$/.test(picked);
  }, null, { timeout: 60_000 });
  const connect = page.getByRole("button", { name: "Connect", exact: true });
  await page.waitForFunction(() => {
    const b = [...document.querySelectorAll("button")].find((x) => x.textContent?.trim() === "Connect");
    return b && !b.disabled;
  }, null, { timeout: 60_000 });
  await connect.click();
  await page.getByRole("button", { name: "Reconnect", exact: true }).waitFor({ timeout: 300_000 });
}

function agentCases() {
  return [
    {
      id: "p5-delete-tool",
      title: "deleting a job tool from the agent orphans its handler before Run",
      async run(h) {
        await h.open("seed-export-compliance");
        await h.modelTab();
        await h.select("VerifyGeneticMarker");
        await h.page.locator(`.model-editor-canvas .djs-context-pad [data-action="delete"]`).click();
        await h.page.waitForTimeout(500);
        const diags = await h.diagnostics();
        h.expect(diags.some((d) => /Handler "VerifyGeneticMarker" doesn't match any element/.test(d)), `got ${JSON.stringify(diags)}`);
        h.expect(await h.runDisabled(), "Run enabled after deleting a handled tool");
      },
    },
    {
      id: "p5-prompt-special-chars",
      title: "a prompt containing XML and FEEL metacharacters still deploys and runs",
      async run(h) {
        await h.open("seed-export-compliance");
        const prompt = `Quote " apostrophe ' <tag> & amp ]]> backslash \\ newline\nunicode é 🚀 and a {{brace}} pair`;
        await h.setEditor("system-prompt", prompt);
        const diags = await h.diagnostics();
        h.expect(diags.length === 0, `diagnostics: ${JSON.stringify(diags)}`);
        h.note(`warnings: ${JSON.stringify(await h.warnings())}`);
        const s = await h.run();
        h.expect(["Completed", "Fill out the form below"].includes(s), `ended "${s}"`);
      },
    },
    {
      id: "p5-live-ignores-broken-scripted",
      title: "[ollama] with a live brain connected, a broken scripted agent doesn't block Run",
      timeoutMs: 20 * 60_000,
      async run(h) {
        const up = await fetch(`${OLLAMA}/models`).then((r) => r.ok).catch(() => false);
        if (!up) return h.note(`skipped: nothing at ${OLLAMA}`);
        const hash = encodeURIComponent(JSON.stringify({ brain: "endpoint" }));
        await h.open("seed-export-compliance", `#s=${hash}`);
        await connectEndpointBrain(h);
        await h.setEditor("Agent (scripted)", "async (job) => }");
        h.expect(!(await h.runDisabled()), "a broken (unused) scripted agent disabled Run with a live brain connected");
        await h.setEditor("system-prompt", "You are a careful export-compliance agent. Always call every tool once before deciding.");
        // A cold local model can take minutes per turn; stay inside the case budget.
        const s = await h.run(18 * 60_000);
        const trace = await h.traceText();
        h.note(`status "${s}"`);
        h.expect(/live brain/i.test(trace), "the run didn't use the live brain");
        h.expect(["Completed", "Fill out the form below"].includes(s), `ended "${s}"`);
      },
    },
  ];
}

function modeCases() {
  const codePanel = (h) => h.page.locator(".editors .panel-trigger").count();
  return [
    {
      id: "p8-compact-read-only",
      title: "?embed=1&view=compact offers no editors and no brain picker",
      async run(h) {
        await h.open("seed-export-compliance", "?embed=1&view=compact");
        h.expect((await codePanel(h)) === 0, "the Code panel is shown in compact");
        h.expect((await h.page.getByText("Agent brain").count()) === 0, "the brain picker is shown in compact");
        h.expect((await h.page.locator(".monaco-editor, .model-editor-canvas").count()) === 0, "an editor rendered in compact");
        const link = h.page.getByRole("link", { name: /Open the editable version/ });
        h.expect((await link.count()) === 1, "no link to the editable version");
        if (await link.count()) h.expect(!/view=compact|embed=1/.test((await link.getAttribute("href")) ?? ""), "the editable link keeps embed flags");
        const s = await h.run();
        h.expect(["Completed", "Fill out the form below"].includes(s), `compact run ended "${s}"`);
      },
    },
    {
      id: "p8-embed-full-editable",
      title: "?embed=1 keeps the editors, and an edit there gates Run like the full page",
      async run(h) {
        await h.open("learn-service-task", "?embed=1");
        h.expect((await codePanel(h)) === 1, "no Code panel in the plain embed");
        await h.setEditor("Prepare package", "async (job) => }");
        h.expect(await h.runDisabled(), "a syntax error didn't disable Run in the embed");
      },
    },
    {
      id: "p8-autostart-uses-original",
      title: "?autostart=1 runs the example as shipped",
      async run(h) {
        // Autostart waits for the runner to scroll into view, which it is at the top of the page.
        await h.page.goto(`${h.base}/examples/learn-service-task?autostart=1`);
        const s = await h.waitStatus("Completed", 90_000).catch((e) => e.message);
        h.expect(s === "Completed", `autostart: ${s}`);
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
    ["returns-function", "async () => () => 1", { incident: true, trace: /Handler returned a function/ }],
    ["returns-nested-function", "async () => ({ f: () => 1 })", { incident: true }],
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
