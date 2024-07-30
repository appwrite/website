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
    ai: 'Enhance your applications with machine learning and artificial intelligence capabilities, from natural language processing to speech recognition',
    auth: 'Securely manage user authentication and authorization with integrations for various identity providers and protocols',
    databases: 'Connect and manage various database systems to efficiently store, retrieve, and manipulate your application\'s data',
    logging: 'Implement logging systems to monitor, record, and analyze application performance and errors',
    messaging: 'Integrate communication platforms for real-time messaging, notifications, and collaboration within your applications',
    payments: 'Facilitate online transactions with payment gateway integrations for seamless and secure payment processing',
    search: 'Enable powerful search functionalities within your applications to find and retrieve relevant information quickly',
    storage: 'Utilize scalable storage solutions for saving and managing application data, files, and media',
    vcs: 'Integrate with version control systems to streamline code management, collaboration, and deployment processes',
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
