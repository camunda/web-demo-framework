import type { ExampleDef } from "../../framework/types";
import meta from "./meta";
import bpmn from "./model.bpmn?raw";
import expensePolicyDmn from "./expense-policy.dmn?raw";
import claimStartForm from "./expense-claim-start.form.json";
import claimReviewForm from "./expense-claim-review.form.json";

/**
 * Camunda's **decision agent** — the "Decision" tab of
 * camunda.com/orchestrate/agents, ported from
 * `camunda/camunda-8-tutorials/examples/decision-agent`.
 *
 * The DMN table is shipped **verbatim** from upstream and really is evaluated
 * here: `decisions` hands `expense-policy.dmn` to `session.deployDecision`
 * before the diagram is deployed, and `BusinessRuleTask_EvaluatePolicy`'s
 * `zeebe:calledDecision` resolves it and writes its output to `policyDecision`.
 * docs/engine-coverage.md's business-rule row records the older state of
 * affairs — a task whose decision was never deployed, raising an incident
 * naming it — because until this example there was no `.dmn` deploy path in
 * the framework at all. There is one now, and all four of upstream's scenarios
 * produce upstream's stated verdicts unchanged, `FIRST` hit policy, `(75..150]`
 * ranges, `not("USD")` and all.
 *
 * **Divergences from the upstream model**, for whoever next syncs it:
 *
 * 1. The four `bpmn:linkEventDefinition` events are gone. Upstream throws
 *    `Approve`/`Reject` out of the policy gateway and catches them beside the
 *    notification tasks, purely to avoid two long edges crossing the agent.
 *    This engine does not broadcast an intermediate throw event at all — the
 *    token carries on and *nothing receives it* (docs/engine-coverage.md;
 *    link throws are Magikcraft/nano-bpm#1157 specifically), so a clear-cut
 *    claim would have vanished at `Event_08k9fom` with no incident to say so.
 *    `Flow_PolicyApproved`/`Flow_PolicyRejected` keep their upstream ids and
 *    labels and now target the notification tasks directly; both tasks keep
 *    the two incoming flows upstream gave them. Only the hop in the middle is
 *    gone.
 * 2. `agentDecision`/`agentReasoning` come from the agent's final turn rather
 *    than from the connector's `agent.responseJson.*` output mappings, which
 *    this engine doesn't apply (the same divergence `bank-support`,
 *    `fraud-alert-triage` and `credit-line-increase` record). Upstream leans
 *    on those mappings harder than any of them: it deliberately ships **no**
 *    "record the decision" tool, because the JSON response schema is what
 *    populates the two variables once the model stops calling tools. The
 *    `data.response.format.schema` input goes with the mappings;
 *    `schemaName` stays, and the system prompt still asks for exactly
 *    `decision` and `reasoning`. `SCRIPTED_AGENT` writes them through
 *    `AgentResult.variables` on the turn it sets `completionConditionFulfilled`.
 * 3. Worth knowing, and left deliberately: a **live** brain ends its run with
 *    `{"done": true}`, which `agent/liveAgent.ts` turns into a bare
 *    `completionConditionFulfilled` carrying no variables. So on a live brain
 *    `agentDecision` is unset, and `Gateway_AgentOutcome` falls through to its
 *    default — the claim reaches `Review expense claim` instead of a
 *    notification. That is the direction this gateway is built to fail in
 *    (see the last point below), so it is left as is rather than papered over
 *    with a recording tool upstream doesn't have.
 * 4. `ConvertCurrency`'s arguments are renamed `amount` → `claimAmount` and
 *    `fromCurrency` → `claimCurrency`. An agent's arguments arrive as one flat
 *    bag at instance scope (see `framework/agent/activation.ts`), so an
 *    argument called `amount` would let a model overwrite the claim's own
 *    amount — the number the DMN table just read, the review form shows and
 *    the notifications report. `fraud-alert-triage` divergence 4 renames for
 *    the same reason.
 * 5. Those two arguments' descriptions no longer name a currency code.
 *    Upstream's reads "e.g. EUR or GBP", and EUR is the gray-zone scenario's
 *    own answer — the exact leak `src/examples/models.test.ts` guards against,
 *    and the one that made `seed-export-compliance` produce one scenario's
 *    result for every scenario. They state the format instead ("three-letter
 *    code, copied exactly as it appears on the claim"), which asks a small
 *    model to copy rather than to recall.
 * 6. The three HTTP connectors are stand-in handlers — no network in a
 *    sandboxed browser demo. `ConvertCurrency` answers from a small fixed
 *    ECB-style rate table covering the three currencies the start form offers.
 *    The two notifications keep their static connector configuration and lose
 *    their `body` input mapping: it read `agentDecision`, which is deliberately
 *    unset on the policy path, and nothing here evaluates it anyway.
 * 7. The `toolCallResults` output collection stays declared, for fidelity, and
 *    nothing reads it — this engine populates it with nulls (`bank-support`
 *    divergence 3). Everything downstream reads named variables.
 * 8. The two text annotations are reworded to describe the ported model rather
 *    than the pattern in the abstract ("A deterministic decision *might* come
 *    first" → it does, and the agent is never invoked for those).
 *
 * What this one is *for*, against the other agent examples here:
 *
 * - **The agent is not the decision-maker.** It is the exception handler. For
 *   the two clear-cut scenarios the ad-hoc sub-process never starts, no model
 *   is called, and nothing about the run is probabilistic — `engine.test.ts`
 *   asserts the agent host job is never activated on those, which is the only
 *   claim here that a "the claim was approved" assertion would not have made.
 *   Every other agent example in this repo starts its agent unconditionally.
 * - **The tool exists for one residual case, not for the case.** Contrast
 *   `src/examples/seed-export-compliance`, where each tool supplies a fact the
 *   decision cannot be made without, and `src/examples/fraud-alert-triage`,
 *   whose cross-reference every threshold reads. `ConvertCurrency` is useless
 *   for a USD claim, which is why this example deliberately declares **no**
 *   `requiredTools`: a model nudged into calling it would be calling it for
 *   nothing on three scenarios out of four.
 * - **Judgment is scoped to one documented exception.** The doubled meals cap
 *   for client entertainment with multiple attendees and a receipt is a rule a
 *   flat DMN band cannot express — it depends on reading a paragraph — and it
 *   is the *only* latitude the prompt grants. Contrast
 *   `src/examples/credit-line-increase`, where whether to involve another team
 *   at all is the agent's own call.
 * - **The ambiguous case goes to a human, structurally.** `escalate` is the
 *   `default` on `Gateway_AgentOutcome`, so it is where a claim lands not only
 *   when the agent says so but whenever neither condition can be read — an
 *   unset `agentDecision`, a live brain that answered in prose. Contrast
 *   `src/examples/invoice-payment`, where the human gate is a step the token
 *   must pass through; here it is the fallback, which is the shape you want
 *   when the thing that might fail is the model's own answer.
 */

