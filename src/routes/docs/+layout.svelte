<script lang="ts" module>
    export const rawContent = writable<string | null>(null);
</script>

<script lang="ts">
    let { data, children } = $props();

    import { writable } from 'svelte/store';

    $effect(() => {
        rawContent.set(data.rawContent);
    });
</script>

{@render children()}
