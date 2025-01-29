import { getTicketById, getTicketContributions } from '$lib/utils/init';
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
        console.error(e);
        error(404, 'Ticket not found');
    }
};
