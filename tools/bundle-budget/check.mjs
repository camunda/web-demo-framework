// Enforces per-artifact bundle-size budgets against a production build's
// `dist/.vite/manifest.json`, computing real gzip sizes so it can't be
// fooled by a chunk being renamed — see vite.config.ts's `manualChunks`/
// `chunkFileNames` comments for why this walks the *graph* (imports vs.
// dynamicImports) rather than trusting file names alone.
//
// A single global "initial JS" budget would pass even if e.g. the embed
// entry point regressed back to eager-loading Monaco, as long as the
// gallery stayed light — issue #9 explicitly calls this out, so each
// artifact below gets its own budget instead of one combined number.
// `modeler-on-demand` covers the bpmn-js `Modeler` behind the model-editing
// seam (`src/framework/ui/ModelEditor.tsx`, issue #3), added once that
// component existed and got its own `React.lazy()` boundary in
// `ExampleRunner.tsx`.
//
// Run after `npm run build` (see package.json's `budget` script and
// .github/workflows/ci.yml). Fails (non-zero exit) if any artifact exceeds
// its gzip budget.
import { readdir, readFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..", "..");
const distDir = path.join(repoRoot, "dist");
const manifestPath = path.join(distDir, ".vite", "manifest.json");

/**
 * Budgets are gzip kB. "gallery" and "embed" are currently identical
 * because there is no distinct `/embed` entry point yet (issue #8 hasn't
 * landed) — both measure the one existing entry, `index.html`. Once issue
 * #8 adds a separate embed bundle, split this into two real entries here.
 *
 * The initial-JS budget dropped from 300 to 240 when `@bpmn-io/form-js-viewer`
 * moved behind a `lazy()` boundary (actual: ~204 kB). A budget left at the old
 * ceiling would let that 96 kB of headroom be spent again without anyone
 * noticing — which is how it went over in the first place. ~36 kB of slack is
 * deliberate: enough for ordinary feature work, not enough to absorb another
 * multi-hundred-kB dependency landing on the eager path.
 */
const BUDGETS_KB = {
  "gallery-initial-js": 240,
  "embed-initial-js": 240,
  "monaco-on-demand": 950,
  "webllm-on-demand": 2200,
  // The engine's worker bundle — a second copy of WebLLM, fetched only when a
  // reader connects the in-browser brain (see `brains/webllm.worker.ts`). Same
  // ceiling as the main-thread copy, since it is the same library.
  "webllm-worker": 2200,
  "modeler-on-demand": 950,
};

async function loadManifest() {
  const raw = await readFile(manifestPath, "utf8");
  return JSON.parse(raw);
}

function gzipKb(filePath) {
  return readFile(filePath).then(
    (buf) => gzipSync(buf, { level: 9 }).length / 1024,
  );
}

/** Recursively collect every chunk file reachable via `imports` (static) only. */
function collectStatic(manifest, entryKey, seen = new Set()) {
  if (seen.has(entryKey)) return seen;
  const entry = manifest[entryKey];
  if (!entry) return seen;
  seen.add(entryKey);
  for (const dep of entry.imports ?? []) collectStatic(manifest, dep, seen);
  return seen;
}

/**
 * The real transfer cost of "the user takes this dynamic import" is the
 * target chunk plus whatever it needs *statically* — but NOT whatever it
 * might *itself* dynamically import further (those are separate, deeper
 * lazy boundaries, e.g. Monaco's ~100 individual per-language chunks,
 * each fetched only if that specific language tab is opened). Reusing
 * `collectStatic` here is deliberate: from the dynamic target's own
 * perspective, its remaining static-import graph is exactly what loading
 * it actually costs.
 */
const collectFromDynamicTarget = collectStatic;

function findEntryKey(manifest) {
  const key = Object.keys(manifest).find((k) => manifest[k].isEntry);
  if (!key) throw new Error("No entry chunk found in manifest.json");
  return key;
}

/** Keys already paid for on page load shouldn't inflate an on-demand budget. */
function subtractKeys(set, exclude) {
  return new Set([...set].filter((k) => !exclude.has(k)));
}

function findDynamicTarget(manifest, matcher) {
  const key = Object.keys(manifest).find(matcher);
  if (!key) return null;
  return key;
}

/**
 * Gzip size of emitted files matching `pattern`, found by reading `dist/assets`
 * rather than the manifest — the only way to measure output the module graph
 * doesn't describe, such as worker bundles.
 */
async function gzipKbOfEmitted(pattern) {
  const assetsDir = path.join(distDir, "assets");
  let names;
  try {
    names = await readdir(assetsDir);
  } catch {
    return 0;
  }
  let total = 0;
  for (const name of names) {
    if (pattern.test(name)) total += await gzipKb(path.join(assetsDir, name));
  }
  return total;
}

async function sumGzipKb(manifest, keys) {
  let total = 0;
  for (const key of keys) {
    const file = manifest[key]?.file;
    if (!file) continue;
    if (!file.endsWith(".js")) continue; // budgets below are JS-only
    total += await gzipKb(path.join(distDir, file));
  }
  return total;
}

async function main() {
  const manifest = await loadManifest();
  const entryKey = findEntryKey(manifest);

  const initialKeys = collectStatic(manifest, entryKey);
  const initialKb = await sumGzipKb(manifest, initialKeys);

  const monacoKey = findDynamicTarget(
    manifest,
    (k) => manifest[k].name === "MonacoEditor" && manifest[k].isDynamicEntry,
  );
  const webllmKey = findDynamicTarget(manifest, (k) =>
    k.includes("@mlc-ai/web-llm"),
  );
  const modelerKey = findDynamicTarget(
    manifest,
    (k) => manifest[k].name === "ModelEditor" && manifest[k].isDynamicEntry,
  );

  const monacoKb = monacoKey
    ? await sumGzipKb(
        manifest,
        subtractKeys(
          collectFromDynamicTarget(manifest, monacoKey),
          initialKeys,
        ),
      )
    : 0;
  const webllmKb = webllmKey
    ? await sumGzipKb(
        manifest,
        subtractKeys(
          collectFromDynamicTarget(manifest, webllmKey),
          initialKeys,
        ),
      )
    : 0;
  const modelerKb = modelerKey
    ? await sumGzipKb(
        manifest,
        subtractKeys(
          collectFromDynamicTarget(manifest, modelerKey),
          initialKeys,
        ),
      )
    : 0;

  // Workers don't appear in the manifest at all — Vite emits them from
  // `new Worker(new URL(...))`, not from a module-graph edge — so nothing above
  // can see them. The WebLLM worker is a second full copy of WebLLM (the main
  // thread keeps its own for `CreateWebWorkerMLCEngine`, `hasModelInCache` and
  // the prebuilt config), which is a few MB that would otherwise grow unwatched.
  const workerKb = await gzipKbOfEmitted(/^webllm\.worker-.*\.js$/);

  const measurements = {
    "gallery-initial-js": initialKb,
    "embed-initial-js": initialKb,
    "monaco-on-demand": monacoKb,
    "webllm-on-demand": webllmKb,
    "webllm-worker": workerKb,
    "modeler-on-demand": modelerKb,
  };

  let failed = false;
  console.log("Bundle budget report (gzip kB):\n");
  for (const [name, budget] of Object.entries(BUDGETS_KB)) {
    const actual = measurements[name] ?? 0;
    const ok = actual <= budget;
    if (!ok) failed = true;
    console.log(
      `${ok ? "✓" : "✗"} ${name.padEnd(20)} ${actual.toFixed(1).padStart(8)} kB / ${budget} kB budget`,
    );
  }

  if (!monacoKey) {
    console.warn(
      "\nWarning: couldn't find the Monaco on-demand chunk in the manifest — " +
        "monaco-on-demand measured as 0 kB, which would mask a real regression. " +
        "Check that src/framework/ui/MonacoEditor.tsx still exists and is dynamically imported.",
    );
    failed = true;
  }
  if (!webllmKey) {
    console.warn(
      "\nWarning: couldn't find the WebLLM on-demand chunk in the manifest — " +
        "webllm-on-demand measured as 0 kB, which would mask a real regression. " +
        "Check that @mlc-ai/web-llm is still dynamically imported in " +
        "src/framework/brains/browser.ts.",
    );
    failed = true;
  }
  if (!modelerKey) {
    console.warn(
      "\nWarning: couldn't find the Modeler on-demand chunk in the manifest — " +
        "modeler-on-demand measured as 0 kB, which would mask a real regression. " +
        "Check that src/framework/ui/ModelEditor.tsx still exists and is dynamically imported.",
    );
    failed = true;
  }
  if (workerKb === 0) {
    // Same failure mode as the manifest misses above, and easier to hit: this
    // one is matched by filename, so a renamed worker entry point or a changed
    // output path silently measures 0 kB and passes a budget nothing is
    // checking. Multi-MB blind spots are the whole reason this tool exists.
    console.warn(
      "\nWarning: couldn't find the WebLLM worker bundle in dist/assets — " +
        "webllm-worker measured as 0 kB, which would mask a real regression. " +
        "Check that src/framework/brains/webllm.worker.ts still exists and is " +
        "referenced via new Worker(new URL(...)) in browser.ts.",
    );
    failed = true;
  }

  if (failed) {
    console.error("\nBundle budget check FAILED.");
    process.exit(1);
  }
  console.log("\nBundle budget check passed.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
