import { browser } from '$app/environment';
import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';
import posthog from 'posthog-js';

export const load = async ({ data }) => {
    if (browser && PUBLIC_POSTHOG_API_KEY) {
        posthog.init(PUBLIC_POSTHOG_API_KEY, {
            api_host: 'https://eu.i.posthog.com',
            persistence: 'memory',
            bootstrap: {
                distinctID: data.distinctId
            }
        });
    }

    return data;
};
