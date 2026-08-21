// Adapt a `@nanobpm/bojtos-kit` read-model session (the S4 read-model handle,
// nanobpm/bojtos#15) onto the `EngineReadModel` port that
// `@nanobpm/engine-testkit`'s `assertThat*` matchers assert over.
//
// The matchers are engine-agnostic: they read a process snapshot and answer
// user-task read queries through the small structural `EngineReadModel` port and
// never know which engine produced it. A `ReadModelBojtosSession` — the same
// in-browser wasm engine binding every example in this repo runs on, taken in
// its `variant: "readmodel"` shape so it also carries the gateway's
// Camunda-parity REST read channel — already surfaces both halves:
//
//   - `session.snapshot()` is the canonical parsed engine snapshot
//     (`instances` with per-instance `state`/`processId`/`variables`/
//     `activeElements`, plus snapshot-global `elementStats` and `incidents`) the
//     instance matchers read directly; and
//   - `session.searchUserTasks(filterJson)` is the engine's own user-task read
//     model, which the user-task matchers reach through this adapter.
//
// Feeding the matchers this handle keeps the read model a single source of truth
// (the canonical engine read model) rather than hand-deriving a second one.

import type { ReadModelBojtosSession } from "@nanobpm/bojtos-kit";
import type { EngineReadModel, UserTaskQuery, UserTaskRow } from "@nanobpm/engine-testkit";

/**
 * Wrap a {@link ReadModelBojtosSession} as an {@link EngineReadModel} the
 * `assertThat*` DSL asserts over. `snapshot()` is the session's own snapshot;
 * user-task reads go through the session's read-model `searchUserTasks`.
 *
 * The port requires an adapter to honour **every** `UserTaskQuery` field
 * (`processInstanceKey` / `state` / `assignee` / `candidateGroup`) — the DSL's
 * `hasAssignee` / `hasCandidateGroup` narrow by re-issuing the query and treating
 * a non-empty result as proof, so a silently-ignored filter would make those
 * assertions pass when they should fail. bojtos-kit's read-model
 * `searchUserTasks` honours only a `{ state }` filter, so we fetch the full set
 * and apply every filter here — the rows still come entirely from the canonical
 * read model; only the narrowing is done by the adapter.
 */
export function bojtosReadModel(session: ReadModelBojtosSession): EngineReadModel {
  const rows = (query: UserTaskQuery): readonly UserTaskRow[] =>
    session
      .searchUserTasks("{}")
      .items.filter(
        (t) => query.processInstanceKey === undefined || String(t.processInstanceKey) === query.processInstanceKey,
      )
      .filter((t) => query.state === undefined || t.state === query.state)
      .filter((t) => query.assignee === undefined || t.assignee === query.assignee)
      .filter((t) => query.candidateGroup === undefined || t.candidateGroups.includes(query.candidateGroup))
      .map((t) => ({ userTaskKey: String(t.userTaskKey), elementId: t.elementId }));

  return {
    snapshot: () => session.snapshot() as unknown as Record<string, unknown>,
    searchUserTasks: (query) => Promise.resolve(rows(query)),
    openUserTasks: (query) => Promise.resolve(rows({ ...query, state: "CREATED" })),
  };
}
