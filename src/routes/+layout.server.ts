import crypto from 'node:crypto';

import { getAllChangelogEntries } from './changelog/utils';

export const trailingSlash = 'never';

const generateDistinctId = (request: Request, clientAddress?: string) => {
    const headers = Object.fromEntries(request.headers);

    const identifiers = [
        clientAddress || 'unknown-ip',
        headers['user-agent'] || 'unknown-ua',

        !clientAddress ? Math.random().toString() : '',
        request.headers.get('cookie')?.match(/sessionid=([^;]+)/)?.[1] || ''
    ].join('|');

    return crypto.createHash('sha256').update(identifiers).digest('hex');
};

export const load = async ({ request, getClientAddress }) => {
    const distinctId = generateDistinctId(request, getClientAddress());
    // const ctaVariant = await posthogServerClient?.getFeatureFlag('cta-copy_ab-test', distinctId);

    console.log('distinctId', distinctId);

    return {
        distinctId,
        changelogEntries: (await getAllChangelogEntries()).length
    };
};
