<script lang="ts">
	import type { Tutorial } from '$markdoc/layouts/Tutorial.svelte';
	import { setContext } from 'svelte';

	setContext<Tutorial[]>('tutorials', []);
</script>

<slot />
