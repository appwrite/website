<script lang="ts">
    import { isInDocs } from '$lib/layouts/Docs.svelte';
    import { isInChangelog } from '$markdoc/layouts/Changelog.svelte';
    import type { Snippet } from 'svelte';
    interface Props {
        href: string;
        children: Snippet;
    }

    const { href, children }: Props = $props();

    const isExternal = ['http://', 'https://'].some((prefix) => href.startsWith(prefix));
    const target = isExternal ? '_blank' : undefined;
    const rel = isExternal ? 'noopener nofollow' : undefined;

    const inChangelog = isInChangelog();
    const inDocs = isInDocs();

    let classes = $derived(
        (() => {
            if (inDocs) return 'web-link text-paragraph-md';
            if (inChangelog) return 'web-link text-paragraph-lg';
            return '';
        })()
    );
</script>

<a class={classes} data-in-changelog={inChangelog ? '' : undefined} {href} {target} {rel}
    >{@render children()}<span class="icon-cheveron-right" style:font-size="16px"></span></a
>

<style>
    a {
        display: flex;
    }

    [data-in-changelog]:last-child {
        padding-block-start: 1rem;
    }
</style>
