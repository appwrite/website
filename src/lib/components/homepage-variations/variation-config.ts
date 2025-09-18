export interface HomepageVariationConfig {
    title: string;
    subtitle: string;
    pageTitle: string;
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
