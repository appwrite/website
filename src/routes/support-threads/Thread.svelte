<script lang="ts">
    import { page } from '$app/stores';
    import { highlight } from '$lib/actions/highlight';
    import type { MockThread } from './types';

    export let thread: MockThread;

    $: highlightTerms = $page.url.searchParams.get('q')?.split(' ') ?? [];
</script>

{#key highlightTerms}
    <a href="/support-threads/{thread.id}" class="aw-card is-normal has-border-gradient thread">
        <div class="u-flex u-gap-8">
            <h3 class="aw-main-body-500 aw-u-color-text-primary" use:highlight={highlightTerms}>
                {thread.title}
            </h3>
            <time class="aw-caption-400 u-margin-inline-start-auto">12 Jan, 2023</time>
        </div>

        <p class="aw-main-body-500 u-margin-block-start-4">{thread.text}</p>

        <div class="u-flex u-main-space-between u-gap-16 u-margin-block-start-16">
            <ul class="u-flex u-gap-8">
                <li>
                    <div class="aw-tag">Flutter</div>
                </li>
                <li>
                    <div class="aw-tag">Self hosted</div>
                </li>
            </ul>

            <ul class="u-flex u-gap-8">
                <li>
                    <div class="aw-icon-button is-more-content" aria-label="up votes">
                        <span class="aw-icon-arrow-up" aria-hidden="true" />
                        <span class="aw-caption-400 aw-u-line-height-1-2">4</span>
                    </div>
                </li>
                <li>
                    <div class="aw-icon-button is-more-content" aria-label="responds">
                        <span class="aw-icon-discord" aria-hidden="true" style="font-size:1rem" />
                        <span class="aw-caption-400 aw-u-line-height-1-2">4</span>
                    </div>
                </li>
            </ul>
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
</style>
