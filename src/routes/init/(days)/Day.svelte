<script lang="ts">
    import CountdownCard from '../(components)/CountdownCard.svelte';

    export let release: Date;
    export let day: string | undefined = undefined;

    let today = new Date();
    let interval = setInterval(() => {
        if (hasReleased) {
            clearInterval(interval);
            return;
        }
        today = new Date();
    }, 1000);

    $: hasReleased = today >= release;
</script>

<h2 class="aw-eyebrow aw-u-color-text-primary">
    <div class="aw-dot" />
    {#if day !== undefined}
        {day}<span class="aw-u-color-text-accent">_</span>
    {/if}
</h2>

<div class="u-margin-block-start-16">
    {#if hasReleased}
        <slot />
    {:else}
        <CountdownCard date={release} />
    {/if}
</div>
