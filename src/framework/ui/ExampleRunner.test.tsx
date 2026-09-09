import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen } from "@testing-library/react";
import { renderExample } from "../testing/renderExample";
import { orderProcess } from "../../examples/order-process";
import { invoicePayment } from "../../examples/invoice-payment";
import { seedExportCompliance } from "../../examples/seed-export-compliance";

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
    const app = await renderExample(invoicePayment);
    await app.run();

    // The open task *is* the agent's tool call. Two of its other tools haven't
    // run and shouldn't have — a USD invoice needs no currency conversion, and
    // a clean match needs no dispute notice.
    expect(app.showsOutsideDiagram("Review release request")).toBe(true);
    expect(screen.queryByText(ALERT)).not.toBeInTheDocument();
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
