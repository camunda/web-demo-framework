import { describe, expect, it } from "vitest";
import {
  examplePath,
  galleryPath,
  isEmbed,
  parseRoute,
  restoreHandoffRoute,
} from "./routing";

/** Puts the jsdom address bar at `url` so `restoreHandoffRoute` has one to read. */
function at(url: string): void {
  history.replaceState(null, "", url);
}

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

describe("restoreHandoffRoute", () => {
  const base = import.meta.env.BASE_URL;

  it("rewrites a handed-off route back into the path", () => {
    at(`${base}?p=%2Fexamples%2Forder-process`);
    expect(restoreHandoffRoute()).toBe(true);
    expect(location.pathname).toBe(`${base}examples/order-process`);
    expect(location.search).toBe("");
    // The point of the rewrite: the route parses again afterwards.
    expect(parseRoute()).toEqual({ kind: "example", id: "order-process" });
  });

  it("keeps the other query params and the hash", () => {
    at(`${base}?p=%2Fexamples%2Forder-process&embed=1#s=%7B%7D`);
    expect(restoreHandoffRoute()).toBe(true);
    expect(location.pathname).toBe(`${base}examples/order-process`);
    expect(isEmbed(location.search)).toBe(true);
    expect(location.hash).toBe("#s=%7B%7D");
  });

  it("does nothing without a handoff param", () => {
    at(`${base}examples/order-process`);
    expect(restoreHandoffRoute()).toBe(false);
    expect(location.pathname).toBe(`${base}examples/order-process`);
  });

  it("refuses a value that would leave the origin", () => {
    const { origin } = location;
    for (const evil of ["//evil.example", "/\\evil.example", "https://evil.example"]) {
      at(`${base}?p=${encodeURIComponent(evil)}`);
      expect(restoreHandoffRoute()).toBe(false);
      expect(location.origin).toBe(origin);
      expect(location.pathname).toBe(base);
    }
  });
});
