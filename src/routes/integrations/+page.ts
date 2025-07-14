import { base } from '$app/paths';
import { groupBy } from 'remeda';
import type { SearchableCategory } from '$lib/constants';
import { integrationCategoryDescriptions as categoryDescriptions } from '$lib/constants';

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
        vendor: string;
        description: string;
    };
    href: string;
    images: string[];
};

export const load = () => {
    const integrationsGlob = import.meta.glob('./**/*.markdoc', {
        eager: true
    });

    const categories: SearchableCategory[] = [];
    const platforms: string[] = [];

    const integrations = Object.entries(integrationsGlob).map(([filepath, integrationList]) => {
        const { frontmatter } = integrationList as {
            frontmatter: Integration;
        };

        const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
        const integrationName = slug.slice(slug.lastIndexOf('/') + 1);

        frontmatter.platform.map((platform) => platforms.push(platform));
        categories.push(
            categoryDescriptions.find((i) => i.slug === frontmatter.category) ??
                ({} as SearchableCategory)
        );

        return {
            ...frontmatter,
            href: `${base}/integrations/${integrationName}`
        };
    });

    const groupedIntegrations = groupBy(integrations, (i) => i.category);

    const integrationsWithDescriptions = Object.entries(groupedIntegrations).map(
        ([category, integrations]) => {
            const integrationCategory = categoryDescriptions.find(
                (key) => key.slug === category.toLowerCase()
            );
            return {
                category,
                heading: integrationCategory?.heading,
                description: integrationCategory?.description,
                integrations
            };
        }
    );

    const featuredIntegrations = integrations.filter((i) => i.featured);

    const featuredIntegrationsWithCategoryHeadings = Object.entries(featuredIntegrations).map(
        ([_, integration]) => {
            const integrationCategory = categoryDescriptions.find(
                (key) => key.slug === integration.category.toLowerCase()
            );
            return {
                heading: integrationCategory?.heading,
                integration
            };
        }
    );

    return {
        integrations: integrationsWithDescriptions,
        list: integrations,
        categories: new Set(categories),
        platforms: new Set(platforms),
        featured: featuredIntegrationsWithCategoryHeadings
    };
};

export const prerender = false;
