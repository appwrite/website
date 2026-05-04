/**
 * Server-only marketing hero Statsig evaluation (`@statsig/statsig-node-core`).
 * Import only from `+page.server.ts`, `server.ts`, or other server-only modules.
 *
 * @see ../README.md
 */
import type { Statsig, StatsigUser } from '@statsig/statsig-node-core';
import { readLayoutVariantFromStatsigEvaluation } from '../experiment-eval';
import type { HeroLayoutVariant } from '../hero-layout';
import { normalizeHeroCta, normalizeHeroSubtitle } from '../hero-query-overrides';
import {
    getStatsigClientBootstrapPayloadForClient,
    getStatsigServerClient,
    toStatsigUser,
    type StatsigServerUserInput
} from '../server';
import { MARKETING_HERO_EXPERIMENTS } from './marketing-hero-ids';

export { MARKETING_HERO_EXPERIMENTS };

const DISABLE_EXPOSURE = { disableExposureLogging: true } as const;

export type MarketingHomeStatsigBundle = {
    heroSubtitleBase: string;
    heroLayoutBase: HeroLayoutVariant;
    heroCtaBase: string;
    statsigBootstrap: string | null;
};

/**
 * Cache is **per Statsig stable id** (same cookie as `+page.server.ts` / browser SDK): one row per
 * anonymous browser, not per logged-in Appwrite user. Lives in this Node process memory only.
 */
/** Longer TTL = fewer Statsig round-trips for returning visitors (stale hero assignment up to this window). */
const MARKETING_HOME_STATSIG_CACHE_TTL_MS = 300_000;
/** Hard cap on distinct stable ids tracked in one process; enforced with LRU eviction below. */
const MARKETING_HOME_STATSIG_CACHE_MAX = 5_000;

type CacheRow = {
    expiresAt: number;
    /** LRU tie-breaker when the map is full and every row is still inside TTL. */
    lastAccessAt: number;
    bundle: MarketingHomeStatsigBundle;
};

const marketingHomeStatsigCache = new Map<string, CacheRow>();

function sweepExpiredMarketingHomeStatsigCache(now: number) {
    for (const [k, v] of marketingHomeStatsigCache) {
        if (v.expiresAt <= now) {
            marketingHomeStatsigCache.delete(k);
        }
    }
}

/** If still above max (e.g. many first-time visitors inside TTL), drop least-recently-used rows. */
function evictMarketingHomeStatsigCacheLru() {
    const max = MARKETING_HOME_STATSIG_CACHE_MAX;
    const target = Math.floor(max * 0.75);
    if (marketingHomeStatsigCache.size <= max) return;

    const entries = [...marketingHomeStatsigCache.entries()].sort(
        (a, b) => a[1].lastAccessAt - b[1].lastAccessAt
    );
    while (marketingHomeStatsigCache.size > target && entries.length > 0) {
        const next = entries.shift();
        if (next === undefined) break;
        marketingHomeStatsigCache.delete(next[0]);
    }
}

async function evaluateHeroDescriptionWithClient(
    client: Statsig,
    statsigUser: StatsigUser,
    fallback: string
): Promise<string> {
    try {
        const experiment = client.getExperiment(
            statsigUser,
            MARKETING_HERO_EXPERIMENTS.bestDescription,
            DISABLE_EXPOSURE
        );
        const raw = experiment.get('description', fallback);
        return normalizeHeroSubtitle(raw, fallback);
    } catch {
        return fallback;
    }
}

async function evaluateHeroCtaWithClient(
    client: Statsig,
    statsigUser: StatsigUser,
    fallback: string
): Promise<string> {
    try {
        const experiment = client.getExperiment(
            statsigUser,
            MARKETING_HERO_EXPERIMENTS.bestCta,
            DISABLE_EXPOSURE
        );
        const raw = experiment.get('cta', fallback);
        return normalizeHeroCta(raw, fallback);
    } catch {
        return fallback;
    }
}

