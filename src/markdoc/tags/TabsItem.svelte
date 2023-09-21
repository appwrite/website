<script lang="ts">
	import { getContext } from 'svelte';
	import type { TabsContext } from './Tabs.svelte';

	export let id: string;
	export let title: string;

	const ctx = getContext<TabsContext>('tabs');

	const { content } = $ctx;

	ctx.update((n) => {
		n.triggers.set(id, title);
		return n;
	});
</script>

<div class="aw-u-sep-block-start u-padding-block-start-16" {...$content(id)} use:content>
	<slot />
</div>
