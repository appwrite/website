<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import type { Snippet } from 'svelte';
    import type { SvelteHTMLElements } from 'svelte/elements';

    type Props = {
        class?: string;
        children?: Snippet;
    } & SvelteHTMLElements['span'];

    let { class: className = '', children, ...rest }: Props = $props();
</script>

<span
    class={cn(
        'block bg-[linear-gradient(6deg,_#f8a1ba,_#fff_35%)] bg-clip-text text-transparent',
        className
    )}
    {...rest}
>
    {@render children?.()}
</span>
