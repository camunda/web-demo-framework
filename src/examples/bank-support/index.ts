import type { ExampleDef } from "../../framework/types";
import meta from "./meta";
import bpmn from "./model.bpmn?raw";
import requestForm from "./bank-support-request.form.json";
import reviewForm from "./bank-support-review.form.json";

/**
 * Camunda's **orchestrator agent** — the "Orchestrator" tab of
 * camunda.com/orchestrate/agents, ported from
 * `camunda/camunda-8-tutorials/examples/orchestrator-agent`.
 *
 * The pattern: one agent that resolves nothing itself. It reads the customer's
 * message, decides which specialists it needs, and delegates. Each specialist
 * is its own process with its own prompt and its own single tool, so a request
 * that needs two of them starts two instances and the orchestrator waits for
 * both.
 *
 * What that structure buys, and why it isn't just a nested agent: every answer
 * in the final summary is attributable to the specialist that produced it, and
 * `PrepareCaseSummary` downstream reads *those* results — not the
 * orchestrator's account of them. The orchestrator can misroute a request, but
 * it cannot answer one.
 *
 * **Divergences from the upstream model**, for whoever next syncs it:
 *
 * 1. Four processes in one `<bpmn:definitions>` rather than four files, since
 *    this framework deploys a single BPMN string. The processes themselves are
 *    unchanged, and the orchestrator is first so the runner starts it.
 * 2. Each `callActivity` tool is wrapped in an embedded `bpmn:subProcess`. A
 *    call activity activated directly as an ad-hoc tool never starts its child
 *    process on this engine — and its output mapping still runs, so the tool
 *    returns `{status: null, summary: null}` and the orchestrator carries on as
 *    if the specialist had answered (docs/engine-coverage.md;
 *    Magikcraft/nano-bpm#1159). The wrapper is the same one #1154 already
 *    needs, and is verified to start the child and map its result back.
 * 3. Each specialist writes its own result variable — `loanResolution`,
 *    `accountResolution`, `cardResolution` — instead of all three writing
 *    `toolCallResult`. Upstream aggregates via the ad-hoc `outputCollection`
 *    (`toolCallResults`), which this engine populates with nulls, and a single
 *    shared variable would in any case leave only the last specialist's answer
 *    standing when two run.
 * 4. `PrepareCaseSummary` and the `All resolved?` gateway therefore read those
 *    three variables. Upstream's FEEL (`every r in toolCallResults satisfies
 *    r.content.status = "resolved"`) can't run here for the same reason. The
 *    rule is unchanged: every specialist that ran must have resolved, and a
 *    case where none ran escalates.
 * 5. The specialists set `status`/`summary` from the scripted agent's final
 *    turn rather than through the AI Agent connector's `agent.responseJson.*`
 *    output mapping, which this engine doesn't apply.
 * 6. Each specialist takes its own tool argument — `loanRequest`,
 *    `accountRequest`, `cardRequest` — and its call activity is fed from that
 *    (`=loanRequest` → the child's `customerRequest`). Upstream writes all
 *    three from `fromAi(toolCall.customerRequest, …)` directly on the call
 *    activity, which this engine leaves unresolved: the child starts with no
 *    `customerRequest` at all. `fromAi(…)` resolves from *instance* scope here
 *    (see `liveAgent.ts`), so one shared `customerRequest` argument would also
 *    have meant the second specialist overwriting the first's portion — and
 *    the orchestrator's own copy of the full message with it. The declarations
 *    stay on the wrapper so a live brain still knows what to supply.
 * 7. The start form is just the customer's message; upstream's scenario
 *    dropdown is this framework's own scenario picker (see `scenarios` below).
 * 8. The three HTTP connectors are stand-in handlers — there is no network in
 *    a sandboxed browser demo. `ValidateIban` does the real ISO 7064 mod-97
 *    check rather than matching against a fixed list, so the valid and invalid
 *    scenarios differ for the reason they claim to.
 */

const SCENARIO_LOAN =
  "I'm refinancing my $240,000 mortgage at 6.5% interest over 30 years - what would my new monthly payment be?";
const SCENARIO_LOAN_AND_ACCOUNT =
  "Please check whether DE89370400440532013000 is a valid IBAN for my transfer, and also tell me what my monthly payment would look like on a $200,000 loan at 6% over 30 years.";
const SCENARIO_ACCOUNT_FAILS =
  "Can you confirm whether DE89370400440532013001 is a valid account number before I set up a transfer?";
const SCENARIO_CARD =
  "I don't recognize a small charge on my card - the first six digits are 453201, can you tell me which bank issued it?";

