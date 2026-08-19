// Single source of truth for locating the engine-wasm binary in node_modules.
//
// engine-wasm 0.5.0+ split the binary into `lean/` and `readmodel/` subpaths
// and dropped the root `nanobpmn_engine_bg.wasm`. Every script here that reads
// raw wasm bytes drives the *lean* engine, so they must all resolve the same
// path — centralised here because this path drifted once already: the 0.5.0
// layout change silently broke each loader that had hard-coded the old root
// path independently.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");

export const LEAN_WASM_PATH = path.join(
  repoRoot,
  "node_modules",
  "@nanobpm",
  "engine-wasm",
  "lean",
  "nanobpmn_engine_bg.wasm",
);

export function loadLeanWasm() {
  return readFileSync(LEAN_WASM_PATH);
}
