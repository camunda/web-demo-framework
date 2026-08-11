import { describe, expect, it } from "vitest";
import inventoryCheckTemplate from "./inventory-check.json";

/**
 * The demo's only connector element template. These tests guard the two
 * properties that make it safe to apply without any other wiring change:
 * the job type stays pinned (so the order-process example's existing static
 * handler in `compile.ts` never orphans), and it only ever targets a task
 * element (so applying it can't silently attach to something else).
 */
describe("inventory-check element template", () => {
  it("targets bpmn:Task / bpmn:ServiceTask only", () => {
    expect(inventoryCheckTemplate.appliesTo).toEqual(["bpmn:Task"]);
    expect(inventoryCheckTemplate.elementType?.value).toBe(
      "bpmn:ServiceTask",
    );
  });

  it("pins zeebe:taskDefinition:type to check-inventory as a Hidden (non-editable) property", () => {
    const jobTypeProperty = inventoryCheckTemplate.properties.find(
      (property) => property.binding.type === "zeebe:taskDefinition:type",
    );
    expect(jobTypeProperty).toBeDefined();
    expect(jobTypeProperty?.type).toBe("Hidden");
    expect(jobTypeProperty?.value).toBe("check-inventory");
  });

  it("exposes every other field as an editable zeebe:input, grouped for the panel", () => {
    const inputProperties = inventoryCheckTemplate.properties.filter(
      (property) => property.binding.type === "zeebe:input",
    );
    const inputNames = inputProperties.map(
      (property) => property.binding.name,
    );
    expect(inputNames.sort()).toEqual(
      ["minStock", "sku", "timeoutMs", "warehouseUrl"].sort(),
    );
    for (const property of inputProperties) {
      expect(property.group).toBeDefined();
      expect(
        inventoryCheckTemplate.groups.some(
          (group) => group.id === property.group,
        ),
      ).toBe(true);
    }
  });

  it("has a unique, versioned template id", () => {
    expect(inventoryCheckTemplate.id).toBe(
      "io.camunda.connectors.demo.inventory-check:1",
    );
    expect(inventoryCheckTemplate.version).toBe(1);
  });
});
