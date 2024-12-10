<script lang="ts">
    import { isInChangelog } from '$markdoc/layouts/Changelog.svelte';
    import { isInPolicy } from '$markdoc/layouts/Policy.svelte';
    import { getContext, hasContext } from 'svelte';
    import { isInTable } from './Table.svelte';
    import { isInDocs, isInTutorialDocs } from '$lib/layouts/Docs.svelte';

    const noParagraph = hasContext('no-paragraph') ? getContext('no-paragraph') : false;
    const inDocs = isInDocs();
    const inTutorialDocs = isInTutorialDocs();
    const inPolicy = isInPolicy();
    const inChangelog = isInChangelog();
    const inTable = isInTable();

    let className = '';
    export { className as class };

    $: classes = (() => {
        if (inDocs) return 'text-paragraph-md mb-8';
        if (inPolicy) return 'text-paragraph-md mb-4';
        if (inTable) return 'text-paragraph-md';
        if (inTutorialDocs) return 'text-paragraph-md mb-2';
        if (inChangelog) return 'text-paragraph-lg mb-4 font-normal';
        return 'text-paragraph-lg mb-8';
    })();
</script>

{#if noParagraph}
    <slot />
{:else}
    <p class="{classes} {className}"><slot /></p>
{/if}
