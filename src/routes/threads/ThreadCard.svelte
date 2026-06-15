<script lang="ts">
    import { highlight } from '$lib/actions/highlight';
    import type { DiscordThread } from './types';
    import { sanitizeContent } from '$routes/threads/helpers';

    export let thread: DiscordThread;
    export let query: string;

    $: highlightTerms = query?.split(' ') ?? [];
    $: isResolved = thread.is_resolved || /\[(solved|resolved|closed|fixed)\]/i.test(thread.title);

    function timeAgo(dateStr: string): string {
        const diff = (Date.now() - new Date(dateStr).getTime()) / 1000;
        const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
        if (diff < 3600) return formatter.format(-Math.floor(diff / 60), 'minute');
        if (diff < 86400) return formatter.format(-Math.floor(diff / 3600), 'hour');
        if (diff < 2592000) return formatter.format(-Math.floor(diff / 86400), 'day');
        return formatter.format(-Math.floor(diff / 2592000), 'month');
    }
</script>

{#key highlightTerms}
    <a href="/threads/{thread.discord_id}" class="web-card is-normal has-border-gradient thread">
        <div class="flex min-w-0 gap-2">
            <h3
                class="text-main-body text-primary min-w-0 flex-1 font-medium"
                use:highlight={highlightTerms}
            >
                {thread.title}
            </h3>
            <!-- <time class="text-caption ml-auto">12 Jan, 2023</time> -->
        </div>

        <p
            class="web-main-body-500 u-margin-block-start-4 u-break-word min-w-0"
            use:highlight={highlightTerms}
        >
            {sanitizeContent(thread.content)}
        </p>

        <div class="mt-4 flex min-w-0 flex-wrap justify-between gap-4">
            <ul class="flex min-w-0 flex-wrap gap-2">
                {#if isResolved}
                    <li class="min-w-0">
                        <div class="web-tag is-success truncate">
                            <span class="web-icon-check"></span>
                            Resolved
                        </div>
                    </li>
                {/if}
                {#each thread.tags ?? [] as tag, index (tag + index)}
                    <li class="min-w-0">
                        <div class="web-tag truncate">{tag}</div>
                    </li>
                {/each}
            </ul>

            <div class="flex shrink-0 items-center gap-3">
                <div
                    class="web-icon-button is-more-content web-u-pointer-events-none flex items-center"
                    aria-label="Replies"
                >
                    <span class="web-icon-message web-u-font-size-16" aria-hidden="true"></span>
                    <span class="text-caption font-inter">{thread.message_count}</span>
                </div>
                {#if thread.last_activity}
                    <span class="text-caption">{timeAgo(thread.last_activity)}</span>
                {/if}
            </div>
        </div>
    </a>
{/key}

<style lang="scss">
    .web-card {
        padding: 1.25rem;
        overflow: hidden;
    }

    .thread {
        position: relative;
        max-width: 100%;
        overflow-wrap: break-word;
        word-wrap: break-word;

        p {
            overflow-wrap: break-word;
            word-wrap: break-word;
            hyphens: auto;
        }

        h3 {
            overflow-wrap: break-word;
            word-wrap: break-word;
            hyphens: auto;
        }
    }

    .thread :global(mark) {
        background-color: hsl(var(--web-color-pink-500) / 0.5);
    }

    h3 {
        margin-block-end: 0.25rem;
    }

    .web-tag {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
