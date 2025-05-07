import { redirect } from '@sveltejs/kit';

import { cookieKey } from '../(utils)/auth';
import { createInitServerClient } from '../(utils)/appwrite';
import { createNewTicket, getTicketByUser } from '../(utils)/tickets';

export const load = async ({ url, cookies, locals }) => {
    const secret = url.searchParams.get('secret');
    const userId = url.searchParams.get('userId');

    const createTicket = await createNewTicket(locals.initUser);

    if (userId || secret) {
        const session = await locals.account.createSession(userId!, secret!);

        cookies.set(cookieKey, session.secret, {
            sameSite: 'strict',
            expires: new Date(session.expire),
            secure: true,
            path: '/'
        });

        redirect(307, '/init/tickets/customize');
    } else if (!createTicket) {
        redirect(307, '/init/tickets/customize');
    } else {
        redirect(307, '/init');
    }
};