const SCENARIO_CLEAR_APPROVE = {
  category: "meals",
  amount: 45,
  currency: "USD",
  justification: "Team lunch with three colleagues; standard restaurant receipt attached.",
};

/**
 * The deterministic stand-in for the LLM: one call per agent turn, given the
 * instance's live variables, so each turn is derived from what the previous
 * tool wrote. It implements the same policy the system prompt states — convert
 * first if the claim isn't in USD, then the category's approve/reject bands,
 * then the one documented exception — which is the point: a live brain reads
 * that prompt and should arrive here too.
 *
 * The variables it writes are the `fromAi(toolCall.x, …)` argument names off
 * the diagram (`claimAmount`, `claimCurrency`); a live brain supplies exactly
 * the same names, so the handler below reads the same values either way.
 *
 * Note what it is never asked: the clear-cut cases. The rule table settled
 * those before the agent existed, and this function is not called at all for
 * them — so every branch here is about a claim the table could not resolve.
 */
const SCRIPTED_AGENT = `async (job) => {
  const v = job.variables;
  const category = String(v.category || "");
  const currency = String(v.currency || "USD");
  const amount = Number(v.amount);

  // Step 1 — the policy bands are in USD. A claim in anything else has to be
  // converted before it can be compared, and the prompt forbids estimating it.
  if (currency !== "USD" && v.convertedAmountUSD === undefined) {
    return {
      variables: { claimAmount: amount, claimCurrency: currency },
      activateElements: [{ elementId: "ConvertCurrency" }],
    };
  }

  const usd = currency === "USD" ? amount : Number(v.convertedAmountUSD);
  const shown =
    currency === "USD"
      ? "$" + usd
      : amount + " " + currency + " (about $" + usd + ")";

  // The connector's JSON response format upstream; set here, because this
  // engine does not apply the agent's agent.responseJson.* output mapping.
  const decide = (decision, reasoning) => ({
    completionConditionFulfilled: true,
    variables: { agentDecision: decision, agentReasoning: reasoning },
  });

  // Step 2 — the same bands the rule engine just used, as the prompt states
  // them. An uncovered category has none, which is one of the three reasons a
  // claim reaches this agent at all.
  const bands = { meals: [75, 150], lodging: [250, 400], transport: [100, 200] };
  const band = bands[category];
  if (!band) {
    return decide(
      "escalate",
      "No reimbursement band covers '" + category + "', so " + shown +
        " cannot be judged against policy. Referring it to a human."
    );
  }
  const approveCap = band[0];
  const rejectCap = band[1];

  if (usd <= approveCap) {
    return decide(
      "approved",
      "Converted to " + shown + ", which is inside the $" + approveCap + " " +
        category + " cap."
    );
  }
  if (usd > rejectCap) {
    return decide(
      "rejected",
      shown + " is above the $" + rejectCap + " point at which a " + category +
        " claim is rejected outright."
    );
  }

  // Step 3 — the gray zone, and the one documented exception. A flat DMN band
  // cannot express this: it turns on reading the justification.
  const justification = String(v.justification || "");
  const entertainment = /client|prospect|customer/i.test(justification);
  const attendees =
    /attendee|guest|colleague|\\b(two|three|four|five|six|several|multiple)\\b/i.test(
      justification
    );
  const receipt = /receipt|itemi[sz]ed|invoice/i.test(justification);

  if (category === "meals" && entertainment && attendees && receipt && usd <= approveCap * 2) {
    return decide(
      "approved",
      shown + " is over the $" + approveCap +
        " meals cap, but the justification describes client entertainment with " +
        "several attendees and a receipt, so the documented exception applies up to $" +
        approveCap * 2 + "."
    );
  }

  return decide(
    "escalate",
    shown + " sits between the $" + approveCap + " and $" + rejectCap + " " +
      category + " bands, and the justification gives nothing concrete to " +
      "decide on. Referring it to a human rather than guessing."
  );
}`;

