import type { ExampleDef } from "../../framework/types";
import { createTemplateMap, templateNameFromPath } from "../../framework/templates";
import { loanTour } from "./tour";
import bpmn from "./model.bpmn?raw";
import applicationForm from "./loan-application.form.json";
import reviewForm from "./senior-officer-review.form.json";

/**
 * The example's prompts, as their own editable files (see
 * `src/framework/templates.ts`): `prompts/system-prompt.md` and
 * `prompts/user-prompt.md` resolve the `{{system-prompt}}` and
 * `{{user-prompt}}` placeholders inside `model.bpmn`'s FEEL string literals,
 * substituted once at deploy/parse time. Editing one of these files (or its
 * live tab in the runner) changes what the agent is told next run — no XML,
 * no FEEL, no `&#10;`/`&quot;` escaping to hand-author.
 */
const promptFiles = import.meta.glob("./prompts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;
const prompts = createTemplateMap(
  Object.fromEntries(
    Object.entries(promptFiles).map(([path, content]) => [
      templateNameFromPath(path),
      content.trimEnd(),
    ]),
  ),
);

/**
 * Camunda's "Loan origination agent" — the governance illustration from
 * https://camunda.com/orchestrate/agents/, made runnable on the nano engine.
 *
 * An AI Agent ad-hoc sub-process gathers the case (query the customer, pull a
 * credit bureau report, apply the underwriting policy, update the application
 * status), then — and this is the whole point — **every** application, whatever
 * the agent recommended, passes through a mandatory *Senior officer review*
 * human task before an exclusive gateway routes it to an offer or a decline.
 * Neither outcome is reachable without a human first signing off: the agent
 * advises, the process governs.
 *
 * A note on topology: the camunda.com diagram draws the human review as a
 * *sub-process tool* the agent may call. The nano engine (v1) cannot execute
 * the inner flow of a sub-process/call-activity tool — it activates and
 * immediately completes it — so a review buried inside a tool would be a review
 * the agent could skip. Putting *Senior officer review* on the trunk **after**
 * the agent instead makes the governance property real and enforceable rather
 * than decorative, while keeping the shape the page promises: an agent that
 * picks its own tools, then a human gate on the way to either outcome.
 */

const SCENARIO_STRONG = {
  applicantName: "Ada Lovelace",
  annualIncome: 96000,
  monthlyDebt: 850,
  creditScore: 782,
  loanAmount: 20000,
  loanPurpose: "Home improvement",
};

const SCENARIO_MARGINAL = {
  applicantName: "Cyrus Vale",
  annualIncome: 38000,
  monthlyDebt: 1450,
  creditScore: 566,
  loanAmount: 42000,
  loanPurpose: "Debt consolidation",
};

/**
 * The deterministic stand-in for the LLM. Called once per agent turn with the
 * instance's live variables, so the turn is derived from what the previous
 * tools wrote — `undefined` means a tool hasn't run yet. It walks the four
 * tools in a sensible order (know the customer, pull the bureau report, run the
 * policy, record the status) and then declares itself done. A live model is
 * free to pick a different order or skip a tool; the `requiredTools` guard
 * below is what stops it skipping the one that matters.
 */
const SCRIPTED_AGENT = `async (job) => {
  const v = job.variables;

  // Turn 1 — pull the applicant's existing customer relationship.
  if (v.customerProfile === undefined) {
    return { activateElements: [{ elementId: "QueryCustomer" }] };
  }

  // Turn 2 — pull the credit bureau report.
  if (v.bureauReport === undefined) {
    return { activateElements: [{ elementId: "CreditBureauLookup" }] };
  }

  // Turn 3 — run the deterministic underwriting policy. This is the tool the
  // senior officer's review actually leans on.
  if (v.recommendation === undefined) {
    return { activateElements: [{ elementId: "AssessApplication" }] };
  }

  // Turn 4 — record that the case is now with a human reviewer.
  if (v.applicationStatus === undefined) {
    return { activateElements: [{ elementId: "UpdateApplicationStatus" }] };
  }

  return { completionConditionFulfilled: true };
}`;

const QUERY_CUSTOMER = `async (job, { text, sleep, trace }) => {
  // Stands in for a CRM connector looking the applicant up by name/id. No CRM
  // in a browser, so derive a plausible, stable profile from the application.
  const name = text("applicantName", "the applicant");
  await sleep(300);

  // A stable pseudo-tenure from the name so the same applicant always looks the
  // same, without any real data.
  const seed = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const relationshipYears = seed % 12;
  const profile = {
    customerId: "CUST-" + (1000 + (seed % 9000)),
    segment: relationshipYears >= 5 ? "established" : "new",
    relationshipYears: relationshipYears,
    existingProducts: relationshipYears >= 5 ? ["current-account", "savings"] : ["current-account"],
  };
  trace(profile.segment + " customer, " + relationshipYears + "y relationship");

  return { customerProfile: profile, toolCallResult: profile };
}`;

const CREDIT_BUREAU_LOOKUP = `async (job, { text, num, sleep, trace }) => {
  // Stands in for a credit reference agency API. Turns the stated credit score
  // into a bureau report with a band and a derogatory-marks count.
  const name = text("applicantName", "the applicant");
  const score = num("creditScore", 600);
  await sleep(300);

  const band = score >= 740 ? "excellent" : score >= 670 ? "good" : score >= 580 ? "fair" : "poor";
  const derogatoryMarks = score >= 670 ? 0 : score >= 580 ? 1 : 3;
  const report = { subject: name, score: score, band: band, derogatoryMarks: derogatoryMarks };
  trace("bureau score " + score + " (" + band + "), " + derogatoryMarks + " derogatory mark(s)");

  return { bureauReport: report, toolCallResult: report };
}`;

const ASSESS_APPLICATION = `async (job, { num, trace }) => {
  // The script task inside the agent — and the place where policy beats the
  // model. It computes the debt-to-income ratio, a risk band and a
  // recommendation purely from the verified figures, so the recommendation the
  // senior officer sees is the lender's policy, not a model's opinion.
  const income = num("annualIncome", 0);
  const monthlyDebt = num("monthlyDebt", 0);
  const score = num("creditScore", 0);
  const amount = num("loanAmount", 0);

  // Debt-to-income: annualised existing debt against annual income, as a
  // percentage. Higher is worse.
  const dti = income > 0 ? Math.round(((monthlyDebt * 12) / income) * 100) : 100;

  let riskBand;
  if (score >= 720 && dti <= 36) riskBand = "low";
  else if (score >= 640 && dti <= 45) riskBand = "medium";
  else riskBand = "high";

  // Recommend approval only for low/medium risk within a sensible exposure.
  const recommendation = riskBand !== "high" && amount <= income ? "approve" : "decline";
  trace("DTI " + dti + "%, risk " + riskBand + " -> recommend " + recommendation);

  return {
    debtToIncome: dti,
    riskBand: riskBand,
    recommendation: recommendation,
    toolCallResult: { debtToIncome: dti, riskBand: riskBand, recommendation: recommendation },
  };
}`;

const UPDATE_APPLICATION_STATUS = `async (job, { sleep, trace }) => {
  // Stands in for a write-back to the loan origination system. Marks the case
  // as awaiting the senior officer's decision.
  await sleep(200);
  trace("application status -> under-review");
  return { applicationStatus: "under-review", toolCallResult: "under-review" };
}`;

const ISSUE_LOAN_OFFER = `async (job, { num, sleep, trace }) => {
  // Trunk service task on the approved path. Prices the approved loan from the
  // amount and the assessed risk band, standing in for the offer/booking system.
  const amount = num("loanAmount", 0);
  const band = job.variables.riskBand || "medium";
  await sleep(300);

  const rate = band === "low" ? 6.9 : band === "medium" ? 9.9 : 13.9;
  const termMonths = 60;
  const monthlyRate = rate / 100 / 12;
  const monthlyRepayment = Math.round(
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths)),
  );
  const offer = { amount: amount, aprPercent: rate, termMonths: termMonths, monthlyRepayment: monthlyRepayment };
  trace("offer issued: " + amount + " at " + rate + "% over " + termMonths + "mo");

  return { loanOffer: offer };
}`;

const SEND_DECLINE_NOTICE = `async (job, { text, sleep, trace }) => {
  // Trunk service task on the declined path. Sends the applicant a decline
  // notice with the recorded reason, standing in for a notification channel.
  const note = text("reviewNote", "");
  const reason = note || "Application did not meet the lending policy.";
  await sleep(300);
  trace("decline notice sent");

  return { declineNotice: { reason: reason, sentTo: text("applicantName", "the applicant") } };
}`;

export const loanOrigination: ExampleDef = {
  id: "loan-origination",
  title: "Loan origination agent",
  blurb:
    "An AI agent gathers a loan case with its own tools — customer lookup, credit bureau, an underwriting policy, a status update — then every application passes through a mandatory senior-officer review before a gateway routes it to an offer or a decline. The agent advises; the process governs.",
  docsUrl: "https://camunda.com/orchestrate/agents/",
  bpmn,
  forms: {
    "loan-application": applicationForm,
    "loan-senior-officer-review": reviewForm,
  },
  seed: SCENARIO_STRONG,
  scenarios: [
    { label: "Strong applicant (policy recommends approve)", variables: SCENARIO_STRONG },
    { label: "Marginal applicant (policy recommends decline)", variables: SCENARIO_MARGINAL },
  ],
  scriptedAgent: SCRIPTED_AGENT,
  templates: prompts,
  tour: loanTour,
  // The one tool whose absence changes what a human reviews: the gateway can
  // only mean something if the officer has a policy recommendation and risk
  // band in front of them, and those are what AssessApplication produces. A
  // model that reports done without running it hands the reviewer a case with
  // nothing assessed.
  requiredTools: ["AssessApplication"],
  handlers: [
    { elementId: "QueryCustomer", standsInFor: "CRM connector — customer lookup", source: QUERY_CUSTOMER },
    { elementId: "CreditBureauLookup", standsInFor: "REST connector — credit bureau", source: CREDIT_BUREAU_LOOKUP },
    { elementId: "AssessApplication", standsInFor: "Script task — underwriting policy (FEEL)", source: ASSESS_APPLICATION },
    { elementId: "UpdateApplicationStatus", standsInFor: "REST connector — origination system", source: UPDATE_APPLICATION_STATUS },
    { elementId: "IssueLoanOffer", standsInFor: "REST connector — offer/booking system", source: ISSUE_LOAN_OFFER },
    { elementId: "SendDeclineNotice", standsInFor: "REST connector — notifications", source: SEND_DECLINE_NOTICE },
  ],
};
