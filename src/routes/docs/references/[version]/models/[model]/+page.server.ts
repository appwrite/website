import {
    getApi,
    getSchema,
    type AppwriteSchemaObject,
    getExample,
    type Property,
    ModelType
} from '$lib/utils/specs';
import type { OpenAPIV3 } from 'openapi-types';
import type { PageServerLoad } from './$types';

type Model = {
    title: string;
    properties: Array<{
        name: string;
        type: string;
        description: string;
        items?: Array<any>;
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
                    if (property.items.hasOwnProperty('$ref')) {
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
                                    const schema = getSchema(item as string, api);
                                    const modelLink = `[${schema.description} model](/docs/references/${version}/models/${item})`;
                                    return modelLink;
                                })
                                .join(', ') ?? ''
                    };
                }
                case 'object': {
                    let arrayTypes;
                    if (property.items?.hasOwnProperty('$ref')) {
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
                                    const schema = getSchema(item as string, api);
                                    const modelLink = `[${schema.description} model](/docs/references/${version}/models/${item})`;
                                    return modelLink;
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
