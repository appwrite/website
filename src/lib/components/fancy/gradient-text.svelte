<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import type { Snippet } from 'svelte';
    import type { SvelteHTMLElements } from 'svelte/elements';

    type Props = {
        class?: string;
        children: Snippet;
    } & SvelteHTMLElements['span'];

    const { class: className, children, ...rest }: Props = $props();
</script>

<span
    class={cn(
        '-mb-1 block bg-clip-text pb-1 text-transparent',
        className
    )}
    style="background-image: linear-gradient(145deg, color-mix(in srgb, var(--color-accent) 62%, transparent) 0%, #fff 50%);"
    {...rest}
>
    {@render children()}
</span>
