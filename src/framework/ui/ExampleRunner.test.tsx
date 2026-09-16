import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import { renderExample } from "../testing/renderExample";
import { messageStartFixture } from "../testing/messageStartFixture";
import { orderProcess } from "../../examples/order-process";
import { invoicePayment } from "../../examples/invoice-payment";
import { seedExportCompliance } from "../../examples/seed-export-compliance";

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
});

describe("ExampleRunner — a human task inside the agent's tool loop", () => {
  it("resumes the run after the task is completed, without a second press of Run", async () => {
    const app = await renderExample(invoicePayment);
    await app.run();

    // The agent called its release tool and the process is parked on the
    // reviewer, mid-loop.
    expect(app.status()).toBe("Waiting for a human");
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
    expect(app.status()).toBe("Waiting for a human");
    expect(app.showsOutsideDiagram("Final compliance sign-off")).toBe(true);

    // Driving straight on left the next task's form holding the finished
    // task's answers: they were resubmitted with it, and its own required
    // decision could be skipped because the form still reported valid from
    // the previous one.
    expect(screen.getByRole("button", { name: "Complete task" })).toBeDisabled();
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
    expect(app.status()).toBe("Waiting for a human");
    expect(app.showsOutsideDiagram("Triage the alert")).toBe(true);
  }, 30_000);

  it("offers the boundary event while parked on a human task, payload and all", async () => {
    const app = await renderExample(messageStartFixture);
    await app.run();

    // The interrupt arrives while the process waits on a person — there is no
    // held job to hang the choice off, which is the case this has to cover.
    expect(app.status()).toBe("Waiting for a human");
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
    expect(app.status()).toBe("Waiting for a human");
    expect(screen.getByText(ALERT)).toBeInTheDocument();
  }, 30_000);

  it("stays quiet when the required tool did run", async () => {
    const app = await renderExample(seedExportCompliance);
    await app.run();

    expect(app.trace().join("\n")).toContain("Record compliance decision");
    expect(screen.queryByText(ALERT)).not.toBeInTheDocument();
  }, 40_000);
});

describe("ExampleRunner — a tour step pointing at a collapsible panel", () => {  /**
   * This example's last step describes the variables panel, which the reader
   * can collapse from under it. driver.js measures a step's target when the
   * step opens and then only on window resize/scroll, so without this the
   * highlight and popover stay where the expanded panel used to be.
   */
  it("re-measures the tour when the variables panel is toggled under it", async () => {
    await renderExample(seedExportCompliance);
    fireEvent.click(screen.getByRole("button", { name: /take the tour/i }));
    await waitFor(() =>
      expect(screen.getByRole("button", { name: /touring/i })).toBeInTheDocument(),
    );

    // Starting the tour opens the panel itself, so measure from there.
    tourHandle.refresh.mockClear();
    // jsdom implements no activation behaviour for <summary>, so a click on it
    // toggles nothing. Drive the state change the browser would instead: set
    // `open`, then fire the toggle event it dispatches after.
    const panel = screen.getByText("Instance variables").closest("details")!;
    panel.open = false;
    fireEvent(panel, new Event("toggle"));

    expect(tourHandle.refresh).toHaveBeenCalledTimes(1);
  }, 30_000);
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
    const lock = () => screen.queryByText(/locked while this run/i);

    expect(flagged()).toBeEnabled();
    expect(lock()).not.toBeInTheDocument();

    // This example has a start form, so Run stays disabled until the form has
    // loaded and validated — clicking before that does nothing, silently.
    const run = screen.getByRole("button", { name: "▶ Run" });
    await waitFor(() => expect(run).toBeEnabled(), { timeout: 20_000 });
    fireEvent.click(run);

    await waitFor(() => expect(lock()).toBeInTheDocument());
    expect(flagged()).toBeDisabled();

    await app.settle();

    expect(flagged()).toBeEnabled();
    expect(lock()).not.toBeInTheDocument();
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

    expect(app.status()).toBe("Waiting for a human");
    expect(cleared()).toBeDisabled();
    expect(screen.getByText(/still open — press ↺ Reset/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "↺ Reset" }));

    await waitFor(() => expect(cleared()).toBeEnabled());
    expect(screen.queryByText(/still open — press ↺ Reset/i)).not.toBeInTheDocument();
  }, 40_000);
});
