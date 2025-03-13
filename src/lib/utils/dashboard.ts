import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
import { getUtmSourceForLink } from '$lib/utils/utm';

export function getAppwriteDashboardUrl(path = '') {
    const url = new URL(path, PUBLIC_APPWRITE_DASHBOARD);
    const params = new URLSearchParams(url.search);

    const utmParams = getUtmSourceForLink();
    Object.entries(utmParams).forEach(([key, value]) => {
        if (typeof value === 'string') {
            params.append(key, value);
        }
    });
    url.search = params.toString();
    return url.toString();
}
