import { PostHog } from 'posthog-node';
import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';

export const posthog = new PostHog(PUBLIC_POSTHOG_API_KEY, {
    host: 'https://eu.i.posthog.com'
});

export const experiments = {
    'sticky-navigation_ab-test': 'sticky-navigation_ab-test'
} as const;

export const getFeatureFlag = async (key: keyof typeof experiments, distinctId: string) => {
    return await posthog.getFeatureFlag(key, distinctId);
};
