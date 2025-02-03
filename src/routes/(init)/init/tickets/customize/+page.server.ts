import { redirect } from '@sveltejs/kit';

import { getTicketDocByUser } from '../../(utils)/tickets';
import { getTicketContributions } from '../../(utils)/contributions.server';
import { getInitUser } from '../../(utils)/auth';

export const load = async () => {
    const user = await getInitUser();

    if (!user.github) {
        redirect(307, '/init');
    }

    const ticket = await getTicketDocByUser(user);

    return {
        ticket,
        user,
        streamed: {
            contributions: getTicketContributions(ticket.$id)
        }
    };
};
