<script lang="ts" module>
    import { writable } from 'svelte/store';

    export const rawContent = writable<string | null>(null);
</script>

<script lang="ts">
    let { data, children } = $props();

    $effect(() => {
        rawContent.set(data.rawContent);
    });
</script>

{@render children()}
