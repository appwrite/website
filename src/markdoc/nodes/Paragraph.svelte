<script lang="ts">
    import { isInChangelog } from '$markdoc/layouts/Changelog.svelte';
    import { isInPolicy } from '$markdoc/layouts/Policy.svelte';
    import { getContext, hasContext } from 'svelte';
    import { isInTable } from './Table.svelte';

    const noParagraph = hasContext('no-paragraph') ? getContext('no-paragraph') : false;
    const isDocs = getContext<boolean>('isDocs') ?? false;
    const inPolicy = isInPolicy();
    const inChangelog = isInChangelog();
    const inTable = isInTable();

    let className = '';
    export { className as class };

    $: classes = (() => {
        if (isDocs) return 'aw-paragraph-md';
        if (inPolicy) return 'aw-paragraph-md in-policy';
        if (inTable) return 'aw-paragraph-md';
        if (inChangelog) return 'aw-paragraph-lg in-changelog';
        return 'aw-paragraph-lg';
    })();
</script>

{#if noParagraph}
    <slot />
{:else}
    <p class="{classes} {className}"><slot /></p>
{/if}

<style lang="scss">
    p.aw-paragraph-lg {
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
