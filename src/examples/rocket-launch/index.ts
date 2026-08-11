import type { ExampleDef } from "../../framework/types";
import bpmn from "./model.bpmn?raw";

/**
 * The simplest example in the gallery — one service task, based on the
 * `1-rocket-launch` example from `camunda-8-get-started` (simplified down to a
 * single task: the upstream model layers on a DMN business rule, a timer, an
 * exclusive gateway and a parallel split, which the epic's own acceptance
 * criteria for this task ask us to skip in favour of the smallest possible
 * slice).
 *
 * No agent, no forms, no human step, no gateway — a start event, one service
 * task, an end event. This is the natural first page for a reader, and the
 * smallest possible test of "can someone add an example without touching the
 * framework?" (they can — nothing in src/framework/** changed to add this).
 */

const LAUNCH_ROCKET = `async (job, { text, num, sleep, trace }) => {
  // The starting variables arrive on 'job.variables'.
  const missionName = text("missionName", "Apollo 11");
  const destination = text("destination", "the Moon");
  const fuelLevel = num("fuelLevel", 100);

  // Stands in for a job worker on a real cluster calling out to mission
  // control (or, more realistically, doing the actual work that the task name
  // implies — here, running the launch sequence and burning fuel).
  await sleep(600);

  if (fuelLevel < 50) {
    trace(\`\${missionName} scrubbed — not enough fuel (\${fuelLevel}%)\`);
    // Whatever you return is merged onto the process instance.
    return { missionStatus: "scrubbed", fuelLevel };
  }

  const fuelAfterLaunch = fuelLevel - 25;
  trace(\`\${missionName} launched toward \${destination}\`);

  return {
    missionStatus: "launched",
    destination,
    fuelLevel: fuelAfterLaunch,
    missionResult: \`Crew \${missionName} launched toward \${destination}! Fuel remaining: \${fuelAfterLaunch}%.\`,
  };
}`;

export const rocketLaunch: ExampleDef = {
  id: "rocket-launch",
  title: "Rocket launch",
  blurb:
    "The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",
  bpmn,
  seed: { missionName: "Apollo 11", destination: "the Moon", fuelLevel: 100 },
  scenarios: [
    {
      label: "Full tanks — launch succeeds",
      variables: { missionName: "Apollo 11", destination: "the Moon", fuelLevel: 100 },
    },
    {
      label: "Low fuel — mission scrubbed",
      variables: { missionName: "Apollo 13", destination: "the Moon", fuelLevel: 30 },
    },
  ],
  handlers: [
    {
      elementId: "Activity_LaunchRocket",
      standsInFor: "job worker — launch-rocket",
      source: LAUNCH_ROCKET,
    },
  ],
};
