<script lang="ts">
    import CountdownCard from '../(components)/CountdownCard.svelte';

    export let release: Date;
    export let day: string | undefined = undefined;

    let now = new Date();
    let interval = setInterval(() => {
        if (hasReleased) {
            clearInterval(interval);
            return;
        }
        now = new Date();
    }, 1000);

    $: hasReleased = now >= release;
</script>

<h2 class="text-micro text-primary uppercase">
    <div class="web-dot"></div>
    {#if day !== undefined}
        {day}<span class="web-u-color-text-accent">_</span>
    {/if}
</h2>

<div class="mt-4">
    {#if hasReleased}
        <slot />
    {:else}
        <CountdownCard date={release} />
    {/if}
</div>
