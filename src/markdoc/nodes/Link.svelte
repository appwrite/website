<script lang="ts">
    import type { Snippet } from 'svelte';

    interface LinkProps {
        href: string;
        title?: string;
        children: Snippet;
    }

    let { href, title, children }: LinkProps = $props();

    const whitelisted = ['appwrite.io', 'cloud.appwrite.io'];

    const isExternal = ['http://', 'https://'].some((prefix) => {
        if (href.startsWith(prefix)) {
            try {
                const hostname = new URL(href).hostname.replace(/^www\./, '');

                return !whitelisted.includes(hostname);
            } catch {
                return true;
            }
        }
        return false;
    });

    const target = isExternal ? '_blank' : undefined;

    const doFollow = href.includes('?dofollow=true') || href.includes('&dofollow=true');
    if (doFollow) {
        href = href.replace(/[?&]dofollow=true/g, '').replace(/[?&]$/, '');
    }

    const rel = isExternal ? `noopener${doFollow ? '' : ' nofollow'}` : undefined;
</script>

<a {href} {title} {target} {rel}>{@render children()}</a>
