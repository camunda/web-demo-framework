import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { CollapsibleCard } from "./CollapsibleCard";
import { storageKeyFor } from "./usePersistentDisclosure";

/**
 * The collapsible panel's contract: it opens by default, its whole header is
 * the disclosure toggle, and — the reason it exists — a reader's open/closed
 * choice is written to `localStorage` and re-read on the next mount, so it
 * survives a page reload. Independent `sectionId`s never share state.
 */

function renderCard(props: { sectionId: string; defaultOpen?: boolean }) {
  return render(
    <CollapsibleCard
      sectionId={props.sectionId}
      title="Process"
      description="Live token, incidents in red."
      defaultOpen={props.defaultOpen}
    >
      <p>Body content</p>
    </CollapsibleCard>,
  );
}

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  cleanup();
});

describe("CollapsibleCard", () => {
  it("renders the header and, open by default, its content", () => {
    renderCard({ sectionId: "process" });

    expect(screen.getByText("Process")).toBeInTheDocument();
    expect(
      screen.getByText("Live token, incidents in red."),
    ).toBeInTheDocument();
    expect(screen.getByText("Body content")).toBeInTheDocument();
  });

  it("collapses on header click and persists the closed state", () => {
    renderCard({ sectionId: "process" });

    fireEvent.click(screen.getByRole("button", { name: /Process/ }));

    expect(screen.queryByText("Body content")).not.toBeInTheDocument();
    expect(window.localStorage.getItem(storageKeyFor("process"))).toBe("0");
  });

  it("re-hydrates the persisted state on a fresh mount (reload)", () => {
    // First mount: collapse it.
    renderCard({ sectionId: "process" });
    fireEvent.click(screen.getByRole("button", { name: /Process/ }));
    cleanup();

    // Second mount with the same id — as after a reload — starts collapsed.
    renderCard({ sectionId: "process" });
    expect(screen.queryByText("Body content")).not.toBeInTheDocument();

    // Re-opening persists the open state too.
    fireEvent.click(screen.getByRole("button", { name: /Process/ }));
    expect(screen.getByText("Body content")).toBeInTheDocument();
    expect(window.localStorage.getItem(storageKeyFor("process"))).toBe("1");
  });

  it("keeps each section's state independent", () => {
    render(
      <>
        <CollapsibleCard sectionId="a" title="Alpha">
          <p>Alpha body</p>
        </CollapsibleCard>
        <CollapsibleCard sectionId="b" title="Beta">
          <p>Beta body</p>
        </CollapsibleCard>
      </>,
    );

    fireEvent.click(screen.getByRole("button", { name: /Alpha/ }));

    expect(screen.queryByText("Alpha body")).not.toBeInTheDocument();
    expect(screen.getByText("Beta body")).toBeInTheDocument();
    expect(window.localStorage.getItem(storageKeyFor("a"))).toBe("0");
    expect(window.localStorage.getItem(storageKeyFor("b"))).toBeNull();
  });

  it("honors defaultOpen=false only until a stored choice exists", () => {
    renderCard({ sectionId: "code", defaultOpen: false });
    expect(screen.queryByText("Body content")).not.toBeInTheDocument();

    // Opening it records a preference that outranks the default next time.
    fireEvent.click(screen.getByRole("button", { name: /Process/ }));
    expect(window.localStorage.getItem(storageKeyFor("code"))).toBe("1");
    cleanup();

    renderCard({ sectionId: "code", defaultOpen: false });
    expect(screen.getByText("Body content")).toBeInTheDocument();
  });
});
