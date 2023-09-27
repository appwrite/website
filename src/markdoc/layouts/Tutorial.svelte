<script context="module" lang="ts">
	export type Tutorial = {
		title: string;
		step: number;
		href: string;
	};
</script>

<script lang="ts">
	import { DocsTutorial } from '$lib/layouts';
	import { getContext, setContext } from 'svelte';
	import { MainFooter } from '$lib/components';
	import type { TocItem } from '$lib/layouts/DocsArticle.svelte';
	import { writable } from 'svelte/store';
	import type { LayoutContext } from './Article.svelte';
	import { DOCS_TITLE_SUFFIX } from '$routes/titles';

	export let title: string;
	export let description: string;
	export let difficulty: string;
	export let readtime: string;
	export let step: number;
	export let back: string;

	setContext<LayoutContext>('headings', writable({}));

	const tutorials = getContext<Tutorial[]>('tutorials');
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

<DocsTutorial {title} {back} {toc} {tutorials} currentStep={step}>
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
<MainFooter variant="docs" />
