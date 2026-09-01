import { useEffect, useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@camunda/design-system";
import {
  BROWSER_MODELS,
  estimateAvailableVramMB,
  insufficientVramReason,
  loadBrowserModelRequirements,
} from "../brains/browser";
import { localEndpointBlockedReason } from "../brains/endpoint";
import { chromeAiSupported } from "../brains/chrome";
import { VISION_MODELS } from "../brains/vision";
import type { BrainControls } from "../useBrain";
import type { BrainKind, VisionBrainKind } from "../brains/types";

const KINDS: { kind: BrainKind; label: string; hint: string }[] = [
  {
    kind: "scripted",
    label: "Scripted",
    hint: "No model. The example's stand-in decides — deterministic and offline.",
  },
  {
    kind: "browser",
    label: "In-browser (WebGPU)",
    hint: "A small quantised model on your GPU. First run downloads weights.",
  },
  {
    kind: "chrome",
    label: "Chrome built-in",
    hint: "Gemini Nano, built into Chrome. Chrome owns the weights — no download from this page, no API key.",
  },
  {
    kind: "endpoint",
    label: "API endpoint",
    hint: "Any OpenAI-compatible server. Ollama by default. Local pages only.",
  },
];

const VISION_KINDS: { kind: VisionBrainKind; label: string; hint: string }[] = [
  {
    kind: "scripted-vision",
    label: "Scripted",
    hint: "No model. The example's known plate is returned — deterministic and offline.",
  },
  {
    kind: "browser-vision",
    label: "In-browser (WebGPU)",
    hint: "Reads the photo with a vision model on your GPU. First run downloads weights.",
  },
];

export function BrainPanel({
  brain,
  showText = true,
  showVision = false,
}: {
  brain: BrainControls;
  /** Render the text-brain (agent) section. Default true — existing behaviour. */
  showText?: boolean;
  /** Render the vision-brain section. Default false; on for an `imageInput` example. */
  showVision?: boolean;
}) {
  return (
    <div className="brain">
      {showText && <TextBrain brain={brain} />}
      {showText && showVision && <hr className="brain-divider" />}
      {showVision && <VisionBrain brain={brain} />}
    </div>
  );
}

function TextBrain({ brain }: { brain: BrainControls }) {
  const active = KINDS.find((k) => k.kind === brain.kind)!;
  // The Chrome built-in model exists in exactly one browser, so offering it
  // elsewhere would only ever be a dead button.
  const kinds = KINDS.filter((k) => k.kind !== "chrome" || chromeAiSupported());
  // Warn before the user clicks Connect, not after it fails.
  const localBlocked = localEndpointBlockedReason(brain.endpointUrl);
  const [models, setModels] = useState(BROWSER_MODELS);
  useEffect(() => {
    void loadBrowserModelRequirements().then(setModels);
  }, []);
  // Auto-populate the endpoint model picker from the server's /models whenever
  // the endpoint or key changes, debounced so typing a URL doesn't spam it.
  const { kind: brainKind, endpointUrl, apiKey, listEndpointModels } = brain;
  useEffect(() => {
    if (brainKind !== "endpoint" || localBlocked) return;
    const timer = setTimeout(() => void listEndpointModels(), 400);
    return () => clearTimeout(timer);
  }, [brainKind, endpointUrl, apiKey, localBlocked, listEndpointModels]);
  const selectedModel = models.find((m) => m.id === brain.browserModel);
  const vramReason = selectedModel
    ? insufficientVramReason(selectedModel, estimateAvailableVramMB())
    : null;

  return (
    <div className="brain-section">
      <div className="brain-modes">
        <div className="brain-kinds" role="group" aria-label="Agent brain">
          {kinds.map((k) => (
            <Button
              key={k.kind}
              size="sm"
              variant={brain.kind === k.kind ? "default" : "secondary"}
              aria-pressed={brain.kind === k.kind}
              onClick={() => brain.setKind(k.kind)}
            >
              {k.label}
            </Button>
          ))}
        </div>
        <div className="brain-status">
          {brain.status === "ready" && brain.kind !== "scripted" && (
            <Badge variant="success" className="brain-status-badge">
              {brain.modelInUse ?? "connected"}
            </Badge>
          )}
          {brain.status === "connecting" && (
            <Badge variant="info" className="brain-status-badge">
              connecting…
            </Badge>
          )}
          {brain.status === "error" && (
            <Badge variant="danger" className="brain-status-badge">
              not connected
            </Badge>
          )}
        </div>
      </div>

      <p className="field-hint">{active.hint}</p>

      {brain.kind === "browser" && (
        <div className="brain-config">
          <div className="field">
            <Label htmlFor="browser-model">Model</Label>
            <Select
              value={brain.browserModel}
              onValueChange={brain.setBrowserModel}
              disabled={brain.status === "connecting"}
            >
              <SelectTrigger id="browser-model">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {models.map((m) => (
                  <SelectItem key={m.id} value={m.id}>
                    {m.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* Cached-state indication: a first run downloads the weights (size
                shown in the model label above); a later visit reuses them. */}
            {brain.browserModelCached === true && (
              <p className="field-hint">
                Already downloaded in this browser — connecting will be fast.
              </p>
            )}
            {brain.browserModelCached === false && (
              <p className="field-hint">
                Not downloaded yet — connecting fetches the weights once, then
                caches them for next time.
              </p>
            )}
          </div>
          {brain.webgpu === false && brain.webgpuReason && (
            <Alert variant="destructive">
              <AlertTitle>No WebGPU in this browser</AlertTitle>
              <AlertDescription>{brain.webgpuReason}</AlertDescription>
            </Alert>
          )}
          {brain.webgpu !== false && vramReason && (
            <Alert variant="destructive">
              <AlertTitle>This model may not fit in GPU memory</AlertTitle>
              <AlertDescription>{vramReason}</AlertDescription>
            </Alert>
          )}
        </div>
      )}

      {brain.kind === "chrome" && (
        <div className="brain-config">
          <p className="field-hint">
            Nothing to configure: Chrome downloads and manages Gemini Nano
            itself, so the first Connect may fetch it once and later visits
            reuse it. Prompts never leave your machine. It's a very small model
            — expect it to follow the tool-calling format less reliably than an
            endpoint model.
          </p>
          {brain.chromeAiReason && (
            <Alert variant="destructive">
              <AlertTitle>Chrome's built-in model isn't available here</AlertTitle>
              <AlertDescription>{brain.chromeAiReason}</AlertDescription>
            </Alert>
          )}
        </div>
      )}

      {brain.kind === "endpoint" && (
        <div className="brain-config">
          <div className="field">
            <Label htmlFor="endpoint-url">Endpoint</Label>
            <Input
              id="endpoint-url"
              value={brain.endpointUrl}
              onChange={(e) => brain.setEndpointUrl(e.target.value)}
              disabled={brain.status === "connecting"}
            />
            <p className="field-hint">
              Ollama allows <code>localhost</code> origins out of the box; set{" "}
              <code>OLLAMA_ORIGINS</code> only when serving this page from
              another host. Best for local development — a hosted copy of
              this page can't reach a server on your machine at all.
            </p>
            {localBlocked && (
              <Alert variant="destructive">
                <AlertTitle>A local server won't work from this URL</AlertTitle>
                <AlertDescription>{localBlocked}</AlertDescription>
              </Alert>
            )}
          </div>
          <div className="field">
            <Label htmlFor="endpoint-model">Model</Label>
            <div className="endpoint-model-row">
              <Select
                value={brain.endpointModel}
                onValueChange={brain.setEndpointModel}
                disabled={
                  brain.status === "connecting" ||
                  brain.endpointModelsStatus === "loading" ||
                  brain.endpointModels.length === 0
                }
              >
                <SelectTrigger
                  id="endpoint-model"
                  className="endpoint-model-select"
                >
                  <SelectValue
                    placeholder={
                      brain.endpointModelsStatus === "loading"
                        ? "Loading models…"
                        : brain.endpointModelsStatus === "idle"
                          ? "Enter an endpoint above"
                          : brain.endpointModelsStatus === "error"
                            ? "No models — check the endpoint"
                            : brain.endpointModels.length === 0
                              ? "No models served"
                              : "Select a model"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {brain.endpointModels.map((id) => (
                    <SelectItem key={id} value={id}>
                      {id}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => void brain.listEndpointModels()}
                disabled={
                  brain.status === "connecting" ||
                  brain.endpointModelsStatus === "loading" ||
                  localBlocked !== null
                }
              >
                {brain.endpointModelsStatus === "loading"
                  ? "Refreshing…"
                  : "Refresh"}
              </Button>
            </div>
            <p className="field-hint">
              Fetched from the endpoint's <code>/models</code>. Tiny models
              (e.g. SmolLM2) usually can't follow the tool-calling format —
              prefer <code>llama3.2:3b</code>, <code>qwen2.5</code> or larger.
            </p>
            {brain.endpointModelsStatus === "error" && !localBlocked && (
              <Alert variant="destructive">
                <AlertTitle>Couldn't list models</AlertTitle>
                <AlertDescription>
                  {brain.endpointModelsError}
                </AlertDescription>
              </Alert>
            )}
          </div>
          <div className="field">
            <Label htmlFor="endpoint-key">API key (optional)</Label>
            <Input
              id="endpoint-key"
              type="password"
              value={brain.apiKey}
              onChange={(e) => brain.setApiKey(e.target.value)}
              disabled={brain.status === "connecting"}
            />
          </div>
        </div>
      )}

      {brain.kind !== "scripted" && (
        <div className="brain-actions">
          <Button
            size="sm"
            onClick={() => void brain.connect()}
            disabled={
              brain.status === "connecting" ||
              (brain.kind === "chrome" && brain.chromeAiReason !== null) ||
              (brain.kind === "endpoint" &&
                (brain.endpointModel === "" ||
                  brain.endpointModelsStatus === "loading" ||
                  localBlocked !== null))
            }
          >
            {brain.status === "ready" ? "Reconnect" : "Connect"}
          </Button>
          {brain.status === "connecting" &&
            (brain.kind === "browser" || brain.kind === "chrome") && (
              <Button size="sm" variant="secondary" onClick={brain.cancelConnect}>
                Cancel
              </Button>
            )}
          {brain.progress && (
            <span className="field-hint">
              {Math.round(brain.progress.progress * 100)}% —{" "}
              {brain.progress.text}
            </span>
          )}
        </div>
      )}

      {brain.progress && (
        <div
          className="brain-progress"
          role="progressbar"
          aria-valuenow={Math.round(brain.progress.progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="brain-progress-bar"
            style={{ width: `${Math.round(brain.progress.progress * 100)}%` }}
          />
        </div>
      )}

      {brain.error && (
        <Alert variant="destructive">
          <AlertTitle>Couldn't connect</AlertTitle>
          <AlertDescription>{brain.error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}

/**
 * The vision brain section (contract B) — the image analogue of `TextBrain`,
 * driving the independent vision brain in `useBrain`. Same shape a reader
 * already knows from the WebLLM panel: pick scripted vs in-browser, see the
 * model's download size, Connect (with progress), and a clear WebGPU-absent
 * reason that steers to the scripted fallback.
 */
function VisionBrain({ brain }: { brain: BrainControls }) {
  const active = VISION_KINDS.find((k) => k.kind === brain.visionKind)!;

  return (
    <div className="brain-section brain-vision">
      <Label>Vision (reads the image)</Label>
      <div className="brain-modes">
        <div className="brain-kinds" role="group" aria-label="Vision brain">
          {VISION_KINDS.map((k) => (
            <Button
              key={k.kind}
              size="sm"
              variant={brain.visionKind === k.kind ? "default" : "secondary"}
              aria-pressed={brain.visionKind === k.kind}
              onClick={() => brain.setVisionKind(k.kind)}
            >
              {k.label}
            </Button>
          ))}
        </div>
        <div className="brain-status">
          {brain.visionStatus === "ready" &&
            brain.visionKind === "browser-vision" && (
              <Badge variant="success" className="brain-status-badge">
                {brain.visionModelInUse ?? "connected"}
              </Badge>
            )}
          {brain.visionStatus === "connecting" && (
            <Badge variant="info" className="brain-status-badge">
              connecting…
            </Badge>
          )}
          {brain.visionStatus === "error" && (
            <Badge variant="danger" className="brain-status-badge">
              not connected
            </Badge>
          )}
        </div>
      </div>

      <p className="field-hint">{active.hint}</p>

      {/* WebGPU is absent, so `useBrain` defaulted us to the scripted fallback.
          Surface the reason here too — otherwise the reader only sees *why*
          after switching to "In-browser (WebGPU)", the option that can't run. */}
      {brain.visionKind === "scripted-vision" &&
        brain.webgpu === false &&
        brain.visionWebgpuReason && (
          <Alert variant="destructive">
            <AlertTitle>No WebGPU in this browser</AlertTitle>
            <AlertDescription>{brain.visionWebgpuReason}</AlertDescription>
          </Alert>
        )}

      {brain.visionKind === "browser-vision" && (
        <div className="brain-config">
          <div className="field">
            <Label htmlFor="vision-model">Model</Label>
            <Select
              value={brain.visionModel}
              onValueChange={brain.setVisionModel}
              disabled={brain.visionStatus === "connecting"}
            >
              <SelectTrigger id="vision-model">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {VISION_MODELS.map((m) => (
                  <SelectItem key={m.id} value={m.id}>
                    {m.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="field-hint">
              Connecting downloads the weights once (size shown above), then
              caches them — every token is read on your GPU, no server.
            </p>
          </div>
          {brain.webgpu === false && brain.visionWebgpuReason && (
            <Alert variant="destructive">
              <AlertTitle>No WebGPU in this browser</AlertTitle>
              <AlertDescription>{brain.visionWebgpuReason}</AlertDescription>
            </Alert>
          )}
        </div>
      )}

      {brain.visionKind === "browser-vision" && (
        <div className="brain-actions">
          <Button
            size="sm"
            onClick={() => void brain.connectVision()}
            disabled={brain.visionStatus === "connecting"}
          >
            {brain.visionStatus === "ready" ? "Reconnect" : "Connect"}
          </Button>
          {brain.visionStatus === "connecting" && (
            <Button
              size="sm"
              variant="secondary"
              onClick={brain.cancelVisionConnect}
            >
              Cancel
            </Button>
          )}
          {brain.visionProgress && (
            <span className="field-hint">
              {Math.round(brain.visionProgress.progress * 100)}% —{" "}
              {brain.visionProgress.text}
            </span>
          )}
        </div>
      )}

      {brain.visionError && (
        <Alert variant="destructive">
          <AlertTitle>Couldn't connect the vision brain</AlertTitle>
          <AlertDescription>{brain.visionError}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
