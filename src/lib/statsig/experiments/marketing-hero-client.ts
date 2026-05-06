/**
 * Browser-only marketing hero Statsig reads (`@statsig/js-client`).
 * Do not import `marketing-hero-server.ts` or `server.ts` from Svelte/components — that pulls native `@statsig/statsig-node-core` into Vite client.
 *
 * @see ../README.md
 */
import type { StatsigBrowserClient } from '../client';
import { readLayoutVariantFromStatsigClient } from '../experiment-eval';
import type { HeroLayoutVariant } from '../hero-layout';
import {
    normalizeHeroCta,
    normalizeHeroSubtitle,
    normalizeHeroTitle
} from '../hero-query-overrides';
import { MARKETING_HERO_EXPERIMENTS } from './marketing-hero-ids';

export { MARKETING_HERO_EXPERIMENTS };

export type MarketingHeroStatsigBaseline = {
    heroTitle: string;
    heroSubtitle: string;
    heroLayout: HeroLayoutVariant;
    heroCta: string;
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
    heroTitle: string;
    heroSubtitle: string;
    heroLayout: HeroLayoutVariant;
    heroCta: string;
    debug: MarketingHeroClientExposureDebug;
} {
    const bestTitleExperiment = client.getExperiment(MARKETING_HERO_EXPERIMENTS.bestTitle);
    const rawTitle = bestTitleExperiment.get('title', baseline.heroTitle);
    const rawDescription = bestTitleExperiment.get('description', baseline.heroSubtitle);

    const rawCta = client
        .getExperiment(MARKETING_HERO_EXPERIMENTS.bestCta)
        .get('cta', baseline.heroCta);

    const layoutRead = readLayoutVariantFromStatsigClient(
        client,
        MARKETING_HERO_EXPERIMENTS.heroLayout,
        baseline.heroLayout
    );

    const heroTitle = normalizeHeroTitle(rawTitle, baseline.heroTitle);
    const heroSubtitle = normalizeHeroSubtitle(rawDescription, baseline.heroSubtitle);
    const heroCta = normalizeHeroCta(rawCta, baseline.heroCta);

    return {
        heroTitle,
        heroSubtitle,
        heroLayout: layoutRead.layout,
        heroCta,
        debug: {
            [MARKETING_HERO_EXPERIMENTS.bestTitle]: {
                rawTitle,
                rawDescription,
                normalizedTitleLen: heroTitle.length,
                normalizedDescriptionLen: heroSubtitle.length,
                ssrBaselineTitleLen: baseline.heroTitle.length,
                ssrBaselineDescriptionLen: baseline.heroSubtitle.length
            },
            [MARKETING_HERO_EXPERIMENTS.bestCta]: {
                raw: rawCta,
                rawType: typeof rawCta,
                normalizedLen: heroCta.length,
                ssrBaselineLen: baseline.heroCta.length
            },
            [MARKETING_HERO_EXPERIMENTS.heroLayout]: {
                normalized: layoutRead.layout,
                readSource: layoutRead.source,
                ssrBaselineLayout: baseline.heroLayout
            }
        }
    };
}
