import { page } from '$app/state';
import { ENV } from '$lib/system';
import { browser } from '$app/environment';

import posthogEvent from 'posthog-js';
import Plausible from 'plausible-tracker';
import { Analytics, type AnalyticsPlugin } from 'analytics';

type Payload = {
    payload: {
        event: string;
        properties: {
            path: string;
            referrer: string;
            width: number;
        };
    };
};

const plausible = (domain: string): AnalyticsPlugin => {
    if (!browser) return { name: 'analytics-plugin-plausible' };

    const instance = Plausible({
        domain
    });

    return {
        name: 'analytics-plugin-plausible',
        page: ({ payload }: Payload) => {
            instance.trackPageview({
                url: payload.properties.path,
                referrer: payload.properties.referrer,
                deviceWidth: payload.properties.width
            });
        },
        track: ({ payload }: Payload) => {
            instance.trackEvent(
                payload.event,
                {
                    props: payload.properties
                },
                {
                    url: payload.properties.path,
                    deviceWidth: payload.properties.width
                }
            );
        },
        loaded: () => true
    };
};

const analytics = Analytics({
    app: 'appwrite',
    plugins: [plausible('appwrite.io')]
});

export type TrackEventArgs = { name: string; data?: object };

export const trackEvent = (eventArgs?: string | TrackEventArgs): void => {
    if (!eventArgs || ENV.TEST) return;

    const path = page.route.id?.replace(/\(([^()]*)\)/g, '') ?? '';
    console.log(path);
    const name = typeof eventArgs === 'string' ? eventArgs : eventArgs.name;
    const data = typeof eventArgs === 'string' ? { path } : { ...eventArgs.data, path };

    if (ENV.DEV || ENV.PREVIEW) {
        console.log(`[Analytics] Event:`, name, data);
        return;
    }

    posthogEvent.capture(name, data);
    analytics.track(name, data).then();
};
