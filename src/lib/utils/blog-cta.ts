import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

export type BlogCtaConfig = {
    heading: string;
    label: string;
    href: string;
    description: string;
    event?: string;
    points: [string, string, string, string];
};

type ResolverParams = {
    slug: string;
    rawContent?: string | null;
};

type CategoryResolver = (params: ResolverParams) => BlogCtaConfig;

export const DEFAULT_CTA_POINTS: [string, string, string, string] = [
    'Start for free',
    'Open source',
    'Support for over 13 SDKs',
    'Managed cloud solution'
] as const;

const DEVELOPERS_CLOUD_CTA: BlogCtaConfig = {
    heading: 'Build fast, scale faster',
    description: 'Backend infrastructure and web hosting built for developers who ship.',
    label: 'Start building for free',
    href: getAppwriteDashboardUrl(),
    event: 'blog-cta-cloud-btn-click',
    points: DEFAULT_CTA_POINTS
};

const STARTUPS_CTA: BlogCtaConfig = {
    heading: 'Build your startup with Appwrite',
    description: 'Backend infrastructure and hosting that grows with your startup.',
    label: 'Apply for the program',
    href: '/startups',
    event: 'blog-cta-startups-btn-click',
    points: ['Cloud credits', 'Priority support', 'Ship faster', 'Built-in security and compliance']
};

const AUTH_CTA: BlogCtaConfig = {
    heading: 'Customer identity without the hassle',
    description: 'Add secure authentication in minutes, not weeks.',
    label: 'Request a demo',
    href: 'https://appwrite.io/contact-us/enterprise',
    event: 'blog-cta-auth-demo-btn-click',
    points: [
        'Built-in security and compliance',
        'Multiple login methods',
        'Custom authentication flows',
        'Multi-factor authentication'
    ]
};

const SITES_CTA: BlogCtaConfig = {
    heading: 'Deploy in seconds, scale globally',
    description: 'Host your websites and web apps with zero infrastructure headaches.',
    label: 'Get started for free',
    href: getAppwriteDashboardUrl(),
    event: 'blog-cta-sites-btn-click',
    points: [
        'Open source and no vendor lock-in',
        'Built-in security and DDoS protection',
        'Fully managed cloud solution',
        'Global CDN for improved performance'
    ]
};

const CUSTOMER_STORIES_CTA: BlogCtaConfig = {
    heading: 'Join thousands of developers shipping faster',
    description: 'See how Appwrite can accelerate your development.',
    label: 'Start your project',
    href: getAppwriteDashboardUrl(),
    event: 'blog-cta-customer-stories-btn-click',
    points: DEFAULT_CTA_POINTS
};

const OPEN_SOURCE_CTA: BlogCtaConfig = {
    heading: 'Open source, built for developers',
    description: 'Self-host or use Appwrite Cloud. No vendor lock-in, ever.',
    label: 'Get started',
    href: getAppwriteDashboardUrl(),
    event: 'blog-cta-open-source-btn-click',
    points: [
        'Start for free',
        'Open source under BSD 3-Clause',
        'Self-hosting available',
        'Active community support'
    ]
};

const INTEGRATIONS_CTA: BlogCtaConfig = {
    heading: 'Build with your favorite tools',
    description: 'Appwrite works with the frameworks and platforms you already use.',
    label: 'Explore integrations',
    href: '/integrations',
    event: 'blog-cta-integrations-btn-click',
    points: [
        'Support for over 13 SDKs',
        'Works with any framework',
        'Pre-built integrations',
        'Extensible with Functions'
    ]
};

const CONTRIBUTORS_CTA: BlogCtaConfig = {
    heading: 'Join the Appwrite community',
    description: 'Contribute to open source and help shape the future of backend development.',
    label: 'Start contributing',
    href: 'https://github.com/appwrite/appwrite',
    event: 'blog-cta-contributors-btn-click',
    points: [
        'Open source and welcoming',
        'Active Discord community',
        'Contributor recognition',
        'Good first issues available'
    ]
};

const HACKATHON_CTA: BlogCtaConfig = {
    heading: 'Build something amazing',
    description: 'Ship your hackathon project faster with Appwrite.',
    label: 'Start building',
    href: getAppwriteDashboardUrl(),
    event: 'blog-cta-hackathon-btn-click',
    points: [
        'Free to start',
        'Deploy in minutes',
        'Backend ready out of the box',
        'Focus on your idea, not infrastructure'
    ]
};

const INIT_CTA: BlogCtaConfig = {
    heading: 'Experience Appwrite yourself',
    description: 'Join our community and stay updated on the latest releases.',
    label: 'Join the community',
    href: '/discord',
    event: 'blog-cta-init-btn-click',
    points: [
        'Active Discord server',
        'Product announcements',
        'Community events',
        'Get help from maintainers'
    ]
};

