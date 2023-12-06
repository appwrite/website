<script lang="ts">
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';

    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import { formatDate } from '$lib/utils/date.js';
    import MessageCard from './MessageCard.svelte';

    export let data;

    const title = 'Support Thread' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    $: timestamp = data.messages?.[0].timestamp;
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Desscription -->
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
    <div class="center-grid aw-container">
        <a class="aw-link aw-u-color-text-secondary" href="/support-threads">
            <span class="aw-icon-chevron-left" aria-hidden="true" />
            <span>Back to support threads</span>
        </a>
        <div class="thread">
            {#if timestamp}
                <p class="aw-caption-400 timestamp">
                    {formatDate(timestamp)}
                </p>
            {/if}
            <h1 class="aw-title aw-u-color-text-primary">{data.name}</h1>
            <hr />

            <div class="messages">
                {#each data.messages ?? [] as message}
                    <MessageCard {message} />
                {/each}
            </div>

            <a
                class="aw-button"
                href="https://discord.com/channels/1096473701832200302/{data.discord_id}"
            >
                <span class="aw-icon-ext-link" />
                <span class="text">View on Discord</span>
            </a>
        </div>
    </div>
    <div class="aw-container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .center-grid {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        gap: 3.4rem;

        margin-block-start: 3rem;
    }

    .timestamp {
        margin-block-end: 0.5rem;
    }

    hr {
        border-block-end: 1px solid hsl(var(--aw-color-smooth));
        margin-block: 2rem 3rem;
    }

    .messages {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .aw-button {
        margin-block-start: 5rem;
        margin-inline: auto;
    }

    @media #{$break1} {
        .center-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
