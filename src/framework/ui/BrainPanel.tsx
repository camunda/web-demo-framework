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
import { BROWSER_MODELS } from "../brains/browser";
import { localEndpointBlockedReason } from "../brains/endpoint";
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
                {BROWSER_MODELS.map((m) => (
                  <SelectItem key={m.id} value={m.id}>
                    {m.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {brain.webgpu === false && (
            <Alert variant="destructive">
              <AlertTitle>No WebGPU in this browser</AlertTitle>
              <AlertDescription>
                Use a recent Chrome/Edge (or Safari 17+) with hardware
                acceleration on, or pick another brain.
              </AlertDescription>
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
              another host.
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
