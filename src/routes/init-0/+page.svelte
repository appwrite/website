<script lang="ts">
    import { Carousel, FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import EventCard from '$routes/community/EventCard.svelte';
    import ShinesSvg from './(assets)/shines.svg';
    import DayCard, { type DayType } from './(components)/DayCard.svelte';
    import { events } from '$routes/community/+page.svelte';
    import { Animations } from './(animations)';
    import CountdownCard from './(components)/CountdownCard.svelte';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import thumbnail from './(assets)/thumbnail-1.png';
    import Day from './(days)/Day.svelte';
    import Video from './(components)/Video.svelte';
    import { fade } from 'svelte/transition';
    import Day1 from './(days)/Day1.svelte';
    import Day2 from './(days)/Day2.svelte';
    import Day3 from './(days)/Day3.svelte';
    import Day4 from './(days)/Day4.svelte';
    import Day5 from './(days)/Day5.svelte';
    import ConsoleImage from './(assets)/console.png';
    import SwagsImage from './(assets)/swag.png';
    import Ticket0 from './(assets)/mock/ticket-0.png';
    import Ticket1 from './(assets)/mock/ticket-1.png';
    import Ticket2 from './(assets)/mock/ticket-2.png';
    import Ticket3 from './(assets)/mock/ticket-3.png';
    import Ticket4 from './(assets)/mock/ticket-4.png';
    import Ticket5 from './(assets)/mock/ticket-5.png';
    import Ticket6 from './(assets)/mock/ticket-6.png';
    import Ticket7 from './(assets)/mock/ticket-7.png';
    import Ticket8 from './(assets)/mock/ticket-8.png';
    import Ticket9 from './(assets)/mock/ticket-9.png';
    import Ticket10 from './(assets)/mock/ticket-10.png';
    import Ticket11 from './(assets)/mock/ticket-11.png';
    import Ticket12 from './(assets)/mock/ticket-12.png';
    import { addDays, toReleaseDate } from '$lib/utils/date';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

    const base = new Date('2024-02-26T14:00:00.000Z');
    const kickoff = new Date('2024-02-21T15:00:00.000Z');

    $: days = [
        {
            title: 'Messaging',
            release: base,
            animation: Animations.Messaging
        },
        {
            title: 'SSR',
            release: addDays(base, 1),
            animation: Animations.SSR
        },
        {
            title: 'Enum and 2FA',
            release: addDays(base, 2),
            animation: Animations.Enum
        },
        {
            title: 'Operators',
            release: addDays(base, 3),
            animation: Animations.Operators
        },
        {
            title: 'New runtimes',
            release: addDays(base, 4),
            animation: Animations.Integrations
        }
    ] as DayType[];

    function scrollIntoView(query: string) {
        document.querySelector(query)?.scrollIntoView({
            behavior: 'smooth'
        });
    }

    function shuffle<T>(array: T[]): T[] {
        let currentIndex = array.length,
            randomIndex;

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const users = shuffle([
        Ticket0,
        Ticket1,
        Ticket2,
        Ticket3,
        Ticket4,
        Ticket5,
        Ticket6,
        Ticket7,
        Ticket8,
        Ticket9,
        Ticket10,
        Ticket11,
        Ticket12
    ]);

    let userIndex = 0;
    const getRandomTicket = () => {
        let user = users[userIndex];

        if (!user) {
            userIndex = 0;
            user = users[userIndex];
        }

        userIndex++;

        return user;
    };

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);
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
        <h1>
            <span class="sr-only">Init</span>
            <Animations.Logo />
        </h1>
        <p class="text-description">The start of something new.</p>
        <div class="buttons">
            <button on:click={() => scrollIntoView('#kickoff')} class="web-button is-secondary">
                <div class="web-icon-play"></div>
                <span class="text">Watch the video</span>
            </button>
        </div>

        <img class="shines" src={ShinesSvg} alt="" />
    </div>
    <div class="container">
        <div class="day-cards">
            {#each days as day, i (day.release.toISOString())}
                <DayCard {day} number={i}>
                    {#if day.animation}
                        <svelte:component this={day.animation} />
                    {/if}
                </DayCard>
            {/each}
        </div>
        <hr />
        <div class="days">
            <Day release={kickoff}>
                <div
                    class="web-card is-normal has-border-gradient kickoff"
                    transition:fade={{ delay: 0, duration: 600 }}
                >
                    <h3
                        class="text-title font-aeonik-pro text-primary"
                        id="kickoff"
                        style:scroll-margin-top="5rem"
                    >
                        Init kickoff<span class="web-u-color-text-accent">_</span>
                    </h3>
                    <Video
                        --p-aspect-ratio="16/9"
                        {thumbnail}
                        src="https://www.youtube-nocookie.com/embed/5NtrYks2dqE?si=0vjkBCZYg8yf2GUW&controls=0"
                    />
                </div>
            </Day>
            {#each days as day, i}
                {@const date = `DAY ${i} - ${toReleaseDate(day.release)}`}
                {#if i === 0}
                    <Day1 {date} release={day.release} />
                {:else if i === 1}
                    <Day2 {date} release={day.release} />
                {:else if i === 2}
                    <Day3 {date} release={day.release} />
                {:else if i === 3}
                    <Day4 {date} release={day.release} />
                {:else if i === 4}
                    <Day5 {date} release={day.release} />
                {:else}
                    <h2 class="text-micro text-primary uppercase">
                        <div class="web-dot"></div>
                        {date}
                        <span class="web-u-color-text-accent">_</span>
                    </h2>
                    <CountdownCard date={day.release} />
                {/if}
            {/each}
        </div>
    </div>

    <div class="events">
        <div class="container">
            <Carousel size="big">
                {#snippet header()}
                    <h2 class="text-label text-primary">Upcoming Events</h2>
                {/snippet}
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
            </Carousel>
        </div>
    </div>

    <div class="tickets-preview">
        <div class="container">
            <div>
                <h2 class="text-label text-primary">Init 1.0 ran from February 26 to March 1</h2>
            </div>

            <div class="web-card is-normal has-border-gradient">
                <img class="swag" src={SwagsImage} alt="" />
            </div>
        </div>

        <div class="tickets web-u-hide-mobile">
            <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
            {#each { length: 10 } as _}
                <img
                    src={getRandomTicket()}
                    style:width="14rem"
                    style:object-fit="cover"
                    style:object-position="top"
                    alt="Appwrite Init Ticket"
                />
            {/each}
        </div>
        <div class="tickets">
            <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
            {#each { length: 9 } as _}
                <img
                    src={getRandomTicket()}
                    style:width="14rem"
                    style:object-fit="cover"
                    style:object-position="top"
                    alt="Appwrite Init Ticket"
                />
            {/each}
        </div>
    </div>

    <div class="pre-footer">
        <div class="container">
            <div class="text">
                <h2 class="text-label text-primary">Start building with Appwrite</h2>
                <p class="text-body font-medium">
                    Appwrite's open-source platform lets you add Auth, DBs, Functions and Storage to
                    your product and build any application at any scale, own your data, and use your
                    preferred coding languages and tools.
                </p>
                <a href={getAppwriteDashboardUrl()} class="web-button">Get started</a>
            </div>

            <img class="console" src={ConsoleImage} alt="" />
        </div>
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    .hero {
        min-height: 500px;
        height: 70vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        position: relative;
        overflow-x: clip;

        h1 {
            :global(img) {
                inline-size: 13.9375rem;
            }
        }

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

        .shines {
            position: absolute;
            max-block-size: unset;
            max-inline-size: unset;
            inline-size: 2500px;
            inset-block-start: -500px;
            pointer-events: none;
            filter: blur(74.4275894165039px);
        }
    }

    hr {
        border-block-start: 1px solid hsl(var(--web-color-offset));
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
    }

    .kickoff {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        background:
            linear-gradient(
                93deg,
                rgba(253, 54, 110, 0.2) 0.29%,
                rgba(35, 35, 37, 0.2) 52.57%,
                rgba(35, 35, 37, 0.2) 100%
            ),
            #232325;
        padding: 0.5rem;

        height: 25rem;

        h3 {
            padding-block-start: 1.5rem;
            padding-inline-start: 1.5rem;
        }

        @media screen and (max-width: 1023px) {
            flex-direction: column;
            gap: 1rem;
            height: unset;

            h3 {
                padding-inline-start: 1.25rem;
            }
        }
    }

    .events {
        margin-block-start: 5rem;
        padding-block: 5rem;

        border-block: 1px solid hsl(var(--web-color-offset));

        .container {
            display: flex;
            flex-direction: column;
            gap: 3rem;

            h2 {
                text-align: center;
            }
        }
    }

    .tickets-preview {
        background: linear-gradient(to bottom, hsl(0, 0%, 0%, 0.32), transparent);
        border-block-end: 1px solid hsl(var(--web-color-offset));
        padding-block-start: 5rem;
        padding-block-end: 0rem;
        overflow: hidden;

        .container {
            display: flex;
            justify-content: space-between;

            > :first-child {
                max-inline-size: 360px;
                text-wrap: balance;
            }

            .web-card {
                width: 480px;
                height: 200px;
                padding: 8px;

                .swag {
                    border-radius: 12px;
                    object-fit: cover;
                }
            }

            @media screen and (max-width: 1023px) {
                flex-direction: column-reverse;
                align-items: center;
                gap: 2rem;

                > :first-child {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;

                    :global(.web-button) {
                        width: 100%;
                    }
                }

                .web-card {
                    width: 100%;
                    height: 200px;
                }
            }
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
        padding-block-start: 0rem;
        padding-block-end: 0;
        overflow: hidden;

        .container {
            position: relative;
            height: 43.75rem;

            @media screen and (max-width: 1023px) {
                height: 38rem;
            }

            .text {
                position: relative;
                inset-block-start: 10rem;
                max-inline-size: 25rem;

                @media screen and (max-width: 1023px) {
                    inset-block-start: 3rem;
                }

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

                @media screen and (max-width: 1023px) {
                    inset-inline-end: -100px;
                    inset-block-end: 3rem;

                    max-block-size: unset;
                    block-size: 275px;
                    max-inline-size: unset;
                    inline-size: auto;
                }
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

    .pre-footer :global(+ .container) {
        padding-block-start: 0;
    }

    .pre-footer :global(+ .container nav) {
        margin-block-start: 0;
    }
</style>