const DEBUGGING_CTA: BlogCtaConfig = {
    heading: 'Debug with confidence',
    description: 'Track executions, view logs, and identify issues in the Console.',
    label: 'Try Appwrite',
    href: getAppwriteDashboardUrl(),
    event: 'blog-cta-debugging-btn-click',
    points: [
        'Execution tracking and status',
        'Request and response logs',
        'Console output for SSR sites',
        'Custom function logging'
    ]
};

const DESIGN_CTA: BlogCtaConfig = {
    heading: 'Build beautiful apps faster',
    description: 'Focus on design while Appwrite handles your backend.',
    label: 'Start building',
    href: getAppwriteDashboardUrl(),
    event: 'blog-cta-design-btn-click',
    points: DEFAULT_CTA_POINTS
};

const categoryResolvers = new Map<string, BlogCtaConfig | CategoryResolver>([
    ['startup', STARTUPS_CTA],
    ['tutorial', DEVELOPERS_CLOUD_CTA],
    ['customer-stories', CUSTOMER_STORIES_CTA],
    ['security', AUTH_CTA],
    ['open-source', OPEN_SOURCE_CTA],
    ['integrations', INTEGRATIONS_CTA],
    ['devrel', DEVELOPERS_CLOUD_CTA],
    ['culture', DEVELOPERS_CLOUD_CTA],
    ['company', DEVELOPERS_CLOUD_CTA],
    ['contributors', CONTRIBUTORS_CTA],
    ['hackathon', HACKATHON_CTA],
    ['init', INIT_CTA],
    ['news', DEVELOPERS_CLOUD_CTA],
    ['gdpr', AUTH_CTA],
    ['accessibility', DEVELOPERS_CLOUD_CTA],
    ['design', DESIGN_CTA],
    ['debugging', DEBUGGING_CTA],
    ['sites', SITES_CTA]
]);

const PRODUCT_RESOLVER: CategoryResolver = ({ slug, rawContent }) => {
    const lowerSlug = slug.toLowerCase();
    const content = rawContent?.toLowerCase() ?? '';
    const mentionsSites =
        lowerSlug.includes('site') ||
        lowerSlug.includes('hosting') ||
        lowerSlug.includes('deploy') ||
        content.includes('appwrite sites');
    const mentionsAuth =
        content.includes('ciam') ||
        content.includes('auth ') ||
        content.includes('authentication') ||
        content.includes('sso') ||
        content.includes('/products/auth') ||
        content.includes('oauth');

    if (mentionsSites) {
        // Reuse canonical Sites CTA copy used across hosting posts
        return SITES_CTA;
    }
    if (mentionsAuth) {
        return AUTH_CTA;
    }

    return DEVELOPERS_CLOUD_CTA;
};

const FALLBACK_CTA = DEVELOPERS_CLOUD_CTA;

const ANNOUNCEMENT_PREFIXES = ['announcing-', 'announcement-', 'product-update-'];

export const parseCategories = (category: string | undefined): string[] =>
    (category ?? '')
        .split(',')
        .map((cat) => cat.trim().toLowerCase())
        .filter(Boolean);

export const isAnnouncement = (slug: string, categories: string[]): boolean => {
    if (categories.includes('announcement')) {
        return true;
    }
    return ANNOUNCEMENT_PREFIXES.some((prefix) => slug.startsWith(prefix));
};

const CATEGORY_PRIORITY = [
    'startup',
    'sites',
    'product',
    'tutorial',
    'integrations',
    'customer-stories',
    'security',
    'open-source',
    'devrel',
    'culture',
    'company',
    'contributors',
    'hackathon',
    'init',
    'news',
    'gdpr',
    'accessibility',
    'design',
    'debugging'
] satisfies string[];

export const resolveBlogCta = (
    rawCategory: string | undefined,
    slug: string,
    rawContent?: string | null
): BlogCtaConfig => {
    const categories = parseCategories(rawCategory);
    const categoriesSet = new Set(categories);

    for (const category of CATEGORY_PRIORITY) {
        if (!categoriesSet.has(category)) {
            continue;
        }

        if (category === 'product') {
            return PRODUCT_RESOLVER({ slug, rawContent: rawContent ?? undefined });
        }

        const value = categoryResolvers.get(category);
        if (!value) {
            continue;
        }

        if (typeof value === 'function') {
            return value({ slug, rawContent: rawContent ?? undefined });
        }

        return value;
    }

    if (categories.length) {
        for (const category of categories) {
            const value = categoryResolvers.get(category);
            if (value) {
                if (typeof value === 'function') {
                    return value({ slug, rawContent: rawContent ?? undefined });
                }
                return value;
            }
        }
    }

    return FALLBACK_CTA;
};
