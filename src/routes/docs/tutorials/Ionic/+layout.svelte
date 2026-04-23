<script lang="ts">
	import { globToTutorial } from '$lib/utils/tutorials.js';
	import { setContext } from 'svelte';

	export let data;
	const tutorials = globToTutorial(data);
	setContext('tutorials', tutorials);
</script>

<slot />