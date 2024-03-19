<script lang="ts">
    import { formatDate } from '$lib/utils/date';
    import type { PageData } from './[[page]]/$types';

    export let entry: PageData['entries'][0];
</script>

<div class="changelog-entry">
    <time class="aw-caption-400 padded" datetime={entry.date}>{formatDate(entry.date)}</time>
    {#if entry.cover}
        <a href={entry.href} class="aw-media">
            <img src={entry.cover} alt="" class="aw-u-media-ratio-16-9 u-width-full-line" />
        </a>
    {/if}

    <div class="padded">
        <h2 class="aw-title aw-u-color-text-primary">
            <a href={entry.href}>
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
