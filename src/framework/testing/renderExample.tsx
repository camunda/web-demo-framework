import { expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ExampleRunner } from "../ui/ExampleRunner";
import type { ExampleDef } from "../types";

/**
 * Mount a real `ExampleRunner` over a real example and drive it the way a
 * reader does — press Run, fill the form, press Complete task.
 *
 * This covers what neither other test layer can. The engine tests
 * (`src/examples/*​/engine.test.ts`) drive `dispatchWorkers` themselves, so
 * they prove what the *model* does but say nothing about whether the runner
 * ever calls it — the run stalling after every human task was invisible to
 * them precisely because the test did the draining the UI had forgotten to
 * do. The unit tests cover pure functions. This is the seam between them: the
 * drive loop, and the transitions between wait states.
 *
 * A test file using this must mock the engine's wasm resolution, because
 * `createBojtosSession()` resolves the binary through `import.meta.url`, which
 * only works under Vite. See `ExampleRunner.test.tsx` for the four-line mock.
 *
 * Runs take real time — the drive loop paces itself with a beat between rounds
 * so a reader can watch it — so budget seconds, not milliseconds.
 */

/** Generous by design: a run is paced for a human watching it, not for CI. */
const RUN_TIMEOUT = 20_000;

/** Every state the status badge can show. */
const STATUSES = [
  "Booting engine…",
  "Engine error",
  "Ready",
  "Running…",
  "Stepping…",
  "Incident",
  "Waiting for a human",
  "Completed",
  "Paused",
] as const;

export interface RunnerHarness {
  /** The status badge's current text. */
  status(): string;
  /** Every line in the Activity panel, in order. */
  trace(): string[];
  /** The instance variables the page is currently showing. */
  variables(): unknown;
  /**
   * Whether `text` appears anywhere outside the rendered diagram. bpmn-js
   * paints every element's name into the SVG, so a plain `getByText` for a
   * task label matches twice and throws.
   */
  showsOutsideDiagram(text: string): boolean;
  /** Wait until the run is no longer in flight. */
  settle(): Promise<void>;
  /** Press Run, then wait for the loop to settle. */
  run(): Promise<void>;
  /**
   * Complete the open human task. `fill` runs first, to answer whatever the
   * form requires.
   */
  completeUserTask(fill?: () => void): Promise<void>;
}

export async function renderExample(example: ExampleDef): Promise<RunnerHarness> {
  render(<ExampleRunner example={example} />);

  const status = () => {
    for (const text of STATUSES) {
      if (screen.queryAllByText(text).length > 0) return text;
    }
    return "";
  };

  const settle = () =>
    waitFor(
      () => {
        const now = status();
        expect(
          ["", "Booting engine…", "Running…", "Stepping…"].includes(now),
          `still in flight: "${now}"`,
        ).toBe(false);
      },
      { timeout: RUN_TIMEOUT },
    );

  const trace = () => {
    const timeline = document.querySelector(".timeline");
    // `.log-empty` is the "Press Run or Step to start." placeholder — a row in
    // the DOM, but not a line of the run.
    if (!timeline || timeline.querySelector(".log-empty")) return [];
    return Array.from(timeline.children)
      .map((el) => (el.textContent ?? "").trim())
      .filter(Boolean);
  };

  await settle();

  return {
    status,
    trace,
    settle,
    variables() {
      const el = document.querySelector(".vars");
      try {
        return JSON.parse(el?.textContent ?? "{}");
      } catch {
        return {};
      }
    },
    showsOutsideDiagram(text: string) {
      return screen
        .queryAllByText(text)
        .some((el) => !el.closest(".diagram, svg"));
    },
    async run() {
      const button = await screen.findByRole("button", { name: "▶ Run" });
      // An example with a start form can't Run until the form has loaded and
      // validated — clicking a disabled button does nothing, silently.
      await waitFor(() => expect(button).toBeEnabled(), { timeout: RUN_TIMEOUT });
      fireEvent.click(button);
      // Wait for the loop to actually start before waiting for it to stop —
      // the click schedules React state, so reading the badge straight after
      // still says "Ready" and `settle` would return before anything ran.
      await waitFor(() => expect(trace().length).toBeGreaterThan(0), {
        timeout: RUN_TIMEOUT,
      });
      await settle();
    },
    async completeUserTask(fill) {
      const button = await screen.findByRole("button", { name: "Complete task" });
      fill?.();
      await waitFor(() => expect(button).toBeEnabled(), { timeout: RUN_TIMEOUT });
      const before = trace().length;
      fireEvent.click(button);
      await waitFor(() => expect(trace().length).toBeGreaterThan(before), {
        timeout: RUN_TIMEOUT,
      });
      await settle();
    },
  };
}
