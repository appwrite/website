<script lang="ts">
	import { capitalize } from '$lib/utils/capitalize.js';
	import { createSelect, melt } from '@melt-ui/svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	const iconMap = {
		dark: 'aw-icon-dark',
		light: 'aw-icon-light',
		system: 'icon-server'
	} as const;

	const themes = ['dark', 'light', 'system'] as const;

	type Theme = (typeof themes)[number];
	function isTheme(theme: unknown): theme is Theme {
		return themes.includes(theme as Theme);
	}

	const {
		elements: { trigger, menu, option },
		states: { open, selected, selectedLabel }
	} = createSelect<Theme>({
		preventScroll: false,
		defaultSelected: {
			value: 'dark',
			label: 'Dark'
		},
		positioning: {
			sameWidth: true,
			fitViewport: true
		},
		forceVisible: true,
		onSelectedChange({ curr, next }) {
			const t = next?.value;
			if (isTheme(t) && t !== curr?.value) {
				setTheme(t);
			}
			open.set(false);
			return next;
		}
	});

	function setSelected(theme: Theme) {
		selected.set({
			value: theme,
			label: capitalize(theme)
		});
	}

	function setTheme(theme: Theme) {
		document.body.classList.remove('theme-dark', 'theme-light');
		if (theme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
			document.body.classList.add(`theme-${systemTheme}`);
		} else {
			document.body.classList.add(`theme-${theme}`);
		}
		localStorage.setItem('theme', theme);
	}

	onMount(() => {
		const theme = localStorage.getItem('theme');
		if (isTheme(theme)) {
			setTheme(theme);
			setSelected(theme);
		} else {
			setTheme('dark');
			setSelected('dark');
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
