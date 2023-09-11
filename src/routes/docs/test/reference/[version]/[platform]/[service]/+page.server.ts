import type { PageServerLoad } from './$types';
import { getService } from '$lib/utils/specs';

// export const prerender = true;
// export const entries: EntryGenerator = () => {
// 	return [{ service: 'account' }, { service: 'avatars' }];
// };

export const load: PageServerLoad = async ({ params }) => {
	const service = params?.service ?? 'account';
	const version = params?.version ?? '1.3.x';
	const platform = params?.platform ?? 'client-web';
	const data = getService(version, platform, service)
	return data;
};
