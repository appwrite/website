import { dev } from '$app/environment';
import { PUBLIC_GROWTH_ENDPOINT, PUBLIC_POSTHOG_API_KEY } from '$env/static/public';
import { PostHog } from 'posthog-node';

export const VARS = {
    GROWTH_ENDPOINT: PUBLIC_GROWTH_ENDPOINT ?? undefined
};

export const ENV = {
    DEV: dev,
    PROD: !dev,
    PREVIEW: import.meta.env?.VERCEL === '1',
    TEST: !!import.meta.env?.VITEST
};

export const posthog = new PostHog(PUBLIC_POSTHOG_API_KEY, {
    host: 'https://us.i.posthog.com'
});
