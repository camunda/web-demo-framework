import { runInSandbox } from "./run";

/**
 * A live, in-browser demonstration that the sandbox boundary actually holds —
 * run it yourself, don't just read the code. There is no automated CI for
 * this yet (see docs/security.md): jsdom, the DOM implementation Node-based
 * test runners use, does not implement `iframe sandbox` origin isolation at
 * all, so a "unit test" run under jsdom would pass even with the boundary
 * completely broken. A real browser is the only thing that enforces this.
 *
 * How to run it:
 *   1. `npm run dev`, open the page, open the browser devtools console.
 *   2. `const { runSandboxSelfTest } = await import("/src/framework/sandbox/selfTest.ts")`
 *   3. `await runSandboxSelfTest()` — prints one line per check.
 *
 * In dev builds this is also attached to `window.__runSandboxSelfTest` (see
 * `main.tsx`), so step 2 is just `await window.__runSandboxSelfTest()`.
 */
export interface SelfTestOutcome {
  name: string;
  passed: boolean;
  detail: string;
}

async function check(
  name: string,
  fn: () => Promise<void>,
): Promise<SelfTestOutcome> {
  try {
    await fn();
    return { name, passed: true, detail: "ok" };
  } catch (e) {
    return {
      name,
      passed: false,
      detail: e instanceof Error ? e.message : String(e),
    };
  }
}

const job = {
  key: "1",
  type: "test",
  elementId: "test",
  instanceKey: "1",
  variables: {},
};

export async function runSandboxSelfTest(): Promise<SelfTestOutcome[]> {
  const outcomes: SelfTestOutcome[] = [];

  // A handler that tries to read the host page's DOM must fail: an
  // opaque-origin iframe can't see across to this document.
  outcomes.push(
    await check("cannot read host document", async () => {
      let threw = false;
      try {
        await runInSandbox({
          kind: "run-handler",
          source: `(job, helpers) => {
            try { parent.document.title; return "reached-parent-document"; }
            catch (e) { throw new Error("blocked: " + e.message); }
          }`,
          job,
        });
      } catch {
        threw = true;
      }
      if (!threw)
        throw new Error(
          "handler was able to read parent.document without the sandbox throwing",
        );
    }),
  );

  // A handler that tries to write the host page's localStorage must fail:
  // the sandboxed document's storage is partitioned to its own opaque origin.
  outcomes.push(
    await check("cannot poison host localStorage", async () => {
      const key = "__sandbox_selftest__";
      window.localStorage.removeItem(key);
      await runInSandbox({
        kind: "run-handler",
        source: `(job, helpers) => {
          try { localStorage.setItem("${key}", "leaked"); } catch (e) { /* ignored */ }
          return {};
        }`,
        job,
      });
      const leaked = window.localStorage.getItem(key);
      window.localStorage.removeItem(key);
      if (leaked)
        throw new Error("host localStorage received a write from the sandbox");
    }),
  );

  // A handler that throws must surface as an error, not hang or vanish.
  outcomes.push(
    await check("a thrown error surfaces", async () => {
      let message = "";
      try {
        await runInSandbox({
          kind: "run-handler",
          source: `(job, helpers) => { throw new Error("boom"); }`,
          job,
        });
      } catch (e) {
        message = e instanceof Error ? e.message : String(e);
      }
      if (!message.includes("boom"))
        throw new Error(`expected the thrown message to surface, got: ${message}`);
    }),
  );

  // A handler that never returns must time out rather than hang the page.
  outcomes.push(
    await check("a hang times out instead of hanging the page", async () => {
      let timedOut = false;
      try {
        await runInSandbox(
          {
            kind: "run-handler",
            source: `(job, helpers) => new Promise(() => {})`,
            job,
          },
          { timeoutMs: 300 },
        );
      } catch (e) {
        timedOut = e instanceof Error && e.message.includes("timed out");
      }
      if (!timedOut) throw new Error("expected a timeout error");
    }),
  );

  // A well-behaved handler must still work end to end.
  outcomes.push(
    await check("a normal handler still runs and returns", async () => {
      const value = await runInSandbox({
        kind: "run-handler",
        source: `(job, helpers) => ({ ok: true, elementId: job.elementId })`,
        job,
      });
      if (
        !value ||
        typeof value !== "object" ||
        (value as Record<string, unknown>).ok !== true
      )
        throw new Error(`unexpected result: ${JSON.stringify(value)}`);
    }),
  );

  for (const o of outcomes)
    console[o.passed ? "log" : "error"](
      `[sandbox self-test] ${o.passed ? "✅" : "❌"} ${o.name}${o.passed ? "" : ` — ${o.detail}`}`,
    );

  return outcomes;
}
