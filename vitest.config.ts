import { defineConfig } from "vitest/config";
import type { Plugin } from "vite";
import { readFileSync } from "node:fs";

// `@camunda/design-system` ships its compiled `dist/**/*.js` with
// `//# sourceMappingURL=` comments whose `.js.map` files list `.ts` sources
// that are NOT included in the published package. Because we inline the design
// system (see `server.deps.inline` below), Vite reads each of those maps,
// fails to find the source content behind it, and logs one
// `Sourcemap for … points to missing source files` warning per module (~80
// lines of noise on every `npm run test`). The broken maps are the
// dependency's, not ours, and there is nothing for us to fix in them.
//
// The map is read by Vite's own `load` step (which also strips the sourcemap
// comment before user `transform` hooks see the code), so neither a
// `customLogger` (the warning comes from the per-environment logger Vitest
// builds, not the root config logger) nor a `transform` hook can prevent it.
// This `enforce: "pre"` `load` hook wins over Vite's default loader: it reads
// the module itself, drops the trailing sourcemap comment, and returns
// `map: null`, so the external `.js.map` is never resolved and no warning is
// produced. Only design-system `.js` files are handled and only their
// sourcemap comment is removed, so nothing about their runtime behaviour
// changes.
function stripDesignSystemSourcemaps(): Plugin {
  return {
    name: "strip-design-system-sourcemaps",
    enforce: "pre",
    load(id) {
      // Vite module ids can use `\` separators on Windows and may carry a
      // `/@fs/` prefix for absolute paths — normalize both the way
      // vite.config.ts already does (its `id.replace(/\\/g, "/")` pattern)
      // before matching or reading, or the plugin would silently no-op there.
      const normalized = id.replace(/\\/g, "/").split("?")[0];
      if (
        !normalized.includes("@camunda/design-system") ||
        !normalized.endsWith(".js")
      ) {
        return null;
      }
      const file = normalized.replace(/^\/@fs/, "");
      let code: string;
      try {
        code = readFileSync(file, "utf-8");
      } catch {
        // If we can't read it, fall through to Vite's default loader rather
        // than crash — worst case the (harmless) warning simply reappears.
        return null;
      }
      if (!code.includes("sourceMappingURL")) return null;
      return {
        // `\s*` before the comment absorbs the preceding newline whether it is
        // LF or CRLF; `\s*$` absorbs any trailing newline after the URL.
        code: code.replace(/\s*\/\/# sourceMappingURL=\S+\s*$/, ""),
        map: null,
      };
    },
  };
}

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
  plugins: [stripDesignSystemSourcemaps()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    // Inline the design system so Vite transforms its ESM JSON imports (the
    // icon `registry.json`). Externalized node_modules are handled by Node's
    // loader, which rejects a bare `import … from "*.json"` without an import
    // attribute — see CollapsibleCard.test.tsx, the first test to render a DS
    // component.
    server: {
      deps: {
        inline: [/@camunda\/design-system/],
      },
    },
    coverage: {
      reporter: ["text", "html"],
      include: ["src/framework/**/*.ts"],
    },
  },
});
