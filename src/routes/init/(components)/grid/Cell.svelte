<script lang="ts">
    export let columns: number = 1;
    export let rows: number | 'auto' = 'auto';
</script>

<div class="cell" style="--columns:{columns};--rows:{rows};">
    <slot />
</div>

<style lang="scss">
    @use '$scss/abstract' as *;

    .cell {
        display: flex;
        flex-direction: column;
        gap: pxToRem(32);
        height: 100%;

        @media screen and (min-width: 768px) {
            grid-column: span var(--columns);
            grid-row: span var(--rows);
        }
    }
</style>
