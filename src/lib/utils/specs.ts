import { error } from '@sveltejs/kit';
import { OpenAPIV3 } from 'openapi-types';
import { Platform, type ServiceValue } from './references';

export type SDKMethod = {
    'rate-limit': number;
    'rate-time': number;
    'rate-key': string | string[];
    id: string;
    title: string;
    description: string;
    demo: string;
    group?: string;
    parameters: Array<{
        name: string;
        description: string;
        required: boolean;
        type: string;
        example: string;
    }>;
    responses: Array<{
        code: number;
        contentType?: string;
        models?: SDKMethodModel[];
    }>;
    method: OpenAPIV3.HttpMethods;
    url: string;
};

type SDKMethodModel = {
    id: string;
    name: string;
};

type AppwriteOperationObject = OpenAPIV3.OperationObject & {
    'x-appwrite': {
        method: string;
        group?: string;
        weight: number;
        cookies: boolean;
        type: string;
        demo: string;
        edit: string;
        'rate-limit': number;
        'rate-time': number;
        'rate-key': string;
        scope: string;
        platforms: string[];
        packaging: boolean;
        methods?: AppwriteAdditionalMethod[];
    };
};

type AppwriteAdditionalMethod = {
    name: string;
    desc: string;
    auth: { Project: []; Key: [] };
    parameters: string[];
    required: string[];
    responses: { code: number; model: string }[];
    description: string;
    demo: string;
};

export type AppwriteSchemaObject = OpenAPIV3.SchemaObject & {
    'x-example': string;
};

export interface Property {
    name: string;
    items?: {
        type?: string;
        oneOf?: OpenAPIV3.ReferenceObject[];
    } & OpenAPIV3.ReferenceObject;
}

export const ModelType = {
    REST: 'REST',
    GRAPHQL: 'GraphQL'
} as const;

type ModelTypeType = keyof typeof ModelType;
type ModelTypeValue = (typeof ModelType)[ModelTypeType];

function getExamples(version: string) {
    switch (version) {
        case '0.15.x':
            return import.meta.glob('$appwrite/docs/examples/0.15.x/**/*.md', {
                query: '?raw',
                import: 'default'
            });
        case '1.0.x':
            return import.meta.glob('$appwrite/docs/examples/1.0.x/**/*.md', {
                query: '?raw',
                import: 'default'
            });
        case '1.1.x':
            return import.meta.glob('$appwrite/docs/examples/1.1.x/**/*.md', {
                query: '?raw',
                import: 'default'
            });
        case '1.2.x':
            return import.meta.glob('$appwrite/docs/examples/1.2.x/**/*.md', {
                query: '?raw',
                import: 'default'
            });
        case '1.3.x':
            return import.meta.glob('$appwrite/docs/examples/1.3.x/**/*.md', {
                query: '?raw',
                import: 'default'
            });
        case '1.4.x':
            return import.meta.glob('$appwrite/docs/examples/1.4.x/**/*.md', {
                query: '?raw',
                import: 'default'
            });
        case '1.5.x':
            return import.meta.glob('$appwrite/docs/examples/1.5.x/**/*.md', {
                query: '?raw',
                import: 'default'
            });
        case '1.6.x':
            return import.meta.glob('$appwrite/docs/examples/1.6.x/**/*.md', {
                query: '?raw',
                import: 'default'
            });
        case '1.7.x':
            return import.meta.glob('$appwrite/docs/examples/1.7.x/**/*.md', {
                query: '?raw',
                import: 'default'
            });
    }
}

