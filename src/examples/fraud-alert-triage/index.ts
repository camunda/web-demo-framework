import type { ExampleDef } from "../../framework/types";
import meta from "./meta";
import bpmn from "./model.bpmn?raw";
import analystConsultForm from "./fraud-analyst-consult.form.json";
import teamHandoffForm from "./fraud-team-handoff.form.json";

/**
 * Camunda's **event-driven agent** — the "Event-driven" tab of
 * camunda.com/orchestrate/agents, ported from
 * `camunda/camunda-8-tutorials/examples/event-driven-agent`.
 *
 * **Divergences from the upstream model**, for whoever next syncs it:
 *
 * 1. The start event keeps its `messageEventDefinition` and its message, and
 *    loses the HTTP Webhook connector bindings that sat on top of them (the
 *    inbound context, HMAC and auth properties, `resultExpression`). Those are
 *    read by a Connectors runtime, and there is none in a sandboxed browser
 *    demo. Nothing about the mechanism changes: `ExampleRunner` publishes
 *    `fraud-alert` with `customerId` as the correlation key instead of
 *    creating an instance (`ModelInfo.startMessage`), which is the same
 *    `correlateMessage` call a webhook would end up making.
 * 2. `AskFraudAnalyst` is an embedded `bpmn:subProcess` wrapping the user task,
 *    rather than being the user task. A bare `bpmn:userTask` carries no
 *    `zeebe:taskDefinition`, so `parseModel` gives it no job type and never
 *    advertises it as a tool — the agent would have had no way to call the
 *    human, which is the entire point of this element. The wrapper is a
 *    compound tool whose inner flow the engine drives (docs/engine-coverage.md,
 *    "embedded sub-process as a compound tool"), the same shape
 *    `invoice-payment`'s `RequestPaymentRelease` uses. It keeps upstream's tool
 *    name, `AskFraudAnalyst`, since that is what the system prompt says; the
 *    user task inside it is `ConsultFraudAnalyst`, and `RecordAnalystTimeout`
 *    moves inside it too — upstream it is a direct child of the ad-hoc
 *    sub-process, which here would advertise it to a live brain as a tool of
 *    its own.
 * 3. `investigationOutcome`/`investigationSummary` come from the agent's final
 *    turn rather than from the connector's `agent.responseJson.*` output
 *    mappings, which this engine doesn't apply (same divergence `bank-support`
 *    records for its specialists). The JSON response *schema* goes with them;
 *    the system prompt still asks for exactly those two fields, and
 *    `SCRIPTED_AGENT` writes them through `AgentResult.variables` on the turn
 *    it sets `completionConditionFulfilled`.
 * 4. `CrossReferenceTransactionHistory`'s arguments are renamed
 *    `customerId` → `alertCustomerId` and `cardLast4` → `alertCardLast4`. An
 *    agent's arguments arrive as one flat bag at instance scope (see
 *    `framework/agent/activation.ts`), so an argument called `customerId` would
 *    let a model overwrite the instance's own `customerId` — the correlation
 *    key this whole example turns on — with whatever it decided to send.
 * 5. `SnapshotOriginalAlert` copies the alert in a handler instead of through
 *    `zeebe:script` plus nine `zeebe:output` mappings. A script task is an
 *    ordinary job here, typed by its own element id, so the copy becomes
 *    something the code panel shows and a reader can edit.
 * 6. `FreezeCard` derives `handoffTrigger`/`handoffReason` in its handler
 *    rather than in `zeebe:input` mappings. Upstream's
 *    `=if investigationOutcome != null then …` has to evaluate on the interrupt
 *    path, which is exactly the path where the agent was cancelled before that
 *    variable was ever written.
 * 7. `FraudTeamHandoff` is added back. Upstream ships a `fraud-team-handoff`
 *    form, its README says an escalated case reaches "Fraud team case handoff"
 *    in Tasklist, and the flow out of `FreezeCard` is even called
 *    `Flow_ToHandoffTask` — but it targets the end event, so upstream's form is
 *    unreachable. This restores the task the rest of that example describes.
 * 8. The four HTTP connectors are stand-in handlers — no network in a sandboxed
 *    browser demo. `CrossReferenceTransactionHistory` keeps upstream's
 *    deterministic `modulo(number(substring(customerId, 6)), 4)` so a given
 *    customer yields the same related-alert count on both. Its eight-second
 *    `/delay/8` becomes a short `sleep`: here the interrupt is a button the
 *    reader presses once the run settles, not a race against a slow HTTP call.
 * 9. The `toolCallResults` output collection stays declared, for fidelity, and
 *    nothing reads it — this engine populates it with nulls (`bank-support`
 *    divergence 3). Everything downstream reads named variables.
 *
 * What this one is *for*, against the other two agent examples here:
 *
 * - **The event is the entry.** There is no start form, and no `createInstance`
 *   either. One `bpmn:message` is subscribed to by both the start event and
 *   `Boundary_SecondAlert`, so a first alert for a customer opens a case and a
 *   second alert for that same customer is taken by the already-open boundary
 *   subscription instead of opening a duplicate. That preference is the
 *   engine's, not a flag anything in this model checks
 *   (docs/engine-coverage.md; Magikcraft/nano-bpm#1156, which is what kept this
 *   port parked until engine-wasm 0.9.3).
 * - **The human step is the agent's own call.** `AskFraudAnalyst` is a tool in
 *   its loop, invoked only when the case lands between the two thresholds, and
 *   the agent keeps the final decision either way. Contrast
 *   `src/examples/invoice-payment`, where the human gate is structural:
 *   `ReleasePayment` has exactly one incoming flow and no amount of agent
 *   judgment can route around it. Here the guarantee runs the other way — the
 *   agent may skip the human entirely, but it cannot survive the interrupt.
 * - **Three first-class events, no polling.** Message start, message boundary,
 *   and a timer bounding how long the agent waits for the analyst. Nothing in
 *   the prompt or the handlers checks "has anything new arrived?".
 */

