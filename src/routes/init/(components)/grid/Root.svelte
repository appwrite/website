<script lang="ts">
    export let columns: number = 12;
    export let rows: number = 12;
</script>

<div class="grid" style="--columns:{columns};--rows:{rows};">
    <slot />
</div>

<style lang="scss">
    @use '$scss/abstract' as *;

    .grid {
        display: grid;
        grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
        grid-template-rows: repeat(var(--columns), minmax(0, pxToRem(120)));
        gap: pxToRem(32);
    }
</style>
