import { useCallback, useEffect, useRef, useState } from "react";
import {
  BrowserBrain,
  DEFAULT_BROWSER_MODEL,
  isDeviceLostError,
  isModelCached,
  webgpuAvailable,
  webgpuUnavailableReason,
} from "./brains/browser";
import {
  DEFAULT_ENDPOINT,
  EndpointBrain,
  localEndpointBlockedReason,
  pageIsLocal,
} from "./brains/endpoint";
import type { BrainKind, ChatFn } from "./brains/types";

/**
 * Owns which brain drives the agent and its connection lifecycle.
 *
 * Three kinds, one `ChatFn` seam:
 * - `scripted` — no model at all; the example's editable stand-in runs.
 * - `browser` — a quantised model on WebGPU (works from a hosted https page).
 * - `endpoint` — any OpenAI-compatible server, Ollama by default (local only:
 *   an https page can't reach `http://localhost`).
 *
 * The initial `kind` is chosen by context rather than always defaulting to
 * "scripted": WebGPU present -> offer the in-browser brain (the only live
 * option that survives hosting); no WebGPU but the page is local -> surface
 * the endpoint brain (the best local experience); neither -> scripted, so a
 * reader never lands on a brain that can't possibly connect.
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
  /** Cancel an in-flight browser-brain connect (best-effort — see BrowserBrain.cancelConnect). */
  cancelConnect(): void;

  browserModel: string;
  setBrowserModel(id: string): void;
  endpointUrl: string;
  setEndpointUrl(url: string): void;
  endpointModel: string;
  setEndpointModel(model: string): void;
  apiKey: string;
  setApiKey(key: string): void;

  connect(): Promise<void>;
  /** The live chat function, or null when scripted / not yet connected. */
  chat: ChatFn | null;
}

/** Pick a sensible starting brain for this environment — see module doc. */
async function chooseDefaultKind(): Promise<BrainKind> {
  if (await webgpuAvailable()) return "browser";
  if (pageIsLocal()) return "endpoint";
  return "scripted";
}

export function useBrain(): BrainControls {
  // "scripted" until the environment probe resolves, then swapped to the
  // context-appropriate default — see chooseDefaultKind(). A reader who
  // clicks a brain before that resolves just gets what they clicked.
  const [kind, setKindState] = useState<BrainKind>("scripted");
  const pickedDefault = useRef(false);
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

  const [browserModel, setBrowserModel] = useState(DEFAULT_BROWSER_MODEL);
  const [endpointUrl, setEndpointUrl] = useState(DEFAULT_ENDPOINT);
  const [endpointModel, setEndpointModel] = useState("");
  const [apiKey, setApiKey] = useState("");

  const [chat, setChat] = useState<ChatFn | null>(null);
  const brainRef = useRef<BrowserBrain | EndpointBrain | null>(null);

  /**
   * Wraps a brain's `chat` so a fatal failure mid-run is visible.
   *
   * Without this the panel keeps saying "ready" while every call throws: the
   * agent completes having activated nothing, the process takes its default
   * path, and the page presents an infrastructure failure as a business
   * outcome — "the agent flagged this shipment for manual review", with no
   * findings, because there was never a model behind it.
   */
  const watchChat = useCallback((brain: BrowserBrain | EndpointBrain): ChatFn => {
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
  }, []);

  useEffect(() => {
    void webgpuUnavailableReason().then((reason) => {
      setWebgpuReason(reason);
      setWebgpu(reason === null);
      if (!pickedDefault.current) {
        pickedDefault.current = true;
        void chooseDefaultKind().then(setKindState);
      }
    });
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

  const setKind = useCallback((next: BrainKind) => {
    setKindState(next);
    setStatus("idle");
    setError(null);
    setModelInUse(null);
    setProgress(null);
    setChat(null);
  }, []);

  /** Tear down the active brain instance and clear its live chat/model state. */
  const disconnect = useCallback(() => {
    brainRef.current?.dispose();
    brainRef.current = null;
    setChat(null);
    setModelInUse(null);
  }, []);

  const cancelConnect = useCallback(() => {
    if (brainRef.current instanceof BrowserBrain) brainRef.current.cancelConnect();
    disconnect();
    setStatus("idle");
    setProgress(null);
    setError(null);
  }, [disconnect]);

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
    cancelConnect,
    browserModel,
    setBrowserModel,
    endpointUrl,
    setEndpointUrl,
    endpointModel,
    setEndpointModel,
    apiKey,
    setApiKey,
    connect,
    chat,
  };
}
