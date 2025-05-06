import { redirect } from '@sveltejs/kit';

import { createInitSession, isLoggedIn } from '../(utils)/auth';

export const load = async ({ url, cookies }) => {
    const secret = url.searchParams.get('secret');
    const userId = url.searchParams.get('userId');
    if (secret && userId) {
        await createInitSession(userId, secret, cookies);
        redirect(307, '/init/tickets/create');
    } else if (await isLoggedIn()) {
        redirect(307, '/init/tickets/customize');
    }

    redirect(307, '/init');
};
