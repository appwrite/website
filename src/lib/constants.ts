export const GITHUB_STARS = '41.9K';
export const BANNER_KEY = 'discord-banner-01'; // Change key to force banner to show again
export const SENTRY_DSN = 'https://27d41dc8bb67b596f137924ab8599e59@o1063647.ingest.us.sentry.io/4507497727000576'

/**
 * History:
 * discord-banner-01
 * pricing-banner-01
 */

export type Social = {
    icon: string;
    label: string;
    link: string;
};

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
        link: 'https://www.linkedin.com/company/appwrite'
    },
    {
        icon: 'web-icon-youtube',
        label: 'YouTube',
        link: 'https://www.youtube.com/c/appwrite?sub_confirmation=1'
    },
    {
        icon: 'web-icon-daily-dev',
        label: 'Daily.dev',
        link: 'https://app.daily.dev/squads/appwrite'
    }
];
