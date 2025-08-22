<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import type { Snippet } from 'svelte';

    // html text elements
    type ElementType =
        | 'p'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'span'
        | 'div'
        | 'strong'
        | 'em'
        | 'small'
        | 'mark'
        | 'abbr'
        | 'blockquote'
        | 'cite'
        | 'code'
        | 'kbd'
        | 'var'
        | 'samp'
        | 'sub'
        | 'sup';

    interface EyebrowProps {
        class?: string;
        as?: ElementType;
        children: Snippet;
    }

    const { class: classNames, as, children }: EyebrowProps = $props();
</script>

<svelte:element
    this={as}
    class={cn('text-eyebrow text-primary font-aeonik-fono uppercase', classNames)}
    >{@render children()}</svelte:element
>
