import { dev } from '$app/environment';
import { PUBLIC_GROWTH_ENDPOINT, PUBLIC_ARENA_ENDPOINT } from '$env/static/public';

export const VARS = {
    GROWTH_ENDPOINT: PUBLIC_GROWTH_ENDPOINT ?? undefined,
    ARENA_ENDPOINT: PUBLIC_ARENA_ENDPOINT ?? undefined
};

export const ENV = {
    DEV: dev,
    PROD: !dev,
    PREVIEW: import.meta.env?.VERCEL === '1',
    TEST: !!import.meta.env?.VITEST
};
