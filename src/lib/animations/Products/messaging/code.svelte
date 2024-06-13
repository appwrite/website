<script lang="ts">
	import Code from '$lib/animations/CodeWindow/Code.svelte';

	let content = `
await messaging.createPush(  
 	ID.unique(),
	'New task assigned to you',
	'You were assigned a new task in your board. Tap to check it out.',
);`.trim();
</script>

<Code {content} />
