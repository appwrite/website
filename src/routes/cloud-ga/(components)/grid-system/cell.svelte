<script lang="ts">
    export let row: number | 'auto' = 'auto';
    export let column: number | 'auto' = 'auto';
</script>

<div
    class="flex h-full items-center justify-center"
    style:grid-row={row}
    style:grid-column={column}
>
    <slot />
</div>
