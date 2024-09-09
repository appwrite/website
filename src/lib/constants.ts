import {
    Copy,
    DailyDev,
    Discord,
    Github,
    Linkedin,
    X,
    Ycombinator,
    Youtube,
    type SvgComponent
} from './icons';

export const GITHUB_STARS = '42.8K';
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
    icon: typeof SvgComponent;
    label: string;
    link: string;
};

export type SocialShareOption = {
    icon: typeof SvgComponent;
    label: string;
    link: string;
    type: 'link' | 'copy';
};

export const socialSharingOptions: Array<SocialShareOption> = [
    {
        icon: X,
        label: 'Twitter',
        link: 'https://x.com/intent/post?text={TITLE}\n&url={URL}',
        type: 'link'
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/sharing/share-offsite?text={TITLE}\n&url={URL}',
        type: 'link'
    },
    {
        icon: Ycombinator,
        label: 'YCombinator',
        link: 'https://news.ycombinator.com/submitlink?t={TITLE}\n&u={URL}',
        type: 'link'
    },
    {
        icon: Copy,
        label: 'Copy',
        link: '',
        type: 'copy'
    }
];

export const socials: Array<Social> = [
    {
        icon: Discord,
        label: 'Discord',
        link: 'https://appwrite.io/discord'
    },
    {
        icon: Github,
        label: 'Github',
        link: 'https://github.com/appwrite'
    },
    {
        icon: X,
        label: 'Twitter',
        link: 'https://twitter.com/intent/follow?screen_name=appwrite'
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/company/appwrite'
    },
    {
        icon: Youtube,
        label: 'YouTube',
        link: 'https://www.youtube.com/c/appwrite?sub_confirmation=1'
    },
    {
        icon: DailyDev,
        label: 'Daily.dev',
        link: 'https://app.daily.dev/squads/appwrite'
    }
];