function filterRequestBodyProperties(
    requestBody: OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject | undefined,
    allowedParameters: string[]
): OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject | undefined {
    if (!requestBody || '$ref' in requestBody) {
        return requestBody;
    }

    const filteredRequestBody = structuredClone(requestBody);
    if (filteredRequestBody.content?.['application/json']?.schema) {
        const schema = filteredRequestBody.content['application/json']
            .schema as OpenAPIV3.SchemaObject;

        if (schema.properties) {
            const filteredProperties: {
                [key: string]: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject;
            } = {};

            for (const [propertyName, propertySchema] of Object.entries(schema.properties)) {
                if (allowedParameters.includes(propertyName)) {
                    filteredProperties[propertyName] = propertySchema;
                }
            }

            schema.properties = filteredProperties;
            schema.required = schema.required?.filter((prop) => allowedParameters.includes(prop));
        }
    }

    return filteredRequestBody;
}

function* iterateAllMethods(
    api: OpenAPIV3.Document,
    service: string
): Generator<{
    method: OpenAPIV3.HttpMethods;
    value: OpenAPIV3.OperationObject | AppwriteOperationObject;
    url: string;
}> {
    for (const url in api.paths) {
        const methods = api.paths[url];
        if (methods?.get?.tags?.includes(service)) {
            yield { method: OpenAPIV3.HttpMethods.GET, value: methods.get, url };
        }
        if (methods?.post?.tags?.includes(service)) {
            if (
                methods?.post &&
                (!('x-appwrite' in methods.post) ||
                    !methods.post['x-appwrite'] ||
                    typeof methods.post['x-appwrite'] !== 'object' ||
                    !('methods' in methods.post['x-appwrite']))
            ) {
                yield { method: OpenAPIV3.HttpMethods.POST, value: methods.post, url };
            }
        }
        if (methods?.put?.tags?.includes(service)) {
            yield { method: OpenAPIV3.HttpMethods.PUT, value: methods.put, url };
        }
        if (methods?.patch?.tags?.includes(service)) {
            yield { method: OpenAPIV3.HttpMethods.PATCH, value: methods.patch, url };
        }
        if (methods?.delete?.tags?.includes(service)) {
            yield {
                method: OpenAPIV3.HttpMethods.DELETE,
                value: methods.delete,
                url
            };
        }
        if (
            methods?.post &&
            methods?.post?.tags?.includes(service) &&
            'x-appwrite' in methods.post &&
            methods.post['x-appwrite'] &&
            typeof methods.post['x-appwrite'] === 'object' &&
            'methods' in methods.post['x-appwrite']
        ) {
            const appwritePost = methods.post as AppwriteOperationObject;
            for (const additionalMethod of appwritePost['x-appwrite'].methods!) {
                yield {
                    method: OpenAPIV3.HttpMethods.POST,
                    value: {
                        ...methods.post,
                        summary: additionalMethod.desc,
                        description: additionalMethod.description,
                        requestBody: filterRequestBodyProperties(
                            methods.post.requestBody,
                            additionalMethod.parameters
                        ),
                        'x-appwrite': {
                            ...appwritePost['x-appwrite'],
                            method: additionalMethod.name,
                            demo: additionalMethod.demo
                        },
                        responses: {
                            ...appwritePost.responses,
                            [additionalMethod.responses[0].code]: {
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: additionalMethod.responses[0].model
                                        }
                                    }
                                }
                            }
                        }
                    },
                    url
                };
            }
        }
    }
}

function getParameters(operation: AppwriteOperationObject): SDKMethod['parameters'] {
    const parameters: ReturnType<typeof getParameters> = [];
    const requestBody = operation?.requestBody as OpenAPIV3.RequestBodyObject;
    const schemaJson = requestBody?.content['application/json']?.schema as OpenAPIV3.SchemaObject;
    const schemaMultipart = requestBody?.content['multipart/form-data']
        ?.schema as OpenAPIV3.SchemaObject;
    if (operation?.parameters) {
        for (const parameter of operation?.parameters as OpenAPIV3.ParameterObject[]) {
            const schema = parameter.schema as OpenAPIV3.SchemaObject;

            parameters.push({
                name: parameter.name,
                description: parameter.description ?? '',
                required: parameter.required ?? false,
                type: schema?.type ?? '',
                example: schema?.example
            });
        }
    }
    if (schemaJson?.properties) {
        for (const [key, value] of Object.entries(schemaJson.properties)) {
            const property = value as AppwriteSchemaObject;
            parameters.push({
                name: key,
                description: property.description ?? '',
                required: schemaJson?.required?.includes(key) ?? false,
                type: property.type ?? '',
                example: property['x-example'] ?? ''
            });
        }
    }
    if (schemaMultipart?.properties) {
        for (const [key, value] of Object.entries(schemaMultipart.properties)) {
            const property = value as AppwriteSchemaObject;
            parameters.push({
                name: key,
                description: property.description ?? '',
                required: schemaMultipart?.required?.includes(key) ?? false,
                type: property.type ?? '',
                example: property['x-example'] ?? ''
            });
        }
    }

    return parameters.sort((a, b) => {
        return a.required === b.required ? 0 : a.required ? -1 : 1;
    });
}

