import { Platform, Service, versions } from '$lib/utils/references';
import { getService } from '$lib/utils/specs';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

const services = Object.values(Service);
const platforms = Object.values(Platform);

export const entries: EntryGenerator = () => {
    return ['cloud', ...(versions as string[])].flatMap((version) => {
        return platforms.flatMap((platform) => {
            return services.map((service) => {
                return { service, version, platform };
            });
        });
    });
};

export const load: PageServerLoad = async ({ params }) => {
    const { platform, service } = params;
    const version = params.version === 'cloud' ? '1.6.x' : params.version;
    if (!versions.includes(version)) error(404, 'Invalid version');
    if (!services.includes(service as Service)) error(404, 'Invalid service');
    if (!platforms.includes(platform as Platform)) error(404, 'Invalid platform');
    const data = await getService(version, platform, service);

    return data;
};
