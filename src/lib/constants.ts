export const GITHUB_STARS = '39.5K';
export const BANNER_KEY = 'discord-banner-01'; // Change key to force banner to show again

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
    }
];
