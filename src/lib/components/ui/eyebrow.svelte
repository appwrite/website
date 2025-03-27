<script lang="ts">
    import { cn } from '$lib/utils/classnames';

    type ElementType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

    let className: string = '';
    export let as: ElementType = 'span';

    export { className as class };
</script>

<svelte:element
    this={as}
    class={cn('text-micro tracking-loose text-primary font-aeonik-fono uppercase', className)}
    ><slot /></svelte:element
>
