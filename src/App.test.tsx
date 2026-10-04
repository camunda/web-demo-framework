import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { App } from "./App";
import type { ExampleDef, ExampleMeta } from "./framework/types";

/**
 * Manifests load asynchronously, so between a click on a gallery card and its
 * model arriving there is a window where the *previous* example's manifest is
 * still the only one in hand. These cover what the page shows in that window.
 *
 * The runner is stubbed: what's under test is which manifest App hands it, not
 * anything the engine does with it.
 */

const { META, pending, rejectors } = vi.hoisted(() => ({
  META: [
    {
      id: "alpha",
      title: "Alpha",
      blurb: "First.",
      pageUrl: "https://camunda.com/alpha/",
      sourceUrl: "https://github.com/camunda/alpha",
      saasImportUrl: "https://modeler.cloud.camunda.io/import/resources?source=alpha",
    },
    { id: "beta", title: "Beta", blurb: "Second.", sourceUrl: "https://docs.camunda.io/beta/" },
  ] as ExampleMeta[],
  /** Settled by the test, so the pending window can be inspected. */
  pending: new Map<string, (def: ExampleDef) => void>(),
  rejectors: new Map<string, (reason: Error) => void>(),
}));

vi.mock("./examples", () => ({
  EXAMPLES: META,
  loadExample: (id: string) =>
    new Promise((resolve, reject) => {
      pending.set(id, resolve as (def: ExampleDef) => void);
      rejectors.set(id, reject);
    }),
}));

vi.mock("./framework/ui/ExampleRunner", () => ({
  ExampleRunner: ({ example }: { example: ExampleDef }) => (
    <div data-testid="runner">running {example.id}</div>
  ),
}));

function settle(id: string) {
  pending.get(id)!({ ...META.find((m) => m.id === id)!, bpmn: "<xml/>" } as ExampleDef);
}

afterEach(() => {
  cleanup();
  pending.clear();
  rejectors.clear();
});

describe("App — switching examples while a manifest is in flight", () => {
  it("keeps the previous example's model off the new example's page", async () => {
    history.pushState({}, "", "/examples/alpha");
    render(<App />);
    settle("alpha");
    await screen.findByText("running alpha");

    fireEvent.click(screen.getByRole("button", { name: "Beta" }));

    // Beta's manifest is still in flight, so there is nothing to run yet —
    // and Alpha's model must not stand in for it.
    await waitFor(() => expect(screen.getByText(/Loading Beta/)).toBeTruthy());
    expect(screen.queryByText("running alpha")).toBeNull();

    settle("beta");
    await screen.findByText("running beta");
  });

  it("keeps a failed load's message off the next example's page", async () => {
    history.pushState({}, "", "/examples/alpha");
    render(<App />);
    rejectors.get("alpha")!(new Error("network died"));
    await screen.findByRole("alert");

    fireEvent.click(screen.getByRole("button", { name: "Beta" }));

    await waitFor(() => expect(screen.getByText(/Loading Beta/)).toBeTruthy());
    expect(screen.queryByRole("alert")).toBeNull();
  });

  it("lets a retry of a failed example replace its error", async () => {
    history.pushState({}, "", "/examples/alpha");
    render(<App />);
    rejectors.get("alpha")!(new Error("network died"));
    await screen.findByRole("alert");

    fireEvent.click(screen.getByRole("button", { name: "Beta" }));
    settle("beta");
    await screen.findByText("running beta");

    fireEvent.click(screen.getByRole("button", { name: "Alpha" }));
    settle("alpha");

    await screen.findByText("running alpha");
    expect(screen.queryByRole("alert")).toBeNull();
  });
});

describe("App — links out from an example", () => {
  const href = (name: string) =>
    screen.getByRole("link", { name }).getAttribute("href");

  it("shows the camunda.com link and both buttons on the full page", async () => {
    history.pushState({}, "", "/examples/alpha");
    render(<App />);
    settle("alpha");
    await screen.findByText("running alpha");

    expect(href("View on camunda.com ↗")).toBe("https://camunda.com/alpha/");
    expect(href("Run in SaaS")).toBe("https://modeler.cloud.camunda.io/import/resources?source=alpha");
    expect(href("Read the docs")).toBe("https://github.com/camunda/alpha");
  });

  it("leaves out the links an example doesn't have", async () => {
    history.pushState({}, "", "/examples/beta");
    render(<App />);
    settle("beta");
    await screen.findByText("running beta");

    expect(href("Read the docs")).toBe("https://docs.camunda.io/beta/");
    // By text, not role: an `<a>` with no href isn't a link, so a role query misses a broken button.
    expect(screen.queryByText("Run in SaaS")).toBeNull();
    expect(screen.queryByText("View on camunda.com ↗")).toBeNull();
  });

  it("shows none of them in an embed, which sits beside camunda.com's own", async () => {
    history.pushState({}, "", "/examples/alpha?embed=1");
    render(<App />);
    settle("alpha");
    await screen.findByText("running alpha");

    expect(screen.getByRole("link", { name: /Open full page/ })).toBeTruthy();
    for (const name of ["View on camunda.com ↗", "Run in SaaS", "Read the docs"]) {
      expect(screen.queryByText(name), name).toBeNull();
    }
  });
});
