import { BANNER_KEY } from './api/banner/constants.js';

export const prerender = true;

export const load = async ({ cookies }) => {
    return { showBanner: cookies.get(BANNER_KEY) !== 'true' };
};
