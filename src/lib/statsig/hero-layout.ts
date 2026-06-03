/** `hero_layout` experiment: `0` aside dashboard, `1` bottom + multi-line title, `2` bottom + single-line title. */
export type HeroLayoutVariant = 0 | 1 | 2;

export function normalizeHeroLayout(raw: unknown, fallback: HeroLayoutVariant): HeroLayoutVariant {
    if (typeof raw === 'number' && Number.isFinite(raw)) {
        const r = Math.round(raw);
        if (r === 0 || r === 1 || r === 2) {
            return r as HeroLayoutVariant;
        }
    }
    const n = parseInt(String(raw).trim(), 10);
    if (n === 0 || n === 1 || n === 2) {
        return n;
    }
    return fallback;
}
