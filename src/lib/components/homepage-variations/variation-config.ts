export interface HomepageVariationConfig {
    title: string;
    subtitle: string;
    pageTitle: string;
    slug?: string;
    ctaLabel?: string;
    ctaHref?: string;
    showDashboard?: boolean;
    showPlatforms?: boolean;
    showLogoList?: boolean;
    showBento?: boolean;
    showPullquote?: boolean;
    showCaseStudies?: boolean;
    showFeatures?: boolean;
    showMap?: boolean;
    showScale?: boolean;
    showPricing?: boolean;
}

export type VariationKey =
    | 'all-in-one-cloud'
    | 'supabase-alternative'
    | 'firebase-alternative'
    | 'all-in-one-development'
    | 'all-in-one-cloud-offer';

const baseConfig: Partial<HomepageVariationConfig> = {
    showDashboard: true,
    showPlatforms: true,
    showLogoList: true,
    showBento: true,
    showPullquote: true,
    showCaseStudies: true,
    showFeatures: true,
    showMap: true,
    showScale: true,
    showPricing: true
};

// Predefined configurations for common variations
export const variationConfigs: Record<VariationKey, HomepageVariationConfig> = {
    'all-in-one-cloud': {
        title: 'All-in-One Cloud Platform',
        subtitle:
            'Appwrite Cloud provides everything you need to build, deploy, and scale your applications. From backend infrastructure to web hosting, all in one powerful platform.',
        pageTitle: 'Appwrite - All-in-One Cloud Platform',
        slug: '/all-in-one-cloud',
        ...baseConfig
    },
    'supabase-alternative': {
        title: 'Open-source Supabase Alternative',
        subtitle:
            'Appwrite is a truly open-source, all-in-one development platform that offers backend infrastructure and web hosting from a single place.',
        pageTitle: 'Appwrite - Open-source Supabase Alternative',
        slug: '/supabase-alternative',
        ...baseConfig
    },
    'firebase-alternative': {
        title: 'Open-source Firebase Alternative',
        subtitle:
            'Appwrite is a truly open-source, all-in-one development platform that offers backend infrastructure and web hosting from a single place.',
        pageTitle: 'Appwrite - Open-source Firebase Alternative',
        slug: '/firebase-alternative',
        ...baseConfig
    },
    'all-in-one-development': {
        title: 'All-in-one Development Platform',
        subtitle:
            'Appwrite is an all-in-one development platform that offers backend infrastructure and web hosting from a single place. Open-source and no vendor lock-in.',
        pageTitle: 'Appwrite - All-in-one Development Platform',
        slug: '/all-in-one-development',
        ...baseConfig
    },
    'all-in-one-cloud-offer': {
        title: 'All-in-one Cloud Platform',
        subtitle:
            'Appwrite is an all-in-one development platform that offers backend infrastructure and web hosting from a single place. Open-source and no vendor lock-in.',
        pageTitle: 'Appwrite - All-in-one Cloud Platform',
        slug: '/all-in-one-cloud-offer',
        ctaLabel: 'Claim your $300 Credits',
        ctaHref: 'https://cloud.appwrite.io/console/login?code=sites300',
        ...baseConfig
    }
};

export function getVariationConfig(name: VariationKey): HomepageVariationConfig {
    return variationConfigs[name];
}
