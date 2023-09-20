<script lang="ts">
	import { getContext, hasContext, onMount, setContext } from 'svelte';
	import type { LayoutContext } from '../layouts/Article.svelte';

	export let level: number;
	export let id: string | undefined = undefined;
	export let step: number | undefined = undefined;

	const tag = `h${level}`;
	const ctx = hasContext('headings') ? getContext<LayoutContext>('headings') : undefined;
	let element: HTMLElement | undefined;

	onMount(() => {
		if (!element || !$ctx || !id) {
			return;
		}

		$ctx = {
			...$ctx,
			[id]: {
				step,
				title: element?.textContent ?? '',
				visible: false
			}
		};

		const callback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (id && $ctx && id in $ctx) {
					$ctx[id].visible = entry.isIntersecting;
				}
			});
		};
		const observer = new IntersectionObserver(callback, {
			root: null,
			threshold: 1
		});

		observer.observe(element);
	});

	setContext('is-heading', true);
</script>

{#if id}
	<a href={`#${id}`} class="aw-link">
		<svelte:element
			this={tag}
			{id}
			bind:this={element}
			class:aw-snap-location={id}
			class="aw-main-body-500 aw-u-color-text-primary"
		>
			<slot />
		</svelte:element>
	</a>
{:else}
	<svelte:element this={tag} bind:this={element} class="aw-main-body-500 aw-u-color-text-primary">
		<slot />
	</svelte:element>
{/if}
