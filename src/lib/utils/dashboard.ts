import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
import { getUtmSourceForLink } from '$lib/utils/utm';

export function getAppwriteDashboardUrl(path?: string) {
    let pathUrl = path ? path : '';
    pathUrl = pathUrl.startsWith('/') ? pathUrl : `/${pathUrl}`;
    const pathWithUtm = pathUrl.includes('?')
        ? `${pathUrl}&${getUtmSourceForLink()}`
        : `${pathUrl}?${getUtmSourceForLink()}`;
    return `${PUBLIC_APPWRITE_DASHBOARD}${pathWithUtm}`;
}
