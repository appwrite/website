import type { RequestHandler } from './$types';
import { posts } from '../content';

export const prerender = true;

export const GET: RequestHandler = () => {
    const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Appwrite</title>
    <link>https://appwrite.io</link>
    <description>Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools.</description>
    ${posts.map((post) => `<item>
        <title>${post.title}</title>
        <pubDate>${post.date.toUTCString()}</pubDate>
        <link>https://appwrite.io${post.href}</link>
        <guid>https://appwrite.io${post.href}</guid>
        <description>${post.description}</description>
    </item>
    `).join('')}
  </channel>
</rss>`;

    return new Response(feed);
};
