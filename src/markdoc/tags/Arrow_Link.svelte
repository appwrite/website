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
</script>

<a
    class="not-prose text-paragraph-lg text-primary group mt-8 flex items-center gap-1 first:mt-0"
    {href}
    {target}
    {rel}
>
    {@render children()}
    <Icon
        name="chevron-right"
        class="transition-transform duration-100 group-hover:translate-x-0.5"
    />
</a>
