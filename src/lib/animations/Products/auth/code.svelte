<script lang="ts">
    import Code from '$lib/animations/CodeWindow/Code.svelte';
    import { authController } from '.';

    const { state } = authController;

    $: content = `
const result = account.create(
	ID.unique(),
	'${$state.email}',	
	'${$state.password}',
	"${$state.name}"
);`.trim();
</script>

<Code {content} />
