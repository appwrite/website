import { base } from '$app/paths';
import { groupBy } from 'remeda';
import {
    partnerCategoryDescriptions as categoryDescriptions,
    type SearchableCategory
} from '$lib/constants';

export type Partner = {
    title: string;
    description: string;
    featured?: boolean;
    cover: string;
    partnerLevel: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
    category: string;
    frameworks: Array<string>;
    website: string;
    href: string;
    email: string;
    product: {
        vendor: string;
        avatar: string;
        href: string;
    };
    capabilities: Array<string>;
    regions: Array<string>;
    languages: Array<string>;
};

export const load = () => {
    const partnersGlob = import.meta.glob('./**/*.markdoc', {
        eager: true
    });

    const categories: Array<SearchableCategory> = [];
    const platforms: string[] = [];

    const partners = Object.entries(partnersGlob).map(([filepath, integrationList]) => {
        const { frontmatter } = integrationList as {
            frontmatter: Partner;
        };

        const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
        const integrationName = slug.slice(slug.lastIndexOf('/') + 1);

        categories.push(
            categoryDescriptions.find((i) => i.slug === frontmatter.category) ??
                ({} as SearchableCategory)
        );

        return {
            ...frontmatter,
            href: `${base}/partners/catalog/${integrationName}`
        };
    });

    const groupedPartners = groupBy(partners, (i) => i.category);

    const partnersWithDescriptions = Object.entries(groupedPartners).map(
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

    const featuredIntegrations = partners.filter((i) => i.featured);

    const featuredIntegrationsWithCategoryHeadings = Object.entries(featuredIntegrations).map(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        partners: partnersWithDescriptions,
        list: partners,
        categories: new Set(categories),
        platforms: new Set(platforms),
        featured: featuredIntegrationsWithCategoryHeadings
    };
};

export const prerender = false;
