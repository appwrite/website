import type { EntryGenerator, PageServerLoad } from './$types';
import { getApi, getSchema, getService } from '$lib/utils/specs';
import { Platform, Service, versions } from '$lib/utils/references';
import { error } from '@sveltejs/kit';

// export const entries: EntryGenerator = () => {
// 	return ['cloud', ...(versions as string[])].flatMap((version) => {
// 		return platforms.flatMap((platform) => {
// 			return services.map((service) => {
// 				return { service, version, platform };
// 			});
// 		});
// 	});
// };

export const load: PageServerLoad = async ({ params }) => {
	const { model } = params;
	const version = params.version === 'cloud' ? '1.4.x' : params.version;
	const api = await getApi(version, 'server-nodejs');
	const schema = getSchema(model, api);

	return {
		schema
	};
};
