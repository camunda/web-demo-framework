// The model fenced its JSON reply as a markdown code block, despite being
// told to reply with JSON only and no markdown fence.
export const markdownFenceReply =
  '```json\n{"tool": "VerifyGeneticMarker", "arguments": {"geneMarker": "TP53"}, "done": false}\n```';
