<script lang="ts">
    import { isInsideChangelog } from '$markdoc/layouts/Changelog.svelte';
    import { getContext } from 'svelte';

    export let href: string;

    const isExternal = ['http://', 'https://'].some((prefix) => href.startsWith(prefix));
    const target = isExternal ? '_blank' : undefined;
    const rel = isExternal ? 'noopener nofollow' : undefined;
    const inChangelog = isInsideChangelog();

    const isDocs = getContext('isDocs') ?? false;
</script>

<a
    class="aw-link {isDocs ? 'aw-paragraph-md' : 'aw-paragraph-lg'}"
    data-in-changelog={inChangelog ? '' : undefined}
    {href}
    {target}
    {rel}><slot /><span class="icon-cheveron-right" style:font-size="16px" /></a
>

<style>
    a {
        display: flex;
    }

    [data-in-changelog]:last-child {
        padding-block-start: 1rem;
    }
</style>
