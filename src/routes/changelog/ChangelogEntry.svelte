<script lang="ts">
    import { formatDate } from '$lib/utils/date';
    import type { PageData } from './[[page]]/$types';
    import { trackEvent } from '$lib/actions/analytics';

    export let entry: PageData['entries'][0];
</script>

<div class="changelog-entry">
    <time class="text-caption padded" datetime={entry.date}>{formatDate(entry.date)}</time>
    {#if entry.cover}
        <a href={entry.href} class="web-media" onclick={() => trackEvent(`changelog-entry-click`)}>
            <img src={entry.cover} alt="" loading="lazy" class="web-u-media-ratio-16-9 w-full" />
        </a>
    {/if}

    <div class="padded">
        <h2 class="text-title font-aeonik-pro text-primary">
            <a href={entry.href} onclick={() => trackEvent(`changelog-entry-click`)}>
                {entry.title}
            </a>
        </h2>
        <slot />
    </div>
</div>

<style lang="scss">
    .changelog-entry {
        display: grid;
        gap: 20px;
    }

    h2 {
        display: grid;
        padding-block: 0.5rem 1rem;

        &:hover {
            text-decoration: underline;
        }
    }

    @media screen and (min-width: 513px) {
        .padded {
            padding-inline: 1rem;
        }
    }
</style>
