/**
 * The document that runs inside the sandboxed iframe. It is loaded via
 * `srcdoc` into an `<iframe sandbox="allow-scripts">` (deliberately WITHOUT
 * `allow-same-origin`), so the browser assigns it a unique, opaque ("null")
 * origin: it cannot read the host page's `document`, `localStorage`, cookies,
 * or make a credentialed request to the host's origin, no matter what the
 * reader-supplied source does. See docs/security.md.
 *
 * This is a plain-JS string, not a module: it runs with no build step, inside
 * a document the host constructs at runtime, so it can't import anything from
 * the app bundle. Keep it dependency-free.
 */
export function buildSandboxDocument(): string {
  const script = `
    "use strict";

    function post(message) {
      parent.postMessage(message, "*");
    }

    function textOf(variables, key, fallback) {
      var v = variables ? variables[key] : undefined;
      if (typeof v === "string") return v;
      return v == null ? (fallback === undefined ? "" : fallback) : String(v);
    }

    function numOf(variables, key, fallback) {
      var v = variables ? variables[key] : undefined;
      var n = typeof v === "number" ? v : Number(v);
      return Number.isFinite(n) ? n : (fallback === undefined ? 0 : fallback);
    }

    // Wrap a handler's variables so every read is recorded into readsOut, both
    // via the text()/num() accessors and via direct property access
    // (job.variables.riskBand). This is the raw material the host turns into a
    // data-dependency DAG (see reify.ts) — the write-set is the value the
    // handler returns; the read-set is captured here. Recording only observes
    // reads on data already inside the sandbox, so it changes nothing about the
    // origin isolation the iframe boundary provides.
    function recordingVariables(variables, readsOut) {
      if (!variables || typeof variables !== "object") return variables;
      return new Proxy(variables, {
        get: function (target, key, receiver) {
          if (typeof key === "string") readsOut[key] = true;
          return Reflect.get(target, key, receiver);
        },
      });
    }

    function sleep(ms) {
      return new Promise(function (resolve) { setTimeout(resolve, ms); });
    }

    // Correlate each delegated helper call (vision/image) with the host's
    // reply. The reader's source runs here, but vision/image must execute
    // host-side (only the host holds this run's image and the active brain),
    // so the helper posts a request and awaits the matching helper-result.
    var pendingCalls = {};
    var callSeq = 0;

    function callHost(kind, id, extra) {
      return new Promise(function (resolve, reject) {
        var callId = String(++callSeq);
        pendingCalls[callId] = { resolve: resolve, reject: reject };
        var msg = { kind: kind, id: id, callId: callId };
        if (extra) for (var k in extra) msg[k] = extra[k];
        post(msg);
      });
    }

    function compile(source, what) {
      // Deliberately still new Function(): the isolation here comes from the
      // opaque-origin iframe boundary, not from re-implementing a JS sandbox.
      var factory = new Function('"use strict"; return (' + source + ');');
      var fn = factory();
      if (typeof fn !== "function") throw new Error(what + " must evaluate to a function.");
      return fn;
    }

    function helpersFor(job, id, hasVision) {
      var helpers = {
        sleep: sleep,
        trace: function (text) { post({ kind: "trace", id: id, text: String(text) }); },
        text: function (key, fallback) { return textOf(job.variables, key, fallback); },
        num: function (key, fallback) { return numOf(job.variables, key, fallback); },
      };
      // Vision accessors bridge back to the host, and only exist when the host
      // wired vision for this run — mirroring the host-side helpersFor so a
      // handler in a non-imageInput example still sees helpers.vision as
      // undefined (calling it throws "not a function"), exactly as before.
      if (hasVision) {
        helpers.vision = function (prompt) {
          return callHost("vision-request", id, { prompt: String(prompt) });
        };
        helpers.image = function () {
          return callHost("image-request", id);
        };
      }
      return helpers;
    }

    async function handle(msg) {
      try {
        if (msg.kind === "run-handler") {
          var handler = compile(msg.source, "Handler code");
          var reads = {};
          var job = msg.job || {};
          var recordingJob = {
            key: job.key,
            type: job.type,
            elementId: job.elementId,
            instanceKey: job.instanceKey,
            variables: recordingVariables(job.variables, reads),
          };
          var out = await handler(recordingJob, helpersFor(recordingJob, msg.id, msg.hasVision));
          post({
            kind: "result",
            id: msg.id,
            value: out === undefined ? undefined : out,
            reads: Object.keys(reads),
          });
        } else if (msg.kind === "run-agent") {
          var agent = compile(msg.source, "Agent code");
          var result = await agent(msg.job);
          post({ kind: "result", id: msg.id, value: result });
        }
      } catch (e) {
        post({ kind: "error", id: msg.id, message: e && e.message ? e.message : String(e) });
      }
    }

    window.addEventListener("message", function (event) {
      var msg = event.data;
      if (!msg) return;
      // Host's reply to a delegated vision/image call: settle the waiter.
      if (msg.kind === "helper-result" || msg.kind === "helper-error") {
        var waiter = pendingCalls[msg.callId];
        if (!waiter) return;
        delete pendingCalls[msg.callId];
        if (msg.kind === "helper-result") waiter.resolve(msg.value);
        else waiter.reject(new Error(msg.message || "helper call failed"));
        return;
      }
      if (msg.kind !== "run-handler" && msg.kind !== "run-agent") return;
      handle(msg);
    });

    post({ kind: "ready" });
  `;
  return `<!doctype html><html><head><meta charset="utf-8"></head><body><script>${script}<\/script></body></html>`;
}
