<script lang="ts">
    import { highlight } from '$lib/actions/highlight';
    import { createSearchParams } from '$lib/stores/searchParams';
    import type { MockThread } from './types';

    export let thread: MockThread;

    const searchParams = createSearchParams();

    $: highlightTerms = $searchParams.get('q')?.split(' ') ?? [];

    $: console.log($searchParams);
</script>

{#key highlightTerms}
    <a href="/support-threads/{thread.id}" class="aw-card is-normal thread">
        <div class="u-flex u-gap-8">
            <h3 class="aw-main-body-500 aw-u-color-text-primary" use:highlight={highlightTerms}>
                {thread.title}
            </h3>
            <time class="aw-caption-400 u-margin-inline-start-auto">12 Jan, 2023</time>
        </div>

        <p>{thread.text}</p>

        <h4 class="aw-eyebrow">Replies</h4>
        <div class="replies">
            {#each thread.replies as reply}
                <div class="reply">
                    <p class="aw-caption-400" use:highlight={highlightTerms}>{reply.text}</p>
                </div>
            {/each}
        </div>
    </a>
{/key}

<style lang="scss">
    .thread {
        position: relative;
    }

    .thread :global(mark) {
        background-color: hsl(var(--aw-color-mint-700) / 0.5);
    }

    h3 {
        margin-block-end: 0.25rem;
    }

    h4 {
        margin-block-start: 1rem;
    }

    .replies {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        margin-block-start: 0.5rem;
    }

    .reply {
        padding: 0.25rem 1rem;

        border-inline-start: 1px solid hsl(var(--aw-color-greyscale-500));
        margin-inline-start: 0.5rem;
    }

    a {
        position: absolute;
        right: 1rem;
        top: 1rem;

        &:hover {
            opacity: 0.5;
        }
    }
</style>
