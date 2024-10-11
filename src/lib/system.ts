import { dev } from '$app/environment';
import { env } from '$env/dynamic/public';

export const VARS = {
    GROWTH_ENDPOINT: env.PUBLIC_GROWTH_ENDPOINT ?? undefined
};

export const ENV = {
    DEV: dev,
    PROD: !dev,
    PREVIEW: import.meta.env?.VERCEL === '1',
    TEST: !!import.meta.env?.VITEST
};
