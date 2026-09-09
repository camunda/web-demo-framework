import type { ExampleDef } from "../../framework/types";
import bpmn from "./model.bpmn?raw";
import invoiceSubmitForm from "./invoice-submit.form.json";
import paymentReleaseRequestForm from "./payment-release-request.form.json";
import complianceSignoffForm from "./compliance-signoff.form.json";

/**
 * Camunda's **human-in-the-loop agent** — the "Human-in-loop" tab of
 * camunda.com/orchestrate/agents, ported from
 * `camunda/camunda-8-tutorials/examples/human-in-the-loop-agent`.
 *
 * The model is the tutorial's `invoice-payment-agent.bpmn` unchanged: it
 * deploys and runs on this repo's wasm engine as-is (`npm run probe` reaches
 * completion with no incidents), so nothing about the diagram is an
 * adaptation. Only the connector bodies are — see the handlers below.
 *
 * Two different human gates, on purpose:
 *
 * - **In-loop.** `RequestPaymentRelease` is a sub-process the agent calls as
 *   one of its tools, and the first thing inside it is a user task. The agent
 *   asks for a release the same way it calls any other tool, and gets the
 *   reviewer's answer back as that tool's result — so a denial is something it
 *   can reason about and respond to, not an exception thrown at it.
 *   `ReleasePayment` has exactly one incoming flow, from the approved branch
 *   of `Gateway_ReleaseApproved`: money cannot move on any other path,
 *   whatever the model decides or is talked into.
 * - **Post-hoc.** `HumanTask_ComplianceSignoff` sits outside the agent
 *   entirely and only ever sees `caseOutcome`/`caseSummary` — two values the
 *   agent's output mapping derives from what actually happened
 *   (`paymentReceipt`, `disputeNoticeReceipt`), not from anything the model
 *   said about itself.
 */

const SCENARIO_CLEAN_MATCH = {
  vendorName: "Acme Office Supplies",
  invoiceNumber: "INV-10234",
  poNumber: "PO-88291",
  poAmount: 4200,
  invoiceAmount: 4200,
  invoiceCurrency: "USD",
  invoiceNotes: "Quarterly office supplies delivery per PO, no changes.",
};

/**
 * The deterministic stand-in for the LLM: one call per agent turn, given the
 * instance's live variables, so each turn is derived from what the previous
 * tool wrote. It implements the same matching policy the system prompt states,
 * which is the point — a live brain reads that prompt and should arrive here
 * too.
 *
 * The variables it writes are the `fromAi(toolCall.x, …)` argument names off
 * the diagram (`amount`, `fromCurrency`, `proposedAmountUSD`, `reasoning`,
 * `disputeReason`); a live brain supplies exactly the same names, so the
 * handlers below read the same values either way.
 */
