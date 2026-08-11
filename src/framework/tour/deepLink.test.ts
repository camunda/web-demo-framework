import { describe, expect, it } from "vitest";
import { readTourParam, tourParam } from "./deepLink";

describe("tour deep link", () => {
  it("reads the tour id from a ?tour=<id> query string", () => {
    expect(readTourParam("?tour=compliance-walkthrough")).toBe(
      "compliance-walkthrough",
    );
  });

  it("returns null when no tour param is present", () => {
    expect(readTourParam("")).toBeNull();
    expect(readTourParam("?embed=1")).toBeNull();
  });

  it("coexists with other query params (e.g. embed)", () => {
    expect(readTourParam("?embed=1&tour=compliance-walkthrough")).toBe(
      "compliance-walkthrough",
    );
  });

  it("tourParam builds a query string a docs page can link to, percent-encoded", () => {
    expect(tourParam("compliance-walkthrough")).toBe(
      "?tour=compliance-walkthrough",
    );
    expect(readTourParam(tourParam("a b"))).toBe("a b");
  });
});
