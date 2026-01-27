import type { RequestHandler } from '@sveltejs/kit';

const follow = `# robotstxt.org/
User-agent: *

# Block tracking parameters to avoid duplicate indexing
Disallow: /*?utm_
Disallow: /*&utm_
Disallow: /*?ref=
Disallow: /*&ref=
Disallow: /*?trk=
Disallow: /*&trk=
Disallow: /*?adobe_mc=
Disallow: /*&adobe_mc=

# Block internal/auth pages
Disallow: /console/login
Disallow: /console/register
Disallow: /v1/

# Block all versioned docs references
Disallow: /docs/references/*/

# Allow canonical cloud docs
Allow: /docs/references/cloud/`;

const nofollow = `# robotstxt.org/
User-agent: * 
Disallow: /`;

const sitemap = `Sitemap: https://appwrite.io/sitemap.xml`;

export const GET: RequestHandler = ({ url }) => {
    const hostname: string = url.hostname;
    const allowedHosts: string[] = ['www.appwrite.io', 'appwrite.io'];

    return new Response((allowedHosts.includes(hostname) ? follow : nofollow) + '\n' + sitemap);
};
