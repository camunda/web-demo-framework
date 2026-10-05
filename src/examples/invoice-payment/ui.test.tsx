import { cleanup, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { renderExample } from "../../framework/testing/renderExample";
import { invoicePayment } from "./index";

vi.mock("@nanobpm/bojtos-kit", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@nanobpm/bojtos-kit")>();
  const { loadLeanWasm } = await import("../../framework/testing/leanWasm");
  return {
    ...actual,
    createBojtosSession: (opts?: Record<string, unknown>) =>
      actual.createBojtosSession({ wasm: loadLeanWasm(), ...opts }),
  };
});

vi.mock("../../framework/sandbox", () => ({
  runHandlerSandboxed: (source: string, job: unknown, helpers: unknown) =>
    // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
    Promise.resolve(new Function(`"use strict"; return (${source});`)()(job, helpers)),
  runAgentSandboxed: (source: string, job: unknown) =>
    // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
    Promise.resolve(new Function(`"use strict"; return (${source});`)()(job)),
}));

afterEach(cleanup);

describe("invoice-payment in the runner", () => {
  it("prefills the release form from the agent's proposal, which only exists in the tool's local scope", async () => {
    const app = await renderExample(invoicePayment);

    await app.run();

    expect(app.status()).toBe("Waiting for a human");
    // The mechanism: the proposal reached the form without ever being a root variable.
    expect(app.variables()).not.toHaveProperty("agentProposedAmountUSD");
    expect(app.variables()).not.toHaveProperty("approvedAmountUSD");
    const amount = await screen.findByLabelText(/Amount to approve/);
    expect((amount as HTMLInputElement).value).toBe("4200");
    const form = amount.closest("form")?.textContent ?? "";
    expect(form).toContain("Agent wants to release: 4200 USD");
    expect(form).toContain("Invoice matches the PO within 2%.");
  }, 30_000);
});
