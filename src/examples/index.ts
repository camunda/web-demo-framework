import type { ExampleDef } from "../framework/types";
import { seedExportCompliance } from "./seed-export-compliance";
import { orderProcess } from "./order-process";
import { rocketLaunch } from "./rocket-launch";

/** Every example the gallery offers. Adding one means adding a manifest here. */
export const EXAMPLES: ExampleDef[] = [rocketLaunch, seedExportCompliance, orderProcess];
