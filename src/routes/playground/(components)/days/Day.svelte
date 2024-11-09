<script lang="ts">
    import PreReleaseCard from '../PreReleaseCard.svelte';

    export let release: Date;

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

{#if hasReleased}
    <slot />
{:else}
    <PreReleaseCard index={1} {release} />
{/if}
