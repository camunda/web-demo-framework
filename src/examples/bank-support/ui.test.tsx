import { cleanup, fireEvent, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { renderExample } from "../../framework/testing/renderExample";
import { bankSupport } from "./index";

// The runner boots the engine itself, and `createBojtosSession()` resolves the
// wasm binary through `import.meta.url` — which only works under Vite. Hand it
// the bytes; everything else is the real thing.
vi.mock("@nanobpm/bojtos-kit", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@nanobpm/bojtos-kit")>();
  const { loadLeanWasm } = await import("../../framework/testing/leanWasm");
  return {
    ...actual,
    createBojtosSession: (opts?: Record<string, unknown>) =>
      actual.createBojtosSession({ wasm: loadLeanWasm(), ...opts }),
  };
});

// jsdom runs no scripts in a sandboxed iframe, so the sandbox is replaced with
// a direct evaluator — the same substitution ExampleRunner's own tests make.
vi.mock("../../framework/sandbox", () => ({
  runHandlerSandboxed: (source: string, job: unknown, helpers: unknown) =>
    // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
    Promise.resolve(new Function(`"use strict"; return (${source});`)()(job, helpers)),
  runAgentSandboxed: (source: string, job: unknown) =>
    // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
    Promise.resolve(new Function(`"use strict"; return (${source});`)()(job)),
}));

// Queries below are document-wide and this repo doesn't enable RTL's automatic
// cleanup, so a second mounted runner would make them ambiguous.
afterEach(cleanup);

const withRequest = (customerRequest: string) => ({
  ...bankSupport,
  seed: { customerRequest },
});

describe("bank-support in the runner", () => {
  it("runs a two-specialist request to completion from one press of Run", async () => {
    const app = await renderExample(
      withRequest(
        "Please check whether DE89370400440532013000 is a valid IBAN for my transfer, and also tell me what my monthly payment would look like on a $200,000 loan at 6% over 30 years.",
      ),
    );

    await app.run();

    const trace = app.trace().join("\n");
    // Both specialists ran, and the trace names the host each turn belongs to —
    // which is the only way a reader can tell the three agents apart.
    expect(trace).toContain("LoanSupportAgent");
    expect(trace).toContain("AccountSupportAgent");
    expect(trace).toContain("Calculate loan payment");
    expect(trace).toContain("Validate IBAN");
    expect(app.status()).toBe("Completed");
  }, 30_000);

  it("parks on the review task when a specialist could not resolve its part", async () => {
    const app = await renderExample(
      withRequest(
        "Can you confirm whether DE89370400440532013001 is a valid account number before I set up a transfer?",
      ),
    );

    await app.run();

    expect(app.status()).toBe("Waiting for a human");
    expect(app.showsOutsideDiagram("Review escalated case")).toBe(true);

    await app.completeUserTask(() => {
      fireEvent.click(screen.getByText("Resolved by human"));
    });

    expect(app.status()).toBe("Completed");
  }, 30_000);
});
