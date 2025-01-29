<script lang="ts">
    export let columns: number = 1;
    export let rows: number | 'auto' = 'auto';
</script>

<div class="flex h-full flex-col gap-8" style="--columns:{columns};--rows:{rows};">
    <slot />
</div>