/**
 * The deterministic stand-in for the LLM, for all four agents at once.
 *
 * `job.elementId` says which host is being asked — the same thing a live brain
 * is told — so this reads as four small policies rather than one. Each mirrors
 * the system prompt on its own host, which is the point: a live brain reading
 * those prompts should arrive at the same routing.
 *
 * The variables it writes are the `fromAi(toolCall.x, …)` argument names off
 * the diagram, so the handlers below read the same values from a live brain.
 */
const SCRIPTED_AGENT = `async (job) => {
  const v = job.variables;
  const host = job.elementId;
  const request = String(v.customerRequest || "");
  const text = request.toLowerCase();

  if (host === "CustomerSupportOrchestrator") {
    // Turn 2+: every specialist it called has come back.
    if (v.loanResolution || v.accountResolution || v.cardResolution) {
      return { completionConditionFulfilled: true };
    }

    // Steps 1 and 2 of the prompt are one decision, not two: split the message
    // into clauses, and a specialist is called *because* a clause is for it —
    // receiving exactly those clauses and nothing else. Deciding "who" and
    // "what to send them" separately is what lets a whole message reach a
    // specialist that only needed one line of it.
    //
    // Clauses, not sentences: a customer writing in about two things usually
    // writes one sentence joined by "and also", which is exactly what the
    // two-specialist case below looks like.
    const clauses = request
      .split(/(?<=[.?!;])\\s+|,\\s*(?=and\\b|also\\b|plus\\b)/i)
      .map((c) => c.trim())
      .filter(Boolean);

    const portionFor = (re) => clauses.filter((c) => re.test(c.toLowerCase())).join(" ");

    const loanRequest = portionFor(/loan|mortgage|refinanc|interest rate|monthly payment|repayment/);
    const accountRequest = portionFor(/iban|account number|sort code|routing number|bank details/);
    const cardRequest = portionFor(/\\bcard\\b|charge|\\bbin\\b|first six digits|issuer|issued it/);

    const tools = [];
    if (loanRequest) tools.push({ elementId: "CallActivity_LoanAgent" });
    if (accountRequest) tools.push({ elementId: "CallActivity_AccountAgent" });
    if (cardRequest) tools.push({ elementId: "CallActivity_CardAgent" });

    // Nothing matched. Delegating at random would be worse than delegating
    // nothing: PrepareCaseSummary escalates a case no specialist resolved, so
    // a human sees it either way — but only this way is the summary honest
    // about why.
    if (tools.length === 0) return { completionConditionFulfilled: true };

    return {
      variables: {
        loanRequest: loanRequest || undefined,
        accountRequest: accountRequest || undefined,
        cardRequest: cardRequest || undefined,
      },
      activateElements: tools,
    };
  }

  if (host === "LoanSupportAgent") {
    if (v.monthlyPayment !== undefined) {
      return {
        completionConditionFulfilled: true,
        variables: {
          status: "resolved",
          summary:
            "Monthly payment on a " + v.loanAmount + " loan at " + v.annualInterestRatePercent +
            "% over " + (v.termInMonths / 12) + " years is " + v.monthlyPayment + ".",
        },
      };
    }

    // The prompt's step 1: pull the three numbers out of the customer's own
    // words. Nothing is inferred — a missing figure is a reason to ask a
    // human, not to pick a plausible default.
    //
    // The amount must be marked as money. An unmarked run of digits in a
    // banking message is at least as likely to be an account number as an
    // amount, and reading one as the other quotes a loan nobody asked for.
    const amount = (request.match(/(?:\\$|USD\\s?|EUR\\s?|£)\\s?([\\d,]+(?:\\.\\d+)?)/i) || [])[1];
    const rate = (request.match(/([\\d.]+)\\s?%/) || [])[1];
    const years = (request.match(/(\\d+)[\\s-]*year/) || [])[1];
    const loanAmount = amount ? Number(amount.replace(/,/g, "")) : undefined;

    // Step 2's guard rails, stated as thresholds rather than judgement so the
    // same case always lands the same way.
    if (loanAmount === undefined || rate === undefined || years === undefined) {
      return {
        completionConditionFulfilled: true,
        variables: {
          status: "needs-human",
          summary: "Couldn't read the amount, rate and term from the request, so a loan specialist should take this.",
        },
      };
    }
    if (Number(years) > 40 || loanAmount > 2000000) {
      return {
        completionConditionFulfilled: true,
        variables: {
          status: "needs-human",
          summary:
            "A " + loanAmount + " loan over " + years +
            " years is outside what I can quote (limits: 2,000,000 and 40 years), so a loan specialist should take this.",
        },
      };
    }

    return {
      variables: {
        loanAmount: loanAmount,
        annualInterestRatePercent: Number(rate),
        termInMonths: Number(years) * 12,
      },
      activateElements: [{ elementId: "CalculateLoanPayment" }],
    };
  }

  if (host === "AccountSupportAgent") {
    if (v.ibanValid !== undefined) {
      return {
        completionConditionFulfilled: true,
        variables: {
          // The tool's verdict, not a re-reading of the IBAN. Deciding this
          // here would put the checksum in the agent's hands.
          status: v.ibanValid ? "resolved" : "needs-human",
          summary: String(v.toolCallResult || ""),
        },
      };
    }

    // Case-insensitive, and tolerant of the four-character grouping IBANs are
    // conventionally printed in ("DE89 3704 0044 …"). Requiring the canonical
    // contiguous uppercase form would report "no identifier given" for one
    // that is plainly there, and the customer would be told it wasn't checked.
    // The grouped pattern is deliberately strict about group sizes so it stops
    // at the end of the number instead of swallowing the words after it.
    const compact = request.match(/\\b([A-Za-z]{2}[0-9A-Za-z]{13,32})\\b/);
    const grouped = request.match(
      /\\b([A-Za-z]{2}[0-9]{2}(?:[ -][0-9A-Za-z]{4})+(?:[ -][0-9A-Za-z]{1,3})?)\\b/,
    );
    const found = (compact || grouped || [])[1];
    const iban = found ? found.replace(/[ -]/g, "") : undefined;
    if (!iban) {
      return {
        completionConditionFulfilled: true,
        variables: {
          status: "needs-human",
          summary: "No account identifier was given, so there is nothing to validate.",
        },
      };
    }
    return { variables: { iban: iban }, activateElements: [{ elementId: "ValidateIban" }] };
  }

  if (host === "CardSupportAgent") {
    if (v.cardInfo !== undefined) {
      // The prompt is explicit that a lookup which finds no issuer still
      // counts as resolved — the customer asked what the charge was, and
      // "we looked and this BIN isn't on file" is an answer.
      return {
        completionConditionFulfilled: true,
        variables: { status: "resolved", summary: String(v.toolCallResult || "") },
      };
    }

    const bin = (request.match(/\\b(\\d{6,8})\\b/) || [])[1];
    if (!bin) {
      return {
        completionConditionFulfilled: true,
        variables: {
          status: "needs-human",
          summary: "No card number digits were given, so there is nothing to look up.",
        },
      };
    }
    return { variables: { bin: bin }, activateElements: [{ elementId: "LookupCardBin" }] };
  }

  return { completionConditionFulfilled: true };
}`;

