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
        vendor: string;
        description: string;
    };
    href: string;
    images: string[];
};

export type IntegrationCategory = {
    slug: string;
    heading: string;
    description: string;
}

const categoryDescriptions : IntegrationCategory[] = [
    {
        slug: 'ai',
        heading: 'AI',
        description: 'Machine learning and AI capabilities'
    },
    {
        slug: 'auth',
        heading: 'Auth',
        description: 'User authentication and authorization'
    },
    {
        slug: 'databases',
        heading: 'Databases',
        description: 'Manage database systems'
    },
    {
        slug: 'logging',
        heading: 'Logging',
        description: 'Monitor and analyze application logs'
    },
    {
        slug: 'messaging',
        heading: 'Messaging',
        description: 'Real-time communication platforms'
    },
    {
        slug: 'payments',
        heading: 'Payments',
        description: 'Secure online payment processing'
    },
    {
        slug: 'search',
        heading: 'Search',
        description: 'Implement search functionalities'
    },
    {
        slug: 'storage',
        heading: 'Storage',
        description: 'Storage for data and media'
    },
    {
        slug: 'deployments',
        heading: 'Deployments',
        description: 'Seamlessly deploy your code'
    }
]

export const load = () => {
    const integrationsGlob = import.meta.glob('./**/*.markdoc', {
        eager: true
    });

    const categories: IntegrationCategory[] = [];
    const platforms: string[] = [];

    const integrations = Object.entries(integrationsGlob).map(([filepath, integrationList]) => {
        const { frontmatter } = integrationList as {
            frontmatter: Integration;
        };

        const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
        const integrationName = slug.slice(slug.lastIndexOf('/') + 1);

        frontmatter.platform.map((platform) => platforms.push(platform));
        categories.push(categoryDescriptions.find((i) => i.slug === frontmatter.category) ?? {} as IntegrationCategory);

        return {
            ...frontmatter,
            href: `${base}/integrations/${integrationName}`
        };
    });

    const groupedIntegrations = groupBy(integrations, (i) => i.category);

    const integrationsWithDescriptions = Object.entries(groupedIntegrations).map(
        ([category, integrations]) => {
            const integrationCategory = categoryDescriptions.find(
                ( key ) => key.slug === category.toLowerCase()
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
                ( key ) => key.slug === integration.category.toLowerCase()
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
