# Security: reader-supplied code, sandboxing, and hosting decisions

This document covers issue #18 of the "runnable docs demos" epic: `new
Function`-executed reader code is safe only as long as the code is
self-authored and the page is only ever opened locally. Two planned features
break both of those assumptions, so this is written down before either lands.

## Threat model

**Who supplies the code.** Every example ships editable "handler" source (one
per BPMN service/script task) and, for agentic examples, a "scripted agent"
fallback. Today a reader edits that source themselves, in their own tab, and
presses Run — self-XSS at worst, since nobody but the reader benefits from
attacking themselves.

That stops being true the moment either of these lands:

- **Deep-linking edited source in the URL.** The whole point of a "share this
  run" link is that the recipient didn't write the code in it. A crafted link
  makes the code **attacker-supplied**, and the person who opens it is the
  victim, not the author.
- **An embed mode on a Camunda origin** (docs.camunda.io, camunda.com, or
  whatever the demo is iframed into). Anything that executes in that origin's
  page can, if unsandboxed, reach that origin's `document`, `localStorage`,
  and any cookies/credentials scoped to it, and can make same-origin
  credentialed requests. A docs page is a materially more valuable target than
  a throwaway static demo host.

**Whose origin executes it, and what that origin can reach.** Before this
change: the host page's own origin, with full access to its `document`,
`localStorage`, and (if embedded on a Camunda origin) that origin's cookies
and any same-origin credentialed fetch. Static hosting (serving prebuilt
files with no server-side logic) mitigates **neither** bullet above — the
code still runs in the visitor's browser, in the page's origin, on every
visit; there is no server in the loop to filter a malicious link before it
reaches a browser.

**What must never happen, regardless of any other decision below:** code that
arrives via a URL must never auto-run. It must land in the editor, visible,
and a human has to press Run. This is a hard product rule, not a stopgap —
sandboxing the execution reduces the *blast radius* of a click, it doesn't
replace the requirement that the click be informed and explicit.

## Execution boundary: sandboxed iframe, not the page origin

Implemented in `src/framework/sandbox/`:

- `compile.ts` no longer executes reader source at all. It does one
  **syntax preflight** (`new Function` to confirm the source evaluates to a
  function — never called) purely so a typo is still reported next to the
  editor before a run starts, matching the existing UX. The function object
  that preflight produces is discarded.
- The actual call — `handler(job, helpers)` or `agent(job)` — happens inside
  a **freshly created `<iframe sandbox="allow-scripts">`**, loaded via
  `srcdoc`, **without** `allow-same-origin`. Per the HTML sandbox spec, an
  iframe sandboxed this way is assigned a unique, opaque (`"null"`) origin:
  same-origin policy blocks it from reaching `parent.document`, this page's
  `localStorage`, or this page's cookies, and any network request it issues
  carries no credentials scoped to this page's origin. That is the actual
  security boundary; `new Function` inside the iframe is still used to
  compile the source, but *where* it runs — not how it's parsed — is what
  makes this safe.
- Communication is a narrow `postMessage` protocol (`sandbox/protocol.ts`):
  job in (a JSON-safe subset of `ActivatedJob`), result or error out, plus an
  optional `trace` message while it runs. No function ever crosses the
  boundary — `sleep`/`text`/`num` are reimplemented inside the sandbox
  document itself (same logic as the host's `helpersFor`, but computed
  locally since a real function can't be structured-cloned across
  `postMessage`); only `trace(...)` calls are relayed back to the host's
  activity log.
- **One iframe per call**, torn down immediately after it settles. This gives
  two properties for free: a handler that hangs is survivable (there is no
  graceful way to stop code that never yields, so the host just destroys the
  iframe on a timeout — default 5s — and the page never blocks), and runs
  don't leak state into each other (no global a previous call's source
  polluted, no closure held across turns).
- A handler that **throws** still surfaces as a normal job failure —
  `dispatchRound`'s existing incident path is untouched, since the sandbox
  just turns a thrown error into a rejected `Promise`, exactly like the old
  in-page call did.

See `src/framework/sandbox/selfTest.ts` for a **live, in-browser**
demonstration that a sandboxed handler cannot read `parent.document` or write
this page's `localStorage`, that a thrown error surfaces, and that a hang
times out instead of freezing the tab. It is deliberately not an automated
CI test: **jsdom does not implement `iframe sandbox` origin isolation at
all**, so a test run under it would pass unconditionally, even if this
boundary were completely broken, and would therefore be actively misleading.
Run it yourself: `npm run dev`, open devtools, `await
window.__runSandboxSelfTest()`.

## Content-Security-Policy: the `connect-src` tension

The hosted page should ship a CSP restricting `connect-src` to what it
actually needs — but one brain's whole purpose is to reach an **arbitrary,
user-supplied local model server** (the Endpoint/Ollama brain, whose base URL
is a text field the reader types in). A static `connect-src` allowlist
cannot enumerate every port a reader might run Ollama, LM Studio, or vLLM on.

**Decision:** don't try to allowlist the user's local endpoint at all.
`localEndpointBlockedReason` (`src/framework/brains/endpoint.ts`) already
establishes that the Endpoint brain only works when *the page itself* is
served from `localhost` — a hosted page can't reach `http://localhost:11434`
regardless of CSP, because Ollama's own CORS allowlist covers localhost
origins only. So:

