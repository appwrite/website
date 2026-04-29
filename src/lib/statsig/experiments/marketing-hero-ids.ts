/**
 * Statsig experiment / config ids for the marketing hero only.
 * Safe to import from **client** code (no Node Statsig SDK).
 */
export const MARKETING_HERO_EXPERIMENTS = {
    /** Param: `description` (string). */
    bestDescription: 'best_description',
    /**
     * Experiment or dynamic config id. Params tried: `layout`, `hero_layout`, `heroLayout`; then `.value`.
     */
    heroLayout: 'hero_layout'
} as const;
