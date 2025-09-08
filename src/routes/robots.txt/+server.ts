import type { RequestHandler } from '@sveltejs/kit';

const follow = `# robotstxt.org/
User-agent: *`;

const nofollow = `# robotstxt.org/
User-agent: * 
Disallow: /`;

const sitemap = `Sitemap: https://appwrite.io/sitemap.xml`;

export const GET: RequestHandler = ({ url }) => {
    const hostname: string = url.hostname;
    const allowedHosts: string[] = ['www.appwrite.io', 'appwrite.io'];

    return new Response((allowedHosts.includes(hostname) ? follow : nofollow) + '\n' + sitemap);
};
