import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

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
  plugins: [react(), stripDevCsp()],
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
