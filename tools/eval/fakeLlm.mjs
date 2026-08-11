// A scriptable stand-in for `ChatFn` (src/framework/brains/types.ts) so the
// eval harness can drive `makeLiveAgent` deterministically, without a real
// model in the loop.
//
// Each scenario supplies a queue of "turns": either a literal reply string,
// or a function `(messages) => string` for a scenario whose reply needs to
// react to what the agent asked (e.g. echoing back a tool result). Turns are
// consumed in order — one per `chat()` call, matching one LLM turn in
// `makeLiveAgent`. Exhausting the queue is a scenario-authoring bug (the
// agent asked for more turns than the fixture anticipated), so it throws
// rather than silently returning an empty reply.

/**
 * @param {(string | ((messages: import("../../src/framework/brains/types.ts").ChatMessage[]) => string))[]} turns
 */
export function makeFakeChat(turns) {
  const queue = [...turns];
  const calls = [];

  /** @type {import("../../src/framework/brains/types.ts").ChatFn} */
  const chat = async (messages, _maxNewTokens, onToken) => {
    calls.push(messages);
    if (queue.length === 0) {
      throw new Error(
        `fake LLM ran out of scripted turns (asked for turn ${calls.length}) — ` +
          `the scenario needs another entry in its reply queue`,
      );
    }
    const next = queue.shift();
    const reply = typeof next === "function" ? next(messages) : next;
    // Exercise the streaming callback too, since `makeLiveAgent` traces the
    // partial reply as it grows — a real brain always calls this.
    onToken?.(reply);
    return reply;
  };

  return { chat, calls };
}
