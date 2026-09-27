import type { ExampleDef } from "../../framework/types";
import meta from "./meta";
import bpmn from "./model.bpmn?raw";
import creditLineRequestForm from "./credit-line-request.form.json";
import underwritingOpsEscalationForm from "./underwriting-ops-escalation.form.json";

/**
 * Camunda's **long-running agent** — the "Long-running" tab of
 * camunda.com/orchestrate/agents, ported from
 * `camunda/camunda-8-tutorials/examples/long-running-agent`.
 *
 * **Divergences from the upstream model**, for whoever next syncs it:
 *
 * 1. `WaitForBureauReport` is no longer a `bpmn:receiveTask`. This engine does
 *    not model receive tasks: one opens no subscription, waits for nothing and
 *    completes the moment the token arrives (docs/engine-coverage.md;
 *    Magikcraft/nano-bpm#1009) — which would skip the single wait this whole
 *    example exists to show, and skip it silently. The wait is a message
 *    `bpmn:intermediateCatchEvent` instead, which is the workaround that doc
 *    names and which it records as verified. The HTTP Webhook connector
 *    bindings that sat on the receive task (inbound context, HMAC, auth, the
 *    `resultExpression`) go with it: those are read by a Connectors runtime,
 *    and there is none in a sandboxed browser demo.
 * 2. Two nested `bpmn:subProcess` scopes now stand between the ad-hoc
 *    sub-process and that catch event, where upstream had none. Both levels
 *    are load-bearing, and both were established by running the engine rather
 *    than assumed:
 *    - A catch event parented *directly* by an ad-hoc sub-process fails the
 *      same way the receive task does — the chained flow into it is taken, no
 *      subscription opens, and the agent host completes on the spot. Wrapping
 *      it in a sub-process makes it a real wait.
 *    - A boundary event can only attach to an *activity*, so it cannot go on
 *      the catch event; and attaching it to a sub-process that is a direct
 *      child of the ad-hoc sub-process cancels that sub-process **without**
 *      taking the boundary's outgoing flow, leaving the instance active with
 *      nothing to do. One level deeper it behaves correctly — which is the
 *      same place `fraud-alert-triage` ended up putting its own timer
 *      boundary, for the same reason.
 *    So `WaitForBureauReport` keeps upstream's id, name and incoming
 *    `Flow_RequestToWait` and becomes the outer scope; `BureauReplyWindow` is
 *    the inner one, and is what `Boundary_BureauSLA` attaches to. Upstream's
 *    claim is unchanged: the timer is scoped to exactly this one wait, and its
 *    outgoing flow stays inside the agent's own scope.
 * 3. `RecordBureauReport` is new. Upstream builds the tool's return value in
 *    the webhook connector's `resultExpression`; with no Connectors runtime
 *    something has to, and a script task beside upstream's own
 *    `RecordBureauTimeout` makes the two outcomes of the wait symmetrical and
 *    both editable in the code panel.
 * 4. `decisionOutcome`/`approvedLimitUSD`/`decisionSummary` come from the
 *    agent's final turn rather than from the connector's `agent.responseJson.*`
 *    output mappings, which this engine doesn't apply (the same divergence
 *    `bank-support` and `fraud-alert-triage` record). The JSON response
 *    *schema* goes with them; the system prompt still asks for exactly those
 *    three fields, and `SCRIPTED_AGENT` writes them through
 *    `AgentResult.variables` on the turn it sets `completionConditionFulfilled`.
 * 5. `EscalateToUnderwritingOps` is an embedded `bpmn:subProcess` wrapping the
 *    user task, rather than being the user task. A bare `bpmn:userTask` carries
 *    no `zeebe:taskDefinition`, so `parseModel` gives it no job type and never
 *    advertises it as a tool — the agent would have had no way to call the
 *    human, which is the entire point of this element. It keeps upstream's tool
 *    name, since that is what the system prompt says; the user task inside it
 *    is `UnderwritingOpsDecision`.
 * 6. `RequestCreditBureauReport`'s five arguments are renamed —
 *    `customerId` → `applicantId`, `currentLimitUSD` →
 *    `applicantCurrentLimitUSD`, and so on. An agent's arguments arrive as one
 *    flat bag at instance scope (see `framework/agent/activation.ts`), so an
 *    argument called `customerId` would let a model overwrite the correlation
 *    key the bureau's reply is matched on, and the other four would let it
 *    overwrite the application facts the escalation form shows and the
 *    notification step reads back.
 * 7. The two HTTP connectors are stand-in handlers — no network in a sandboxed
 *    browser demo. `RequestCreditBureauReport` keeps its "fire, don't wait"
 *    character: it returns a reference and nothing else, because upstream's
 *    reply is not an HTTP response either.
 * 8. The bureau's reply has to come from somewhere. Upstream it is a `curl` to
 *    a webhook URL; here `RecordBureauReport` holds the three reports
 *    upstream's README lists, keyed by customer id, and a correlated message
 *    payload overrides them field by field. A reader (or `engine.test.ts`) who
 *    publishes a report gets exactly that report; a plain Run still produces
 *    the scenario's intended outcome.
 * 9. The `toolCallResults` output collection stays declared, for fidelity, and
 *    nothing reads it — this engine populates it with nulls (`bank-support`
 *    divergence 3). Everything downstream reads named variables.
 * 10. One thing the browser can't reproduce: **which** way the wait ends is not
 *    the reader's to pick in the runner. A settled round with both a timer and
 *    a message subscription open is reported as `timers`, so the drive loop
 *    jumps the clock and the SLA always wins — upstream's headline demo, and
 *    the one that ends in a human decision, but it means the bureau-reply path
 *    is only reachable by correlating the message directly, which is what
 *    `engine.test.ts` does.
 *
 * What this one is *for*, against the other agent examples here:
 *
 * - **The wait is a tool call, not a step.** `RequestCreditBureauReport` is the
 *   only root node on that side of the diagram; `WaitForBureauReport` hangs off
 *   it by a plain sequence flow, so the agent never selects it and experiences
 *   one tool call that simply takes a long time to return. That chained shape
 *   was dropped silently before engine-wasm 0.9.3 (Magikcraft/nano-bpm#1154),
 *   and `engine.test.ts` asserts the edge rather than trusting the fix.
 * - **The timer is scoped to the wait, not the agent.** Contrast
 *   `src/examples/fraud-alert-triage`, where the interrupting event sits on the
 *   agent host and tears the whole investigation down. Here the boundary can
 *   only reach another node in the agent's own scope, so a missed SLA arrives
 *   as *information* — the agent is told, and picks what to do next.
 * - **Multi-team coordination is a tool call, not a reroute.**
 *   `EscalateToUnderwritingOps` has no structural connection to the timeout at
 *   all: nothing in the diagram routes the timer to it, and nothing forbids the
 *   agent calling it without one. Contrast `src/examples/invoice-payment`,
 *   where the human gate is structural and no amount of agent judgment routes
 *   around it.
 * - **One ending, no merge gateway.** Both ways out of the wait converge on the
 *   agent's own final answer, so `Notify customer of decision` needs no join
 *   and no branch — the structured decision is the same object whether the
 *   bureau supplied it or underwriting ops did.
 */

