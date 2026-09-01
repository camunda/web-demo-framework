import { useCallback, useEffect, useRef, useState } from "react";
import {
  BrowserBrain,
  DEFAULT_BROWSER_MODEL,
  isDeviceLostError,
  isModelCached,
  webgpuUnavailableReason,
} from "./brains/browser";
import {
  DEFAULT_ENDPOINT,
  EndpointBrain,
  localEndpointBlockedReason,
} from "./brains/endpoint";
import { ChromeBrain, chromeAiUnavailableReason } from "./brains/chrome";
import { BrowserVisionBrain, DEFAULT_VISION_MODEL } from "./brains/vision";
import type { BrainKind, ChatFn, VisionBrainKind, VisionFn } from "./brains/types";

/**
 * Owns which brain drives the agent and its connection lifecycle.
 *
 * Four kinds, one `ChatFn` seam:
 * - `scripted` — no model at all; the example's editable stand-in runs.
 * - `browser` — a quantised model on WebGPU (works from a hosted https page).
 * - `chrome` — Gemini Nano built into Chrome, downloaded and owned by the
 *   browser rather than by this app (Chrome only).
 * - `endpoint` — any OpenAI-compatible server, Ollama by default (local only:
 *   an https page can't reach `http://localhost`).
 *
 * `scripted` is always the starting kind: it's deterministic, offline, and
 * needs no download, so the example runs the moment the page does. Picking a
 * live brain is an explicit choice — `browser` costs a model download and
 * `endpoint` needs a server — so neither is selected on a reader's behalf.
 */

export type BrainStatus = "idle" | "connecting" | "ready" | "error";

export interface BrainControls {
  kind: BrainKind;
  setKind(kind: BrainKind): void;
  status: BrainStatus;
  error: string | null;
  /** The model id actually in use, once connected. */
  modelInUse: string | null;
  /** Weight-download / GPU-load progress for the browser brain. */
  progress: { progress: number; text: string } | null;
  /** True when this browser exposes WebGPU (null until probed). */
  webgpu: boolean | null;
  /** Why WebGPU isn't usable here, if it isn't (null until probed, or when it is). */
  webgpuReason: string | null;
  /** Whether the selected browser model's weights are already cached (null until probed). */
  browserModelCached: boolean | null;
  /**
   * Why Chrome's built-in Gemini Nano isn't usable here, if it isn't (null
   * until probed, or when it is).
   */
  chromeAiReason: string | null;
  /** Cancel an in-flight browser-brain connect (best-effort — see BrowserBrain.cancelConnect). */
  cancelConnect(): void;

  browserModel: string;
  setBrowserModel(id: string): void;
  endpointUrl: string;
  setEndpointUrl(url: string): void;
  endpointModel: string;
  setEndpointModel(model: string): void;
  /** Models the endpoint advertises (from its OpenAI-compatible `/models` API). */
  endpointModels: string[];
  /** Lifecycle of the endpoint model-list fetch, for the picker's UI states. */
  endpointModelsStatus: "idle" | "loading" | "ready" | "error";
  /** Why listing the endpoint's models failed, if it did. */
  endpointModelsError: string | null;
  /** Query the endpoint's `/models` and populate {@link endpointModels}. */
  listEndpointModels(): Promise<void>;
  apiKey: string;
  setApiKey(key: string): void;

  connect(): Promise<void>;
  /** The live chat function, or null when scripted / not yet connected. */
  chat: ChatFn | null;

  // --- Vision brain (contract B) — a second, independent brain beside the ---
  // --- text one: a text agent and an image reader can be connected at once, ---
  // --- so this mirrors the fields above rather than sharing the `kind`. ---
  /** Which vision brain is selected: the scripted fallback or in-browser WebGPU. */
  visionKind: VisionBrainKind;
  setVisionKind(kind: VisionBrainKind): void;
  visionStatus: BrainStatus;
  visionError: string | null;
  /** The selected vision model id (for `browser-vision`). */
  visionModel: string;
  setVisionModel(id: string): void;
  /** The vision model id actually in use, once connected. */
  visionModelInUse: string | null;
  /** Weight-download / GPU-load progress for the browser-vision brain. */
  visionProgress: { progress: number; text: string } | null;
  /**
   * Why WebGPU isn't usable for the vision brain, if it isn't (null until
   * probed, or when it is) — phrased to steer the reader to `scripted-vision`.
   */
  visionWebgpuReason: string | null;
  connectVision(): Promise<void>;
  cancelVisionConnect(): void;
  /** The live vision reader, or null when scripted / not yet connected. */
  vision: VisionFn | null;
}

