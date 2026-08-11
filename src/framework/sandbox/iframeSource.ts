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

    function sleep(ms) {
      return new Promise(function (resolve) { setTimeout(resolve, ms); });
    }

    function compile(source, what) {
      // Deliberately still new Function(): the isolation here comes from the
      // opaque-origin iframe boundary, not from re-implementing a JS sandbox.
      var factory = new Function('"use strict"; return (' + source + ');');
      var fn = factory();
      if (typeof fn !== "function") throw new Error(what + " must evaluate to a function.");
      return fn;
    }

    function helpersFor(job, id) {
      return {
        sleep: sleep,
        trace: function (text) { post({ kind: "trace", id: id, text: String(text) }); },
        text: function (key, fallback) { return textOf(job.variables, key, fallback); },
        num: function (key, fallback) { return numOf(job.variables, key, fallback); },
      };
    }

    async function handle(msg) {
      try {
        if (msg.kind === "run-handler") {
          var handler = compile(msg.source, "Handler code");
          var out = await handler(msg.job, helpersFor(msg.job, msg.id));
          post({ kind: "result", id: msg.id, value: out === undefined ? undefined : out });
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
      if (!msg || (msg.kind !== "run-handler" && msg.kind !== "run-agent")) return;
      handle(msg);
    });

    post({ kind: "ready" });
  `;
  return `<!doctype html><html><head><meta charset="utf-8"></head><body><script>${script}<\/script></body></html>`;
}
