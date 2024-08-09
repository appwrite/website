<script lang="ts">
    export let column: number | 'auto' = 'auto';
    export let row: number | 'auto' = 'auto';
</script>

<div class="cell" style="--column:{column};--row:{row};">
    <slot />
</div>

<style lang="scss">
    @use '$scss/abstract' as *;

    .cell {
        grid-column: span var(--column) / span var(--column);
        grid-row: span var(--row) / span var(--row);
        display: flex;
        flex-direction: column;
        gap: pxToRem(32);
    }
</style>
