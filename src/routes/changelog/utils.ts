import { browser } from '$app/environment';
import { isNumeric } from '$lib/utils/is';

export { changelogCount, changelogs } from '$lib/content/changelog';

export const CHANGELOG_DEPENDENCY = 'dependency:changelog';

export const CHANGELOG_KEY = 'changelog';

/** Whether the main nav should show the “new changelog” dot (client-only; compares localStorage to current count). */
export function changelogNavBadgeVisible(page: {
    data: { changelogCount?: number };
    url: { pathname: string };
}) {
    if (!browser) return false;
    if (page.url.pathname.includes('/changelog')) return false;

    const count = page.data.changelogCount;
    if (typeof count !== 'number') return false;

    const prev = localStorage.getItem(CHANGELOG_KEY);
    if (!prev) return true;

    return isNumeric(prev) && JSON.parse(prev) < count;
}
