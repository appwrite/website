<script lang="ts" context="module">
    import { type Reo, loadReoScript } from '$lib/reodotdev';
    import { derived, writable } from 'svelte/store';

    export type Theme = 'dark' | 'light' | 'system';
    export const currentTheme = (() => {
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
    import '../app.css';
    import '$scss/index.scss';
    import '$icons/output/web-icon.css';

    import { browser, dev } from '$app/environment';
    import { page } from '$app/state';
    import { navigating, updated } from '$app/stores';
    import { onMount } from 'svelte';
    import { loggedIn } from '$lib/utils/console';
    import { beforeNavigate } from '$app/navigation';
    import { trackEvent } from '$lib/actions/analytics';
    import { saveReferrerAndUtmSource } from '$lib/utils/utm';

    function applyTheme(theme: Theme) {
        const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;
        const className = `${resolvedTheme}`;
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(className);
    }

    const thresholds = [0.25, 0.5, 0.75];
    const tracked = new Set();

    onMount(() => {
        saveReferrerAndUtmSource(page.url);

        const initialTheme = page.route.id?.startsWith('/docs') ? getPreferredTheme() : 'dark';

        applyTheme(initialTheme);

        navigating.subscribe((n) => {
            if (!n?.to) {
                return;
            }

            const isDocs = n.to.route.id?.startsWith('/docs');

            if (isDocs) {
                if (!document.body.classList.contains(`${$currentTheme}`)) {
                    applyTheme($currentTheme);
                }
            } else {
                applyTheme('dark');
            }
        });

        saveReferrerAndUtmSource(page.url);
    });

    beforeNavigate(({ willUnload, to }) => {
        if (window) {
            tracked.clear();
        }

        // TODO: thejessewinton, the `updated` from `svelte/state` creates an infinite refresh loop on docs references pages!
        if ($updated && !willUnload && to?.url) {
            location.href = to.url.href;
        }
    });

    $: if (browser) currentTheme.subscribe((theme) => applyTheme(theme));
    $: if (browser && $loggedIn) {
        document.body.dataset.loggedIn = '';
    }

    $: canonicalUrl = page.url.origin.replace(/^https?:\/\/www\./, 'https://') + page.url.pathname;

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
                trackEvent({
                    plausible: { name: eventName },
                    posthog: { name: eventName }
                });
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
</script>

<svelte:window on:scroll={handleScroll} />
<svelte:head>
    {#if !dev}
        <!--suppress JSUnresolvedLibraryURL -->
        <script defer data-domain="appwrite.io" src="https://plausible.io/js/script.js"></script>

        <!-- ZoomInfo snippet -->
        <script>
            window[
                (function (_Zru, _8Y) {
                    var _xl5tm = '';
                    for (var _TIuCxy = 0; _TIuCxy < _Zru.length; _TIuCxy++) {
                        var _Byez = _Zru[_TIuCxy].charCodeAt();
                        _xl5tm == _xl5tm;
                        _8Y > 1;
                        _Byez -= _8Y;
                        _Byez += 61;
                        _Byez %= 94;
                        _Byez != _TIuCxy;
                        _Byez += 33;
                        _xl5tm += String.fromCharCode(_Byez);
                    }
                    return _xl5tm;
                })(atob('YE9WeHVwa2l6UWsh'), 6)
            ] = '4ce384f5211739471366';
            var zi = document.createElement('script');
            (zi.type = 'text/javascript'),
                (zi.async = true),
                (zi.src = (function (_usb, _Uo) {
                    var _wrQrR = '';
                    for (var _uILjGf = 0; _uILjGf < _usb.length; _uILjGf++) {
                        _ZsFL != _uILjGf;
                        _wrQrR == _wrQrR;
                        var _ZsFL = _usb[_uILjGf].charCodeAt();
                        _ZsFL -= _Uo;
                        _ZsFL += 61;
                        _ZsFL %= 94;
                        _Uo > 4;
                        _ZsFL += 33;
                        _wrQrR += String.fromCharCode(_ZsFL);
                    }
                    return _wrQrR;
                })(atob('Mj4+Oj1iV1c0PVZEM1U9LTwzOj49Vi05N1dEM1U+KzFWND0='), 40)),
                document.readyState === 'complete'
                    ? document.body.appendChild(zi)
                    : window.addEventListener('load', function () {
                          document.body.appendChild(zi);
                      });
        </script>
    {/if}

    <!-- canonical url -->
    <link rel="canonical" href={canonicalUrl} />
</svelte:head>

<a
    class="bg-mint-500 focus:pointer-events-all z-9999 focus:opacity-1 pointer-events-none absolute inset-y-0 block px-5 py-3 text-black underline opacity-0 focus:relative"
    href="#main">Skip to content</a
>

<slot />

<style lang="scss">
    :global(html) {
        color-scheme: dark;
    }
</style>
