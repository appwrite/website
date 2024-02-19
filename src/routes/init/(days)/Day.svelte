<script lang="ts">
    import CountdownCard from '../(components)/CountdownCard.svelte';

    export let day: string;
    export let release: Date;

    const today = new Date();
    $: hasReleased = today >= release;
</script>

<h2 class="aw-eyebrow aw-u-color-text-primary">
    <div class="aw-dot" />
    {day}<span class="aw-u-color-text-accent">_</span>
</h2>

<div class="u-margin-block-start-16">
    {#if hasReleased}
        <slot />
    {:else}
        <CountdownCard date={release} />
    {/if}
</div>
