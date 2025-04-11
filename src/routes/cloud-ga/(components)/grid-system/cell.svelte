<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    export let row: number | 'auto' = 'auto';
    export let column: number | 'auto' = 'auto';
    export let columnStart: number | 'auto' = 'auto';
    export let horizontalCenter: boolean = false;
    export let verticalCenter: boolean = false;

    let className: string = '';
    export { className as class };
</script>

<div
    class={classNames(
        'relative md:col-span-(--column) md:col-start-(--col-start) md:row-span-(--row)',
        className
    )}
    style:--row={row}
    style:--column={column}
    style:--col-start={columnStart}
    class:items-center={horizontalCenter}
    class:justify-center={verticalCenter}
>
    <slot />
</div>
