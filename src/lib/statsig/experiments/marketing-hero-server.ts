/**
 * Server-only marketing hero Statsig evaluation (`@statsig/statsig-node-core`).
 * Import only from `+page.server.ts`, `server.ts`, or other server-only modules.
 *
 * @see ../README.md
 */
import type { Statsig, StatsigUser } from '@statsig/statsig-node-core';
import { readLayoutVariantFromStatsigEvaluation } from '../experiment-eval';
import type { HeroLayoutVariant } from '../hero-layout';
import { normalizeHeroSubtitle, normalizeHeroTitle } from '../hero-query-overrides';
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
    heroTitleBase: string;
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

async function evaluateBestTitleHeroWithClient(
    client: Statsig,
    statsigUser: StatsigUser,
    fallbacks: { title: string; description: string }
): Promise<{ title: string; description: string }> {
    try {
        const experiment = client.getExperiment(
            statsigUser,
            MARKETING_HERO_EXPERIMENTS.bestTitle,
            DISABLE_EXPOSURE
        );
        const rawTitle = experiment.get('title', fallbacks.title);
        const rawDescription = experiment.get('description', fallbacks.description);
        return {
            title: normalizeHeroTitle(rawTitle, fallbacks.title),
            description: normalizeHeroSubtitle(rawDescription, fallbacks.description)
        };
    } catch {
        return { title: fallbacks.title, description: fallbacks.description };
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
    fallbacks: { title: string; subtitle: string; layout: HeroLayoutVariant; cta: string }
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
            heroTitleBase: fallbacks.title,
            heroSubtitleBase: fallbacks.subtitle,
            heroLayoutBase: fallbacks.layout,
            heroCtaBase: fallbacks.cta,
            statsigBootstrap: null
        };
    }

    const statsigUser = toStatsigUser(user);

    const bootstrapFilters = {
        experimentFilter: new Set([
            MARKETING_HERO_EXPERIMENTS.bestTitle,
            MARKETING_HERO_EXPERIMENTS.heroLayout
        ]),
        dynamicConfigFilter: new Set([MARKETING_HERO_EXPERIMENTS.heroLayout])
    };

    const [
        { title: heroTitleBase, description: heroSubtitleBase },
        heroLayoutBase,
        statsigBootstrap
    ] = await Promise.all([
        evaluateBestTitleHeroWithClient(client, statsigUser, {
            title: fallbacks.title,
            description: fallbacks.subtitle
        }),
        evaluateHeroLayoutWithClient(client, statsigUser, fallbacks.layout),
        Promise.resolve(
            getStatsigClientBootstrapPayloadForClient(client, statsigUser, bootstrapFilters)
        )
    ]);

    const heroCtaBase = fallbacks.cta;

    const bundle: MarketingHomeStatsigBundle = {
        heroTitleBase,
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

/** `best_cta` Statsig experiment is disabled - always returns the provided fallback (e.g. `DEFAULT_HERO_CTA`). */
export async function evaluateHeroCtaExperiment(
    _user: StatsigUser | StatsigServerUserInput,
    fallback: string
): Promise<string> {
    return fallback;
}
