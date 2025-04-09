import { Analytics, type AnalyticsPlugin } from 'analytics';
import Plausible from 'plausible-tracker';
import posthogEvent from 'posthog-js';
import { get } from 'svelte/store';
import { page } from '$app/stores';

import { ENV } from '$lib/system';
import { browser } from '$app/environment';

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

export type TrackEventArgs = {
    plausible?: { name: string; data?: object };
    posthog?: { name: string };
};

export const trackEvent = async (platforms: TrackEventArgs) => {
    if (!isTrackingAllowed()) {
        return;
    }

    const currentPage = get(page);
    const path = currentPage.route.id ?? '';

    if (ENV.DEV || ENV.PREVIEW) {
        console.log(`[Analytics] Event`, platforms.plausible, platforms.posthog);
    } else {
        if (platforms.plausible) {
            await analytics.track(platforms.plausible.name, { ...platforms.plausible.data, path });
        }

        if (platforms.posthog) {
            posthogEvent.capture(platforms.posthog.name);
        }
    }
};

export const isTrackingAllowed = () => !ENV.TEST;