const SCRIPTED_AGENT = `async (job) => {
  const v = job.variables;
  const currency = v.invoiceCurrency || "USD";
  const poAmount = Number(v.poAmount);
  const notes = String(v.invoiceNotes || "");

  // Turn 1 — a non-USD invoice can't be compared to a USD purchase order
  // until it's converted. The prompt forbids estimating the rate.
  if (currency !== "USD" && v.convertedAmountUSD === undefined) {
    return {
      variables: { amount: Number(v.invoiceAmount), fromCurrency: currency },
      activateElements: [{ elementId: "ConvertCurrency" }],
    };
  }

  const invoiceUSD =
    currency === "USD" ? Number(v.invoiceAmount) : Number(v.convertedAmountUSD);
  const overage = poAmount > 0 ? (invoiceUSD - poAmount) / poAmount : 0;
  const pct = (overage * 100).toFixed(1);
  // The prompt's "the invoice notes give a reason for the extra amount". Note
  // it only asks whether a reason was given, not whether it's a good one —
  // that judgement belongs to the reviewer the next tool call pauses for.
  const documented = notes.trim().length > 0;
  // "Within 2% of the PO amount" is symmetric, so a small underage is a clean
  // match too — the prompt's later "an invoice amount below the PO" case is
  // about underages that fall outside this band.
  const withinTolerance = Math.abs(overage) <= 0.02;
  const documentedOverage = overage > 0.02 && overage <= 0.1 && documented;

  // Turn 2 — ask for the release, or dispute the invoice. Asking is a tool
  // call like any other; the reviewer's answer comes back as its result.
  if (withinTolerance || documentedOverage) {
    if (v.releaseDecision === undefined) {
      const reasoning = withinTolerance
        ? "Invoice matches the PO within 2%."
        : "Invoice is " + pct + "% over the PO, and the notes document why.";
      return {
        variables: {
          proposedAmountUSD: invoiceUSD,
          reasoning: reasoning,
          // The diagram prefills the reviewer's form from the agent's
          // proposal; set the form's own key so the prefill lands whether or
          // not the engine evaluates the fromAi() input mapping.
          agentProposedAmountUSD: invoiceUSD,
          agentReleaseReasoning: reasoning,
          approvedAmountUSD: invoiceUSD,
        },
        activateElements: [{ elementId: "RequestPaymentRelease" }],
      };
    }

    // Approved: the inner flow releases the payment before the agent hears
    // back, so wait for the receipt rather than treating the reviewer's click
    // as the end of the story. Denied: read the reviewer's comments rather
    // than re-proposing the same amount.
    if (v.paymentReceipt !== undefined) return { completionConditionFulfilled: true };
    if (v.releaseDecision === "approve") return { activateElements: [] };
    if (v.disputeNoticeReceipt === undefined) {
      return {
        variables: {
          disputeReason:
            "Payment release denied on review: " +
            String(v.releaseReviewerComments || "no comments given").trim().replace(/\\.$/, "") +
            ".",
        },
        activateElements: [{ elementId: "NotifyVendorDispute" }],
      };
    }
    return { completionConditionFulfilled: true };
  }

  // Outside policy — no release is proposed at all. The vendor is told which
  // rule the invoice actually failed: the notice goes to a real counterparty,
  // so "no documented reason" had better not be sent for an invoice that came
  // with one, or for one billed under the PO.
  if (v.disputeNoticeReceipt === undefined) {
    const failure =
      overage < 0
        ? "is " + pct.replace("-", "") + "% below PO " + String(v.poNumber)
        : overage > 0.1
          ? "is " + pct + "% over PO " + String(v.poNumber) + ", beyond the 10% ceiling"
          : "is " + pct + "% over PO " + String(v.poNumber) + " with no reason given in the notes";
    return {
      variables: { disputeReason: "Invoice " + failure + "." },
      activateElements: [{ elementId: "NotifyVendorDispute" }],
    };
  }

  return { completionConditionFulfilled: true };
}`;

