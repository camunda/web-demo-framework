import type { ChatMessage, TokenListener } from "./types";

/**
 * Client for an **OpenAI-compatible chat-completions endpoint** — a local
 * Ollama by default, but LM Studio, vLLM, llama.cpp's server or OpenAI itself
 * all speak the same shape. Adapted from `camunda/seed-export-compliance-
 * agent-demo` (`src/llm/endpoint-llm.ts`).
 *
 * Note for hosted pages: a page served over https cannot reach
 * `http://localhost:11434` (mixed content / private-network access), so this
 * brain is a local-development affordance. The browser brain is the one that
 * works from a public URL.
 */

/** A local Ollama's OpenAI-compatible API. */
export const DEFAULT_ENDPOINT = "http://localhost:11434/v1";

/** True when the page itself is served from localhost. */
export function pageIsLocal(): boolean {
  const h = globalThis.location?.hostname ?? "";
  return h === "localhost" || h === "127.0.0.1" || h === "[::1]" || h === "::1";
}

/**
 * Why a local endpoint is unreachable from *this* page, if it is structurally
 * unreachable. A page served from anywhere but localhost — a tunnel, a LAN IP, a
 * deployed URL — cannot talk to `http://localhost`: Ollama's CORS allowlist
 * covers localhost origins only, and an https page is additionally blocked from
 * making a plaintext request. Saying so beats "is the server running?", which
 * sends people to restart a server that was never the problem.
 */
export function localEndpointBlockedReason(
  endpoint: string,
  page: { hostname: string; origin: string } = {
    hostname: globalThis.location?.hostname ?? "",
    origin: globalThis.location?.origin ?? "",
  },
): string | null {
  let host: string;
  try {
    host = new URL(normaliseEndpoint(endpoint)).hostname;
  } catch {
    return null;
  }
  const isLocalHost = (h: string) =>
    h === "localhost" || h === "127.0.0.1" || h === "::1" || h === "[::1]";
  if (!isLocalHost(host) || isLocalHost(page.hostname)) return null;
  return (
    `This page is served from ${page.origin || "a non-local origin"}, so it can't reach ` +
    `${endpoint}. A local model server only accepts requests from a page on localhost. ` +
    `Open this page at http://localhost instead, or use the Scripted or In-browser brain.`
  );
}

/**
 * Normalise a user-supplied endpoint into the `…/v1` base the client appends
 * `/models` and `/chat/completions` to. Accepts a bare host, a base with `/v1`,
 * or a full `/v1/chat/completions` URL.
 */
export function normaliseEndpoint(raw: string): string {
  let url = raw.trim().replace(/\/+$/, "");
  if (url.endsWith("/chat/completions"))
    url = url.slice(0, -"/chat/completions".length);
  if (!/\/v\d+$/.test(url)) url = `${url}/v1`;
  return url;
}

class HttpError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "HttpError";
  }
}

export class EndpointBrain {
  readonly kind = "endpoint" as const;
  baseUrl: string;
  model: string | null = null;
  /** Every model the server advertises, so the UI can show what's available. */
  models: string[] = [];

  private readonly apiKey: string;
  private readonly requestedModel: string;

  constructor(endpoint: string = DEFAULT_ENDPOINT, apiKey = "", model = "") {
    this.baseUrl = normaliseEndpoint(endpoint);
    this.apiKey = apiKey.trim();
    this.requestedModel = model.trim();
  }

  private headers(): Record<string, string> {
    const h: Record<string, string> = { "Content-Type": "application/json" };
    if (this.apiKey) h.Authorization = `Bearer ${this.apiKey}`;
    return h;
  }

