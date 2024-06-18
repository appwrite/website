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
    import { MobileNav, IsLoggedIn } from '$lib/components';
    import { BANNER_KEY, GITHUB_STARS } from '$lib/constants';
    import { isVisible } from '$lib/utils/isVisible';
    import { createScrollInfo } from '$lib/utils/scroll';
    import { hasNewChangelog } from '$routes/changelog/utils';
    import { addEventListener } from '@melt-ui/svelte/internal/helpers';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { loggedIn } from '$lib/utils/console';

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
        return isVisible(element, {
            top: 32,
            bottom: 32,
            left: 0,
            right: window.innerWidth
        });
    }

    function getVisibleTheme() {
        const themes = Array.from(document.querySelectorAll('.theme-dark, .theme-light')).filter(
            (element) => {
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
            }
        );

        for (const theme of themes) {
            if (isInViewport(theme)) {
                return theme.classList.contains('theme-light') ? 'light' : 'dark';
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

    const hideTopBanner = () => {
        document.body.dataset.bannerHidden = '';
        localStorage.setItem(BANNER_KEY, 'true');
    };
</script>

<div class="u-position-relative">
    <section
        class="web-mobile-header theme-{resolvedTheme}"
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
                <a href="https://cloud.appwrite.io" class="web-button">
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
        class="web-main-header is-special-padding theme-{resolvedTheme} is-transparent"
        class:is-hidden={$isHeaderHidden}
    >
        <div class="web-top-banner">
            <div class="web-top-banner-content web-u-color-text-primary">
                <a href="/discord" target="_blank" rel="noopener noreferrer">
                    <span class="web-caption-500">We are having lots of fun on</span>
                    <span class="web-icon-discord" aria-hidden="true" />
                    <span class="web-caption-500">Discord. Come and join us!</span>
                </a>
                {#if browser}
                    <button
                        class="web-top-banner-button"
                        aria-label="close discord message"
                        on:click={hideTopBanner}
                    >
                        <span class="web-icon-close" aria-hidden="true" />
                    </button>
                {/if}
            </div>
        </div>

        <div class="web-main-header-wrapper">
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
                            <li class="web-main-header-nav-item">
                                <a
                                    class="web-link"
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
                    href="https://github.com/appwrite/appwrite/stargazers"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="web-button is-text"
                >
                    <span aria-hidden="true" class="web-icon-star" />
                    <span class="text">Star on GitHub</span>
                    <span class="web-inline-tag web-sub-body-400">{GITHUB_STARS}</span>
                </a>
                <IsLoggedIn />
            </div>
        </div>
    </header>
    <MobileNav bind:open={$isMobileNavOpen} links={navLinks} />

    <main
        class="web-main-section"
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
