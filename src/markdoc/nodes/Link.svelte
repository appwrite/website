<script lang="ts">
    import { isInsideChangelog } from '$markdoc/layouts/Changelog.svelte';
    import { getContext } from 'svelte';
    import { TABLE_CTX_KEY } from './Table.svelte';

    export let href: string;
    export let title: string;

    const isExternal = ['http://', 'https://'].some((prefix) => href.startsWith(prefix));
    const target = isExternal ? '_blank' : undefined;
    const rel = isExternal ? 'noopener nofollow' : undefined;

    const isDocs = getContext('isDocs') ?? false;
    const inChangelog = isInsideChangelog();
    const inTable = getContext(TABLE_CTX_KEY) ?? false;
</script>

<a
    class="aw-link is-inline {isDocs || inChangelog ? 'aw-paragraph-md' : 'aw-paragraph-lg'}"
    data-in-changelog={inChangelog ? '' : undefined}
    {href}
    {title}
    {target}
    {rel}><slot /></a
>

<style lang="scss">
    [data-in-changelog]:last-child {
        margin-block-start: 1rem;
    }
</style>
