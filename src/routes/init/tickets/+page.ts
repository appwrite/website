import { redirect } from '@sveltejs/kit';
import { isLoggedIn } from '../helpers.js';

export const load = async () => {
    if (await isLoggedIn()) {
        throw redirect(307, '/init/tickets/customize');
    }
};
