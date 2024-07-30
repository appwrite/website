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
    ai: 'Artificial Intelligence integrations',
    auth: 'Authentication integrations',
    databases: 'Database integrations',
    logging: 'Logging integrations',
    messaging: 'Messaging integrations',
    payments: 'Payment integrations',
    storage: 'Storage integrations',
    vcs: 'Version Control System integrations',
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

    const groupedIntegrations = groupBy(integrations, (i) => i.category);

    const integrationsWithDescriptions = Object.entries(groupedIntegrations).map(
        ([category, integrations]) => {
            const description = categoryDescriptions.find(
                ([key]) => key.toLowerCase() === category.toLowerCase()
            )?.[1];
            return {
                category,
                description,
                integrations
            };
        }
    );

    return {
        integrations: integrationsWithDescriptions,
        list: integrations,
        categories: new Set(categories),
        platforms: new Set(platforms),
        featured: integrations.filter((i) => i.featured)
    };
};
