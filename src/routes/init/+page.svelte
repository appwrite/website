<script lang="ts">
    import { Main } from '$lib/layouts';
    import Day1 from './day-1.png?enhanced';

    type Day = {
        title: string;
        cover?: string;
    };

    const days: Day[] = [
        {
            title: 'Messaging and notifications',
            cover: Day1
        },
        {
            title: 'Bun & Dart 3.1 support'
        },
        {
            title: 'ENUM SDK'
        },
        {
            title: 'Day 4'
        },
        {
            title: 'Day 5'
        }
    ];
</script>

<svelte:head>
    <title>Appwrite init_</title>
</svelte:head>

<Main>
    <div class="hero">
        <h1>
            <img src="/images/logos/init.svg" alt="init" />
        </h1>
        <p class="aw-description">
            Appwrite is unveiling new features over a week of exciting announcements
        </p>
        <div class="buttons">
            <button class="aw-button">Get your ticket</button>
            <button class="aw-button is-secondary">Blog announcement</button>
        </div>
    </div>

    <div class="aw-container">
        <hr />
        <div class="days">
            {#each days as day, i}
                <div class="day">
                    <div class="circle" aria-hidden />
                    <span class="aw-eyebrow"
                        >Day {i + 1}<span class="aw-u-color-text-accent">_</span></span
                    >
                    <h2 class="aw-label aw-u-color-text-primary">{day.title}</h2>
                    {#if day.cover}
                        <enhanced:img src={day.cover} class="img" />
                    {/if}
                    <button class="aw-button is-secondary">
                        <span class="aw-icon-arrow-right" />
                    </button>
                </div>
            {/each}
        </div>
    </div>
</Main>

<style lang="scss">
    .hero {
        min-height: 500px;
        height: 70dvh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        p {
            max-width: 23.125rem;
            text-align: center;
        }

        .buttons {
            display: flex;
            gap: 0.5rem;

            padding-block-start: 1rem;
        }
    }

    hr {
        border-block-start: 1px solid hsl(var(--aw-color-offset));
    }

    .days {
        --day-min-w: 370px;
        padding-block: 3.75rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;

        .day {
            @include border-gradient;
            --m-border-radius: 1rem;
            --m-border-gradient-before: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.12) 0%,
                rgba(255, 255, 255, 0) 125.11%
            );

            display: flex;
            flex-direction: column;
            position: relative;

            background: hsl(var(--aw-color-card));
            overflow: hidden;

            height: 13.75rem;
            padding: 1.25rem;
            grid-column: span 2;

            flex: 0 0 var(--day-min-w);

            h2 {
                margin-block-start: 0.5rem;
                position: relative;
            }

            button {
                aspect-ratio: 1;
                padding: 0.625rem;

                margin-block-start: auto;

                [class*='icon'] {
                    color: hsl(var(--aw-color-primary)) !important;
                }
            }

            .circle {
                content: '';
                background: radial-gradient(
                    hsl(var(--aw-color-accent)) 0%,
                    hsl(var(--aw-color-accent) / 0) 70%
                );
                opacity: 0.24;

                --size: 500px;
                width: var(--size);
                height: var(--size);

                position: absolute;
                right: 0;
                top: 0;
                translate: 60% -60%;
                z-index: 0;
                pointer-events: none;
            }

            .img {
                position: absolute;
                height: 100%;
                object-fit: contain;
                top: 0;
                left: 0;
                pointer-events: none;
            }
        }

        .day:last-child:nth-child(3n - 1) {
            grid-column-end: -2;
        }

        .day:nth-last-child(2):nth-child(3n + 1) {
            grid-column-end: 4;
        }
    }
</style>
