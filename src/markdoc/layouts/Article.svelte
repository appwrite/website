<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';

	export type LayoutContext = Writable<
		Record<
			string,
			{
				title: string;
				step?: number;
				visible: boolean;
			}
		>
	>;
</script>

<script lang="ts">
	import { Docs, DocsArticle } from '$lib/layouts';
	import { getContext, setContext } from 'svelte';
	import Sidebar from '$routes/docs/Sidebar.svelte';
	import { MainFooter } from '$lib/components';
	import type { TocItem } from '$lib/layouts/DocsArticle.svelte';

	export let title: string;
	export let description: string;
	export let difficulty: string;
	export let readtime: string;

	setContext<LayoutContext>('headings', writable({}));

	const headings = getContext<LayoutContext>('headings');

	let selected: string | undefined = undefined;
	headings.subscribe((n) => {
		const noVisible = Object.values(n).every((n) => !n.visible);
		if (selected && noVisible) {
			return;
		}
		for (const key in n) {
			if (n[key].visible) {
				selected = key;
				break;
			}
		}
	});

	$: entries = Object.entries($headings);
	$: toc = entries.reduce<Array<TocItem>>((carry, [id, heading]) => {
		carry.push({
			title: heading.title,
			href: `#${id}`,
			step: heading.step,
			selected: selected === id
		});
		return carry;
	}, []);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<Docs variant="two-side-navs">
	<Sidebar />
	<DocsArticle {title} {toc}>
		<svelte:fragment slot="metadata">
			{#if difficulty}
				<li>{difficulty}</li>
			{/if}
			{#if readtime}
				<li>{readtime} min</li>
			{/if}
		</svelte:fragment>
		<slot />
	</DocsArticle>
	<MainFooter variant="docs" />
</Docs>
