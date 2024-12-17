<script lang="ts">
    import { isInChangelog } from '$markdoc/layouts/Changelog.svelte';

    export let href: string;
    export let title: string;

    const isExternal = ['http://', 'https://'].some((prefix) => href.startsWith(prefix));
    const target = isExternal ? '_blank' : undefined;

    const doFollow = href.includes('?dofollow=true') || href.includes('&dofollow=true');
    if (doFollow) {
        href = href.replace(/[?&]dofollow=true/g, '').replace(/[?&]$/, '');
    }

    const rel = isExternal ? `noopener${doFollow ? '' : ' nofollow'}` : undefined;

    const inChangelog = isInChangelog();

    $: classes = (() => {
        if (inChangelog) return 'text-paragraph-lg in-changelog';
        return '';
    })();
</script>

<a
    class="web-link [&_>_.web-inline-code]:hover:!text-primary underline [&_>_.web-inline-code]:underline [&_>_.web-inline-code]:underline-offset-2 [&_>_.web-inline-code]:transition-colors {classes}"
    {href}
    {title}
    {target}
    {rel}><slot /></a
>

<style lang="scss">
    .in-changelog:last-child {
        margin-block-start: 1rem;
    }
</style>
