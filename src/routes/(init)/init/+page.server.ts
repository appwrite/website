import { getInitUser } from './(utils)/auth';
import { getTicketDocByUser, getUserHasTicket } from './(utils)/tickets';

export const prerender = false;

export const load = async () => {
    const user = await getInitUser();

    if (!user.github?.login) return;
    const ticket = await getTicketDocByUser(user);

    return {
        ticketId: ticket.$id,
        claimed: await getUserHasTicket(user.github.login)
    };
};
