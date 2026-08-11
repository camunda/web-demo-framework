// Registers a synchronous module resolution hook (Node's `registerHooks`,
// current API for this — the older `module.register()` + separate-thread
// loader is deprecated) so a plain Node script can `import` the framework's
// TypeScript sources directly, the same way Vite/Vitest does inside the app.
//
// Node's native type-stripping (unflagged since Node 23.6) erases TS syntax
// fine, but Node's own module resolution — unlike a bundler's — requires a
// full specifier: it will not guess `.ts` for an extensionless relative
// import. The framework modules this harness imports (agent/liveAgent.ts,
// agent/parse.ts) use extensionless imports throughout (`from "./parse"`),
// so importing them under plain Node needs this one bit of resolution help.
// This hook doesn't execute or transform any code — it only appends `.ts` to
// a specifier that doesn't already resolve, then defers to Node's normal
// resolution/loading for everything else.
import * as nodeModule from "node:module";

if (typeof nodeModule.registerHooks !== "function") {
  throw new Error(
    "tools/eval requires Node's `module.registerHooks` (unflagged since Node 20.6/22.15/23.5) to resolve " +
      "extensionless TypeScript imports. Please run `npm run eval` with a supported Node version.",
  );
}

const { registerHooks } = nodeModule;

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (/^\.\.?\//.test(specifier) && !/\.[a-zA-Z0-9]+$/.test(specifier)) {
      try {
        return nextResolve(`${specifier}.ts`, context);
      } catch {
        // Fall through — maybe it really doesn't have an extension for
        // another reason (a directory import, etc.); let Node's default
        // handling try.
      }
    }
    return nextResolve(specifier, context);
  },
});
