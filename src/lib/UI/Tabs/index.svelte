<script lang="ts" context="module">
	const CTX_KEY = 'tabs';

	type Context = Tabs & {
		tabs: string[];
	};

	const setTabsContext = (ctx: Context) => {
		setContext(CTX_KEY, ctx);
	};

	export const getTabsContext = () => {
		return getContext<Context>(CTX_KEY);
	};
</script>

<script lang="ts">
	import { createTabs, melt, type Tabs } from '@melt-ui/svelte';
	import { getContext, setContext } from 'svelte';
	import List from './List.svelte';
	import Content from './Content.svelte';

	export let tabs: Context['tabs'];

	const ctx = createTabs({
		defaultValue: tabs[0]
	});

	setTabsContext({ ...ctx, tabs });

	const {
		elements: { root }
	} = ctx;
</script>

<div use:melt={$root}>
	<slot TabsList={List} TabContent={Content} />
</div>
