import { getTicketDocById, getTicketDocByUser } from '../../(utils)/tickets';
import { error } from '@sveltejs/kit';
import { getTicketContributions } from '../../(utils)/contributions';
import { getInitUser } from '../../(utils)/auth';

export const ssr = true;

export const load = async ({ params }) => {
    const { id } = params;
    try {
        const user = await getInitUser();

        const userTicket = await getTicketDocByUser(user);
        const isCurrentUsersTicket = userTicket.$id === id;

        console.log(user);

        console.log('isCurrentUsersTicket', isCurrentUsersTicket);

        const ticket = await getTicketDocById(id);

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
