import type { ExampleDef } from "../framework/types";
import { seedExportCompliance } from "./seed-export-compliance";
import { loanOrigination } from "./loan-origination";
import { orderProcess } from "./order-process";
import { rocketLaunch } from "./rocket-launch";
import { orderProcessBoundaryEvents } from "./order-process-boundary-events";
import { plateRecognition } from "./plate-recognition";

/** Every hand-listed scenario example the gallery offers. Adding one means
 *  adding a manifest here. */
const scenarioExamples: ExampleDef[] = [
  rocketLaunch,
  seedExportCompliance,
  loanOrigination,
  orderProcess,
  orderProcessBoundaryEvents,
  plateRecognition,
];

/**
 * "Learn BPMN" examples (issue #64: one runnable page per BPMN construct) are
 * discovered automatically instead of hand-listed here — every sibling
 * construct-page task lives in its own `src/examples/learn-<construct>/`
 * directory and never needs to touch this file, so N parallel PRs adding N
 * pages can never collide on the same lines.
 *
 * **Registration convention**: a `learn-*` directory's `index.ts` must export
 * its `ExampleDef` as its **default export**. `import.meta.glob(..., { eager:
 * true })` mirrors the existing convention this repo already uses for
 * `templates`/`prompts` (see `src/framework/templates.ts` and e.g.
 * `seed-export-compliance/index.ts`) — it loads every matching module eagerly
 * at build time; the default export of each is collected below and merged
 * into `EXAMPLES` alongside the hand-listed scenario examples. Do not add a
 * new `learn-*` example to this file by hand — that would defeat the point of
 * this mechanism.
 */
const learnBpmnModules = import.meta.glob("./learn-*/index.ts", {
  eager: true,
}) as Record<string, { default: ExampleDef }>;

const learnBpmnExamples: ExampleDef[] = Object.values(learnBpmnModules)
  .map((mod) => mod.default)
  .sort((a, b) => a.id.localeCompare(b.id));

/** Every example the gallery offers: hand-listed scenarios plus every
 *  auto-discovered `learn-bpmn` construct page. */
export const EXAMPLES: ExampleDef[] = [...scenarioExamples, ...learnBpmnExamples];
