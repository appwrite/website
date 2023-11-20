<script lang="ts">
    import { isInsideChangelog } from '$markdoc/layouts/Changelog.svelte';
    import { getContext } from 'svelte';

    export let href: string;
    export let title: string;

    const isExternal = ['http://', 'https://'].some((prefix) => href.startsWith(prefix));
    const target = isExternal ? '_blank' : undefined;
    const rel = isExternal ? 'noopener nofollow' : undefined;

    const isDocs = getContext('isDocs') ?? false;
    const inChangelog = isInsideChangelog();
</script>

<a
    class="aw-link is-inline {isDocs || inChangelog ? 'aw-paragraph-md' : 'aw-paragraph-lg'}"
    {href}
    {title}
    {target}
    {rel}><slot /></a
>
