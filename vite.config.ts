import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// `index.html` ships a baseline CSP <meta> tag intended for hosted/production
// deployments (see docs/security.md). It must not apply to `npm run dev`,
// since the Endpoint/Ollama brain's whole point is reaching an arbitrary
// local port that a static `connect-src` allowlist can't enumerate. This
// plugin strips that meta tag when Vite is serving (dev), and leaves it
// intact for `vite build`/`vite preview`.
function stripDevCsp(): Plugin {
  return {
    name: "strip-dev-csp",
    apply: "serve",
    transformIndexHtml(html) {
      return html.replace(
        /\s*<meta\s+http-equiv="Content-Security-Policy"[\s\S]*?\/>\n?/,
        "\n",
      );
    },
  };
}

// GitHub Pages (and most static hosts) serve `404.html` for any path it
// doesn't recognize as a file — which is every deep-linked route this app
// adds (`/examples/<id>`), since there's no server-side router. Copying the
// built `index.html` to `404.html` means a direct navigation (or a docs page
// `<iframe src="…/examples/order-process?embed=1">`) still boots the app,
// which then reads the real path from `location.pathname` itself (the URL in
// the address bar is left untouched by this fallback) — see
// src/framework/routing.ts. `vite preview` doesn't emulate this Pages
// behaviour, so verify deep-linked routes against a real deployment too, not
// just `npm run preview`.
//
// Pages resolves that 404 against the SITE ROOT, though, even for a path under
// `pr-preview/pr-<n>/` where a whole separate build lives. So the site-root
// copy also has to rescue preview deep links: without the shim below,
// refreshing one boots the production bundle, which is based elsewhere, can't
// match a preview path, and silently lands on the gallery — the preview
// appears to "revert to main".
//
// Everything is derived from `base` rather than assuming a root deployment:
// production is only served from `/` until the PAGES_BASE_PATH repo variable
// says otherwise (see deploy.yml), and previews sit under the site path too.
// A preview's own 404 copy is left plain — Pages never serves it, and it is
// already correctly based if some other host does.
//
// The redirect target is always the preview's real `index.html`, so this can't
// loop: a torn-down preview 404s again at its directory root, where the shim
// finds no route left to hand off and falls through.
function previewHandoffShim(sitePath: string): string {
  return `<script>
      (function () {
        var site = ${JSON.stringify(sitePath)};
        if (location.pathname.indexOf(site) !== 0) return;
        var rest = location.pathname.slice(site.length);
        var dir = rest.match(/^pr-preview\\/pr-\\d+\\//);
        if (!dir) return;
        var route = rest.slice(dir[0].length);
        if (!route) return;
        var params = new URLSearchParams(location.search);
        params.set("p", "/" + route);
        location.replace(site + dir[0] + "?" + params + location.hash);
      })();
    </script>
  `;
}

function spaFallback404(): Plugin {
  let outDir = "dist";
  let shim = "";
  return {
    name: "spa-fallback-404",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
      // An absolute base (`https://host/x/`) still resolves to a path at
      // runtime, which is all `location.pathname` can be compared against.
      const sitePath = /^[a-z][a-z\d+\-.]*:\/\//i.test(config.base)
        ? new URL(config.base).pathname
        : config.base;
      // Every build gets the shim except a preview's own, so a production
      // deploy under a non-root PAGES_BASE_PATH still rescues preview links.
      shim = /pr-preview\/pr-\d+\/$/.test(sitePath)
        ? ""
        : previewHandoffShim(sitePath);
    },
    closeBundle() {
      const resolvedOutDir = resolve(process.cwd(), outDir);
      try {
        const html = readFileSync(
          resolve(resolvedOutDir, "index.html"),
          "utf8",
        );
        // Ahead of the module bundle, which is deferred, so the redirect wins
        // the race against the app booting on the wrong base.
        const fallback = shim
          ? html.replace("</head>", `  ${shim}</head>`)
          : html;
        writeFileSync(resolve(resolvedOutDir, "404.html"), fallback);
      } catch (err) {
        // Best-effort — a custom outDir or a failed build shouldn't crash the
        // rest of the pipeline over this fallback file, but it should be
        // visible in CI logs rather than silently missing on deploy.
        this.warn(
          `spa-fallback-404: could not create 404.html fallback in "${resolvedOutDir}": ${
            err instanceof Error ? err.message : String(err)
          }`,
        );
      }
    },
  };
}


// The `@nanobpm/*` packages are excluded from esbuild's dependency pre-bundling
// so the engine's `new URL('nanobpmn_engine_bg.wasm', import.meta.url)` survives
// and Vite emits the binary as a hashed asset.

// Normalize the base path so a misconfigured env var can't silently emit
// broken asset URLs:
// - ensure a trailing slash (e.g. `/web-demo-framework` -> `/web-demo-framework/`,
//   otherwise Vite would emit `/web-demo-frameworkassets/...`).
// - ensure a leading slash for relative-looking values (e.g. `web-demo-framework/`
//   -> `/web-demo-framework/`), since a base without a leading slash is treated
//   as relative and can produce incorrect asset URLs on GitHub Pages. Absolute
//   URLs (e.g. `https://...`) are left untouched except for the same trailing
//   slash normalization applied to every base value.
const rawBasePath = process.env.VITE_BASE_PATH?.trim() || "/";
const isAbsoluteUrl = /^[a-z][a-z\d+\-.]*:\/\//i.test(rawBasePath);
const withLeadingSlash =
  isAbsoluteUrl || rawBasePath.startsWith("/")
    ? rawBasePath
    : `/${rawBasePath}`;
