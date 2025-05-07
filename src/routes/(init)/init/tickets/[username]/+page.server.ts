import { getTicketDocByUsername, getTicketByUser } from '../../(utils)/tickets';
import { error, redirect } from '@sveltejs/kit';
import { getTicketContributions } from '../../(utils)/contributions';

export const ssr = true;

export const load = async ({ params, locals }) => {
    try {
        const isCurrentUsersTicket = locals.initUser.github?.login === params.username;
        const ticket = await getTicketDocByUsername(params.username);

        return {
            ticket,
            isCurrentUsersTicket,
            streamed: {
                contributions: getTicketContributions(ticket.$id)
            }
        };
    } catch (e) {
        console.error(e);
        error(404, 'Ticket not found');
    }
};
