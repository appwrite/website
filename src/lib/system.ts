import { dev } from '$app/environment';
import * as publicEnv from '$env/static/public';

const optionalPublicEnv = publicEnv as typeof publicEnv & {
    PUBLIC_ARENA_ENDPOINT?: string;
};

export const VARS = {
    GROWTH_ENDPOINT: publicEnv.PUBLIC_GROWTH_ENDPOINT ?? undefined,
    ARENA_ENDPOINT: optionalPublicEnv.PUBLIC_ARENA_ENDPOINT ?? undefined
};

export const ENV = {
    DEV: dev,
    PROD: !dev,
    PREVIEW: import.meta.env?.VERCEL === '1',
    TEST: !!import.meta.env?.VITEST
};
