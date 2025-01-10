import { posthog } from 'posthog-js';

export const experiments = {
    'sticky-navigation_ab-test': 'sticky-navigation_ab-test'
} as const;

export const getFeatureFlag = (key: keyof typeof experiments) => {
    return posthog.getFeatureFlag(key);
};
