import posthog from 'posthog-js';
import { browser } from '$app/environment';

import { posthog as posthogServer } from '$lib/system';

import { getAllChangelogEntries } from './changelog/utils';
import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';
import { getUser } from './init/helpers';

export const prerender = true;
export const trailingSlash = 'never';

export const load = async ({ cookies }) => {
    const posthogCookie = cookies.get(`ph_${PUBLIC_POSTHOG_API_KEY}_posthog`);
    let distinctId: string = 'jesse@appwrite.io';
    let isHeaderExperiment: boolean = false;

    const user = await getUser();

    if (browser) {
        posthog.init(PUBLIC_POSTHOG_API_KEY, {
            api_host: 'https://eu.i.posthog.com',
            person_profiles: 'identified_only'
        });
    }

    if (user.appwrite) {
        distinctId = user.appwrite.email;
    } else if (posthogCookie) {
        const { distinct_id } = JSON.parse(posthogCookie);
        distinctId = distinct_id;
    }

    try {
        const enabledVariant = await posthogServer.getFeatureFlag(
            'sticky-navigation_ab-test',
            distinctId
        );

        if (enabledVariant === 'control') return;

        if (enabledVariant === 'sticky-nav') {
            isHeaderExperiment = true;
        }
    } catch (error) {
        console.error('Error fetching feature flag', error);
    }

    return {
        isHeaderExperiment,
        changelogEntries: (await getAllChangelogEntries()).length
    };
};
