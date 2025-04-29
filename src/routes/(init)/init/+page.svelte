<script lang="ts" module>
    const base = new Date('2025-04-05T13:00:00.000Z');

    export const isStarted = new Date() >= base;
    export const initDates = `${format(base, 'MMM d')} - ${format(addDays(base, 4), 'd')}`;
</script>

<script lang="ts">
    import { buildOpenGraphImage } from '$lib/utils/metadata';

    import CountdownGrid from './(components)/countdown-grid.svelte';
    import Poster from './(assets)/poster.png';
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

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);

    const today = new Date();

    let { data } = $props();

    let days: Array<Omit<DayProps, 'index'>> = [
        {
            title: 'Feature',
            release: base,
            illustration: Sites,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed lacus lectus. Nunc gravida arcu posuere odio sagittis, ac congue lacus placerat.',
            url: '/',
            content: [
                { title: 'Serverless functions 101: best practices', url: '/', type: 'Blog' },
                {
                    title: 'Local serverless function development with the new Appwrite CLI',
                    url: '/',
                    type: 'Blog'
                },
                {
                    title: 'Local development',
                    url: '/',
                    type: 'Docs'
                }
            ],
            announcementVideo: {
                url: 'https://www.youtube.com/watch?v=31udvDQ5I4Y',
                title: 'Announcement Video',
                poster: Poster
            },
            links: [
                {
                    title: 'Product demo',
                    type: 'video',
                    poster: '',
                    url: 'https://www.youtube-nocookie.com/embed/31udvDQ5I4Y'
                },
                { title: 'Discord Stage', type: 'discord', poster: '', url: 'https://discord.com' }
            ]
        },
        {
            title: 'Feature',
            release: addDays(base, 1),
            illustration: Flutter,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed lacus lectus. Nunc gravida arcu posuere odio sagittis, ac congue lacus placerat.',
            url: '/',
            content: [
                { title: 'Serverless functions 101: best practices', url: '/', type: 'Blog' },
                {
                    title: 'Local serverless function development with the new Appwrite CLI',
                    url: '/',
                    type: 'Blog'
                },
                {
                    title: 'Local development',
                    url: '/',
                    type: 'Docs'
                }
            ]
        },
        {
            title: 'Key',
            release: addDays(base, 2),
            illustration: DevKeys,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed lacus lectus. Nunc gravida arcu posuere odio sagittis, ac congue lacus placerat.',
            url: '/',
            content: [
                { title: 'Serverless functions 101: best practices', url: '/', type: 'Blog' },
                {
                    title: 'Local serverless function development with the new Appwrite CLI',
                    url: '/',
                    type: 'Blog'
                },
                {
                    title: 'Local development',
                    url: '/',
                    type: 'Docs'
                }
            ]
        },
        {
            title: 'Feature',
            release: addDays(base, 3),
            illustration: Formats,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed lacus lectus. Nunc gravida arcu posuere odio sagittis, ac congue lacus placerat.',
            url: '/',
            content: [
                { title: 'Serverless functions 101: best practices', url: '/', type: 'Blog' },
                {
                    title: 'Local serverless function development with the new Appwrite CLI',
                    url: '/',
                    type: 'Blog'
                },
                {
                    title: 'Local development',
                    url: '/',
                    type: 'Docs'
                }
            ]
        },
        {
            title: 'Feature',
            release: addDays(base, 4),
            illustration: Tokens,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed lacus lectus. Nunc gravida arcu posuere odio sagittis, ac congue lacus placerat.',
            url: '/',
            content: [
                { title: 'Serverless functions 101: best practices', url: '/', type: 'Blog' },
                {
                    title: 'Local serverless function development with the new Appwrite CLI',
                    url: '/',
                    type: 'Blog'
                },
                {
                    title: 'Local development',
                    url: '/',
                    type: 'Docs'
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

    <EventCarousel />
    <Giveaway />
{/if}
