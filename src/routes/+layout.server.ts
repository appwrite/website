import crypto from 'node:crypto';
import { dev as isDevEnv } from '$app/environment';

import { posthogServerClient } from '$lib/experiments';
import { getAllChangelogEntries } from './changelog/utils';

export const trailingSlash = 'never';

const generateDistinctId = (fingerprintData: Record<string, string>) => {
    return crypto.createHash('sha256').update(JSON.stringify(fingerprintData)).digest('hex');
};

export const load = async ({ request, getClientAddress }) => {
    // use dummy IP in dev to avoid warnings — its harmless.
    const clientAddress = isDevEnv ? '127.0.0.1' : getClientAddress();

    const headers = Object.fromEntries(request.headers);
    const fingerprintData = {
        ip: clientAddress,
        userAgent: headers['user-agent'],
        acceptLanguage: headers['accept-language'],
        platform: headers['sec-ch-ua-platform'],
        mobile: headers['sec-ch-ua-mobile'],
        browserBrand: headers['sec-ch-ua']
    };

    const distinctId = generateDistinctId(fingerprintData);
    const ctaVariant = await posthogServerClient?.getFeatureFlag('cta-copy_ab-test', distinctId);

    const ctaCopy =
        ctaVariant === 'start-building_variant'
            ? 'Start building'
            : ctaVariant === 'start-for-free_variant'
              ? 'Start for free'
              : 'Get started';

    return {
        ctaCopy,
        distinctId,
        changelogEntries: (await getAllChangelogEntries()).length
    };
};
