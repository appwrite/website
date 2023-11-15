<script lang="ts">
    import { formatDate } from '$lib/utils/date';
    import type { ChangelogData } from '$markdoc/layouts/Changelog.svelte';

    export let entry: ChangelogData;
</script>

<div class="changelog-entry">
    <time class="aw-caption-400 padded" datetime={entry.date}>{formatDate(entry.date)}</time>
    {#if entry.cover}
        <div class="aw-media">
            <img src={entry.cover} alt="" class="aw-u-media-ratio-16-9 u-width-full-line" />
        </div>
    {/if}

    <div class="padded">
        <h2 class="aw-title aw-u-color-text-primary">{entry.title}</h2>
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
    }

    .padded {
        padding-inline: 1rem;
    }
</style>
