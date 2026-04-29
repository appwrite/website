/**
 * Server-only marketing hero Statsig evaluation (`@statsig/statsig-node-core`).
 * Import only from `+page.server.ts`, `server.ts`, or other server-only modules.
 *
 * @see ../README.md
 */
import type { StatsigUser } from '@statsig/statsig-node-core';
import { readLayoutVariantFromStatsigEvaluation } from '../experiment-eval';
import type { HeroLayoutVariant } from '../hero-layout';
import { normalizeHeroSubtitle } from '../hero-query-overrides';
import { getStatsigServerClient, toStatsigUser, type StatsigServerUserInput } from '../server';
import { MARKETING_HERO_EXPERIMENTS } from './marketing-hero-ids';

export { MARKETING_HERO_EXPERIMENTS };

const DISABLE_EXPOSURE = { disableExposureLogging: true } as const;

/**
 * SSR: `best_description`. Client must still call `readMarketingHeroExperimentsForExposure` so Pulse gets an exposure.
 */
export async function evaluateHeroDescriptionExperiment(
    user: StatsigUser | StatsigServerUserInput,
    fallback: string
): Promise<string> {
    const client = await getStatsigServerClient();
    if (!client) return fallback;

    try {
        const statsigUser = toStatsigUser(user);
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

/**
 * SSR: `hero_layout` (experiment and/or dynamic config with the same id).
 */
export async function evaluateHeroLayoutExperiment(
    user: StatsigUser | StatsigServerUserInput,
    fallback: HeroLayoutVariant
): Promise<HeroLayoutVariant> {
    const client = await getStatsigServerClient();
    if (!client) return fallback;

    try {
        const statsigUser = toStatsigUser(user);
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
