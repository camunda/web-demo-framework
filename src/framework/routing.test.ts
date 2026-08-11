import { describe, expect, it } from "vitest";
import { examplePath, galleryPath, isEmbed, parseRoute } from "./routing";

describe("routing", () => {
  it("parses the gallery route for /", () => {
    expect(parseRoute("/")).toEqual({ kind: "gallery" });
  });

  it("parses /examples/<id> into an example route", () => {
    expect(parseRoute("/examples/order-process")).toEqual({
      kind: "example",
      id: "order-process",
    });
  });

  it("parses /examples/<id>/ (trailing slash) the same way", () => {
    expect(parseRoute("/examples/order-process/")).toEqual({
      kind: "example",
      id: "order-process",
    });
  });

  it("decodes a URL-encoded example id", () => {
    expect(parseRoute("/examples/foo%20bar")).toEqual({
      kind: "example",
      id: "foo bar",
    });
  });

  it("falls back to the gallery for an unrecognized path", () => {
    expect(parseRoute("/something-else")).toEqual({ kind: "gallery" });
  });

  it("detects ?embed=1", () => {
    expect(isEmbed("?embed=1")).toBe(true);
    expect(isEmbed("?embed=0")).toBe(false);
    expect(isEmbed("")).toBe(false);
  });

  it("builds paths under the base path", () => {
    expect(galleryPath()).toBe(import.meta.env.BASE_URL);
    expect(examplePath("order-process")).toBe(
      `${import.meta.env.BASE_URL}examples/order-process`,
    );
  });
});
