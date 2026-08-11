import type { ActivatedJob } from "@nanobpm/bojtos-react";
import type { TemplateMap } from "./templates";

/** A line in the run's activity log. */
export interface TraceEntry {
  kind: "start" | "agent" | "llm" | "tool" | "human" | "done" | "error" | "vars";
  text: string;
  /**
   * Stable id for an entry that updates in place — a streaming completion grows
   * one line rather than spamming forty.
   */
  key?: string;
  /** True while the entry is still being produced (renders a spinner). */
  pending?: boolean;
}

export type Trace = (entry: TraceEntry) => void;

/**
 * The helpers every editable handler receives as its second argument. Keeping
 * these out of the handler body means an example's code stays about the domain
 * ("look the marker up") rather than about the harness.
 */
export interface HandlerHelpers {
  sleep(ms: number): Promise<void>;
  trace(text: string): void;
  /** A string variable with a fallback — variables are `unknown` at runtime. */
  text(key: string, fallback?: string): string;
  /** A numeric variable with a fallback. */
  num(key: string, fallback?: number): number;
}

/** What an example's editable handler compiles to. */
export type ExampleHandler = (
  job: ActivatedJob,
  helpers: HandlerHelpers,
) => unknown;

/** One editable handler in the example's code panel. */
export interface HandlerDef {
  /** The BPMN element this serves. */
  elementId: string;
  /** What it stands in for on a real cluster, shown above the editor. */
  standsInFor?: string;
  /** The default editable source: an arrow-function expression. */
  source: string;
}

/** One selectable start scenario, rendered by the start form. */
export interface Scenario {
  label: string;
  /** Variables merged into the seed when this scenario is chosen. */
  variables: Record<string, unknown>;
}

/**
 * An example, as a manifest: model + code + optional LLM wiring. Everything
 * else — the tool manifest, the prompts, the job types, the forms — the runner
 * derives from the model.
 */
export interface ExampleDef {
  id: string;
  title: string;
  blurb: string;
  /** The BPMN XML. */
  bpmn: string;
  /** Camunda `.form` schemas by form id, for the start and user-task forms. */
  forms?: Record<string, unknown>;
  /** The starting payload. */
  seed: Record<string, unknown>;
  /** Optional preset scenarios offered above the start form. */
  scenarios?: Scenario[];
  /** Editable handlers, keyed by element id. */
  handlers: HandlerDef[];
  /**
   * The deterministic stand-in for the LLM, as editable source. Used by the
   * "Scripted" brain, and as the fallback when a live brain fails. Only needed
   * for a model with an agent.
   */
  scriptedAgent?: string;
  /**
   * Prompt (and other) text assets, by template name, substituted into `bpmn`
   * as `{{name}}` placeholders before both deploy and `parseModel` — see
   * `src/framework/templates.ts`. Convention: one file per template under
   * `prompts/<name>.md`, name being the file stem, loaded with
   * `import.meta.glob(...)` and merged with `createTemplateMap`. Optional —
   * an example with no templates behaves exactly as one whose `bpmn` has no
   * `{{...}}` placeholders at all.
   */
  templates?: TemplateMap;
}
