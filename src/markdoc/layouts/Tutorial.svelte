<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';

	export type LayoutContext = Writable<
		Record<
			string,
			{
				title: string;
				step?: number;
			}
		>
	>;
</script>

<script lang="ts">
	import { Docs, DocsTutorial } from '$lib/layouts';
	import { getContext, setContext } from 'svelte';
	import Sidebar from '$routes/docs/Sidebar.svelte';
	import { MainFooter } from '$lib/components';

	export let title: string;
	export let description: string;
	export let difficulty: string;
	export let readtime: string;

	setContext<LayoutContext>('headings', writable({}));

	const headings = getContext<LayoutContext>('headings');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<Docs variant="two-side-navs">
	<Sidebar />
	<DocsTutorial {title} toc={[]}>
		<svelte:fragment slot="metadata">
			{#if difficulty}
				<li>{difficulty}</li>
			{/if}
			{#if readtime}
				<li>{readtime} min</li>
			{/if}
		</svelte:fragment>
		<slot />
	</DocsTutorial>
	<MainFooter variant="docs"/>
</Docs>
