<script lang="ts">
    import { page } from '$app/state';
    import { CANONICAL_DOCS_VERSION } from '$lib/utils/canonical';
    import type { Snippet } from 'svelte';

    const { children }: { children: Snippet } = $props();

    // Check if the current version is not the canonical (latest) version
    const isOldVersion = $derived(
        page.params?.version &&
            page.params.version !== CANONICAL_DOCS_VERSION &&
            page.params.version !== 'cloud'
    );
</script>

<svelte:head>
    {#if isOldVersion}
        <!-- Noindex old documentation versions to avoid duplicates -->
        <meta name="robots" content="noindex, follow" />
    {/if}
</svelte:head>

{@render children()}