const CONVERT_CURRENCY = `async (job, { num, text, sleep, trace }) => {
  // Stands in for the HTTP connector calling api.frankfurter.app (ECB
  // reference rates). No network in a sandboxed browser demo, so use a small
  // fixed rate table — the shape of the answer is what matters here.
  const amount = num("amount");
  const from = text("fromCurrency", "USD");
  const rates = { USD: 1, EUR: 1.09, GBP: 1.27 };
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

const RELEASE_PAYMENT = `async (job, { num, text, sleep }) => {
  // Stands in for the HTTP connector posting to the payment rail. Reachable
  // only from the approved branch of Gateway_ReleaseApproved — that is the
  // guardrail, and it is in the diagram, not in this code.
  const amount = num("approvedAmountUSD");
  const vendor = text("vendorName", "the vendor");

  await sleep(300);

  return {
    paymentReceipt: {
      vendorName: vendor,
      invoiceNumber: text("invoiceNumber", ""),
      poNumber: text("poNumber", ""),
      approvedAmountUSD: amount,
      releaseReviewerComments: text("releaseReviewerComments", ""),
      settledAt: "2026-01-01T00:00:00Z",
    },
    // What the compliance reviewer downstream is shown. The diagram derives
    // these on the agent's output mapping, which this engine doesn't apply,
    // so they're set where it does run code — still derived from the payment
    // having actually happened, not from anything the model claimed.
    caseOutcome: "released",
    caseSummary: "Payment of " + amount + " USD released to " + vendor + ".",
    toolCallResult:
      "Payment of " + amount + " USD released to " + vendor + ". Receipt logged.",
  };
}`;

const RECORD_RELEASE_DENIED = `async (job, { text, trace }) => {
  // The script task on the denied branch. Its whole job is to hand the denial
  // back to the agent as the result of its own RequestPaymentRelease call, so
  // the refusal arrives as information rather than as a failure.
  const comments = text("releaseReviewerComments", "");
  trace("reviewer denied the release");

  return {
    toolCallResult: "Payment release denied by reviewer. Comments: " + comments,
  };
}`;

const NOTIFY_VENDOR_DISPUTE = `async (job, { text, sleep }) => {
  // Stands in for the HTTP connector posting the dispute notice. An outbound
  // notification, not a payment — no human gate on this one.
  const reason = text("disputeReason", "Invoice does not match the purchase order.");

  await sleep(300);

  return {
    disputeNoticeReceipt: {
      vendorName: text("vendorName", ""),
      invoiceNumber: text("invoiceNumber", ""),
      poNumber: text("poNumber", ""),
      disputeReason: reason,
    },
    caseOutcome: "disputed",
    caseSummary: "Vendor notified of dispute. " + reason,
    toolCallResult: "Vendor notified of dispute: " + reason,
  };
}`;

export const invoicePayment: ExampleDef = {
  id: "invoice-payment",
  title: "Invoice payment approval agent",
  blurb:
    "A human-in-the-loop agent: the tool that releases money is a user task inside the agent's own tool loop, so approval is something the agent asks for and reasons about — and payment has exactly one incoming path, from the approved branch. A second, post-hoc sign-off outside the agent sees only what actually happened.",
  hero: {
    headline: "The agent can *ask* to pay. Only a human can *approve* it.",
    lede: "Camunda's human-in-the-loop agent pattern, running here on a wasm engine in your browser. Deny the release in the reviewer form and watch the agent read the denial and change course.",
    tagline: "Human-in-the-loop agent",
  },
  docsUrl:
    "https://github.com/camunda/camunda-8-tutorials/tree/main/examples/human-in-the-loop-agent",
  bpmn,
  forms: {
    "invoice-submit": invoiceSubmitForm,
    "payment-release-request": paymentReleaseRequestForm,
    "compliance-signoff": complianceSignoffForm,
  },
  seed: SCENARIO_CLEAN_MATCH,
  scenariosLabel: "Invoice to review",
  scenarios: [
    {
      label: "Clean match — invoice equals the PO",
      variables: SCENARIO_CLEAN_MATCH,
    },
    {
      label: "Documented overage — 4.5% over, with a reason",
      variables: {
        ...SCENARIO_CLEAN_MATCH,
        invoiceNumber: "INV-10251",
        invoiceAmount: 4389,
        invoiceNotes:
          "Includes pre-approved rush freight surcharge agreed with procurement on 12 Jan.",
      },
    },
    {
      label: "Foreign currency — EUR invoice against a USD PO",
      variables: {
        ...SCENARIO_CLEAN_MATCH,
        invoiceNumber: "INV-10262",
        invoiceAmount: 3860,
        invoiceCurrency: "EUR",
        invoiceNotes: "Quarterly office supplies delivery per PO, billed in euros.",
      },
    },
    {
      label: "Vague justification — 7% over, no reason given",
      variables: {
        ...SCENARIO_CLEAN_MATCH,
        invoiceNumber: "INV-10277",
        invoiceAmount: 4494,
        invoiceNotes: "Additional items supplied.",
      },
    },
  ],
  scriptedAgent: SCRIPTED_AGENT,
  handlers: [
    {
      elementId: "ConvertCurrency",
      standsInFor: "HTTP connector — api.frankfurter.app exchange rates",
      source: CONVERT_CURRENCY,
    },
    {
      elementId: "ReleasePayment",
      standsInFor: "HTTP connector — accounts-payable payment rail",
      source: RELEASE_PAYMENT,
    },
    {
      elementId: "RecordReleaseDenied",
      standsInFor: "script task — hand the denial back to the agent",
      source: RECORD_RELEASE_DENIED,
    },
    {
      elementId: "NotifyVendorDispute",
      standsInFor: "HTTP connector — vendor dispute notice",
      source: NOTIFY_VENDOR_DISPUTE,
    },
  ],
};
