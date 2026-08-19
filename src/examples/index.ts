import type { ExampleDef } from "../framework/types";
import { seedExportCompliance } from "./seed-export-compliance";
import { loanOrigination } from "./loan-origination";
import { orderProcess } from "./order-process";
import { rocketLaunch } from "./rocket-launch";
import { orderProcessBoundaryEvents } from "./order-process-boundary-events";
import { plateRecognition } from "./plate-recognition";

/** Every example the gallery offers. Adding one means adding a manifest here. */
export const EXAMPLES: ExampleDef[] = [
  rocketLaunch,
  seedExportCompliance,
  loanOrigination,
  orderProcess,
  orderProcessBoundaryEvents,
  plateRecognition,
];
