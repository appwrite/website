import { getTicketDocById } from '../../(utils)/tickets';
import { error } from '@sveltejs/kit';
import { getTicketContributions } from '../../(utils)/contributions';

export const ssr = true;

export const load = async ({ params, fetch }) => {
    const { id } = params;
    try {
        const ticket = await getTicketDocById(id);

        return {
            ticket,
            streamed: {
                contributions: getTicketContributions(ticket.$id, fetch)
            }
        };
    } catch (e) {
        console.error(e);
        error(404, 'Ticket not found');
    }
};
