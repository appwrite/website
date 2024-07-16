import type { RequestHandler } from "@sveltejs/kit";

const follow = `# robotstxt.org/
User-agent: *`;

const nofollow = `# robotstxt.org/
User-agent: * 
Disallow: /`;

export const GET:RequestHandler = ({url}) => {
  const hostname: string = url.hostname;
  return new Response(
    (hostname === 'www.appwrite.io' || hostname === 'appwrite.io')  ? follow : nofollow
  );
}