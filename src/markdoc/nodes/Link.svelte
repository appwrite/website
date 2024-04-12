<script lang="ts">
    import { isInDocs } from '$lib/layouts/Docs.svelte';
    import { isInChangelog } from '$markdoc/layouts/Changelog.svelte';

    export let href: string;
    export let title: string;

    const isExternal = ['http://', 'https://'].some((prefix) => href.startsWith(prefix));
    const target = isExternal ? '_blank' : undefined;
    const rel = isExternal ? 'noopener nofollow' : undefined;

    const inDocs = isInDocs();
    const inChangelog = isInChangelog();

    $: classes = (() => {
        if (inDocs) return 'web-paragraph-md';
        if (inChangelog) return 'web-paragraph-lg in-changelog';
        return '';
    })();
</script>

<a class="web-link is-inline {classes}" {href} {title} {target} {rel}><slot /></a>

<style lang="scss">
    .in-changelog:last-child {
        margin-block-start: 1rem;
    }
</style>
