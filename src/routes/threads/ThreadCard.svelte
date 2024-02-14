<script lang="ts">
    import { highlight } from '$lib/actions/highlight';
    import type { DiscordThread } from './types';

    export let thread: DiscordThread;
    export let query: string;

    $: highlightTerms = query?.split(' ') ?? [];
</script>

{#key highlightTerms}
    <a
        href="/threads/{thread.discord_id}"
        class="aw-card is-normal has-border-gradient thread"
    >
        <div class="u-flex u-gap-8">
            <h3 class="aw-main-body-500 aw-u-color-text-primary u-break-word" use:highlight={highlightTerms}>
                {thread.title}
            </h3>
            <!-- <time class="aw-caption-400 u-margin-inline-start-auto">12 Jan, 2023</time> -->
        </div>

        <p class="aw-main-body-500 u-margin-block-start-4 u-break-word" use:highlight={highlightTerms}>
            {thread.content.length > 200 ? thread.content.slice(0, 200) + '...' : thread.content}
        </p>

        <div class="u-flex u-main-space-between u-gap-16 u-margin-block-start-16">
            <ul class="u-flex u-gap-8">
                {#each thread.tags ?? [] as tag}
                    <li>
                        <div class="aw-tag">{tag}</div>
                    </li>
                {/each}
            </ul>

            <div
                class="aw-icon-button is-more-content aw-u-pointer-events-none"
                aria-label="Replies"
            >
                <span class="aw-icon-message aw-u-font-size-16" aria-hidden="true" />
                <span class="aw-caption-400 aw-u-line-height-1-2">{thread.message_count}</span>
            </div>
        </div>
    </a>
{/key}

<style lang="scss">
    .aw-card {
        padding: 1.25rem;
    }

    .thread {
        position: relative;

        p: {
          overflow-wrap: break-word;
        }
    }

    .thread :global(mark) {
        background-color: hsl(var(--aw-color-pink-500) / 0.5);
    }

    h3 {
        margin-block-end: 0.25rem;
    }
</style>
