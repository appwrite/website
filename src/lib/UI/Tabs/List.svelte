<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { getTabsContext } from './index.svelte';

	const {
		tabs,
		elements: { list, trigger },
		states: { value }
	} = getTabsContext();
</script>

<ul class="aw-secondary-tabs" use:melt={$list}>
	{#each tabs as tab}
		<li class="aw-secondary-tabs-item">
			<button
				class="aw-secondary-tabs-button"
				class:is-selected={$value === tab}
				use:melt={$trigger(tab)}
			>
				<span class="aw-main-body-500">{tab}</span>
			</button>
		</li>
	{/each}
</ul>