const SCENARIO_AMBIGUOUS = {
  alertId: "ALERT-6602",
  customerId: "CUST-40101",
  cardLast4: "7788",
  transactionAmount: 2200,
  transactionCurrency: "USD",
  merchantName: "Sunset Auto Parts",
  merchantCountry: "United States",
  riskScore: 52,
  alertReason:
    "Slightly elevated amount for a returning merchant category; one related alert in the past quarter that was previously dismissed as a false positive.",
};

/**
 * The deterministic stand-in for the LLM: one call per agent turn, given the
 * instance's live variables, so each turn is derived from what the previous
 * tool wrote. It implements the same policy the system prompt states — always
 * cross-reference, convert if the currency isn't USD, then the two hard
 * thresholds with an optional analyst consultation in between — which is the
 * point: a live brain reads that prompt and should arrive here too.
 *
 * The variables it writes are the `fromAi(toolCall.x, …)` argument names off
 * the diagram (`alertCustomerId`, `alertCardLast4`, `amount`, `fromCurrency`,
 * `question`, `context`); a live brain supplies exactly the same names, so the
 * handlers below read the same values either way.
 *
 * Nothing here looks at whether an interrupt happened. It can't: by the time
 * `Boundary_SecondAlert` fires, this agent and everything it had running are
 * already gone.
 */
