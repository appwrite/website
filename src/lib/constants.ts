export const GITHUB_STARS = '47K';
export const GITHUB_REPO_LINK = 'https://github.com/appwrite/appwrite';
export const BANNER_KEY: Banners = 'discord-banner-01'; // Change key to force banner to show again
export const SENTRY_DSN =
    'https://27d41dc8bb67b596f137924ab8599e59@o1063647.ingest.us.sentry.io/4507497727000576';

export const BLOG_POSTS_PER_PAGE = 12;

/**
 * History:
 * discord-banner-01
 * init-banner-02
 * pricing-banner-01
 */
type Banners = 'discord-banner-01' | 'init-banner-02' | 'pricing-banner-01';

export type Social = {
    icon: string;
    label: string;
    link: string;
};

export type SocialShareOption = {
    icon: string;
    label: string;
    link: string;
    type: 'link' | 'copy';
};

export type SearchableCategory = {
    slug: string;
    heading: string;
    description: string;
};

export const integrationCategoryDescriptions: SearchableCategory[] = [
    {
        slug: 'ai',
        heading: 'AI',
        description: 'Machine learning and AI capabilities'
    },
    {
        slug: 'auth',
        heading: 'Auth',
        description: 'User authentication and authorization'
    },
    {
        slug: 'databases',
        heading: 'Databases',
        description: 'Manage database systems'
    },
    {
        slug: 'logging',
        heading: 'Logging',
        description: 'Monitor and analyze application logs'
    },
    {
        slug: 'messaging',
        heading: 'Messaging',
        description: 'Real-time communication platforms'
    },
    {
        slug: 'payments',
        heading: 'Payments',
        description: 'Secure online payment processing'
    },
    {
        slug: 'search',
        heading: 'Search',
        description: 'Implement search functionalities'
    },
    {
        slug: 'storage',
        heading: 'Storage',
        description: 'Storage for data and media'
    },
    {
        slug: 'deployments',
        heading: 'Deployments',
        description: 'Seamlessly deploy your code'
    }
];

export const partnerCategoryDescriptions: SearchableCategory[] = [
    {
        slug: 'agency',
        heading: 'Agency',
        description: 'Agency description goes here'
    }
];

export const socialSharingOptions: Array<SocialShareOption> = [
    {
        icon: 'web-icon-x',
        label: 'Twitter',
        link: 'https://x.com/intent/post?text={TITLE}\n&url={URL}',
        type: 'link'
    },
    {
        icon: 'web-icon-linkedin',
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/sharing/share-offsite?text={TITLE}\n&url={URL}',
        type: 'link'
    },
    {
        icon: 'web-icon-ycombinator',
        label: 'YCombinator',
        link: 'https://news.ycombinator.com/submitlink?t={TITLE}\n&u={URL}',
        type: 'link'
    },
    {
        icon: 'web-icon-copy',
        label: 'Copy',
        link: '',
        type: 'copy'
    }
];

export const socials: Array<Social> = [
    {
        icon: 'web-icon-discord',
        label: 'Discord',
        link: 'https://appwrite.io/discord'
    },
    {
        icon: 'web-icon-github',
        label: 'Github',
        link: 'https://github.com/appwrite'
    },
    {
        icon: 'web-icon-x',
        label: 'Twitter',
        link: 'https://twitter.com/intent/follow?screen_name=appwrite'
    },
    {
        icon: 'web-icon-linkedin',
        label: 'LinkedIn',
        link: 'https://linkedin.com/company/appwrite'
    },
    {
        icon: 'web-icon-youtube',
        label: 'YouTube',
        link: 'https://youtube.com/c/appwrite?sub_confirmation=1'
    },
    {
        icon: 'web-icon-daily-dev',
        label: 'Daily.dev',
        link: 'https://app.daily.dev/squads/appwrite'
    },
    {
        icon: 'web-icon-bluesky',
        label: 'Bluesky',
        link: 'https://bsky.app/profile/appwrite.io'
    },
    {
        icon: 'web-icon-tiktok',
        label: 'Tiktok',
        link: 'https://tiktok.com/@appwrite'
    },
    {
        icon: 'web-icon-instagram',
        label: 'Instagram',
        link: 'https://instagram.com/appwrite.io'
    }
];
