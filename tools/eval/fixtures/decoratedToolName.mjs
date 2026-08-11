// Reply fixtures for known small-model failure modes, kept one per file so
// each is easy to find, read and reuse in a new scenario. Every fixture is
// just the literal (or near-literal) reply text a real model has produced —
// see the comment in each for where it came from.

// llama3.2:3b decorated a tool's own name with its list-item label
// ("- id: VerifyGeneticMarker") and dutifully echoed the label back:
// `{"tool": "id: VerifyGeneticMarker", ...}`. Since tool names are matched
// exactly (no fuzzy correction — see liveAgent.ts's module doc comment),
// this must activate nothing.
export const decoratedToolName = '{"tool": "id: VerifyGeneticMarker", "arguments": {"geneMarker": "TP53"}, "done": false}';
