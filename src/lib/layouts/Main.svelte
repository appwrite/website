<script lang="ts" context="module">
    import { writable } from 'svelte/store';

    export type NavLink = {
        label: string;
        href: string;
        showBadge?: boolean;
    };
    export const isHeaderHidden = writable(false);
    export const isMobileNavOpen = writable(false);
    const initialized = writable(false);
</script>

<script lang="ts">
    import { browser } from '$app/environment';
    import MobileNav from '$lib/components/MobileNav.svelte';
    import IsLoggedIn from '$lib/components/IsLoggedIn.svelte';
    import { BANNER_KEY, GITHUB_REPO_LINK, GITHUB_STARS } from '$lib/constants';
    import { isVisible } from '$lib/utils/isVisible';
    import { createScrollInfo } from '$lib/utils/scroll';
    import { hasNewChangelog } from '$routes/changelog/utils';
    import { addEventListener } from '@melt-ui/svelte/internal/helpers';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { classNames } from '$lib/utils/classnames';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import AnnouncementBanner from '$lib/components/AnnouncementBanner.svelte';
    import InitBanner from '$lib/components/InitBanner.svelte';
    import { trackEvent } from '$lib/actions/analytics';

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

    let navLinks: NavLink[] = [
        {
            label: 'Docs',
            href: '/docs'
        },
        {
            label: 'Community',
            href: '/community'
        },
        {
            label: 'Blog',
            href: '/blog'
        },
        {
            label: 'Integrations',
            href: '/integrations'
        },
        {
            label: 'Changelog',
            href: '/changelog',
            showBadge: hasNewChangelog?.() && !$page.url.pathname.includes('/changelog')
        },
        {
            label: 'Pricing',
            href: '/pricing'
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
    <section
        class="web-mobile-header {resolvedTheme}"
        class:is-transparent={browser && !$isMobileNavOpen}
        class:is-hidden={$isHeaderHidden}
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
                <a href={PUBLIC_APPWRITE_DASHBOARD} class="web-button">
                    <span class="text">Get started</span>
                </a>
            {/if}
            <button
                class="web-button is-text"
                aria-label="open navigation"
                on:click={() => ($isMobileNavOpen = !$isMobileNavOpen)}
            >
                {#if $isMobileNavOpen}
                    <span aria-hidden="true" class="web-icon-close" />
                {:else}
                    <span aria-hidden="true" class="web-icon-hamburger-menu" />
                {/if}
            </button>
        </div>
    </section>
    <header
        class="web-main-header is-special-padding {resolvedTheme} is-transparent"
        class:is-hidden={$isHeaderHidden}
        class:is-special-padding={!BANNER_KEY.startsWith('init-banner-')}
        style={BANNER_KEY === 'init-banner-02' ? 'padding-inline: 0' : ''}
    >
        {#if BANNER_KEY.startsWith('init-banner-')}
            <InitBanner />
        {:else}
            <AnnouncementBanner>
                <a href="/discord" target="_blank" rel="noopener noreferrer">
                    <span class="text-caption font-medium">We are having lots of fun on</span>
                    <span class="web-icon-discord" aria-hidden="true" />
                    <span class="text-caption font-medium">Discord. Come and join us!</span>
                </a>
            </AnnouncementBanner>
        {/if}

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
                <nav class="web-main-header-nav" aria-label="Main">
                    <ul class="web-main-header-nav-list">
                        {#each navLinks as navLink}
                            <li class="web-main-header-nav-item text-primary hover:text-accent">
                                <a
                                    class={classNames(
                                        'data-[badge]:after:animate-scale-in data-[badge]:relative data-[badge]:after:absolute data-[badge]:after:size-1.5 data-[badge]:after:translate-full data-[badge]:after:rounded-full'
                                    )}
                                    href={navLink.href}
                                    data-initialized={$initialized ? '' : undefined}
                                    data-badge={navLink.showBadge ? '' : undefined}
                                    >{navLink.label}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </nav>
            </div>
            <div class="web-main-header-end">
                <a
                    href={GITHUB_REPO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="web-button is-text web-u-inline-width-100-percent-mobile"
                    on:click={() => trackEvent('Star on GitHub in header')}
                >
                    <span class="web-icon-star" aria-hidden="true" />
                    <span class="text">Star on GitHub</span>
                    <span class="web-inline-tag text-sub-body">{GITHUB_STARS}</span>
                </a>
                <IsLoggedIn />
            </div>
        </div>
    </header>
    <MobileNav bind:open={$isMobileNavOpen} links={navLinks} />

    <main
        class="space-y-6"
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

    [data-badge] {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            background-color: hsl(var(--web-color-accent));
            border-radius: 100%;
            width: 0.375rem;
            height: 0.375rem;

            inset-block-start: -2px;
            inset-inline-end: -4px;
            translate: 100%;
        }

        &:not([data-initialized])::after {
            animation: scale-in 0.2s ease-out;
        }
    }
</style>
