<script lang="ts">
    import { colorSchemes, MEDIA } from './constants';
    import { disableAnimation, getSystemTheme, getTheme } from './helpers';
    import { themeStore, setTheme } from './index';

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

    const initialTheme = getTheme(storageKey, defaultTheme);

    themeStore.set({
        theme: initialTheme,
        forcedTheme,
        resolvedTheme: initialTheme === 'system' ? getTheme(storageKey) : initialTheme,
        themes: enableSystem ? [...themes, 'system'] : themes,
        systemTheme: (enableSystem ? getTheme(storageKey) : undefined) as
            | 'light'
            | 'dark'
            | undefined
    });

    let theme = $derived($themeStore.theme);
    let resolvedTheme = $derived($themeStore.resolvedTheme);

    const attrs = !value ? themes : Object.values(value);

    const handleMediaQuery = (e?: MediaQueryList) => {
        const systemTheme = getSystemTheme(e) as string;
        $themeStore.resolvedTheme = systemTheme;
        $themeStore.systemTheme = systemTheme;

        if (theme === 'system' && !forcedTheme) changeTheme(systemTheme, false, true);
    };

    const changeTheme = (theme?: string, updateStorage?: boolean, updateDOM?: boolean) => {
        if (!theme) return;
        let name = value?.[theme] || theme;

        const enable = disableTransitionOnChange && updateDOM ? disableAnimation() : null;

        if (updateStorage) {
            try {
                localStorage.setItem(storageKey, theme);
            } catch (e) {
                // Unsupported
            }
        }

        if (theme === 'system' && enableSystem) {
            const resolved = getSystemTheme();
            name = value?.[resolved] || resolved;
        }

        if (updateDOM && browser) {
            const d = document.body;

            if (attribute === 'class') {
                d.classList.remove(...(attrs as string[]));
                d.classList.add(name);
            } else {
                d.setAttribute(attribute, name);
            }
            enable?.();
        }
    };

    const mediaHandler = (...args: any) => handleMediaQuery(...args);

    const storageHandler = (e: StorageEvent) => {
        if (e.key !== storageKey) return;
        setTheme((e.newValue as string) || (defaultTheme as string));
    };

    const onWindow = (window: Window) => {
        const media = window.matchMedia(MEDIA);
        // Use modern event listener approach
        media.addEventListener('change', mediaHandler);
        mediaHandler(media);

        window.addEventListener('storage', storageHandler);
        return {
            destroy() {
                window.removeEventListener('storage', storageHandler);
                media.removeEventListener('change', mediaHandler);
            }
        };
    };

    $effect(() => {
        if (enableColorScheme && browser) {
            let colorScheme =
                // If theme is forced to light or dark, use that
                forcedTheme && colorSchemes.includes(forcedTheme)
                    ? forcedTheme
                    : // If regular theme is light or dark
                      theme && colorSchemes.includes(theme)
                      ? theme
                      : // If theme is system, use the resolved version
                        theme === 'system'
                        ? resolvedTheme || null
                        : null;

            document.documentElement.style.setProperty('color-scheme', colorScheme);
        }
    });

    $effect(() => {
        if (forcedTheme) {
            changeTheme(theme, true, false);
        } else {
            changeTheme(theme, true, true); // Add true for updateDOM parameter
        }
    });
</script>

<ThemeScript {forcedTheme} {storageKey} {attribute} {enableSystem} {defaultTheme} {value} {attrs} />

<svelte:window use:onWindow />
