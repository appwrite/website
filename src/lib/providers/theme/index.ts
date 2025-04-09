import { writable } from 'svelte/store';

export interface ThemeStore {
    themes: string[];
    forcedTheme?: string;
    theme?: string;
    resolvedTheme?: string;
    systemTheme?: string;
}

// Create the theme store
export const themeStore = writable<ThemeStore>({
    themes: ['light', 'dark'],
    forcedTheme: undefined,
    theme: undefined,
    resolvedTheme: undefined,
    systemTheme: undefined
});

export const setTheme = (theme?: string) => themeStore.update((store) => ({ ...store, theme }));

export const setResolvedTheme = (resolvedTheme?: string) =>
    themeStore.update((store) => ({ ...store, resolvedTheme }));

export const setSystemTheme = (systemTheme?: string) =>
    themeStore.update((store) => ({ ...store, systemTheme }));

export const setThemes = (themes: string[]) => themeStore.update((store) => ({ ...store, themes }));

export { default as ThemeProvider } from './theme.svelte';
