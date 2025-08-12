<script lang="ts">
    import { Icon } from '$lib/components/ui';
    import { setContext, type Snippet } from 'svelte';

    interface ArrowLinkProps {
        href: string;
        children: Snippet;
    }

    const { href, children }: ArrowLinkProps = $props();

    const isExternal = /https?:\/\//.test(href);
    const target = isExternal ? '_blank' : '_self';
    const rel = isExternal ? 'noopener nofollow' : undefined;

    setContext('no-paragraph', true);
</script>

<a class="flex" {href} {target} {rel}>
    <span>{@render children()}</span>
    <Icon name="chevron-right" />
</a>
