import { useCallback, useEffect, useRef, useState } from "react";
import {
  BrowserBrain,
  DEFAULT_BROWSER_MODEL,
  webgpuAvailable,
} from "./brains/browser";
import { DEFAULT_ENDPOINT, EndpointBrain } from "./brains/endpoint";
import type { BrainKind, ChatFn } from "./brains/types";

/**
 * Owns which brain drives the agent and its connection lifecycle.
 *
 * Three kinds, one `ChatFn` seam:
 * - `scripted` — no model at all; the example's editable stand-in runs.
 * - `browser` — a quantised model on WebGPU (works from a hosted https page).
 * - `endpoint` — any OpenAI-compatible server, Ollama by default (local only:
 *   an https page can't reach `http://localhost`).
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

  const [browserModel, setBrowserModel] = useState(DEFAULT_BROWSER_MODEL);
  const [endpointUrl, setEndpointUrl] = useState(DEFAULT_ENDPOINT);
  const [endpointModel, setEndpointModel] = useState("");
  const [apiKey, setApiKey] = useState("");

  const [chat, setChat] = useState<ChatFn | null>(null);
  const brainRef = useRef<BrowserBrain | EndpointBrain | null>(null);

  useEffect(() => {
    void webgpuAvailable().then(setWebgpu);
  }, []);

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

  const connect = useCallback(async () => {
    if (kind === "scripted") {
      setChat(null);
      setStatus("ready");
      return;
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
        setChat(() => brain.chat);
      } else {
        brainRef.current?.dispose();
        const brain = new EndpointBrain(endpointUrl, apiKey, endpointModel);
        brainRef.current = brain;
        const id = await brain.connect();
        setModelInUse(id);
        setChat(() => brain.chat);
      }
      setStatus("ready");
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setStatus("error");
      setChat(null);
    } finally {
      setProgress(null);
    }
  }, [kind, browserModel, endpointUrl, endpointModel, apiKey]);

  return {
    kind,
    setKind,
    status,
    error,
    modelInUse,
    progress,
    webgpu,
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