export function getSchema(id: string, api: OpenAPIV3.Document): OpenAPIV3.SchemaObject {
    const schema = api.components?.schemas?.[id] as OpenAPIV3.SchemaObject;
    if (schema) {
        return schema;
    }

    /**
     * It is better to show a `404` if no schema exists for a given `id`,
     * rather than a 500 internal server error which is, misleading in cases like this.
     *
     * It is quite possible that the user just wandered around here with a wrong docs link!
     */
    error(404, { message: `Not found` });
}

const specs = import.meta.glob(
    '$appwrite/app/config/specs/open-api3*-(client|server|console).json'
);

export async function getApi(version: string, platform: string): Promise<OpenAPIV3.Document> {
    const isClient = platform.startsWith('client-');
    const isServer = platform.startsWith('server-');
    const target = `/node_modules/@appwrite.io/repo/app/config/specs/open-api3-${version}-${
        isServer ? 'server' : isClient ? 'client' : 'console'
    }.json`;

    return specs[target]() as unknown as OpenAPIV3.Document;
}

const descriptions = import.meta.glob(
    '/src/routes/docs/references/[version]/[platform]/[service]/descriptions/*.md',
    {
        query: '?raw',
        import: 'default'
    }
);

export async function getDescription(service: string) {
    const target = `/src/routes/docs/references/[version]/[platform]/[service]/descriptions/${service}.md`;

    if (!(target in descriptions)) {
        throw new Error('Missing service description');
    }

    return descriptions[target]() as unknown as string;
}

