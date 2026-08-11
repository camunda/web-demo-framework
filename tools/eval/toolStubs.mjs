// Deterministic stand-ins for the compliance example's tool handlers —
// intentionally simpler than the real handlers in
// src/examples/seed-export-compliance/index.ts (which run inside the
// sandboxed iframe, a browser-only mechanism this headless harness doesn't
// have — see docs/security.md). What's under test here is the agent LOOP,
// not the tool bodies, so a stub only needs to prove it received the
// arguments the agent loop resolved for it, and to hand back a plausible
// result shape for the next turn to react to.

export const complianceToolStubs = {
  VerifyGeneticMarker: (_vars, args) => {
    const table = { TP53: { geneSymbol: "TP53" }, BRCA1: { geneSymbol: "BRCA1" } };
    const record = table[args.geneMarker] ?? null;
    return { markerRecord: record, toolCallResult: record ?? "no record" };
  },
  CheckDestinationCountry: (_vars, args) => {
    const table = { BR: { capital: "Brasília" }, DE: { capital: "Berlin" } };
    const country = table[args.countryCode] ?? null;
    return { countryInfo: country, toolCallResult: country ?? "no country" };
  },
  ComputeComplianceScore: (_vars, args) => {
    const a = Number(args.intA);
    const b = Number(args.intB);
    const score = a + b;
    return { complianceScore: score, toolCallResult: `score ${score}` };
  },
  RecordComplianceDecision: (_vars, args) => ({
    decision: args.decision,
    toolCallResult: args.decision,
  }),
};

/** Fixture tools for the argument-collision scenario (see agentSpec.mjs). */
export const collidingToolStubs = {
  ToolA: (_vars, args) => ({ toolCallResult: `A ran with code=${args.code}` }),
  ToolB: (_vars, args) => ({ toolCallResult: `B ran with code=${args.code}` }),
};
