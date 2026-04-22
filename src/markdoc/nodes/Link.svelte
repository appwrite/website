<script lang="ts">
    import type { Snippet } from 'svelte';

    interface LinkProps {
        href: string;
        title?: string;
        children: Snippet;
    }

    let { href: rawHref, title, children }: LinkProps = $props();

    const whitelisted = ['appwrite.io', 'cloud.appwrite.io'];

    const isExternal = $derived(
        ['http://', 'https://'].some((prefix) => {
            if (rawHref.startsWith(prefix)) {
                try {
                    const hostname = new URL(rawHref).hostname.replace(/^www\./, '');

                    return !whitelisted.includes(hostname);
                } catch {
                    return true;
                }
            }
            return false;
        })
    );

    const target = $derived(isExternal ? '_blank' : undefined);

    const doFollow = $derived(
        rawHref.includes('?dofollow=true') || rawHref.includes('&dofollow=true')
    );
    const href = $derived(
        doFollow ? rawHref.replace(/[?&]dofollow=true/g, '').replace(/[?&]$/, '') : rawHref
    );

    const rel = $derived(isExternal ? `noopener${doFollow ? '' : ' nofollow'}` : undefined);
</script>

<a {href} {title} {target} {rel}>{@render children()}</a>
