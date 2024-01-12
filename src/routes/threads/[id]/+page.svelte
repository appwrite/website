<script lang="ts">
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';

    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import SeoOgImage from '$lib/components/SeoOgImage.svelte';
    import PreFooter from '../PreFooter.svelte';
    import MessageCard from './MessageCard.svelte';

    export let data;

    const title = 'Support Thread' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const discordLink = "https://discord.com/channels/564160730845151244/{data.discord_id}";

    function shorten(str: string, len: number) {
        return str.length > len ? str.slice(0, len) + '...' : str;
    }
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Desscription -->
    <meta name="description" content={data.seo_description ?? description} />
    <meta property="og:description" content={data.seo_description ?? description} />
    <meta name="twitter:description" content={data.seo_description ?? description} />
    <SeoOgImage
        title={shorten(data.title, 32)}
        description={shorten(data.seo_description ?? DEFAULT_DESCRIPTION, 64)}
    />
</svelte:head>

<Main>
    <div class="aw-container" style="padding-block-end: 0;">
        <div class="header">
            <div>
                <a class="aw-link is-secondary u-cross-baseline" href="/threads">
                    <span class="aw-icon-chevron-left" aria-hidden="true" />
                    <span>Back</span>
                </a>
                <h1 class="aw-title aw-u-color-text-primary">{data.title}</h1>
                <ul class="tags">
                    <li class="aw-tag">
                        <span class="aw-icon-arrow-up" />
                        <span class="text">{data.vote_count}</span>
                    </li>
                    {#each data.tags ?? [] as tag}
                        <li class="aw-tag">
                            <span class="text">{tag}</span>
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="buttons">
                <a
                    class="aw-button"
                    href={discordLink}
                >
                    <span class="aw-icon-discord" />
                    <span class="text">View on Discord</span>
                </a>
            </div>
        </div>

        <div class="thread-grid">
            <div class="messages">
                {#each data.messages ?? [] as message, i}
                    {@const isFirst = i === 0}
                    <MessageCard {message}>
                        {#if isFirst}
                            <div class="aw-inline-info" style:margin-block-start="1.5rem">
                                <span
                                    class="aw-sub-body-500 aw-u-color-text-primary"
                                    style:display="block"
                                >
                                    TL;DR
                                </span>
                                {data.tldr}
                            </div>
                        {/if}
                    </MessageCard>
                {/each}
                <div class="aw-card is-normal has-border-gradient">
                    <span class="aw-sub-body-500 aw-u-color-text-primary">Reply</span>
                    <p class="aw-sub-body-500 u-margin-block-start-16">
                        Reply to this thread by joining our Discord
                    </p>
                    <a
                        class="aw-button u-margin-block-start-24"
                        href={discordLink}
                    >
                        <span class="aw-icon-discord" />
                        <span class="text">Reply on Discord</span>
                    </a>
                </div>
            </div>
            <div class="related">
                {#if data.related.length}
                    <h2 class="aw-eyebrow aw-u-color-text-primary">Recommended threads</h2>
                {/if}
                <ul>
                    {#each data.related as thread}
                        <li>
                            <a href="/threads/{thread.$id}" data-sveltekit-reload>
                                <div class="u-flex u-cross-center">
                                    <span class="aw-sub-body-500 aw-u-color-text-primary">
                                        {thread.title.length > 40
                                            ? thread.title.slice(0, 40) + '...'
                                            : thread.title}
                                    </span>
                                </div>
                                <p class="aw-sub-body-400 u-margin-block-start-8">
                                    {thread.content.length > 160
                                        ? thread.content.slice(0, 160) + '...'
                                        : thread.content}
                                </p>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>

    <PreFooter />
    <div class="aw-container" style="margin-block-start: -7.75rem;">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .header {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 4rem;
        align-items: center;

        margin-block-start: 2.5rem;
    }

    h1 {
        margin-block-start: 1rem;
    }

    .tags {
        display: flex;
        gap: 0.5rem;
        margin-block-start: 1rem;
    }

    .aw-tag {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        text-wrap: nowrap;
    }

    .thread-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 3rem;

        margin-block-start: 2rem;
        border-block-start: 1px solid hsl(var(--aw-color-border));
        padding-block-end: 5rem;
    }

    .messages {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        overflow: hidden;

        padding-block-start: 2rem;

        :global(.aw-card) {
            padding: 1.25rem;
        }
    }

    .related {
        height: 100%;

        position: relative;
        padding-block-start: 2.25rem;

        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -20px;
            width: 1px;
            height: calc(100% + 5rem);
            background-color: hsl(var(--aw-color-border));
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            margin-block-start: 1.5rem;

            li {
                padding-block-end: 1rem;

                &:not(:last-child) {
                    border-block-end: 1px solid hsl(var(--aw-color-smooth));
                }

                &:hover {
                    opacity: 0.75;
                }
            }
        }
    }

    @keyframes dot {
        0% {
            translate: 0 0;
        }
        37% {
            translate: 0 -0.25rem;
        }
        75% {
            translate: 0 0;
        }
    }

    .dots {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        margin-block-start: 0.5rem;
    }

    .dot {
        --p-size: 0.375rem;
        animation: dot 1000ms linear calc(var(--p-index) * 150ms) infinite;
        width: var(--p-size);
        height: var(--p-size);
        border-radius: 100%;
        background-color: white;
    }

    @media #{$break1} {
        .header {
            gap: 2rem;
            grid-template-columns: 1fr;
        }

        .thread-grid {
            grid-template-columns: 1fr;
        }

        .related::before {
            background-color: transparent;
        }
    }
</style>
