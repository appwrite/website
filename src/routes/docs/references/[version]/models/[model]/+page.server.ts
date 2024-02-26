import { getApi, getIdFromReference, getSchema, type AppwriteSchemaObject } from '$lib/utils/specs';
import type { OpenAPIV3 } from 'openapi-types';
import type { PageServerLoad } from './$types';

type Model = {
    title: string;
    properties: Array<{
        name: string;
        type: string;
        description: string;
        example: string | boolean | number | object | Array<unknown>;
        items?: Array<string>;
    }>;
};

export const load: PageServerLoad = async ({ params }) => {
    const version = params.version === 'cloud' ? '1.4.x' : params.version;
    const api = await getApi(version, 'console-web');
    const schema = getSchema(params.model, api);
    const props = Object.entries(schema.properties ?? {});
    const model: Model = {
        title: schema.description as string,
        properties: props.map(([name, data]) => {
            const property = data as AppwriteSchemaObject;
            switch (property.type) {
                case 'array': {
                    const items = [];
                    const propItems = property.items as AppwriteSchemaObject;
                    if (Array.isArray(propItems.anyOf)) {
                        items.push(
                            ...propItems.anyOf.map((ref) =>
                                getIdFromReference(ref as OpenAPIV3.ReferenceObject)
                            )
                        );
                    } else {
                        // items.push(getIdFromReference(propItems as unknown as OpenAPIV3.ReferenceObject));
                    }
                    return {
                        name,
                        type: property.type as string,
                        description: property.description as string,
                        example: '',
                        items:
                            (property.items as AppwriteSchemaObject)?.anyOf?.map((ref) => {
                                const item = getIdFromReference(ref as OpenAPIV3.ReferenceObject);
                                return item;
                            }) ?? []
                    };
                }

                default:
                    return {
                        name,
                        type: property.type as string,
                        description: property.description as string,
                        example: property['x-example']
                    };
            }
        })
    };

    const example = model.properties.reduce<Record<string, unknown>>((carry, property) => {
        carry[property.name] = property.example;

        return carry;
    }, {});
    return {
        model,
        example
    };
};
