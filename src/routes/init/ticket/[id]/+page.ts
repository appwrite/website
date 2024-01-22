import { getTicketById, getTicketContributions } from '$routes/init/helpers.js';
import { error } from '@sveltejs/kit';

export const ssr = true;

export const load = async ({ params, fetch }) => {
    const { id } = params;
    try {
        const ticket = await getTicketById(id, fetch);

        return {
            ticket,
            streamed: {
                contributions: getTicketContributions(ticket.$id, fetch)
            }
        };
    } catch (e) {
        console.log(e);
        throw error(404, 'Ticket not found');
    }
};
