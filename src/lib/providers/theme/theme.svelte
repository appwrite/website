<script lang="ts">
    import { colorSchemes, MEDIA } from './constants';
    import { disableAnimation, getSystemTheme, getTheme } from './helpers';
    import { themeStore, setTheme, setResolvedTheme, setSystemTheme, setThemes } from './index';
    import ThemeScript from './theme-script.svelte';
    import { browser } from '$app/environment';

    interface Props {
        forcedTheme?: string;
        disableTransitionOnChange?: boolean;
        enableSystem?: boolean;
        enableColorScheme?: boolean;
        storageKey?: string;
        themes?: string[];
        defaultTheme?: string;
        attribute?: string | 'class';
        value?: {
            [themeName: string]: string;
        };
    }

    const {
        forcedTheme = undefined,
        disableTransitionOnChange = false,
        enableSystem = true,
        enableColorScheme = true,
        storageKey = 'theme',
        themes = enableSystem ? ['light', 'dark', 'system'] : ['light', 'dark'],
        defaultTheme = enableSystem ? 'system' : 'light',
        attribute = 'data-theme',
        value = undefined
    }: Props = $props();

    // Initialize theme state
    const initialTheme = getTheme(storageKey, defaultTheme);
    const systemTheme = enableSystem ? getSystemTheme() : undefined;

    themeStore.set({
        theme: initialTheme,
        forcedTheme,
        resolvedTheme: initialTheme === 'system' ? systemTheme : initialTheme,
        themes: enableSystem ? [...themes, 'system'] : themes,
        systemTheme
    });

    let theme = $derived($themeStore.theme);
    let resolvedTheme = $derived($themeStore.resolvedTheme);
    const attrs = !value ? themes : Object.values(value);

    // Handle system theme changes
    const handleMediaQuery = (e?: MediaQueryList) => {
        const newSystemTheme = getSystemTheme(e);
        setSystemTheme(newSystemTheme);
        setResolvedTheme(newSystemTheme);

        // Only update DOM if currently using system theme
        if (theme === 'system' && !forcedTheme) {
            changeTheme(newSystemTheme, false, true);
        }
    };

    // Core theme change function
    const changeTheme = (newTheme?: string, updateStorage = true, updateDOM = true) => {
        if (!newTheme) return;

        // Handle animation disabling if needed
        const enableAnimations = disableTransitionOnChange && updateDOM ? disableAnimation() : null;

        // Update localStorage if needed
        if (updateStorage) {
            try {
                localStorage.setItem(storageKey, newTheme);
            } catch (e) {
                // Ignore storage errors
            }
        }

        // Determine the actual theme value to apply
        let themeName = value?.[newTheme] || newTheme;
        if (newTheme === 'system' && enableSystem) {
            const resolved = getSystemTheme();
            themeName = value?.[resolved] || resolved;
        }

        // Update DOM if needed and in browser context
        if (updateDOM && browser) {
            const target = document.body;

            if (attribute === 'class') {
                // Remove all possible theme classes then add the current one
                target.classList.remove(...attrs);
                target.classList.add(themeName);
            } else {
                target.setAttribute(attribute, themeName);
            }

            // Re-enable animations if they were disabled
            enableAnimations?.();
        }
    };

    // Event handlers
    const mediaHandler = (e: MediaQueryList) => handleMediaQuery(e);

    const storageHandler = (e: StorageEvent) => {
        if (e.key !== storageKey) return;
        setTheme((e.newValue as string) || defaultTheme);
    };

    // Setup and teardown for window events
    const onWindow = (window: Window) => {
        const media = window.matchMedia(MEDIA);
        media.addEventListener('change', () => mediaHandler(media));
        mediaHandler(media);

        if (browser) {
            window.addEventListener('storage', storageHandler);
        }
        return {
            destroy() {
                window.removeEventListener('storage', storageHandler);
                media.removeEventListener('change', () => mediaHandler(media));
            }
        };
    };

    // Update color-scheme CSS property when theme changes
    $effect(() => {
        if (enableColorScheme && browser) {
            let colorScheme =
                forcedTheme && colorSchemes.includes(forcedTheme)
                    ? forcedTheme
                    : theme && colorSchemes.includes(theme)
                      ? theme
                      : theme === 'system'
                        ? resolvedTheme || null
                        : null;

            document.documentElement.style.setProperty('color-scheme', colorScheme);
        }
    });

    // Apply theme changes when theme store updates
    $effect(() => {
        // If theme is forced, update storage but not DOM (script handles it)
        // Otherwise update both
        changeTheme(theme, true, !forcedTheme);
    });
</script>

<ThemeScript {forcedTheme} {storageKey} {attribute} {enableSystem} {defaultTheme} {value} {attrs} />

<svelte:window use:onWindow />
