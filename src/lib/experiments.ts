import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';
import { PostHog } from 'posthog-node';

export const posthogServerClient = new PostHog(PUBLIC_POSTHOG_API_KEY, {
    host: 'https://eu.i.posthog.com',
    persistence: 'memory'
});

export const experiments = {
    'sticky-navigation_ab-test': ['control', 'sticky-nav']
} as const;

type Key = keyof typeof experiments;

export const isFlagEqualTo = <K extends Key>(
    variant: (typeof experiments)[K][number],
    currentVariant?: string | boolean
) => {
    return currentVariant === variant;
};

export const getFeatureFlag = async <K extends Key>(
    key: Key,
    variant: (typeof experiments)[K][number],
    distinctId: string
) => {
    const flagData = await posthogServerClient.getFeatureFlag(key, distinctId);

    return isFlagEqualTo(variant, flagData);
};
