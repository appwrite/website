<script lang="ts" context="module">
	export type Theme = 'dark' | 'light' | 'system';
	export const currentTheme = writable<Theme>(getPreferredTheme());

	function isTheme(theme: unknown): theme is Theme {
		return ['dark', 'light', 'system'].includes(theme as Theme);
	}

	function getSystemTheme(): Theme {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	function getPreferredTheme() {
		if (!browser) {
			return 'dark';
		}

		const theme = globalThis?.localStorage.getItem('theme');

		if (!isTheme(theme)) {
			return 'dark';
		}

		if (theme === 'system') {
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}

		return theme;
	}

	export function setTheme(theme: string) {
		if (!isTheme(theme)) {
			return;
		}
		currentTheme.set(theme === 'system' ? getSystemTheme() : theme);
		globalThis?.localStorage.setItem('theme', theme);
	}
</script>

<script lang="ts">
	import '$icons/output/aw-icon.css';
	import '@fontsource/inter/100.css';
	import '@fontsource/inter/200.css';
	import '@fontsource/inter/300.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '@fontsource/inter/800.css';
	import '@fontsource/inter/900.css';
	import '$scss/index.scss';
	import { browser, dev } from '$app/environment';
	import { writable } from 'svelte/store';
	import { navigating, page } from '$app/stores';
	import { onMount } from 'svelte';

	function applyTheme(theme: Omit<Theme, 'system'>) {
		const className = `theme-${theme}`;
		document.body.classList.add(className);
		document.body.classList.remove(`theme-${theme === 'dark' ? 'light' : 'dark'}`);
	}

	onMount(() => {
		const initialTheme = $page.route.id?.startsWith('/docs') ? getPreferredTheme() : 'dark';

		applyTheme(initialTheme);

		navigating.subscribe((n) => {
			if (!n?.to) {
				return;
			}

			const isDocs = n.to.route.id?.startsWith('/docs');

			if (isDocs) {
				if (!document.body.classList.contains(`theme-${$currentTheme}`)) {
					applyTheme($currentTheme);
				}
			} else {
				applyTheme('dark');
			}
		});
	});

	$: browser && currentTheme.subscribe((theme) => applyTheme(theme));
</script>

<svelte:head>
	{#if !dev}
		<script defer data-domain="appwrite.io" src="https://plausible.io/js/script.js"></script>
	{/if}
</svelte:head>

<slot />
