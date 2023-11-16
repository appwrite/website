<script lang="ts">
    import { Main } from '$lib/layouts';
    import Day1 from './day-1.png?enhanced';

    type Day = {
        title: string;
        cover: string;
    };

    const days: Day[] = [
        {
            title: 'Day 1',
            cover: './day-1.png'
        },
        {
            title: 'Day 2',
            cover: './day-1.png'
        },
        {
            title: 'Day 3',
            cover: './day-1.png'
        },
        {
            title: 'Day 4',
            cover: './day-1.png'
        },
        {
            title: 'Day 5',
            cover: './day-1.png'
        }
    ];
</script>

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
            {#each days as day}
                <div class="day">
                    <span class="aw-eyebrow">Day 1<span class="accent">_</span></span>
                    <h2>{day.title}</h2>
                    <enhanced:img src={day.cover} />
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
        padding-block: 3.75rem;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;

        .day {
            @include border-gradient;
            --m-border-radius: 1rem;
            --m-border-gradient-before: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.12) 0%,
                rgba(255, 255, 255, 0) 125.11%
            );

            background: hsl(var(--aw-color-card));
            padding: 1.25rem;
        }
    }
</style>
