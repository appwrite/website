<script lang="ts" context="module">
    const base = new Date('2025-02-05T13:00:00.000Z');

    export const initDates = `${format(base, 'MMM d')} - ${format(addDays(base, 4), 'd')}`;
</script>

<script lang="ts">
    import { buildOpenGraphImage } from '$lib/utils/metadata';

    import CountdownGrid from './(components)/countdown-grid.svelte';
    import Domains from './(assets)/illustrations/domains.svg';
    import { addDays, format } from 'date-fns';
    import Day, { type DayProps } from './(components)/day.svelte';
    import Hero from './(components)/hero.svelte';
    import Giveaway from './(components)/giveaway.svelte';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);

    const today = new Date();

    export let data;

    let days: Array<Omit<DayProps, 'index'>> = [
        {
            title: 'Domains',
            release: base,
            illustration: Domains,
            description:
                'A streamlined solution for easily deploying static and server-rendered applications, designed to simplify your workflow.',
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
            title: 'Sites',
            release: addDays(base, 1),
            illustration: Domains,
            description:
                'A streamlined solution for easily deploying static and server-rendered applications, designed to simplify your workflow.',
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
            title: 'Domains',
            release: addDays(base, 2),
            illustration: Domains,
            description:
                'A streamlined solution for easily deploying static and server-rendered applications, designed to simplify your workflow.',
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
            title: 'Sites',
            release: addDays(base, 3),
            illustration: Domains,
            description:
                'A streamlined solution for easily deploying static and server-rendered applications, designed to simplify your workflow.',
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
            title: 'Domains',
            release: addDays(base, 4),
            illustration: Domains,
            description:
                'A streamlined solution for easily deploying static and server-rendered applications, designed to simplify your workflow.',
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

<Hero claimed={data.claimed} />

{#if today >= base}
    <CountdownGrid {days} />

    <div class="container w-full py-20">
        {#each days as day, index}
            <Day {...day} {index} />
        {/each}
    </div>

    <Giveaway />
{/if}
