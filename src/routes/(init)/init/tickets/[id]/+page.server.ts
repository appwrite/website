import { getTicketDocById } from '../../(utils)/tickets';
import { error } from '@sveltejs/kit';
import { getTicketContributions } from '../../(utils)/contributions.server';

export const ssr = true;

export const load = async ({ params }) => {
    const { id } = params;
    try {
        const ticket = await getTicketDocById(id);

        return {
            ticket,
            streamed: {
                contributions: getTicketContributions(ticket.$id)
            }
        };
    } catch (e) {
        console.error(e);
        error(404, 'Ticket not found');
    }
};
