import { describe, expect, it } from "vitest";
import { localEndpointBlockedReason, normaliseEndpoint } from "./endpoint";

describe("localEndpointBlockedReason", () => {
  const localhostPage = { hostname: "localhost", origin: "http://localhost:5174" };
  const hostedPage = { hostname: "demos.camunda.io", origin: "https://demos.camunda.io" };
  const lanPage = { hostname: "192.168.1.20", origin: "http://192.168.1.20:5174" };

  it("returns null when the page itself is on localhost", () => {
    expect(localEndpointBlockedReason("http://localhost:11434", localhostPage)).toBeNull();
  });

  it("returns null when the endpoint is not a local host", () => {
    expect(
      localEndpointBlockedReason("https://api.openai.com", hostedPage),
    ).toBeNull();
  });

  it("blocks a localhost endpoint from a hosted (non-local) page", () => {
    const reason = localEndpointBlockedReason("http://localhost:11434", hostedPage);
    expect(reason).not.toBeNull();
    expect(reason).toContain("demos.camunda.io");
    expect(reason).toContain("localhost");
  });

  it("blocks a 127.0.0.1 endpoint from a hosted page", () => {
    expect(
      localEndpointBlockedReason("http://127.0.0.1:11434", hostedPage),
    ).not.toBeNull();
  });

  it("blocks an IPv6 loopback endpoint ([::1] or ::1) from a hosted page", () => {
    expect(localEndpointBlockedReason("http://[::1]:11434", hostedPage)).not.toBeNull();
  });

  it("blocks a localhost endpoint from a LAN-IP page (not itself localhost)", () => {
    expect(
      localEndpointBlockedReason("http://localhost:11434", lanPage),
    ).not.toBeNull();
  });

  it("returns null when the endpoint URL can't be parsed", () => {
    expect(localEndpointBlockedReason("not a url", hostedPage)).toBeNull();
  });
});

describe("normaliseEndpoint", () => {
  it("appends /v1 to a bare host", () => {
    expect(normaliseEndpoint("http://localhost:11434")).toBe("http://localhost:11434/v1");
  });

  it("leaves an already-versioned base alone", () => {
    expect(normaliseEndpoint("http://localhost:11434/v1")).toBe("http://localhost:11434/v1");
  });

  it("strips a trailing /chat/completions", () => {
    expect(normaliseEndpoint("http://localhost:11434/v1/chat/completions")).toBe(
      "http://localhost:11434/v1",
    );
  });

  it("strips trailing slashes before checking for a version segment", () => {
    expect(normaliseEndpoint("http://localhost:11434/v1/")).toBe("http://localhost:11434/v1");
  });

  it("trims surrounding whitespace", () => {
    expect(normaliseEndpoint("  http://localhost:11434  ")).toBe(
      "http://localhost:11434/v1",
    );
  });
});
