/**
 * Re-exports the marketing-home Statsig server API.
 * Prefer `$lib/statsig/server` + `$lib/statsig/experiments/marketing-hero-server` in new server code.
 * For browser exposure reads, import from `$lib/statsig/experiments/marketing-hero-client` only (never the `-server` module in `.svelte` files).
 */
export {
    type StatsigServerUserInput,
    getStatsigClientBootstrapPayload,
    toStatsigUser
} from './server';
export {
    evaluateHeroCtaExperiment,
    evaluateHeroLayoutExperiment,
    loadMarketingHomeStatsigBundle,
    MARKETING_HERO_EXPERIMENTS,
    type MarketingHomeStatsigBundle
} from './experiments/marketing-hero-server';
export type {
    MarketingHeroClientExposureDebug,
    MarketingHeroStatsigBaseline
} from './experiments/marketing-hero-client';
