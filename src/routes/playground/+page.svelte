<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { buildOpenGraphImage } from '$lib/utils/metadata';

    import CountdownGrid from './(components)/CountdownGrid.svelte';
    import DayOne from './(components)/days/DayOne.svelte';
    import Domains from './(assets)/illustrations/domains.svg';
    import { addDays } from 'date-fns';
    import Day from './(components)/days/Day.svelte';
    import Hero from './(components)/hero.svelte';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);

    let base = new Date('2024-11-08T13:00:00.000Z');
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

<Main>
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
    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
    <div
        class="absolute inset-0 h-full w-full bg-[radial-gradient(rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:128px_128px]"
    />
</Main>

<style>
</style>
