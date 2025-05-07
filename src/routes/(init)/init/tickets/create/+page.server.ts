import { redirect } from '@sveltejs/kit';
import { createNewTicket, getTicketByUser } from '../../(utils)/tickets';

export const load = async ({ locals }) => {
    const ticket = await createNewTicket(locals.initUser);

    if (!ticket) {
        redirect(307, '/init');
    }

    redirect(307, '/init/tickets/customize');
};
