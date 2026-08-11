import { buildSandboxDocument } from "./iframeSource";
import type {
  SandboxJob,
  SandboxRequest,
  SandboxResponse,
} from "./protocol";

/**
 * Runs reader-supplied handler/agent source inside a throwaway sandboxed
 * iframe and returns its result, or throws.
 *
 * One iframe per call, torn down immediately after: that's what makes a hang
 * survivable (destroying the iframe is the only reliable way to stop code
 * `new Function` compiled, and it can't be done gracefully, so the runner just
 * removes it) and keeps runs isolated from each other (no state a rename or a
 * previous run's global left behind can leak into the next call).
 *
 * `onTrace`, if given, is called for every `trace(...)` the running code makes
 * before it settles.
 */
export function runInSandbox(
  request: Omit<SandboxRequest, "id">,
  opts: { timeoutMs?: number; onTrace?: (text: string) => void } = {},
): Promise<unknown> {
  const { timeoutMs = 5000, onTrace } = opts;
  const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  return new Promise((resolve, reject) => {
    const iframe = document.createElement("iframe");
    // No `allow-same-origin`: the browser gives this document an opaque
    // ("null") origin, so it cannot access this page's DOM, storage, or
    // cookies, and any network request it makes carries no credentials for
    // this origin. This is the actual security boundary — see docs/security.md.
    iframe.setAttribute("sandbox", "allow-scripts");
    iframe.style.display = "none";
    iframe.setAttribute("aria-hidden", "true");

    let settled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const cleanup = () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("message", onMessage);
      iframe.remove();
    };

    const settle = (fn: () => void) => {
      if (settled) return;
      settled = true;
      cleanup();
      fn();
    };

    function onMessage(event: MessageEvent) {
      if (event.source !== iframe.contentWindow) return;
      const msg = event.data as SandboxResponse;
      if (!msg || typeof msg !== "object") return;

      if (msg.kind === "ready") {
        const job = request.job;
        const toSend: SandboxRequest =
          request.kind === "run-handler"
            ? { kind: "run-handler", id, source: request.source, job }
            : { kind: "run-agent", id, source: request.source, job };
        iframe.contentWindow?.postMessage(toSend, "*");
        return;
      }
      if ("id" in msg && msg.id !== id) return;

      if (msg.kind === "trace") {
        onTrace?.(msg.text);
      } else if (msg.kind === "result") {
        settle(() => resolve(msg.value));
      } else if (msg.kind === "error") {
        settle(() => reject(new Error(msg.message)));
      }
    }

    window.addEventListener("message", onMessage);

    timer = setTimeout(() => {
      settle(() =>
        reject(
          new Error(
            `Handler timed out after ${timeoutMs}ms — the sandboxed run was terminated.`,
          ),
        ),
      );
    }, timeoutMs);

    iframe.srcdoc = buildSandboxDocument();
    document.body.appendChild(iframe);
  });
}

/** Narrow an `ActivatedJob`-shaped object to the JSON-safe fields the sandbox needs. */
export function toSandboxJob(job: {
  key: string;
  type: string;
  elementId: string;
  instanceKey: string;
  variables: Record<string, unknown>;
}): SandboxJob {
  return {
    key: job.key,
    type: job.type,
    elementId: job.elementId,
    instanceKey: job.instanceKey,
    variables: job.variables ?? {},
  };
}
