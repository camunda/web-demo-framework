import { describe, expect, it } from "vitest";
import { WalkTracker } from "./walkTracker";

const open = () => {
  const t = new WalkTracker();
  t.panelOpen = true;
  t.ready = true;
  return t;
};

describe("WalkTracker", () => {
  it("has nothing to wait for when the diagram's panel is closed", async () => {
    const t = new WalkTracker();
    await expect(t.waitFor(1, 5, 10_000)).resolves.toBeUndefined();
  });

  it("waits until the diagram has taken in the target and stopped walking", async () => {
    const t = open();
    let done = false;
    const wait = t.waitFor(1, 3, 10_000).then(() => (done = true));

    Object.assign(t, { run: 1, consumed: 3, walking: true });
    t.notify();
    await Promise.resolve();
    expect(done).toBe(false);

    t.walking = false;
    t.notify();
    await wait;
    expect(done).toBe(true);
  });

  it("does not count another run's progress", async () => {
    const t = open();
    let done = false;
    void t.waitFor(2, 3, 10_000).then(() => (done = true));
    Object.assign(t, { run: 1, consumed: 9, walking: false });
    t.notify();
    await new Promise((r) => setTimeout(r, 10));
    expect(done).toBe(false);
  });

  // A diagram that never imports (malformed XML) must not hang the run.
  it("gives up at the cap", async () => {
    const t = new WalkTracker();
    t.panelOpen = true;
    const started = performance.now();
    await t.waitFor(1, 3, 40);
    expect(performance.now() - started).toBeGreaterThanOrEqual(35);
  });
});
