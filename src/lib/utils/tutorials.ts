import { base } from '$app/paths';
import type { Tutorial } from '$markdoc/layouts/Tutorial.svelte';

export function globToTutorial(data: { tutorials: Record<string, unknown>; pathname: string }) {
    let isFound = false;
    let difficulty: string | undefined, readtime: string | undefined;

    return Object.entries(data.tutorials)
        .map(([filepath, tutorial]) => {
            const { frontmatter } = tutorial as {
                frontmatter: Tutorial;
            };
            const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
            const tutorialName = data.pathname.split('/').slice(0, -1).join('/');

            if (!isFound && 'difficulty' in frontmatter && 'readtime' in frontmatter) {
                isFound = true;
                readtime = frontmatter.readtime;
                difficulty = frontmatter.difficulty;
            }

            return {
                readtime,
                difficulty,
                ...frontmatter,
                href: `${base}${tutorialName}/${slug}`
            };
        })
        .sort((a, b) => {
            return a.step - b.step;
        });
}
