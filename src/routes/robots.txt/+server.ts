import type { RequestHandler } from "@sveltejs/kit";

const follow = `# robotstxt.org/
User-agent: *`;

const nofollow = `# robotstxt.org/
User-agent: * 
Disallow: /`;

export const GET:RequestHandler = ({url}) => {
  return new Response(
    url.hostname === 'appwrite.io'  ? follow : nofollow
  );
}