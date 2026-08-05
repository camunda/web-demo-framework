import type { ExampleDef } from "../framework/types";
import { seedExportCompliance } from "./seed-export-compliance";
import { orderProcess } from "./order-process";

/** Every example the gallery offers. Adding one means adding a manifest here. */
export const EXAMPLES: ExampleDef[] = [seedExportCompliance, orderProcess];
