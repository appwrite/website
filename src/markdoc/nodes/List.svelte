<script lang="ts">
    import { isInsidePolicy } from '$markdoc/layouts/Policy.svelte';
    import { setContext } from 'svelte';

    export let ordered: boolean;

    setContext('no-paragraph', true);

    const inPolicy = isInsidePolicy();
</script>

<svelte:element
    this={ordered ? 'ol' : 'ul'}
    class:aw-numeric-list={ordered}
    class:aw-pink-dots={!ordered}
    class:is-inside-policy={inPolicy}><slot /></svelte:element
>

<style lang="scss">
    ol.is-inside-policy {
        gap: 0rem;
        margin-block-end: 2rem;

        :global(li) {
            gap: 0.25rem;
        }

        :global(li:before) {
            content: counter(numeric-list) '.  ';
            padding-inline-end: 0;
        }

        :global(.is-inside-policy) {
            padding-inline-start: 0.5rem;
            margin-block-end: 0;
        }

        :global(.is-inside-policy li:before) {
            content: counter(numeric-list-level-2, lower-latin) '.  ';
            padding-inline-end: 0;
        }
    }
</style>
