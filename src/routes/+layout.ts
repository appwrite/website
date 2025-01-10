import { getAllChangelogEntries } from './changelog/utils';
import { browser } from '$app/environment';
import posthog from 'posthog-js';
import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';
import fpPromise from '@fingerprintjs/fingerprintjs';
import { isHeaderExperiment } from '$lib/experiments';
import { get } from 'svelte/store';

export const prerender = true;
export const trailingSlash = 'never';

export const load = async () => {
    if (browser) {
        const fp = await fpPromise.load();
        const { visitorId: distinct_id } = await fp.get();

        posthog.init(PUBLIC_POSTHOG_API_KEY, {
            api_host: 'https://eu.i.posthog.com',
            persistence: 'memory',
            bootstrap: {
                distinctID: distinct_id,
                featureFlags: {
                    'sticky-navigation_ab-test': 'sticky-nav'
                }
            }
        });
        posthog.identify(distinct_id);

        posthog.onFeatureFlags(() => {
            const stickyNavVariant = posthog.getFeatureFlag('sticky-navigation_ab-test');

            if (stickyNavVariant === 'sticky-nav') {
                isHeaderExperiment.set({
                    isEnabled: true,
                    isInitialized: get(isHeaderExperiment).isInitialized
                });
            } else {
                isHeaderExperiment.set({
                    isEnabled: false,
                    isInitialized: get(isHeaderExperiment).isInitialized
                });
            }
        });
    }

    return {
        changelogEntries: (await getAllChangelogEntries()).length
    };
};
