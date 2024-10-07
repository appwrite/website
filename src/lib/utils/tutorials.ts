import { base } from '$app/paths';
import type { Tutorial } from '$markdoc/layouts/Tutorial.svelte';

export function globToTutorial(data: { tutorials: Record<string, unknown>; pathname: string }) {
    return Object.entries(data.tutorials)
        .map(([filepath, tutorial]) => {
            const { frontmatter } = tutorial as {
                frontmatter: Tutorial;
            };
            const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
            const tutorialName = data.pathname.split('/').slice(0, -1).join('/');

            return {
                title: frontmatter.title,
                step: frontmatter.step,
                href: `${base}${tutorialName}/${slug}`
            };
        })
        .sort((a, b) => {
            return a.step - b.step;
        });
}
