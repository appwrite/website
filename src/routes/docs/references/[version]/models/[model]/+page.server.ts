import {
    getApi,
    getSchema,
    type AppwriteSchemaObject,
    getExample,
    type Property,
    ModelType
} from '../../[platform]/[service]/specs';
import type { OpenAPIV3 } from 'openapi-types';
import type { PageServerLoad } from './$types';

type Model = {
    title: string;
    properties: Array<{
        name: string;
        type: string;
        description: string;
        items?: Array<unknown>;
        relatedModels?: string;
    }>;
};

export const load: PageServerLoad = async ({ params }) => {
    const version = params.version === 'cloud' ? '1.8.x' : params.version;
    const api = await getApi(version, 'console-web');
    const schema = getSchema(params.model, api);
    const props = Object.entries(schema.properties ?? {});
    const model: Model = {
        title: schema.description as string,
        properties: props.map(([name, data]) => {
            const property = data as AppwriteSchemaObject & Property;
            switch (property.type) {
                case 'array': {
                    let arrayTypes;
                    if (property.items?.['$ref']) {
                        arrayTypes = [(property.items.$ref as string).split('/').pop()];
                    }

                    if (property.items && 'anyOf' in property.items) {
                        arrayTypes = (property.items as OpenAPIV3.SchemaObject).anyOf?.map((item) =>
                            ((item as OpenAPIV3.ReferenceObject).$ref as string).split('/').pop()
                        );
                    }

                    return {
                        name,
                        type: property.type as string,
                        description: property.description as string,
                        relatedModels:
                            arrayTypes
                                ?.map((item) => {
                                    return formatRelatedModelLink(item as string, api, version);
                                })
                                .join(', ') ?? ''
                    };
                }
                case 'object': {
                    let arrayTypes;
                    if (property.items && '$ref' in property.items) {
                        arrayTypes = [(property.items?.$ref as string).split('/').pop()];
                    }

                    if (property.items && 'oneOf' in property.items) {
                        arrayTypes = property.items.oneOf?.map((item) =>
                            (item.$ref as string).split('/').pop()
                        );
                    }
                    return {
                        name,
                        type: property.type as string,
                        description: property.description as string,
                        relatedModels:
                            arrayTypes
                                ?.map((item) => {
                                    return formatRelatedModelLink(item as string, api, version);
                                })
                                .join(', ') ?? ''
                    };
                }
                default:
                    return {
                        name,
                        type: property.type as string,
                        description: property.description as string
                    };
            }
        })
    };

    const examples = [];
    for (const type of Object.values(ModelType)) {
        examples.push({
            type,
            example: getExample(schema, api, type)
        });
    }

    return {
        model,
        examples
    };
};

function formatRelatedModelLink(modelId: string, api: OpenAPIV3.Document, version: string): string {
    const schema = api.components?.schemas?.[modelId] as AppwriteSchemaObject | undefined;
    if (!schema?.description) {
        return `\`${modelId}\``;
    }

    return `[${schema.description} model](/docs/references/${version}/models/${modelId})`;
}
