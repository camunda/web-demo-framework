# Hosting and deployment

Issue [#19](https://github.com/camunda/web-demo-framework/issues/19). The
epic's premise — a docs page links to a running demo — has no link target
without this. This document records the decisions and the engineering
deliverable (CI/CD workflows) that implement them. Several sub-decisions here
need sign-off from people outside engineering; those are called out
explicitly under [Approval-only blockers](#approval-only-blockers) rather
than left as an unstated assumption.

## 1. Where it's hosted

**Decision: GitHub Pages, on a Camunda-controlled origin, separate from the
docs site.**

Reader-supplied code is evaluated and executed inside a sandboxed iframe
(`src/framework/sandbox/`), not in this page's origin — `src/framework/compile.ts`
only does a host-side syntax preflight via `new Function` and never calls the
resulting factory; see the sandboxing work in
[#18](https://github.com/camunda/web-demo-framework/issues/18). Serving the
demo from the same origin as camunda.com's docs would let that code reach
docs-origin cookies and storage if the sandbox in #18 is ever misconfigured —
defence in depth, not a replacement for it. A distinct origin is cheap
insurance:

- Recommended: a custom domain such as `demos.camunda.io`, CNAME'd to this
  repo's GitHub Pages deployment. This is infra work (DNS + Pages custom
  domain config) — see blockers below.
- Until that lands, `.github/workflows/deploy.yml` publishes to this repo's
  default Pages URL, which is already a distinct origin from `camunda.com`
  and fully automatic. Because the repo is **internal**, that is an
  access-controlled generated host
  (`https://<random>.pages.github.io/`), served from the **root** — not
  `https://camunda.github.io/web-demo-framework/`; the `/<repo>/` project-path
  convention applies only to a *public* repo. The custom domain can be layered
  on later (one line — see the commented `CNAME` step in the workflow) without
  touching the pipeline, and a custom domain is likewise root-served, so the
  Vite build `base` stays correct across that change: `vite.config.ts` reads
  it from the `VITE_BASE_PATH` env var (defaulting to `/`), and `deploy.yml`
  sets it to `/` unless the `PAGES_BASE_PATH` repo variable overrides — set
  that to `/web-demo-framework/` only if this repo is ever made public and
  served as a project site, otherwise every asset URL 404s.

This coordinated with, but did not block on, #18: the CSP and sandbox design
there applies regardless of which origin serves the bundle. #18 has since
landed — `src/framework/compile.ts` now runs reader/agent-supplied code
through the sandbox in `src/framework/sandbox/**` instead of executing it
directly in the host origin. The site deployed by this PR is not
security-complete or launch-ready, though, until that sandbox/CSP posture is
verified against the real deployed origin (not just `npm run dev`/`preview`)
— #19's acceptance criteria include that verification step; see
[Verifying the security posture on the real deployment](#verifying-the-security-posture-on-the-real-deployment)
below.

## 2. How it deploys

**Decision: two GitHub Actions workflows, both added in this PR.**

- **`.github/workflows/deploy.yml`** — on every push to `main`: `npm ci`,
  `npm run build` (which already runs `tsc --noEmit` then `vite build`), then
  publish `dist/` to the **root of the `gh-pages` branch** via
  [`JamesIves/github-pages-deploy-action`](https://github.com/JamesIves/github-pages-deploy-action).
  A merge to `main` results in an updated public URL automatically, with no
  extra step.
- **`.github/workflows/preview.yml`** — on every PR (opened / synchronize /
  reopened / closed): builds the same way (with `VITE_BASE_PATH` set to the
  matching `pr-preview/pr-<number>/` subpath so preview assets resolve),
  then publishes to a per-PR path (`pr-preview/pr-<number>/`) on the same
  branch using
  [`rossjrw/pr-preview-action`](https://github.com/rossjrw/pr-preview-action),
  which needs only the built-in `GITHUB_TOKEN` — no external hosting account.
  Closing the PR tears the preview down. With many parallel issues in flight,
  a reviewer gets a clickable, real deployed page before merge instead of
  only a diff. **Same-repo PRs only:** fork PRs get a read-only
  `GITHUB_TOKEN` that can't push to `gh-pages`, so both the build and close
  jobs are gated to skip PRs whose head repo isn't this one, rather than
  failing noisily.

Both workflows run the existing `npm run build`, so they inherit whatever a
future CI/tests task (tracked separately) adds to that script; they don't
duplicate a test step.

**Resolved: the Pages-source conflict.** This was previously logged here as a
"known follow-up, not a blocker", and it turned out to be an active bug rather
than a latent one. GitHub Pages serves exactly **one** source per repo. The
repo was set to the `actions/deploy-pages` ("GitHub Actions") source, so the
`gh-pages` branch that `pr-preview-action` pushes to was never served at all —
every PR still got a comment advertising a preview URL, and that URL resolved
to main's deployment. Compounding it, the advertised host was wrong: this repo
is **internal**, so its access-controlled Pages site is served from a
generated `https://<random>.pages.github.io/` host, not from
`camunda.github.io/web-demo-framework/`, and the latter redirects to the
generated host's *root*, discarding the `pr-preview/` path. A reviewer
clicking "View preview" was looking at `main`.

Option (a) was taken: **the Pages source is the `gh-pages` branch, and
`deploy.yml` publishes main's build to that branch's root.** Three things hold
it together, and breaking any one of them reintroduces the bug:

1. Repo Settings → Pages → Source must stay **Deploy from a branch →
   `gh-pages` / `/`**. Switching it back to "GitHub Actions" silently
   un-serves every preview.
2. `deploy.yml` passes `clean-exclude: pr-preview/` and `force: false`, so a
   main deployment neither deletes live previews nor clobbers one published
   concurrently.
3. `preview.yml` passes `pages-base-url` (defaulting to the generated host,
   overridable via the `PAGES_BASE_URL` repo variable) so the comment links to
   the host that actually serves the site. That value must be a **bare
   hostname — no scheme, no trailing slash**; the action prepends `https://`
   itself, so setting it to `https://demos.camunda.io` produces
   `https://https://demos.camunda.io/pr-preview/pr-N/`.

`preview.yml` can also hold the comment back until the preview is live, via
`wait-for-pages-deployment`. That is gated behind the `PAGES_PREVIEW_WAIT`
repo variable and **off by default**, because it depends on invariant 1 above:
it polls `/repos/{repo}/pages/builds`, which is empty while Pages is
workflow-sourced, so enabling it before the source flip makes every preview
job poll for 180s and then fail. Set `PAGES_PREVIEW_WAIT` to `true` once the
flip is done. (The job needs `pages: read` for that endpoint — note it is the
Pages builds API, not the Deployments API.)

If the custom domain (decision 1) lands, set `PAGES_BASE_URL` to it in the
same change as the `CNAME` step — otherwise previews start pointing at the
old generated host. Option (b) from the original note (previews on a distinct
subdomain, e.g. `previews.demos.camunda.io`) remains available but is no
longer needed.

## 3. Repo visibility

**Decision: recommend the repo go public, but this is an approval-only
decision, not one this PR makes unilaterally.**

The repo is currently **internal**. A public GitHub Pages *artifact* can, in
principle, be published from a private/internal source repo — but:

- It adds an ongoing "don't leak the source" burden with no offsetting
  benefit here: this is a demo framework meant to be linked from public docs,
  not something with proprietary logic worth hiding.
- The brain clients under `src/framework/brains/**` were adapted from
  `camunda/seed-export-compliance-agent-demo`, which is **also private
  today**. Before this repo can go public, that adaptation needs an explicit
  provenance/licence check — confirm the origin repo's licence permits reuse
  here, and carry forward any required attribution. **This repo currently has
  no `LICENSE` file at all**; this PR adds one (`LICENSE`, Apache-2.0, matching
  Camunda's other public repos) so the repo is public-ready once the
  provenance check clears — see blockers below.

If the decision comes back "stay internal, only the built artifact is
public", the engineering side barely changes: GitHub Pages still needs the
*repo* itself to be public (or the org to have GitHub Enterprise Cloud with
Pages configured for a private/internal source, which is a separate infra
capability to confirm) — flagged as a blocker below either way.

## 4. Versioning against the docs

**Decision: continuously deployed, not pinned — for now.**

Given the "no cluster, no API key, always the current examples" ethos of this
project, and that the docs pages linking here are themselves living pages,
continuous deployment from `main` (decision 2) is the simplest model and
matches how the rest of camunda.com docs already treat inline runnable
samples. Explicitly **not versioned/pinned** at this stage: there is only one
"latest" demo, and the docs link always points at it.

This should be revisited if either becomes true: (a) a docs page ships as
part of a versioned docs release and must reference a frozen demo snapshot,
or (b) a breaking framework change (e.g. changing the URL scheme in
[#8](https://github.com/camunda/web-demo-framework/issues/8)) would break an
already-published docs link. If that happens, the mechanism is already
available cheaply: tag a release, publish it to a version-prefixed path
(`/v1/...`) alongside `latest`, and have `deploy.yml` publish both. Not built
now, to avoid speculative infrastructure for a need that doesn't exist yet.

**Monitoring:** the deploy workflow's own status (green/red on `main`) is the
first-line signal that the public URL matches `main`. No additional
uptime/monitoring service is set up as part of this PR — flagged as a
possible follow-up for infra, not a blocker for the demo to exist.

## 5. Docs-side ownership

**Decision, engineering side:** each example's manifest can carry a
`docsUrl` field (see [#8](https://github.com/camunda/web-demo-framework/issues/8),
which owns adding this to `src/framework/types.ts`) linking back to the
camunda.com page the example illustrates. The reverse direction — the docs
page linking *to* the demo — is **not this repo's engineering deliverable**;
it is a docs-side content change.

**Recommendation for the link component:** a simple, low-risk affordance
rather than an inline iframe by default:

- A prominent link/button on the docs page: *"Run this example"*, pointing at
  `https://<demo-origin>/examples/<id>` (routing per #8).
- An **optional** inline embed via `?embed=1` (also #8) for pages that want
  the demo inline, sized ~800×600, with a visible "open full page" escape
  hatch — not the default, since embedding always-on reader-supplied-code
  pages inside camunda.com raises the same cross-origin questions as decision
  1, and should be opted into per-page rather than assumed.

**Ownership:** the docs team (camunda.com content owners) should own adding
the actual links/embeds to doc pages, since they own that repo and content
review. Engineering's responsibility ends at providing a stable per-example
URL and, once #8 lands, an embed mode; someone on the docs side needs to
decide which examples get linked from where. Flagged as a blocker below.

## Verifying the security posture on the real deployment

Local verification (`npm run dev` / `npm run preview`) cannot confirm what
headers the *actual* hosted origin sends, or that the sandbox in #18 survives
being served for real. Once deployed:

1. **CSP headers.** GitHub Pages does not let a repo set arbitrary response
   headers (no server-side control) — so the CSP from #18 must be delivered
   as a `<meta http-equiv="Content-Security-Policy">` tag in `index.html`
   rather than an HTTP header, or the origin needs to move to a host that can
   set headers (e.g. Cloudflare Pages/Workers in front of the same static
   bundle). Note that a meta CSP is not a full substitute for a header: some
   directives (notably `frame-ancestors`, and `report-uri`/`report-to`) are
   ignored when set via `<meta>`, so any directive that depends on those must
   come from a host that can set headers. Confirm which delivery mechanism is
   used and verify with the browser devtools Security/Network panel against
   the deployed URL, not just `localhost`.
2. **Sandbox.** Load the deployed page, open devtools, and confirm the
   handler/agent execution boundary from #18 (sandboxed iframe/worker) is
   actually present in the served HTML — a build or deploy misconfiguration
   silently stripping it would not show up in a local `npm run dev` check.
3. **Origin isolation.** From the deployed URL, attempt (in a scratch
   handler, per #18's own test) to reach `document`, `localStorage`, and
   cookies of the *docs* origin — confirm it fails from the real deployment,
   not only in a local unit/integration test.
4. Re-run this checklist after any change to `deploy.yml`, the CSP, or the
   hosting origin (e.g. adding the custom domain) — those are exactly the
   changes most likely to silently regress the posture verified here.

Do this as a manual pre-launch check for now; automating it (e.g. a
post-deploy smoke job that curls the deployed URL and asserts on the CSP
meta tag) is a reasonable follow-up but out of scope for this PR.

## Approval-only blockers

These need a human decision/action outside this PR before the public URL can
go live for real; the engineering side (workflows, this document) is
complete and does not wait on them:

1. **Repo visibility.** Decide public vs. stay-internal-with-public-Pages
   (section 3), including sign-off on the licence/provenance check against
   `camunda/seed-export-compliance-agent-demo`.
2. **Custom domain.** DNS + GitHub Pages custom-domain configuration for
   `demos.camunda.io` (or whatever origin is chosen) — infra team.
3. **Docs-side linking.** Docs team to decide which camunda.com pages link
   to which example, and to add the actual links/embeds — this repo only
   exposes the URLs for them to use.
4. **GitHub Pages enablement.** Someone with repo admin needs to turn on
   Pages (source: GitHub Actions) in repo settings the first time
   `deploy.yml` runs — the workflow itself cannot flip that repo setting.
