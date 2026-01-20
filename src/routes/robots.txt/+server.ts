import type { RequestHandler } from '@sveltejs/kit';

const follow = `# robotstxt.org/
User-agent: *

# Block tracking parameters to avoid duplicate indexing
Disallow: /*?utm_source=
Disallow: /*?utm_medium=
Disallow: /*?utm_campaign=
Disallow: /*?utm_term=
Disallow: /*?utm_content=
Disallow: /*?utm_
Disallow: /*?ref=
Disallow: /*?adobe_mc=
Disallow: /*?trk=
Disallow: /*&utm_
Disallow: /*&ref=
Disallow: /*&adobe_mc=
Disallow: /*&trk=

# Block internal/auth pages
Disallow: /console/login
Disallow: /console/register
Disallow: /v1/

# Block old docs versions (canonical is 1.8.x)
Disallow: /docs/references/1.7.x/
Disallow: /docs/references/1.6.x/
Disallow: /docs/references/1.5.x/
Disallow: /docs/references/1.4.x/
Disallow: /docs/references/1.3.x/
Disallow: /docs/references/1.2.x/
Disallow: /docs/references/1.1.x/
Disallow: /docs/references/1.0.x/
Disallow: /docs/references/0.15.x/`;

const nofollow = `# robotstxt.org/
User-agent: * 
Disallow: /`;

const sitemap = `Sitemap: https://appwrite.io/sitemap.xml`;

export const GET: RequestHandler = ({ url }) => {
    const hostname: string = url.hostname;
    const allowedHosts: string[] = ['www.appwrite.io', 'appwrite.io'];

    return new Response((allowedHosts.includes(hostname) ? follow : nofollow) + '\n' + sitemap);
};
