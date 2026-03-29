import { dev } from '$app/environment';
import { env as publicEnv } from '$env/dynamic/public';

export const VARS = {
    GROWTH_ENDPOINT: publicEnv.PUBLIC_GROWTH_ENDPOINT ?? undefined,
    ARENA_ENDPOINT: publicEnv.PUBLIC_ARENA_ENDPOINT ?? undefined
};

export const ENV = {
    DEV: dev,
    PROD: !dev,
    PREVIEW: import.meta.env?.VERCEL === '1',
    TEST: !!import.meta.env?.VITEST
};
