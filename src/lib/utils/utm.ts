import { createSource } from '$lib/utils/console';
import { dev as isDevEnv } from '$app/environment';

export function getReferrerAndUtmSource(): Record<string, string> {
    if (typeof sessionStorage === 'undefined') return {};

    return ['utmReferral', 'utmSource', 'utmMedium'].reduce(
        (acc, key) => {
            const value = sessionStorage.getItem(key);
            if (value) acc[key] = value;
            return acc;
        },
        {} as Record<string, string>
    );
}

export function saveReferrerAndUtmSource(url: URL) {
    const params = url.searchParams;

    const ref = params.get('ref');
    const utmSource = params.get('utm_source');
    const utmMedium = params.get('utm_medium');

    // not saved in `sessionStorage`
    const utmCampaign = params.get('utm_campaign');
    const referrer = document.referrer.includes('//appwrite.io') ? null : document.referrer || null;

    if ((ref || referrer || utmSource || utmCampaign || utmMedium) && !isDevEnv) {
        // noinspection JSIgnoredPromiseFromCall
        createSource(ref, referrer, utmSource, utmCampaign, utmMedium);
    }

    if (utmSource) sessionStorage.setItem('utmSource', utmSource);
    if (utmMedium) sessionStorage.setItem('utmMedium', utmMedium);
    if (utmCampaign) sessionStorage.setItem('utmCampaign', utmCampaign);
    if (ref || referrer) sessionStorage.setItem('utmReferral', referrer || ref || '');
}

export function getUtmSourceForLink(): string {
    if (typeof sessionStorage === 'undefined') return '';

    const params = new URLSearchParams();

    ['utmSource', 'utmMedium', 'utmCampaign'].forEach((key) => {
        const value = sessionStorage.getItem(key);
        if (value) params.set(key.replace('utm', 'utm_'), value);
    });

    return params.toString();
}
