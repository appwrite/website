# Statsig layout

| Path                                   | Role                                                                                                            |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `server.ts`                            | Node `Statsig` singleton, `toStatsigUser`, bootstrap payload for the browser SDK.                               |
| `client.ts`                            | Browser init (`initStatsig`, `whenStatsigReady`), stable id cookie, plugins.                                    |
| `experiment-eval.ts`                   | Shared readers for typed Statsig evaluations (e.g. layout param keys + `.value` fallback).                      |
| `experiments/marketing-hero-ids.ts`    | Experiment id strings only (safe on **client** and server).                                                     |
| `experiments/marketing-hero-client.ts` | Browser-only: `readMarketingHeroExperimentsForExposure` (import from **Svelte** / client code).                 |
| `experiments/marketing-hero-server.ts` | Server-only: `evaluateHeroDescriptionExperiment`, `evaluateHeroLayoutExperiment` (never import from `.svelte`). |
| `hero-statsig.server.ts`               | Thin re-export barrel (legacy import path for `+page.server.ts`).                                               |
| `hero-query-overrides.ts`              | URL query overrides for local QA (`?hero_layout=`, `?hero_subtitle=`, …).                                       |
| `hero-layout.ts`                       | Pure `normalizeHeroLayout` + `HeroLayoutVariant` type (no network).                                             |
| `cta-events.ts`                        | Which analytics events mirror into Statsig.                                                                     |

## Adding a new experiment (marketing hero)

1. **Statsig console** — Create the experiment (or dynamic config). Note the **id** and each **parameter name** and type (string vs number default for `.get` matters).
2. **Ids + server + client (split on purpose)**
    - Add the id to `experiments/marketing-hero-ids.ts` (`MARKETING_HERO_EXPERIMENTS`).
    - In `experiments/marketing-hero-server.ts`, add `evaluateYourThingExperiment(...)` using `getStatsigServerClient()` + `toStatsigUser()` + `getExperiment(..., { disableExposureLogging: true })` for SSR without exposure.
    - In `experiments/marketing-hero-client.ts`, extend `readMarketingHeroExperimentsForExposure` so the browser calls `getExperiment(...).get(...)` (exposure for Pulse / Results). Extend `MarketingHeroStatsigBaseline` if SSR + hydration share the field.
3. **`(marketing)/+page.server.ts`** — `Promise.all` your new evaluator next to the existing ones; pass the value into `resolveHeroQueryOverrides` baseline or add a new field on `data`.
4. **Hero Svelte** — Pass the new prop from `data`; merge into `resolveHeroQueryOverrides` if URL overrides should apply.
5. **URL overrides (optional)** — Add a query key + reader in `hero-query-overrides.ts` and document it in the table comment there.

Do **not** read experiment params only in `onMount` without also defining SSR in step 2–3 unless you intentionally want client-only assignment. The marketing homepage uses **`prerender = false`** so `+page.server.ts` + bootstrap match hydration and avoid layout flash.

**Why two files (`*-client` / `*-server`)?** `@statsig/statsig-node-core` ships native `.node` binaries. If any module imported by a `.svelte` file pulls in `server.ts` or `marketing-hero-server.ts`, Vite tries to bundle that SDK for the browser and fails with “No loader is configured for `.node` files”.

## Adding experiments elsewhere (not marketing hero)

1. Put **server** evaluation next to the route’s `+page.server.ts` or in a small `experiments/<feature>.ts` that only imports `getStatsigServerClient` / `toStatsigUser` from `$lib/statsig/server`.
2. Put **browser** reads next to the component or in the same `experiments/<feature>.ts`, using `whenStatsigReady()` from `$lib/statsig/client`.
3. Reuse `experiment-eval.ts` if you need the same “try `.get`, then `.value`” pattern for typed params.
