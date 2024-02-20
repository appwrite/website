export const GITHUB_STARS = '39.4K';
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
        icon: 'aw-icon-discord',
        label: 'Discord',
        link: 'https://appwrite.io/discord'
    },
    {
        icon: 'aw-icon-github',
        label: 'Github',
        link: 'https://github.com/appwrite'
    },
    {
        icon: 'aw-icon-x',
        label: 'Twitter',
        link: 'https://twitter.com/intent/follow?screen_name=appwrite'
    },
    {
        icon: 'aw-icon-linkedin',
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/company/appwrite'
    },
    {
        icon: 'aw-icon-youtube',
        label: 'YouTube',
        link: 'https://www.youtube.com/c/appwrite?sub_confirmation=1'
    }
];
