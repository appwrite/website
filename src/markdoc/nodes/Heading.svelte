<script lang="ts">
	import { getContext, hasContext, onMount } from 'svelte';
	import type { LayoutContext } from '../layouts/Tutorial.svelte';

	export let level: number;
	export let id: string | undefined = undefined;
	export let step: number | undefined = undefined;

	const tag = `h${level}`;
	let element: HTMLElement | undefined;

	$: if (element && hasContext('headings')) {
		getContext<LayoutContext>('headings').update((n) => {
			if (id === undefined) {
				return n;
			}
			n[id] = {
				step,
				text: element?.textContent ?? ''
			};

			return n;
		});
	}
</script>

<svelte:element
	this={tag}
	{id}
	bind:this={element}
	class="aw-main-body-500 aw-u-color-text-primary"
>
	<slot />
</svelte:element>
