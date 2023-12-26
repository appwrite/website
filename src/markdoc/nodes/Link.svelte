<script lang="ts">
    import { isInChangelog } from '$markdoc/layouts/Changelog.svelte';
    import { hasContext } from 'svelte';
    import { isInTable } from './Table.svelte';

    export let href: string;
    export let title: string;

    const isExternal = ['http://', 'https://'].some((prefix) => href.startsWith(prefix));
    const target = isExternal ? '_blank' : undefined;
    const rel = isExternal ? 'noopener nofollow' : undefined;

    const isDocs = hasContext('isDocs');
    const inChangelog = isInChangelog();
    const inTable = isInTable();

    $: classes = (() => {
        if (isDocs) return 'aw-link is-inline aw-paragraph-md';
        if (inChangelog) return 'aw-link is-inline aw-paragraph-lg';
        if (inTable) return 'aw-link is-inline';
        return '';
    })();
</script>

<a class={classes} data-in-changelog={inChangelog ? '' : undefined} {href} {title} {target} {rel}
    ><slot /></a
>

<style lang="scss">
    [data-in-changelog]:last-child {
        margin-block-start: 1rem;
    }
</style>
