<script lang="ts" module>
    import { addDays, format } from 'date-fns';

    const base = new Date('2025-05-19T07:00:00.000Z');
    const otherFeaturesBase = new Date('2025-05-19T13:00:00.000Z');

    export const isStarted = new Date() >= base;
    export const initDates = `${format(base, 'MMM d')} - ${format(addDays(otherFeaturesBase, 4), 'd')}`;
</script>

<script lang="ts">
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import Hero from './(components)/hero.svelte';
    import Schedule from './(components)/schedule.svelte';
    import DayDetails from './(components)/day-details.svelte';
    import IllustrationConsole from './(assets)/card-illustration-console.svg';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);

    let { data } = $props();

    const now = new Date();
    const detailDays = [
        {
            dayName: 'MONday',
            dayNumber: 0,
            date: 'march - 23 - 2026',
            title: 'Appwrite Console 2.0',
            description:
                'A completely redesigned console experience with improved navigation, faster workflows, and a modern interface.',
            illustration: IllustrationConsole,
            productLabel: 'CONSOLE 2.0',
            videoHref: '#',
            links: [
                {
                    type: '// blog post',
                    title: 'Announcing Appwrite Console 2.0',
                    action: 'Read article',
                    href: '#'
                },
                {
                    type: '// blog post',
                    title: 'How to host SSR web apps on Appwrite Sites',
                    action: 'Read article',
                    href: '#'
                },
                {
                    type: '// DOCS',
                    title: 'Getting started with Console 2.0',
                    action: 'go to docs',
                    href: '#'
                }
            ],
            release: new Date('2026-03-23T07:00:00.000Z'),
            revealed: true
        },
        {
            dayName: 'TUESday',
            dayNumber: 1,
            date: 'march - 24 - 2026',
            title: 'PostGres + Vector DB',
            description:
                'Full PostgreSQL support with built-in vector database capabilities for AI-powered search and embeddings.',
            illustration: IllustrationConsole,
            productLabel: 'DATABASES',
            videoHref: '#',
            links: [
                {
                    type: '// blog post',
                    title: 'Introducing PostGres + Vector DB',
                    action: 'Read article',
                    href: '#'
                },
                {
                    type: '// DOCS',
                    title: 'Setting up Vector DB',
                    action: 'go to docs',
                    href: '#'
                }
            ],
            release: new Date('2026-03-24T07:00:00.000Z'),
            revealed: true
        },
        {
            dayName: 'WEDNESday',
            dayNumber: 2,
            date: 'march - 25 - 2026',
            title: 'S3 Proxy Servers',
            description:
                'A streamlined solution for easily deploying static and server-rendered applications, designed to simplify your workflow.',
            illustration: IllustrationConsole,
            productLabel: 'STORAGE',
            videoHref: '#',
            links: [
                {
                    type: '// blog post',
                    title: 'Announcing S3 Proxy Servers',
                    action: 'Read article',
                    href: '#'
                },
                {
                    type: '// blog post',
                    title: 'How to use S3-compatible storage with Appwrite',
                    action: 'Read article',
                    href: '#'
                },
                {
                    type: '// DOCS',
                    title: 'Configuring S3 Proxy Servers',
                    action: 'go to docs',
                    href: '#'
                }
            ],
            release: new Date('2026-03-25T07:00:00.000Z'),
            revealed: true
        },
        {
            dayName: 'THURSday',
            dayNumber: 3,
            date: 'march - 26 - 2026',
            title: 'Hyperloop B',
            description:
                'Next-generation real-time data synchronization with ultra-low latency across all connected clients.',
            illustration: IllustrationConsole,
            productLabel: 'REALTIME',
            videoHref: '#',
            links: [
                {
                    type: '// blog post',
                    title: 'Introducing Hyperloop B',
                    action: 'Read article',
                    href: '#'
                },
                {
                    type: '// DOCS',
                    title: 'Getting started with Hyperloop B',
                    action: 'go to docs',
                    href: '#'
                }
            ],
            release: new Date('2026-03-26T07:00:00.000Z'),
            revealed: true
        },
        {
            dayName: 'FRIday',
            dayNumber: 4,
            date: 'march - 27 - 2026',
            release: new Date('2026-03-27T07:00:00.000Z'),
            revealed: false
        }
    ];

    const scheduleDays = [
        {
            title: 'APPWRITE CONSOLE 2.0',
            illustration: IllustrationConsole,
            release: new Date('2026-03-23T07:00:00.000Z'),
            revealed: true,
            dayNumber: 0
        },
        {
            title: 'POSTGRES + VECTOR DB',
            illustration: IllustrationConsole,
            release: new Date('2026-03-24T07:00:00.000Z'),
            revealed: true,
            dayNumber: 1
        },
        {
            title: 'S3 PROXY SERVERS',
            illustration: IllustrationConsole,
            release: new Date('2026-03-25T07:00:00.000Z'),
            revealed: true,
            dayNumber: 2
        },
        {
            title: 'HYPERLOOP B',
            illustration: IllustrationConsole,
            release: new Date('2026-03-26T07:00:00.000Z'),
            revealed: true,
            dayNumber: 3
        },
        {
            title: 'NEW APIS',
            illustration: '',
            release: new Date('2026-03-27T07:00:00.000Z'),
            dayNumber: 4
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

<Schedule days={scheduleDays} />

<DayDetails days={detailDays} />
