import type { IconType } from "./components/ui";

type SocialStats = {
    [K in 'GITHUB' | 'DISCORD' | 'TWITTER' | 'YOUTUBE']: {
        STAT: string;
        LINK: string;
        EXTRA?: Record<string, string> | undefined;
    };
};

export const SOCIAL_STATS: SocialStats = {
    GITHUB: {
        STAT: '48K',
        LINK: 'https://github.com/appwrite/appwrite',
        EXTRA: {
            COMMITS: '24K+',
            PULL_REQUESTS: '4.5K+',
            ISSUES: '3K+',
            OPEN_ISSUES: '500+',
            CLOSED_ISSUES: '3.3K+',
            FORKS: '4.3K+',
            CONTRIBUTORS: '800+'
        }
    },
    DISCORD: {
        STAT: '22K+',
        LINK: '/discord'
    },
    TWITTER: {
        STAT: '128K+',
        LINK: 'https://twitter.com/intent/follow?screen_name=appwrite'
    },
    YOUTUBE: {
        STAT: '11K+',
        LINK: 'https://www.youtube.com/c/appwrite?sub_confirmation=1'
    }
};

export const BANNER_KEY: Banners = 'discord-banner-01'; // Change key to force banner to show again

export const BLOG_POSTS_PER_PAGE = 12;

/**
 * History:
 * discord-banner-01
 * init-banner-02
 * pricing-banner-01
 */
type Banners = 'discord-banner-01' | 'init-banner-02' | 'pricing-banner-01';

export type Social = {
    icon: IconType;
    label: string;
    link: string;
};

export type SocialShareOption = {
    icon: IconType;
    label: string;
    link: string;
    type: 'link' | 'copy';
};

export type IntegrationCategory = {
    slug: string;
    heading: string;
    description: string;
};

export const integrationCategoryDescriptions: IntegrationCategory[] = [
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

export const socialSharingOptions: Array<SocialShareOption> = [
    {
        icon: 'x',
        label: 'Twitter',
        link: 'https://x.com/intent/post?text={TITLE}\n&url={URL}',
        type: 'link'
    },
    {
        icon: 'linkedin',
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/sharing/share-offsite?text={TITLE}\n&url={URL}',
        type: 'link'
    },
    {
        icon: 'ycombinator',
        label: 'YCombinator',
        link: 'https://news.ycombinator.com/submitlink?t={TITLE}\n&u={URL}',
        type: 'link'
    },
    {
        icon: 'copy',
        label: 'Copy',
        link: '',
        type: 'copy'
    }
];

export const socials: Array<Social> = [
    {
        icon: 'discord',
        label: 'Discord',
        link: 'https://appwrite.io/discord'
    },
    {
        icon: 'github',
        label: 'Github',
        link: 'https://github.com/appwrite'
    },
    {
        icon: 'x',
        label: 'Twitter',
        link: 'https://twitter.com/intent/follow?screen_name=appwrite'
    },
    {
        icon: 'linkedin',
        label: 'LinkedIn',
        link: 'https://linkedin.com/company/appwrite'
    },
    {
        icon: 'youtube',
        label: 'YouTube',
        link: 'https://youtube.com/c/appwrite?sub_confirmation=1'
    },
    {
        icon: 'daily-dev',
        label: 'Daily.dev',
        link: 'https://app.daily.dev/squads/appwrite'
    },
    {
        icon: 'bluesky',
        label: 'Bluesky',
        link: 'https://bsky.app/profile/appwrite.io'
    },
    {
        icon: 'tiktok',
        label: 'Tiktok',
        link: 'https://tiktok.com/@appwrite'
    },
    {
        icon: 'instagram',
        label: 'Instagram',
        link: 'https://instagram.com/appwrite.io'
    }
];
