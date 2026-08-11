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
export default defineConfig({
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
