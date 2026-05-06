<script lang="ts">
    import { globToTutorial } from '$lib/utils/tutorials.js';
    import { setContext, untrack } from 'svelte';

    let { data, children } = $props();
    const tutorials = untrack(() => globToTutorial(data));
    setContext('tutorials', tutorials);
</script>

{@render children()}
