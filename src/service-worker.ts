/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const EXCEPTIONS = [
  '/images/blog',
  '/assets.zip'
]

const ASSETS = [
    ...build, // the app itself
    ...files // everything in `static`
].filter(file => !EXCEPTIONS.some(e => file.startsWith(e)));

const sw = self as unknown as ServiceWorkerGlobalScope;

sw.addEventListener('install', (event) => {
    // Create a new cache and add all files to it
    async function addFilesToCache() {
        const cache = await caches.open(CACHE);
        await cache.addAll(ASSETS);
    }

    event.waitUntil(addFilesToCache());
});

sw.addEventListener('activate', (event) => {
    // Remove previous cached data from disk
    async function deleteOldCaches() {
        for (const key of await caches.keys()) {
            if (key !== CACHE) await caches.delete(key);
        }
    }

    event.waitUntil(deleteOldCaches());
});

sw.addEventListener('fetch', async (event) => {
    // ignore POST requests etc
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    // ignore requests from protocols like chrome-extension
    if (!url.protocol.startsWith('http')) return;

    async function respond(url: URL): Promise<Response> {
        const cache = await caches.open(CACHE);

        if (url.protocol)
            if (ASSETS.includes(url.pathname)) {
                // `build`/`files` can always be served from the cache
                return cache.match(url.pathname) as Promise<Response>;
            }

        // for everything else, try the network first, but
        // fall back to the cache if we're offline
        try {
            const response = await fetch(event.request);

            if (response.status === 200) {
                cache.put(event.request, response.clone());
            }

            return response;
        } catch (error) {
            const match = await cache.match(event.request);

            if (!match) throw error;

            return match;
        }
    }

    event.respondWith(respond(url));
});
