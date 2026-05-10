<script lang="ts">
    import { formatDate } from '$lib/utils/date';
    import type { PageData } from './[[page]]/$types';
    import { trackEvent } from '$lib/actions/analytics';

    export let entry: PageData['entries'][0];
</script>

<div class="changelog-entry grid min-w-0 gap-5">
    <time class="text-eyebrow px-4 uppercase sm:px-0" datetime={entry.date}
        >{formatDate(entry.date)}</time
    >
    {#if entry.cover}
        <a href={entry.href} class="web-media" onclick={() => trackEvent(`changelog-entry-click`)}>
            <img src={entry.cover} alt="" loading="lazy" class="web-u-media-ratio-16-9 w-full" />
        </a>
    {/if}

    <div class="entry-content prose prose-large min-w-0 px-4 sm:px-0">
        <h2 class="text-title not-prose font-aeonik-pro text-primary mb-8">
            <a href={entry.href} onclick={() => trackEvent(`changelog-entry-click`)}>
                {entry.title}
            </a>
        </h2>
        <slot />
    </div>
</div>

<style lang="scss">
    .changelog-entry,
    .entry-content {
        min-width: 0;
    }

    .entry-content {
        overflow-x: clip;
    }
</style>
