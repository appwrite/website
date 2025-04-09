<script lang="ts">
    export let columns: number = 12;
    export let rows: number = 2;
</script>

<div class="grid" style="--columns:{columns};--rows:{rows};">
    <slot />
</div>

<style lang="scss">
    @use '$scss/abstract/functions' as f;

    .grid {
        display: flex;
        gap: f.pxToRem(32);
        flex-direction: column;

        @media screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
            grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
        }
    }
</style>
