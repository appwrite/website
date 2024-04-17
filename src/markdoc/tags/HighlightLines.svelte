<script lang="ts">
    import { setContext } from 'svelte';

    export let lines: string;

    let parsedLines: Array<number> = [];
    if (lines) {
        parsedLines = lines.split(',').map(Number);
    }

    setContext<Array<number>>('highlighted-lines', parsedLines ?? []);
</script>

<slot />