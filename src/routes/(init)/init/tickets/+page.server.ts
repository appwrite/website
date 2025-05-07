import { redirect } from '@sveltejs/kit';

import { cookieKey } from '../(utils)/auth';
import { createInitServerClient } from '../(utils)/appwrite';
import { createNewTicket, getTicketByUser } from '../(utils)/tickets';

export const load = async ({ url, cookies, locals }) => {
    const secret = url.searchParams.get('secret');
    const userId = url.searchParams.get('userId');

    const { account } = createInitServerClient();

    if (!userId || !secret) redirect(307, '/init');

    const session = await account.createSession(userId, secret);

    await createNewTicket(locals.initUser);
    cookies.set(cookieKey, session.secret, {
        sameSite: 'strict',
        expires: new Date(session.expire),
        secure: true,
        path: '/'
    });

    redirect(307, '/init/tickets/create');
};
