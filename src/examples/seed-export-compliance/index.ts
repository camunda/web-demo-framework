import type { ExampleDef } from "../../framework/types";
import { createTemplateMap, templateNameFromPath } from "../../framework/templates";
import { complianceTour } from "./tour";
import bpmn from "./model.bpmn?raw";
import shipmentReadyForm from "./shipment-ready.form.json";
import reviewForm from "./review.form.json";

/**
 * The example's prompts, as their own editable files (see
 * `src/framework/templates.ts`): `prompts/system-prompt.md` and
 * `prompts/user-prompt.md` resolve the `{{system-prompt}}` and
 * `{{user-prompt}}` placeholders inside `model.bpmn`'s FEEL string literals,
 * substituted once at deploy/parse time. Editing one of these files (or its
 * live tab in the runner) changes what the agent is told next run — no XML,
 * no FEEL, no `&#10;`/`&quot;` escaping to hand-author.
 *
 * `import.meta.glob(..., { eager: true, query: "?raw", import: "default" })`
 * loads every `prompts/*.md` file as a plain string at build time; `.trimEnd()`
 * drops the trailing newline every text file ends with, since that's an
 * artifact of the file format, not part of the prompt — leading whitespace is
 * left intact in case it's meaningful (e.g. intentional indentation).
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
 * Camunda's "Seed export compliance agent": an AI Agent ad-hoc sub-process that
 * picks its own tools, a gateway on its decision, and a human review task when a
 * shipment is flagged.
 *
 * Everything the agent needs — the tool list, what each tool is for, the
 * arguments it takes, the prompts, the turn budget — is read off the diagram by
 * the framework. This file supplies only what the model can't: the code behind
 * each element, and a deterministic stand-in for the LLM.
 */

const SCENARIO_CLEARED =
  "SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53";
const SCENARIO_FLAGGED =
  "SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1";

/**
 * The deterministic stand-in for the LLM. Called once per agent turn with the
 * instance's live variables, so the turn is derived from what the previous tools
 * wrote — `undefined` means a tool hasn't run, `null` means it ran and found
 * nothing.
 */
const SCRIPTED_AGENT = `async (job) => {
  const v = job.variables;
  const notes = (v.shipmentNotes || "").trim() || (v.scenario || "");

  // Turn 1 — read the notes and work out the tool arguments. This is what
  // 'fromAi(toolCall.geneMarker, ...)' asks a real model for.
  if (v.markerRecord === undefined) {
    const marker = (notes.match(/reference code\\s+([A-Za-z0-9]+)/i) || [])[1];
    const countries = { brazil: "BR", germany: "DE", japan: "JP", india: "IN", kenya: "KE" };
    const hit = Object.keys(countries).find((c) => notes.toLowerCase().includes(c));
    return {
      variables: {
        geneMarker: marker ? marker.toUpperCase() : "",
        countryCode: hit ? countries[hit] : "",
      },
      activateElements: [{ elementId: "VerifyGeneticMarker" }],
    };
  }

  // Turn 2 — look up the destination country.
  if (v.countryInfo === undefined) {
    return { activateElements: [{ elementId: "CheckDestinationCountry" }] };
  }

  // A lookup that came back empty can't be scored — send it to a human.
  if (!v.markerRecord || !v.countryInfo) {
    if (!v.decision) {
      return {
        variables: { decision: "flagged-for-review" },
        activateElements: [{ elementId: "RecordComplianceDecision" }],
      };
    }
    return { completionConditionFulfilled: true };
  }

  // Turn 3 — hand the legacy scoring engine its two numbers.
  if (v.complianceScore === undefined || v.complianceScore === null) {
    return {
      variables: {
        intA: String(v.markerRecord.geneSymbol || "").length,
        intB: String(v.countryInfo.capital || "").length,
      },
      activateElements: [{ elementId: "ComputeComplianceScore" }],
    };
  }

  // Turn 4 — recommend a decision. (A live model recommends here instead; the
  // handler below is what actually decides.)
  if (!v.decision) {
    return {
      variables: { decisionRecommendation: Number(v.complianceScore) % 2 === 0 ? "cleared" : "flagged-for-review" },
      activateElements: [{ elementId: "RecordComplianceDecision" }],
    };
  }

  return { completionConditionFulfilled: true };
}`;

