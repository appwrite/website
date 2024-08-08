<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { addDays, toReleaseDate } from '$lib/utils/date';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import DayCard, { type DayType } from './(components)/DayCard.svelte';
    import Lockup from './(components)/Hero.svelte';
    import CountdownCard from './(components)/CountdownCard.svelte';
    import { Animations } from './(animations)';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);

    let base = new Date('2024-08-19T15:00:00.000Z');

    $: days = [
        {
            title: 'Kickoff',
            release: base,
            animation: Animations.LocalDev
        },
        {
            title: 'CLI',
            release: addDays(base, 1),
            animation: Animations.CLI
        },
        {
            title: 'Functions',
            release: addDays(base, 2),
            animation: Animations.Functions
        },
        {
            title: 'Operators',
            release: addDays(base, 3)
        },
        {
            title: 'New runtimes',
            release: addDays(base, 4)
        }
    ] as DayType[];

    function ff() {
        base = addDays(base, -1);
    }
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
    <div class="hero">
        <Lockup />

        <p class="web-description">The start of something new.</p>
        <div class="buttons">
            <a href="/init/tickets" class="web-button">Claim your ticket</a>
        </div>
    </div>

    <div class="web-container">
        <div class="day-cards">
            {#each days as day, i (day.release.toISOString())}
                <DayCard {day} number={i}>
                    <svelte:component this={day.animation} />
                </DayCard>
            {/each}
        </div>
        <hr />
        <button on:click={ff}>ff</button>
        <div class="days">
            {#each days as day, i}
                {@const date = `DAY ${i} - ${toReleaseDate(day.release)}`}

                <h2 class="web-eyebrow web-u-color-text-primary">
                    <div class="web-dot" />
                    {date}
                    <span class="web-u-color-text-accent">_</span>
                </h2>
                <CountdownCard date={day.release} />
            {/each}
        </div>
    </div>

    <div class="web-container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    hr {
        border-block-start: 1px solid hsl(var(--web-color-offset));
    }

    .hero {
        height: 75vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        position: relative;
        overflow-x: clip;

        p {
            max-width: 23.125rem;
            text-align: center;
        }

        .buttons {
            display: flex;
            gap: 0.5rem;

            padding-block-start: 1rem;

            @media screen and (max-width: 1023px) {
                flex-direction: column;
                align-items: center;

                .web-button {
                    width: 300px;
                }
            }
        }
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
        overflow: hidden;

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
