import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The `@nanobpm/*` packages are excluded from esbuild's dependency pre-bundling
// so the engine's `new URL('nanobpmn_engine_bg.wasm', import.meta.url)` survives
// and Vite emits the binary as a hashed asset.

// Normalize the base path: ensure a trailing slash so a misconfigured env var
// (e.g. `/web-demo-framework` without the trailing `/`) can't silently emit
// broken asset URLs like `/web-demo-frameworkassets/...`.
const rawBasePath = process.env.VITE_BASE_PATH?.trim() || "/";
const basePath = rawBasePath.endsWith("/") ? rawBasePath : `${rawBasePath}/`;

export default defineConfig({
  // GitHub Pages project sites (and PR preview subpaths) are served under a
  // non-root path, e.g. /web-demo-framework/ or /pr-preview/pr-<n>/. Local
  // dev/preview keep the default root base; CI sets VITE_BASE_PATH to match
  // where the build is actually published — see .github/workflows/deploy.yml
  // and preview.yml, and docs/hosting-and-deployment.md decision 1.
  base: basePath,
  plugins: [react()],
  server: {
    port: 5174,
    allowedHosts: [".ngrok-free.dev", ".ngrok-free.app", ".trycloudflare.com"],
  },
  preview: {
    port: 5174,
    allowedHosts: [".ngrok-free.dev", ".ngrok-free.app", ".trycloudflare.com"],
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    exclude: [
      "@nanobpm/engine-wasm",
      "@nanobpm/bojtos-kit",
      "@nanobpm/bojtos-react",
    ],
  },
});
