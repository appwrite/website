<script lang="ts">
    export let columns: number = 1;
    export let rows: number | 'auto' = 'auto';
</script>

<div class="cell" style="--columns:{columns};--rows:{rows};">
    <slot />
</div>

<style lang="scss">
    @use '$scss/abstract/functions' as f;

    .cell {
        display: flex;
        flex-direction: column;
        gap: f.pxToRem(32);
        height: 100%;

        @media screen and (min-width: 768px) {
            grid-column: span var(--columns);
            grid-row: span var(--rows);
        }
    }
</style>
