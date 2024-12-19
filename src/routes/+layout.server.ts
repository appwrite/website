import posthog from 'posthog-js';
import { browser } from '$app/environment';

import { getAllChangelogEntries } from './changelog/utils';
import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';

export const prerender = true;
export const trailingSlash = 'never';

export const load = async () => {
    if (browser) {
        posthog.init(PUBLIC_POSTHOG_API_KEY, {
            api_host: 'https://us.i.posthog.com',
            person_profiles: 'identified_only'
        });
    }

    return {
        changelogEntries: (await getAllChangelogEntries()).length
    };
};
