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
	import { DocsArticle } from '$lib/layouts';
	import { getContext, setContext } from 'svelte';
	import { MainFooter } from '$lib/components';
	import type { TocItem } from '$lib/layouts/DocsArticle.svelte';
	import { DOCS_TITLE_SUFFIX } from '$routes/titles';

	export let title: string;
	export let description: string;
	export let back: string | undefined = undefined;
	export let difficulty: string | undefined = undefined;
	export let readtime: string | undefined = undefined;

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
	<title>{title}{DOCS_TITLE_SUFFIX}</title>
	<meta name="description" content={description} />
</svelte:head>

<DocsArticle {title} {back} {toc}>
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
