<script lang="ts">
    import { Main } from '$lib/layouts';
    import DayCard, { type DayType } from './DayCard.svelte';
    import Day1 from './day-1.png?enhanced';

    const days: DayType[] = [
        {
            title: 'Messaging and notifications',
            cover: Day1,
            release: new Date(Date.now())
        },
        {
            title: 'Bun & Dart 3.1 support',
            // Half a day from today
            release: new Date(Date.now() + 1000 * 60 * 60 * 24 * 0.5)
        },
        {
            title: 'ENUM SDK',
            // 1.5 days from today
            release: new Date(Date.now() + 1000 * 60 * 60 * 24 * 1.5 - 30 * 60 * 1000 - 36 * 1000)
        },
        {
            title: 'Day 4',
            // 2.5 days from today
            release: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2.5 - 30 * 60 * 1000 - 36 * 1000)
        },
        {
            title: 'Day 5',
            // 3.5 days from today
            release: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3.5 - 30 * 60 * 1000 - 36 * 1000)
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
        <div class="day-cards">
            {#each days as day, i}
                <DayCard {day} number={i + 1} />
            {/each}
        </div>
        <hr />

        <div class="days">
            <h2 class="aw-eyebrow aw-u-color-text-primary">
                DAY 1 - MONDAY, DEC 5<span class="aw-u-color-text-accent">_</span>
            </h2>

            <div class="mosaic">
                {#each { length: 10 } as _, i}
                    <div class="aw-card is-normal has-border-gradient">{i + 1}</div>
                {/each}
            </div>
        </div>
    </div>
</Main>

<style lang="scss">
    .hero {
        min-height: 500px;
        height: 70vh;

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

    .day-cards {
        --day-min-w: 370px;
        padding-block: 3.75rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }

    .days {
        margin-block-start: 5rem;

        position: relative;

        &::before {
            /* Gradient line */
            content: '';
            position: absolute;
            top: 0;
            left: -40px;
            width: 1px;
            height: 100%;

            background: linear-gradient(
                180deg,
                hsl(var(--aw-color-offset)) 0%,
                hsl(var(--aw-color-offset)) 50%,
                hsla(var(--aw-color-offset), 0) 50%,
                hsla(var(--aw-color-offset), 0) 100%
            );
        }
    }

    [class*='mosaic'] {
        margin-block-start: 1rem;
    }

    .mosaic {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
        gap: 2rem;

        min-height: 660px;

        :nth-child(1) {
            grid-column: 1 / span 3;
            grid-row: 1 / span 3;
        }

        :nth-child(2) {
            grid-column: 1 / span 3;
            grid-row: 4 / span 3;
        }

        :nth-child(3) {
            grid-column: 4 / span 6;
            grid-row: 1 / span 6;
        }

        :nth-child(4) {
            grid-column: 10 / span 3;
            grid-row: 1 / span 3;
        }

        :nth-child(5) {
            grid-column: 10 / span 3;
            grid-row: 4 / span 3;
        }

        :nth-child(6) {
            grid-column: 1 / span 3;
            grid-row: 7 / span 2;
        }

        :nth-child(7) {
            grid-column: 4 / span 3;
            grid-row: 7 / span 2;
        }

        :nth-child(8) {
            grid-column: 7 / span 3;
            grid-row: 7 / span 2;
        }

        :nth-child(9) {
            grid-column: 10 / span 3;
            grid-row: 7 / span 2;
        }

        :nth-child(10) {
            grid-column: 1 / span 12;
            grid-row: 9 / span 1;
        }
    }
</style>
