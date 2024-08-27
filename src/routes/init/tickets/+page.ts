import { redirect } from '@sveltejs/kit';
import { auth, isLoggedIn } from '../helpers.js';
import { goto } from '$app/navigation';

export const load = async ({ url }) => {
    const secret = url.searchParams.get('secret');
    const userId = url.searchParams.get('userId');
    if (secret && userId) {
        const response = await auth(userId, secret);

        if (response?.cookieFallback) {
            localStorage.setItem('cookieFallback', response.cookieFallback);
            goto('/init/tickets/customize');
        }
    } else if (await isLoggedIn()) {
        redirect(307, '/init/tickets/customize');
    }
};
