<script lang="ts" module>
    import { type Reo, loadReoScript } from '$lib/reodotdev';
</script>

<script lang="ts">
    import '../app.css';
    import '$scss/index.scss';
    import '$icons/output/web-icon.css';

    import { browser, dev } from '$app/environment';
    import { page, updated } from '$app/state';
    import { onMount } from 'svelte';
    import { loggedIn } from '$lib/utils/console';
    import { beforeNavigate } from '$app/navigation';
    import { trackEvent } from '$lib/actions/analytics';
    import { saveReferrerAndUtmSource } from '$lib/utils/utm';
    import { Sprite } from '$lib/components/ui/icon/sprite';
    import { displayHiringMessage } from '$lib/utils/console';
    import { ThemeProvider, useTheme } from 'sveltekit-themes';

    const thresholds = [0.25, 0.5, 0.75];
    const tracked = new Set();

    onMount(() => {
        displayHiringMessage();
        saveReferrerAndUtmSource(page.url);

        saveReferrerAndUtmSource(page.url);
    });

    beforeNavigate(({ willUnload, to }) => {
        if (window) {
            tracked.clear();
        }

        if (updated.current && !willUnload && to?.url) {
            location.href = to.url.href;
        }
    });

    $effect(() => {
        if (browser && $loggedIn) {
            document.body.dataset.loggedIn = '';
        }
    });

    const canonicalUrl = $derived(
        page.url.origin.replace(/^https?:\/\/www\./, 'https://') + page.url.pathname
    );

    function handleScroll() {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollY / docHeight;

        thresholds.forEach((threshold) => {
            if (scrollPercentage >= threshold && !tracked.has(threshold)) {
                const pageName =
                    page.url.pathname.slice(1) === ''
                        ? 'home'
                        : page.url.pathname.slice(1).replace(/\//g, '-');

                const eventName = `${pageName}_scroll-depth_${threshold * 100}prct_scroll`;
                tracked.add(threshold);
                trackEvent(eventName);
            }
        });
    }

    if (!dev && browser) {
        const clientID = '144fa7eaa4904e8';

        const reoPromise = loadReoScript({ clientID });
        reoPromise.then((reo: Reo) => {
            reo.init({ clientID });
        });
    }

    const { children } = $props();
</script>

<svelte:window on:scroll={handleScroll} />
<svelte:head>
    {#if !dev}
        <!-- Start cookieyes banner -->
        <script
            defer
            id="cookieyes"
            type="text/javascript"
            src="https://cdn-cookieyes.com/client_data/7d0de7a43cc518960906cf03/script.js"
        ></script>
        <!-- End cookieyes banner -->

        <!--suppress JSUnresolvedLibraryURL -->
        <script defer data-domain="appwrite.io" src="https://plausible.io/js/script.js"></script>

        <!-- ZoomInfo snippet -->
        <script defer src="/scripts/zoominfo.js"></script>
    {/if}

    <!-- canonical url -->
    <link rel="canonical" href={canonicalUrl} />
</svelte:head>

<a
    class="bg-mint-500 focus:pointer-events-all pointer-events-none absolute inset-y-0 z-9999 block px-5 py-3 text-black underline opacity-0 focus:relative focus:opacity-1"
    href="#main">Skip to content</a
>

<ThemeProvider attribute="class" disableTransitionOnChange>
    {@render children()}
    <Sprite />
</ThemeProvider>

<style lang="scss">
    :global(html) {
        color-scheme: dark;
    }
</style>
