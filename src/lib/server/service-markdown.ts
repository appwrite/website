import { getService } from '../../routes/docs/references/[version]/[platform]/[service]/specs';
import type { SDKMethod } from '../../routes/docs/references/[version]/[platform]/[service]/specs';

/**
 * Generates markdown content for a service reference page from OpenAPI schema data
 */
export async function generateServiceMarkdown(
    versionParam: string,
    platform: string,
    serviceName: string
): Promise<string | null> {
    try {
        const version = versionParam === 'cloud' ? '1.8.x' : versionParam;
        const serviceData = await getService(version, platform, serviceName);

        const { service, methods } = serviceData;

        let markdown = `# ${service.name}\n\n`;
        if (service.description) {
            // Remove markdown links from description for cleaner output
            const cleanDescription = service.description.replace(/\[([^\]]+)]\([^)]+\)/g, '$1');
            markdown += `${cleanDescription}\n\n`;
        }

        markdown += `## Base URL\n\n`;
        markdown += `\`\`\`\n`;
        markdown += `https://<REGION>.cloud.appwrite.io/v1\n`;
        markdown += `\`\`\`\n\n`;

        if (methods.length === 0) {
            markdown += `*No endpoints found for this version and platform.*\n\n`;
            return markdown;
        }

        // Group methods by their group property
        const groupedMethods = groupMethodsByGroup(methods);

        markdown += `## Endpoints\n\n`;

        for (const [group, groupMethods] of Object.entries(groupedMethods)) {
            if (group) {
                markdown += `### ${group}\n\n`;
            }

            const sortedMethods = sortMethods(groupMethods);

            for (const method of sortedMethods) {
                markdown += `#### ${method.title}\n\n`;

                if (method.description) {
                    // Remove markdown links for cleaner output
                    const cleanDescription = method.description.replace(
                        /\[([^\]]+)]\([^)]+\)/g,
                        '$1'
                    );
                    markdown += `${cleanDescription}\n\n`;
                }

                markdown += `**Endpoint:** \`${method.method.toUpperCase()} ${method.url}\`\n\n`;

                // Parameters
                if (method.parameters.length > 0) {
                    markdown += `**Parameters:**\n\n`;
                    markdown += `| Name | Type | Required | Description |\n`;
                    markdown += `|------|------|----------|-------------|\n`;

                    for (const param of method.parameters) {
                        const required = param.required ? 'Yes' : 'No';
                        const description =
                            param.description?.replace(/\|/g, '\\|').replace(/\n/g, ' ').trim() ||
                            '';
                        markdown += `| ${param.name} | ${param.type} | ${required} | ${description} |\n`;
                    }
                    markdown += `\n`;
                }

                // Responses
                if (method.responses.length > 0) {
                    markdown += `**Responses:**\n\n`;
                    for (const response of method.responses) {
                        markdown += `- **${response.code}**: ${response.contentType || 'no content'}\n`;
                        if (response.models && response.models.length > 0) {
                            for (const model of response.models) {
                                markdown += `  - [${model.name}](/docs/references/${versionParam}/models/${model.id})\n`;
                            }
                        }
                    }
                    markdown += `\n`;
                }

                // Rate limits
                if (method['rate-limit'] > 0) {
                    markdown += `**Rate limits:** ${method['rate-limit']} requests per ${method['rate-time']} seconds\n\n`;
                }

                // Code example
                if (method.demo) {
                    markdown += `**Example:**\n\n`;
                    markdown += `\`\`\`${platform}\n`;
                    markdown += `${method.demo}\n`;
                    markdown += `\`\`\`\n\n`;
                }

                markdown += `---\n\n`;
            }
        }

        return markdown;
    } catch (error) {
        console.error('Error generating service markdown:', error);
        return null;
    }
}

/**
 * Groups methods by their group property
 */
function groupMethodsByGroup(methods: SDKMethod[]): Record<string, SDKMethod[]> {
    return methods.reduce<Record<string, SDKMethod[]>>((acc, method) => {
        const groupKey = method.group || '';
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(method);
        return acc;
    }, {});
}

/**
 * Sorts methods by their operation order and title
 */
function sortMethods(methods: SDKMethod[]): SDKMethod[] {
    return methods.sort((a, b) => {
        const orderA = getOperationOrder(a.title);
        const orderB = getOperationOrder(b.title);
        if (orderA === orderB) {
            return a.title.localeCompare(b.title);
        }
        return orderA - orderB;
    });
}

/**
 * Determines the order of operations based on the method title
 */
function getOperationOrder(methodTitle: string): number {
    const title = methodTitle.toLowerCase();
    if (title.startsWith('create')) return 1;
    if (title.startsWith('read') || title.startsWith('get') || title.startsWith('list')) return 2;
    if (title.startsWith('update')) return 3;
    if (title.startsWith('upsert')) return 4;
    if (title.startsWith('delete')) return 5;
    if (title.startsWith('increment')) return 6;
    if (title.startsWith('decrement')) return 7;
    return 8; // Other operations
}
