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
                    classList.contains('aw-mobile-header') ||
                    classList.contains('aw-main-header') ||
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
            showBadge: hasNewChangelog() && !$page.url.pathname.includes('/changelog')
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
        class="aw-mobile-header theme-{resolvedTheme}"
        class:is-transparent={browser && !$isMobileNavOpen}
        class:is-hidden={$isHeaderHidden}
    >
        <div class="aw-mobile-header-start">
            <a href="/">
                <img
                    class="aw-logo aw-u-only-dark"
                    src="/images/logos/appwrite.svg"
                    alt="appwrite"
                    height="24"
                    width="130"
                />
                <img
                    class="aw-logo aw-u-only-light"
                    src="/images/logos/appwrite-light.svg"
                    alt="appwrite"
                    height="24"
                    width="130"
                />
            </a>
        </div>
        <div class="aw-mobile-header-end">
            {#if !$isMobileNavOpen}
                <a href="https://cloud.appwrite.io" class="aw-button">
                    <span class="text">Get started</span>
                </a>
            {/if}
            <button
                class="aw-button is-text"
                aria-label="open navigation"
                on:click={() => ($isMobileNavOpen = !$isMobileNavOpen)}
            >
                {#if $isMobileNavOpen}
                    <span aria-hidden="true" class="aw-icon-close" />
                {:else}
                    <span aria-hidden="true" class="aw-icon-hamburger-menu" />
                {/if}
            </button>
        </div>
    </section>
    {#if !$page.route.id?.startsWith('/init')}
        <div class="aw-top-banner-2 is-special-padding">
            <a href="/init" class="u-block aw-top-banner-2-wrapper">
                <div class="u-flex u-main-space-between u-cross-center u-gap-16">
                    <div class="u-flex-vertical u-gap-2">
                        <div class="u-flex u-cross-end u-gap-8">
                            <svg
                                    role="img" aria-label="init"
                                    xmlns="http://www.w3.org/2000/svg" width="37" height="16" viewBox="0 0 37 16" fill="none">
                                <g clip-path="url(#clip0_1872_66496)">
                                    <path d="M27.5078 15.5355V13.7305H37.0764V15.5355H27.5078Z" fill="#FD366E"/>
                                    <path d="M24.807 13.2219C23.0162 13.2219 21.8399 12.4158 21.8399 10.4705V5.86156H20.2422V4.039H21.9628V1.46289H23.9292V4.039H26.5276V5.86156H23.9292V10.453C23.9292 11.1014 24.1925 11.3818 24.8246 11.3818H26.4223V13.2219H24.807Z" fill="white"/>
                                    <path d="M17.7937 2.61713C17.0387 2.61713 16.4769 2.05634 16.4769 1.32031C16.4769 0.601802 17.0387 0.0410156 17.7937 0.0410156C18.5486 0.0410156 19.1104 0.601802 19.1104 1.32031C19.1104 2.05634 18.5486 2.61713 17.7937 2.61713ZM16.7402 13.2195V5.85917H15.125V4.03662H18.812V13.2195H16.7402Z" fill="white"/>
                                    <path d="M5.89844 13.2193V4.03641H7.97016V5.08789H8.12818C8.53199 4.3869 9.37472 3.80859 10.6037 3.80859C12.6228 3.80859 13.9044 5.31571 13.9044 7.20836V13.2193H11.8327V7.69905C11.8327 6.55995 11.0251 5.77135 9.97166 5.77135C8.83046 5.77135 7.97016 6.64758 7.97016 7.8042V13.2193H5.89844Z" fill="white"/>
                                    <path d="M2.73507 2.61713C1.98012 2.61713 1.4183 2.05634 1.4183 1.32031C1.4183 0.601802 1.98012 0.0410156 2.73507 0.0410156C3.49002 0.0410156 4.05185 0.601802 4.05185 1.32031C4.05185 2.05634 3.49002 2.61713 2.73507 2.61713ZM1.68165 13.2195V5.85917H0.0664062V4.03662H3.75338V13.2195H1.68165Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1872_66496">
                                        <rect width="37" height="15.5789" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <h6 class="aw-sub-body-500 aw-u-color-text-accent-click" style="line-height:15px">join us for Day 4</h6>
                        </div>
                        <p class="aw-caption-500">New and updated runtimes announced</p>
                    </div>
                    <div class="u-flex-vertical u-gap-2">
                        <div class="aw-link u-flex u-cross-center">
                            <span class="aw-sub-body-400">Go to Init</span>
                            <span class="aw-icon-arrow-right" aria-hidden="true"></span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    {/if}
    <header
        class="aw-main-header is-special-padding theme-{resolvedTheme} is-transparent"
        class:is-hidden={$isHeaderHidden}
    >

<!--        <div class="aw-top-banner">-->
<!--            <div class="aw-top-banner-content aw-u-color-text-primary">-->
<!--                <a href="/discord" target="_blank" rel="noopener noreferrer">-->
<!--                    <span class="aw-caption-500">We are having lots of fun on</span>-->
<!--                    <span class="aw-icon-discord" aria-hidden="true" />-->
<!--                    <span class="aw-caption-500">Discord. Come and join us!</span>-->
<!--                </a>-->
<!--                {#if browser}-->
<!--                    <button-->
<!--                        class="aw-top-banner-button"-->
<!--                        aria-label="close discord message"-->
<!--                        on:click={hideTopBanner}-->
<!--                    >-->
<!--                        <span class="aw-icon-close" aria-hidden="true" />-->
<!--                    </button>-->
<!--                {/if}-->
<!--            </div>-->
<!--        </div>-->

        <div class="aw-main-header-wrapper">
            <div class="aw-main-header-start">
                <a href="/">
                    <img
                        class="aw-logo aw-u-only-dark"
                        src="/images/logos/appwrite.svg"
                        alt="appwrite"
                        height="24"
                        width="130"
                    />
                    <img
                        class="aw-logo aw-u-only-light"
                        src="/images/logos/appwrite-light.svg"
                        alt="appwrite"
                        height="24"
                        width="130"
                    />
                </a>
                <nav class="aw-main-header-nav" aria-label="Main">
                    <ul class="aw-main-header-nav-list">
                        {#each navLinks as navLink}
                            <li class="aw-main-header-nav-item">
                                <a
                                    class="aw-link"
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
            <div class="aw-main-header-end">
                <a
                    href="https://github.com/appwrite/appwrite/stargazers"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="aw-button is-text"
                >
                    <span aria-hidden="true" class="aw-icon-star" />
                    <span class="text">Star on GitHub</span>
                    <span class="aw-inline-tag aw-sub-body-400">{GITHUB_STARS}</span>
                </a>
                <IsLoggedIn />
            </div>
        </div>
    </header>
    <MobileNav bind:open={$isMobileNavOpen} links={navLinks} />

    <main
        class="aw-main-section"
        class:aw-u-hide-mobile={$isMobileNavOpen}
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
            background-color: hsl(var(--aw-color-accent));
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
