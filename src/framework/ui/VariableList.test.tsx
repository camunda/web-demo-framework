import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { VariableList } from "./VariableList";

afterEach(cleanup);

const rows = (container: HTMLElement) =>
  Array.from(container.querySelectorAll("dt")).map((dt) => [
    dt.textContent,
    dt.nextElementSibling?.textContent,
  ]);

describe("VariableList", () => {
  it("shows each variable as a name and a value, with no JSON punctuation", () => {
    const { container } = render(
      <VariableList value={{ countryCode: "DE", complianceScore: 12, cleared: false }} />,
    );
    expect(rows(container)).toEqual([
      ["countryCode", "DE"],
      ["complianceScore", "12"],
      ["cleared", "false"],
    ]);
    expect(container.textContent).not.toMatch(/[{}"]/);
  });

  it("nests an object's fields under its name", () => {
    const { container } = render(
      <VariableList value={{ countryInfo: { capital: "Berlin", currency: "EUR" } }} />,
    );
    const nested = container.querySelector(".vars-row-nested")!;
    expect(nested.querySelector("dt")!.textContent).toBe("countryInfo");
    expect(rows(nested.querySelector("dd")! as HTMLElement)).toEqual([
      ["capital", "Berlin"],
      ["currency", "EUR"],
    ]);
  });

  it("numbers list items from 1, as FEEL does", () => {
    const { container } = render(<VariableList value={{ items: ["apple", "banana"] }} />);
    expect(rows(container).slice(1)).toEqual([
      ["1", "apple"],
      ["2", "banana"],
    ]);
  });

  it("says when a value is empty or null rather than showing nothing", () => {
    const { container } = render(
      <VariableList value={{ notes: "", owner: null, tags: [], meta: {} }} />,
    );
    expect(rows(container)).toEqual([
      ["notes", "(empty)"],
      ["owner", "null"],
      ["tags", "(empty list)"],
      ["meta", "(empty)"],
    ]);
  });

  it("says there are no variables yet", () => {
    const { container } = render(<VariableList value={{}} />);
    expect(container.textContent).toBe("No variables yet.");
  });
});
