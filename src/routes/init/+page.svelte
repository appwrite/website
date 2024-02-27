<script lang="ts">
    import { Carousel, FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import EventCard from '$routes/community/EventCard.svelte';
    import ShinesSvg from './(assets)/shines.svg';
    import DayCard, { type DayType } from './(components)/DayCard.svelte';
    import { events } from '$routes/community/+page.svelte';
    import { Animations } from './(animations)';
    import Ticket from './(components)/Ticket.svelte';
    import { getMockContributions } from './helpers';
    import { randomPick } from '$lib/utils/random';
    import { tribes } from './tickets/customize/form.svelte';
    import type { TicketVariant } from './tickets/constants';
    import CountdownCard from './(components)/CountdownCard.svelte';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import thumbnail from './(assets)/thumbnail-1.png';
    import Day from './(days)/Day.svelte';
    import Video from './(components)/Video.svelte';
    import { fade } from 'svelte/transition';
    import Day1 from './(days)/Day1.svelte';
    import Day2 from './(days)/Day2.svelte';
    import ConsoleImage from './(assets)/console.png';
    import SwagsImage from './(assets)/swag.png';

    const base = new Date('2024-02-26T14:00:00.000Z');
    const kickoff = new Date('2024-02-21T15:00:00.000Z');

    function addDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }

    function toReleaseDate(date: Date): string {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric'
        });
    }

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
            title: 'XXX',
            release: addDays(base, 2)
        },
        {
            title: 'XXX',
            release: addDays(base, 3)
        },
        {
            title: 'XXX',
            release: addDays(base, 4)
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
        { name: 'Eldad Fux', user: 'eldadfux' },
        { name: 'Thomas', user: 'tglide' },
        { name: "Walter O'Brien", user: 'walterob' },
        { name: 'Sara Kaandorp', user: 'sarak' },
        { name: 'Carla Alexander', user: 'carla' },
        { name: 'Chen Parnasa', user: 'chenp' },
        { name: 'Caio Arias', user: 'caioarias' },
        { name: 'Bradley Schofield', user: '.ionic' },
        { name: 'Dylan Graham', user: 'dylan' },
        { name: 'Emma Carpagnano', user: 'emmacarpagnano' },
        { name: 'Torsten Dittmann', user: 'torstendittmann' },
        { name: 'Arman Nik', user: 'armanNik' },
        { name: 'Christy Jacob', user: 'christyjacob4' },
        { name: 'Damodar Lohani', user: 'lohanidamodar' },
        { name: 'Jake Barnby', user: 'abnegate' },
        { name: 'Aditya Oberai', user: 'adityaoberai' },
        { name: 'Wess Cope', user: 'wess' },
        { name: 'Matej Bačo', user: 'meldiron' },
        { name: 'Khushboo Verma', user: 'vermakhushboo' },
        { name: 'May Ender', user: 'mayender' },
        { name: 'Elad Shechter', user: 'elad2412' },
        { name: 'Vincent Ge', user: 'wenYuGe1' },
        { name: 'Chen Parnasa', user: 'chenparnasa' },
        { name: 'Tessa Mero', user: 'tessamero' },
        { name: 'Shimon Newman', user: 'shimonewman' },
        { name: 'Shmuel Fogel', user: 'fogelito' },
        { name: 'Steven Nguyen', user: 'stnguyen90' },
        { name: 'Jade Baudchon', user: 'dajebp' },
        { name: 'Holly Barclay', user: 'holly' },
        { name: 'Laura Du Ry', user: 'lauraDuRy' },
        { name: 'Luke Silver', user: 'loks0n' },
        { name: 'Sümeyra Bulut', user: 'sumeyra' },
        { name: 'Dennis Ivy', user: 'divanov11' },
        { name: 'Andrea Fernández Camps', user: 'andrea' },
        { name: 'Evan LeAir', user: 'evdog4life' }
    ]);

    let userIndex = 0;
    const getRandomTicket = () => {
        let user = users[userIndex];

        if (!user) {
            userIndex = 0;
            user = users[userIndex];
        }

        userIndex++;

        const tribe = randomPick(tribes);

        return {
            name: user.name,
            gh_user: user.user,
            tribe,
            variant: randomPick(['default', 'rainbow', 'pink']) as TicketVariant,
            id: Math.floor(Math.random() * 100000),
            contributions: getMockContributions()
        };
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
        <p class="aw-description">The start of something new.</p>
        <div class="buttons">
            <a href="/init/tickets" class="aw-button">Claim your ticket</a>
            <button on:click={() => scrollIntoView('#kickoff')} class="aw-button is-secondary">
                <div class="aw-icon-play" />
                <span class="text">Watch the video</span>
            </button>
        </div>

        <img class="shines" src={ShinesSvg} alt="" />
    </div>
    <div class="aw-container">
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
                    class="aw-card is-normal has-border-gradient kickoff"
                    transition:fade={{ delay: 0, duration: 600 }}
                >
                    <h3
                        class="aw-title aw-u-color-text-primary"
                        id="kickoff"
                        style:scroll-margin-top="5rem"
                    >
                        Init kickoff<span class="aw-u-color-text-accent">_</span>
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
                {:else}
                    <h2 class="aw-eyebrow aw-u-color-text-primary">
                        <div class="aw-dot" />
                        {date}
                        <span class="aw-u-color-text-accent">_</span>
                    </h2>
                    <CountdownCard date={day.release} />
                {/if}
            {/each}
        </div>
    </div>

    <div class="events">
        <div class="aw-container">
            <Carousel size="big">
                <svelte:fragment slot="header">
                    <h2 class="aw-label aw-u-color-text-primary">Upcoming Events</h2>
                </svelte:fragment>
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
        <div class="aw-container">
            <div>
                <h2 class="aw-label aw-u-color-text-primary">
                    Get a ticket and enter our special Init giveaway
                </h2>
                <p class="aw-sub-body-500">
                    Create, customize, and share your Init ticket to enter our general giveaway.
                </p>
                <a href="/init/tickets" class="aw-button is-secondary">Claim your ticket</a>
            </div>

            <div class="aw-card is-normal has-border-gradient">
                <img class="swag" src={SwagsImage} alt="" />
            </div>
        </div>

        <div class="tickets">
            <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
            {#each { length: 10 } as _}
                <Ticket {...getRandomTicket()} disableEffects --base-width="14rem" />
            {/each}
        </div>
        <div class="tickets">
            <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
            {#each { length: 9 } as _}
                <Ticket {...getRandomTicket()} disableEffects --base-width="14rem" />
            {/each}
        </div>
    </div>

    <div class="pre-footer">
        <div class="aw-container">
            <div class="text">
                <h2 class="aw-label aw-u-color-text-primary">Start building with Appwrite</h2>
                <p class="aw-main-body-500">
                    Appwrite's open-source platform lets you add Auth, DBs, Functions and Storage to
                    your product and build any application at any scale, own your data, and use your
                    preferred coding languages and tools.
                </p>
                <a href="https://cloud.appwrite.io" class="aw-button">Get started</a>
            </div>

            <img class="console" src={ConsoleImage} alt="" />
        </div>
    </div>

    <div class="aw-container">
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
            img {
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

                .aw-button {
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
        border-block-start: 1px solid hsl(var(--aw-color-offset));
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
                hsl(var(--aw-color-accent)) 0%,
                hsl(var(--aw-color-subtle)) 10%,
                hsl(var(--aw-color-subtle)) 90%,
                transparent 100%
            );
        }

        :global(h2) {
            position: relative;
            margin-block-end: 1rem;

            &:not(:first-child) {
                margin-block-start: 5rem;
            }

            :global(.aw-dot) {
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

        background: linear-gradient(
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
        background: linear-gradient(to bottom, hsl(0, 0%, 0%, 0.32), transparent);
        border-block-end: 1px solid hsl(var(--aw-color-offset));
        padding-block-start: 5rem;
        padding-block-end: 0rem;
        overflow: hidden;

        .aw-container {
            display: flex;
            justify-content: space-between;

            > :first-child {
                max-inline-size: 360px;
                text-wrap: balance;
            }

            .aw-card {
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

                    .aw-button {
                        width: 100%;
                    }
                }

                .aw-card {
                    width: 100%;
                    height: 200px;
                }
            }
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

        .aw-container {
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

    .pre-footer :global(+ .aw-container) {
        padding-block-start: 0;
    }

    .pre-footer :global(+ .aw-container nav) {
        margin-block-start: 0;
    }
</style>
