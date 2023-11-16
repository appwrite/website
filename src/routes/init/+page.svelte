<script lang="ts">
    import { Main } from '$lib/layouts';
    import Day, { type DayType } from './Day.svelte';
    import Day1 from './day-1.png?enhanced';

    const days: DayType[] = [
        {
            title: 'Messaging and notifications',
            cover: Day1,
            release: new Date('2021-10-11')
        },
        {
            title: 'Bun & Dart 3.1 support',
            release: new Date('2021-10-11')
        },
        {
            title: 'ENUM SDK',
            release: new Date('2021-10-11')
        },
        {
            title: 'Day 4',
            release: new Date('2023-11-17')
        },
        {
            title: 'Day 5',
            release: new Date('2023-11-18')
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
                <Day {day} number={i + 1} />
            {/each}
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

    .days {
        --day-min-w: 370px;
        padding-block: 3.75rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }
</style>
