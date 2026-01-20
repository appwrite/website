<script lang="ts">
    import { page } from '$app/state';
    import type { Snippet } from 'svelte';

    const { children }: { children: Snippet } = $props();

    // Check if the current version is not the canonical "cloud" version
    const isOldVersion = $derived(page.params?.version && page.params.version !== 'cloud');
</script>

<svelte:head>
    {#if isOldVersion}
        <!-- Noindex old documentation versions to avoid duplicates -->
        <meta name="robots" content="noindex, follow" />
    {/if}
</svelte:head>

{@render children()}