const SCENARIO_APPROVED = {
  customerId: "CUST-70210",
  currentLimitUSD: 5000,
  requestedLimitUSD: 8000,
  customerTenureYears: 3,
  recentLatePayments90d: 0,
  requestReason: "Wants headroom for an upcoming home renovation purchase.",
};

/**
 * The deterministic stand-in for the LLM: one call per agent turn, given the
 * instance's live variables, so each turn is derived from what the previous
 * tool wrote. It implements the same policy the system prompt states — request
 * the bureau report first, then the three thresholds if it arrived, or an
 * optional escalation to underwriting ops if it didn't — which is the point: a
 * live brain reads that prompt and should arrive here too.
 *
 * The variables it writes are the `fromAi(toolCall.x, …)` argument names off
 * the diagram (`applicantId`, `applicantCurrentLimitUSD`, …, `question`,
 * `context`); a live brain supplies exactly the same names, so the handlers
 * below read the same values either way.
 *
 * Note what it does *not* branch on: how long the wait took. `bureauReplied`
 * and `bureauTimedOut` are the only two things it can tell apart, and from the
 * agent's side that is the whole difference between a tool that answered and
 * one that didn't.
 */
const SCRIPTED_AGENT = `async (job) => {
  const v = job.variables;

  // Step 1 — the bureau request, always first. It is also the wait: this
  // activation does not come back until the report lands or the SLA elapses.
  if (v.bureauReplied === undefined && v.bureauTimedOut === undefined) {
    return {
      variables: {
        applicantId: String(v.customerId || ""),
        applicantCurrentLimitUSD: Number(v.currentLimitUSD),
        applicantRequestedLimitUSD: Number(v.requestedLimitUSD),
        applicantTenureYears: Number(v.customerTenureYears),
        applicantLatePayments90d: Number(v.recentLatePayments90d),
      },
      activateElements: [{ elementId: "RequestCreditBureauReport" }],
    };
  }

  const current = Number(v.currentLimitUSD);
  const requested = Number(v.requestedLimitUSD);
  const late = Number(v.recentLatePayments90d);
  // The prompt's "roughly halfway between the current and requested limit".
  const halfway = Math.round((current + requested) / 2);

  // The connector's JSON response format upstream; set here, because this
  // engine does not apply the agent's agent.responseJson.* output mapping.
  const decide = (outcome, limit, why) => ({
    completionConditionFulfilled: true,
    variables: {
      decisionOutcome: outcome,
      approvedLimitUSD: limit,
      decisionSummary: why,
    },
  });

  // Step 2 — the bureau answered. The three thresholds, as the prompt states
  // them, worst case first so one serious flag can't be outvoted by a good score.
  if (v.bureauReplied) {
    const score = Number(v.creditScoreExternal);
    const debt = Number(v.existingDebtUSD);
    const flags = String(v.bureauFlags || "none");
    const facts =
      "credit score " + score + ", existing debt $" + debt + ", flags: " + flags;
    const serious = /delinquen|fraud|default|charge-off|judgment/i.test(flags);
    const minor = !serious && flags !== "none" && flags.length > 0;

    if (score < 620 || late >= 2 || serious) {
      return decide(
        "denied",
        current,
        "Denied on the bureau's report (" + facts + "). Limit stays where it is."
      );
    }
    if (score < 700 || late === 1 || minor) {
      return decide(
        "reduced",
        halfway,
        "Approved at a reduced limit on the bureau's report (" + facts +
          "): enough to raise, not enough for the full request."
      );
    }
    if (debt >= 3 * requested) {
      return decide(
        "reduced",
        halfway,
        "Approved at a reduced limit (" + facts +
          "): the score clears, but existing debt is high against the limit requested."
      );
    }
    return decide(
      "approved",
      requested,
      "Approved as requested on the bureau's report (" + facts + ")."
    );
  }

  // Step 3 — the bureau missed its SLA. Asking underwriting ops is the agent's
  // own call: nothing in the diagram routes the timeout here, and nothing
  // stops it deciding on the application alone instead. It escalates because
  // the application on its own says nothing about the customer's other debt.
  if (v.opsDecisionOutcome === undefined) {
    return {
      variables: {
        question:
          "The credit bureau missed its window - can you decide this one by hand?",
        context:
          "Customer " + String(v.customerId) + " is asking to go from $" + current +
          " to $" + requested + ". " + String(v.customerTenureYears) +
          " year(s) on the account, " + late +
          " late payment(s) in the last 90 days per our own records. Reason given: " +
          String(v.requestReason) + " No bureau report, so no view of debt held elsewhere.",
      },
      activateElements: [{ elementId: "EscalateToUnderwritingOps" }],
    };
  }

  // Step 4 — underwriting ops answered. Their decision is what the agent bases
  // its own final answer on; the limit is theirs when they named one.
  const ops = String(v.opsDecisionOutcome);
  const named = v.opsApprovedLimitUSD === undefined || v.opsApprovedLimitUSD === null
    ? null
    : Number(v.opsApprovedLimitUSD);
  const limit =
    named !== null ? named : ops === "approved" ? requested : ops === "reduced" ? halfway : current;

  return decide(
    ops,
    limit,
    "No bureau reply within the SLA window, so underwriting ops decided by hand: " +
      ops + " at $" + limit + ". " + String(v.opsDecisionNotes || "")
  );
}`;

