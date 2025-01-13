import { getAllChangelogEntries } from './changelog/utils';
import { browser } from '$app/environment';
import posthog from 'posthog-js';
import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';
import fpPromise from '@fingerprintjs/fingerprintjs';

export const prerender = true;
export const trailingSlash = 'never';

export const load = async () => {
    if (browser && PUBLIC_POSTHOG_API_KEY) {
        const fp = await fpPromise.load();
        const { visitorId: distinct_id } = await fp.get();
        posthog.init(PUBLIC_POSTHOG_API_KEY, {
            api_host: 'https://eu.i.posthog.com',
            person_profiles: 'always',
            persistence: 'memory'
        });

        posthog.identify(distinct_id);
    }

    return {
        changelogEntries: (await getAllChangelogEntries()).length
    };
};
