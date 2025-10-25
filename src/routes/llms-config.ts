/**
 * Configuration for special non-markdown pages to include in llms.txt
 * This keeps the content in sync with the actual pages
 */

export const SPECIAL_PAGES = [
    {
        href: '/integrations',
        title: 'Integrations',
        description:
            'Connect your favorite apps to Appwrite for a unified tech stack. Explore the Appwrite catalog: a marketplace to find integrations for your projects.',
        fullContent: `Connect your favorite apps to Appwrite for a unified tech stack. Explore the Appwrite catalog: a marketplace to find integrations for your projects.

Browse integrations by category including AI, Deployments, Messaging, Auth, Payments, Logging, MCP, Databases, Search, Sites, and Storage.`
    }
    // Add more special pages here as needed
] as const;
