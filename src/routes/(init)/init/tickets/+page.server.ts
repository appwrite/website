import { redirect } from '@sveltejs/kit';

import { cookieKey } from '../(utils)/auth';
import { createInitServerClient } from '../(utils)/appwrite';

export const load = async ({ url, cookies, locals }) => {
    const { account } = createInitServerClient();
    const secret = url.searchParams.get('secret');
    const userId = url.searchParams.get('userId');

    if (!userId || !secret) {
        throw new Error('Missing userId or secret');
    }

    const session = await account.createSession(userId, secret);

    cookies.set(cookieKey, session.secret, {
        sameSite: 'strict',
        expires: new Date(session.expire),
        secure: true,
        path: '/'
    });

    redirect(307, '/init/tickets/create');
};
