import { base } from '$app/paths';
import type { Tutorial } from '$markdoc/layouts/Tutorial.svelte';

const framework_order = ['React', 'Vue', 'SvelteKit', 'Stripe', 'Refine'];

export async function load() {
    const tutorialsGlob = import.meta.glob('./**/step-1/+page.markdoc', {
        eager: true
    });

    const allTutorials = Object.entries(tutorialsGlob)
        .map(([filepath, tutorialList]: [string, unknown]) => {
            const { frontmatter } = tutorialList as {
                frontmatter: Tutorial;
            };
            const slug = filepath
                .replace('./', '')
                .replace('/+page.markdoc', '')
                .replace('/step-1', '');
            const tutorialName = slug.slice(slug.lastIndexOf('/') + 1);

            return {
                title: frontmatter.title,
                framework: frontmatter.framework,
                draft: frontmatter.draft,
                href: `${base}/docs/tutorials/${tutorialName}`
            };
        })
        .sort((a, b) => {
            // Sort by framework order
            const frameworkIndexA = framework_order.indexOf(a.framework as string);
            const frameworkIndexB = framework_order.indexOf(b.framework as string);

            if (frameworkIndexA > frameworkIndexB) {
                return 1;
            }
            if (frameworkIndexA < frameworkIndexB) {
                return -1;
            }

            // Else, sort by title
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        });

    const drafts = allTutorials.filter((tutorial) => tutorial.draft);
    const tutorials = allTutorials.filter((tutorial) => !tutorial.draft);

    return {
        tutorials,
        drafts
    };
}
