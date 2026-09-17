import { afterEach, describe, expect, it, vi } from "vitest";
import {
  CHROME_MODEL_ID,
  ChromeBrain,
  chromeAiSupported,
  chromeAiUnavailableReason,
} from "./chrome";

/**
 * The Chrome brain is the one brain that can't be exercised in CI — no
 * headless runner ships Gemini Nano — so these tests stub the `LanguageModel`
 * global and pin the two things a reader depends on: an *explained* absence
 * (rather than a dead button or "couldn't connect"), and a `chat` that meets
 * the same `ChatFn` seam as the WebGPU and endpoint brains.
 */

function stubLanguageModel(api: unknown): void {
  vi.stubGlobal("LanguageModel", api);
}

/** What every Prompt API call declares — see the describe block below. */
const ENGLISH = [{ type: "text", languages: ["en"] }];

/** A stand-in session whose stream yields `chunks` as deltas. */
function fakeSession(chunks: string[], destroyed: { count: number }) {
  return {
    promptStreaming: () =>
      new ReadableStream<string>({
        start(controller) {
          for (const c of chunks) controller.enqueue(c);
          controller.close();
        },
      }),
    destroy: () => {
      destroyed.count++;
    },
  };
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("chromeAiUnavailableReason", () => {
  it("names the browser requirement when there is no Prompt API at all", async () => {
    expect(chromeAiSupported()).toBe(false);
    const reason = await chromeAiUnavailableReason();
    expect(reason).toContain("no built-in AI model");
    expect(reason).toContain("Chrome 138+");
  });

  it("names the device requirements when Chrome reports 'unavailable'", async () => {
    stubLanguageModel({
      availability: () => Promise.resolve("unavailable"),
      create: () => Promise.reject(new Error("unused")),
    });
    const reason = await chromeAiUnavailableReason();
    expect(reason).toContain("can't run on this device");
    expect(reason).toContain("chrome://on-device-internals");
  });

  it("returns null once the model is available or downloadable", async () => {
    for (const availability of ["available", "downloadable", "downloading"]) {
      stubLanguageModel({
        availability: () => Promise.resolve(availability),
        create: () => Promise.reject(new Error("unused")),
      });
      expect(chromeAiSupported()).toBe(true);
      expect(await chromeAiUnavailableReason()).toBeNull();
    }
  });
});

/**
 * Chrome logs a warning on any Prompt API request that doesn't declare one —
 * "an output language should be specified to ensure optimal output quality and
 * properly attest to output safety" — and the availability probe runs on every
 * page load, so it appeared even for readers who never picked this brain.
 */
describe("every Prompt API request declares its output language", () => {
  const english = ENGLISH;

  it("declares it when probing availability", async () => {
    const availability = vi.fn(() => Promise.resolve("available"));
    stubLanguageModel({ availability, create: () => Promise.reject(new Error("unused")) });

    await chromeAiUnavailableReason();

    expect(availability).toHaveBeenCalledWith(
      expect.objectContaining({ expectedInputs: english, expectedOutputs: english }),
    );
  });

  it("declares it when creating the session connect() holds open", async () => {
    const destroyed = { count: 0 };
    const create = vi.fn(() => Promise.resolve(fakeSession([], destroyed)));
    stubLanguageModel({ availability: () => Promise.resolve("available"), create });

    await new ChromeBrain().connect();

    expect(create).toHaveBeenCalledWith(
      expect.objectContaining({ expectedInputs: english, expectedOutputs: english }),
    );
  });

  it("declares it on a chat session, alongside the system prompt", async () => {
    const destroyed = { count: 0 };
    const create = vi.fn(() => Promise.resolve(fakeSession(["ok"], destroyed)));
    stubLanguageModel({ availability: () => Promise.resolve("available"), create });

    const brain = new ChromeBrain();
    await brain.connect();
    await brain.chat([
      { role: "system", content: "be brief" },
      { role: "user", content: "hello" },
    ]);

    expect(create).toHaveBeenLastCalledWith(
      expect.objectContaining({
        expectedInputs: english,
        expectedOutputs: english,
        initialPrompts: [{ role: "system", content: "be brief" }],
      }),
    );
  });
});

describe("ChromeBrain", () => {
  it("reports download progress while connecting and resolves the model id", async () => {
    const progress: number[] = [];
    stubLanguageModel({
      availability: () => Promise.resolve("downloadable"),
      create: (options: {
        monitor?(m: { addEventListener(t: string, l: (e: { loaded: number }) => void): void }): void;
      }) => {
        options.monitor?.({
          addEventListener: (_type, listener) => {
            listener({ loaded: 0.5 });
            listener({ loaded: 1 });
          },
        });
        return Promise.resolve(fakeSession([], { count: 0 }));
      },
    });
    const brain = new ChromeBrain();
    const id = await brain.connect((p) => progress.push(p.progress));
    expect(id).toBe(CHROME_MODEL_ID);
    expect(brain.model).toBe(CHROME_MODEL_ID);
    expect(progress).toEqual([0.5, 1]);
  });

  it("surfaces the unavailable reason from connect() rather than a generic failure", async () => {
    stubLanguageModel({
      availability: () => Promise.resolve("unavailable"),
      create: () => Promise.reject(new Error("unused")),
    });
    await expect(new ChromeBrain().connect()).rejects.toThrow(
      /can't run on this device/,
    );
  });

  it("streams deltas, returns the full text, and hands the system prompt to the session", async () => {
    const destroyed = { count: 0 };
    const created: unknown[] = [];
    stubLanguageModel({
      availability: () => Promise.resolve("available"),
      create: (options?: unknown) => {
        created.push(options);
        return Promise.resolve(fakeSession(["Hel", "lo"], destroyed));
      },
    });
    const brain = new ChromeBrain();
    await brain.connect();

    const tokens: string[] = [];
    const text = await brain.chat(
      [
        { role: "system", content: "Be terse." },
        { role: "user", content: "Hi" },
      ],
      512,
      (t) => tokens.push(t),
    );
    expect(text).toBe("Hello");
    expect(tokens).toEqual(["Hel", "lo"]);
    // The per-turn session carries the system prompt and is destroyed after
    // the turn, so no context leaks into the next one.
    expect(created[1]).toEqual({
      expectedInputs: ENGLISH,
      expectedOutputs: ENGLISH,
      initialPrompts: [{ role: "system", content: "Be terse." }],
    });
    expect(destroyed.count).toBe(1);
  });

  it("refuses to chat before connect()", async () => {
    stubLanguageModel({
      availability: () => Promise.resolve("available"),
      create: () => Promise.resolve(fakeSession([], { count: 0 })),
    });
    await expect(
      new ChromeBrain().chat([{ role: "user", content: "Hi" }]),
    ).rejects.toThrow(/before connect/);
  });

  it("aborts a connect still in flight when disposed", async () => {
    // `useBrain` disposes on unmount; without this Chrome keeps downloading
    // the model for a page that is gone.
    let signal: AbortSignal | undefined;
    stubLanguageModel({
      availability: () => Promise.resolve("downloadable"),
      create: (options: { signal?: AbortSignal }) => {
        signal = options.signal;
        return new Promise((_resolve, reject) => {
          options.signal?.addEventListener("abort", () =>
            reject(new Error("aborted")),
          );
        });
      },
    });
    const brain = new ChromeBrain();
    const connecting = brain.connect();
    await new Promise((r) => setTimeout(r, 0));

    brain.dispose();

    await expect(connecting).rejects.toThrow("cancelled");
    expect(signal?.aborted).toBe(true);
  });
});