  async listModels(): Promise<string[]> {
    let res: Response;
    try {
      res = await fetch(`${this.baseUrl}/models`, { headers: this.headers() });
    } catch (e) {
      // A structural block (page not on localhost) is the likeliest cause and
      // the one people waste the most time on, so lead with it when it applies.
      const blocked = localEndpointBlockedReason(this.baseUrl);
      throw new Error(
        blocked ??
          `Can't reach ${this.baseUrl} (${e instanceof Error ? e.message : String(e)}). ` +
            "Is the server running? For Ollama, check the app is up — and if this page " +
            "is served from another origin, allow it with OLLAMA_ORIGINS.",
      );
    }
    if (!res.ok)
      throw new HttpError(
        `${this.baseUrl}/models returned HTTP ${res.status} ${res.statusText}`,
        res.status,
      );
    const json = (await res.json()) as { data?: { id?: string }[] };
    this.models = (json.data ?? [])
      .map((m) => m.id)
      .filter((id): id is string => !!id);
    return this.models;
  }

  /**
   * Probe the endpoint and choose a model: the explicitly requested one, else
   * the first the server serves. Then prove it can actually complete, so a bad
   * model name fails here rather than mid-run.
   */
  async connect(): Promise<string> {
    try {
      const ids = await this.listModels();
      const id = this.requestedModel || ids[0];
      if (!id)
        throw new Error(
          `No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`,
        );
      this.model = id;
    } catch (e) {
      // Some servers don't implement /models. That's only survivable if the
      // caller named a model themselves.
      const noModelsEndpoint =
        e instanceof HttpError && [404, 405, 501].includes(e.status);
      if (!this.requestedModel || !noModelsEndpoint) throw e;
      this.models = [];
      this.model = this.requestedModel;
    }
    await this.validate();
    return this.model!;
  }

  private async validate(): Promise<void> {
    const res = await fetch(`${this.baseUrl}/chat/completions`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({
        model: this.model,
        messages: [{ role: "user", content: "Reply with ok." }],
        temperature: 0,
        max_tokens: 1,
        stream: false,
      }),
    }).catch((e: unknown) => {
      throw new Error(
        `Can't reach ${this.baseUrl}/chat/completions (${e instanceof Error ? e.message : String(e)}). ` +
          "Check the endpoint URL, API key, model name, and any local CORS settings.",
      );
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(
        `chat/completions HTTP ${res.status} ${res.statusText}${body ? ` — ${body.slice(0, 300)}` : ""}`,
      );
    }
    const json = (await res.json().catch(() => ({}))) as { model?: string };
    if (json.model) this.model = json.model;
  }

  /** One streaming completion; returns the full text, streams deltas. */
  chat = async (
    messages: ChatMessage[],
    maxNewTokens = 512,
    onToken?: TokenListener,
  ): Promise<string> => {
    if (!this.model) throw new Error("EndpointBrain.chat called before connect()");
    const res = await fetch(`${this.baseUrl}/chat/completions`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({
        model: this.model,
        messages,
        // Deterministic: we want the model to follow the format.
        temperature: 0,
        max_tokens: maxNewTokens,
        stream: true,
      }),
    });
    if (!res.ok || !res.body) {
      const body = await res.text().catch(() => "");
      throw new Error(
        `chat/completions HTTP ${res.status} ${res.statusText}${body ? ` — ${body.slice(0, 300)}` : ""}`,
      );
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let full = "";
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      let nl: number;
      while ((nl = buffer.indexOf("\n")) >= 0) {
        const line = buffer.slice(0, nl).trim();
        buffer = buffer.slice(nl + 1);
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (payload === "[DONE]") continue;
        let chunk: {
          model?: string;
          choices?: {
            delta?: { content?: string };
            message?: { content?: string };
          }[];
        };
        try {
          chunk = JSON.parse(payload);
        } catch {
          continue;
        }
        // The server reports the model it actually used — treat that as
        // authoritative once generation starts.
        if (chunk.model) this.model = chunk.model;
        const choice = chunk.choices?.[0];
        const delta = choice?.delta?.content ?? choice?.message?.content ?? "";
        if (delta) {
          full += delta;
          onToken?.(delta);
        }
      }
    }
    return full;
  };

  dispose(): void {
    /* nothing to tear down for an HTTP client */
  }
}
