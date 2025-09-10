<script lang="ts">
    import { globToTutorial } from '$lib/utils/tutorials.js';
    import { setContext } from 'svelte';

    let { data, children } = $props();
    const tutorials = globToTutorial(data);
    setContext('tutorials', tutorials);
</script>

{@render children()}
