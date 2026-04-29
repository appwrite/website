/**
 * Browser-only marketing hero Statsig reads (`@statsig/js-client`).
 * Do not import `marketing-hero-server.ts` or `server.ts` from Svelte/components — that pulls native `@statsig/statsig-node-core` into Vite client.
 *
 * @see ../README.md
 */
import type { StatsigBrowserClient } from '../client';
import { readLayoutVariantFromStatsigClient } from '../experiment-eval';
import type { HeroLayoutVariant } from '../hero-layout';
import { normalizeHeroSubtitle } from '../hero-query-overrides';
import { MARKETING_HERO_EXPERIMENTS } from './marketing-hero-ids';

export { MARKETING_HERO_EXPERIMENTS };

export type MarketingHeroStatsigBaseline = {
    heroSubtitle: string;
    heroLayout: HeroLayoutVariant;
};

export type MarketingHeroClientExposureDebug = Record<string, unknown>;

/**
 * Read experiments once the JS client is ready — logs exposures for Pulse / Results.
 * Pass the same baselines as SSR (or prerender defaults) so `.get` defaults stay consistent.
 */
export function readMarketingHeroExperimentsForExposure(
    client: StatsigBrowserClient,
    baseline: MarketingHeroStatsigBaseline
): {
    heroSubtitle: string;
    heroLayout: HeroLayoutVariant;
    debug: MarketingHeroClientExposureDebug;
} {
    const rawDescription = client
        .getExperiment(MARKETING_HERO_EXPERIMENTS.bestDescription)
        .get('description', baseline.heroSubtitle);

    const layoutRead = readLayoutVariantFromStatsigClient(
        client,
        MARKETING_HERO_EXPERIMENTS.heroLayout,
        baseline.heroLayout
    );

    const heroSubtitle = normalizeHeroSubtitle(rawDescription, baseline.heroSubtitle);

    return {
        heroSubtitle,
        heroLayout: layoutRead.layout,
        debug: {
            [MARKETING_HERO_EXPERIMENTS.bestDescription]: {
                raw: rawDescription,
                rawType: typeof rawDescription,
                normalizedLen: heroSubtitle.length,
                ssrBaselineLen: baseline.heroSubtitle.length
            },
            [MARKETING_HERO_EXPERIMENTS.heroLayout]: {
                normalized: layoutRead.layout,
                readSource: layoutRead.source,
                ssrBaselineLayout: baseline.heroLayout
            }
        }
    };
}
