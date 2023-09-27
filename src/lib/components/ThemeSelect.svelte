<script lang="ts">
	import { capitalize } from '$lib/utils/capitalize.js';
	import { currentTheme, setTheme, type Theme } from '$routes/+layout.svelte';
	import { createSelect, melt } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';

	const iconMap: Record<Theme, string> = {
		dark: 'aw-icon-dark',
		light: 'aw-icon-light',
		system: 'icon-server'
	};

	const themes: Array<Theme> = ['dark', 'light', 'system'];

	const {
		elements: { trigger, menu, option },
		states: { open, selected, selectedLabel }
	} = createSelect<Theme>({
		preventScroll: false,
		defaultSelected: {
			value: $currentTheme,
			label: capitalize($currentTheme)
		},
		positioning: {
			sameWidth: true,
			fitViewport: true
		},
		forceVisible: true,
		onSelectedChange({ curr, next }) {
			const t = next?.value;
			if (t && t !== curr?.value) {
				setTheme(t);
			}
			open.set(false);
			return next;
		}
	});
</script>

<button class="aw-select is-colored" use:melt={$trigger}>
	<div class="physical-select">
		{#if $selected?.value}
			<span class={iconMap[$selected.value]} aria-hidden="true" />
		{/if}
		<span>{$selectedLabel}</span>
	</div>
	<span class="icon-cheveron-down" aria-hidden="true" />
</button>

{#if $open}
	<div
		class="aw-select-menu"
		style:z-index={10000}
		use:melt={$menu}
		transition:fly={{ y: 4, duration: 150 }}
	>
		{#each themes as theme}
			<button
				class="aw-select-option"
				use:melt={$option({ value: theme, label: capitalize(theme) })}
			>
				<span class={iconMap[theme]} aria-hidden="true" />
				<span style:text-transform="capitalize">{theme}</span>
			</button>
		{/each}
	</div>
{/if}