const CALCULATE_LOAN_PAYMENT = `async (job, { num, sleep, trace }) => {
  // Stands in for the HTTP connector evaluating the amortization formula on
  // api.mathjs.org. The formula is the standard one, computed here rather than
  // round-tripped over the network.
  const principal = num("loanAmount");
  const annualRatePercent = num("annualInterestRatePercent");
  const months = num("termInMonths");

  if (!(principal > 0) || !(months > 0)) {
    throw new Error(
      "Cannot quote a payment for principal " + JSON.stringify(principal) +
      " over " + JSON.stringify(months) + " months."
    );
  }

  await sleep(300);

  const monthlyRate = annualRatePercent / 1200;
  // A 0% loan is just the principal spread evenly; the amortization formula
  // divides by zero for it.
  const payment =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  const monthlyPayment = Math.round(payment * 100) / 100;

  trace(principal + " at " + annualRatePercent + "% over " + months + " months → " + monthlyPayment + "/mo");

  return {
    monthlyPayment: monthlyPayment,
    toolCallResult: "Calculated monthly payment: " + monthlyPayment,
  };
}`;

const VALIDATE_IBAN = `async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector calling openiban.com. The ISO 7064 mod-97
  // check is done for real: the two account scenarios differ by one digit, and
  // this is what makes them behave differently.
  const raw = text("iban", "").replace(/\\s+/g, "").toUpperCase();

  await sleep(300);

  if (!/^[A-Z]{2}[0-9A-Z]{13,32}$/.test(raw)) {
    return {
      ibanValid: false,
      toolCallResult: "That does not look like an IBAN, so it could not be checked.",
    };
  }

  // Move the country code and check digits to the end, letters become numbers
  // (A=10 … Z=35), and the whole thing mod 97 must be 1.
  const rearranged = raw.slice(4) + raw.slice(0, 4);
  const digits = rearranged.replace(/[A-Z]/g, (c) => String(c.charCodeAt(0) - 55));
  let remainder = 0;
  for (const d of digits) remainder = (remainder * 10 + Number(d)) % 97;
  const valid = remainder === 1;

  // A stand-in directory: enough to show the shape of a real answer without
  // pretending to know every bank in the world.
  const banks = { "37040044": "Commerzbank" };
  const bank = banks[raw.slice(4, 12)];

  trace(raw + " → " + (valid ? "valid" : "checksum failed"));

  return {
    ibanValid: valid,
    ibanInfo: valid && bank ? { name: bank } : null,
    toolCallResult: valid
      ? "IBAN is valid" + (bank ? " (bank: " + bank + ")" : "") + "."
      : "IBAN failed validation - the check digits do not match.",
  };
}`;

