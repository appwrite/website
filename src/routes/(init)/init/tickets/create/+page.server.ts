import { redirect } from '@sveltejs/kit';
import { createNewTicket, getTicketByUser } from '../../(utils)/tickets';

export const load = async ({ locals }) => {
    await createNewTicket(locals.initUser);

    redirect(307, '/init/tickets/customize');
};
