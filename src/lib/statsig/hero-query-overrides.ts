import { normalizeHeroLayout, type HeroLayoutVariant } from './hero-layout';

/** Query overrides for marketing hero experiments (Statsig parity for local QA). */

export const HERO_LAYOUT_QUERY_KEY = 'hero_layout';
export const HERO_SUBTITLE_QUERY_KEY = 'hero_subtitle';
export const HERO_TITLE_QUERY_KEY = 'hero_title';

const MAX_SUBTITLE_LEN = 560;
const MAX_TITLE_LEN = 160;

export type HeroQueryBaseline = {
    heroLayout: HeroLayoutVariant;
    heroSubtitle: string;
    heroTitle: string;
};

export type HeroQueryResolved = HeroQueryBaseline;

export function hasHeroExperimentQueryOverrides(params: URLSearchParams): boolean {
    return (
        params.has(HERO_LAYOUT_QUERY_KEY) ||
        params.has(HERO_SUBTITLE_QUERY_KEY) ||
        params.has(HERO_TITLE_QUERY_KEY)
    );
}

/**
 * Applies `hero_layout`, `hero_subtitle`, and `hero_title` search params when present.
 * Values are clamped; unknown `hero_layout` values keep the baseline layout.
 */
export function resolveHeroQueryOverrides(
    params: URLSearchParams,
    baseline: HeroQueryBaseline
): HeroQueryResolved {
    return {
        heroLayout: readHeroLayoutOverride(params, baseline.heroLayout),
        heroSubtitle: readHeroSubtitleOverride(params, baseline.heroSubtitle),
        heroTitle: readHeroTitleOverride(params, baseline.heroTitle)
    };
}

function readHeroLayoutOverride(
    params: URLSearchParams,
    fallback: HeroLayoutVariant
): HeroLayoutVariant {
    if (!params.has(HERO_LAYOUT_QUERY_KEY)) return fallback;
    return normalizeHeroLayout(params.get(HERO_LAYOUT_QUERY_KEY), fallback);
}

function readHeroSubtitleOverride(params: URLSearchParams, fallback: string): string {
    if (!params.has(HERO_SUBTITLE_QUERY_KEY)) return fallback;
    const raw = params.get(HERO_SUBTITLE_QUERY_KEY);
    if (raw == null) return fallback;
    const t = raw.replace(/\s+/g, ' ').trim();
    if (t.length === 0) return fallback;
    return t.length > MAX_SUBTITLE_LEN ? t.slice(0, MAX_SUBTITLE_LEN) : t;
}

function readHeroTitleOverride(params: URLSearchParams, fallback: string): string {
    if (!params.has(HERO_TITLE_QUERY_KEY)) return fallback;
    const raw = params.get(HERO_TITLE_QUERY_KEY);
    if (raw == null) return fallback;
    const t = raw.replace(/\s+/g, ' ').trim();
    if (t.length === 0) return fallback;
    return t.length > MAX_TITLE_LEN ? t.slice(0, MAX_TITLE_LEN) : t;
}
