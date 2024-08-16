<script lang="ts" context="module">
    import { Carousel } from '$lib/components';
    import day0 from '../(assets)/discord/day-0.png';
    import day1 from '../(assets)/discord/day-1.png';
    import day2 from '../(assets)/discord/day-2.png';
    import day3 from '../(assets)/discord/day-3.png';
    import day4 from '../(assets)/discord/day-4.png';
    import type { EventCardProps } from './EventCard.svelte';
    import EventCard from './EventCard.svelte';

    export const events: EventCardProps[] = [
        {
            href: 'https://discord.com/events/564160730845151244/1218597329024843837',
            cover: {
                src: day0,
                alt: ''
            },
            date: '2024-08-19T15:00:00.000Z',
            title: 'Local development',
            description: 'Discussion on serverless DevEx and challenges.',
            buttonText: 'View event'
        },
        {
            href: 'https://discord.com/events/564160730845151244/1218597959017431192',
            cover: {
                src: day1,
                alt: ''
            },
            date: '2024-08-20T15:00:00.000Z',

            title: 'CLI: Vincent Ge',
            description: 'Discussion on command line tooling.',
            buttonText: 'View event'
        },
        {
            href: 'https://discord.com/events/564160730845151244/1218598369363230872',
            cover: {
                src: day2,
                alt: ''
            },
            date: '2024-08-21T15:00:00.000Z',

            title: 'Functions ecosystem: Jim Bennett',
            description: 'Discussion on serverless functions in general.',
            buttonText: 'View event'
        },
        {
            href: 'https://discord.com/events/564160730845151244/1218598369363230872',
            cover: {
                src: day3,
                alt: ''
            },
            date: '2024-08-22T15:00:00.000Z',

            title: 'Golang support: Demola Malomo',
            description: 'Discussion on Golang as a language.',
            buttonText: 'View event'
        },
        {
            href: 'https://discord.com/events/564160730845151244/1218598369363230872',
            cover: {
                src: day4,
                alt: ''
            },
            date: '2024-08-23T15:00:00.000Z',

            title: 'Closing party',
            description:
                'Discussion will summarise Init + cover favourite announcements from speakers.',
            buttonText: 'View event'
        }
    ];
</script>

<div class="carousel">
    <div class="web-container">
        <Carousel size="medium">
            <svelte:fragment slot="header">
                <h4 class="web-label web-u-color-text-primary">Upcoming Events</h4>
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
                    />
                </li>
            {/each}
        </Carousel>
    </div>
</div>

<style lang="scss">
    .carousel {
        margin-top: 160px;
        padding: 80px 0;
        background: hsl(var(--web-color-background));
        border-bottom: 1px solid hsl(var(--web-color-offset));
        border-top: 1px solid hsl(var(--web-color-offset));
    }
</style>
