import { writable } from 'svelte/store';

export type Theme = 'dark' | 'light' | 'system';	

export interface ThemeStore {
	themes: string[];
	forcedTheme?: Theme;
	theme?: Theme;
	resolvedTheme?: string;
	systemTheme?: Omit<Theme, 'system'>;
}

export const setTheme = (theme?: Theme): void =>
	themeStore.update((store) => ({ ...store, theme }));

export const themeStore = writable<ThemeStore>({
	themes: [],
	forcedTheme: undefined,
	theme: undefined,
	resolvedTheme: undefined,
	systemTheme: undefined
});


export { default as ThemeProvider } from './theme.svelte'