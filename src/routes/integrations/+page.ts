import { base } from '$app/paths';
import { groupBy } from 'remeda';

export type Integration = {
    title: string;
    description: string;
    featured?: boolean;
    cover: string;
    isNew?: boolean;
    isPartner?: boolean;
    platform: string[];
    category: string;
    product: {
        avatar: string;
        developer: string;
        description: string;
    };
    href: string;
    images: string[];
};

const categoryDescriptions = Object.entries({
    ai: 'Artificial Intelligence integrations'
});

export const load = () => {
    const integrationsGlob = import.meta.glob('./**/*.markdoc', {
        eager: true
    });

    const categories: string[] = [];
    const platforms: string[] = [];

    const integrations = Object.entries(integrationsGlob).map(([filepath, integrationList]) => {
        const { frontmatter } = integrationList as {
            frontmatter: Integration;
        };

        const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
        const integrationName = slug.slice(slug.lastIndexOf('/') + 1);

        frontmatter.platform.map((platform) => platforms.push(platform));
        categories.push(frontmatter.category);

        return {
            ...frontmatter,
            href: `${base}/integrations/${integrationName}`
        };
    });

    return {
        integrations: groupBy(
            integrations.filter((i) => !i.featured),
            (i) => i.category
        ),
        list: integrations,
        categories: new Set(categories),
        platforms: new Set(platforms),
        featured: integrations.filter((i) => i.featured)
    };
};
