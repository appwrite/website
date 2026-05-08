/**
 * Statsig experiment / config ids for the marketing hero only.
 * Safe to import from **client** code (no Node Statsig SDK).
 */
export const MARKETING_HERO_EXPERIMENTS = {
    /** Params: `title` and `description` (strings) — hero headline and supporting copy. */
    bestTitle: 'best_title',
    /** Param: `cta` (string). Primary hero dashboard button label. */
    bestCta: 'best_cta',
    /**
     * Experiment or dynamic config id. Params tried: `layout`, `hero_layout`, `heroLayout`; then `.value`.
     */
    heroLayout: 'hero_layout'
} as const;
