import { redirect } from '@sveltejs/kit';
import { isLoggedInGithub } from '../helpers.js';

export const load = async () => {
    if (await isLoggedInGithub()) {
        throw redirect(307, '/init/ticket/customize');
    }
};
