import {
    STATSIG_STABLE_ID_KEY,
    DEFAULT_HERO_SUBTITLE,
    DEFAULT_HERO_TITLE
} from '$lib/statsig/constants';
import { resolveHeroQueryOverrides } from '$lib/statsig/hero-query-overrides';
import { building } from '$app/environment';
import {
    evaluateHeroDescriptionExperiment,
    evaluateHeroLayoutExperiment,
    getStatsigClientBootstrapPayload
} from '$lib/statsig/hero-statsig.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies, request, url }) => {
    let stableId = cookies.get(STATSIG_STABLE_ID_KEY);
    if (!stableId) {
        stableId = crypto.randomUUID();
        cookies.set(STATSIG_STABLE_ID_KEY, stableId, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365,
            sameSite: 'lax',
            httpOnly: false, // intentional: client JS reads this cookie to sync SSR and browser experiment assignments
            secure: url.protocol === 'https:'
        });
    }

    const userAgent = request.headers.get('user-agent') ?? undefined;
    // JS SDK generates its own stableID unless customIDs.stableID is set; bootstrap must use the same shape as the browser client.
    const user = {
        userID: stableId,
        customIDs: { stableID: stableId },
        ...(userAgent ? { userAgent } : {})
    };

    const [heroSubtitleBase, heroLayoutBase, statsigBootstrap] = await Promise.all([
        evaluateHeroDescriptionExperiment(user, DEFAULT_HERO_SUBTITLE),
        evaluateHeroLayoutExperiment(user, 0),
        getStatsigClientBootstrapPayload(user)
    ]);

    // `url.searchParams` is unavailable while prerendering (`+page.ts` has `prerender = true`).
    // Query overrides still apply in the browser via `hero.svelte` + `page.url.searchParams`.
    const heroQueryParams = building ? new URLSearchParams() : url.searchParams;
    const { heroSubtitle, heroLayout, heroTitle } = resolveHeroQueryOverrides(heroQueryParams, {
        heroLayout: heroLayoutBase,
        heroSubtitle: heroSubtitleBase,
        heroTitle: DEFAULT_HERO_TITLE
    });

    return {
        heroSubtitle,
        heroLayout,
        heroTitle,
        statsigBootstrap,
        /** Same value as `STATSIG_STABLE_ID_KEY` cookie — pass to client init to avoid bootstrap / stableID mismatch. */
        statsigStableUserId: stableId,
        /** Must match `user` passed to `getClientInitializeResponse` or the JS SDK warns about bootstrap user mismatch. */
        statsigUserAgent: userAgent ?? null
    };
};