const REQUEST_CREDIT_BUREAU_REPORT = `async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector posting the application to the bureau's
  // intake API. A fire, not a wait: the waiting is the next step of this same
  // tool call, and nothing here knows or cares how long that takes.
  //
  // It deliberately sets no toolCallResult. The result of this tool call is
  // whatever the wait produces - RecordBureauReport or RecordBureauTimeout -
  // which is what makes the two of them one tool from the agent's side.
  const applicantId = text("applicantId", "");

  await sleep(400);
  trace("bureau request submitted for " + applicantId + " - now waiting for the reply");

  return {
    bureauRequestRef: "BRQ-" + applicantId,
  };
}`;

const RECORD_BUREAU_REPORT = `async (job, { text, trace }) => {
  // Upstream this is the webhook connector's resultExpression, run on the body
  // the bureau POSTed. There is no webhook here, so the report comes from two
  // places: whatever a correlated message carried, falling back to the bureau's
  // file on this customer. Correlating with a real payload therefore wins,
  // field by field, over the stand-in below.
  const v = job.variables;
  const customerId = text("customerId", "");

  // The three reports upstream's README publishes, one per demo customer.
  const onFile = {
    "CUST-70210": { creditScoreExternal: 745, existingDebtUSD: 4000, bureauFlags: "none" },
    "CUST-70211": {
      creditScoreExternal: 655,
      existingDebtUSD: 9000,
      bureauFlags: "minor - one missed utility payment",
    },
    "CUST-70212": {
      creditScoreExternal: 560,
      existingDebtUSD: 15000,
      bureauFlags: "delinquent account on file",
    },
  };

  // Any other customer still gets a stable file, derived from their own id, so
  // a reader who edits the start form doesn't fall off the end of the table.
  const digits = Number(customerId.replace(/\\D/g, "")) || 0;
  const derived = {
    creditScoreExternal: 600 + (digits % 180),
    existingDebtUSD: 2000 + (digits % 9) * 1500,
    bureauFlags: "none",
  };
  const file = onFile[customerId] || derived;

  const creditScoreExternal =
    v.creditScoreExternal === undefined || v.creditScoreExternal === null
      ? file.creditScoreExternal
      : Number(v.creditScoreExternal);
  const existingDebtUSD =
    v.existingDebtUSD === undefined || v.existingDebtUSD === null
      ? file.existingDebtUSD
      : Number(v.existingDebtUSD);
  const bureauFlags =
    v.bureauFlags === undefined || v.bureauFlags === null
      ? file.bureauFlags
      : String(v.bureauFlags);

  trace("bureau replied for " + customerId + " - score " + creditScoreExternal);

  return {
    bureauReplied: true,
    creditScoreExternal: creditScoreExternal,
    existingDebtUSD: existingDebtUSD,
    bureauFlags: bureauFlags,
    toolCallResult:
      "Bureau report received for " + customerId + ": credit score " +
      creditScoreExternal + ", existing debt $" + existingDebtUSD +
      ", flags: " + bureauFlags + ".",
  };
}`;

