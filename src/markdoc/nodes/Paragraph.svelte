<script lang="ts">
    import { isInChangelog } from '$markdoc/layouts/Changelog.svelte';
    import { isInPolicy } from '$markdoc/layouts/Policy.svelte';
    import { getContext, hasContext } from 'svelte';
    import { isInTable } from './Table.svelte';
    import { isInDocs } from '$lib/layouts/Docs.svelte';

    const noParagraph = hasContext('no-paragraph') ? getContext('no-paragraph') : false;
    const inDocs = isInDocs();
    const inPolicy = isInPolicy();
    const inChangelog = isInChangelog();
    const inTable = isInTable();

    let className = '';
    export { className as class };

    $: classes = (() => {
        if (inDocs) return 'web-paragraph-md';
        if (inPolicy) return 'web-paragraph-md in-policy';
        if (inTable) return 'web-paragraph-md';
        if (inChangelog) return 'web-paragraph-lg in-changelog';
        return 'web-paragraph-lg';
    })();
</script>

{#if noParagraph}
    <slot />
{:else}
    <p class="{classes} {className}"><slot /></p>
{/if}

<style lang="scss">
    p.web-paragraph-lg {
        margin-block-end: 2rem;
    }

    .in-policy {
        margin-block-end: 1rem;
    }

    .in-changelog {
        margin-block-end: 1rem !important;
        font-weight: 400;
    }
</style>
