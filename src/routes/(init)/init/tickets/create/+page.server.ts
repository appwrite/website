import { redirect } from '@sveltejs/kit';
import { getInitUser } from '../../(utils)/auth';
import { createNewTicket, getTicketByUser } from '../../(utils)/tickets';

export const load = async () => {
    const user = await getInitUser();

    await createNewTicket(user);

    redirect(307, '/init/tickets/customize');
};
