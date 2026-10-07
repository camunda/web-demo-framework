import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import { renderExample } from "../testing/renderExample";
import { messageStartFixture } from "../testing/messageStartFixture";
import { orderProcess } from "../../examples/order-process";
import { invoicePayment } from "../../examples/invoice-payment";
import { seedExportCompliance } from "../../examples/seed-export-compliance";
import { creditLineIncrease } from "../../examples/credit-line-increase";
import { expenseDecision } from "../../examples/expense-decision";
import { bankSupport } from "../../examples/bank-support";
import learnSignalBroadcast from "../../examples/learn-signal-broadcast";

// Stands in for driver.js, whose every layout pass is scheduled on
// `requestAnimationFrame` — so what it draws can't be asserted here anyway.
// What can be is that the runner tells it to re-measure.
const tourHandle = vi.hoisted(() => ({
  refresh: vi.fn(),
  destroy: vi.fn(),
}));
vi.mock("../tour/driverAdapter", () => ({
  buildDriveSteps: (steps: unknown[]) => steps,
  startTour: () =>
    Promise.resolve({
      isActive: () => true,
      refresh: tourHandle.refresh,
      destroy: tourHandle.destroy,
    }),
}));

// The runner boots the engine itself, and `createBojtosSession()` resolves the
// wasm binary through `import.meta.url` — which only works under Vite. Hand it
// the bytes; everything else is the real thing.
vi.mock("@nanobpm/bojtos-kit", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@nanobpm/bojtos-kit")>();
  const { loadLeanWasm } = await import("../testing/leanWasm");
  return {
    ...actual,
    createBojtosSession: (opts?: Record<string, unknown>) =>
      actual.createBojtosSession({ wasm: loadLeanWasm(), ...opts }),
  };
});

// Handler and agent source normally runs inside a throwaway sandboxed iframe.
// jsdom executes no scripts in one, so every job would time out and raise an
// incident. Run the source directly here — what's under test is the drive
// loop, not the boundary, and the boundary has its own tests
// (`sandbox/iframeSource.test.ts`) plus `docs/security.md`.
vi.mock("../sandbox", () => ({
  runHandlerSandboxed: (source: string, job: unknown, helpers: unknown) =>
    // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
    Promise.resolve(new Function(`"use strict"; return (${source});`)()(job, helpers)),
  runAgentSandboxed: (source: string, job: unknown) =>
    // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
    Promise.resolve(new Function(`"use strict"; return (${source});`)()(job)),
}));

const ALERT = "The agent didn't finish its checks";

// This repo doesn't enable RTL's automatic cleanup, and every query below is
// document-wide — a second mounted runner makes all of them ambiguous.
afterEach(cleanup);

