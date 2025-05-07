import { redirect } from '@sveltejs/kit';

import { createInitSession, isLoggedIn } from '../(utils)/auth';
import { getTicketByUser } from '../(utils)/tickets';

export const load = async ({ url, cookies, locals }) => {
    const secret = url.searchParams.get('secret');
    const userId = url.searchParams.get('userId');

    const ticket = await getTicketByUser(locals.initUser);

    if (secret && userId && !ticket) {
        await createInitSession(userId, secret, cookies);
        redirect(307, '/init/tickets/create');
    } else if (await isLoggedIn()) {
        redirect(307, '/init/tickets/customize');
    }

    redirect(307, '/init');
};
