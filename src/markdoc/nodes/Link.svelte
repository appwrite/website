<script lang="ts">
    import { isInChangelog } from '$markdoc/layouts/Changelog.svelte';

    export let href: string;
    export let title: string;

    const whitelisted = ['appwrite.io', 'cloud.appwrite.io'];

    const isExternal = ['http://', 'https://'].some((prefix) => {
        if (href.startsWith(prefix)) {
            try {
                // Remove 'www.' if it exists.
                const hostname = new URL(href).hostname.replace(/^www\./, '');

                // if hostname matches, its internal
                return !whitelisted.includes(hostname);
            } catch {
                return true; // URL invalid, treat as external
            }
        }
        return false; // doesn't start with the prefix, consider it internal
    });

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
