import { getAllChangelogEntries } from './changelog/utils';
import { browser } from '$app/environment';
import posthog from 'posthog-js';
import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';
//import fpPromise from '@fingerprintjs/fingerprintjs';

export const prerender = true;
export const trailingSlash = 'never';

export const load = async () => {
    if (browser) {
        //const fp = await fpPromise.load();
        //const { visitorId: distinct_id } = await fp.get();

        posthog.init(PUBLIC_POSTHOG_API_KEY, {
            api_host: 'https://eu.i.posthog.com',
            persistence: 'memory'
        });
        posthog.identify('jesse@appwrite.io');

        posthog.featureFlags.override({ 'sticky-navigation_ab-test': 'sticky-nav' });

        posthog.onFeatureFlags(() => {
            const stickyNavVariant = posthog.getFeatureFlag('sticky-navigation_ab-test');
            if (stickyNavVariant !== 'sticky-nav') {
                localStorage.setItem('variant', stickyNavVariant as string);
                document.body.dataset.isSticky = '';
            }
        });
    }

    return {
        changelogEntries: (await getAllChangelogEntries()).length
    };
};