const RECORD_BUREAU_TIMEOUT = `async (job, { trace }) => {
  // Reached only from the interrupting timer boundary on the wait. Its whole
  // job is to hand the timeout back to the agent as the result of its own
  // RequestCreditBureauReport call, so "nobody answered" arrives as something
  // the agent can act on rather than as a failure - and so that the agent,
  // not the diagram, decides what happens next.
  trace("no credit bureau reply within the SLA window");

  return {
    bureauTimedOut: true,
    toolCallResult:
      "No credit bureau reply within the SLA window. EscalateToUnderwritingOps is " +
      "available if you judge the case can't wait any longer - that is your own " +
      "judgment call.",
  };
}`;

const NOTIFY_CUSTOMER_DECISION = `async (job, { num, text, sleep, trace }) => {
  // Stands in for the HTTP connector posting to the customer-notification
  // system. One step, reached identically whether the agent decided on the
  // bureau's report or relayed underwriting ops' - there is no merge gateway
  // above it because there is nothing to merge.
  const decisionOutcome = text("decisionOutcome", "");

  await sleep(300);
  trace("customer notified: " + decisionOutcome);

  return {
    customerNotice: {
      customerId: text("customerId", ""),
      decisionOutcome: decisionOutcome,
      approvedLimitUSD: num("approvedLimitUSD"),
      decisionSummary: text("decisionSummary", ""),
      sentAt: "2026-01-01T00:00:00Z",
    },
  };
}`;

