import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm";

/**
 * The WebLLM engine's home. Everything model-related — weight load, shader
 * compilation, prefill, decode — happens on this thread, not the page's.
 *
 * Not a performance nicety. The runner's main thread is busy: React, the
 * bpmn-js canvas, Monaco, and the run loop itself. Submitting GPU work from a
 * thread that then goes off and does layout leaves the driver's queue stalled
 * mid-submission, and Windows' watchdog answers that by resetting the GPU —
 * `DXGI_ERROR_DEVICE_HUNG`, device lost, every subsequent call throwing
 * "Object has already been disposed". WebLLM's own chat demo runs in a worker
 * for exactly this reason, and survives on hardware where our main-thread
 * engine hung.
 *
 * `?worker` / `new Worker(new URL(...))` in `browser.ts` is what makes Vite
 * emit this as its own chunk; it is never part of the page bundle.
 */
const handler = new WebWorkerMLCEngineHandler();

self.onmessage = (event: MessageEvent) => {
  handler.onmessage(event);
};
