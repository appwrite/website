<script lang="ts">
	import Code from '$lib/animations/CodeWindow/Code.svelte';
	import { authController } from '.';

	const { state } = authController;

	$: content = `const result = account.create(\n\tID.unique(),\n\t'${$state.email}',\n\t'${$state.password}',\n\t"${$state.name}"\n);`;
</script>

<Code {content} />
