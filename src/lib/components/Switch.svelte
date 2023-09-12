<script lang="ts">
	import { createSwitch, melt } from '@melt-ui/svelte';

	export let checked = false;

	const {
		elements: { root },
		states: { checked: meltChecked }
	} = createSwitch({
		onCheckedChange({ curr, next }) {
			checked = next;
			return next;
		}
	});

	$: meltChecked.set(checked);
</script>

<div class="melt-switch">
	<button use:melt={$root}>
		<span class="thumb" />
	</button>
</div>

<style lang="scss">
	.melt-switch {
		display: flex;
		align-items: center;
	}

	button {
		position: relative;
		height: 1.5rem;
		width: 2.75rem;
		cursor: default;
		border-radius: 9999px;
		background-color: #19191d;
		transition: ease 150ms;
	}

	.melt-switch :global([data-state='checked']) {
		background-color: #fd366e;
	}

	.thumb {
		position: absolute;
		top: 50%;

		display: block;
		height: 1.25rem;
		width: 1.25rem;
		border-radius: 9999px;
		background-color: #ffffff;
		transform: translateX(2px) translateY(-50%);

		transition: ease 150ms;
	}

	:global(button[data-state='checked']) .thumb {
		transform: translateX(22px) translateY(-50%);
	}
</style>
