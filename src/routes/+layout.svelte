<script lang="ts" context="module">
    export type Theme = 'dark' | 'light' | 'system';
    export const currentTheme = (function () {
        const store = writable<Theme>(getPreferredTheme());

        const set: typeof store.set = (value) => {
            store.set(value);
            if (browser) {
                localStorage.setItem('theme', value);
                document.documentElement.style.setProperty('color-scheme', value);
            }
        };

        return { ...store, set };
    })();

    export const themeInUse = derived(currentTheme, (theme) => {
        return theme === 'system' ? getSystemTheme() : theme;
    });

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

        const theme = localStorage.getItem('theme');

        if (!isTheme(theme)) {
            return 'dark';
        }

        return theme;
    }
</script>

<script lang="ts">
    import '$icons/output/web-icon.css';
    import '$scss/index.scss';

    import { browser, dev } from '$app/environment';
    import { navigating, page, updated } from '$app/stores';
    import { onMount } from 'svelte';
    import { derived, writable } from 'svelte/store';
    import { loggedIn } from '$lib/utils/console';
    import { beforeNavigate } from '$app/navigation';
    import Cookies from 'js-cookie';

    function applyTheme(theme: Theme) {
        const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;
        const className = `theme-${resolvedTheme}`;
        document.body.classList.remove('theme-dark', 'theme-light');
        document.body.classList.add(className);
    }

    onMount(() => {
        if (browser) {
            const source = Cookies.get('source');
            let sources = source ? decodeURIComponent(source).split(',') : [];
            console.log(sources);

            const urlParams = $page.url.searchParams;
            const ref = urlParams.get('ref');
            const utm_source = urlParams.get('utm_source');
            const utm_medium = urlParams.get('utm_medium');
            const utm_campaign = urlParams.get('utm_campaign');

            // Aggregate and display sources from URL parameters
            if (ref) sources.push(`ref=${ref}`);
            if (utm_source) sources.push(`utm_source=${utm_source}`);
            if (utm_medium) sources.push(`utm_medium=${utm_medium}`);
            if (utm_campaign) sources.push(`utm_campaign=${utm_campaign}`);

            sources = [...new Set(sources)];
            Cookies.set('source', sources, {domain: '.appwrite.io'});
        }
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

    beforeNavigate(({ willUnload, to }) => {
        if ($updated && !willUnload && to?.url) {
            location.href = to.url.href;
        }
    });

    $: if (browser) currentTheme.subscribe((theme) => applyTheme(theme));
    $: if (browser && $loggedIn) {
        document.body.dataset.loggedIn = '';
    }
</script>

<svelte:head>
    {#if !dev}
        <script defer data-domain="appwrite.io" src="https://plausible.io/js/script.js"></script>
    {/if}
</svelte:head>

<a class="skip" href="#main">Skip to content</a>

<slot />

<style lang="scss">
    :global(html) {
        color-scheme: dark;
    }

    .skip {
        position: absolute;
        inset-block-start: 0;
        z-index: 9999;

        display: block;
        background-color: hsl(var(--web-color-mint-500));
        color: hsl(var(--web-color-black));
        text-decoration: underline;
        opacity: 0;

        padding: 0.75rem 1.25rem;
        pointer-events: none;
    }

    .skip:focus {
        opacity: 1;
        position: relative;
        pointer-events: all;
    }
</style>
