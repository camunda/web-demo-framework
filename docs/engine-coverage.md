# Engine coverage report

What `@nanobpm/engine-wasm` — the in-browser wasm engine every example in this
repo runs on — actually supports, established by running it, not by reading
its docs. Handing someone an example built on an unsupported BPMN construct
wastes the task and fails as a mysterious browser stall; this table exists so
that decision is made up front, in seconds, on the command line.

**Engine version this report targets:** whatever `@nanobpm/engine-wasm` version
`package.json` declares — a semver range, currently `^0.7.1`, consumed via
`@nanobpm/bojtos-kit`, so the installed engine is the highest patch/minor that
range admits. This report is re-run and diffed on every engine bump (see
below), so it always describes the currently-installed engine rather than a
frozen version number.

**Re-run and diff when the engine updates:**

```sh
npm run probe -- src/examples/seed-export-compliance/model.bpmn
node tools/probe/coverage-check.mjs
```

If `coverage-check.mjs` reports a regression (a previously-✅ construct now
fails), update the table below and treat it as a breaking engine change worth
flagging loudly — an example relying on it will now fail the same way.

## How this table was produced

Two tools, both under `tools/probe/`:

- **`tools/probe/index.mjs`** (`npm run probe -- <file>`) — deploys one
  arbitrary `.bpmn` file, statically analyzes it (process ids, job types by
  element, user tasks, timers, message/signal subscriptions, DMN business-rule
  references, compensation handlers), registers a stub handler for every job
  type it finds, and drives the instance to quiescence — generically
  unblocking whatever it's waiting on next (complete a user task with `{}`,
  advance the clock past a due timer, correlate a waiting message, broadcast a
  waiting signal) — reporting whether it reached completion and any incidents
  raised along the way. This is the tool an example author runs against their
  own model before spending more time on it.
- **`tools/probe/coverage-check.mjs`** — the fixture harness behind this
  specific table. It runs a small, deliberately minimal `.bpmn` fixture per
  candidate construct (under `tools/probe/fixtures/`) and asserts the
  construct-specific behaviour that matters (e.g. that an error boundary
  event's outgoing flow — not the task's own happy path — is the one actually
  taken). Not wired into `npm run probe`; it's the tool that regenerates the
  "verified" claims below.

**Verified** below means: this repo's engine version actually ran the
construct and produced the stated result, via one of the two tools above.
**Assumed** means: not run — usually because doing so needs application-level
plumbing (a real DMN deploy path, browser-only APIs) this report deliberately
doesn't build.

## Compatibility table