- On a **hosted** deployment, `connect-src` is a fixed, narrow allowlist: the
  page's own origin, plus the specific hosts WebLLM needs to fetch model
  weights and the compiled wasm engine from (`https://huggingface.co
  https://cdn-lfs.huggingface.co https://raw.githubusercontent.com`, since
  `@mlc-ai/web-llm`'s prebuilt config points at those). `http://localhost:*`
  is **not** in a hosted CSP — the endpoint brain is already unusable there,
  documented as such in the UI, and adding it would only be a needless CSP
  hole. `font-src` additionally allows `data:`, since bpmn-js's own icon font
  ships as an inlined base64 `@font-face` in its stylesheet.
- In **local development** (`npm run dev`, page served from `localhost`), the
  endpoint brain's whole value proposition is reaching a local server on an
  arbitrary port, and CSP is not the layer that should fight that on a
  developer's own machine. The dev server does not need to (and per Vite's
  own defaults, does not) ship the production CSP.
- The sandboxed iframe (`sandbox="allow-scripts"`, no `allow-same-origin`) has
  its own opaque origin and is not a page CSP inherits into automatically for
  `connect-src` purposes in the same way — but since it also can't read this
  origin's cookies, an unrestricted fetch from inside it still can't exfiltrate
  anything scoped to the host, which is the property that actually matters
  here.

`index.html` ships a baseline CSP meta tag reflecting this. It intentionally
does **not** try to be a substitute for real HTTP response headers — a
`<meta http-equiv="Content-Security-Policy">` tag cannot set `frame-ancestors`
or report-only mode, so **whoever owns the hosting decision (issue #19) must
set the equivalent as a real response header**, not rely on this tag alone.

**Why `script-src` still allows `'unsafe-eval'`/`'unsafe-inline'`.** The
framework's whole editing model is runtime-compiled reader source — both the
host's syntax preflight and the sandbox's real compilation use `new
Function`, and the sandbox document is a hand-written inline `<script>` (kept
dependency-free and build-step-free on purpose). A `srcdoc` iframe without
its own CSP inherits the embedding document's policy, so a strict `script-src
'self'` with neither directive would break the sandbox's own inline script
and its `new Function` call — not the reader's code specifically, the
mechanism this whole framework is built on. Given that, `unsafe-eval`/
`unsafe-inline` are a deliberate, accepted tradeoff: CSP's `script-src`
governs *what is allowed to run*, but the actual containment here is the
opaque-origin iframe boundary above, which governs *what running code can
reach*. Loosening the former doesn't weaken the latter.

## Editing inside an embed

**Decision:** embed mode is **read-only**, with a visible "open full page" link
out. A docs page embedding this demo already trusts *this framework's own
example code* (author-supplied, reviewed, in the repo); it should not also
have to reason about a visitor typing arbitrary JavaScript into a form
embedded inside a Camunda property. The Monaco editor / code tabs simply
don't render in `?embed=1` (routing and the exact embed contract are owned by
issue #8, which is explicitly told to leave the "edited source in the URL"
feature out until this task lands — so there is nothing to gate here yet
beyond stating the decision the embed work should follow).

## Prefer a separate origin, in addition to the sandbox

**Decision:** even with the sandbox boundary in place, this demo should be
served from a **separate origin** from any Camunda property that carries
session cookies — e.g. `demos.camunda.io`, not a path under `camunda.com` or
`docs.camunda.io`. Reasoning: the sandbox boundary depends on one HTML
attribute (`sandbox="allow-scripts"` *without* `allow-same-origin`) being
correct on every iframe, forever, across every future change to this
codebase. A single accidental `allow-same-origin` addition — an easy mistake
when someone later "just needs one thing" from the parent — silently
reopens the null-origin isolation. If the demo's own origin holds no
Camunda session cookies to begin with, that mistake degrades to self-XSS
again instead of a same-site credential leak. Origin separation and the
iframe sandbox are complementary, not redundant: prefer both, so no single
misconfiguration is the only thing standing between a shared URL and
camunda.io credentials. (Hosting/origin choice itself is owned by issue #19;
this is the constraint that decision should satisfy.)

## What's out of scope here

- Choosing the actual hosting origin, CI/CD, and repo visibility — issue #19.
- The URL/embed routing contract itself — issue #8 (deliberately does not
  add "edited source in the URL" yet, per its own task description).
- DevTools access: nothing here (or realistically achievable client-side)
  stops a reader from opening devtools and inspecting their *own* browser.
  The threat this addresses is code reaching somewhere the reader didn't
  intend — another origin's data — not a reader inspecting their own page.
