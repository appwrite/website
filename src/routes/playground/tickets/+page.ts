import { redirect } from '@sveltejs/kit';
import { auth, isLoggedIn } from '../helpers.js';
import { goto } from '$app/navigation';
import { BASE_URL } from './constants.js';

export const load = async ({ url }) => {
    const secret = url.searchParams.get('secret');
    const userId = url.searchParams.get('userId');
    if (secret && userId) {
        const response = await auth(userId, secret);

        if (response?.cookieFallback) {
            localStorage.setItem('cookieFallback', response.cookieFallback);
            goto(`${BASE_URL}/customize`);
        }
    } else if (await isLoggedIn()) {
        redirect(307, `${BASE_URL}/customize`);
    }
};
