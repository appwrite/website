import { normalizeHeroLayout, type HeroLayoutVariant } from './hero-layout';

/**
 * Minimal shape shared by Statsig `Experiment` and `DynamicConfig` for reading typed params.
 * Used by the browser client type and by server-side evaluation objects.
 */
export type StatsigParamEvaluation = {
    get(key: string, defaultValue: string | number): string | number;
    value?: Record<string, unknown>;
};

export type StatsigLayoutReadSource = 'none' | 'get' | 'value' | 'dynamic';

const LAYOUT_PARAM_KEYS = ['layout', 'hero_layout', 'heroLayout'] as const;

/**
 * Numeric sentinel for `.get` — Statsig types `hero_layout` as number; a string default triggers SDK warnings.
 */
const LAYOUT_GET_SENTINEL = -999_999;

/**
 * Reads a 0|1|2 layout from one experiment/dynamic-config evaluation: try `.get` for common param
 * names, then `evaluation.value` (explicit-parameter / SDK quirks).
 */
export function readLayoutVariantFromStatsigEvaluation(
    evaluation: StatsigParamEvaluation,
    fallback: HeroLayoutVariant
): { layout: HeroLayoutVariant; source: StatsigLayoutReadSource } {
    for (const key of LAYOUT_PARAM_KEYS) {
        const raw = evaluation.get(key, LAYOUT_GET_SENTINEL);
        if (raw !== LAYOUT_GET_SENTINEL) {
            return { layout: normalizeHeroLayout(raw, fallback), source: 'get' };
        }
    }

    const record = evaluation.value;
    if (record && typeof record === 'object') {
        const map = record as Record<string, unknown>;
        for (const key of LAYOUT_PARAM_KEYS) {
            if (key in map) {
                const raw = map[key];
                if (raw !== undefined && raw !== null) {
                    return { layout: normalizeHeroLayout(raw, fallback), source: 'value' };
                }
            }
        }
    }

    return { layout: fallback, source: 'none' };
}

/** Browser Statsig client: `getExperiment` first, then optional `getDynamicConfig` with the same id. */
export type StatsigClientEvalSource = {
    getExperiment(name: string): StatsigParamEvaluation;
    getDynamicConfig?: (name: string, options?: object) => StatsigParamEvaluation;
};

export function readLayoutVariantFromStatsigClient(
    client: StatsigClientEvalSource,
    experimentOrConfigName: string,
    fallback: HeroLayoutVariant
): { layout: HeroLayoutVariant; source: StatsigLayoutReadSource } {
    let r = readLayoutVariantFromStatsigEvaluation(
        client.getExperiment(experimentOrConfigName),
        fallback
    );
    if (r.source !== 'none') {
        return r;
    }
    if (typeof client.getDynamicConfig === 'function') {
        r = readLayoutVariantFromStatsigEvaluation(
            client.getDynamicConfig(experimentOrConfigName),
            fallback
        );
        if (r.source !== 'none') {
            return { layout: r.layout, source: 'dynamic' };
        }
    }
    return { layout: fallback, source: 'none' };
}