const CONVERT_CURRENCY = `async (job, { num, text, sleep, trace }) => {
  // Stands in for the HTTP connector calling api.frankfurter.dev (ECB
  // reference rates). No network in a sandboxed browser demo, so use a small
  // fixed rate table covering the currencies the claim form offers — the shape
  // of the answer is what matters here, and a fixed rate keeps the scenarios
  // reproducible where a live rate would drift day to day.
  const amount = num("claimAmount");
  const from = text("claimCurrency", "USD");
  const rates = { USD: 1, EUR: 1.09, GBP: 1.27 };
  const rate = rates[from];

  await sleep(400);

  if (!rate) {
    trace("no reference rate for " + JSON.stringify(from));
    return {
      toolCallResult: "No ECB reference rate available for " + from + ".",
    };
  }

  const usd = Math.round(amount * rate * 100) / 100;
  trace(amount + " " + from + " → " + usd + " USD");

  return {
    convertedAmountUSD: usd,
    toolCallResult:
      "Converted " + amount + " " + from + " to " + usd +
      " USD (ECB reference rate).",
  };
}`;

const NOTIFY_APPROVED_REIMBURSEMENT = `async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector posting to a payroll/finance
  // notification channel. Reached from either gateway, so the one thing worth
  // recording is which decision-maker actually settled it — derived from
  // whether the agent ever ran, not from a flag someone had to remember to set.
  const v = job.variables;
  const source = v.agentDecision === undefined || v.agentDecision === null ? "policy" : "agent";

  await sleep(300);
  trace("approved by the " + source);

  return {
    reimbursementNotice: {
      category: text("category", ""),
      amount: v.amount,
      currency: text("currency", ""),
      policyDecision: text("policyDecision", ""),
      agentDecision: v.agentDecision ?? null,
      agentReasoning: v.agentReasoning ?? null,
      decisionSource: source,
    },
  };
}`;

