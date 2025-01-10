import { posthog } from 'posthog-js';
import { writable } from 'svelte/store';

export const experiments = {
    'sticky-navigation_ab-test': 'sticky-navigation_ab-test'
} as const;

export const getFeatureFlag = (key: keyof typeof experiments) => {
    return posthog.getFeatureFlag(key);
};

export const isHeaderExperiment = writable<{ isEnabled: boolean; isInitialized: boolean }>({
    isEnabled: false,
    isInitialized: false
});
