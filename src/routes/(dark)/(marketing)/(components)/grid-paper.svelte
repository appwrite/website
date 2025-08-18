<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import type { Snippet } from 'svelte';
    import type { SvelteHTMLElements } from 'svelte/elements';

    type Props = {
        children?: Snippet;
    } & SvelteHTMLElements['div'];

    const { children, class: className, ...rest }: Props = $props();
</script>

<div
    class={cn(
        'pointer-events-none relative -z-1',
        'bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPHBhdGggZD0iTSA2NCAwIEwgNjQgNjQgTCAwIDY0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0NDQ0NDQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIgc3Ryb2tlLWRhc2hhcnJheT0iMyA2IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+Cjwvc3ZnPg==")]',
        'bg-size-[calc(100%/10)] bg-center bg-repeat',
        className
    )}
    {...rest}
>
    {@render children?.()}
</div>
