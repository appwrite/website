<script lang="ts" context="module">
    import { writable } from 'svelte/store';

    export const isHeaderHidden = writable(false);
    export const isMobileNavOpen = writable(false);
    const initialized = writable(false);
</script>

<script lang="ts">
    import { browser } from '$app/environment';
    import { MobileNav, IsLoggedIn } from '$lib/components';
    import { BANNER_KEY, SOCIAL_STATS } from '$lib/constants';
    import { isVisible } from '$lib/utils/isVisible';
    import { createScrollInfo } from '$lib/utils/scroll';
    import { addEventListener } from '@melt-ui/svelte/internal/helpers';
    import { onMount } from 'svelte';
    import ProductsSubmenu from '$lib/components/ProductsSubmenu.svelte';
    import ProductsMobileSubmenu from '$lib/components/ProductsMobileSubmenu.svelte';
    import { trackEvent } from '$lib/actions/analytics';
    import MainNav from '$lib/components/MainNav.svelte';
    import { page } from '$app/state';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button, Icon, InlineTag } from '$lib/components/ui';
    import AnnouncementBanner from '$routes/(init)/init/(components)/announcement-banner.svelte';

    export let omitMainId = false;
    let theme: 'light' | 'dark' | null = 'dark';

    function setupThemeObserver() {
        const handleVisibility = () => {
            theme = getVisibleTheme();
        };

        const observer = new MutationObserver(handleVisibility);
        observer.observe(document.body, { childList: true, subtree: true });

        const callbacks = [
            addEventListener(window, 'scroll', handleVisibility),
            addEventListener(window, 'resize', handleVisibility)
        ];

        return () => {
            observer.disconnect();
            callbacks.forEach((callback) => callback());
        };
    }

    function isInViewport(element: Element): boolean {
        const mobileHeader = document.querySelector('.aw-mobile-header');
        const isMobile =
            mobileHeader &&
            getComputedStyle(mobileHeader).display !== 'none' &&
            isVisible(mobileHeader, {
                top: 0,
                bottom: window.innerHeight,
                left: 0,
                right: window.innerWidth
            });
        const h = isMobile || 'bannerHidden' in document.body.dataset ? 32 : 64;

        return isVisible(element, {
            top: h,
            bottom: h,
            left: 0,
            right: window.innerWidth
        });
    }

    function getVisibleTheme() {
        const themes = Array.from(document.querySelectorAll('.dark, .light')).filter((element) => {
            const { classList, dataset } = element as HTMLElement;
            if (
                classList.contains('web-mobile-header') ||
                classList.contains('web-main-header') ||
                element === document.body ||
                typeof dataset['themeIgnore'] === 'string'
            ) {
                return false;
            }
            return true;
        });

        for (const theme of themes) {
            if (isInViewport(theme)) {
                return theme.classList.contains('light') ? 'light' : 'dark';
            }
        }

        return 'dark';
    }

    onMount(() => {
        setTimeout(() => {
            $initialized = true;
        }, 1000);
        return setupThemeObserver();
    });

    $: navLinks = [
        {
            label: 'Products',
            submenu: ProductsSubmenu,
            mobileSubmenu: ProductsMobileSubmenu
        },
        {
            label: 'Docs',
            href: '/docs'
        },
        {
            label: 'Pricing',
            href: '/pricing'
        },
        {
            label: 'Enterprise',
            href: '/contact-us/enterprise'
        }
    ];

    $: resolvedTheme = $isMobileNavOpen ? 'dark' : theme;

    const scrollInfo = createScrollInfo();

    $: $isHeaderHidden = (() => {
        if ($scrollInfo.top < 250) {
            return false;
        }
        if ($scrollInfo.direction === 'down') {
            return true;
        }

        return $scrollInfo.deltaDirChange < 200;
    })();

    function updateSideNav() {
        if (browser) {
            const integrationsSide = document.getElementById('integrations-side');
            if (integrationsSide) {
                $isHeaderHidden
                    ? integrationsSide.classList.remove('menu-visible')
                    : integrationsSide.classList.add('menu-visible');
            }
        }
    }

    $: $isHeaderHidden, updateSideNav();
</script>

<div class="relative">
    <!--{#if !page.url.pathname.includes('/init')}-->
    <!--    <div class="border-smooth relative z-10 border-b bg-[#19191C]">-->
    <!--        <div class="is-special-padding mx-auto">-->
    <!--            <AnnouncementBanner />-->
    <!--        </div>-->
    <!--    </div>-->
    <!--{/if}-->

    <section
        class="web-mobile-header fixed! w-full! {resolvedTheme}"
        class:is-transparent={browser && !$isMobileNavOpen}
    >
        <div class="web-mobile-header-start">
            <a href="/">
                <img
                    class="web-logo web-u-only-dark"
                    src="/images/logos/appwrite.svg"
                    alt="appwrite"
                    height="24"
                    width="130"
                />
                <img
                    class="web-logo web-u-only-light"
                    src="/images/logos/appwrite-light.svg"
                    alt="appwrite"
                    height="24"
                    width="130"
                />
            </a>
        </div>
        <div class="web-mobile-header-end">
            {#if !$isMobileNavOpen}
                <Button href={getAppwriteDashboardUrl()} event="main-start_building_btn-click">
                    <span class="text">Start building</span>
                </Button>
            {/if}
            <Button
                variant="text"
                aria-label="open navigation"
                onclick={() => ($isMobileNavOpen = !$isMobileNavOpen)}
            >
                {#if $isMobileNavOpen}
                    <Icon aria-hidden="true" name="close" />
                {:else}
                    <Icon aria-hidden="true" name="hamburger-menu" />
                {/if}
            </Button>
        </div>
    </section>

    <header
        class="web-main-header is-special-padding hidden lg:block {resolvedTheme} is-transparent"
    >
        <div
            class="web-main-header-wrapper"
            class:is-special-padding={BANNER_KEY.startsWith('init-banner-')}
        >
            <div class="web-main-header-start">
                <a href="/">
                    <img
                        class="web-logo web-u-only-dark"
                        src="/images/logos/appwrite.svg"
                        alt="appwrite"
                        height="24"
                        width="130"
                    />
                    <img
                        class="web-logo web-u-only-light"
                        src="/images/logos/appwrite-light.svg"
                        alt="appwrite"
                        height="24"
                        width="130"
                    />
                </a>
                <MainNav initialized={$initialized} links={navLinks} />
            </div>
            <div class="web-main-header-end">
                <Button
                    variant="text"
                    href={SOCIAL_STATS.GITHUB.LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="web-u-inline-width-100-percent-mobile"
                >
                    <Icon name="star" aria-hidden="true" />
                    <span class="text">Star on GitHub</span>
                    <InlineTag>{SOCIAL_STATS.GITHUB.STAT}</InlineTag>
                </Button>
                <IsLoggedIn />
            </div>
        </div>
    </header>
    <MobileNav bind:open={$isMobileNavOpen} links={navLinks} />

    <main
        class="relative space-y-6"
        class:web-u-hide-mobile={$isMobileNavOpen}
        id={omitMainId ? undefined : 'main'}
    >
        <slot />
    </main>
</div>

<style lang="scss">
    .nav-badge {
        margin-inline-start: 0.5rem;
        padding-inline: 0.375rem;
    }

    @keyframes scale-in {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    .is-special-padding {
        padding-inline: clamp(1.25rem, 4vw, 120rem);
    }
</style>
