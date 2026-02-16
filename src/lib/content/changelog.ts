import type { ChangelogData } from '$markdoc/layouts/Changelog.svelte';

type ChangelogComponent = {
    frontmatter: ChangelogData;
    default: ConstructorOfATypedSvelteComponent;
};

const markdocs = import.meta.glob('/src/routes/changelog/**/*.markdoc', {
    eager: true
});

export const changelogs = Object.entries(markdocs)
    .filter(([filepath]) => filepath.includes('/(entries)/'))
    .map(([filepath, component]) => {
        const typedComponent = component as ChangelogComponent;
        const { frontmatter } = typedComponent;
        const slug = filepath
            .replace('/src/routes/changelog/(entries)/', '')
            .replace(/\.markdoc$/, '');
        const href = `/changelog/entry/${slug}`;

        return {
            ...frontmatter,
            component: typedComponent.default,
            filepath,
            href,
            slug
        };
    })
    .sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return bDate.getTime() - aDate.getTime();
    });

export const changelogCount = changelogs.length;
