<script lang="ts">
    import { Icon } from '$lib/components/ui';
    import type { Snippet } from 'svelte';

    interface ArrowLinkProps {
        href: string;
        children: Snippet;
    }

    const { href, children }: ArrowLinkProps = $props();

    const isExternal = ['http://', 'https://'].some((prefix) => href.startsWith(prefix));
    const target = isExternal ? '_blank' : undefined;
    const rel = isExternal ? 'noopener nofollow' : undefined;
</script>

<a class="flex" {href} {target} {rel}>
    {@render children()}
    <Icon name="chevron-right" />
</a>
