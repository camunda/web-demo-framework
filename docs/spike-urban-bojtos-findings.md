# Spike: deploying an Urban app (jwulf/nano-ide) into the browser runner

Issue: [#23](https://github.com/camunda/web-demo-framework/issues/23). Code: `tools/spike-urban-bojtos/`.

## tl;dr

**Models and workers only, and only via a bundling step — with two additional
caveats found along the way (a message-event authoring gap, and a worker
signal-shape mismatch).** An Urban app's BPMN model and its process-level
behaviour deploy and run unmodified against this repo's engine binding
(`@nanobpm/bojtos-kit`) through a straightforward `EngineClient` adapter
(`BojtosEngineClient.ts`, demonstrated end-to-end in `demo.ts` against the
`create-urban-app` template's `greet` app). Everything else an Urban app
manifest describes — triggers, the data layer, surfaces, auth — is
meaningful only in a real Deno/Node host and does not belong in a "browser
profile" of an Urban app.

**Recommendation: nice-to-have, not a better authoring path for this repo's
examples than hand-written manifests**, for reasons in
["Is this worth pursuing?"](#is-this-worth-pursuing-as-an-authoring-path)
below.

## What was built

`tools/spike-urban-bojtos/BojtosEngineClient.ts` implements the `EngineClient`
seam documented at `packages/urban/src/runtime/core/host.ts` in jwulf/nano-ide
(re-declared locally, structurally — `@nanobpm/urban` isn't installable in
this repo; see the file's header comment), backed by a `BojtosSession` from
`@nanobpm/bojtos-kit` — the exact engine binding every example in this repo
already runs on:

| `EngineClient` method | Mapping |
| --- | --- |
| `deployResources` | Routes by content type (see below): BPMN → `session.deploy(xml)`; `.form` → an in-memory form map (`client.forms`, keyed by the schema's `id`); `.dmn` → **rejects loudly** (throws), since there is no DMN deploy path in this engine binding as of the pinned version (`docs/engine-coverage.md`, also confirmed independently by issue #15's finding). |
| `createInstance` | `session.createInstance`; `awaitCompletion` drains registered workers to quiescence (bojtos-kit is pull-based — a live engine pushes to workers, so this adapter simulates that push by draining after every mutating call) then reads the instance's variables back out of the snapshot. |
| `cancelInstance` | `session.cancelInstance`, direct. |
| `publishMessage` | `session.correlateMessage`, then drains. |
| `searchUserTasks` | Filters `session.snapshot().userTasks` by `state === "Created"` and the given filter. |
| `completeUserTask` | `session.completeUserTask`, then drains. |
| `registerWorker` | Collects the handler into a map; `#drain()` drives every registered handler through `bojtos-kit`'s own `dispatchWorkers`, translating its `ActivatedJob` shape into the `EngineJob` shape `EngineClient` handlers expect. `unsubscribe` removes it from the map. |
| `close` | `session.free()`. |

`demo.ts` runs the actual `create-urban-app` template's `greet` app
(`processes/greet.bpmn`, `forms/greeting.form`, ported from
`packages/create-urban-app/template` — fixtures under
`tools/spike-urban-bojtos/fixtures/`, see the caveat below) through this
adapter: deploy both resources, register a worker standing in for
`workers/greet.ts`, publish the `demo.greet-requested` message the way the
app's `webhook` trigger would, and assert the process instance completes.
Run it: `npm run spike:urban` (or `node --experimental-strip-types
tools/spike-urban-bojtos/demo.ts` directly). This repo's CI is pinned to Node
22, which requires the `--experimental-strip-types` flag to run plain
TypeScript directly via type-stripping (unlike this repo's other `tools/*`
scripts, which are plain `.mjs`); the `spike:urban` npm script already passes
that flag.

## The two things that block a full app (as anticipated by the issue)

1. **Workers don't cross the boundary.** `workers/greet.ts` in the real
   template imports `@nanobpm/urban`'s `AppApi` and calls
   `app.data.repo("greeting").insert(...)` — a SQLite-backed datasource that
   only exists in a Deno/Node host. The worker's *shape* (a plain async
   function taking `(job, app)`, returning variables to merge) is completely
   portable and would survive an esbuild bundling step unmodified; its
   *dependency on `app.data`* would not, because `app.data` (and the rest of
   `AppApi` — `app.engine`, `app.env`, `app.log`) has no meaningful browser
   implementation. The demo's worker is a hand-port of `greet.ts` with the
   `app.data` line swapped for a `trace()` call, which is exactly this
   repo's existing "compiled-source-in-editor" trade — editability over
   fidelity, same call this repo already makes for its own example handlers.
   **Bundling gets the code across the line; it does not get its
   dependencies across the line.** A "browser profile" of an Urban app would
   need either an in-browser stub `AppApi` (a fake `app.data` backed by
   nothing durable, IndexedDB, or an in-memory map) or would have to declare
   `app.data`/`app.env`/persistent state out of scope, same as this spike
   does.

2. **DMN and forms need routing rules.** Confirmed and implemented above:
   `deployResources` accepts all three content types in the Urban contract,
   `BojtosEngineClient` accepts two of them and rejects the third loudly.

## Two things NOT anticipated by the issue, found while doing the work

3. **The template's own BPMN doesn't deploy against this engine as authored.**
   `processes/greet.bpmn`'s message start event has a bare `messageRef` with
   no `zeebe:subscription correlationKey` — this is exactly the deploy-time
   error documented in `docs/engine-coverage.md`'s "Message intermediate
   catch event" row (`invalid message event in process …: message '…' has no
   zeebe:subscription correlationKey`), just on a *start* event instead of an
   intermediate catch. The fixture in `tools/spike-urban-bojtos/fixtures/`
   adds the missing `zeebe:subscription correlationKey="=who"` — everything
   else is unmodified from the upstream template. This isn't a bojtos-kit bug
   (Zeebe requires the same for a message start event); it means an author
   coming from a live Camunda 8 cluster, where a message start event with no
   explicit `zeebe:subscription` still deploys *engine-side* (the correlation
   key is then supplied by the message payload rather than validated at
   deploy time — behaviour that varies by engine version), could hit a
   deploy-time surprise moving into this browser runner that they wouldn't
   hit against a live cluster. Worth a line in any future "browser profile"
   documentation, not a blocker.

4. **The webhook trigger has no engine-native equivalent — it's application
   routing, not engine input.** Urban's `triggers[].type === "webhook"`
   describes an HTTP route the *host* serves and then translates into a
   `publishMessage` call (`action.message` / `action.correlationKey`, per
   `nano.app.json`) — there is no engine method it maps onto directly. This
   spike stands in for it by calling `publishMessage` with the same message
   name and correlation key the trigger's `action` declares, which is
   correct but means "deploying" a trigger really means "an application layer
   above `EngineClient` parses `nano.app.json`'s `triggers[]` and wires an HTTP
   handler that calls `publishMessage`" — this repo's runner does not have
   (and per the scope below, should not build) that layer.

## What's meaningful in a browser vs. what isn't

| Urban manifest section | Meaningful in this browser runner? |
| --- | --- |
| `models.processes` / `models.forms` (BPMN/form deploy) | **Yes** — demonstrated above. |
| `workers[]` (job handlers) | **Partially** — the handler shape/logic ports with a bundling step; anything depending on `AppApi.data`/`.engine`/`.env` does not, without a browser-side stub for each (out of scope here). |
| `triggers[]` (webhooks, schedules, etc.) | **No** natively — would need an application-layer router translating each trigger type into an `EngineClient` call, same shape as this spike's `publishMessage` stand-in, built once per trigger type. Not attempted here (out of scope per the issue). |
| `data` (SQLite datasource + migrations) | **No** — no durable storage layer in this runner at all; every example's "state" today is the engine's own instance variables. |
| `surfaces` (task inbox, generated pages) | **No** — these are server-rendered admin UIs over the data/task layer above; this repo's runner is a single example's UI, not a generated app shell. |
| `api` (OpenAPI + operations) | **No** — a REST API server has no browser equivalent; "operations" here would have to become in-page function calls, which is a different programming model than Urban's. |
| Auth / DB migrations / triggers' cron-type variants | **No**, and not attempted — genuinely out of scope per the issue. |

## Is this worth pursuing as an authoring path?

**No** — treat it as a nice-to-have, not a replacement for this repo's
hand-written manifest convention (`src/examples/<id>/{model.bpmn, forms,
handlers, manifest}`), for three reasons found doing this spike rather than
assumed going in:

1. **The parts of Urban that would make it a genuinely *better* authoring
   experience — a real IDE, the data layer, generated task-inbox/pages
   surfaces — are precisely the parts that don't survive the trip to a
   browser.** What's left after excluding them (a BPMN model, a form, and a
   handler function whose signature has to be hand-adapted anyway) is not
   meaningfully less work to author than this repo's existing convention; it
   is the same three artefacts with an extra translation step in between.
2. **The worker boundary isn't a bundling problem, it's a capability
   problem** (finding #1 above) — solving it properly needs an in-browser
   `AppApi` stub, which is a non-trivial framework feature in its own right,
   not a side effect of adopting Urban's authoring format.
3. **A real Urban app also carries triggers, data, and surfaces that mean
   nothing here** (see the table above) — importing an *arbitrary* Urban app
   would routinely require a human to first decide which parts of its
   manifest to keep, which defeats "authored in a real IDE" as a path to a
   *turnkey* demo page. The `BojtosEngineClient` seam this spike built is
   still useful as a general artefact (any future integration between this
   repo and a Nano-engine-family tool can reuse it), but adopting Urban's
   manifest format as this repo's *own* example-authoring convention is not
   recommended.

## Files

- `tools/spike-urban-bojtos/BojtosEngineClient.ts` — the `EngineClient`
  implementation over `BojtosSession`.
- `tools/spike-urban-bojtos/demo.ts` — runnable demonstration (`npm run
  spike:urban`).
- `tools/spike-urban-bojtos/fixtures/greet.bpmn`,
  `tools/spike-urban-bojtos/fixtures/greeting.form` — ported from
  jwulf/nano-ide's `packages/create-urban-app/template` (commit `ad18264a`),
  with the one required fix noted in finding #3 above.
