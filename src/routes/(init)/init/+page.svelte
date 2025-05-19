<script lang="ts" module>
    const base = new Date('2025-05-19T07:00:00.000Z');
    const otherFeaturesBase = new Date('2025-05-19T13:00:00.000Z');

    export const isStarted = new Date() >= base;
    export const initDates = `${format(base, 'MMM d')} - ${format(addDays(otherFeaturesBase, 4), 'd')}`;
</script>

<script lang="ts">
    import { buildOpenGraphImage } from '$lib/utils/metadata';

    import CountdownGrid from './(components)/countdown-grid.svelte';
    import Poster from './(assets)/poster.png';
    import PosterFutureAppwrite from './(assets)/posterFutureOfAppwrite.png';
    import PosterDeploy from './(assets)/posterDeploy.png';
    import Sites from './(assets)/illustrations/sites.svg';
    import Flutter from './(assets)/illustrations/flutter.svg';
    import Formats from './(assets)/illustrations/formats.svg';
    import DevKeys from './(assets)/illustrations/devkeys.svg';
    import Tokens from './(assets)/illustrations/tokens.svg';
    import { addDays, format } from 'date-fns';
    import Day, { type DayProps } from './(components)/day.svelte';
    import Hero from './(components)/hero.svelte';
    import Giveaway from './(components)/giveaway.svelte';
    import EventCarousel from './(components)/event-carousel.svelte';
    import { FooterNav, MainFooter } from '$lib/components';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);

    const today = new Date();

    let { data } = $props();

    let days: Array<Omit<DayProps, 'index'>> = [
        {
            title: 'Sites',
            release: base,
            illustration: Sites,
            description:
                'Introducing the open-source Vercel alternative. A new Appwrite product that lets you deploy and host your websites and web apps right inside Appwrite.',
            url: 'https://www.youtube-nocookie.com/embed/0cERQxFjTW4',
            content: [
                {
                    title: 'Announcing Appwrite Sites',
                    url: '/blog/post/announcing-appwrite-sites',
                    type: 'Blog'
                },
                {
                    title: 'How to host SSR web apps with Appwrite Sites',
                    url: '/blog/post/host-ssr-web-apps-sites',
                    type: 'Blog'
                },
                {
                    title: 'Get started with Appwrite Sites',
                    url: '/docs/products/sites',
                    type: 'Docs',
                    label: 'Visit docs'
                }
            ],
            announcementVideo: {
                url: 'https://www.youtube-nocookie.com/embed/0cERQxFjTW4',
                title: 'Announcement Video',
                poster: Poster
            },
            links: [
                {
                    title: 'Product demo',
                    type: 'video',
                    poster: PosterDeploy,
                    url: 'https://youtu.be/VtDe6hDw91k'
                },
                {
                    title: 'YouTube Live',
                    type: 'video',
                    poster: PosterFutureAppwrite,
                    url: 'https://www.youtube.com/watch?v=1g8tuogsp7A'
                }
            ]
        },
        {
            title: 'Hosting for Flutter Web',
            release: addDays(otherFeaturesBase, 1),
            illustration: Flutter,
            description:
                'Appwrite and Flutter have always worked well together, and now, you can deploy your Flutter web apps directly from Appwrite Sites.',
            url: '/',
            content: [
                {
                    title: 'How to set up the Flutter starter template on Appwrite Sites',
                    url: '/blog/post/',
                    type: 'Blog'
                },
                {
                    title: 'Building with Appwrite Sites template',
                    url: '/blog/post/building-with-sites-templates',
                    type: 'Blog'
                },
                {
                    title: 'Hosting for Flutter Web',
                    url: '/docs/products/sites/quick-start/flutter',
                    type: 'Docs',
                    label: 'Visit docs'
                }
            ]
        },
        {
            title: 'Dev Keys',
            release: addDays(otherFeaturesBase, 2),
            illustration: DevKeys,
            description:
                'Introducing Dev Keys. A new Appwrite feature that lets you bypass rate limits *during local development*. No more slowdowns. No more artificial blockers. Just fast, uninterrupted building.',
            url: '/',
            content: [
                { title: 'How do Dev Keys work', url: '/blog/post/', type: 'Blog' },
                {
                    title: 'Improve your Appwrite developer experience with dev keys',
                    url: '/blog/docs',
                    type: 'Blog'
                },
                {
                    title: 'Dev Keys',
                    url: '/',
                    type: 'Docs',
                    label: 'Visit docs'
                }
            ]
        },
        {
            title: 'new image formats',
            release: addDays(otherFeaturesBase, 3),
            illustration: Formats,
            description:
                'We have added support for two new image formats in Appwrite Storage: HEIC and AVIF. This will give you more tools to manage, manipulate, and serve images the way you need.',
            url: '/',
            content: [
                {
                    title: 'How to use AVIF in Storage',
                    url: '/blog/pos/avif-in-storage',
                    type: 'Blog'
                },
                {
                    title: 'Improve your Appwrite developer experience with dev keys',
                    url: '/blog/post/developer-experience-dev-keys',
                    type: 'Blog'
                },
                {
                    title: 'New image formats',
                    url: '/docs/',
                    type: 'Docs',
                    label: 'Visit docs'
                }
            ]
        },
        {
            title: 'File Tokens',
            release: addDays(otherFeaturesBase, 4),
            illustration: Tokens,
            description:
                'Introducing File Tokens. This feature lets you share files easily and securely, without modifying permissions or changing project access. Just generate a token and share the link.',
            url: 'https://youtu.be/_XU1dftsQag',
            content: [
                {
                    title: 'Serverless functions 101: best practices',
                    url: '/blog/post/announcing-file-tokens',
                    type: 'Blog'
                },
                {
                    title: 'file tokens',
                    url: '/blog/post',
                    type: 'Blog'
                },
                {
                    title: 'File Tokens',
                    url: '/docs/',
                    type: 'Docs',
                    label: 'Visit docs'
                }
            ]
        }
    ];
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Hero ticketId={data.ticketId} claimed={data.claimed} />

{#if today >= base}
    <CountdownGrid {days} />

    <div class="container w-full py-20">
        {#each days as day, i}
            {@const index = i + 1}
            <Day {...day} {index} />
        {/each}
    </div>

    <!--    <EventCarousel />-->
{/if}

<Giveaway />

<div class="footer-section extended-borders-footer container">
    <FooterNav />

    <MainFooter />
</div>

<style lang="scss">
    .extended-borders-footer {
        z-index: 0;
        position: relative;
        max-width: 100vw;
        overflow: hidden;
    }
    .extended-borders-footer::before {
        content: '';
        position: absolute;
        border-top: 2px dashed var(--color-offset);
        pointer-events: none;
        z-index: -1;
        height: 0;

        @media (min-width: 768px) {
            inset: 0;
        }
    }

    .footer-section {
        & :global(.web-footer-nav) {
            border-block-start: none;
            margin-block-start: unset;

            @media (max-width: 768px) {
                border-block-start: solid 0.0625rem hsl(var(--web-color-smooth));
            }
        }
    }
</style>
