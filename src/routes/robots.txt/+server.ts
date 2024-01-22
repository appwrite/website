import type { RequestHandler } from "@sveltejs/kit";

export const prerender = true;

const follow = `# robotstxt.org/
User-agent: *`;

const nofollow = `# robotstxt.org/
User-agent: * 
Disallow: /`;

export const GET:RequestHandler = ({url}) => {
  const h = url.hostname.split('.')[0];

  
  return new Response(
    h === 'www' || h === 'appwrite' ? follow : nofollow
  );
}