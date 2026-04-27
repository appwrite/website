import { STATSIG_STABLE_ID_KEY, DEFAULT_HERO_SUBTITLE } from '$lib/statsig/constants';
import { evaluateHeroDescriptionExperiment } from '$lib/statsig/hero-statsig.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies, request, url }) => {
    let stableId = cookies.get(STATSIG_STABLE_ID_KEY);
    if (!stableId) {
        stableId = crypto.randomUUID();
        cookies.set(STATSIG_STABLE_ID_KEY, stableId, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365,
            sameSite: 'lax',
            httpOnly: false,
            secure: url.protocol === 'https:'
        });
    }

    const userAgent = request.headers.get('user-agent') ?? undefined;
    const heroSubtitle = await evaluateHeroDescriptionExperiment(
        { userID: stableId, userAgent },
        DEFAULT_HERO_SUBTITLE
    );

    return { heroSubtitle };
};
