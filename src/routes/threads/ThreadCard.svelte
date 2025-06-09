<script lang="ts">
    import { highlight } from '$lib/actions/highlight';
    import type { DiscordThread } from './types';
    import { sanitizeContent } from '$routes/threads/helpers';

    export let thread: DiscordThread;
    export let query: string;

    $: highlightTerms = query?.split(' ') ?? [];
</script>

{#key highlightTerms}
    <a href="/threads/{thread.discord_id}" class="web-card is-normal has-border-gradient thread">
        <div class="flex gap-2">
            <h3
                class="text-body text-primary font-medium break-words"
                use:highlight={highlightTerms}
            >
                {thread.title}
            </h3>
            <!-- <time class="text-caption ml-auto">12 Jan, 2023</time> -->
        </div>

        <p
            class="web-main-body-500 u-margin-block-start-4 u-break-word"
            use:highlight={highlightTerms}
        >
            {sanitizeContent(thread.content)}
        </p>

        <div class="mt-4 flex justify-between gap-4">
            <ul class="flex gap-2">
                {#each thread.tags ?? [] as tag}
                    <li>
                        <div class="web-tag">{tag}</div>
                    </li>
                {/each}
            </ul>

            <div
                class="web-icon-button is-more-content web-u-pointer-events-none flex items-center"
                aria-label="Replies"
            >
                <span class="web-icon-message web-u-font-size-16" aria-hidden="true"></span>
                <span class="text-caption font-sans">{thread.message_count}</span>
            </div>
        </div>
    </a>
{/key}

<style lang="scss">
    .web-card {
        padding: 1.25rem;
    }

    .thread {
        position: relative;

        p: {
            overflow-wrap: break-word;
        }
    }

    .thread :global(mark) {
        background-color: hsl(var(--web-color-pink-500) / 0.5);
    }

    h3 {
        margin-block-end: 0.25rem;
    }
</style>
