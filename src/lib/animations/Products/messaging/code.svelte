<script lang="ts">
    import { messagingController } from '.';
    import Code from '$lib/animations/CodeWindow/Code.svelte';

    const { state } = messagingController;

    $: content = `
await messaging.createPush(  
 	ID.unique(),
	'${$state.heading}',
	'${$state.message}',
);`.trim();
</script>

<Code {content} />
