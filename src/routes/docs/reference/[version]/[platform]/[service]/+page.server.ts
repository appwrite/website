import type { EntryGenerator, PageServerLoad } from './$types';
import { getService } from '$lib/utils/specs';

const services = [
	'account',
	'avatars',
	'database',
	'functions',
	'health',
	'locale',
	'storage',
	'teams'
];
const versions = ['1.3.x'];
const platforms = ['client-web', 'client-flutter'];

export const prerender = true;
export const entries: EntryGenerator = () => {
	return versions.flatMap((version) => {
		return platforms.flatMap((platform) => {
			return services.map((service) => {
				return { service, version, platform };
			});
		});
	});
};

export const load: PageServerLoad = async ({ params }) => {
	const { version, platform, service } = params;
	const data = getService(version, platform, service);
	return data;
};