const SCRIPTED_AGENT = `async (job) => {
  const v = job.variables;

  // Step 1 — always cross-reference first. Every threshold below reads
  // relatedAlerts90d, so there is nothing to weigh until this has run.
  if (v.relatedAlerts90d === undefined) {
    return {
      variables: {
        alertCustomerId: String(v.originalCustomerId || ""),
        alertCardLast4: String(v.originalCardLast4 || ""),
      },
      activateElements: [{ elementId: "CrossReferenceTransactionHistory" }],
    };
  }

  const currency = String(v.originalTransactionCurrency || "USD");

  // Step 2 — the thresholds are in USD, so a foreign-currency amount has to be
  // converted before it can be compared. The prompt forbids estimating it.
  if (currency !== "USD" && v.convertedAmountUSD === undefined) {
    return {
      variables: {
        amount: Number(v.originalTransactionAmount),
        fromCurrency: currency,
      },
      activateElements: [{ elementId: "ConvertToBaseCurrency" }],
    };
  }

  const usd =
    currency === "USD"
      ? Number(v.originalTransactionAmount)
      : Number(v.convertedAmountUSD);
  const related = Number(v.relatedAlerts90d);
  const risk = Number(v.originalRiskScore);
  const facts =
    "risk score " + risk + ", " + related + " related alert(s) in 90 days, " +
    usd + " USD";

  // The connector's JSON response format upstream; set here, because this
  // engine does not apply the agent's agent.responseJson.* output mapping.
  const decide = (outcome, why) => ({
    completionConditionFulfilled: true,
    variables: { investigationOutcome: outcome, investigationSummary: why },
  });

  // Step 3 — the two hard thresholds, exactly as the prompt states them.
  if (related === 0 && risk < 40 && usd < 1000) {
    return decide(
      "clear",
      "Cleared automatically (" + facts + "): every low-risk threshold met, analyst not consulted."
    );
  }
  if (related >= 2 || risk >= 70 || usd >= 5000) {
    return decide(
      "escalate",
      "Escalated automatically (" + facts + "): at least one high-risk threshold breached, analyst not consulted."
    );
  }

  // Neither bucket. This is the case the prompt calls genuinely ambiguous, and
  // asking a human is the agent's own call — the diagram would let it decide
  // here and stop.
  if (v.analystAssessment === undefined && v.analystTimedOut === undefined) {
    return {
      variables: {
        question:
          "This alert sits between our automatic thresholds - does it look like fraud to you?",
        context:
          "So far: " + facts + ". Merchant " + String(v.originalMerchantName) +
          " in " + String(v.originalMerchantCountry) +
          ". The monitoring system said: " + String(v.originalAlertReason),
      },
      activateElements: [{ elementId: "AskFraudAnalyst" }],
    };
  }

  // The timer won the race. The prompt's instruction for this is to proceed on
  // its own judgment, so it does — leaning on the score it already has rather
  // than waiting longer or defaulting to one answer regardless of the case.
  if (v.analystTimedOut) {
    return risk >= 50
      ? decide(
          "escalate",
          "Escalated (" + facts + "): no analyst response within the SLA window, and the score is high enough not to close this unseen."
        )
      : decide(
          "clear",
          "Cleared (" + facts + "): no analyst response within the SLA window, and nothing in the case warrants holding it open."
        );
  }

  // The analyst answered. Advisory, not binding — but a human who looked at
  // this and was unsure is a reason to escalate, not a reason to close.
  const assessment = String(v.analystAssessment);
  if (assessment === "looks-legitimate") {
    return decide(
      "clear",
      "Cleared (" + facts + "): analyst consulted and assessed the transaction as legitimate."
    );
  }
  return decide(
    "escalate",
    "Escalated (" + facts + "): analyst consulted and returned '" + assessment + "'."
  );
}`;

const SNAPSHOT_ORIGINAL_ALERT = `async (job, { trace }) => {
  // Upstream's zeebe:script plus nine output mappings. Freezes the alert that
  // actually started this instance: a second alert correlating into
  // Boundary_SecondAlert overwrites the plain alertId/merchantName/… variables
  // with its own, and the handoff form still has to show what was originally
  // under investigation.
  const v = job.variables;
  trace("snapshotting " + String(v.alertId) + " for " + String(v.customerId));

  return {
    originalAlertId: v.alertId,
    originalCustomerId: v.customerId,
    originalCardLast4: v.cardLast4,
    originalTransactionAmount: v.transactionAmount,
    originalTransactionCurrency: v.transactionCurrency,
    originalMerchantName: v.merchantName,
    originalMerchantCountry: v.merchantCountry,
    originalRiskScore: v.riskScore,
    originalAlertReason: v.alertReason,
  };
}`;

const CROSS_REFERENCE_TRANSACTION_HISTORY = `async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector's deliberately slow httpbin.io /delay/8
  // call — the fraud platform's lookup across every account and card linked to
  // the customer. Shorter here: the interrupt in this demo is a button, not a
  // race against an eight-second request.
  const customerId = text("alertCustomerId", "");
  const cardLast4 = text("alertCardLast4", "");

  await sleep(1200);

  // Upstream's modulo(number(substring(customerId, 6)), 4), kept exactly so a
  // given customer behaves the same way on a real cluster and here.
  const digits = Number(customerId.replace(/\\D/g, ""));
  const relatedAlerts90d = Number.isFinite(digits) ? digits % 4 : 0;
  trace(customerId + " → " + relatedAlerts90d + " related alert(s) in 90 days");

  return {
    relatedAlerts90d: relatedAlerts90d,
    toolCallResult:
      "Cross-referenced " + customerId + " (card ending " + cardLast4 +
      ") across all linked accounts and cards: " + relatedAlerts90d +
      " related fraud alert(s) in the last 90 days.",
  };
}`;

