<script lang="ts">
    import { getContext, hasContext } from 'svelte';

    const noParagraph = hasContext('no-paragraph') ? getContext('no-paragraph') : false;
    const isDocs = getContext('isDocs') ?? false;

    let className = '';
    export { className as class };
</script>

{#if noParagraph}
    <slot />
{:else if isDocs}
    <p class="aw-paragraph-md {className}"><slot /></p>
{:else}
    <p class="aw-paragraph-lg {className}"><slot /></p>
{/if}

<style lang="scss">
    p.aw-paragraph-lg {
        margin-block-end: 2rem;
    }
</style>
