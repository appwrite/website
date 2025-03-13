import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
import { getUtmSourceForLink } from '$lib/utils/utm';

export function getAppwriteDashboardUrl(path = '') {
    const url = new URL(path, PUBLIC_APPWRITE_DASHBOARD);
    return url.toString().includes('?')
        ? `${url.toString()}&${getUtmSourceForLink()}`
        : `${url.toString()}?${getUtmSourceForLink()}`;
}
