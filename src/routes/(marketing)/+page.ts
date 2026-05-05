import type { PageLoad } from './$types';

export const prerender = false;

/**
 * Runs after `+page.server.ts` merges into `data` and before the page renders. The marketing hero
 * reads `heroTitle`, `heroSubtitle`, `heroLayout`, and `heroCta` from `page.data` only (no duplicate state in
 * `onMount`) so SSR / prerender and the first client paint stay aligned.
 */
export const load: PageLoad = async ({ data }) => {
    return {
        heroTitle: data.heroTitle,
        heroSubtitle: data.heroSubtitle,
        heroLayout: data.heroLayout,
        heroCta: data.heroCta
    };
};
