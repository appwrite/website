/** Statsig hero must run in `+page.server.ts` per request (cookie + bootstrap). Prerendering `/` baked default layout/subtitle and the client overwrote them after `initializeAsync`, causing a visible flash. */
export const prerender = false;
