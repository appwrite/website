import SwaggerParser from '@readme/openapi-parser';
import specs from '$lib/specs/open-api3-1.3.x-client.json';
import type { PageServerLoad } from './$types';

type SDKMethod = {
	id: string;
	title: string;
	description: string;
	parameters: Array<{
		name: string;
		description: string;
		required: boolean;
		type: string;
		example: string;
	}>;
};

export const load: PageServerLoad = async ({ params }) => {
	const data: {
		service?: {
			name: string;
			description: string;
		},
		methods: SDKMethod[];
	} = {
		methods: []
	}
	try {
		const parser = new SwaggerParser();
		const api = await parser.bundle(specs as unknown as string);

		const service = api.tags?.find((n) => n.name === params.service);
		data.service = {
			name: service?.name ?? '',
			description: service?.description ?? ''
		}

		for (const url in api.paths) {
			const methods = api.paths[url];
			for (const method in methods) {
				if (methods[method].tags.includes(params.service)) {
					const parameters =
						method === 'get'
							? methods[method].parameters?.map((n) => {
									return {
										name: n.name,
										description: n.description,
										required: n.required,
										type: n.schema?.type,
										example: n.schema?.example
									};
							  })
							: Object.entries(
									methods[method].requestBody?.content['application/json']?.schema?.properties ?? {}
							  ).map(([key, value]) => {
									return {
										name: key,
										description: value.description,
										required:
											methods[method].requestBody?.content[
												'application/json'
											].schema.required.includes(key),
										type: value.type,
										example: value['x-example']
									};
							  });
					data.methods.push({
						id: methods[method].operationId,
						title: methods[method].summary,
						description: methods[method].description,
						parameters: parameters ?? []
					});
				}
			}
		}
		// console.log(data);
	} catch (error) {
		console.log(error);
	}

	return data;
};