const VERIFY_GENETIC_MARKER = `async (job, { text, sleep, trace }) => {
  // Stands in for the JDBC connector querying UCSC's public hg38 reference
  // genome. No database in a browser, so look the marker up in a small table.
  const marker = text("geneMarker");
  const table = {
    TP53:  { refSeqId: "NM_000546.6", chrom: "chr17", geneSymbol: "TP53" },
    BRCA1: { refSeqId: "NM_007294.4", chrom: "chr17", geneSymbol: "BRCA1" },
    BRCA2: { refSeqId: "NM_000059.4", chrom: "chr13", geneSymbol: "BRCA2" },
    EGFR:  { refSeqId: "NM_005228.5", chrom: "chr7",  geneSymbol: "EGFR" },
  };

  await sleep(300);
  const record = table[marker] || null;
  trace(record ? "found " + marker : "no record for " + JSON.stringify(marker));

  return {
    markerRecord: record,
    toolCallResult: record || "No matching reference-genome record found.",
  };
}`;

const CHECK_DESTINATION_COUNTRY = `async (job, { text, sleep, trace }) => {
  // Stands in for the GraphQL connector calling countries.trevorblades.com.
  const code = text("countryCode");
  const table = {
    BR: { name: "Brazil",  capital: "Brasília",  currency: "BRL" },
    DE: { name: "Germany", capital: "Berlin",    currency: "EUR" },
    JP: { name: "Japan",   capital: "Tokyo",     currency: "JPY" },
    IN: { name: "India",   capital: "New Delhi", currency: "INR" },
    KE: { name: "Kenya",   capital: "Nairobi",   currency: "KES" },
  };

  await sleep(300);
  const country = table[code] || null;
  trace(country ? country.name : "no profile for " + JSON.stringify(code));

  return {
    countryInfo: country,
    toolCallResult: country || "No country profile found for that destination code.",
  };
}`;

const COMPUTE_COMPLIANCE_SCORE = `async (job, { num, sleep }) => {
  // Stands in for the REST connector calling api.mathjs.org — the "legacy
  // scoring engine". It adds the two numbers the agent worked out.
  const a = num("intA");
  const b = num("intB");

  await sleep(300);
  const score = a + b;

  return {
    complianceScore: score,
    toolCallResult: "Legacy scoring engine (REST) confirmed compliance score: " + score,
  };
}`;

const RECORD_COMPLIANCE_DECISION = `async (job, { text, trace }) => {
  // The script task inside the agent — and the place where policy beats the
  // model. The score's parity decides; a recommendation that disagrees is
  // overridden and the disagreement is logged.
  const score = Number(job.variables.complianceScore);
  const decision = score % 2 === 0 ? "cleared" : "flagged-for-review";
  const recommended = text("decisionRecommendation", "");

  if (recommended && recommended !== decision) {
    trace("model recommended '" + recommended + "' — policy says '" + decision + "'; policy wins");
  }

  return { decision: decision, toolCallResult: decision };
}`;

const NOTIFY_EXPORT_TEAM = `async (job, { sleep }) => {
  // Stands in for the REST connector posting to httpbin.io.
  const v = job.variables;
  await sleep(300);

  return {
    notificationReceipt: {
      marker: v.markerRecord,
      destination: v.countryInfo,
      complianceScore: v.complianceScore,
      decision: v.decision,
    },
    toolCallResult: "Export team notified.",
  };
}`;

export const seedExportCompliance: ExampleDef = {
  id: "seed-export-compliance",
  title: "Seed export compliance agent",
  blurb:
    "An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",
  docsUrl: "https://camunda.com/blog/agentic-ai/",
  bpmn,
  forms: {
    "seed-export-shipment-ready": shipmentReadyForm,
    "seed-export-compliance-review": reviewForm,
  },
  seed: { scenario: SCENARIO_CLEARED, shipmentNotes: "" },
  scenarios: [
    {
      label: "Likely cleared (TP53 → Brazil)",
      variables: { scenario: SCENARIO_CLEARED, shipmentNotes: "" },
    },
    {
      label: "Likely flagged (BRCA1 → Germany)",
      variables: { scenario: SCENARIO_FLAGGED, shipmentNotes: "" },
    },
  ],
  scriptedAgent: SCRIPTED_AGENT,
  templates: prompts,
  tour: complianceTour,
  handlers: [
    {
      elementId: "VerifyGeneticMarker",
      standsInFor: "JDBC connector — UCSC hg38",
      source: VERIFY_GENETIC_MARKER,
    },
    {
      elementId: "CheckDestinationCountry",
      standsInFor: "GraphQL connector — countries API",
      source: CHECK_DESTINATION_COUNTRY,
    },
    {
      elementId: "ComputeComplianceScore",
      standsInFor: "REST connector — api.mathjs.org",
      source: COMPUTE_COMPLIANCE_SCORE,
    },
    {
      elementId: "RecordComplianceDecision",
      standsInFor: "Script task — FEEL",
      source: RECORD_COMPLIANCE_DECISION,
    },
    {
      elementId: "NotifyExportTeam",
      standsInFor: "REST connector — httpbin.io",
      source: NOTIFY_EXPORT_TEAM,
    },
  ],
};