describe("ExampleRunner — a run with no human in it", () => {
  it("drives an example to completion from one press of Run", async () => {
    const app = await renderExample(orderProcess);
    expect(app.status()).toBe("Ready");

    await app.run();

    expect(app.status()).toBe("Completed");
    expect(app.trace().at(-1)).toContain("process instance completed");
  }, 30_000);

  /**
   * #15's acceptance criterion: a reader must see which DMN rule matched. The
   * engine evaluates the table (drive.test.ts / coverage-check prove that);
   * this is the part that only the mounted runner can show — that the matched
   * output reaches the inspector.
   */
  it("surfaces the matched DMN decision in the run inspector", async () => {
    const app = await renderExample(expenseDecision);
    await app.run();

    const decisions = document.querySelector(".decisions");
    expect(decisions).not.toBeNull();
    // The clear-approve default: the table decides it and the agent never runs.
    expect(decisions!.textContent).toContain("Evaluate expense policy");
    expect(decisions!.textContent).toContain("approved");
  }, 30_000);

  it("shows no decisions panel for a model without a business rule task", async () => {
    const app = await renderExample(orderProcess);
    await app.run();
    expect(document.querySelector(".decisions")).toBeNull();
  }, 30_000);

  /**
   * Run restarts a finished run rather than going dead, and Step has to do the
   * same. Disabling Step at completion looked harmless on the full page, where
   * a reader can press Reset first — but the embed autostarts, so by the time
   * anyone sees it the run is over and Step has never been usable at all.
   *
   * Asserting the click, not just the `disabled` prop: React reads `disabled`
   * from props rather than the DOM, so a Step that is merely enabled proves
   * nothing about whether pressing it does anything.
   */
  it("keeps Step usable after completion, starting a fresh run like Run does", async () => {
    const app = await renderExample(orderProcess);
    await app.run();
    expect(app.status()).toBe("Completed");

    const step = screen.getByRole("button", { name: "⏭ Step" });
    expect(step).toBeEnabled();

    fireEvent.click(step);

    // A fresh instance, stopped before its first job — so the trace has been
    // replaced by that start rather than still holding the last run.
    await waitFor(
      () => expect(app.trace().join("\n")).toMatch(/instance started/i),
      { timeout: 20_000 },
    );
    expect(app.trace().join("\n")).not.toMatch(/round handled/i);
    expect(app.status()).not.toBe("Completed");
    expect(app.trace().at(-1)).not.toContain("process instance completed");

    // The next Step dispatches the first round.
    await app.settle();
    fireEvent.click(screen.getByRole("button", { name: "⏭ Step" }));
    await waitFor(
      () => expect(app.trace().join("\n")).toMatch(/round handled/i),
      { timeout: 20_000 },
    );

    await app.settle();
  }, 40_000);
});

