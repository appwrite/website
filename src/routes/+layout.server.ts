import posthog from 'posthog-js';
import { browser } from '$app/environment';
import crypto from 'crypto';

import { posthog as posthogServer } from '$lib/system';

import { getAllChangelogEntries } from './changelog/utils';
import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';
export const prerender = true;
export const trailingSlash = 'never';

export const load = async ({ request, getClientAddress }) => {
    const clientAddress = getClientAddress();
    const headers = Object.fromEntries(request.headers);
    const fingerprintData = {
        ip: clientAddress,
        userAgent: headers['user-agent'],
        acceptLanguage: headers['accept-language'],
        platform: headers['sec-ch-ua-platform'],
        mobile: headers['sec-ch-ua-mobile'],
        browserBrand: headers['sec-ch-ua']
    };

    const distinctId = crypto
        .createHash('sha256')
        .update(JSON.stringify(fingerprintData))
        .digest('hex');

    let isHeaderExperiment: boolean = false;

    if (browser) {
        posthog.init(PUBLIC_POSTHOG_API_KEY, {
            api_host: 'https://eu.i.posthog.com',
            person_profiles: 'identified_only'
        });
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
