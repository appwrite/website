import { browser } from '$app/environment';
import { page } from '$app/stores';
import { isNumeric } from '$lib/utils/is';
import type { ChangelogData } from '$markdoc/layouts/Changelog.svelte';
import { get } from 'svelte/store';

type ChangelogComponent = {
    frontmatter: ChangelogData;
    default: ConstructorOfATypedSvelteComponent;
};

export const getAllChangelogEntries = async () => {
    const entriesGlob = await import.meta.glob('./**/*.markdoc', { eager: true });
    let entries = Object.entries(entriesGlob).map(([filepath, component]) => {
        const typedComponent = component as ChangelogComponent;
        const { frontmatter } = typedComponent;
        const slug = filepath.replace(/\.markdoc$/, '').replace('./(entries)/', '');
        const href = `/changelog/entry/${slug}`;

        return {
            ...frontmatter,
            component: typedComponent.default,
            filepath,
            href,
            slug
        };
    });
    entries = entries.filter(({ filepath }) => {
        return filepath.includes('(entries)');
    });

    return entries.sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return bDate.getTime() - aDate.getTime();
    });
};

export const CHANGELOG_DEPENDENCY = 'dependency:changelog';

export const CHANGELOG_KEY = 'changelog';

export function hasNewChangelog() {
    if (!browser) return false;

    const prev = localStorage.getItem(CHANGELOG_KEY);
    if (!prev) return true;

    return isNumeric(prev) && JSON.parse(prev) < get(page).data.changelogEntries;
}
