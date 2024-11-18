import { posthog } from '$lib/system';

export const load = async () => {
    let ctaText = 'No variant';
    try {
        const distinctId = 'placeholder-user-id2';
        const enabledVariant = await posthog.getFeatureFlag('homepage_test', distinctId);
        if (enabledVariant === 'control') {
            ctaText = 'Control Variant';
        } else if (enabledVariant === 'test') {
            ctaText = 'Test Variant';
        }
    } catch (error) {
        ctaText = 'Error';
        console.error('Error fetching feature flag', error);
    }
    return { ctaText };
};
