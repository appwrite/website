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
    import IllustrationConsole from './(assets)/card-illustration-console.svg';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);

    let { data } = $props();

    const now = new Date();
    const scheduleDays = [
        {
            title: 'APPWRITE CONSOLE 2.0',
            illustration: IllustrationConsole,
            release: new Date(now.getTime() - 86400000), // already released (yesterday)
            revealed: true
        },
        {
            title: 'Day 2 Reveal',
            illustration: '',
            release: new Date(now.getTime() - 3600000) // released 1 hour ago (flippable)
        },
        {
            title: 'Day 3',
            illustration: '',
            release: new Date(now.getTime() + 3600000) // in 1 hour (locked with timer)
        },
        {
            title: 'Day 4',
            illustration: '',
            release: new Date(now.getTime() + 86400000) // in 1 day (locked with timer)
        },
        {
            title: 'Day 5',
            illustration: '',
            release: new Date(now.getTime() + 172800000) // in 2 days (locked with timer)
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
