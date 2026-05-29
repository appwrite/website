<script lang="ts" context="module">
    import { writable } from 'svelte/store';

    export const isHeaderHidden = writable(false);
    export const isMobileNavOpen = writable(false);
    const initialized = writable(false);
</script>

<script lang="ts">
    import { browser } from '$app/environment';
    import { MobileNav, IsLoggedIn } from '$lib/components';
    import InitPromoBanner from '$lib/components/InitPromoBanner.svelte';
    import { BANNER_KEY, SOCIAL_STATS } from '$lib/constants';
    import { isVisible } from '$lib/utils/isVisible';
    import { createScrollInfo } from '$lib/utils/scroll';
    import { onMount } from 'svelte';
    import ProductsSubmenu from '$lib/components/ProductsSubmenu.svelte';
    import ProductsMobileSubmenu from '$lib/components/ProductsMobileSubmenu.svelte';
    import { trackEvent } from '$lib/actions/analytics';
    import MainNav from '$lib/components/MainNav.svelte';
    import { page } from '$app/stores';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button, Icon, InlineTag } from '$lib/components/ui';
    import { changelogNavBadgeVisible } from '$routes/changelog/utils';
    import { DEFAULT_HERO_CTA } from '$lib/statsig/constants';

    export let omitMainId = false;
    export let hideNavigation = false;
    let theme: 'light' | 'dark' | null = 'dark';

    function setupThemeObserver() {
        let visibilityFrame = 0;
        const scheduleVisibility = () => {
            if (visibilityFrame) return;
            visibilityFrame = requestAnimationFrame(() => {
                visibilityFrame = 0;
                theme = getVisibleTheme();
            });
        };

        const observer = new MutationObserver(scheduleVisibility);
        observer.observe(document.body, { childList: true, subtree: true });

        const passiveScroll: AddEventListenerOptions = { passive: true };
        window.addEventListener('scroll', scheduleVisibility, passiveScroll);
        window.addEventListener('resize', scheduleVisibility, passiveScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', scheduleVisibility, passiveScroll);
            window.removeEventListener('resize', scheduleVisibility, passiveScroll);
            if (visibilityFrame) cancelAnimationFrame(visibilityFrame);
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
        const bannerOffset = document.querySelector('.init-promo-banner') ? 56 : 0;
        const h = (isMobile ? 32 : 64) + bannerOffset;

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
        },
        {
            label: 'Customers',
            href: '/blog/category/customer-stories'
        },
        {
            label: 'Blog',
            href: '/blog'
        },
        {
            label: 'Changelog',
            href: '/changelog',
            showBadge: changelogNavBadgeVisible($page)
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

    $: ($isHeaderHidden, updateSideNav());

    $: isOfferPage = $page.route.id?.includes('/offer-300') ?? false;

    $: navCtaLabel = ($page.data as { heroCta?: string | null }).heroCta ?? DEFAULT_HERO_CTA;
    $: mobileButtonHref = isOfferPage ? 'https://apwr.dev/DCMWDSw' : getAppwriteDashboardUrl();
    $: mobileButtonEvent = isOfferPage
        ? 'mobile-claim_300_credits_btn-click'
        : 'main-start_building_btn-click';
    $: mobileButtonText = isOfferPage ? 'Claim 300$ credits' : navCtaLabel;

    const handleNav = () => {
        $isMobileNavOpen = !$isMobileNavOpen;
        document.body.style.overflow = $isMobileNavOpen ? 'hidden' : '';
    };
</script>

<div class="relative contents h-full">
    <InitPromoBanner />
    <section
        class="web-mobile-header flex! xl:hidden! {resolvedTheme}"
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
                <Button href={mobileButtonHref} event={mobileButtonEvent}>
                    <span class="text">{mobileButtonText}</span>
                </Button>
            {/if}
            <Button variant="text" aria-label="open navigation" onclick={handleNav}>
                {#if $isMobileNavOpen}
                    <Icon aria-hidden="true" name="close" />
                {:else}
                    <Icon aria-hidden="true" name="hamburger-menu" />
                {/if}
            </Button>
        </div>
    </section>

    <header
        class="web-main-header is-special-padding hidden xl:block! {resolvedTheme} is-transparent"
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
                {#if !hideNavigation}
                    <MainNav initialized={$initialized} links={navLinks} />
                {/if}
            </div>
            <div class="web-main-header-end">
                <Button
                    variant="text"
                    href={isOfferPage ? undefined : SOCIAL_STATS.GITHUB.LINK}
                    target={isOfferPage ? undefined : '_blank'}
                    rel={isOfferPage ? undefined : 'noopener noreferrer'}
                    class="web-u-inline-width-100-percent-mobile is-github-stat-link"
                    style={isOfferPage ? 'pointer-events: none;' : ''}
                    event={isOfferPage ? undefined : 'main-github_star_nav-click'}
                    aria-label={isOfferPage
                        ? 'Appwrite on GitHub'
                        : `Appwrite on GitHub, ${SOCIAL_STATS.GITHUB.STAT} stars`}
                >
                    <Icon name="github" aria-hidden="true" />
                    <InlineTag>{SOCIAL_STATS.GITHUB.STAT}</InlineTag>
                </Button>
                <IsLoggedIn offerButton={isOfferPage} />
            </div>
        </div>
    </header>
    {#if !hideNavigation}
        <MobileNav bind:open={$isMobileNavOpen} links={navLinks} offerButton={isOfferPage} />
    {/if}

    <main
        class="relative space-y-6"
        class:invisible={$isMobileNavOpen}
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
