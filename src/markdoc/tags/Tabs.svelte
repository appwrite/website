<script lang="ts" context="module">
	import type { Writable } from 'svelte/store';
	export type TabsContext = Writable<{
		content: ReturnType<typeof createTabs>['elements']['content'];
		triggers: Map<string, string>;
	}>;
</script>

<script lang="ts">
	import { createTabs } from '@melt-ui/svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const {
		elements: { root, list, content, trigger },
		states: { value }
	} = createTabs();

	const ctx = setContext<TabsContext>(
		'tabs',
		writable({
			content,
			triggers: new Map()
		})
	);
</script>

<div class="web-card is-normal u-margin-block-start-16" {...$root} use:root>
	<div class="tabs u-flex u-gap-16">
		<ul class="tabs-list" {...$list} use:list>
			{#each $ctx.triggers.entries() as [id, title]}
				<li class="tabs-item">
					<button
						class="tabs-button"
						class:is-selected={$value === id}
						{...$trigger(id)}
						use:trigger>{title}</button
					>
			
				</li>
			{/each}
		</ul>
</div>
	<slot />
</div>
