<script lang="ts">
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { Button, Icon } from '$lib/components/ui';

    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import SeoOgImage from '$lib/components/SeoOgImage.svelte';
    import PreFooter from '../PreFooter.svelte';
    import MessageCard from './MessageCard.svelte';

    let { data } = $props();

    const title = data.title + ' - Threads' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const discordLink = `https://discord.com/channels/564160730845151244/${data.discord_id}`;

    function shorten(str: string, len: number) {
        return str.length > len ? str.slice(0, len) + '...' : str;
    }
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
    <meta name="description" content={data.seo_description ?? description} />
    <meta property="og:description" content={data.seo_description ?? description} />
    <meta name="twitter:description" content={data.seo_description ?? description} />
    <SeoOgImage
        title={shorten(data.title, 32)}
        description={shorten(data.seo_description ?? DEFAULT_DESCRIPTION, 64)}
    />
</svelte:head>

<Main>
    <div class="web-u-padding-block-end-0 container">
        <div class="header">
            <div>
                <a class="web-link is-secondary items-baseline" href="/threads">
                    <span class="web-icon-chevron-left" aria-hidden="true"></span>
                    <span>Back</span>
                </a>
                <h1 class="text-title font-aeonik-pro text-primary">{data.title}</h1>
                <ul class="tags">
                    <li class="web-tag">
                        <span class="web-icon-arrow-up"></span>
                        <span class="text">{data.vote_count}</span>
                    </li>
                    {#each data.tags ?? [] as tag}
                        <li class="web-tag">
                            <span class="text">{tag}</span>
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="buttons">
                <Button href={discordLink}>
                    <Icon icon="discord"></Icon>
                    View on Discord
                </Button>
            </div>
        </div>

        <div class="thread-grid">
            <div class="messages">
                {#each data.messages ?? [] as message, i}
                    {@const isFirst = i === 0}
                    <MessageCard {message}>
                        {#if isFirst}
                            <div class="web-inline-info web-u-margin-block-start-24">
                                <div class="text-sub-body text-primary font-medium">TL;DR</div>
                                {data.tldr}
                            </div>
                        {/if}
                    </MessageCard>
                {/each}
                <div class="web-card is-normal has-border-gradient">
                    <span class="text-sub-body text-primary font-medium">Reply</span>
                    <p class="text-sub-body mt-4 font-medium">
                        Reply to this thread by joining our Discord
                    </p>
                    <Button class="mt-6" href={discordLink}>
                        <Icon icon="discord"></Icon>
                        Reply on Discord
                    </Button>
                </div>
            </div>
            <div class="related">
                {#if data.related.length}
                    <h2 class="text-micro text-primary uppercase">Recommended threads</h2>
                {/if}
                <ul>
                    {#each data.related as thread}
                        <li>
                            <a href="/threads/{thread.$id}" data-sveltekit-reload>
                                <div class="flex items-center">
                                    <span class="text-sub-body text-primary font-medium">
                                        {thread.title.length > 40
                                            ? thread.title.slice(0, 40) + '...'
                                            : thread.title}
                                    </span>
                                </div>
                                <p class="text-sub-body mt-2">
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
    <div class="container" style="margin-block-start: -7.75rem;">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    @use '$scss/abstract/variables/devices';

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

    .web-tag {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        white-space: nowrap;
    }

    .thread-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 3rem;

        margin-block-start: 2rem;
        border-block-start: 1px solid hsl(var(--web-color-border));
        padding-block-end: 5rem;
    }

    .messages {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        overflow: hidden;

        padding-block-start: 2rem;

        :global(.web-card) {
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
            background-color: hsl(var(--web-color-border));
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            margin-block-start: 1.5rem;

            li {
                padding-block-end: 1rem;

                &:not(:last-child) {
                    border-block-end: 1px solid hsl(var(--web-color-smooth));
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

    @media #{devices.$break1} {
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