describe("ExampleRunner — pacing to the diagram's token walk", () => {
  // A line's arrival time: the panel shows newest first, so new rows are prepended.
  const watchTrace = () => {
    const seen: { text: string; at: number }[] = [];
    const observer = new MutationObserver((records) => {
      for (const r of records)
        for (const node of Array.from(r.addedNodes))
          if (node instanceof HTMLElement && node.parentElement?.classList.contains("timeline"))
            seen.push({ text: node.textContent ?? "", at: performance.now() });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return { seen, stop: () => observer.disconnect() };
  };

  // A broadcast activates both service tasks: two hops of the walk, longer
  // than a beat, so the next round must wait for the walk rather than a beat.
  it("waits for the walk after a signal broadcast before the next round", async () => {
    const app = await renderExample(learnSignalBroadcast);
    const watch = watchTrace();
    await app.run();
    watch.stop();

    const i = watch.seen.findIndex((s) => s.text.includes("broadcasting signal"));
    expect(i).toBeGreaterThan(-1);
    const next = watch.seen[i + 1];
    expect(next).toBeDefined();
    expect(next.at - watch.seen[i].at).toBeGreaterThanOrEqual(850);
  }, 40_000);

  // A run that stops on a human task breaks out of the loop early; it must
  // still hand the controls back only once the token has finished walking.
  it("hands back the controls with the token already at rest", async () => {
    const app = await renderExample(invoicePayment);
    await app.run();
    expect(app.status()).toBe("Fill out the form below");

    const marked = () =>
      Array.from(document.querySelectorAll(".diagram .nano-active[data-element-id]"))
        .map((el) => el.getAttribute("data-element-id"))
        .join(",");
    const atRelease = marked();
    expect(atRelease).not.toBe("");
    await new Promise((r) => setTimeout(r, 700));
    expect(marked()).toBe(atRelease);
  }, 40_000);

  // Submitting a task moves the token too; the next round used to start at once.
  it("waits for the walk after a human task is submitted", async () => {
    const app = await renderExample(invoicePayment);
    await app.run();
    const watch = watchTrace();
    await app.completeUserTask(() => {
      fireEvent.click(screen.getByText("Approve release"));
    });
    watch.stop();

    const i = watch.seen.findIndex((s) => s.text.startsWith("👤"));
    expect(i).toBeGreaterThan(-1);
    const next = watch.seen[i + 1];
    expect(next).toBeDefined();
    expect(next.at - watch.seen[i].at).toBeGreaterThanOrEqual(600);
  }, 40_000);

  // Step must not hand the controls back while the diagram is still walking.
  it("keeps Step locked until the start's walk has finished", async () => {
    await renderExample({
      ...expenseDecision,
      seed: expenseDecision.scenarios!.find((s) => s.label.startsWith("Clear reject"))!.variables,
    });
    const step = () => screen.getByRole("button", { name: "⏭ Step" });
    await waitFor(() => expect(step()).toBeEnabled(), { timeout: 20_000 });

    fireEvent.click(step());
    await waitFor(() => expect(screen.getByText(/instance started/)).toBeInTheDocument(), {
      timeout: 20_000,
    });
    const startedAt = performance.now();
    expect(step()).toBeDisabled();
    await waitFor(() => expect(step()).toBeEnabled(), { timeout: 20_000 });
    // Start, policy task, gateway, notify: four hops of 450ms.
    expect(performance.now() - startedAt).toBeGreaterThanOrEqual(1500);
  }, 40_000);
});

describe("ExampleRunner — a human task inside the agent's tool loop", () => {
  it("resumes the run after the task is completed, without a second press of Run", async () => {
    const app = await renderExample(invoicePayment);
    await app.run();

    // The agent called its release tool and the process is parked on the
    // reviewer, mid-loop.
    expect(app.status()).toBe("Fill out the form below");
    expect(app.trace().join("\n")).toContain("RequestPaymentRelease");

    await app.completeUserTask(() => {
      fireEvent.click(screen.getByText("Approve release"));
    });

    // The reported bug: completing the task moved the token but nothing drove
    // it, so the run sat at "Paused" with the payment unmade until the reader
    // pressed Run again. Nothing is pressed between here and the assertion.
    const trace = app.trace().join("\n");
    expect(trace).toContain("Release payment");
    expect(trace).toContain("scripted agent: done");
    expect(app.status()).toBe("Fill out the form below");
    expect(app.showsOutsideDiagram("Final compliance sign-off")).toBe(true);

    // Driving straight on left the next task's form holding the finished
    // task's answers: they were resubmitted with it, and its own required
    // decision could be skipped because the form still reported valid from
    // the previous one.
    expect(screen.getByRole("button", { name: "Complete task" })).toBeDisabled();
  }, 40_000);

  /**
   * Run and Step *resume* an open run, and the drive loop breaks the moment it
   * sees an open user task — so while the form is up they can only re-enter
   * the loop and break again. Left enabled, Run read as available, did
   * nothing, and appended a second "waiting for a human" line for doing it.
   */
  it("offers no Run or Step while the form is the only thing that can advance", async () => {
    const app = await renderExample(invoicePayment);
    await app.run();

    expect(app.status()).toBe("Fill out the form below");
    expect(screen.getByRole("button", { name: /Run/ })).toBeDisabled();
    expect(screen.getByRole("button", { name: /Step/ })).toBeDisabled();
    // Reset is the way out of a parked run, so it must stay live.
    expect(screen.getByRole("button", { name: /Reset/ })).toBeEnabled();

    // And completing the form still hands the run back — the guard must not
    // have stranded it.
    await app.completeUserTask(() => {
      fireEvent.click(screen.getByText("Approve release"));
    });
    expect(app.trace().join("\n")).toContain("Release payment");
  }, 40_000);

  it("does not accuse the agent of giving up while it is still asking", async () => {
    // `invoicePayment` declares no `requiredTools`, so the alert could never
    // fire for it and asserting its absence would prove nothing. Mark a tool
    // the clean-match scenario legitimately skips — a USD invoice needs no
    // currency conversion — so the alert *would* show if the mid-loop
    // suppression were removed.
    const app = await renderExample({
      ...invoicePayment,
      requiredTools: ["ConvertCurrency"],
    });
    await app.run();

    // The open task *is* the agent's tool call: it hasn't finished, it's
    // asking, so there is nothing yet to judge it on.
    expect(app.showsOutsideDiagram("Review release request")).toBe(true);
    expect(screen.queryByText(ALERT)).not.toBeInTheDocument();
  }, 30_000);
});

describe("ExampleRunner — a process only a message can start", () => {
  it("publishes the start message and drives the instance it creates", async () => {
    const app = await renderExample(messageStartFixture);
    await app.run();

    // No `createInstance` path exists for this model: if the runner didn't
    // publish, or published a key the subscription didn't resolve to, nothing
    // would exist to drive.
    const trace = app.trace().join("\n");
    expect(trace).toContain('publishing "alert-raised"');
    expect(trace).toContain("CASE-1");
    expect(app.status()).toBe("Fill out the form below");
    expect(app.showsOutsideDiagram("Triage the alert")).toBe(true);
  }, 30_000);

  it("offers the boundary event while parked on a human task, payload and all", async () => {
    const app = await renderExample(messageStartFixture);
    await app.run();

    // The interrupt arrives while the process waits on a person — there is no
    // held job to hang the choice off, which is the case this has to cover.
    expect(app.status()).toBe("Fill out the form below");
    // And the drive loop must not have fired it on its own on the way here;
    // that would interrupt every run.
    expect(app.trace().join("\n")).not.toContain("alert-withdrawn");

    fireEvent.click(screen.getByRole("button", { name: "🚫 The alert is withdrawn" }));
    await app.settle();

    expect(app.trace().join("\n")).toContain('published "alert-withdrawn"');
    // Publishing an empty payload would route the boundary but leave the case
    // reading exactly as it did before the event — so the interrupted path
    // reads the payload back rather than trusting the correlation happened.
    expect(app.trace().join("\n")).toContain("withdrawn by monitoring");
    expect(app.status()).toBe("Completed");
  }, 30_000);

  it("tells two boundary events on the same activity apart", async () => {
    // The engine reports both subscriptions against `Triage`, so resolving by
    // the attached activity alone binds both buttons to whichever subscription
    // comes first. Asserting only one direction would pass or fail on that
    // ordering — check both, so one of them is wrong however they're ordered.
    const fire = async (label: string) => {
      const app = await renderExample(messageStartFixture);
      await app.run();
      fireEvent.click(screen.getByRole("button", { name: label }));
      await app.settle();
      const trace = app.trace().join("\n");
      cleanup();
      return trace;
    };

    const withdrawn = await fire("🚫 The alert is withdrawn");
    expect(withdrawn).toContain('published "alert-withdrawn"');
    expect(withdrawn).toContain("withdrawn by monitoring");
    expect(withdrawn).not.toContain("alert-escalated");

    const escalated = await fire("🔺 The alert is escalated");
    expect(escalated).toContain('published "alert-escalated"');
    expect(escalated).toContain("escalated to tier-2");
    expect(escalated).not.toContain("alert-withdrawn");
  }, 40_000);
});

describe("ExampleRunner — a timer racing an event the reader was offered", () => {
  /**
   * An SLA timer bounding a wait for an external reply is a race, and the
   * engine reports the settled round as `"timers"` whenever one is due — so a
   * drive loop that fast-forwards on that reason alone decides the race every
   * run, and the reply can never arrive in time to be sent. That made three of
   * `credit-line-increase`'s four scenarios unreachable in the runner while
   * its engine test, which correlates directly, stayed green.
   */
  it("parks on the race instead of fast-forwarding the clock", async () => {
    const app = await renderExample(creditLineIncrease);
    await app.run();

    const trace = app.trace().join("\n");
    expect(trace).toContain("or send the event below");
    // The mechanism, not the outcome: "the timer didn't fire" would also be
    // satisfied by the run never reaching the wait at all.
    expect(trace).toContain("now waiting for the reply");
    expect(trace).not.toContain("the clock advanced");
    expect(app.status()).toBe("Paused");
  }, 30_000);

  it("lets the reply through, and still lapses into the timeout if it never comes", async () => {
    const app = await renderExample(creditLineIncrease);
    await app.run();

    fireEvent.click(screen.getByRole("button", { name: "📨 The credit bureau replies" }));
    await app.settle();

    const trace = app.trace().join("\n");
    expect(trace).toContain('published "bureau-report"');
    expect(trace).toContain("bureau replied");
    // The reply beat the SLA, so the timeout note must never have been written.
    expect(trace).not.toContain("No credit bureau reply within the SLA window");
  }, 30_000);

  /**
   * The other side of the race, and the reason it can't just fast-forward: the
   * documented "leave it and let the SLA lapse" outcome has to be reachable
   * from the UI. With only the reply button it wasn't — pressing Run re-parked
   * on the same guard — so the escalation scenario was browser-unreachable.
   */
  it("lets the reader lapse the SLA into the escalation path", async () => {
    const app = await renderExample(creditLineIncrease);
    await app.run();

    fireEvent.click(screen.getByRole("button", { name: "⏳ Let the timer lapse" }));
    await app.settle();

    const trace = app.trace().join("\n");
    expect(trace).toContain("the clock advanced");
    // The timeout reports back into the agent's loop, which then escalates to a
    // human — the outcome the "bureau never answers" scenario promises.
    expect(trace).toContain("No credit bureau reply within the SLA window");
    expect(app.status()).toBe("Fill out the form below");
    expect(app.showsOutsideDiagram("Escalate to underwriting ops")).toBe(true);
    // And the reply button is gone — the race is resolved the other way now.
    expect(screen.queryByRole("button", { name: "📨 The credit bureau replies" })).toBeNull();
  }, 30_000);
});

describe("ExampleRunner — when the agent really does give up early", () => {
  /** Declares itself done on turn one, so no tool ever runs. */
  const GIVES_UP = `async () => ({ completionConditionFulfilled: true })`;

  it("warns the reviewer that a required tool never ran", async () => {
    const app = await renderExample({
      ...seedExportCompliance,
      scriptedAgent: GIVES_UP,
    });
    await app.run();

    // The process took the gateway's default path to the human task with
    // `RecordComplianceDecision` — the example's one `requiredTools` entry —
    // never having run, which is exactly what the warning is for.
    expect(app.status()).toBe("Fill out the form below");
    expect(screen.getByText(ALERT)).toBeInTheDocument();
  }, 30_000);

  it("stays quiet when the required tool did run", async () => {
    const app = await renderExample(seedExportCompliance);
    await app.run();

    expect(app.trace().join("\n")).toContain("Record compliance decision");
    expect(screen.queryByText(ALERT)).not.toBeInTheDocument();
  }, 40_000);
});

describe("ExampleRunner — a tour step pointing at a collapsible panel", () => {
  /**
   * This example's last step describes the variables panel, which the reader
   * can collapse from under it. driver.js measures a step's target when the
   * step opens and then only on window resize/scroll, so without this the
   * highlight and popover stay where the expanded panel used to be.
   */
  it("re-measures the tour when the variables panel is toggled under it", async () => {
    await renderExample(seedExportCompliance);
    const panel = () => screen.getByText("Instance variables").closest("details")!;
    const stored = () => localStorage.getItem("wdf:section:v2:variables");
    expect(panel().open).toBe(false);
    expect(stored()).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: /take the tour/i }));
    await waitFor(() =>
      expect(screen.getByRole("button", { name: /touring/i })).toBeInTheDocument(),
    );

    // Starting the tour opens the panel: a step describes what it holds, and
    // driver.js would otherwise highlight a collapsed summary.
    await waitFor(() => expect(panel().open).toBe(true));
    // But taking a tour is not a disclosure choice — it must not overwrite a
    // reader's saved preference and leave every later visit expanded.
    expect(stored()).toBeNull();

    tourHandle.refresh.mockClear();
    // jsdom implements no activation behaviour for <summary>, so a click on it
    // toggles nothing. Drive the state change the browser would instead: set
    // `open`, then fire the toggle event it dispatches after.
    panel().open = false;
    fireEvent(panel(), new Event("toggle"));

    expect(tourHandle.refresh).toHaveBeenCalledTimes(1);
    // A real toggle is still a choice, and still persists.
    expect(stored()).toBe("0");
  }, 30_000);
});

