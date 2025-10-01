import { browser } from '$app/environment';
import { page } from '$app/stores';
import { isNumeric } from '$lib/utils/is';
import { get } from 'svelte/store';

export { changelogCount, changelogs } from '$lib/content/changelog';

export const CHANGELOG_DEPENDENCY = 'dependency:changelog';

export const CHANGELOG_KEY = 'changelog';

export function hasNewChangelog() {
    if (!browser) return false;

    const prev = localStorage.getItem(CHANGELOG_KEY);
    if (!prev) return true;

    return isNumeric(prev) && JSON.parse(prev) < get(page).data.changelogCount;
}
