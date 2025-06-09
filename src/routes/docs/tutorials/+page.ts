import { base } from '$app/paths';
import type { Tutorial } from '$markdoc/layouts/Tutorial.svelte';

const framework_order = ['React', 'Vue', 'SvelteKit', 'Stripe', 'Refine'];
const category_order = [
    'Web',
    'Mobile and native',
    'Server',
    'Auth',
    'Databases',
    'Storage',
    'Functions'
];

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
                draft: frontmatter.draft || false,
                category: frontmatter.category,
                href: `${base}/docs/tutorials/${tutorialName}`
            };
        })
        .filter((tutorial) => !tutorial.draft)
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

    const tutorials = Object.entries(
        allTutorials.reduce((acc: { [key: string]: any[] }, item) => {
            const cat = item.category as string;
            // If the category does not exist in the accumulator, initialize it
            if (!acc[cat]) {
                acc[cat] = [];
            }

            // Push the current item into the appropriate category
            acc[cat].push(item);

            return acc;
        }, {})
    ).map(([title, tutorials]) => ({ title, tutorials }));

    tutorials.sort((a, b) => category_order.indexOf(a.title) - category_order.indexOf(b.title));
    return {
        tutorials
    };
}
