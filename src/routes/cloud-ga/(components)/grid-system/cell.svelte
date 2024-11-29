<script lang="ts">
    import { cn } from '$lib/utils/classnames';

    export let row: number | 'auto' = 'auto';
    export let column: number | 'auto' = 'auto';
    export let columnStart: number | 'auto' = 'auto';
    export let horizontalCenter: boolean = false;
    export let verticalCenter: boolean = false;

    let classNames: string = '';
    export { classNames as class };
</script>

<div
    class={cn('grid h-full grid-cols-1', classNames)}
    style:grid-row={row}
    style:grid-column="span {column} / span {column}"
    style:grid-column-start={columnStart}
    class:items-center={horizontalCenter}
    class:justify-center={verticalCenter}
>
    <slot />
</div>