export const creditLineIncrease: ExampleDef = {
  ...meta,
  bpmn,
  forms: {
    "credit-line-request": creditLineRequestForm,
    "underwriting-ops-escalation": underwritingOpsEscalationForm,
  },
  seed: SCENARIO_APPROVED,
  scenariosLabel: "Credit line request",
  scenarios: [
    {
      // Upstream's "try it in 5 minutes" application, and the one whose bureau
      // file clears every "approve as requested" threshold.
      label: "Strong file — approved as requested",
      variables: SCENARIO_APPROVED,
    },
    {
      label: "Middling score, one late payment — reduced limit",
      variables: {
        customerId: "CUST-70211",
        currentLimitUSD: 6000,
        requestedLimitUSD: 12000,
        customerTenureYears: 2,
        recentLatePayments90d: 1,
        requestReason: "Consolidating two store cards onto one account.",
      },
    },
    {
      label: "Delinquency on file — denied",
      variables: {
        customerId: "CUST-70212",
        currentLimitUSD: 4000,
        requestedLimitUSD: 9000,
        customerTenureYears: 1,
        recentLatePayments90d: 2,
        requestReason: "Planning a large veterinary bill over the next quarter.",
      },
    },
    {
      // Upstream's fourth demo: don't answer at all. The bureau has no file on
      // this customer, so correlating a reply is the only way to get one — and
      // letting the SLA run out is the point.
      label: "Bureau never answers — underwriting ops decide",
      variables: {
        customerId: "CUST-70219",
        currentLimitUSD: 7000,
        requestedLimitUSD: 11000,
        customerTenureYears: 5,
        recentLatePayments90d: 0,
        requestReason: "Frequent business travel puts pressure on the monthly limit.",
      },
    },
  ],
  scriptedAgent: SCRIPTED_AGENT,
  // The bureau's reply is the reader's to send, standing in for the webhook
  // post upstream's README walks you through. It has to be a button rather
  // than something the run resolves on its own: the reply and the SLA timer
  // are racing, and whichever the runner picked automatically would be the
  // only outcome this example could ever show. Press it and the agent resumes
  // with the report; leave it and the SLA lapses into the escalation path.
  //
  // No `variables`: `RecordBureauReport` looks the file up by `customerId`,
  // so each scenario gets its own report — which is what makes "approved as
  // requested", "reduced limit" and "denied" three different runs rather than
  // three labels on the same one.
  messageEvents: [
    {
      elementId: "BureauReportArrived",
      label: "📨 The credit bureau replies",
    },
  ],
  // Every threshold in the prompt reads the bureau's report, and the only way
  // to that report — or to being told there isn't one — is this call. A "done"
  // before it has run is a decision made on the application form alone.
  requiredTools: ["RequestCreditBureauReport"],
  handlers: [
    {
      elementId: "RequestCreditBureauReport",
      standsInFor: "HTTP connector — the credit bureau's intake API",
      source: REQUEST_CREDIT_BUREAU_REPORT,
    },
    {
      elementId: "RecordBureauReport",
      standsInFor: "webhook resultExpression — turn the reply into the tool's result",
      source: RECORD_BUREAU_REPORT,
    },
    {
      elementId: "RecordBureauTimeout",
      standsInFor: "script task — hand the SLA timeout back to the agent",
      source: RECORD_BUREAU_TIMEOUT,
    },
    {
      elementId: "NotifyCustomerDecision",
      standsInFor: "HTTP connector — customer notification system",
      source: NOTIFY_CUSTOMER_DECISION,
    },
  ],
};