export function useBrain(): BrainControls {
  const [kind, setKindState] = useState<BrainKind>("scripted");
  const [status, setStatus] = useState<BrainStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [modelInUse, setModelInUse] = useState<string | null>(null);
  const [progress, setProgress] = useState<{
    progress: number;
    text: string;
  } | null>(null);
  const [webgpu, setWebgpu] = useState<boolean | null>(null);
  const [webgpuReason, setWebgpuReason] = useState<string | null>(null);
  const [browserModelCached, setBrowserModelCached] = useState<boolean | null>(
    null,
  );
  const [chromeAiReason, setChromeAiReason] = useState<string | null>(null);

  const [browserModel, setBrowserModel] = useState(DEFAULT_BROWSER_MODEL);
  const [endpointUrl, setEndpointUrl] = useState(DEFAULT_ENDPOINT);
  const [endpointModel, setEndpointModel] = useState("");
  const [endpointModels, setEndpointModels] = useState<string[]>([]);
  const [endpointModelsStatus, setEndpointModelsStatus] = useState<
    "idle" | "loading" | "ready" | "error"
  >("idle");
  const [endpointModelsError, setEndpointModelsError] = useState<string | null>(
    null,
  );
  const [apiKey, setApiKey] = useState("");

  const [chat, setChat] = useState<ChatFn | null>(null);
  const brainRef = useRef<BrowserBrain | EndpointBrain | ChromeBrain | null>(null);

  // Vision brain — an independent selection/lifecycle beside the text brain
  // above. WebGPU present -> default to the in-browser vision brain; absent ->
  // scripted-vision, so a reader never lands on a vision brain that can't
  // connect (the fallback the epic's "Brain panel" spec requires).
  const [visionKind, setVisionKindState] =
    useState<VisionBrainKind>("scripted-vision");
  const [visionStatus, setVisionStatus] = useState<BrainStatus>("idle");
  const [visionError, setVisionError] = useState<string | null>(null);
  const [visionModel, setVisionModel] = useState(DEFAULT_VISION_MODEL);
  const [visionModelInUse, setVisionModelInUse] = useState<string | null>(null);
  const [visionProgress, setVisionProgress] = useState<{
    progress: number;
    text: string;
  } | null>(null);
  const [visionWebgpuReason, setVisionWebgpuReason] = useState<string | null>(
    null,
  );
  const [vision, setVision] = useState<VisionFn | null>(null);
  const visionBrainRef = useRef<BrowserVisionBrain | null>(null);
  const pickedVisionDefault = useRef(false);
  // Monotonic token so a slow /models fetch that resolves after a newer one
  // (endpoint/key changed, or Refresh clicked again) can't overwrite the fresh
  // result with stale data.
  const endpointModelsSeq = useRef(0);

  /**
   * Wraps a brain's `chat` so a fatal failure mid-run is visible.
   *
   * Without this the panel keeps saying "ready" while every call throws: the
   * agent completes having activated nothing, the process takes its default
   * path, and the page presents an infrastructure failure as a business
   * outcome — "the agent flagged this shipment for manual review", with no
   * findings, because there was never a model behind it.
   */
  const watchChat = useCallback(
    (brain: BrowserBrain | EndpointBrain | ChromeBrain): ChatFn => {
      return async (...args) => {
        try {
          return await brain.chat(...args);
        } catch (e) {
          const message = e instanceof Error ? e.message : String(e);
          if (brain instanceof BrowserBrain && isDeviceLostError(message)) {
            // `BrowserBrain.chat` has already torn its engine down; reflect that
            // rather than leaving a Connect button that early-returns "fine".
            setChat(null);
            setModelInUse(null);
            setStatus("error");
            setError(message);
          }
          throw e;
        }
      };
    },
    [],
  );

  /**
   * Wraps a browser-vision brain's `read` so a fatal failure mid-run is
   * visible, mirroring `watchChat` above: without it the panel keeps saying
   * "ready" while every read throws (a lost GPU device, an evicted model), and
   * `helpers.vision` would silently degrade with no signal to the reader.
   */
  const watchVision = useCallback((brain: BrowserVisionBrain): VisionFn => {
    return async (...args) => {
      try {
        return await brain.read(...args);
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        if (isDeviceLostError(message)) {
          setVision(null);
          setVisionModelInUse(null);
          setVisionStatus("error");
          setVisionError(message);
        }
        throw e;
      }
    };
  }, []);

  useEffect(() => {
    void webgpuUnavailableReason().then((reason) => {
      setWebgpuReason(reason);
      setWebgpu(reason === null);
    });
    void chromeAiUnavailableReason().then(setChromeAiReason);
    // The vision seam has no Endpoint alternative, so its reason names the
    // scripted-vision fallback; probed the same way, and used to pick the
    // starting vision brain (WebGPU -> browser-vision, else scripted-vision).
    void webgpuUnavailableReason("the scripted-vision fallback").then(
      (reason) => {
        setVisionWebgpuReason(reason);
        // Respect an early explicit pick: only default when the reader hasn't
        // chosen a vision brain yet (mirrors pickedDefault for the text brain).
        if (!pickedVisionDefault.current) {
          pickedVisionDefault.current = true;
          setVisionKindState(
            reason === null ? "browser-vision" : "scripted-vision",
          );
        }
      },
    );
  }, []);

  // Cached-state indication: re-probed whenever the selected model changes,
  // so a reader sees "already downloaded" before hitting Connect.
  useEffect(() => {
    let cancelled = false;
    setBrowserModelCached(null);
    void isModelCached(browserModel).then((cached) => {
      if (!cancelled) setBrowserModelCached(cached);
    });
    return () => {
      cancelled = true;
    };
  }, [browserModel]);

  // Free the GPU/engine when the page goes away.
  useEffect(() => () => brainRef.current?.dispose(), []);
  // Same for the vision brain's model/GPU.
  useEffect(() => () => visionBrainRef.current?.dispose(), []);

  const setKind = useCallback((next: BrainKind) => {
    setKindState(next);
    setStatus("idle");
    setError(null);
    setModelInUse(null);
    setProgress(null);
    setChat(null);
  }, []);

  const setVisionKind = useCallback((next: VisionBrainKind) => {
    pickedVisionDefault.current = true;
    // Switching kinds cancels any in-flight connect and disposes the vision
    // brain, so a late-resolving connect can't revive state for the now-stale
    // selection and GPU/model resources aren't left alive.
    visionBrainRef.current?.cancelConnect();
    visionBrainRef.current?.dispose();
    visionBrainRef.current = null;
    setVisionKindState(next);
    setVisionStatus("idle");
    setVisionError(null);
    setVisionModelInUse(null);
    setVisionProgress(null);
    setVision(null);
  }, []);

  /** Tear down the active brain instance and clear its live chat/model state. */
  const disconnect = useCallback(() => {
    brainRef.current?.dispose();
    brainRef.current = null;
    setChat(null);
    setModelInUse(null);
  }, []);

  const cancelConnect = useCallback(() => {
    const brain = brainRef.current;
    if (brain instanceof BrowserBrain || brain instanceof ChromeBrain)
      brain.cancelConnect();
    disconnect();
    setStatus("idle");
    setProgress(null);
    setError(null);
  }, [disconnect]);

  /**
   * Query the endpoint's OpenAI-compatible `/models` and surface the result as
   * a picker, so the reader chooses from what the server actually serves rather
   * than typing a model id from memory (a wrong one only fails at connect). A
   * page that structurally can't reach a local server says so instead of
   * fetching — the same reason `connect` reports up front — and a fetch that
   * succeeds defaults the selection to the first served model when the current
   * pick is blank or no longer offered.
   */
  const listEndpointModels = useCallback(async () => {
    const seq = ++endpointModelsSeq.current;
    const isStale = () => seq !== endpointModelsSeq.current;
    const blocked = localEndpointBlockedReason(endpointUrl);
    if (blocked) {
      setEndpointModels([]);
      setEndpointModelsStatus("error");
      setEndpointModelsError(blocked);
      return;
    }
    setEndpointModelsStatus("loading");
    setEndpointModelsError(null);
    const brain = new EndpointBrain(endpointUrl, apiKey);
    try {
      const ids = await brain.listModels();
      if (isStale()) return;
      setEndpointModels(ids);
      setEndpointModelsStatus("ready");
      setEndpointModel((current) =>
        current && ids.includes(current) ? current : (ids[0] ?? ""),
      );
    } catch (e) {
      if (isStale()) return;
      setEndpointModels([]);
      setEndpointModel("");
      setEndpointModelsStatus("error");
      setEndpointModelsError(e instanceof Error ? e.message : String(e));
    } finally {
      brain.dispose();
    }
  }, [endpointUrl, apiKey]);

  const connect = useCallback(async () => {
    if (kind === "scripted") {
      setChat(null);
      setStatus("ready");
      return;
    }
    // Explain up front rather than after a failed attempt.
    if (kind === "endpoint") {
      const blocked = localEndpointBlockedReason(endpointUrl);
      if (blocked) {
        disconnect();
        setError(blocked);
        setStatus("error");
        return;
      }
    }
    setStatus("connecting");
    setError(null);
    setProgress(null);
    try {
      // A different brain kind (or a different endpoint) means a fresh client;
      // the browser brain reuses its engine internally when only the model id
      // changes, so weights already cached don't download twice.
      if (kind === "browser") {
        const brain =
          brainRef.current instanceof BrowserBrain
            ? brainRef.current
            : new BrowserBrain();
        if (brainRef.current && brainRef.current !== brain)
          brainRef.current.dispose();
        brainRef.current = brain;
        const id = await brain.connect(browserModel, setProgress);
        setModelInUse(id);
        setChat(() => watchChat(brain));
        setBrowserModelCached(true);
      } else if (kind === "chrome") {
        // Chrome owns the weights, so there's no model id to pick and nothing
        // for this app to cache — connect just makes the built-in model ready.
        brainRef.current?.dispose();
        const brain = new ChromeBrain();
        brainRef.current = brain;
        const id = await brain.connect(setProgress);
        setChromeAiReason(null);
        setModelInUse(id);
        setChat(() => watchChat(brain));
      } else {
        brainRef.current?.dispose();
        const brain = new EndpointBrain(endpointUrl, apiKey, endpointModel);
        brainRef.current = brain;
        const id = await brain.connect();
        setModelInUse(id);
        setChat(() => watchChat(brain));
      }
      setStatus("ready");
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      if (message === "cancelled") {
        // cancelConnect() already reset status/error/progress.
        return;
      }
      setError(message);
      setStatus("error");
      setChat(null);
    } finally {
      setProgress(null);
    }
  }, [
    kind,
    browserModel,
    endpointUrl,
    endpointModel,
    apiKey,
    disconnect,
    watchChat,
  ]);

  /** Tear down the active vision brain and clear its live reader/model state. */
  const disconnectVision = useCallback(() => {
    visionBrainRef.current?.dispose();
    visionBrainRef.current = null;
    setVision(null);
    setVisionModelInUse(null);
  }, []);

  const cancelVisionConnect = useCallback(() => {
    visionBrainRef.current?.cancelConnect();
    disconnectVision();
    setVisionStatus("idle");
    setVisionProgress(null);
    setVisionError(null);
  }, [disconnectVision]);

  const connectVision = useCallback(async () => {
    // scripted-vision needs no connect — like the text "scripted" brain, the
    // runner builds it per-example from `ExampleDef.scriptedVision`, so `vision`
    // stays null and the panel just reports ready.
    if (visionKind === "scripted-vision") {
      disconnectVision();
      setVisionStatus("ready");
      setVisionError(null);
      return;
    }
    setVisionStatus("connecting");
    setVisionError(null);
    setVisionProgress(null);
    try {
      const brain =
        visionBrainRef.current instanceof BrowserVisionBrain
          ? visionBrainRef.current
          : new BrowserVisionBrain();
      if (visionBrainRef.current && visionBrainRef.current !== brain)
        visionBrainRef.current.dispose();
      visionBrainRef.current = brain;
      const id = await brain.connect(visionModel, setVisionProgress);
      setVisionModelInUse(id);
      setVision(() => watchVision(brain));
      setVisionStatus("ready");
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      if (message === "cancelled") {
        // cancelVisionConnect() already reset status/error/progress.
        return;
      }
      // WebGPU absent (or the model failed to load) — surface the reason and
      // leave the reader on the scripted-vision fallback rather than a live
      // brain that can't connect.
      setVisionError(message);
      setVisionStatus("error");
      setVision(null);
      setVisionModelInUse(null);
    } finally {
      setVisionProgress(null);
    }
  }, [visionKind, visionModel, disconnectVision, watchVision]);

  return {
    kind,
    setKind,
    status,
    error,
    modelInUse,
    progress,
    webgpu,
    webgpuReason,
    browserModelCached,
    chromeAiReason,
    cancelConnect,
    browserModel,
    setBrowserModel,
    endpointUrl,
    setEndpointUrl,
    endpointModel,
    setEndpointModel,
    endpointModels,
    endpointModelsStatus,
    endpointModelsError,
    listEndpointModels,
    apiKey,
    setApiKey,
    connect,
    chat,
    visionKind,
    setVisionKind,
    visionStatus,
    visionError,
    visionModel,
    setVisionModel,
    visionModelInUse,
    visionProgress,
    visionWebgpuReason,
    connectVision,
    cancelVisionConnect,
    vision,
  };
}
