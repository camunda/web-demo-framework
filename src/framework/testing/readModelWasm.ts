// Load the read-model engine wasm bytes for a Node/vitest run.
//
// Under a bundler (Vite) `@nanobpm/bojtos-kit` resolves the engine binary itself
// via `new URL(…, import.meta.url)`. Under plain Node — where these tests run —
// that loader can't resolve it, so a `wasm` source must be handed to
// `createBojtosSession` explicitly. We resolve the **read-model** variant's
// binary (`@nanobpm/engine-wasm/readmodel/…`, exposed by engine-wasm's exports
// map) through `require.resolve` so the path tracks the installed package rather
// than being hard-coded, and read its bytes.

import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

/** The read-model engine wasm bytes, read from the installed `@nanobpm/engine-wasm`. */
export function loadReadModelWasm(): Uint8Array {
  const require = createRequire(import.meta.url);
  const wasmPath = require.resolve("@nanobpm/engine-wasm/readmodel/nanobpmn_engine_bg.wasm");
  return readFileSync(wasmPath);
}
