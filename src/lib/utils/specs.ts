import { OpenAPIV3 } from 'openapi-types';
import { Platform, type Service } from './references';

export type SDKMethod = {
    'rate-limit': number;
    'rate-time': number;
    'rate-key': string;
    id: string;
    title: string;
    description: string;
    demo: string;
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
    };
};

export type AppwriteSchemaObject = OpenAPIV3.SchemaObject & {
    'x-example': string;
};

function getExamples(version: string) {
    switch (version) {
        case '0.15.x':
            return import.meta.glob('$appwrite/docs/examples/0.15.x/**/*.md', {
                as: 'raw'
            });
        case '1.0.x':
            return import.meta.glob('$appwrite/docs/examples/1.0.x/**/*.md', {
                as: 'raw'
            });
        case '1.1.x':
            return import.meta.glob('$appwrite/docs/examples/1.1.x/**/*.md', {
                as: 'raw'
            });
        case '1.2.x':
            return import.meta.glob('$appwrite/docs/examples/1.2.x/**/*.md', {
                as: 'raw'
            });
        case '1.3.x':
            return import.meta.glob('$appwrite/docs/examples/1.3.x/**/*.md', {
                as: 'raw'
            });
        case '1.4.x':
            return import.meta.glob('$appwrite/docs/examples/1.4.x/**/*.md', {
                as: 'raw'
            });
        case '1.5.x':
            return import.meta.glob('$appwrite/docs/examples/1.5.x/**/*.md', {
                as: 'raw'
            });
    }
}

function* iterateAllMethods(
    api: OpenAPIV3.Document,
    service: string
): Generator<{ method: OpenAPIV3.HttpMethods; value: OpenAPIV3.OperationObject; url: string }> {
    for (const url in api.paths) {
        const methods = api.paths[url];
        if (methods?.get?.tags?.includes(service)) {
            yield { method: OpenAPIV3.HttpMethods.GET, value: methods.get, url };
        }
        if (methods?.post?.tags?.includes(service)) {
            yield { method: OpenAPIV3.HttpMethods.POST, value: methods.post, url };
        }
        if (methods?.put?.tags?.includes(service)) {
            yield { method: OpenAPIV3.HttpMethods.PUT, value: methods.put, url };
        }
        if (methods?.patch?.tags?.includes(service)) {
            yield { method: OpenAPIV3.HttpMethods.PATCH, value: methods.patch, url };
        }
        if (methods?.delete?.tags?.includes(service)) {
            yield { method: OpenAPIV3.HttpMethods.DELETE, value: methods.delete, url };
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
    throw new Error("Schema doesn't exist");
}

const specs = import.meta.glob(
    '$appwrite/app/config/specs/open-api3*-(client|server|console).json',
    {
        as: 'raw'
    }
);
async function getSpec(version: string, platform: string) {
    const isClient = platform.startsWith('client-');
    const isServer = platform.startsWith('server-');
    const target = `/node_modules/@appwrite.io/repo/app/config/specs/open-api3-${version}-${
        isServer ? 'server' : isClient ? 'client' : 'console'
    }.json`;
    return specs[target]();
}

export async function getApi(version: string, platform: string): Promise<OpenAPIV3.Document> {
    const raw = await getSpec(version, platform);
    const api = JSON.parse(raw);
    return api;
}

const descriptions = import.meta.glob(
    '/src/routes/docs/references/[version]/[platform]/[service]/descriptions/*.md',
    {
        as: 'raw'
    }
);

export async function getDescription(service: string): Promise<string> {
    const target = `/src/routes/docs/references/[version]/[platform]/[service]/descriptions/${service}.md`;

    if (!(target in descriptions)) {
        throw new Error('Missing service description');
    }
    return descriptions[target]();
}

export async function getService(
    version: string,
    platform: string,
    service: string
): Promise<{
    service: {
        name: Service;
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
    const tag = api.tags?.find((n) => n.name === service);

    const data: Awaited<ReturnType<typeof getService>> = {
        service: {
            name: tag?.name as Service,
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
              }/${isAndroidJava ? 'java' : 'kotlin'}/${operation['x-appwrite'].demo}`
            : `/node_modules/@appwrite.io/repo/docs/examples/${version}/${platform}/examples/${operation['x-appwrite'].demo}`;
        if (!(path in examples)) {
            continue;
        }
        data.methods.push({
            id: operation['x-appwrite'].method,
            demo: await examples[path](),
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
