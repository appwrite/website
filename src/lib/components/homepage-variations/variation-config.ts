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

// Predefined configurations for common variations
export const variationConfigs: Record<string, HomepageVariationConfig> = {
    'all-in-one-cloud': {
        title: 'All-in-One Cloud Platform',
        subtitle:
            'Appwrite Cloud provides everything you need to build, deploy, and scale your applications. From backend infrastructure to web hosting, all in one powerful platform.',
        pageTitle: 'Appwrite - All-in-One Cloud Platform',
        slug: '/all-in-one-cloud',
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
    },
    'supabase-alternative': {
        title: 'Open-source Supabase Alternative',
        subtitle:
            'Appwrite is a truly open-source, all-in-one development platform that offers backend infrastructure and web hosting from a single place.',
        pageTitle: 'Appwrite - Open-source Supabase Alternative',
        slug: '/supabase-alternative',
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
    },
    'firebase-alternative': {
        title: 'Open-source Firebase Alternative',
        subtitle:
            'Appwrite is a truly open-source, all-in-one development platform that offers backend infrastructure and web hosting from a single place.',
        pageTitle: 'Appwrite - Open-source Firebase Alternative',
        slug: '/firebase-alternative',
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
    },
    'all-in-one-development': {
        title: 'All-in-one Development Platform',
        subtitle:
            'Appwrite is an all-in-one development platform that offers backend infrastructure and web hosting from a single place. Open-source and no vendor lock-in.',
        pageTitle: 'Appwrite - All-in-one Development Platform',
        slug: '/all-in-one-development',
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
    },
    'all-in-one-cloud-offer': {
        title: 'All-in-one Cloud Platform',
        subtitle:
            'Appwrite is an all-in-one development platform that offers backend infrastructure and web hosting from a single place. Open-source and no vendor lock-in.',
        pageTitle: 'Appwrite - All-in-one Cloud Platform',
        slug: '/all-in-one-cloud-offer',
        ctaLabel: 'Claim your $300 Credits',
        ctaHref: 'https://cloud.appwrite.io/console/login?code=sites300',
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
    }
};

export function getVariationConfig(name: string): HomepageVariationConfig {
    return variationConfigs[name];
}
