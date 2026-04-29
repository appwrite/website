/** `hero_layout` experiment: `0` aside dashboard, `1` bottom + multi-line title, `2` bottom + single-line title. */
export type HeroLayoutVariant = 0 | 1 | 2;

export function normalizeHeroLayout(raw: unknown, fallback: HeroLayoutVariant): HeroLayoutVariant {
    if (typeof raw === 'number' && (raw === 0 || raw === 1 || raw === 2)) {
        return raw;
    }
    const n = parseInt(String(raw).trim(), 10);
    if (n === 0 || n === 1 || n === 2) {
        return n;
    }
    return fallback;
}
