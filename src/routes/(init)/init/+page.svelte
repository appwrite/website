<script lang="ts">
    import { buildOpenGraphImage } from '$lib/utils/metadata';

    import CountdownGrid from './(components)/countdown-grid.svelte';
    import DayOne from './(components)/days/day-one.svelte';
    import Domains from './(assets)/illustrations/domains.svg';
    import { addDays } from 'date-fns';
    import Day from './(components)/days/day.svelte';
    import Hero from './(components)/hero.svelte';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);

    let base = new Date('2025-01-27T13:00:00.000Z');
    let days = [
        {
            title: 'Domains',
            release: base,
            illustration: Domains
        },
        {
            title: 'Sites',
            release: addDays(base, 1),
            illustration: Domains
        },
        {
            title: 'Domains',
            release: addDays(base, 2),
            illustration: Domains
        },
        {
            title: 'Sites',
            release: addDays(base, 3),
            illustration: Domains
        },
        {
            title: 'Domains',
            release: addDays(base, 4),
            illustration: Domains
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

<Hero />
<CountdownGrid {days} />

<div class="container space-y-20 divide-y divide-white/8 py-20">
    {#each days as day, i}
        <Day release={day.release}>
            {#if i === 0}
                <DayOne index={i} release={day.release} />
            {:else if i === 1}
                <DayOne index={i} release={day.release} />
            {:else if i === 2}
                <DayOne index={i} release={day.release} />
            {:else if i === 3}
                <DayOne index={i} release={day.release} />
            {:else if i === 4}
                <DayOne index={i} release={day.release} />
            {:else}
                <DayOne index={i} release={day.release} />
            {/if}
        </Day>
    {/each}
</div>
