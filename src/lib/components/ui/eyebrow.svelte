<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

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

    let className: string = '';
    export let as: ElementType = 'span';

    export { className as class };
</script>

<svelte:element
    this={as}
    class={classNames(
        'text-eyebrow tracking-loose text-primary font-aeonik-fono uppercase',
        className
    )}><slot /></svelte:element
>
