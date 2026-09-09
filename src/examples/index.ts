import type { ExampleDef, ExampleMeta } from "../framework/types";
import seedExportComplianceMeta from "./seed-export-compliance/meta";
import loanOriginationMeta from "./loan-origination/meta";
import orderProcessMeta from "./order-process/meta";
import rocketLaunchMeta from "./rocket-launch/meta";
import orderProcessBoundaryEventsMeta from "./order-process-boundary-events/meta";
import plateRecognitionMeta from "./plate-recognition/meta";
import invoicePaymentMeta from "./invoice-payment/meta";

/**
 * The gallery is a list of cards; only the example a reader actually opens
 * needs its model, forms and handler source. So this file imports **metadata**
 * eagerly and leaves the payload behind a dynamic import (see
 * {@link loadExample}).
 *
 * Importing the manifests directly instead put every example's `model.bpmn`,
 * every `.form` schema and every handler's source on the initial-load path —
 * around 3 kB gzip each, against a budget with single-digit kB of headroom
 * (`tools/bundle-budget/check.mjs`). That made every new example a bundle
 * regression, which is the wrong incentive for a repo whose whole point is
 * having more of them.
 */

/** Every hand-listed scenario example the gallery offers, in display order. */
const scenarioMeta: ExampleMeta[] = [
  rocketLaunchMeta,
  seedExportComplianceMeta,
  loanOriginationMeta,
  invoicePaymentMeta,
  orderProcessMeta,
  orderProcessBoundaryEventsMeta,
  plateRecognitionMeta,
];

/**
 * "Learn BPMN" examples (issue #64: one runnable page per BPMN construct) are
 * discovered automatically instead of hand-listed here — every sibling
 * construct-page task lives in its own `src/examples/learn-<construct>/`
 * directory and never needs to touch this file, so N parallel PRs adding N
 * pages can never collide on the same lines.
 *
 * **Registration convention**: a `learn-*` directory exports its
 * `ExampleMeta` as the default export of `meta.ts`, and its `ExampleDef` as
 * the default export of `index.ts`. Only the first is loaded eagerly. Do not
 * add a new `learn-*` example to this file by hand — that would defeat the
 * point of this mechanism.
 */
const learnBpmnMetaModules = import.meta.glob("./learn-*/meta.ts", {
  eager: true,
}) as Record<string, { default: ExampleMeta }>;

const learnBpmnMeta: ExampleMeta[] = Object.values(learnBpmnMetaModules)
  .map((mod) => mod.default)
  .sort((a, b) => a.id.localeCompare(b.id));

/**
 * Every example the gallery offers, as cards: hand-listed scenarios plus every
 * auto-discovered `learn-bpmn` construct page. Metadata only — call
 * {@link loadExample} for the runnable definition.
 */
export const EXAMPLES: ExampleMeta[] = [...scenarioMeta, ...learnBpmnMeta];

/**
 * Every example manifest, as a lazy import. Deliberately not `eager`: each
 * becomes its own chunk, fetched when that example is opened and never before.
 */
const manifests = import.meta.glob("./*/index.ts") as Record<
  string,
  () => Promise<Record<string, unknown>>
>;

/**
 * Load one example's runnable definition.
 *
 * Scenario manifests export their `ExampleDef` under a named export and
 * `learn-*` ones under `default`, so this takes whichever export is an
 * `ExampleDef` carrying this id, rather than making every folder restate the
 * convention.
 */
export async function loadExample(id: string): Promise<ExampleDef> {
  const load = manifests[`./${id}/index.ts`];
  if (!load) throw new Error(`No example manifest for "${id}"`);
  const mod = await load();
  const def = Object.values(mod).find(
    (value): value is ExampleDef =>
      !!value && typeof value === "object" && (value as ExampleDef).id === id,
  );
  if (!def) {
    throw new Error(
      `Manifest for "${id}" exports no ExampleDef with that id — check src/examples/${id}/index.ts`,
    );
  }
  return def;
}
