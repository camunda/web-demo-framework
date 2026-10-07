import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { renderExample } from "../../framework/testing/renderExample";
import { fraudAlertTriage } from "./index";

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

const CLEARLY_ESCALATED = fraudAlertTriage.scenarios!.find((s) =>
  s.label.startsWith("Clearly escalated"),
)!.variables;

const notes = () => screen.getByLabelText(/Case closing notes/) as HTMLTextAreaElement;
const completeButton = () => screen.getByRole("button", { name: "Complete task" });
// form-js debounces a textarea and flushes on blur, which a real click on
// "Complete task" causes and `fireEvent.click` doesn't.
const typeNotes = (value: string) => {
  fireEvent.input(notes(), { target: { value } });
  fireEvent.blur(notes());
};

describe("fraud-alert-triage in the runner", () => {
  it("lets the next handoff in the same case be completed, and submits what it shows (#145)", async () => {
    const app = await renderExample({ ...fraudAlertTriage, seed: CLEARLY_ESCALATED });
    await app.run();
    expect(app.status()).toBe("Fill out the form below");

    // The agent has finished, so the second alert lands in the same case and
    // opens a second handoff task there, queued behind this one.
    fireEvent.click(screen.getByRole("button", { name: /A second alert arrives/ }));
    await app.settle();

    await app.completeUserTask(() => {
      typeNotes("first answer");
    });

    expect(app.status()).toBe("Fill out the form below");
    await waitFor(() =>
      expect(completeButton().closest(".panel")?.textContent).toMatch(/Current alert:\s*ALERT-6605/),
    );
    // The instance now holds caseClosedNotes, so the form shows it, as Tasklist
    // would. What was broken: the form never re-validated for the new task.
    expect(notes().value).toBe("first answer");
    await waitFor(() => expect(completeButton()).toBeEnabled());

    await app.completeUserTask(() => {
      typeNotes("second answer");
    });
    expect(app.trace().join("\n")).toContain('👤 {"caseClosedNotes":"second answer"}');
  }, 60_000);
});
