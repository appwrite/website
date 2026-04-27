/**
 * Which analytics event names are also sent to Statsig, using the same string as `trackEvent` / Button `event`.
 *
 * Path rules: homepage CTAs only on `/`, pricing CTAs only on `/pricing`, header/nav on any path.
 * Additionally, header-related events match by prefix pattern (see `shouldForwardAnalyticsToStatsig`).
 */

const HOME_CTA_EVENTS = new Set([
    'main-get_started_btn_hero-click',
    'intro-video-btn_hero-click',
    'pricing-get-started-click',
    'pricing-view-plans-click',
    'home-pricing-cards-free-click',
    'home-pricing-cards-pro-click',
    'home-pricing-cards-scale-click',
    'home-pricing-cards-enterprise-click'
]);

const PRICING_PAGE_CTA_EVENTS = new Set([
    'pricing-cards-free-click',
    'pricing-cards-pro-click',
    'pricing-cards-scale-click',
    'pricing-cards-enterprise-click',
    'pricing-cards-stack_consolidation-see_included-click',
    'pricing-compare-free-click',
    'pricing-compare-pro-click',
    'pricing-compare-scale-click',
    'pricing-compare-enterprise-click',
    'footer-plans-get_started-click',
    'footer-plans-free-click',
    'footer-plans-pro-click',
    'footer-plans-scale-click',
    'footer-plans-enterprise-click'
]);

const SITE_HEADER_FIXED_EVENTS = new Set([
    'main-get_started_btn_nav-click',
    'main-claim_300_credits_btn_nav-click',
    'main-start_building_btn-click',
    'mobile-claim_300_credits_btn-click',
    'mobile_nav-sign_up-click',
    'main-github_star_nav-click'
]);

function normalizePath(path: string): string {
    if (!path || path === '/') return '/';
    return path.replace(/\/$/, '') || '/';
}

function isSiteHeaderDynamicEvent(eventName: string): boolean {
    return (
        /^main-nav-.+-nav-click$/.test(eventName) ||
        /^mobile-nav-.+-click$/.test(eventName) ||
        /^products-submenu-.+-click$/.test(eventName) ||
        /^products-mobile_submenu-.+-click$/.test(eventName)
    );
}

/** True if this analytics event should be duplicated to Statsig under the same event name. */
export function shouldForwardAnalyticsToStatsig(eventName: string, pathname: string): boolean {
    const path = normalizePath(pathname);
    if (HOME_CTA_EVENTS.has(eventName)) return path === '/';
    if (PRICING_PAGE_CTA_EVENTS.has(eventName)) return path === '/pricing';
    if (SITE_HEADER_FIXED_EVENTS.has(eventName)) return true;
    return isSiteHeaderDynamicEvent(eventName);
}

/** Static event names we forward (for Statsig setup); dynamic header events also match the four regex patterns in the file comment. */
export const STATSIG_FORWARDED_STATIC_EVENT_NAMES = [
    ...HOME_CTA_EVENTS,
    ...PRICING_PAGE_CTA_EVENTS,
    ...SITE_HEADER_FIXED_EVENTS
] as const;
