<script lang="ts">
	import { createTooltip, melt } from '@melt-ui/svelte';
	import type { FloatingConfig } from '@melt-ui/svelte/internal/actions';

	export let placement: FloatingConfig['placement'] = 'top';
	export let disabled = false;

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createTooltip({
		positioning: {
			placement
		},
		openDelay: 0,
		closeOnPointerDown: false,
		forceVisible: true
	});
</script>

<span use:melt={$trigger}>
	<slot />
</span>

{#if $open && !disabled}
	<div use:melt={$content} class="aw-tooltip aw-sub-body-400">
		<div use:melt={$arrow} />
		<slot name="tooltip" />
	</div>
{/if}
