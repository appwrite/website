<script lang="ts">
    import { highlight } from '$lib/actions/highlight';
    import { createSearchParams } from '$lib/stores/searchParams';
    import type { DiscordThread } from './types';

    export let thread: DiscordThread;

    const searchParams = createSearchParams();

    $: highlightTerms = $searchParams.get('q')?.split(' ') ?? [];
</script>

{#key highlightTerms}
    <div class="aw-card is-normal has-border-gradient thread">
        <h3 class="aw-main-body-500" use:highlight={highlightTerms}>
            {thread.name}
        </h3>

        <a href="/support-threads/{thread.discord_id}">
            <span class="icon-external-link" />
        </a>
    </div>
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

    a {
        position: absolute;
        right: 1rem;
        top: 1rem;

        &:hover {
            opacity: 0.5;
        }
    }
</style>
