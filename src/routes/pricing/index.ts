export type SupportFeatureKeys =
    | 'response'
    | 'resolutionTime'
    | 'availability'
    | 'channels'
    | 'agents';

export const supportFeatureKeyValues = [
    { key: 'response', label: 'Response time' },
    { key: 'resolutionTime', label: 'Resolution time' },
    { key: 'availability', label: 'Availability' },
    { key: 'channels', label: 'Support channels' },
    { key: 'agents', label: 'Support agents' }
];

type SupportHeader = { title: string; price: string; button: string; href: string };
export type SupportFeature = {
    [K in SupportFeatureKeys]: string;
};

export const supportOptions: Array<{
    key: string;
    header: SupportHeader;
    features: SupportFeature;
}> = [
    {
        key: 'basic',
        header: {
            title: 'Basic',
            price: '$50/month',
            button: 'secondary',
            href: '/contact-us/premium-support?supportTier=basic'
        },
        features: {
            response: '7 days',
            resolutionTime: '7 days',
            availability: '-',
            channels: 'email',
            agents: 'Community'
        }
    },
    {
        key: 'standard',
        header: {
            title: 'Standard',
            price: '$99/month',
            button: 'primary',
            href: '/contact-us/premium-support?supportTier=standard'
        },
        features: {
            response: '2 days',
            resolutionTime: '2 days',
            availability: '24/5',
            channels: 'email, chat',
            agents: 'Random agent'
        }
    },
    {
        key: 'premium',
        header: {
            title: 'Premium',
            price: '$999/month',
            button: 'secondary',
            href: '/contact-us/premium-support?supportTier=premium'
        },
        features: {
            response: '1 days',
            resolutionTime: '1 days',
            availability: '24/7',
            channels: 'email, chat, phone',
            agents: 'Dedicated agent'
        }
    }
];
