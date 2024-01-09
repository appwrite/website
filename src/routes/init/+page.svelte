<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import EventCard from '$routes/community/EventCard.svelte';
    import Day1 from './(assets)/day-1.png?enhanced';
    import CountdownCard from './(components)/CountdownCard.svelte';
    import DayCard, { type DayType } from './(components)/DayCard.svelte';

    import { events } from '$routes/community/+page.svelte';

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
            <a href="/init/ticket" class="aw-button">Get your ticket</a>
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
                <div class="aw-dot" />
                DAY 1 - MONDAY, DEC 5<span class="aw-u-color-text-accent">_</span>
            </h2>

            <div class="mosaic">
                <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
                {#each { length: 10 } as _, i}
                    <div class="aw-card is-normal has-border-gradient">{i + 1}</div>
                {/each}
            </div>

            {#each days.slice(1) as day, i}
                <h2 class="aw-eyebrow aw-u-color-text-primary">
                    <div class="aw-dot" />
                    DAY {i + 2} - TUESDAY, DEC 6<span class="aw-u-color-text-accent">_</span>
                </h2>

                <CountdownCard date={day.release} />
            {/each}
        </div>
    </div>

    <div class="events">
        <div class="aw-container">
            <h2 class="aw-label aw-u-color-text-primary">Upcoming Events</h2>

            <ul class="aw-grid-articles">
                {#each events as event}
                    <li>
                        <EventCard
                            href={event.href}
                            cover={event.cover}
                            date={event.date}
                            location={event.location}
                            title={event.title}
                            description={event.description}
                            buttonText={event.buttonText}
                            headingLevel={3}
                        />
                    </li>
                {/each}
            </ul>
        </div>
    </div>

    <div class="tickets-preview">
        <h2 class="aw-label aw-u-color-text-primary">
            Get a ticket and enter our special Init giveaway
        </h2>
        <p class="aw-sub-body-500">
            Create, customize, and share your Init ticket to enter our general giveaway.
        </p>
        <a href="/init/ticket" class="aw-button is-secondary">Get your ticket</a>

        <div class="tickets">
            <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
            {#each { length: 10 } as _}
                <enhanced:img class="ticket" src="./(assets)/ticket.png" alt="" />
            {/each}
        </div>
        <div class="tickets">
            <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
            {#each { length: 9 } as _}
                <enhanced:img class="ticket" src="./(assets)/ticket.png" alt="" />
            {/each}
        </div>
    </div>

    <div class="pre-footer">
        <div class="aw-container">
            <div class="text">
                <h2 class="aw-label aw-u-color-text-primary">Start building with Appwrite today</h2>
                <p class="aw-main-body-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices
                    lacus.
                </p>
                <a href="/init/ticket" class="aw-button">Get your ticket</a>
            </div>

            <enhanced:img class="console" src="./(assets)/console.png" alt="" />
        </div>
    </div>

    <div class="aw-container">
        <FooterNav />
        <MainFooter />
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
        position: relative;
        margin-block-start: 5rem;

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
                hsl(var(--aw-color-accent)) 0%,
                hsl(var(--aw-color-subtle)) 10%,
                hsl(var(--aw-color-subtle)) 90%,
                transparent 100%
            );
        }

        h2 {
            position: relative;
            margin-block-end: 1rem;

            &:not(:first-child) {
                margin-block-start: 5rem;
            }

            .aw-dot {
                position: absolute;
                left: -40px;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }

    [class*='mosaic'] {
        margin-block-start: 1rem;
    }

    .mosaic {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(9, 1fr);
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

        @media screen and (max-width: 1023px) {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    .events {
        margin-block-start: 10rem;
        padding-block: 5rem;

        border-block: 1px solid hsl(var(--aw-color-offset));

        .aw-container {
            display: flex;
            flex-direction: column;
            gap: 3rem;

            h2 {
                text-align: center;
            }
        }
    }

    .tickets-preview {
        background: linear-gradient(to bottom, hsl(0 0 0 / 0.32), transparent);
        border-block-end: 1px solid hsl(var(--aw-color-offset));
        padding-block-start: 5rem;
        padding-block-end: 0rem;
        overflow: hidden;

        h2,
        p,
        a {
            text-align: center;
            margin-inline: auto;
            max-inline-size: 21.5625rem;
        }

        p {
            margin-block-start: 1rem;
        }

        a {
            margin-block-start: 1.5rem;
        }

        .tickets {
            display: flex;
            align-items: flex-start;
            flex-wrap: nowrap;
            gap: 2rem;
            width: max-content;
            position: relative;
            left: 50%;
            transform: translateX(-50%);

            .ticket {
                flex-shrink: 0;
                height: 20rem;
                width: auto;
                object-fit: contain;
            }

            &:nth-last-child(2) {
                margin-block-start: 5rem;
            }

            &:last-child {
                margin-block-start: 2rem;
                height: 14rem;
                overflow: hidden;
            }
        }
    }

    .pre-footer {
        padding-block-start: 10rem;
        padding-block-end: 0;
        overflow: hidden;

        .aw-container {
            position: relative;
            height: 43.75rem;

            .text {
                position: absolute;
                inset-inline-start: 0;
                inset-block-start: 10rem;
                max-inline-size: 25rem;

                p {
                    margin-block-start: 0.75rem;
                }

                a {
                    margin-block-start: 2rem;
                }
            }

            .console {
                position: absolute;
                inset-inline-end: -50%;
                inset-block-end: -10rem;
            }

            &::before {
                content: '';
                position: absolute;
                inset-inline-start: -167px;
                inset-block-end: -1000px;

                width: 1104px;
                height: 1104px;

                border-radius: 100%;
                background: radial-gradient(50% 50% at 50% 50%, #fe9567 0%, #fd366e 100%);
                filter: blur(212px);
            }
        }
    }

    .pre-footer :global(+ .aw-container) {
        padding-block-start: 0;
    }

    .pre-footer :global(+ .aw-container nav) {
        margin-block-start: 0;
    }
</style>
