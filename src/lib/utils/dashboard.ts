import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
import { getUtmSourceForLink } from '$lib/utils/utm';

export function getAppwriteDashboardUrl(path = ''): string {
    const utmParams = getUtmSourceForLink();
    const url = new URL(path, PUBLIC_APPWRITE_DASHBOARD);

    if (utmParams) {
        url.search = url.search ? `${url.search}&${utmParams}` : utmParams;
    }

    return url.toString();
}