describe("ExampleRunner — the example input toggle", () => {
  /**
   * The panel it opens renders the start form when the model declares one, and
   * a read-only `<pre>` when it doesn't — so a single "Edit input" label
   * promises an action half the examples can't perform.
   */
  it("offers to edit only where there is a form to edit", async () => {
    await renderExample(seedExportCompliance);
    expect(screen.getByRole("button", { name: /edit input/i })).toBeInTheDocument();

    cleanup();

    // order-process has no start-event form, so its payload is display-only.
    await renderExample(orderProcess);
    expect(screen.getByRole("button", { name: /view input/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /edit input/i })).not.toBeInTheDocument();
  }, 40_000);

  /**
   * The open/closed choice was stored under one key for every example, and
   * localStorage outlives the remount when the reader switches examples — so
   * opening one example's input editor opened the next one's too.
   */
  it("keeps one example's open input editor from opening another's", async () => {
    window.localStorage.clear();
    await renderExample(seedExportCompliance, { compact: true });
    const toggle = () => screen.getByRole("button", { name: /edit input/i });
    expect(toggle()).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle());
    expect(toggle()).toHaveAttribute("aria-expanded", "true");

    cleanup();

    await renderExample(expenseDecision, { compact: true });
    expect(toggle()).toHaveAttribute("aria-expanded", "false");
    expect(document.getElementById("start-input-editor")).not.toBeVisible();
  }, 40_000);

  // Every example is seeded, so its start form is valid on arrival and the
  // full page has no reason to open it any more than the embed does.
  it("starts the input editor collapsed on the full page", async () => {
    window.localStorage.clear();
    await renderExample(seedExportCompliance);
    expect(screen.getByRole("button", { name: /edit input/i })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  }, 40_000);

  // The one reason to open it unasked: a required field is empty, so Run is
  // disabled, and a disabled Run with a hidden form is a dead end.
  it("opens the input editor when the start form blocks Run", async () => {
    window.localStorage.clear();
    await renderExample({ ...bankSupport, seed: {}, scenarios: undefined });
    await waitFor(() =>
      expect(screen.getByRole("button", { name: /edit input/i })).toHaveAttribute(
        "aria-expanded",
        "true",
      ),
    );
    expect(screen.getByRole("button", { name: "▶ Run" })).toBeDisabled();
  }, 40_000);

  // bank-support's four processes always warn which one is primary. That's
  // for whoever edits the model — compact has nothing to edit.
  it("shows model warnings on the full page but not in the compact embed", async () => {
    await renderExample(bankSupport);
    expect(screen.getByText("Heads up")).toBeInTheDocument();

    cleanup();

    await renderExample(bankSupport, { compact: true });
    expect(screen.queryByText("Heads up")).not.toBeInTheDocument();
  }, 40_000);

  // Edited input is where the scripted agent's fixed rules show: what they
  // weren't written for falls through to human review, which reads as a bug
  // unless it's said up front. Each surface names the way out it actually has.
  it("warns that the scripted agent only knows the rules it was written with", async () => {
    await renderExample(seedExportCompliance);
    const editor = document.getElementById("start-input-editor")!;
    expect(editor).toHaveTextContent(/scripted agent follows fixed rules/i);
    expect(editor).toHaveTextContent(/switch the agent brain to a model/i);

    cleanup();

    await renderExample(seedExportCompliance, { compact: true });
    const embedEditor = document.getElementById("start-input-editor")!;
    expect(embedEditor).toHaveTextContent(/scripted agent follows fixed rules/i);
    expect(embedEditor).toHaveTextContent(/open the editable version/i);
    expect(embedEditor).not.toHaveTextContent(/switch the agent brain/i);
  }, 40_000);

  it("says nothing about an agent where there isn't one", async () => {
    await renderExample(orderProcess);
    expect(document.getElementById("start-input-editor")).not.toHaveTextContent(
      /scripted agent/i,
    );
  }, 40_000);

  /**
   * Reader feedback: "it was not completely clear to me that the EXAMPLE
   * SHIPMENT was the actual input for the process instance". A later round
   * asked for the instruction sentence that answered it to go. What makes the
   * connection now is grouping: the input and ▶ Run share one region.
   */
  it("puts the input and Run in one start region, with no instruction sentence", async () => {
    await renderExample(seedExportCompliance);
    const region = screen.getByRole("region", { name: "Start a process instance" });
    expect(region).toContainElement(screen.getByRole("group", { name: "Example shipment" }));
    expect(region).toContainElement(screen.getByRole("button", { name: "▶ Run" }));
    expect(
      screen.queryByText(/pick the input this process instance starts with/i),
    ).not.toBeInTheDocument();
  }, 40_000);

  /**
   * order-process has no `scenarios` and no `scenariosLabel`, so it exercises
   * both fallbacks: the default heading, and no Custom option — a lone one
   * would be a picker with nothing to pick from.
   */
  it("offers no Custom option when there is nothing to pick", async () => {
    await renderExample(orderProcess);
    const region = screen.getByRole("region", { name: "Start a process instance" });
    expect(region).toHaveTextContent("Example input");
    expect(screen.queryByText("✎ Custom")).not.toBeInTheDocument();
  }, 40_000);

  /**
   * `scenarios: []` is a truthy empty array, so keying the picker off the
   * property rather than its length rendered an empty labelled group and told
   * the reader to pick from it.
   */
  it("treats an empty scenarios array as no picker at all", async () => {
    await renderExample({ ...orderProcess, scenarios: [] });
    expect(
      screen.queryByRole("group", { name: /example input/i }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("✎ Custom")).not.toBeInTheDocument();
  }, 40_000);

  /**
   * Custom is a choice, not "whatever matches no preset": picking it selects
   * it even while its input is still identical to the preset it started from.
   */
  it("selects Custom even when its input still matches a preset", async () => {
    await renderExample(bankSupport);
    const custom = () => screen.getByRole("button", { name: "Custom — edit input" });
    const loan = () => screen.getByRole("button", { name: /^Loan question/ });
    expect(loan()).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(custom());

    expect(custom()).toHaveAttribute("aria-pressed", "true");
    expect(loan()).toHaveAttribute("aria-pressed", "false");

    // Selection is announced separately from whether the editor is open.
    fireEvent.click(screen.getByRole("button", { name: "Done" }));
    expect(custom()).toHaveAttribute("aria-expanded", "false");
    expect(custom()).toHaveAttribute("aria-pressed", "true");
  }, 40_000);

  it("closes the editor on a preset, and Custom brings the reader's text back", async () => {
    window.localStorage.clear();
    await renderExample(bankSupport);
    const custom = () => screen.getByRole("button", { name: "Custom — edit input" });
    const field = () =>
      screen.getByRole("textbox", { name: /customer request/i, hidden: true }) as HTMLTextAreaElement;

    fireEvent.click(custom());
    expect(custom()).toHaveAttribute("aria-expanded", "true");
    // form-js debounces a textarea and flushes on blur.
    await waitFor(() => {
      fireEvent.input(field(), { target: { value: "my own words" } });
      fireEvent.blur(field());
      expect(screen.getByText("my own words")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: /^Card question/ }));
    expect(custom()).toHaveAttribute("aria-expanded", "false");
    expect(custom()).toHaveAttribute("aria-pressed", "false");
    await waitFor(() => expect(field().value).not.toBe("my own words"));

    fireEvent.click(custom());
    expect(custom()).toHaveAttribute("aria-pressed", "true");
    await waitFor(() => expect(field().value).toBe("my own words"));
  }, 40_000);

  /**
   * An empty `scenariosLabel` is a valid string, and `??` would let it through
   * as a blank heading — taking the pills group's accessible name with it,
   * since the group is `aria-labelledby` that element.
   */
  it("falls back to the default heading when the label is empty", async () => {
    await renderExample({ ...seedExportCompliance, scenariosLabel: "" });
    expect(
      screen.getByRole("group", { name: "Example input" }),
    ).toBeInTheDocument();
  }, 40_000);
});

describe("ExampleRunner — the code panel", () => {
  it("says editing is experimental and how to get the original back", async () => {
    await renderExample(orderProcess);
    const code = screen.getByRole("button", { name: /^Code/ });
    expect(code).toHaveTextContent(/editing is experimental and can break the example/i);
    expect(code).toHaveTextContent(/reload the page to get the original back/i);
  }, 40_000);
});

describe("ExampleRunner — changing the example input mid-run", () => {
  /**
   * The scenario pills and the start form are disabled while a run is in
   * flight, because neither can reach an instance that has already started.
   * Silently, that reads as a pill that just doesn't work: the reader picks
   * the other shipment, presses Run, and gets the previous one again.
   */
  it("says why the input is locked, and unlocks it when the run ends", async () => {
    const app = await renderExample(seedExportCompliance);
    // Re-queried every time: the pills re-render as the run's state changes,
    // and a node captured once goes stale.
    const flagged = () => screen.getByRole("button", { name: /likely flagged/i });
    const custom = () => screen.getByRole("button", { name: "Custom — edit input" });
    const lock = () => screen.queryByText(/locked while this run/i);

    expect(flagged()).toBeEnabled();
    expect(custom()).toBeEnabled();
    expect(lock()).not.toBeInTheDocument();

    // This example has a start form, so Run stays disabled until the form has
    // loaded and validated — clicking before that does nothing, silently.
    const run = screen.getByRole("button", { name: "▶ Run" });
    await waitFor(() => expect(run).toBeEnabled(), { timeout: 20_000 });
    fireEvent.click(run);

    await waitFor(() => expect(lock()).toBeInTheDocument());
    expect(flagged()).toBeDisabled();
    expect(custom()).toBeDisabled();

    await app.settle();

    expect(flagged()).toBeEnabled();
    expect(custom()).toBeEnabled();
    expect(lock()).not.toBeInTheDocument();
  }, 40_000);

  /**
   * `step()` sets only `stepping` before awaiting `beginRun()`, and for the
   * length of that await the snapshot is still null — so a lock keyed on
   * `running || canResume` alone leaves the input live after the seed has
   * already been captured.
   */
  it("locks the input for Step too, not just Run", async () => {
    const app = await renderExample(seedExportCompliance);
    const flagged = () => screen.getByRole("button", { name: /likely flagged/i });

    const step = screen.getByRole("button", { name: "⏭ Step" });
    await waitFor(() => expect(step).toBeEnabled(), { timeout: 20_000 });
    fireEvent.click(step);

    // Its own wording, not the Run one: Reset is disabled mid-step, so the
    // hint must not send the reader there. Both assertions run in one tick —
    // the hint element is reused, and its text changes the moment the step
    // lands and `canResume` takes over.
    await waitFor(
      () => {
        expect(
          screen.getByText(/locked while this step finishes/i),
        ).not.toHaveTextContent(/Reset/);
      },
      { timeout: 20_000 },
    );
    expect(flagged()).toBeDisabled();

    await app.settle();
  }, 40_000);

  /**
   * The case that actually bit: a run that parks on a human task is still
   * *resumable*, so the next Run continues that instance instead of starting a
   * new one — and the input, which only ever seeds a new instance, reaches
   * nothing. Before this the pills stayed live, so picking the other shipment
   * moved the pill and the form and then changed nothing at all. A live model
   * parks far more often than the scripted stand-in, which is why this showed
   * up under Qwen and not under Scripted.
   */
  it("stays locked while a parked run is still resumable", async () => {
    const app = await renderExample(seedExportCompliance);
    const cleared = () => screen.getByRole("button", { name: /likely cleared/i });

    // The flagged shipment ends on the human task rather than completing.
    fireEvent.click(screen.getByRole("button", { name: /likely flagged/i }));
    await app.run();

    expect(app.status()).toBe("Fill out the form below");
    expect(cleared()).toBeDisabled();
    expect(screen.getByText(/still open — press ↺ Reset/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "↺ Reset" }));

    await waitFor(() => expect(cleared()).toBeEnabled());
    expect(screen.queryByText(/still open — press ↺ Reset/i)).not.toBeInTheDocument();
  }, 40_000);
});
