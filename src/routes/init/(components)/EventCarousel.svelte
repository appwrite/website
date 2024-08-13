<script lang="ts" context="module">
    import { Carousel } from '$lib/components';
    import type { EventCardProps } from '$routes/community/EventCard.svelte';
    import EventCard from '$routes/community/EventCard.svelte';

    export const events: EventCardProps[] = [
        {
            href: 'https://discord.com/events/564160730845151244/1218597329024843837',
            cover: {
                src: '/images/community/events/28march-office-hours.png',
                alt: ''
            },
            date: '2024-08-19',

            title: 'Init kick off',
            description: 'Join us each day for a special Init event from 19-23 Aug.',
            buttonText: 'View event'
        },
        {
            href: 'https://discord.com/events/564160730845151244/1218597959017431192',
            cover: {
                src: '/images/community/events/4april-office-hours.png',
                alt: ''
            },
            date: '2024-08-20',

            title: 'Guest speaker: Hitesh Choudhary',
            description: 'Join us each day for a special Init event from 19-23 Aug.',
            buttonText: 'View event'
        },
        {
            href: 'https://discord.com/events/564160730845151244/1218598369363230872',
            cover: {
                src: '/images/community/events/11april-office-hours.png',
                alt: ''
            },
            date: '2024-08-21',

            title: 'Guest speaker: Jessica Temporal',
            description: 'Join us each day for a special Init event from 19-23 Aug.',
            buttonText: 'View event'
        },
        {
            href: 'https://discord.com/events/564160730845151244/1218598369363230872',
            cover: {
                src: '/images/community/events/11april-office-hours.png',
                alt: ''
            },
            date: '2024-08-22',

            title: 'Guest speaker: Danny Thompson',
            description: 'Join us each day for a special Init event from 19-23 Aug.',
            buttonText: 'View event'
        },
        {
            href: 'https://discord.com/events/564160730845151244/1218598369363230872',
            cover: {
                src: '/images/community/events/11april-office-hours.png',
                alt: ''
            },
            date: '2024-08-23',

            title: 'Closing party',
            description: 'Join us each day for a special Init event from 19-23 Aug.',
            buttonText: 'View event'
        }
    ];
</script>

<Carousel size="big">
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
