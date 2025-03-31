<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { addDays, toReleaseDate } from '$lib/utils/date';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import DayCard, { type DayType } from './(components)/DayCard.svelte';
    import Hero from './(components)/Hero.svelte';
    import CountdownCard from './(components)/CountdownCard.svelte';
    import { Animations } from './(animations)';
    import Day0 from './(days)/Day0.svelte';
    import Day1 from './(days)/Day1.svelte';
    import Day2 from './(days)/Day2.svelte';
    import Day3 from './(days)/Day3.svelte';
    import Day4 from './(days)/Day4.svelte';
    import Day from './(days)/Day.svelte';
    import EventCarousel from './(components)/EventCarousel.svelte';
    import Giveaway from './(components)/Giveaway.svelte';
    import CallToAction from './(components)/CallToAction.svelte';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);

    let base = new Date('2024-08-19T13:00:00.000Z');

    $: days = [
        {
            title: 'Local development',
            subtitle: 'Day 0',
            release: base,
            animation: Animations.LocalDev
        },
        {
            title: 'New Appwrite CLI',
            subtitle: 'Day 1',
            release: addDays(base, 1),
            animation: Animations.CLI
        },
        {
            title: 'Function ecosystem',
            subtitle: 'Day 2',
            release: addDays(base, 2),
            animation: Animations.Functions
        },
        {
            title: 'GO support',
            subtitle: 'Day 3',
            release: addDays(base, 3),
            animation: Animations.Go
        },
        {
            title: 'Mock numbers',
            subtitle: 'Day 4',
            release: addDays(base, 4),
            animation: Animations.Numbers
        }
    ] as DayType[];
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
    <div style:background="#171719">
        <div class="hero">
            <Hero />
        </div>

        <div class="divide-border-primary container divide-y">
            <div class="day-cards">
                {#each days as day, i (day.release.toISOString())}
                    <a href="#day-{i}" class="contents">
                        <DayCard {day} --p-aspect-ratio="5/2">
                            <svelte:component this={day.animation} />
                        </DayCard>
                    </a>
                {/each}
            </div>

            <div class="days">
                {#each days as day, i}
                    {@const date = `DAY ${i} - ${toReleaseDate(day.release)}`}
                    <Day day={date} release={day.release}>
                        <div id="day-{i}" style:scroll-margin="100px" />
                        {#if i === 0}
                            <Day0 release={day.release} />
                        {:else if i === 1}
                            <Day1 release={day.release} />
                        {:else if i === 2}
                            <Day2 release={day.release} />
                        {:else if i === 3}
                            <Day3 release={day.release} />
                        {:else if i === 4}
                            <Day4 release={day.release} />
                        {:else}
                            <h2 class="text-micro text-primary uppercase">
                                <div class="web-dot" />
                                {date}
                                <span class="web-u-color-text-accent">_</span>
                            </h2>
                            <CountdownCard date={day.release} />
                        {/if}
                    </Day>
                {/each}
            </div>
        </div>

        <EventCarousel />

        <Giveaway />
    </div>
    <CallToAction />
    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .hero {
        height: 75vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        position: relative;
        overflow-x: clip;
    }

    .day-cards {
        --day-min-w: 370px;
        padding-block: 3.75rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;

        @media screen and (max-width: 1023px) {
            --day-min-w: 100%;
        }
    }

    .days {
        position: relative;
        margin-block-start: 5rem;

        :global(h2) {
            position: relative;
            margin-block-end: 1rem;

            &:not(:first-child) {
                margin-block-start: 5rem;
            }

            :global(.web-dot) {
                position: absolute;
                left: -40px;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }

        &::before {
            /* Gradient line */
            content: '';
            position: absolute;
            top: 0;
            left: -40px;
            width: 1px;
            height: 100%;

            background: linear-gradient(
                to bottom,
                hsl(var(--web-color-accent)) 0%,
                hsl(var(--web-color-subtle)) 10%,
                hsl(var(--web-color-subtle)) 90%,
                transparent 100%
            );
        }
    }
</style>
