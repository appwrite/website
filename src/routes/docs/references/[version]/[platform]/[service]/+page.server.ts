import {
    Platform,
    resolveVersion,
    Service,
    type ServiceValue,
    versions
} from '$lib/utils/references';
import { getApi, getAvailablePlatforms, getAvailableServices, getService } from './specs';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

const services = Object.values(Service);
const platforms = Object.values(Platform);

export const entries: EntryGenerator = async () => {
    const combos: Array<{ service: string; version: string; platform: string }> = [];
    for (const version of ['cloud', ...(versions as string[])]) {
        const resolved = resolveVersion(version);
        for (const platform of getAvailablePlatforms(resolved)) {
            const documented = getAvailableServices(await getApi(resolved, platform));
            for (const service of services) {
                if (documented.has(service)) {
                    combos.push({ service, version, platform });
                }
            }
        }
    }
    return combos;
};

export const load: PageServerLoad = async ({ params }) => {
    const { platform, service } = params;
    const version = resolveVersion(params.version);

    if (!versions.includes(version)) error(404, 'Invalid version');
    if (!platforms.includes(platform as Platform)) error(404, 'Invalid platform');
    if (!services.includes(service as ServiceValue)) error(404, 'Invalid service');

    return {
        ...(await getService(version, platform, service)),
        platforms: getAvailablePlatforms(version)
    };
};
