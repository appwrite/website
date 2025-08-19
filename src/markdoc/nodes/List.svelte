<script lang="ts">
    import { isInChangelog } from '$markdoc/layouts/Changelog.svelte';
    import { isInPolicy } from '$markdoc/layouts/Policy.svelte';
    import { setContext } from 'svelte';

    export let ordered: boolean;

    setContext('no-paragraph', true);

    const inPolicy = isInPolicy();
    const inChangelog = isInChangelog();
</script>

<svelte:element
    this={ordered ? 'ol' : 'ul'}
    class:web-numeric-list={ordered}
    class:web-pink-dots={!ordered}
    class:in-policy={inPolicy}
    class:in-changelog={inChangelog}><slot /></svelte:element
>

<style lang="scss">
    .in-policy {
        gap: 0.75rem;
        margin-block-end: 2rem;
    }

    ol.in-policy {
        :global(li) {
            gap: 0.25rem;
        }

        :global(.in-policy) {
            padding-inline-start: 1.5rem;
            margin-block-end: 0;
        }
    }

    .in-changelog {
        padding-inline-start: 0.9rem;
        margin-block-end: 1rem;
        gap: 0.75rem;
    }
</style>
