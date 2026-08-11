import { describe, expect, it } from "vitest";
import {
  encodeDeepLinkState,
  patchDeepLinkState,
  readDeepLinkState,
} from "./deepLink";

describe("deepLink", () => {
  it("round-trips a brain choice through encode/decode", () => {
    const encoded = encodeDeepLinkState({ brain: "browser" });
    expect(encoded).toMatch(/^#s=/);
    expect(readDeepLinkState(encoded)).toEqual({ brain: "browser" });
  });

  it("returns an empty state for a hash with no deep-link prefix", () => {
    expect(readDeepLinkState("#some-other-hash")).toEqual({});
    expect(readDeepLinkState("")).toEqual({});
  });

  it("tolerates malformed hash content instead of throwing", () => {
    expect(readDeepLinkState("#s=not-json-at-all")).toEqual({});
    expect(readDeepLinkState("#s=%")).toEqual({});
  });

  it("encodes an empty state as an empty string (no dangling #s=)", () => {
    expect(encodeDeepLinkState({})).toBe("");
  });

  it("patchDeepLinkState merges into the existing hash without dropping other fields", () => {
    location.hash = encodeDeepLinkState({ brain: "scripted" });
    patchDeepLinkState({ brain: "endpoint" });
    expect(readDeepLinkState()).toEqual({ brain: "endpoint" });
  });
});
