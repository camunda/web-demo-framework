// Load the lean engine wasm bytes for a Node/vitest run.
//
// The sibling of `readModelWasm.ts`, for the **lean** variant — the one
// `createBojtosSession()` uses by default, and so the one a component test
// mounting `ExampleRunner` needs. Under Vite `@nanobpm/bojtos-kit` resolves the
// binary itself via `new URL(…, import.meta.url)`; under plain Node it can't,
// so the bytes have to be handed over explicitly.

import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

/** The lean engine wasm bytes, read from the installed `@nanobpm/engine-wasm`. */
export function loadLeanWasm(): Uint8Array {
  const require = createRequire(import.meta.url);
  const wasmPath = require.resolve("@nanobpm/engine-wasm/lean/nanobpmn_engine_bg.wasm");
  return readFileSync(wasmPath);
}