const CONVERT_TO_BASE_CURRENCY = `async (job, { num, text, sleep, trace }) => {
  // Stands in for the HTTP connector calling api.frankfurter.app (ECB
  // reference rates). No network in a sandboxed browser demo, so use a small
  // fixed rate table — the shape of the answer is what matters here.
  const amount = num("amount");
  const from = text("fromCurrency", "USD");
  const rates = { USD: 1, EUR: 1.09, GBP: 1.27, NOK: 0.103, JPY: 0.0067 };
  const rate = rates[from];

  await sleep(300);

  if (!rate) {
    trace("no reference rate for " + JSON.stringify(from));
    return { toolCallResult: "No ECB reference rate available for " + from + "." };
  }

  const usd = Math.round(amount * rate * 100) / 100;
  trace(amount + " " + from + " → " + usd + " USD");

  return {
    convertedAmountUSD: usd,
    toolCallResult:
      "Converted " + amount + " " + from + " to " + usd + " USD (ECB reference rate).",
  };
}`;

const RECORD_ANALYST_TIMEOUT = `async (job, { trace }) => {
  // Reached only from the timer boundary event on the analyst consultation.
  // Its whole job is to hand the timeout back to the agent as the result of
  // its own AskFraudAnalyst call, so "nobody answered" arrives as information
  // the agent can act on rather than as a failure.
  trace("no analyst response within the SLA window");

  return {
    analystTimedOut: true,
    toolCallResult:
      "No analyst response within the SLA window; proceed with your own judgment.",
  };
}`;

const CLOSE_ALERT_NOTIFICATION = `async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector posting to the customer-notification and
  // case-management system. Reachable only from the "clear" branch of
  // Gateway_InvestigationOutcome — a case the agent decided to close.
  const alertId = text("originalAlertId", "");
  await sleep(300);
  trace("closed " + alertId + " with no human involvement");

  return {
    closureNotice: {
      alertId: alertId,
      customerId: text("customerId", ""),
      investigationOutcome: text("investigationOutcome", ""),
      investigationSummary: text("investigationSummary", ""),
      closedAt: "2026-01-01T00:00:00Z",
    },
  };
}`;

const FREEZE_CARD = `async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector posting to the card processor, and
  // computes the handoff explanation on the way past (upstream does both on
  // this one task too). Reachable only via an escalated path — the agent's own
  // decision, or the interrupt — never for a case the agent cleared.
  const v = job.variables;

  // Which of the two paths got here, read off the diagram's own state rather
  // than from a flag something had to remember to set: the agent writes
  // investigationOutcome on the turn it finishes, so an unset one means the
  // ad-hoc sub-process was cancelled before it ever got there.
  const interrupted = v.investigationOutcome === undefined || v.investigationOutcome === null;

  await sleep(300);
  trace(interrupted ? "frozen after a second alert interrupted the agent" : "frozen on the agent's own escalation");

  return {
    cardFrozen: true,
    handoffTrigger: interrupted ? "second-alert-interrupt" : "agent-escalation",
    handoffReason: interrupted
      ? "A second real-time alert for the same customer arrived while the first was still under investigation (possible card-testing / impossible-travel pattern) - the investigation was abandoned and the case escalated immediately, regardless of what the agent had concluded so far."
      : "Agent escalated after investigation: " + text("investigationSummary", ""),
    // What the handoff form shows as "the alert that triggered this", which is
    // the second one when there was one and the original otherwise.
    currentAlertId: text("alertId", ""),
    currentCardLast4: text("cardLast4", ""),
  };
}`;