async function evaluateHeroLayoutWithClient(
    client: Statsig,
    statsigUser: StatsigUser,
    fallback: HeroLayoutVariant
): Promise<HeroLayoutVariant> {
    try {
        const id = MARKETING_HERO_EXPERIMENTS.heroLayout;
        const experiment = client.getExperiment(statsigUser, id, DISABLE_EXPOSURE);
        let r = readLayoutVariantFromStatsigEvaluation(experiment, fallback);
        if (r.source !== 'none') {
            return r.layout;
        }
        const dc = client.getDynamicConfig(statsigUser, id, DISABLE_EXPOSURE);
        r = readLayoutVariantFromStatsigEvaluation(dc, fallback);
        return r.layout;
    } catch {
        return fallback;
    }
}

/**
 * One Statsig client + one user shape for the homepage: parallel eval + bootstrap, with a short
 * in-memory cache keyed by stable id to speed repeat `/` loads.
 */
export async function loadMarketingHomeStatsigBundle(
    user: StatsigUser | StatsigServerUserInput,
    cacheKey: string,
    fallbacks: { subtitle: string; layout: HeroLayoutVariant; cta: string }
): Promise<MarketingHomeStatsigBundle> {
    const now = Date.now();
    sweepExpiredMarketingHomeStatsigCache(now);

    const hit = marketingHomeStatsigCache.get(cacheKey);
    if (hit && hit.expiresAt > now) {
        hit.lastAccessAt = now;
        return hit.bundle;
    }

    const client = await getStatsigServerClient();
    if (!client) {
        return {
            heroSubtitleBase: fallbacks.subtitle,
            heroLayoutBase: fallbacks.layout,
            heroCtaBase: fallbacks.cta,
            statsigBootstrap: null
        };
    }

    const statsigUser = toStatsigUser(user);

    const bootstrapFilters = {
        experimentFilter: new Set([
            MARKETING_HERO_EXPERIMENTS.bestDescription,
            MARKETING_HERO_EXPERIMENTS.bestCta,
            MARKETING_HERO_EXPERIMENTS.heroLayout
        ]),
        dynamicConfigFilter: new Set([MARKETING_HERO_EXPERIMENTS.heroLayout])
    };

    const [heroSubtitleBase, heroLayoutBase, heroCtaBase, statsigBootstrap] = await Promise.all([
        evaluateHeroDescriptionWithClient(client, statsigUser, fallbacks.subtitle),
        evaluateHeroLayoutWithClient(client, statsigUser, fallbacks.layout),
        evaluateHeroCtaWithClient(client, statsigUser, fallbacks.cta),
        Promise.resolve(
            getStatsigClientBootstrapPayloadForClient(client, statsigUser, bootstrapFilters)
        )
    ]);

    const bundle: MarketingHomeStatsigBundle = {
        heroSubtitleBase,
        heroLayoutBase,
        heroCtaBase,
        statsigBootstrap
    };

    marketingHomeStatsigCache.set(cacheKey, {
        expiresAt: now + MARKETING_HOME_STATSIG_CACHE_TTL_MS,
        lastAccessAt: now,
        bundle
    });
    evictMarketingHomeStatsigCacheLru();

    return bundle;
}

/**
 * SSR: `best_description`. Client must still call `readMarketingHeroExperimentsForExposure` so Pulse gets an exposure.
 */
export async function evaluateHeroDescriptionExperiment(
    user: StatsigUser | StatsigServerUserInput,
    fallback: string
): Promise<string> {
    const client = await getStatsigServerClient();
    if (!client) return fallback;
    return evaluateHeroDescriptionWithClient(client, toStatsigUser(user), fallback);
}

/**
 * SSR: `hero_layout` (experiment and/or dynamic config with the same id).
 */
export async function evaluateHeroLayoutExperiment(
    user: StatsigUser | StatsigServerUserInput,
    fallback: HeroLayoutVariant
): Promise<HeroLayoutVariant> {
    const client = await getStatsigServerClient();
    if (!client) return fallback;
    return evaluateHeroLayoutWithClient(client, toStatsigUser(user), fallback);
}

/**
 * SSR: `best_cta` (`cta` param). Client must still call `readMarketingHeroExperimentsForExposure` so Pulse gets an exposure.
 */
export async function evaluateHeroCtaExperiment(
    user: StatsigUser | StatsigServerUserInput,
    fallback: string
): Promise<string> {
    const client = await getStatsigServerClient();
    if (!client) return fallback;
    return evaluateHeroCtaWithClient(client, toStatsigUser(user), fallback);
}
