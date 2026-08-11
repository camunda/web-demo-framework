import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";
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
function spaFallback404(): Plugin {
  return {
    name: "spa-fallback-404",
    apply: "build",
    closeBundle() {
      const outDir = resolve(process.cwd(), "dist");
      try {
        copyFileSync(resolve(outDir, "index.html"), resolve(outDir, "404.html"));
      } catch {
        // Best-effort — a custom outDir or a failed build shouldn't crash the
        // rest of the pipeline over this fallback file.
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
  isAbsoluteUrl || rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`;
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
});
