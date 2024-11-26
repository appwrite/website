<script lang="ts">
    export let row: number | 'auto' = 'auto';
    export let column: number | 'auto' = 'auto';
    export let columnStart: number | 'auto' = 'auto';
    export let horizontalCenter: boolean = false;
    export let verticalCenter: boolean = false;
</script>

<div
    class="grid h-full grid-cols-1"
    style:grid-row={row}
    style:grid-column="span {column} / span {column}"
    style:grid-column-start={columnStart}
    class:items-center={horizontalCenter}
    class:justify-center={verticalCenter}
>
    <slot />
</div>
