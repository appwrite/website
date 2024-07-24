<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { addDays, toReleaseDate } from '$lib/utils/date';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import { fade } from 'svelte/transition';
    import DayCard, { type DayType } from './(components)/DayCard.svelte';
    import Lockup from './(components)/Hero.svelte';
    import Video from './(components)/Video.svelte';
    import CountdownCard from './(components)/CountdownCard.svelte';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);

    const base = new Date('2024-08-19T15:00:00.000Z');
    const kickoff = new Date('2024-08-23T15:00:00.000Z');

    $: days = [
        {
            title: 'Messaging',
            release: base
        },
        {
            title: 'SSR',
            release: addDays(base, 1)
        },
        {
            title: 'Enum and 2FA',
            release: addDays(base, 2)
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
    <Lockup />

    <div class="web-container">
        <div class="day-cards">
            {#each days as day, i (day.release.toISOString())}
                <DayCard {day} number={i}>
                    <div class="web-card is-normal has-border-gradient">
                        <h3 class="web-title web-u-color-text-primary">{day.title}</h3>
                    </div>
                </DayCard>
            {/each}
        </div>
        <hr />
        <div class="days">
            <div
                class="web-card is-normal has-border-gradient kickoff"
                transition:fade={{ delay: 0, duration: 600 }}
            >
                <h3
                    class="web-title web-u-color-text-primary"
                    id="kickoff"
                    style:scroll-margin-top="5rem"
                >
                    init kickoff
                </h3>
                <Video
                    --p-aspect-ratio="16/9"
                    thumbnail=""
                    src="https://www.youtube-nocookie.com/embed/5NtrYks2dqE?si=0vjkBCZYg8yf2GUW&controls=0"
                />
            </div>

            {#each days as day, i}
                {@const date = `DAY ${i} - ${toReleaseDate(day.release)}`}

                <h2 class="web-eyebrow web-u-color-text-primary">
                    <div class="web-dot" />
                    {date}
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