const NOTIFY_REJECTED_CLAIM = `async (job, { text, sleep, trace }) => {
  // The mirror of the approval notification, and reached the same two ways.
  const v = job.variables;
  const source = v.agentDecision === undefined || v.agentDecision === null ? "policy" : "agent";

  await sleep(300);
  trace("rejected by the " + source);

  return {
    rejectionNotice: {
      category: text("category", ""),
      amount: v.amount,
      currency: text("currency", ""),
      policyDecision: text("policyDecision", ""),
      agentDecision: v.agentDecision ?? null,
      agentReasoning: v.agentReasoning ?? null,
      decisionSource: source,
    },
  };
}`;

export const expenseDecision: ExampleDef = {
  ...meta,
  bpmn,
  // Deployed before the diagram, on every deploy/reset/redeploy — a business
  // rule task resolves its decision at deploy time.
  decisions: { "expense-policy.dmn": expensePolicyDmn },
  forms: {
    "expense-claim-start": claimStartForm,
    "expense-claim-review": claimReviewForm,
  },
  seed: SCENARIO_CLEAR_APPROVE,
  scenariosLabel: "Expense claim",
  scenarios: [
    {
      // Inside the meals cap in USD: the table approves it and the agent is
      // never started. The start form ships holding exactly this.
      label: "Clear approve — policy decides, agent never runs",
      variables: SCENARIO_CLEAR_APPROVE,
    },
    {
      label: "Clear reject — policy decides, agent never runs",
      variables: {
        category: "lodging",
        amount: 550,
        currency: "USD",
        justification: "Presidential suite booked for a one-night conference stay.",
      },
    },
    {
      // Not in USD, so the table can't judge it against the USD bands at all.
      // The agent converts, then applies the one documented exception.
      label: "Gray zone — agent converts and resolves",
      variables: {
        category: "meals",
        amount: 90,
        currency: "EUR",
        justification:
          "Dinner with a prospective client to close a deal; four attendees, itemized receipt attached.",
      },
    },
    {
      // Already in USD, but between the lodging bands — and the justification
      // gives the agent nothing to reason from.
      label: "Gray zone — agent escalates to a human",
      variables: {
        category: "lodging",
        amount: 320,
        currency: "USD",
        justification:
          "Hotel for an extended stay; exact reason unclear, awaiting further details from the employee.",
      },
    },
  ],
  scriptedAgent: SCRIPTED_AGENT,
  // Deliberately no `requiredTools`. ConvertCurrency is useless for a USD
  // claim, which is three of the four scenarios; naming it here would push a
  // model into calling it for nothing (see `requiredTools` in `ExampleDef`).
  handlers: [
    {
      elementId: "ConvertCurrency",
      standsInFor: "HTTP connector — api.frankfurter.dev ECB reference rates",
      source: CONVERT_CURRENCY,
    },
    {
      elementId: "NotifyApprovedReimbursement",
      standsInFor: "HTTP connector — payroll/finance reimbursement notice",
      source: NOTIFY_APPROVED_REIMBURSEMENT,
    },
    {
      elementId: "NotifyRejectedClaim",
      standsInFor: "HTTP connector — payroll/finance rejection notice",
      source: NOTIFY_REJECTED_CLAIM,
    },
  ],
};