export const fraudAlertTriage: ExampleDef = {
  ...meta,
  bpmn,
  forms: {
    "fraud-analyst-consult": analystConsultForm,
    "fraud-team-handoff": teamHandoffForm,
  },
  seed: SCENARIO_AMBIGUOUS,
  scenariosLabel: "Fraud alert",
  scenarios: [
    {
      // Upstream's "try it in 5 minutes" alert, and the one most likely to make
      // the agent use its own analyst-consult tool.
      label: "Ambiguous — between both thresholds",
      variables: SCENARIO_AMBIGUOUS,
    },
    {
      label: "Clearly cleared — low score, no history",
      variables: {
        alertId: "ALERT-6601",
        customerId: "CUST-40100",
        cardLast4: "2210",
        transactionAmount: 145.5,
        transactionCurrency: "USD",
        merchantName: "Riverside Coffee Roasters",
        merchantCountry: "United States",
        riskScore: 38,
        alertReason:
          "New merchant category for this customer, amount is modest relative to typical spend.",
      },
    },
    {
      label: "Clearly escalated — three related alerts",
      variables: {
        alertId: "ALERT-6603",
        customerId: "CUST-40103",
        cardLast4: "7788",
        transactionAmount: 2450,
        transactionCurrency: "USD",
        merchantName: "Nordic Electronics Oslo",
        merchantCountry: "Norway",
        riskScore: 62,
        alertReason:
          "First-time merchant category and country for this customer, amount well above their typical transaction size.",
      },
    },
    {
      // Half of upstream's interrupt demo: this one starts the case, and the
      // "second real-time alert" button below is the card-testing follow-up
      // that overrides it. On its own it is unremarkable enough that the agent
      // stops to ask the analyst — which is where the interrupt lands.
      label: "Mundane — then press the second-alert button",
      variables: {
        alertId: "ALERT-6604",
        customerId: "CUST-40112",
        cardLast4: "3315",
        transactionAmount: 4800,
        transactionCurrency: "NOK",
        merchantName: "Alpine Ski Rentals Oslo",
        merchantCountry: "Norway",
        riskScore: 45,
        alertReason:
          "Slightly above average ski-season purchase; first time renting from this merchant.",
      },
    },
  ],
  messageEvents: [
    {
      elementId: "Boundary_SecondAlert",
      label: "\u{1F6A8} A second alert arrives for this customer",
      // Upstream's ALERT-6605. Deliberately carries no customerId: the publish
      // already correlates on the running case's own key, and sending one would
      // let a reader who picked a different scenario overwrite it.
      variables: {
        alertId: "ALERT-6605",
        cardLast4: "3315",
        transactionAmount: 1,
        transactionCurrency: "USD",
        merchantName: "QuickMart Convenience #4471",
        merchantCountry: "Philippines",
        riskScore: 81,
        alertReason:
          "Second authorization attempt on this card within seconds - different country and merchant category from the first alert. Classic card-testing / impossible-travel pattern.",
      },
    },
  ],
  scriptedAgent: SCRIPTED_AGENT,
  // Without the cross-reference there is no relatedAlerts90d, and every
  // threshold in the prompt reads it — a "done" before it has run is a decision
  // made on two thirds of the case.
  requiredTools: ["CrossReferenceTransactionHistory"],
  handlers: [
    {
      elementId: "SnapshotOriginalAlert",
      standsInFor: "script task — freeze the alert that started this case",
      source: SNAPSHOT_ORIGINAL_ALERT,
    },
    {
      elementId: "CrossReferenceTransactionHistory",
      standsInFor: "HTTP connector — linked-account transaction history",
      source: CROSS_REFERENCE_TRANSACTION_HISTORY,
    },
    {
      elementId: "ConvertToBaseCurrency",
      standsInFor: "HTTP connector — api.frankfurter.app exchange rates",
      source: CONVERT_TO_BASE_CURRENCY,
    },
    {
      elementId: "RecordAnalystTimeout",
      standsInFor: "script task — hand the SLA timeout back to the agent",
      source: RECORD_ANALYST_TIMEOUT,
    },
    {
      elementId: "CloseAlertNotification",
      standsInFor: "HTTP connector — customer notification / case management",
      source: CLOSE_ALERT_NOTIFICATION,
    },
    {
      elementId: "FreezeCard",
      standsInFor: "HTTP connector — card processor freeze instruction",
      source: FREEZE_CARD,
    },
  ],
};
