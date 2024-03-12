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
        items?: Array<any>;
    }>;
};
interface Property {
    type: string;
    name: string;
    items?: {
      type?: string;
      oneOf?: OpenAPIV3.ReferenceObject[];
    } & OpenAPIV3.ReferenceObject;
    'x-example'?: any;
}

export const load: PageServerLoad = async ({ params }) => {
    const version = params.version === 'cloud' ? '1.4.x' : params.version;
    const api = await getApi(version, 'console-web');
    const schema = getSchema(params.model, api);
    const props = Object.entries(schema.properties ?? {});
    const model: Model = {
        title: schema.description as string,
        properties: props.map(([name, data]) => {
            const property = data as AppwriteSchemaObject;
            let learnMore = ' Learn more about the: ';
            switch (property.type) {
                case 'array': {
                    if (property.items.hasOwnProperty('$ref')) {
                        const arrayTypes = [((property.items as OpenAPIV3.ReferenceObject).$ref as string).split('/').pop()];
                        learnMore += arrayTypes?.map(item => ` [${getSchema(item as string, api).description} model](/docs/references/cloud/models/${item})`).join(', ') ?? '';
                    }
                    if (property.items && 'anyOf' in property.items) {
                        const arrayTypes = (property.items as OpenAPIV3.SchemaObject).anyOf?.map(
                            item => ((item as OpenAPIV3.ReferenceObject).$ref as string).split('/').pop());
                        learnMore += arrayTypes?.map(item => ` [${getSchema(item as string, api).description} model](/docs/references/cloud/models/${item})`).join(', ') ?? '';
                    }

                    return {
                        name,
                        type: property.type as string,
                        description: property.description as string + learnMore,
                        example: property,
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

    const example = generateExample(schema, api);

    return {
        model,
        example
    };
};

const generateExample = (schema: OpenAPIV3.SchemaObject, api: OpenAPIV3.Document<{}>): Object => {

    const properties = Object.keys(schema.properties ?? {}).map((key) =>{
        const name = key;
        const fields = schema.properties?.[key]; 
        return {
            name,
            ...fields
        }
    });

    const example = properties.reduce((carry, currentValue) => {
        const property = currentValue as Property;
        
        if (property.type === 'array') {
            // If it's an array type containing primatives
            if (property.items?.type){
                return {
                    ...carry,
                    [property.name]: [{
                        ...carry,
                        [property.name]: property['x-example']
                    }]
                }
            }

            if (property.items && 'anyOf' in property.items) {
                // default to first child type if multiple available
                const firstSchema = (property.items as unknown as AppwriteSchemaObject)?.anyOf?.[0];
                const schema = getSchema(getIdFromReference(firstSchema as OpenAPIV3.ReferenceObject), api)
                
                return {
                    ...carry,
                    [property.name]: generateExample(schema, api)
                };
            }

            // if an array of objects without child types
            const schema = getSchema(getIdFromReference(property.items as OpenAPIV3.ReferenceObject), api);
            return {
                ...carry,
                [property.name]: [generateExample(schema, api)]
            }
        }

        // If it's an object type, but not in an array.
        if (property.type === 'object') {
            if (property.items?.oneOf){
                // default to first child type if multiple available
                const schema = getSchema(getIdFromReference(property.items.oneOf[0] as OpenAPIV3.ReferenceObject), api);
                return {
                    ...carry,
                    [property.name]: generateExample(schema, api)
                }
            }

            // object without child types
            const schema = getSchema(getIdFromReference(property.items as OpenAPIV3.ReferenceObject), api);
            return {
                ...carry,
                [property.name]: [generateExample(schema, api)]
            }
        }

        return {
            ...carry,
            [property.name]: property['x-example']
        }
    }, {});
    return example;
}