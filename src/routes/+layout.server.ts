import { getAllChangelogEntries } from './changelog/utils';

export const trailingSlash = 'never';

export const load = async ({ cookies, url, request }) => {
    const source = cookies.get('source');
    let sources = source ? decodeURIComponent(source).split(',') : [];

    const searchParams = url.searchParams;
    const headers = request.headers;

    // Retrieve referer header
    const referer = headers.get('referer');
    if (referer) {
        sources.push(`referer=${referer}`);
    }

    // Retrieve 'ref' parameter and UTM parameters
    const ref = searchParams.get('ref');
    const utm_source = searchParams.get('utm_source');
    const utm_medium = searchParams.get('utm_medium');
    const utm_campaign = searchParams.get('utm_campaign');

    if (ref) sources.push(`ref=${ref}`);
    if (utm_source) sources.push(`utm_source=${utm_source}`);
    if (utm_medium) sources.push(`utm_medium=${utm_medium}`);
    if (utm_campaign) sources.push(`utm_campaign=${utm_campaign}`);

    // Remove duplicates and encode the sources array
    sources = [...new Set(sources)];
    const encodedSources = encodeURIComponent(sources.join(','));

    cookies.set('source', encodedSources, {
        path: '/',
        domain: '.appwrite.io',
        httpOnly: true,
        secure: true,
        sameSite: 'lax'
    });
    return {
        changelogEntries: (await getAllChangelogEntries()).length
    };
};