| Construct | Status | Notes |
| --- | --- | --- |
| Plain service tasks, sequential flow | ✅ Verified | `src/examples/order-process/model.bpmn` — 3 service tasks, straight-line flow, completes in 4 rounds, 0 incidents. |
| AI Agent ad-hoc sub-process + tool activation | ✅ Verified | `src/examples/seed-export-compliance/model.bpmn` — 1 agent host job (`io.camunda.agenticai:aiagent-job-worker:1`), 4 tool job types (`connector-jdbc`, `connector-graphql`, `http-json`, and a `scriptTask` typed by its own element id), completes in 5 rounds via `AgentResult.activateElements`. |
| User tasks + forms | ✅ Verified | Both examples' `userTask`/`formId` bindings resolve; `completeUserTask` unblocks the waiting instance (`tools/probe/index.mjs`'s generic drive loop). |
| Timer intermediate catch event (`timeDuration`) | ✅ Verified | `tools/probe/fixtures/timer.bpmn` — `session.advanceTime()` past the timer's `dueInMs` fires it; the instance proceeds and completes. `timeDate` / `timeCycle` were not separately probed — same code path is assumed to apply, but treat as **assumed** until run. |
| Message intermediate catch event + correlation | ✅ Verified | `tools/probe/fixtures/message.bpmn` — requires `zeebe:subscription correlationKey` on the `bpmn:message` (a bare `messageRef` with no subscription is a **deploy-time error**, not a silent no-op: `invalid message event in process …: message '…' has no zeebe:subscription correlationKey`). `session.correlateMessage(name, correlationKey, vars)` unblocks it. The fixture's key is the FEEL string literal `="probe-correlation-key"`, which Camunda Modeler encodes with numeric character references (`=&#34;…&#34;`); decoding those requires **engine-wasm ≥ 0.7.1** (Magikcraft/nano-bpm#885, fixed in #887) — on 0.7.0 the raw `&#34;` reached FEEL and raised an incident. |
| Signal intermediate catch event + broadcast | ✅ Verified | `tools/probe/fixtures/signal.bpmn` — `session.broadcastSignal(name, vars)` unblocks every matching open subscription; completes in 3 rounds. |
| Error boundary event | ✅ Verified | `tools/probe/fixtures/error-boundary.bpmn` — `session.throwError(jobKey, errorCode, message)` on the activated job routes the token through the attached boundary event's outgoing flow (confirmed via `snapshot.takenSequenceFlows`), not the task's own happy-path flow. Note: a job handler dispatched through `dispatchRound`/`dispatchWorkers` has no way to trigger this — those only support `completeJob`/`failJob` — so exercising this path means calling `activateJobs` + `throwError` directly against the session, as `coverage-check.mjs` does. |
| Exclusive gateway (conditional sequence flow) | ✅ Verified | `tools/probe/fixtures/exclusive-gateway.bpmn` — a `serviceTask` sets the branching variable (`route`), followed by an `exclusiveGateway` with one conditional flow (`=route = "fast"`) and one `default` flow. Probed via `npm run probe -- tools/probe/fixtures/exclusive-gateway.bpmn --seed '{"route":"fast"}'` and again with `--seed '{"route":"slow"}'` (and no seed at all): `snapshot.takenSequenceFlows` confirms `route: "fast"` takes `Decide→FastPath`, while `route: "slow"` and the unset/no-seed case both correctly fall through to the `default` flow `Decide→SlowPath` — every instance completes, 0 incidents in all three cases. |
| Compensation (throw + boundary compensation handler) | ❌ **Not modelled (rejected at deploy)** | `tools/probe/fixtures/compensation.bpmn` — the engine's deploy-validation parity (#850) rejects `<compensateEventDefinition>` with `unsupported element <compensateEventDefinition> … Nano does not model this construct`, rather than silently degrading it. (The old "✅ Verified, completes in 2 rounds" note reflected engine-wasm 0.3.0, which *parsed* compensation but never truly executed the handler — a silent degrade the deploy-validation work correctly closed.) Modelling + executing compensation is tracked in **Magikcraft/nano-bpm#886**; `coverage-check.mjs` asserts the rejection until then. |
| Multi-instance (parallel) service task | ✅ Verified | `tools/probe/fixtures/multi-instance.bpmn` — a `zeebe:loopCharacteristics inputCollection` over a 3-element array activates 3 separate job instances of the same element id, all handled by one stub worker keyed by job type; completes once every element instance does (2 rounds). Multi-instance is only recognized when `inputCollection` is actually declared — a bare `multiInstanceLoopCharacteristics` with none degenerates to an ordinary single-instance activity (confirmed against the engine's own source, not just its behaviour). Sequential multi-instance (`isSequential="true"`) was **not** separately probed — treat as assumed. |
| DMN business rule task / decision evaluation | ❌ **Not supported end-to-end from this framework** | `tools/probe/fixtures/dmn-business-rule.bpmn` — a `businessRuleTask` with a `zeebe:calledDecision` deploys fine at the BPMN level, but with no matching decision deployed (there is currently no `.dmn` deploy path in this repo's tooling — see issue #23's finding), the task raises an immediate incident: `no deployed decision with id '…' for business rule task '…'`. This confirms the engine *does* have decision-evaluation machinery (the incident names a decision id it looked for, and `Snapshot.decisionInstances` exists in the type surface) — but this repo has no way to get a compiled decision table into it yet. **A DMN example task should not proceed until a `.dmn` deploy path exists.** |
| Compensation across multiple activities, cancel-on-compensate, nested sub-processes | ⚠️ Assumed | Not probed. Even the single-activity compensation path is not modelled yet (rejected at deploy — see the compensation row above and Magikcraft/nano-bpm#886); broader compensation semantics (compensating a whole sub-process, `cancelRemainingInstances`) are further out. |
| Escalation events, non-interrupting boundary events, event sub-processes | ⚠️ Assumed | Not probed — no candidate fixture built yet. Probe before relying on these in an example. |

## Issue #15 finding: DMN business rule example — not pursued

Issue #15 asked for a DMN business-rule example to be brought into the repo,
contingent on DMN evaluation working end-to-end. It does not, and this section
records the independent re-verification (done at the time against the
then-pinned `@nanobpm/engine-wasm@0.3.0` / `@nanobpm/bojtos-kit@0.4.0`)
confirming the row above rather than superseding it. The finding still holds on
the currently-pinned engine — the coverage harness continues to report the same
"no deployed decision" incident (there is still no `.dmn` deploy path in this
repo's tooling).

Re-running the existing fixture reproduces the same incident:

```
$ npm run probe -- tools/probe/fixtures/dmn-business-rule.bpmn

=== tools/probe/fixtures/dmn-business-rule.bpmn ===
process ids: probe-dmn

job types by element:
  (none)

user tasks:
  (none)

timers:
  (none)

message subscriptions:
  (none)

signal subscriptions:
  (none)

business rule (DMN) tasks:
  - Decide → decision "probe-decision"

run result:
  - probe-dmn: completed=false rounds=1 incidents=1
      ⚠ incident on Decide (decisionEvaluation): no deployed decision with id 'probe-decision' for business rule task 'probe-decision'
```

Inspecting `@nanobpm/bojtos-kit`'s `BojtosSession` interface directly confirms
why: `deploy(xml: string): { processIds: string[] }` accepts only BPMN XML —
there is no `.dmn` (or combined-resource) argument anywhere in the session API
that a compiled decision table could travel through. The engine's own
decision-evaluation machinery is real (the incident names the decision id it
looked for), but nothing in this repo's tooling can get a decision *into* it,
so a `businessRuleTask` will always raise this incident regardless of the
model or manifest built around it.

**Decision: closing #15 without adding an example.** Bringing in a `.dmn` file,
a business rule task, and a manifest as the issue describes would only
reproduce this same incident in the browser — there is no way to make the
acceptance criteria's "the decision evaluates in the browser" branch true
without first building a `.dmn` deploy path, which is out of scope for this
task (and is the same gap issue #23's spike separately identified for Urban
app resources). Revisit this example once a `.dmn` deploy path exists in
`@nanobpm/bojtos-kit` or this repo's tooling.

## Using the probe on a new example

Before building an example around an unfamiliar construct, run it through the
engine first:

```sh
npm run probe -- path/to/your/model.bpmn
```

A clean run with `completed=true` and `incidents=0` is a green light. An
incident, a "still waiting on: timer:…" with no further progress, or a deploy-
time parse error are all findings worth having *before* writing handler code —
not after.