const basePath = withLeadingSlash.endsWith("/")
  ? withLeadingSlash
  : `${withLeadingSlash}/`;

export default defineConfig({
  // GitHub Pages project sites (and PR preview subpaths) are served under a
  // non-root path, e.g. /web-demo-framework/ or /pr-preview/pr-<n>/. Local
  // dev/preview keep the default root base; CI sets VITE_BASE_PATH to match
  // where the build is actually published — see .github/workflows/deploy.yml
  // and preview.yml, and docs/hosting-and-deployment.md decision 1.
  base: basePath,
  plugins: [react(), stripDevCsp(), spaFallback404()],
  server: {
    port: 5174,
    allowedHosts: [".ngrok-free.dev", ".ngrok-free.app", ".trycloudflare.com"],
  },
  preview: {
    port: 5174,
    allowedHosts: [".ngrok-free.dev", ".ngrok-free.app", ".trycloudflare.com"],
  },
  resolve: {
    // `preact` dedupe: `@bpmn-io/form-js` pins its own nested `preact`, while
    // `diagram-js` (via `bpmn-js`, and later a properties panel) resolves the
    // hoisted one from a different dependency path. Two copies means two
    // independent render contexts and a crash reading `undefined.context`.
    // Dev and prod resolve dependencies differently, so this must hold for
    // both `npm run dev` and `npm run build`.
    dedupe: ["react", "react-dom", "preact"],
  },
  optimizeDeps: {
    exclude: [
      "@nanobpm/engine-wasm",
      "@nanobpm/bojtos-kit",
      "@nanobpm/bojtos-react",
    ],
  },
  build: {
    // Emit a manifest so `tools/bundle-budget/check.mjs` can walk the real
    // module graph (which chunks are on the initial-load path vs. reachable
    // only via a dynamic import) instead of guessing from file names.
    manifest: true,
    rollupOptions: {
      output: {
        // A deliberate vendor split, not an incidental one — but a narrow
        // one. `manualChunks` groups React and the design system together
        // because both are *always* on the eager, initial-load path (every
        // example mounts them on first render), so naming them here can't
        // change what loads when.
        //
        // Monaco, bpmn-js, and WebLLM are deliberately NOT grouped via
        // `manualChunks` here, even though they're exactly the chunks this
        // task cares about measuring — grouping a dependency into a named
        // chunk only by module-id pattern (e.g. "anything under
        // monaco-editor/") is unsafe once some *other* code also happens to
        // share a module with it (a runtime helper, a small transitive
        // dependency, Vite's own `__vitePreload`). Rollup then has to
        // synthesize a real static import edge from the entry into that
        // named chunk just to reach the shared bytes, silently dragging the
        // whole multi-MB chunk back onto the initial-load path — verified by
        // inspecting `dist/.vite/manifest.json` and the generated
        // `index.html` while building this out. Rollup's own automatic
        // chunking already isolates anything reached *only* via a dynamic
        // `import()` (see `ExampleRunner.tsx`'s `lazy()` calls and
        // `src/framework/brains/browser.ts`'s WebLLM import) correctly and
        // safely; `chunkFileNames` below just gives those automatic chunks
        // readable, stable names instead of relying on `manualChunks` to
        // reassign them.
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          // Rollup module ids can use platform-specific separators; on
          // Windows builds these are typically `\` rather than `/`, which
          // would silently defeat the `includes("/…/")` checks below.
          const normalizedId = id.replace(/\\/g, "/");
          if (
            normalizedId.includes("/react/") ||
            normalizedId.includes("/react-dom/") ||
            normalizedId.includes("/scheduler/")
          ) {
            return "vendor-react";
          }
          if (normalizedId.includes("/@camunda/design-system/")) {
            return "vendor-design-system";
          }
          return undefined;
        },
        // Rollup already isolates Monaco/bpmn-js/WebLLM into their own
        // chunks purely because they're reached only via dynamic `import()`
        // (see the comment above `manualChunks`) — this just renames those
        // already-correctly-split chunks so `npm run build` output and
        // `tools/bundle-budget/check.mjs` can identify them by name instead
        // of an opaque content hash.
        chunkFileNames(chunkInfo) {
          // Normalize to POSIX-style separators: `facadeModuleId` can use
          // `\` on Windows builds, which would otherwise prevent these
          // `includes("/…/")` checks from matching and leave chunks with
          // their generic `[name]-[hash].js` fallback name.
          const facadeId = (chunkInfo.facadeModuleId ?? "").replace(
            /\\/g,
            "/",
          );
          if (
            facadeId.includes("/framework/ui/MonacoEditor.tsx") ||
            facadeId.includes("/monaco-editor/") ||
            facadeId.includes("/@monaco-editor/")
          ) {
            return "assets/vendor-monaco-[hash].js";
          }
          if (facadeId.includes("/@mlc-ai/web-llm/")) {
            return "assets/vendor-webllm-[hash].js";
          }
          if (
            facadeId.includes("/@nanobpm/bojtos-react/") ||
            facadeId.includes("/bpmn-js/")
          ) {
            return "assets/vendor-bpmn-[hash].js";
          }
          if (facadeId.includes("/framework/ui/ModelEditor.tsx")) {
            return "assets/vendor-modeler-[hash].js";
          }
          return "assets/[name]-[hash].js";
        },
      },
    },
  },
});
