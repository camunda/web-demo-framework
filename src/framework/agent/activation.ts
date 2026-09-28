import type { AgentHandler, AgentResult } from "@nanobpm/bojtos-react";
import type { ToolSpec } from "../model";

/**
 * Give every tool activation the `toolCall` context its `fromAi(...)` inputs
 * are written against.
 *
 * A tool's arguments are declared in the model as
 * `fromAi(toolCall.geneMarker, "…", "string")` inside that element's input
 * mappings, and the engine evaluates those mappings when the agent activates
 * the element. `toolCall` is a **local** variable of the activation — the
 * engine seeds it from `AgentActivation.variables` (Camunda's agentic
 * `JobResult.activateElements[].variables`) — so an activation that carries no
 * `toolCall` leaves every `fromAi(...)` resolving to `null`. That is not a
 * quiet no-op: a null argument either raises an incident (`string length:
 * expected a string, got null`) or, worse, *shadows* a same-named instance
 * variable with null for the whole activation, which is how the orchestrator's
 * specialists came to be started with no request text at all.
 *
 * Agent handlers — scripted sources, `liveAgent`, an example's own stand-in —
 * all produce the model's argument names in one flat `variables` bag, which is
 * the namespace `liveAgent` documents and every example already writes. This
 * adapter is what turns that bag into per-activation `toolCall` context, using
 * the argument names parsed off the diagram, so no example has to restate its
 * own tool signatures in code.
 */
export function seedToolCallArgs(result: AgentResult, tools: ToolSpec[]): AgentResult {
  const activations = result.activateElements;
  if (!activations?.length) return result;

  const byElementId = new Map(tools.map((t) => [t.elementId, t]));
  const supplied = result.variables ?? {};

  return {
    ...result,
    activateElements: activations.map((activation) => {
      // An activation that already names its own `toolCall` wins: a handler
      // that wants to send an argument under a name the diagram doesn't
      // declare (or to drive two activations of one tool with different
      // arguments) can still say so explicitly.
      if (activation.variables?.toolCall !== undefined) return activation;

      const args: Record<string, unknown> = {};
      for (const arg of byElementId.get(activation.elementId)?.args ?? []) {
        const value = supplied[arg.name];
        if (value !== undefined) args[arg.name] = value;
      }
      if (Object.keys(args).length === 0) return activation;

      return { ...activation, variables: { ...activation.variables, toolCall: args } };
    }),
  };
}

/** {@link seedToolCallArgs}, applied to everything one agent handler returns. */
export function withToolCallArgs(handler: AgentHandler, tools: ToolSpec[]): AgentHandler {
  return async (job) => seedToolCallArgs(await handler(job), tools);
}
