import { getTicketById } from '$routes/init/helpers.js';
import { error } from '@sveltejs/kit';

export const ssr = true;

export const load = async ({ params, fetch }) => {
    const { id } = params;
    try {
        const ticket = await getTicketById(id, fetch);

        return {
            ticket
        };
    } catch {
        throw error(404, 'Ticket not found');
    }
};