const LOOKUP_CARD_BIN = `async (job, { text, sleep, trace }) => {
  // Stands in for the HTTP connector calling lookup.binlist.net.
  const bin = text("bin", "").replace(/\\D/g, "").slice(0, 8);

  await sleep(300);

  const directory = {
    "453201": { bank: "Barclays", scheme: "visa", country: "United Kingdom" },
    "545454": { bank: "Mastercard Test Bank", scheme: "mastercard", country: "United States" },
  };
  const hit = directory[bin.slice(0, 6)];

  trace(bin + " → " + (hit ? hit.bank : "no issuer record"));

  return {
    // Set either way: it is what tells the agent the lookup happened at all,
    // which the prompt treats as resolving the case even when no issuer is
    // found.
    cardInfo: hit ?? { bank: null },
    toolCallResult: hit
      ? "Card BIN resolves to " + hit.bank + " (" + hit.scheme + ", " + hit.country + ")."
      : "Lookup completed but no specific issuer record was found for this BIN.",
  };
}`;

const PREPARE_CASE_SUMMARY = `async (job) => {
  // Deterministic aggregation, deliberately downstream of the agent: it reads
  // what each specialist returned through its own call activity, not the
  // orchestrator's account of what they said.
  const v = job.variables;
  const ran = [
    ["Loan Support Agent", v.loanResolution],
    ["Account Support Agent", v.accountResolution],
    ["Card Support Agent", v.cardResolution],
  ].filter(([, r]) => r && typeof r === "object");

  if (ran.length === 0) {
    return {
      combinedSummary: "No specialist agent was called for this request.",
      // Nothing ran, so nothing was resolved. Treating "no failures" as
      // success here would close a case nobody looked at.
      allResolved: false,
    };
  }

  return {
    combinedSummary: ran.map(([name, r]) => name + ": " + r.summary).join("\\n\\n"),
    allResolved: ran.every(([, r]) => r.status === "resolved"),
  };
}`;

const NOTIFY_CUSTOMER = `async (job, { text, sleep }) => {
  // Stands in for the HTTP connector posting to the customer-notification
  // service. Only reachable from the resolved branch of Gateway_AllResolved.
  await sleep(300);

  return {
    notificationReceipt: {
      sentAt: "2026-01-01T00:00:00Z",
      body: text("combinedSummary", ""),
    },
    caseOutcome: "resolved-automatically",
  };
}`;

export const bankSupport: ExampleDef = {
  ...meta,
  bpmn,
  forms: {
    "bank-support-request": requestForm,
    "bank-support-review": reviewForm,
  },
  seed: { customerRequest: SCENARIO_LOAN },
  scenariosLabel: "Customer request",
  scenarios: [
    { label: "Loan question — one specialist", variables: { customerRequest: SCENARIO_LOAN } },
    {
      label: "Loan + account — two specialists at once",
      variables: { customerRequest: SCENARIO_LOAN_AND_ACCOUNT },
    },
    {
      // One digit different from the IBAN above, so the checksum fails for a
      // real reason and the case escalates to the reviewer.
      label: "Account question — fails validation, needs review",
      variables: { customerRequest: SCENARIO_ACCOUNT_FAILS },
    },
    { label: "Card question — one specialist", variables: { customerRequest: SCENARIO_CARD } },
  ],
  scriptedAgent: SCRIPTED_AGENT,
  handlers: [
    {
      elementId: "CalculateLoanPayment",
      standsInFor: "HTTP connector — api.mathjs.org expression evaluator",
      source: CALCULATE_LOAN_PAYMENT,
    },
    {
      elementId: "ValidateIban",
      standsInFor: "HTTP connector — openiban.com IBAN validation",
      source: VALIDATE_IBAN,
    },
    {
      elementId: "LookupCardBin",
      standsInFor: "HTTP connector — lookup.binlist.net BIN lookup",
      source: LOOKUP_CARD_BIN,
    },
    {
      elementId: "PrepareCaseSummary",
      standsInFor: "script task — combine every specialist's resolution",
      source: PREPARE_CASE_SUMMARY,
    },
    {
      elementId: "NotifyCustomer",
      standsInFor: "HTTP connector — customer notification",
      source: NOTIFY_CUSTOMER,
    },
  ],
};
