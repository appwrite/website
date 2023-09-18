<script lang="ts">
	import { createTooltip, melt } from '@melt-ui/svelte';

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createTooltip({
		positioning: {
			placement: 'top'
		},
		openDelay: 0,
		closeOnPointerDown: false,
		forceVisible: true
	});
</script>

<span use:melt={$trigger}>
	<slot />
</span>

{#if $open}
	<div use:melt={$content} class="aw-tooltip aw-sub-body-400">
		<div use:melt={$arrow} />
		<slot name="tooltip" />
	</div>
{/if}
