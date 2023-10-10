<script lang="ts">
    import { getContext, hasContext } from 'svelte';

    const noParagraph = hasContext('no-paragraph') ? getContext('no-paragraph') : false;

    let className = '';
    export { className as class };
</script>

{#if noParagraph}
    <slot />
{:else}
    <p class="aw-paragraph-lg {className}"><slot /></p>
{/if}

<style lang="scss">
    p {
        margin-block-end: 2rem;
    }
</style>
