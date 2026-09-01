// Chrome's built-in Gemini Nano, verbatim from a real compliance run: it made
// all four tool calls correctly and then, with nothing left to call, could not
// produce the one reply that ends the run. Turn 5 echoes the last tool's
// result, turn 7 an argument, turn 9 a tool name under the wrong key — and
// every even turn re-requests the tool it just ran. Six turns, no progress.
export const neverSaysDone = [
  '{"toolCallResult": "cleared"}',
  '{"tool": "RecordComplianceDecision", "arguments": {}}',
  '{"geneMarker": "TP53"}',
  '{"tool": "RecordComplianceDecision", "arguments": {}}',
  '{"toolName": "ComputeComplianceScore"}',
  '{"tool": "RecordComplianceDecision", "arguments": {"decision": "cleared"}}',
];

/**
 * The same failure while tools are still callable, so the replies that happen
 * to name a real tool are dropped: valid JSON, no tool, no "done", nothing a
 * retry can improve on.
 */
export const lostTheFormat = [
  '{"toolCallResult": "cleared"}',
  '{"geneMarker": "TP53"}',
  '{"toolName": "ComputeComplianceScore"}',
];
