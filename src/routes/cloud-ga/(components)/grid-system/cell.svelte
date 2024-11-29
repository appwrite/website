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
    class={cn('col-span-[var(--column)] col-start-[var(--col-start)]', classNames)}
    style:--column={column}
    style:--col-start={columnStart}
    class:items-center={horizontalCenter}
    class:justify-center={verticalCenter}
>
    <slot />
</div>
