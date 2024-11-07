<script lang="ts">
    export let columns: number = 12;
    export let rows: number | 'auto' = 'auto';
</script>

<div
    class="grid grid-cols-1 gap-4 md:grid-cols-[repeat(var(--columns),_minmax(0,_1fr))] md:grid-rows-[repeat(var(--rows),_minmax(0,_1fr))]"
    style="--columns:{columns};--rows:{rows};"
>
    <slot />
</div>
