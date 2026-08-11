import { defineConfig } from "vitest/config";

/**
 * Test layering convention for this repo (see `docs` in issue #10's PR for
 * the full plan): today this config only needs to run layer 1 — parser unit
 * tests colocated with the framework modules they cover, as `*.test.ts` next
 * to the source file (`src/framework/model.test.ts`, not a separate `tests/`
 * tree). Later layers slot in the same way:
 *
 *   - draft-definition tests    → src/framework/draft.test.ts
 *   - engine capability fixtures → tools/probe/**\/*.test.ts
 *   - agent determinism tests   → tools/eval/**\/*.test.ts
 *   - browser smoke tests       → a separate Playwright/E2E config, not this one
 *
 * jsdom is required because `src/framework/model.ts` parses BPMN with the
 * browser's own `DOMParser`, and `localEndpointBlockedReason` reads
 * `globalThis.location`.
 */
export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    coverage: {
      reporter: ["text", "html"],
      include: ["src/framework/**/*.ts"],
    },
  },
});
