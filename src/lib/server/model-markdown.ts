import {
    getApi,
    getSchema,
    getExample,
    ModelType,
    type AppwriteSchemaObject,
    type Property
} from '../../routes/docs/references/[version]/[platform]/[service]/specs';
import type { OpenAPIV3 } from 'openapi-types';

/**
 * Generates markdown content for a model reference page from OpenAPI schema data
 */
export async function generateModelMarkdown(
    versionParam: string,
    modelName: string
): Promise<string | null> {
    try {
        const version = versionParam === 'cloud' ? '1.8.x' : versionParam;
        const api = await getApi(version, 'console-web');
        const schema = getSchema(modelName, api);

        const props = Object.entries(schema.properties ?? {});
        const title = (schema.description as string) || modelName;

        let markdown = `# ${title}\n\n`;
        if (schema.description) {
            markdown += `${schema.description}\n\n`;
        }

        markdown += `## Properties\n\n`;
        markdown += `| Name | Type | Description |\n`;
        markdown += `|------|------|-------------|\n`;

        for (const [name, data] of props) {
            const property = data as AppwriteSchemaObject & Property;
            const { type, description } = formatProperty(property, api, versionParam);

            // Escape pipe characters and newlines for markdown table
            const escapedDescription = description.replace(/\|/g, '\\|').replace(/\n/g, ' ').trim();

            markdown += `| ${name} | ${type} | ${escapedDescription} |\n`;
        }

        markdown += `\n## Example\n\n`;

        // Generate example for each model type
        for (const type of Object.values(ModelType)) {
            const example = getExample(schema, api, type);
            markdown += `### ${type}\n\n`;
            markdown += `\`\`\`json\n`;
            markdown += `${JSON.stringify(example, null, 2)}\n`;
            markdown += `\`\`\`\n\n`;
        }

        return markdown;
    } catch {
        return null;
    }
}

/**
 * Formats a property for markdown display, handling types and related models
 */
function formatProperty(
    property: AppwriteSchemaObject & Property,
    api: OpenAPIV3.Document,
    versionParam: string
): { type: string; description: string } {
    let type = property.type as string;
    let description = property.description || '';
    let relatedModels: string[] = [];

    // Handle array types with references
    if (property.type === 'array' && property.items) {
        if ('$ref' in property.items) {
            const refModel = (property.items.$ref as string).split('/').pop();
            if (refModel) {
                const refSchema = getSchema(refModel, api);
                relatedModels.push(
                    `[${refSchema.description} model](/docs/references/${versionParam}/models/${refModel})`
                );
                type = `array<${refModel}>`;
            }
        } else if ('anyOf' in property.items) {
            const refs = (property.items as OpenAPIV3.SchemaObject).anyOf?.map((item) =>
                ((item as OpenAPIV3.ReferenceObject).$ref as string).split('/').pop()
            );
            if (refs && refs.length > 0) {
                relatedModels = refs
                    .map((item) => {
                        if (!item) return '';
                        const refSchema = getSchema(item, api);
                        return `[${refSchema.description} model](/docs/references/${versionParam}/models/${item})`;
                    })
                    .filter(Boolean);
                type = 'array';
            }
        }
    }

    // Handle object types with references
    if (property.type === 'object' && property.items) {
        const itemsObj = property.items as OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject;
        if ('$ref' in itemsObj) {
            const refModel = (itemsObj.$ref as string).split('/').pop();
            if (refModel) {
                const refSchema = getSchema(refModel, api);
                relatedModels.push(
                    `[${refSchema.description} model](/docs/references/${versionParam}/models/${refModel})`
                );
                type = refModel;
            }
        } else {
            const schemaObj = itemsObj as OpenAPIV3.SchemaObject;
            if ('oneOf' in schemaObj && schemaObj.oneOf) {
                const refs = (schemaObj.oneOf as OpenAPIV3.ReferenceObject[]).map(
                    (item: OpenAPIV3.ReferenceObject) => (item.$ref as string).split('/').pop()
                );
                if (refs && refs.length > 0) {
                    relatedModels = refs
                        .map((item: string | undefined) => {
                            if (!item) return '';
                            const refSchema = getSchema(item, api);
                            return `[${refSchema.description} model](/docs/references/${versionParam}/models/${item})`;
                        })
                        .filter(Boolean);
                }
            }
        }
    }

    // Combine description with related models
    if (relatedModels.length > 0) {
        const relatedText = `Can be one of: ${relatedModels.join(', ')}`;
        description = description ? `${description} ${relatedText}` : relatedText;
    }

    return { type, description };
}