export async function getService(
    version: string,
    platform: string,
    service: string
): Promise<{
    service: {
        name: ServiceValue;
        description: string;
    };
    methods: SDKMethod[];
}> {
    /**
     * Exceptions for Android SDK.
     */
    const isAndroidJava =
        platform === Platform.ClientAndroidJava || platform === Platform.ServerJava;
    const isAndroidKotlin =
        platform === Platform.ClientAndroidKotlin || platform === Platform.ServerKotlin;
    const isAndroid = isAndroidJava || isAndroidKotlin;
    const isAndroidServer = platform === Platform.ServerJava || platform === Platform.ServerKotlin;
    const api = await getApi(version, platform);

    const data: Awaited<ReturnType<typeof getService>> = {
        service: {
            name: service as ServiceValue,
            description: await getDescription(service)
        },
        methods: []
    };

    const examples = getExamples(version);

    if (!examples) {
        return data;
    }

    for (const { method, value, url } of iterateAllMethods(api, service)) {
        const operation = value as AppwriteOperationObject;
        const parameters = getParameters(operation);
        const responses: SDKMethod['responses'] = Object.entries(operation.responses ?? {}).map(
            (tuple) => {
                const [code, response] = tuple as [string, OpenAPIV3.ResponseObject];
                const models: SDKMethodModel[] = [];
                const schemas = response?.content?.['application/json']
                    ?.schema as OpenAPIV3.SchemaObject;
                if (code !== '204') {
                    if (schemas?.oneOf) {
                        schemas.oneOf.forEach((ref) => {
                            const schema = resolveReference(ref as OpenAPIV3.ReferenceObject, api);
                            models.push({
                                id: getIdFromReference(ref as OpenAPIV3.ReferenceObject),
                                name: schema.description ?? ''
                            });
                        });
                    } else {
                        if (schemas) {
                            const id = getIdFromReference(schemas as OpenAPIV3.ReferenceObject);
                            const schema = resolveReference(
                                schemas as OpenAPIV3.ReferenceObject,
                                api
                            );
                            models.push({
                                id,
                                name: schema?.description ?? ''
                            });
                        }
                    }
                }

                return {
                    code: Number(code),
                    contentType: response?.content ? Object.keys(response.content)[0] : undefined,
                    models
                };
            }
        );

        const path = isAndroid
            ? `/node_modules/@appwrite.io/repo/docs/examples/${version}/${
                  isAndroidServer ? 'server-kotlin' : 'client-android'
              }/${isAndroidJava ? 'java' : 'kotlin'}/${operation['x-appwrite']?.demo}`
            : `/node_modules/@appwrite.io/repo/docs/examples/${version}/${platform}/examples/${operation['x-appwrite']?.demo}`;
        if (!(path in examples)) {
            continue;
        }

        const demo = (await examples[path]()) as unknown as string;

        data.methods.push({
            id: operation['x-appwrite'].method,
            group: operation['x-appwrite'].group,
            demo: typeof demo === 'string' ? demo : '',
            title: operation.summary ?? '',
            description: operation.description ?? '',
            parameters: parameters ?? [],
            responses: responses ?? [],
            method,
            url,
            'rate-limit': operation['x-appwrite']['rate-limit'],
            'rate-time': operation['x-appwrite']['rate-time'],
            'rate-key': operation['x-appwrite']['rate-key']
        });
    }

    // Sort methods by weight from x-appwrite metadata
    data.methods.sort((a, b) => {
        const aPath = api.paths[a.url] as OpenAPIV3.PathItemObject;
        const bPath = api.paths[b.url] as OpenAPIV3.PathItemObject;
        const aMethod = a.method.toLowerCase() as Lowercase<OpenAPIV3.HttpMethods>;
        const bMethod = b.method.toLowerCase() as Lowercase<OpenAPIV3.HttpMethods>;
        const aWeight = (aPath?.[aMethod] as AppwriteOperationObject)?.['x-appwrite']?.weight ?? 0;
        const bWeight = (bPath?.[bMethod] as AppwriteOperationObject)?.['x-appwrite']?.weight ?? 0;
        return aWeight - bWeight;
    });

    return data;
}

export function getIdFromReference(reference: OpenAPIV3.ReferenceObject) {
    const id = reference?.$ref?.split('/')?.pop();
    if (!id) {
        throw new Error('Invalid reference');
    }
    return id;
}

export function resolveReference(
    reference: OpenAPIV3.ReferenceObject,
    api: OpenAPIV3.Document
): AppwriteSchemaObject {
    const id = reference.$ref.split('/').pop();
    if (!id) {
        throw new Error('Invalid reference');
    }
    const schema = api.components?.schemas?.[id] as AppwriteSchemaObject;
    if (schema) {
        return schema;
    }
    throw new Error("Schema doesn't exist");
}

export const getExample = (
    schema: OpenAPIV3.SchemaObject,
    api: OpenAPIV3.Document<object>,
    modelType: ModelTypeValue = ModelType.REST
): object => {
    if (schema.example) {
        if (modelType === ModelType.GRAPHQL) {
            const modifiedExample = JSON.parse(JSON.stringify(schema.example));
            return transformForGraphQL(modifiedExample);
        }
        return schema.example;
    }

    return {};
};

function transformForGraphQL(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(transformForGraphQL);
    }

    if (obj !== null && typeof obj === 'object') {
        const transformed: any = {};
        for (const [key, value] of Object.entries(obj)) {
            const newKey = key.replace('$', '_');
            transformed[newKey] = transformForGraphQL(value);
        }
        return transformed;
    }

    return obj;
}
