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
import { localEndpointBlockedReason, pageIsLocal } from "../brains/endpoint";
import type { BrainControls } from "../useBrain";
import type { BrainKind } from "../brains/types";

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
    kind: "endpoint",
    label: "API endpoint",
    hint: "Any OpenAI-compatible server. Ollama by default. Local pages only.",
  },
];

export function BrainPanel({ brain }: { brain: BrainControls }) {
  const active = KINDS.find((k) => k.kind === brain.kind)!;
  // Warn before the user clicks Connect, not after it fails.
  const localBlocked = localEndpointBlockedReason(brain.endpointUrl);
  const local = pageIsLocal();

  const [models, setModels] = useState(BROWSER_MODELS);
  useEffect(() => {
    void loadBrowserModelRequirements().then(setModels);
  }, []);
  const selectedModel = models.find((m) => m.id === brain.browserModel);
  const vramReason = selectedModel
    ? insufficientVramReason(selectedModel, estimateAvailableVramMB())
    : null;

  // The recommended brain for this environment, so a reader can see *why*
  // it's the default rather than guessing: WebGPU present -> browser is the
  // one live option that survives hosting; local page, no WebGPU -> endpoint.
  const recommended: BrainKind | null =
    brain.webgpu === true ? "browser" : local && brain.webgpu === false ? "endpoint" : null;

  return (
    <div className="brain">
      <div className="brain-kinds">
        {KINDS.map((k) => (
          <Button
            key={k.kind}
            size="sm"
            variant={brain.kind === k.kind ? "default" : "secondary"}
            onClick={() => brain.setKind(k.kind)}
          >
            {k.label}
            {k.kind === recommended && (
              <Badge variant="info" className="brain-recommended-badge">
                recommended
              </Badge>
            )}
          </Button>
        ))}
        {brain.status === "ready" && brain.kind !== "scripted" && (
          <Badge variant="success">{brain.modelInUse ?? "connected"}</Badge>
        )}
        {brain.status === "connecting" && (
          <Badge variant="info">connecting…</Badge>
        )}
        {brain.status === "error" && <Badge variant="danger">not connected</Badge>}
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
            <Label htmlFor="endpoint-model">Model (blank = first served)</Label>
            <Input
              id="endpoint-model"
              placeholder="llama3.2:3b"
              value={brain.endpointModel}
              onChange={(e) => brain.setEndpointModel(e.target.value)}
              disabled={brain.status === "connecting"}
            />
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
            disabled={brain.status === "connecting"}
          >
            {brain.status === "ready" ? "Reconnect" : "Connect"}
          </Button>
          {brain.status === "connecting" && brain.kind === "browser" && (
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

      {brain.error && (
        <Alert variant="destructive">
          <AlertTitle>Couldn't connect</AlertTitle>
          <AlertDescription>{brain.error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
