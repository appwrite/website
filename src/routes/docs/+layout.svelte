<script lang="ts">
    import { setContext } from 'svelte';

    let { data, children } = $props();
    setContext<string | null>('rawContent', data.rawContent);
</script>

{@render children()}
