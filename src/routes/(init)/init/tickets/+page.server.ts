import { redirect } from '@sveltejs/kit';

import { createInitSession, getInitUser, isLoggedIn } from '../(utils)/auth';
import { getTicketByUser } from '../(utils)/tickets';

export const load = async ({ url, cookies }) => {
    const secret = url.searchParams.get('secret');
    const userId = url.searchParams.get('userId');
    const user = await getInitUser();
    const ticket = await getTicketByUser(user);

    if (secret && userId && !ticket) {
        await createInitSession(userId, secret, cookies);
        redirect(307, '/init/tickets/create');
    } else if (await isLoggedIn()) {
        redirect(307, '/init/tickets/customize');
    }

    redirect(307, '/init');
};
