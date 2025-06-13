import { redirect } from '@sveltejs/kit';

import { cookieKey } from '../../(utils)/auth';
import { createInitServerClient } from '../../(utils)/appwrite';

export const load = async ({ url, cookies, locals }) => {
    const secret = url.searchParams.get('secret');
    const userId = url.searchParams.get('userId');

    const { account } = createInitServerClient();

    if (userId && secret) {
        const session = await account.createSession(userId, secret);
        cookies.set(cookieKey, session.secret, {
            httpOnly: true,
            secure: true,
            path: '/'
        });

        redirect(307, '/init/tickets/create');
    }

    redirect(307, '/init/tickets/customize');
};
