import { DEFAULT_HERO_CTA } from './constants';
import { normalizeHeroLayout, type HeroLayoutVariant } from './hero-layout';

/** Legacy fixed label on several CTAs - replaced by homepage `heroCta` when present (`best_cta` experiment retired). */
export const SHORT_START_BUILDING_LABEL = 'Start building';

/**
 * Use homepage experiment CTA copy for buttons that historically used {@link SHORT_START_BUILDING_LABEL}.
 */
export function heroCtaIfShortStartBuilding(staticLabel: string, heroCta: string): string {
    return staticLabel === SHORT_START_BUILDING_LABEL ? heroCta : staticLabel;
}

/** Query overrides for marketing hero experiments (Statsig parity for local QA). */

export const HERO_LAYOUT_QUERY_KEY = 'hero_layout';
export const HERO_SUBTITLE_QUERY_KEY = 'hero_subtitle';
export const HERO_TITLE_QUERY_KEY = 'hero_title';
export const HERO_CTA_QUERY_KEY = 'hero_cta';

const MAX_SUBTITLE_LEN = 560;
const MAX_TITLE_LEN = 160;
const MAX_CTA_LEN = 100;

/**
 * Same rules as `hero_subtitle` URL overrides: collapse whitespace, trim, max length.
 * Use for `best_title` experiment `description` param from Statsig (server or client).
 */
export function normalizeHeroSubtitle(raw: unknown, fallback: string): string {
    if (typeof raw !== 'string') return fallback;
    const t = raw.replace(/\s+/g, ' ').trim();
    if (t.length === 0) return fallback;
    return t.length > MAX_SUBTITLE_LEN ? t.slice(0, MAX_SUBTITLE_LEN) : t;
}

/** Hero headline - same clamp as `hero_title` URL override; used for `best_title` experiment `title` param. */
export function normalizeHeroTitle(raw: unknown, fallback: string): string {
    if (typeof raw !== 'string') return fallback;
    const t = raw.replace(/\s+/g, ' ').trim();
    if (t.length === 0) return fallback;
    return t.length > MAX_TITLE_LEN ? t.slice(0, MAX_TITLE_LEN) : t;
}

/** Short button label - used for `best_cta` / `hero_cta` query override. */
export function normalizeHeroCta(raw: unknown, fallback: string): string {
    if (typeof raw !== 'string') return fallback;
    const t = raw.replace(/\s+/g, ' ').trim();
    if (t.length === 0) return fallback;
    return t.length > MAX_CTA_LEN ? t.slice(0, MAX_CTA_LEN) : t;
}

export type HeroQueryBaseline = {
    heroLayout: HeroLayoutVariant;
    heroSubtitle: string;
    heroTitle: string;
    heroCta: string;
};

export type HeroQueryResolved = HeroQueryBaseline;

export function hasHeroExperimentQueryOverrides(params: URLSearchParams): boolean {
    return (
        params.has(HERO_LAYOUT_QUERY_KEY) ||
        params.has(HERO_SUBTITLE_QUERY_KEY) ||
        params.has(HERO_TITLE_QUERY_KEY) ||
        params.has(HERO_CTA_QUERY_KEY)
    );
}

/**
 * Applies `hero_layout`, `hero_subtitle`, `hero_title`, and `hero_cta` search params when present.
 * Values are clamped; unknown `hero_layout` values keep the baseline layout.
 */
export function resolveHeroQueryOverrides(
    params: URLSearchParams,
    baseline: HeroQueryBaseline
): HeroQueryResolved {
    return {
        heroLayout: readHeroLayoutOverride(params, baseline.heroLayout),
        heroSubtitle: readHeroSubtitleOverride(params, baseline.heroSubtitle),
        heroTitle: readHeroTitleOverride(params, baseline.heroTitle),
        heroCta: readHeroCtaOverride(params, baseline.heroCta)
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
    return normalizeHeroSubtitle(raw, fallback);
}

function readHeroTitleOverride(params: URLSearchParams, fallback: string): string {
    if (!params.has(HERO_TITLE_QUERY_KEY)) return fallback;
    const raw = params.get(HERO_TITLE_QUERY_KEY);
    if (raw == null) return fallback;
    return normalizeHeroTitle(raw, fallback);
}

function readHeroCtaOverride(params: URLSearchParams, fallback: string): string {
    if (!params.has(HERO_CTA_QUERY_KEY)) return fallback;
    const raw = params.get(HERO_CTA_QUERY_KEY);
    if (raw == null) return fallback;
    return normalizeHeroCta(raw, fallback);
}
