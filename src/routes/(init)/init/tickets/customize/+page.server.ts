import { redirect } from '@sveltejs/kit';

import { getTicketDocByUser } from '../../(utils)/tickets';
import { getTicketContributions } from '../../(utils)/contributions';
import { getInitUser } from '../../(utils)/auth';

export const load = async ({ fetch }) => {
    const user = await getInitUser();

    console.log({ user });

    if (!user.github) {
        redirect(307, '/init');
    }

    const ticket = await getTicketDocByUser(user);

    return {
        ticket,
        user,
        streamed: {
            contributions: getTicketContributions(ticket.$id, fetch)
        }
    };
};
