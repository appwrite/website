import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';
import { PostHog } from 'posthog-node';

export const posthogServerClient = PUBLIC_POSTHOG_API_KEY
    ? new PostHog(PUBLIC_POSTHOG_API_KEY, {
          host: 'https://eu.i.posthog.com',
          persistence: 'memory'
      })
    : null;

export const experiments = {
    'sticky-navigation_ab-test': ['control', 'sticky-nav'],
    'cta-copy_ab-test': ['control', 'start-for-free_variant', 'start-building_variant']
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
    /* experiments won't work on previews or on local if api key is not available */
    const flagData = (await posthogServerClient?.getFeatureFlag(key, distinctId)) ?? false;

    return isFlagEqualTo(variant, flagData);
};
